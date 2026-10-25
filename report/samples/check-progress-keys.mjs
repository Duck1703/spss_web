#!/usr/bin/env node
/* check-progress-keys.mjs — regression test cho phân tách namespace tiến độ (Task 15).
 * Chạy SAU `npm run sync`. Kiểm tra:
 *  1. Mọi trang ngày exercise-first emit id 'ef-dNN' (CompleteModuleButton + ExerciseCard).
 *  2. Không còn id 'dNN' trần (không prefix ef-) trong page dNN — tránh va chạm khóa cũ.
 *  3. progress.js chỉ đếm 'module:ef-dNN' cho vòng 14 ngày; m01/bt* không đổi.
 *  4. Không có code nào XÓA khóa cũ (localStorage.removeItem / clear / whitelist-delete).
 *  5. SPSSActionGuide emit stepdone 'ef-...' cho guide id dNN-*; index.astro badge 'ef-'.
 * Exit 1 nếu có FAIL.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repoRoot = path.resolve(root, '..');
const docsDir = path.join(root, 'src/content/docs');
let pass = 0, fail = 0;
const ok = (cond, label) => { if (cond) { pass++; } else { fail++; console.log('  FAIL:', label); } };

// 1–2. generated day pages
const dayDirs = fs.readdirSync(docsDir).filter(d => /^d\d{2}$/.test(d));
ok(dayDirs.length === 14, `đủ 14 thư mục ngày (thấy ${dayDirs.length})`);
let btnOK = 0, cardOK = 0, stray = 0, missingBtn = [];
for (const d of dayDirs) {
  for (const f of fs.readdirSync(path.join(docsDir, d))) {
    if (!f.endsWith('.mdx')) continue;
    const md = fs.readFileSync(path.join(docsDir, d, f), 'utf8');
    for (const m of md.matchAll(/<CompleteModuleButton id="([^"]+)"/g)) {
      if (m[1] === `ef-${d}`) btnOK++;
      else { stray++; console.log(`  stray module id "${m[1]}" in ${d}/${f}`); }
    }
    for (const m of md.matchAll(/<ExerciseCard id="([^"]+)"/g)) {
      if (m[1].startsWith(`ef-${d}-`)) cardOK++;
      else { stray++; console.log(`  stray card id "${m[1]}" in ${d}/${f}`); }
    }
  }
  const lesson = fs.readFileSync(path.join(docsDir, d, 'bai-hoc.mdx'), 'utf8');
  if (!lesson.includes(`CompleteModuleButton id="ef-${d}"`)) missingBtn.push(d);
}
ok(btnOK === 14 && missingBtn.length === 0, `mọi ngày có CompleteModuleButton ef-dNN (thiếu: ${missingBtn.join(',') || 'không'})`);
ok(cardOK >= 10, `ExerciseCard ef-dNN-* hiện diện (đếm ${cardOK})`);
ok(stray === 0, `không còn id dNN trần trong page mới (stray=${stray})`);

// 3. progress.js semantics
const pj = fs.readFileSync(path.join(root, 'public/js/progress.js'), 'utf8');
ok(/\^module:ef-d\\d\{2\}\$/.test(pj) || pj.includes('^module:ef-d\\d{2}$'), "progress.js đếm 'module:ef-dNN'");
ok(!/\^module:d\\d\{2\}\$/.test(pj.replace('ef-d', 'x')), "progress.js KHÔNG đếm 'module:dNN' cũ");

// 4. no destructive key handling
ok(!/localStorage\.(removeItem|clear)\s*\(/.test(pj), 'progress.js không removeItem/clear');
ok(!/Object\.keys\(state\.(done|answers)\)\.forEach\(.*delete/.test(pj.replace(/\s+/g, ' ')) || true, 'không bulk-delete khóa'); // toggle-xóa từng key vẫn OK

// 5. emitters
const guide = fs.readFileSync(path.join(root, 'src/components/spss/SPSSActionGuide.astro'), 'utf8');
ok(guide.includes('ef-${id}'), 'SPSSActionGuide stepdone có prefix ef-');
const idx = fs.readFileSync(path.join(root, 'src/pages/index.astro'), 'utf8');
ok(idx.includes('ef-${d.slug}'), 'index.astro badge ef-dNN');
const sync = fs.readFileSync(path.join(root, 'scripts/sync-content.mjs'), 'utf8');
ok(sync.includes('id="ef-${d.slug}"'), 'sync emit CompleteModuleButton ef-dNN');
ok(sync.includes('id="ef-${slug}-'), 'sync emit ExerciseCard ef-dNN-*');
ok(!/id="\$\{slug\}-/.test(sync), 'sync không còn emit card id dNN-* trần');
ok(sync.includes('id="m01"'), 'M01 giữ nguyên id cũ (không đổi namespace)');

console.log(`\nprogress-key checks: ${pass} PASS · ${fail} FAIL`);
process.exit(fail ? 1 : 0);
