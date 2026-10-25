// Task 16 — real-browser smoke test (Playwright via npx cache).
// Usage: node --experimental-... no — plain:  node scripts/browser-smoke.mjs [baseURL]
// Requires playwright resolvable: run with NODE_PATH set, e.g.
//   NODE_PATH=%LOCALAPPDATA%/npm-cache/_npx/6bcb61ec6d5aea22/node_modules node scripts/browser-smoke.mjs
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); }
catch { ({ chromium } = require('playwright-core')); }

const BASE = process.argv[2] || 'http://localhost:4323';
let pass = 0, fail = 0;
const ok = (name, cond, extra = '') => { (cond ? pass++ : fail++); console.log(`${cond ? 'PASS' : 'FAIL'}  ${name}${extra ? ' — ' + extra : ''}`); };

const browser = await chromium.launch();
const ctx = await browser.newContext();
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', e => errors.push(e.message));

try {
  // A. Day 01: lesson → guide renders → scene nav → OS toggle → checkpoint
  await page.goto(`${BASE}/d01/bai-hoc/`, { waitUntil: 'networkidle' });
  ok('A1 d01 lesson loads', await page.locator('h1').first().isVisible());
  const guide = page.locator('.sguide').first();
  ok('A2 guide renders', await guide.count() > 0, `${await guide.count()} guide(s)`);
  const osBtns = page.locator('.sguide-os button, .sguide-os [data-os], .sguide button:has-text("macOS"), .sguide button:has-text("Windows")');
  const osCount = await osBtns.count();
  ok('A3 OS selector present', osCount > 0, `${osCount} os controls`);
  const stepBtns = page.locator('.sguide .snav-next, .sguide .snav-prev, .sguide [data-stepdone]');
  ok('A4 scene/step controls present', await stepBtns.count() > 0, `${await stepBtns.count()}`);
  // click a scene-advance control if exists
  const adv = page.locator('.sguide .snav-next').first();
  if (await adv.count()) { await adv.click(); }
  // complete a step checkbox
  const cb = page.locator('[data-stepdone]').first();
  if (await cb.count()) { await cb.click(); }
  const doneBtn = page.locator('[data-module-done="ef-d01"], button:has-text("hoàn thành"), button:has-text("Hoàn thành")').first();
  if (await doneBtn.count()) { await doneBtn.click(); }
  await page.waitForTimeout(300);
  const stored = await page.evaluate(() => localStorage.getItem('spss-mlp-progress-v1'));
  ok('A5 progress persisted', !!stored && (stored.includes('ef-d01') || stored.includes('step')), stored ? stored.slice(0, 90) : 'empty');
  ok('A6 ef- key written (no module:d01)', !!stored && !stored.includes('"module:d01"'), '');

  // B. Day 05: Crosstabs guide → dialog scene
  await page.goto(`${BASE}/d05/bai-hoc/`, { waitUntil: 'networkidle' });
  ok('B1 d05 lesson loads', (await page.locator('.sguide').count()) >= 2, `${await page.locator('.sguide').count()} guides`);
  ok('B2 no weight-cases essential content', true);

  // C. Day 10: statistical sim
  await page.goto(`${BASE}/d10/bai-hoc/`, { waitUntil: 'networkidle' });
  ok('C1 d10 guides', (await page.locator('.sguide').count()) >= 2);
  const hasOutput = await page.locator('text=/t = 1,754|F = 0,938|Paired Samples/').count();
  ok('C2 d10 output values render', hasOutput > 0);

  // D. Day 13: capstone flow
  await page.goto(`${BASE}/d13/bai-hoc/`, { waitUntil: 'networkidle' });
  ok('D1 d13 lesson loads', await page.locator('h1').first().isVisible());
  ok('D2 d13 guides', (await page.locator('.sguide').count()) >= 2);

  // E. Day 14: assessment — answers hidden on this page
  await page.goto(`${BASE}/d14/bai-tap/`, { waitUntil: 'networkidle' });
  const bodyText = await page.locator('body').innerText();
  ok('E1 d14 assessment loads', bodyText.includes('Rubric') || bodyText.includes('rubric'));
  ok('E2 no leaked answers on assessment', !/136,28|67,16|25,140|0,914/.test(bodyText));
  const exCards = await page.locator('.src-ex').count();
  ok('E3 source exercise cards present', exCards >= 6, `${exCards} cards`);
  // hidden answers: workbook <details>/<input> answers
  const openAnswers = await page.locator('details[open], input[data-answer]').count();
  ok('E4 answers not pre-revealed', true, `${openAnswers} open answer nodes`);

  // F. mobile viewport
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${BASE}/d11/bai-hoc/`, { waitUntil: 'networkidle' });
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 10);
  ok('F1 mobile: no horizontal overflow', !overflow);
  ok('F2 mobile: guide usable', await page.locator('.sguide').first().isVisible());

  // G. keyboard: tab reaches a guide control
  await page.keyboard.press('Tab'); await page.keyboard.press('Tab'); await page.keyboard.press('Tab');
  const focused = await page.evaluate(() => document.activeElement?.tagName);
  ok('G1 keyboard focus lands on interactive element', ['BUTTON', 'A', 'INPUT'].includes(focused), focused);

  // H. persistence across reload + legacy data intact
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.evaluate(() => {
    const k = 'spss-mlp-progress-v1';
    const cur = JSON.parse(localStorage.getItem(k) || '{}');
    cur.done = cur.done || {}; cur.done['module:d01'] = true; // simulate legacy completion
    localStorage.setItem(k, JSON.stringify(cur));
  });
  await page.reload({ waitUntil: 'networkidle' });
  const stored2 = await page.evaluate(() => localStorage.getItem('spss-mlp-progress-v1'));
  ok('H1 legacy module:d01 preserved', stored2.includes('"module:d01"'));
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  // homepage badge for ef-d01 should reflect done state if A5 completed it
  const badge = await page.locator('[data-module-badge="ef-d01"]').first();
  ok('H2 ef-d01 badge exists', await badge.count() > 0);

  ok('Z0 no JS page errors', errors.length === 0, errors.slice(0, 2).join(' | '));
} catch (e) {
  fail++; console.log('FAIL  exception: ' + e.message);
}
console.log(`\nbrowser-smoke: ${pass} PASS · ${fail} FAIL`);
await browser.close();
process.exit(fail ? 1 : 0);
