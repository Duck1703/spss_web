# TASK 17 — UI INTEGRATION PHASE A + B

**Date:** 2025-10-25
**Scope:** Open Design v1 → production `website/` — design system, app shell/nav, dashboard, roadmap only. Phases C–E (bank/detail/lesson redesign) not started.
**Baseline:** `af95318` (Task 16.2)

---

## 1. Design system integration

`src/styles/tokens.css` — light theme retuned to the approved OD palette
(cool-gray canvas `#f3f4f8`, white surfaces, `#e2e5ee` borders, indigo
`#4f46e5`, `--brand` hues already aligned). **Kept `--slp-*` namespace** — no
duplicate token system introduced; dark theme untouched (prototype is
light-only, production keeps dark support as existing functionality).

`src/styles/custom.css` — added `html { scroll-padding-top:
calc(var(--sl-nav-height)+1rem) }` (OD remediation pattern: sticky header must
not cover scroll targets). Existing sidebar/TOC/pagination rules already
matched the OD direction (uppercase group labels, accent-soft active pill) —
left untouched. **Zero broad overrides**; no `.sl-markdown-content`/mock-CSS
changes.

## 2. Prototype → Astro mapping

| Prototype | Production implementation |
|---|---|
| sidebar `.nav-item` groups HỌC TẬP/HỖ TRỢ | `astro.config.mjs` sidebar groups "Học tập" / "Hỗ trợ" (Starlight native — single nav system) |
| `.topbar` + crumbs | Starlight header (unchanged) + homepage `.topnav` |
| `.continue-card` | homepage `.continue-card` (`data-dash-next-*`) |
| `.stat-grid` 3 cards | homepage `.stat-grid` (`data-dash-days/ex/remain`) |
| `.day-row` rows | homepage `.day-row` (`data-day-row` + `data-module-badge`) |
| `odp-*` progress keys | **NOT imported** — real `spss-mlp-progress-v1` keys |

## 3. Sidebar (app shell)

`astro.config.mjs` restructured: **Học tập** = Tổng quan `/`, Lộ trình 14 ngày,
Kho bài tập (58 câu), Tiến độ học `/#tien-do` (real anchor — progress section on
homepage, no placeholder page). **Hỗ trợ** = Tài liệu thực hành (`du-lieu`),
Chuẩn bị SPSS Mac, Chuẩn bị dữ liệu. Day list + Tham khảo + Tài liệu groups
preserved. Desktop sidebar, active `aria-current` pill, mobile drawer, focus
states = Starlight native (verified in browser).

## 4. Dashboard (`src/pages/index.astro`)

Rewritten to OD structure, all data from real progress:

- **Continue card** — "Tiếp tục hành trình học SPSS" + next-lesson card: chip
  `Ngày NN/14`, title, exercises + dataset meta, primary CTA
  (Bắt đầu—Ngày 01 when empty, Tiếp tục học when resuming, Ôn tập—Kho bài tập
  when 14/14 done), secondary "Luyện tập thêm" → bank, plus `data-continue`
  resume link (lastPage).
- **Stat grid** — Ngày đã hoàn thành `n/14` · Bài tập đã làm `n/58` · Bài tập
  còn lại — all live values.
- **Progress panel** (`#tien-do`) — existing count/fill/export/import kept.
- **Roadmap** — 14 `.day-row`s (number tile, title, exercise refs + dataset,
  status pill via `data-module-badge`, chevron). Metadata synced to the
  canonical roadmap table + sidebar titles; stale `ready/DRAFT` flags removed
  (all 14 days shipped in Task 15–16).
- Outcomes/how-to/references sections preserved, restyled via tokens only.
- Mobile: topnav wraps to brand row + scrollable link strip; continue-card and
  stat-grid collapse; day-rows drop the status pill.

## 5. progress.js — additive only

- `EX_TOTAL = 58`; `data-dash-days/ex/remain` filled from
  `done['module:ef-dNN']` + `done['exercise:P[12]-QNN']`.
- Next-lesson derived from **DOM order** of `[data-day-row]` (first not-done) —
  no second hardcoded curriculum.
- `data-empty` attr lets badges show "Chưa học" (default `''` preserved → zero
  behavior change elsewhere).
- **No key writes added.** No `odp-*` anywhere; schema `lastPage/done/answers`
  untouched; localStorage never reset.

## 6. Progress compatibility — verified in browser

Seeded `{done:{ef-d01,ef-d02,exercise:P1-Q01,P1-Q02,P1-Q38}, lastPage:/d03/}`:
dashboard reads **2/14 · 3/58 · 55** · next "Ngày 03 / 14 — Đại lượng thống kê
mô tả" → `/d03/bai-hoc/` · badges "✓ Đã học xong"/"Chưa học" correct.
Cleared → **0/14 · 0/58**, "Bắt đầu — Ngày 01", "Chưa có dữ liệu". PASS.

## 7. Browser results (Playwright/Chromium on `dist/`)

- Overflow sweep `/`, roadmap, bank, d04 lesson, p1-q10 detail ×
  1440/1280/390/375: **all PASS** (homepage nav overflow found & fixed —
  two-row topnav on mobile).
- Sidebar groups + active page, OS toggle, sim blocks, day-row links: PASS.
- **0 JS errors** across every page/viewport.
- Gates: build **116 pages** · `check-scene-data` **318/0** ·
  `check-progress-keys` **14/0** · `check-exercise-bank` **21/0** ·
  `browser-smoke` **22/0** · `exercise-bank-smoke` **29/0**.

Screenshots: `report/samples/screenshots/t17-dashboard-{desktop,mobile,seeded}.png`,
`t17-lesson-sidebar.png`, `t17-bank.png`, `t17-lesson-mobile.png`.

## 8. Remaining differences vs prototype (documented adaptations)

- Homepage keeps a **topnav** instead of the prototype's left sidebar —
  Starlight owns the sidebar on all docs pages; a second custom sidebar on the
  landing page would create two competing nav systems (against spec).
- Prototype stat-card "Bài tập còn lại 49" style preserved; per-day progress
  inside the continue-card shows chip only (per-part day progress isn't stored).
- Dark theme retained (production feature; prototype is light-only).

## 9. Risks for Phase C/D

- Bank/detail restyle must keep `data-exid/cat/tier/src` attrs +
  `[hidden]`-safe CSS (exb-card display bug from 16.2).
- `check-exercise-bank.mjs` asserts markup patterns — update checker only if
  intentionally changing markup contract.
- `.spss-mock` CSS specificity battles Starlight table rules (16.1) — Phase D
  must keep `.spss-mock` overrides stronger than `.sl-markdown-content`.

## 10. Git

Working tree: `website/{astro.config.mjs, src/styles/tokens.css,
src/styles/custom.css, src/pages/index.astro, public/js/progress.js}` modified +
generated sync outputs. Local commit only; no push, no deploy.
