# TASK 20 — FINAL PRODUCTION ACCEPTANCE (Phase E)
## Independent end-to-end QA of the SPSS learning platform

**Baseline tested:** `e6be437` (Task 19) → defect fix committed as part of this review.
**Method:** static `dist/` crawl + live Playwright/Chromium interaction on `python -m http.server 8378` serving the production build.

---

## Verdict

**TECHNICAL_ACCEPT_WITH_LIMITATIONS**

- `REAL_SPSS_VERIFICATION_PENDING` — every guide/simulation is `BROWSER_SIMULATION_VERIFIED`; SPSS itself was not run (`NOT_RUN` labels preserved honestly).
- `HUMAN_LEARNING_PILOT_PENDING` — flows verified mechanically, not by a novice user.

---

## 1–3. Route verification

- **116 pages built** (115 `index.html` + homepage), `npm run sync` → 114 generated files, 0 errors.
- Crawled all 116 routes live: **0 load failures, 0 duplicate-H1 pages, 0 literal-markup leaks, 0 broken internal links, 0 JS errors.**
- 0 `.sav` / 0 `.pdf` in `dist/` — third-party sources remain local-only.

## 4. 14-day acceptance matrix

| Day | Guides | Checkpoints | Dataset panel | Workbook | Answer key | Verdict |
|---|---|---|---|---|---|---|
| d01 Open file | 4 | 4 | ✓ | 200 | 200 | PASS |
| d02 Frequencies | 2 | 2 | ✓ | 200 | 200 | PASS |
| d03 Descriptives | 2 | 2 | ✓ | 200 | 200 | PASS |
| d04 Select Cases | 3 | 3 | ✓ | 200 | 200 | PASS |
| d05 Crosstabs | 2 | 2 | ✓ | 200 | 200 | PASS |
| d06 Compute/Recode | 3 | 3 | ✓ | 200 | 200 | PASS |
| d07 Data cleaning | 3 | 3 | ✓ | 200 | 200 | PASS |
| d08 Proportions | 3 | 3 | ✓ | 200 | 200 | PASS |
| d09 T-tests | 2 | 2 | ✓ | 200 | 200 | PASS |
| d10 Paired/ANOVA | 2 | 2 | ✓ | 200 | 200 | PASS |
| d11 Correlation | 2 | 2 | ✓ | 200 | 200 | PASS |
| d12 Capstone A | 1 | 1 | ✓ | 200 | 200 | PASS |
| d13 Capstone B | 2 | 2 | ✓ | 200 | 200 | PASS_WITH_LIMITATION (`d13-crosstab` is single-scene by design) |
| d14 Assessment | 1 | 1 | ✓ | 200 | 200 | PASS (no `.src-ex` — independent assessment, correct) |

Source-exercise references match `exercise-inventory.json` mappings for every day.

## 5. 60-exercise coverage

Inventory: 43 P1 + 15 P2 + 2 supplementary (`P2-TH3`, `P1-BONUS-SLNC`). All 60 detail routes: HTTP 200, `.exd-id` correct, `data-exstatus`/`data-done`/answer fields present, real dataset + variables. **0 failures.**

## 6. Beginner journeys

- **A (first-time):** home → Day 01 via continue-card, objective+files panels visible, troubleshooting expands, checkpoint stores `step:ef-d01-open-sav`, workbook reachable, roadmap reachable. ✅
- **B (seeded):** `{ef-d01,d02}` + 2 exercises + draft → dashboard `2/14 · 2/58 · 56`, next-lesson `Ngày 03 → /d03/bai-hoc/`; draft `23.5` persists; storage byte-identical across reload; OS switch preserves everything. ✅
- **C (practice):** search →1, card opens P1-Q10, hints expand, draft `4.12` persists, done → bank shows `Đã làm`, lesson progress unaffected. ✅
- **D (advanced):** P1-Q15 shows `ANSWER_NOT_VERIFIED`, prereq warn box, **no** fabricated answer link. ✅
- **E (capstone):** `File5_Phan2.sav` referenced on both d12+d13; working-copy guidance present. ✅
- **F (assessment):** d14 lesson/workbook/answer-key all render; gated answer copy intact. ✅

## 7. SPSS simulation regression

All **32 guides** exercised live: scenes render, numbered `sm-badge` markers present, `‹/›` scene nav advances, `data-stepdone` checkpoints store and persist, expected-result + troubleshooting panels present, no escaped-HTML text. `d13-crosstab` = intentional 1-scene output frame. `spss-os` mac/win switching verified without progress loss.

## 8. Statistical integrity

Spot-checked canonical `exercise-verified-stats.md` values inside answer-key pages (answers live in `<details>` — confirmed via HTML): `χ²=1,075` (Q17), `61,316` + `0,108` (Q22 proportions), `OR 12,50` (Q21), `5/9 ô expected <5` caveat (Q31). All match canonical Python cross-checks. No invented results; `ANSWER_NOT_VERIFIED` states honest.

## 9. localStorage regression

`spss-mlp-progress-v1` shape `{lastPage, done, answers}` intact; keys `module:ef-*`, `exercise:*`, `exercise:*:field`, `step:ef-*` — none renamed/migrated; **no `odp-*`** anywhere; `spss-os` independent. Empty→seeded→partial→done all behave; reload/navigation persistence verified.

## 10. Responsive & accessibility

**80/80 viewport-cells clean** (5 vps × 16 representative routes — home, roadmap, lessons, workbook, answer key, bank, detail, datasets, glossary, m01). Keyboard: Space toggles checkpoints; focus-visible rings on nav buttons; labels on all answer inputs; `<details>` disclosures keyboard-native; mobile drawer works; chip contrast `indigo-800`/`lavender-50` solid.

## 11. Visual consistency

Production matches approved OD direction across all page types (light canvas, white surfaces, indigo primary, card system, labelled panels). Documented adaptations stand: topnav vs sidebar-on-docs (Starlight), TOC as step nav, native selects.

## 12. Defect log

| # | Severity | Finding | Disposition |
|---|---|---|---|
| 1 | **MAJOR** | 37 pages (14 `bai-tap`, 14 `dap-an`, m01×3, `du-lieu`, `lo-trinh`, `lo-trinh-14-ngay`, 5 `tai-lieu`) rendered duplicate H1 — source `# ` line + frontmatter title | **FIXED** — shared `stripH1()` at every sync boundary; `du-lieu` literal h1 removed. Re-crawl: 116/116 single-H1 |
| 2 | MINOR | `d13-crosstab` single-scene guide — prev/next nav trivially no-ops | Documented by design; no action |
| 3 | COSMETIC | d14 workbook has no `src-ex` block (assessment is independent) | Correct by design |
| 4 | MINOR | `:has()` selectors (step-pills, wide-content) unsupported in very old browsers | Accepted — modern browser baseline |

## 13. Fixes made

Only #1 — `website/scripts/sync-content.mjs`: `stripH1()` helper applied to lesson (already), workbook, answer-key, roadmap, m01 trio, `lo-trinh`, all 5 `tai-lieu` pages; `du-lieu` literal `#` removed. No content/data/logic touched.

## 14. Remaining limitations

- `REAL_SPSS_VERIFICATION_PENDING` — menu paths verified against docs knowledge, not a live SPSS install (`MAC_SPSS_VERIFICATION_PENDING` labels kept).
- `HUMAN_LEARNING_PILOT_PENDING` — beginner journeys verified mechanically; real novice usability untested.
- Dark theme inherits Starlight defaults on newly styled blocks (light theme is the product default).

## 15. Automated gates

| Gate | Result |
|---|---|
| sync | 114 files |
| build | 116 pages |
| check-scene-data | 318 · 0 FAIL |
| check-progress-keys | 14 · 0 FAIL |
| check-exercise-bank | 21 · 0 FAIL |
| browser-smoke | 22 · 0 FAIL |
| exercise-bank-smoke | 29 · 0 FAIL |
| Full-route crawl | 116/116 · 0 broken links · 0 JS errors |
| Overflow matrix | 80/80 cells |

## 16. Evidence

`report/samples/screenshots/t20-*` (home, roadmap, d09 guide, d14 workbook, exd-p2th3) + `t19-*`/`t18-*`/`t17-*` from prior phases.

## 17. Git

- Fix committed as part of this review (`stripH1` defect repair).
- Untracked preserved: `design-prototypes/`. No push, no deploy.

## 18. Recommendation

**Accept for owner's practical use.** The platform is technically sound: all routes/exercises/days verified, progress system non-destructive, simulations interactive, responsive and accessible on the tested matrix. Two honest gates remain open: real-SPSS menu verification and a human learner pilot — both flagged in-product, neither is a defect.
