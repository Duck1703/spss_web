/**
 * check-exercise-bank.mjs — kiểm chứng phủ sóng Kho bài tập (Task 16.2 §10).
 * Chạy SAU `npm run sync` (đọc src/content/docs/kho-bai-tap/).
 * Khẳng định: đúng 43×P1 + 15×P2 + 2 phụ; mọi id có trang; không trùng;
 * dataset/difficulty/tier/status đầy đủ; đáp án thiếu được đánh dấu; không public file nguồn.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const DOCS = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src', 'content', 'docs');
const inv = JSON.parse(fs.readFileSync(path.join(ROOT, 'curriculum', 'exercise-inventory.json'), 'utf8')).exercises;

let pass = 0, fail = 0;
const ok = (cond, msg) => { cond ? pass++ : fail++; console.log((cond ? 'PASS  ' : 'FAIL  ') + msg); };

// ---- 1. Đếm & id ----
const re = /^P([12])-Q(\d+)$/;
const p1 = inv.filter(e => /^P1-Q\d+$/.test(e.id)).map(e => e.id);
const p2 = inv.filter(e => /^P2-Q\d+$/.test(e.id)).map(e => e.id);
const supp = inv.filter(e => !re.test(e.id)).map(e => e.id);
ok(p1.length === 43, `43 câu P1 (thực tế ${p1.length})`);
ok(p2.length === 15, `15 câu P2 (thực tế ${p2.length})`);
ok(supp.length === 2, `2 mục phụ không tính trong 58 (thực tế ${supp.length}: ${supp.join(', ')})`);
const all = [...p1, ...p2];
ok(new Set(all).size === 58, 'không trùng id trong 58 câu');
const n1 = p1.map(e => +e.slice(4)).sort((a, b) => a - b);
ok(n1.every((n, i) => n === i + 1), 'P1-Q01..Q43 liền mạch');
const n2 = p2.map(e => +e.slice(4)).sort((a, b) => a - b);
ok(n2.every((n, i) => n === i + 1), 'P2-Q01..Q15 liền mạch');

// ---- 2. Trang chi tiết tồn tại & đầy đủ trường ----
const exDir = path.join(DOCS, 'kho-bai-tap');
ok(fs.existsSync(exDir), 'thư mục kho-bai-tap/ được generate');
const pages = fs.readdirSync(exDir).filter(f => f.endsWith('.mdx'));
ok(pages.length === 60, `60 trang chi tiết (thực tế ${pages.length})`);
let missing = [], noMeta = [], noDataset = [], noOps = [], noStatus = [];
for (const q of inv) {
  const f = path.join(exDir, q.id.toLowerCase() + '.mdx');
  if (!fs.existsSync(f)) { missing.push(q.id); continue; }
  const t = fs.readFileSync(f, 'utf8');
  if (re.test(q.id) && (!t.includes(q.ref) || !/trang \d+/.test(t))) noMeta.push(q.id); // mục phụ không bắt buộc ref/trang
  if (!q.dataset) noDataset.push(q.id);
  if (re.test(q.id) && !t.includes('Thao tác SPSS') && !t.includes('Gợi ý')) noOps.push(q.id);
  if (!/data-done="exercise:/.test(t) || !/data-answer="exercise:/.test(t)) noStatus.push(q.id);
}
ok(missing.length === 0, 'mọi exercise có trang' + (missing.length ? ' — thiếu: ' + missing.join(',') : ''));
ok(noMeta.length === 0, 'mọi trang có ref+trang nguồn' + (noMeta.length ? ' — ' + noMeta.join(',') : ''));
ok(noDataset.length === 0, 'mọi exercise có dataset mapped' + (noDataset.length ? ' — ' + noDataset.join(',') : ''));
ok(noOps.length === 0, 'mọi trang có hướng dẫn thao tác/gợi ý' + (noOps.length ? ' — ' + noOps.join(',') : ''));
ok(noStatus.length === 0, 'mọi trang có nút hoàn thành + ô nhập' + (noStatus.length ? ' — ' + noStatus.join(',') : ''));

// ---- 3. Hub ----
const hub = fs.readFileSync(path.join(DOCS, 'kho-bai-tap.md'), 'utf8');
ok((hub.match(/class="exercise-row"/g) || []).length === 60, 'hub list 60 thẻ');
const rowP1 = (hub.match(/class="exercise-row"[^>]*data-src="P1"/g) || []).length;
const rowP2 = (hub.match(/class="exercise-row"[^>]*data-src="P2"/g) || []).length;
const rowSupp = (hub.match(/class="exercise-row"[^>]*data-src="supp"/g) || []).length;
ok(hub.includes('Bài 1 — Phần 1') && hub.includes('Bài 2 — Phần 2') && rowP1 === 43 && rowP2 === 15, `nhãn nhóm 43+15 đúng (P1=${rowP1}, P2=${rowP2})`);
ok(hub.includes('Bổ sung') && rowSupp === 2, `mục phụ tách riêng (supp=${rowSupp})`);
ok(hub.includes('data-f="cat"') && hub.includes('data-f="tier"') && hub.includes('data-f="status"') && hub.includes('exb-search'), 'đủ 4 bộ lọc + ô tìm kiếm');

// ---- 4. Đáp án thiếu được đánh dấu; không lộ số đáp án trên trang bài ----
const AK = {};
for (const n of Array.from({ length: 14 }, (_, i) => 'd' + String(i + 1).padStart(2, '0'))) {
  const dir = fs.readdirSync(path.join(ROOT, 'track-14day')).find(d => d.startsWith(`day-${n.slice(1)}-`));
  AK[n] = dir ? fs.readFileSync(path.join(ROOT, 'track-14day', dir, 'answer-key.md'), 'utf8') : '';
}
let noFlag = [], leakWarn = [];
for (const q of inv) {
  const days = (q.day || '').split('+').map(s => s.trim()).filter(d => /^d\d{2}$/.test(d));
  const verified = days.some(n => AK[n] && AK[n].includes(q.id));
  const f = path.join(exDir, q.id.toLowerCase() + '.mdx');
  if (!fs.existsSync(f)) continue;
  const t = fs.readFileSync(f, 'utf8');
  if (!verified && !t.includes('ANSWER_NOT_VERIFIED')) noFlag.push(q.id);
  // d14 assessment: trang chi tiết không được chứa link dap-an trực tiếp đến số đáp án? — vẫn cho phép link /dap-an/ route chuẩn.
  if (/dap-an\/.{0,80}(=|,)\s*[\d.,]{3,}/s.test(t)) leakWarn.push(q.id);
}
ok(noFlag.length === 0, 'bài chưa verify được đánh dấu ANSWER_NOT_VERIFIED' + (noFlag.length ? ' — ' + noFlag.join(',') : ''));
ok(leakWarn.length === 0, 'không số đáp án dạng = N trên trang chi tiết' + (leakWarn.length ? ' — ' + leakWarn.join(',') : ''));

// ---- 5. Không public file nguồn ----
const distDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
let leakedSrc = 0;
if (fs.existsSync(distDir)) {
  const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).forEach(e => {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(sav|pdf)$/i.test(e.name)) { leakedSrc++; console.log('   ! file nguồn trong dist:', p); }
  });
  walk(distDir);
}
ok(leakedSrc === 0, 'không .sav/.pdf nguồn trong dist/');

// ---- 6. Per-day practice block ----
let noBlock = [];
for (const n of Array.from({ length: 14 }, (_, i) => 'd' + String(i + 1).padStart(2, '0'))) {
  const f = path.join(DOCS, n, 'bai-hoc.mdx');
  const t = fs.existsSync(f) ? fs.readFileSync(f, 'utf8') : '';
  if (!t.includes('Bài tập trong Kho')) noBlock.push(n);
}
ok(noBlock.length === 0, 'mọi ngày có khối "Bài tập trong Kho"' + (noBlock.length ? ' — ' + noBlock.join(',') : ''));

console.log(`\nexercise-bank: ${pass} PASS · ${fail} FAIL`);
process.exit(fail ? 1 : 0);
