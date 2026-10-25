# TASK 16.1 — SPSS VISUAL READABILITY FIX + FULL COURSE CONSISTENCY AUDIT

Baseline: `dc2d73a` · Scope: presentation layer only — no curriculum, lesson, or scene-data changes.

## 1. Root-cause analysis

Browser-level inspection (Playwright screenshots, computed styles, DOM text) found **four** root causes — two worse than "small text":

1. **Raw HTML leaked into the rendered mock.** `SpssMock.astro` defined `badge(n)` as a function returning an HTML *string*, then interpolated it as text in ~15 places (`{it.label}{badge(it.hot)}`, `►{badge(r.hot)}`, `{b.label}{badge(b.hot)}`…). Result: learners literally saw `►<span class="sm-badge" aria-hidden="true">1</span>` printed on buttons, arrows, fields, listboxes, menu items, dialog buttons, files, tabs and outline items — on every guide in every day. This alone made several scenes unreadable.
2. **Font sizes 11–12.5px.** The mock system used `font-size: 13px` base with descendants at 11–12.5px — below comfortable reading size — and two elements were even smaller than intended because **Starlight's `.sl-markdown-content` table styles overrode `.sm-grid th`/`.sm-table th`** down to ~12.9px (specificity/cascade-order loss).
3. **Hard-coded dropdown offsets.** `.sm-drop` used `top:62px; left:<px-per-menu>` constants; any font change broke the alignment, and the dropdown could detach from its menu.
4. **Weak callout row.** Legend buttons were pill-shaped at 0.8rem inline — functional, but small; and (because of bug 1) the numbers they referenced were printed as literal markup instead of badges.

The mock's light window styling itself was fine — the "dark/miniature screenshot" impression came mainly from the leaked markup noise + tiny text making scenes look like corrupted screenshots.

## 2. Components refactored

- `src/components/spss/SpssMock.astro` — `badge()` replaced by a real component `<SmBadge n={…}/>`; all literal-interpolation call sites fixed; `lists`-type arrow can now `advance`.
- `src/components/spss/SmBadge.astro` — **new** tiny component (Astro frontmatter can't return JSX, so a component was required).
- `src/styles/custom.css` — mock font scale raised ~15–25% across the board; dropdown min-width 200→260px; `.sm-grid/.sm-table` cells pinned to 14.5/14px under `.spss-mock` selector (beats Starlight table rules); `.sm-badge` 18→24px; `.sm-hot` outline 2→3px; legend changed from inline pills to a readable vertical list at 0.95rem; `.smw` background lightened, shadow softened; `.smw-winbtns` 11→14px; dialog max-width 620→680px; `.sm-row-table` gets `overflow-x:auto` + wrapping cells so dense output tables inside dialogs never clip; mobile breakpoint updated.
- `public/js/spss-guides.js` — added `positionDrops()`: dropdown top/left computed live from the actual menu-bar/button geometry (on init, scene change, resize) — replaces hard-coded px offsets.

**Before → after:** literal `<span class="sm-badge"…>` text on controls → clean orange numbered badges; min font in mock 11–12.9px → **≥13px** (most text 14–15px); fixed-px dropdown → geometry-anchored; inline callout pills → labeled vertical list.

## 3. Full-course consistency audit (D01–D14)

All 14 days render through the **same** `SPSSActionGuide`/`SpssMock` component, so the readability upgrade applies uniformly. A structural audit of all 32 guides in `public/visual-guides/day01–14/scenes.json` verified every guide has: `purpose` (user intent), `menuPath`, `expected` result, `ifWrong` troubleshooting, and labeled callouts on every scene.

| Day | Guides | Verdict |
|---|---|---|
| D01 | 4 (open .sav, Var View, select, sort) | CONSISTENT |
| D02 | 2 | CONSISTENT |
| D03 | 2 | CONSISTENT |
| D04 | 3 (Select Cases, Split File, Means) | CONSISTENT |
| D05 | 2 (Crosstabs, Chi-square) | CONSISTENT |
| D06 | 3 | CONSISTENT |
| D07 | 3 | CONSISTENT |
| D08 | 3 (GOF, Binomial, Weight) | CONSISTENT |
| D09 | 2 (t-tests, row/p-value highlighted) | CONSISTENT |
| D10 | 2 (paired t, ANOVA) | CONSISTENT |
| D11 | 2 (Correlate, Regression — r/p/B/R² callouts) | CONSISTENT |
| D12 | 1 (File5 data review) | CONSISTENT |
| D13 | 2 (crosstab, t-test interpretation) | CONSISTENT |
| D14 | 1 (Compute — operation only, no answers) | CONSISTENT |

The "only first 3 days feel revised" impression was caused by the badge-rendering bug being most damaging on the denser later-day scenes (listmove arrows, OK buttons, output tables), not by missing structure. **No per-day scene changes were needed** after the shared-component fix; the guide anatomy (action title / intent / menu path / visual / legend / expected result / troubleshooting / checkpoint) was already present on all days.

## 4. Browser review findings (Playwright, 1280×900 + 375×700)

`readability.mjs` — **30 PASS / 0 FAIL** across d01, d04, d05, d09, d11, d13, d14:

- min font inside every mock ≥ 13px (body controls 14–16px)
- zero escaped HTML text inside `.smw`
- zero clipped elements outside scroll containers (`.sm-opane`, `.sm-gridwrap`, `.sm-row-table` scroll by design — matches real SPSS output panes)
- guides render on all sampled days (1–4 per day)
- mobile 375px: no horizontal page overflow; listmove/dialog stack vertically
- keyboard Tab reaches guide controls (os-sel-btn / legend / nav buttons)

`browser-smoke.mjs` re-run — **22 PASS / 0 FAIL** (OS toggle, scene nav, `ef-` progress keys, legacy `module:d01` preserved, d14 answer-leak checks, JS error sweep).

Screenshots: `report/samples/screenshots/` (after-d01-s0 menu+dropdown, after-d05-s0 dialog, after-d09-s1 output+legend, after-d11-s0 correlate dialog, after-d13-s0, after-d14-s0, after-mobile-d05).

## 5. Remaining visual limitations

- The mock is still a **simplified DOM mockup**, not a pixel-accurate SPSS clone — per the "TEACHING CLARITY > WINDOW REALISM" directive this is intentional.
- Dense output tables (d13 chi-square) scroll horizontally inside the output pane when they exceed pane width — same behavior as real SPSS; all content reachable.
- On very narrow phones (<360px) listbox columns stack vertically; usable but taller.
- The `sm-drop` default `top` in CSS is still a fallback before JS positions it — briefly visible only if JS is disabled (guides require JS anyway).
- Scene-level art direction (e.g. hiding the menu bar on pure-dialog scenes via `menubar:false`) is possible in the scene schema but was not needed — dialogs already dominate their scenes visually.
- Human-laptop read confirmation still pending owner review: `CONTENT_READY_PENDING_HUMAN_PILOT`; `SPSS_NOT_RUN` unchanged.

## 6. Answer-leak risks checked

- d14 lesson/workbook contain no final answers; the d14 scene (`d14-compute`) shows the Compute dialog operation only — no result values. Smoke E2/E4 PASS.
- No new answers were introduced anywhere — this task touched only rendering code and CSS.
- Scene checker `check-scene-data.mjs` (user's CSV-based version): **318 checks / 0 FAIL**.

## 7. Build/test results

| Check | Result |
|---|---|
| `npm run build` (incl. sync) | 55 pages PASS |
| `check-scene-data.mjs` | 318 checks / 0 FAIL |
| `check-progress-keys.mjs` | 14 PASS / 0 FAIL |
| `browser-smoke.mjs` | 22 PASS / 0 FAIL |
| `readability.mjs` (new) | 30 PASS / 0 FAIL |
| Escaped-HTML scan in dist/ | 0 occurrences |
| Answer-leak scan (d14 + đố vui) | clean |

## 8. Changed files / git

- `website/src/components/spss/SpssMock.astro` — badge → `<SmBadge>` component usage
- `website/src/components/spss/SmBadge.astro` — new
- `website/src/styles/custom.css` — readability pass over `.smw`/`.sm-*`/`.sguide-*`
- `website/public/js/spss-guides.js` — dynamic dropdown positioning
- `.gitignore` — ignore `.workspace/shots/`, `.workspace/*.mjs` scratch
- `report/samples/` — added `readability.mjs` + `screenshots/` (7 PNGs)
- `report/TASK16-1-VISUAL-READABILITY-AND-CONSISTENCY.md` — this report (copied)

Commit: local only, no push, no deploy, no OpenDesign.
