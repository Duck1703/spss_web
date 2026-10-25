/**
 * check-scene-data.mjs — kiểm tra scenes.json có khớp dataset canonical.
 * Đọc trực tiếp CSV thật (datasets/) → tính số liệu kỳ vọng → đối chiếu mọi
 * bảng output & dòng bệnh nhân mô phỏng trong visual-guides.
 * Chạy: node website/scripts/check-scene-data.mjs   (từ root repo hoặc website/)
 * Exit 1 nếu có lệch — chặn regression số liệu giả.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');           // D:\spss
const VG = path.resolve(HERE, '..', 'public', 'visual-guides');

/* ---------- đọc CSV ---------- */
function readCsv(p) {
  const t = fs.readFileSync(p, 'utf8').replace(/^﻿/, '');
  const lines = t.trim().split(/\r?\n/);
  const cols = lines[0].split(',');
  return lines.slice(1).map((l) => {
    const v = l.split(',');
    return Object.fromEntries(cols.map((c, i) => [c, v[i] ?? '']));
  });
}
const raw = readCsv(path.join(ROOT, 'datasets/synthetic-raw/clinic_bp_v1_raw.csv'));
const clean = readCsv(path.join(ROOT, 'datasets/cleaned/clinic_bp_v1_clean.csv'));
const byId = (rows) => Object.fromEntries(rows.map((r) => [r.patient_id, r]));
const RAW = byId(raw); const CLEAN = byId(clean);

/* ---------- số liệu kỳ vọng từ dataset ---------- */
const freq = (rows, col) => rows.reduce((m, r) => { m[r[col]] = (m[r[col]] || 0) + 1; return m; }, {});
const EX = {
  rawN: raw.length,                       // 161
  cleanN: clean.length,                   // 160
  rawSex: freq(raw, 'sex_code'),          // {1:76, 2:83, 9:1, F:1}
  cleanSex: freq(clean, 'sex_code'),      // {1:76, 2:83, '':1}
};
const numStats = (rows, col) => {
  const v = rows.map((r) => r[col]).filter((x) => x !== '' && x !== 'F' && x !== '9').map(Number);
  return { N: v.length, min: Math.min(...v), max: Math.max(...v) };
};
['age_years', 'bmi', 'sbp_baseline', 'sbp_followup', 'adherence_score'].forEach((c) => {
  EX['raw.' + c] = numStats(raw, c);
  EX['clean.' + c] = numStats(clean, c);
});

let fails = 0, checks = 0;
const bad = (where, msg) => { fails++; console.log(`  ✗ ${where}: ${msg}`); };
const ok = (n) => { checks += n; };

/* ---------- audit helpers ---------- */
// Dòng bệnh nhân trong grid phải khớp CSV: file day01/day02 → clean; day03 → raw.
function auditGridRows(dayFile, sceneCtx, cols, rows) {
  const src = sceneCtx === 'clean' ? CLEAN : RAW;
  rows.forEach((row) => {
    const pid = row[0] && row[0].label;
    if (!/^P\d{3}$/.test(pid || '')) return;
    const rec = src[pid];
    if (!rec) { bad(sceneCtx, `patient_id ${pid} không tồn tại trong CSV`); return; }
    cols.forEach((c, i) => {
      const cell = row[i]; // cols[i] ↔ row[i] — cột đầu là patient_id
      if (!cell || cell.label === undefined || cell.label === '…') return;
      const want = rec[c];
      if (want === undefined) return; // cột không có trong CSV (vd indicator)
      const got = String(cell.label);
      if (want === '' && (got === '.' || got === '')) return;
      // ô hiển thị value label (View→Value Labels) thay vì mã gốc — chấp nhận
      const LABELS = { sex_code: { '1': 'Nữ', '2': 'Nam' }, treatment_group: { A: 'Điều trị chuẩn', B: 'Chuẩn + hỗ trợ' } };
      if (LABELS[c] && LABELS[c][want] === got) return;
      if (got !== want) bad(sceneCtx, `${pid}.${c}: mô phỏng "${got}" ≠ dataset "${want}"`);
    });
    ok(1);
  });
}

// Bảng Frequencies sex_code: nhận diện theo cột "Frequency"
// dataState: 'raw' (chưa sửa) | 'work' (đã F→1, 9→missing, chưa xóa trùng) | 'clean'
const FREQ_EXP = {
  raw: { map: { '1': 76, '2': 83, '9': 1, 'F': 1 }, valid: 161, grand: 161 },
  work: { map: { '1': 77, '2': 83 }, valid: 160, grand: 161, missing: { '9': 1 } },
  clean: { map: { 'Nữ': 76, 'Nam': 83 }, valid: 159, grand: 160, missing: { 'System': 1, '9': 1 } },
};
function auditFreqSex(sceneCtx, cols, rows, dataState) {
  if (!cols || !cols.includes('Frequency')) return;
  const isLabelled = rows.some((r) => /Nữ|Nam/.test(String(r[0])));
  const ctx = dataState || (isLabelled ? 'clean' : 'raw');
  const exp = FREQ_EXP[ctx];
  if (!exp) { bad(sceneCtx, `dataState '${ctx}' không có expected freq`); return; }
  rows.forEach((r) => {
    const label = String(r[0]).replace(/^(Valid|Missing)\s+/, '').trim();
    const missing = /^Missing\s/.test(String(r[0]));
    const table = missing ? exp.missing || {} : exp.map;
    if (table[label] !== undefined && Number(r[1]) !== table[label]) {
      bad(sceneCtx, `freq ${label}: mô phỏng ${r[1]} ≠ dataset ${table[label]} (${ctx})`);
    }
    if (label === 'Total' && r[1]) {
      const n = Number(r[1]);
      if (n !== exp.valid && n !== exp.grand) bad(sceneCtx, `freq Total ${r[1]} ∉ {valid:${exp.valid}, grand:${exp.grand}} (${ctx})`);
    }
    ok(1);
  });
}

// Bảng Descriptives: cột N, Minimum, Maximum phải khớp CSV
function auditDesc(sceneCtx, cols, rows, ctx) {
  if (!cols || !(cols.includes('Minimum') && cols.includes('Maximum'))) return;
  const cell = (x) => (x && x.label !== undefined ? x.label : x);
  rows.forEach((r) => {
    const v = cell(r[0]);
    const e = EX[ctx + '.' + v];
    if (!e) return;
    if (Number(cell(r[1])) !== e.N) bad(sceneCtx, `${v} N: ${cell(r[1])} ≠ ${e.N} (${ctx})`);
    if (Number(cell(r[2])) !== e.min) bad(sceneCtx, `${v} min: ${cell(r[2])} ≠ ${e.min}`);
    if (Number(cell(r[3])) !== e.max) bad(sceneCtx, `${v} max: ${cell(r[3])} ≠ ${e.max}`);
    ok(3);
  });
}

// Forbidden tokens — tên thuốc/nhãn bịa ra
const FORBIDDEN = [/Amlodipine/i, /Valsartan/i, /Losartan/i];

/* ---------- duyệt tất cả scenes ---------- */
/* Task 13: visual-guides/dayNN mới dùng dataset .sav nguồn (exercises/) thay vì clinic_bp CSV.
 * File có "audit": "external-sav" → chỉ kiểm tra cấu trúc + callout + forbidden tokens;
 * số liệu kiểm chứng riêng bằng Python (curriculum/exercise-verified-stats.md). */
['day01', 'day02', 'day03', 'day04', 'day05', 'day06'].forEach((day) => {
  const file = path.join(VG, day, 'scenes.json');
  const meta = JSON.parse(fs.readFileSync(file, 'utf8'));
  const guides = meta.guides;
  const external = meta.audit === 'external-sav';
  const ctx = day === 'day03' ? 'raw' : 'clean';
  Object.entries(guides).forEach(([gid, g]) => {
    // cấu trúc bắt buộc
    ['purpose', 'expected'].forEach((k) => { if (!g[k]) bad(gid, `thiếu '${k}'`); });
    if (!Array.isArray(g.scenes) || !g.scenes.length) bad(gid, 'không có scene');
    ok(3);
    const text = JSON.stringify(g);
    FORBIDDEN.forEach((re) => { if (re.test(text)) bad(gid, `chứa giá trị bịa: ${re}`); });
    ok(1);

    g.scenes.forEach((s, si) => {
      const w = `${gid}[${si}]`;
      const sctx = s.dataState || ctx; // scene có thể ghi đè trạng thái dữ liệu
      if (!external) {
        if (s.grid && s.grid.kind !== 'var') auditGridRows(day, sctx, s.grid.cols, s.grid.rows);
        (s.tables || []).forEach((t) => { auditFreqSex(w, t.cols, t.rows, sctx); auditDesc(w, t.cols, t.rows, sctx === 'work' ? 'raw' : sctx); });
      }
      // callout phải có điểm đánh dấu trong scene
      (s.callouts || []).forEach((c) => {
        const sj = JSON.stringify(s);
        const re = new RegExp(`"(hot|tabHot|menubarHot|menuHotN|hotRow|colHot)":\\s*${c.n}\\b|"hot"\\s*:\\s*${c.n}\\b|"tabHot"\\s*:\\s*${c.n}\\b|"menubarHot"\\s*:\\s*${c.n}\\b`);
        if (!re.test(sj)) bad(w, `callout ${c.n} không có control nào mang hot=${c.n}`);
        ok(1);
      });
    });
  });
});

console.log(`\n${checks} checks, ${fails} FAIL`);
process.exit(fails ? 1 : 0);
