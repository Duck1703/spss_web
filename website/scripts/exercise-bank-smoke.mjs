/**
 * exercise-bank-smoke.mjs — Playwright test Kho bài tập (Task 16.2 §11, B v2 markup).
 * NODE_PATH=<thư mục có playwright> node scripts/exercise-bank-smoke.mjs [base]
 */
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const BASE = process.argv[2] || 'http://localhost:4323';
let pass = 0, fail = 0, jsErrors = [];
const ok = (c, m) => { c ? pass++ : fail++; console.log((c ? 'PASS  ' : 'FAIL  ') + m); };

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const p = await ctx.newPage();
p.on('pageerror', e => jsErrors.push(e.message));
const visRows = () => p.locator('.exercise-row:visible').count();

// A. Hub
await p.goto(BASE + '/kho-bai-tap/', { waitUntil: 'networkidle' });
ok(await p.locator('.exercise-row').count() === 60, 'A1 hub: 60 dòng bài tập');
ok(await p.locator('.exb-search').isVisible(), 'A2 ô tìm kiếm hiển thị');
ok(await p.locator('.exb-f[data-f="cat"]').isVisible() && await p.locator('.exb-f[data-f="level"]').isVisible()
   && await p.locator('.exb-f[data-f="tier"]').isVisible() && await p.locator('.exb-f[data-f="status"]').isVisible(), 'A3 đủ 4 bộ lọc');
ok((await p.locator('.catbtn[data-src="P1"]').textContent()).includes('43')
   && (await p.locator('.catbtn[data-src="P2"]').textContent()).includes('15')
   && (await p.locator('.catbtn[data-src="supp"]').textContent()).includes('2'), 'A4 tab nhóm 43+15+2 đúng nhãn');
ok(await visRows() === 15, 'A5 trang 1 hiển thị 15 dòng (pagination)');
ok((await p.locator('#exb-count').textContent()).includes('60/60'), 'A6 counter 60/60');

// B. Search
await p.fill('.exb-search', 'p1-q10');
await p.waitForTimeout(150);
ok(await visRows() === 1, 'B1 search "p1-q10" → 1 dòng');
await p.fill('.exb-search', 'bmi');
await p.waitForTimeout(150);
ok(await visRows() >= 1, 'B2 search "bmi" → ≥1 dòng');
await p.fill('.exb-search', '');

// C. Filters
await p.click('.catbtn[data-src="P2"]');
await p.waitForTimeout(150);
ok(await visRows() === 15, 'C1 tab Bài 2 → 15 dòng');
ok((await p.locator('#exb-count').textContent()).includes('15/60'), 'C1b counter 15/60');
await p.click('.catbtn[data-src="supp"]');
await p.waitForTimeout(150);
ok(await visRows() === 2, 'C1c tab Bổ sung → 2 dòng');
await p.click('.catbtn[data-src=""]');
await p.selectOption('.exb-f[data-f="cat"]', 'ttest');
await p.waitForTimeout(150);
const nT = await visRows();
ok(nT >= 3 && nT <= 8, `C2 lọc T-tests → ${nT} dòng (hợp lý)`);
await p.selectOption('.exb-f[data-f="cat"]', '');
await p.selectOption('.exb-f[data-f="tier"]', 'advanced');
await p.waitForTimeout(150);
ok(await visRows() >= 1, 'C3 lọc Nâng cao → ≥1 dòng');
await p.selectOption('.exb-f[data-f="tier"]', '');
await p.selectOption('.exb-f[data-f="level"]', 'Beginner');
await p.waitForTimeout(150);
const nB = await visRows();
ok(nB === 15 && (await p.locator('#exb-count').textContent()).match(/^\d+\/60/)[0] !== '60/60', 'C4 lọc Cơ bản → trang đầy đủ');
await p.click('#exb-reset');
await p.waitForTimeout(150);
ok((await p.locator('#exb-count').textContent()).includes('60/60'), 'C5 reset → 60/60');

// D. Detail page
await p.goto(BASE + '/kho-bai-tap/p1-q10/', { waitUntil: 'networkidle' });
ok((await p.locator('.exercise-identity .labelbadge').textContent()).trim() === 'P1-Q10', 'D1 detail: đúng ID');
ok(await p.locator('text=Bai thuc hanh SDH P1.pdf').count() >= 1, 'D2 detail: ref PDF + trang');
ok(await p.locator('.fileline code, .exmeta code').first().isVisible(), 'D3 dataset hiển thị');
ok(await p.locator('details summary').count() >= 2, 'D4 gợi ý collapsible ≥2');
ok(await p.locator('[data-answer^="exercise:P1-Q10"]').count() >= 1, 'D5 ô nhập kết quả');
ok(await p.locator('a[href="/d06/bai-hoc/"]').count() >= 1, 'D6 link bài học Ngày 06');
ok(await p.locator('a[href="/d06/dap-an/"]').count() >= 1, 'D7 link đáp án (route riêng)');
const detailText = await p.locator('.sl-markdown-content, main, body').first().innerText();
ok(!/BMI trung bình.{0,40}\d{2},\d/.test(detailText.replace(/\n/g,' ')), 'D8 không lộ số đáp án BMI');
ok(await p.locator('.sguide, .sim-frame, .smw').first().isVisible(), 'D9 mô phỏng SPSS hiển thị');

// E. Deferred/advanced exercise marked honestly
await p.goto(BASE + '/kho-bai-tap/p2-q15/', { waitUntil: 'networkidle' });
ok(await p.locator('text=ANSWER_NOT_VERIFIED').count() >= 1, 'E1 P2-Q15 đánh dấu ANSWER_NOT_VERIFIED');

// F. Progress: mark done → persists after reload → hub status
await p.goto(BASE + '/kho-bai-tap/p1-q10/', { waitUntil: 'networkidle' });
await p.click('[data-done="exercise:P1-Q10"]');
await p.waitForTimeout(200);
await p.reload({ waitUntil: 'networkidle' });
ok(await p.locator('[data-done="exercise:P1-Q10"].is-done').count() === 1, 'F1 done persist sau reload');
const stored = await p.evaluate(() => JSON.parse(localStorage.getItem('spss-mlp-progress-v1')).done['exercise:P1-Q10']);
ok(stored === true, 'F2 done key exercise:P1-Q10 trong localStorage');
await p.goto(BASE + '/kho-bai-tap/', { waitUntil: 'networkidle' });
ok((await p.locator('[data-exstatus="P1-Q10"]').textContent()).includes('Đã làm'), 'F3 hub hiển thị "Đã làm"');
await p.selectOption('.exb-f[data-f="status"]', 'done');
await p.waitForTimeout(150);
ok(await visRows() === 1, 'F4 lọc Đã làm → đúng 1 dòng');
await p.selectOption('.exb-f[data-f="status"]', '');
// cleanup — không phá progress của user khác (test env riêng, nhưng giải phóng key đã tạo)
await p.goto(BASE + '/kho-bai-tap/p1-q10/', { waitUntil: 'networkidle' });
await p.click('[data-done="exercise:P1-Q10"]');

// G. Lesson day-block + mobile
await p.goto(BASE + '/d05/bai-hoc/', { waitUntil: 'networkidle' });
ok(await p.locator('text=Bài tập trong Kho').count() >= 1, 'G1 d05 có khối Bài tập trong Kho');
ok(await p.locator('a.exb-mini').count() >= 3, 'G2 d05 ≥3 mini-cards luyện thêm');
ok(await p.locator('a.exb-mini[href^="/kho-bai-tap/"]').count() >= 3, 'G3 mini-cards link detail pages');
await ctx.close();
const m = await browser.newContext({ viewport: { width: 375, height: 700 } });
const mp = await m.newPage();
await mp.goto(BASE + '/kho-bai-tap/', { waitUntil: 'networkidle' });
ok(await mp.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 2), 'H1 mobile: không overflow ngang');
ok(await mp.locator('.exercise-row').count() === 60, 'H2 mobile: 60 dòng render');
await mp.goto(BASE + '/kho-bai-tap/p2-q14/', { waitUntil: 'networkidle' });
ok(await mp.locator('.lessonhead').isVisible(), 'H3 mobile: detail page dùng được');
await mp.goto(BASE + '/kho-bai-tap/', { waitUntil: 'networkidle' });
await mp.fill('.exb-search', 'zzzz-khong-co');
await mp.waitForTimeout(150);
ok(await mp.locator('#exb-empty').isVisible(), 'H4 mobile: empty state hiển thị');

ok(jsErrors.length === 0, 'Z0 không lỗi JS' + (jsErrors.length ? ' — ' + jsErrors[0] : ''));
await browser.close();
console.log(`\nexercise-bank-smoke: ${pass} PASS · ${fail} FAIL`);
process.exit(fail ? 1 : 0);
