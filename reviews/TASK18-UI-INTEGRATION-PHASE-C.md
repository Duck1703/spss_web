# TASK 18 — Open Design Production Integration, Phase C
## Exercise Bank + Exercise Detail

**Scope:** `/kho-bai-tap/` (60 cards) + all 60 generated exercise-detail pages → approved Open Design visual treatment, on shared templates only. Existing production functionality treated as authoritative.

**Verdict:** ✅ Phase C complete — all QA gates green, zero regressions. Phase D NOT started.

---

## 1. Production files changed

| File | Change |
|---|---|
| `website/scripts/sync-content.mjs` | Hub card markup (+tier chip, +skill span, +CTA label); hub/dataset groups incl. supplementary; detail template → 3-column `.exd-layout` workspace (side boxes / brief / rail); `tableOfContents: false` on hub + all detail frontmatter |
| `website/public/js/exercise-bank.js` | Additive only: `[data-exb-empty]` show/hide + `[data-exb-reset]` reset-filters inside existing `apply()`; status/search/filter logic untouched |
| `website/src/styles/custom.css` | `.exb-*`/`.exd-*` block replaced with OD treatment; `[hidden]{display:none!important}` guard; `.main-pane:has(.exd-layout)/:has(.exb-list)` → `--sl-content-width: 72rem`; responsive collapse `@media ≤1024px` 2-col, `≤760px` 1-col |

Generated pages (`src/content/docs/kho-bai-tap*.md`) are gitignored — changes flow from the generator via `npm run sync` (114 files).

## 2. Exercise Bank redesign (`/kho-bai-tap/`)

- Header: title + description (58 numbered + 2 supplementary, per group headings `Bài 1 (43) / Bài 2 (15) / Phụ (2)`), intro box preserved.
- Search field `Tìm theo mã / nội dung / biến / dataset…` + 4 selects (Nguồn / Kỹ năng / Mức / Trạng thái) in a pill row; live count `60/60 bài`.
- Cards: `P1-Q01` indigo ID + tier chip (`BẮT BUỘC`/`NÂNG CAO`), status pill right (`Chưa làm`/`Đang làm`/`Đã xong`), summary line, meta row (`Câu N tr.M · Beginner · ~25' · skill · Ngày NN · ✓ đáp án`), CTA button `Bắt đầu làm bài →`.
- Empty-results block with `Xóa bộ lọc` reset button (`data-exb-empty`/`data-exb-reset`).

## 3. Exercise Detail redesign (all 60 pages)

OD 3-column workspace inside a widened content column:

- **Left `.exd-side`** — stacked info boxes: Yêu cầu, Sản phẩm, Dataset (local + `.sav` warning), Biến cần dùng (chips), Kỹ năng, Yêu cầu trước (warn-styled), Độ khó·Thời gian (+role/tier note).
- **Center `.exd-brief`** — eyebrow+status head, `.exd-title`, `.exd-meta` (PDF · câu · trang · difficulty · time), `Thao tác SPSS` numbered ops, `Nhập kết quả` labeled inputs or textarea, actions row (done button + verified-answer link **or** `ANSWER_NOT_VERIFIED` warning).
- **Right `.exd-rail`** — progressive `<details>` hints, Liên quan (lesson links + sibling exercises + back link).
- Breakpoints: 3-col ≥1024px; 2-col (brief+rail beside, side full-width) mid; single column ≤760px with `minmax(0,1fr)` + `overflow-wrap` — same fix principle as the prototype remediation.

## 4. Prototype → production mapping

| Prototype | Production |
|---|---|
| `.exb-toolbar` search+chips | `.exb-filters` row (native `<select>` — production contract) |
| `.exb-card` (id/pill/title/meta/cta) | `.exb-card` anchor — same fields, richer meta |
| `.exd-layout` 3-col | identical grid, adapted into Starlight `.sl-markdown-content` |
| `.exd-brief/.exd-rail` | identical roles; side column holds the info boxes the prototype put in its left rail |
| `odp-*` progress | **not imported** — production `exercise:*` keys only |

## 5. Preserved data/JS contracts

- `data-exid`, `data-cat`, `data-tier`, `data-src`, `data-search` — all stable.
- `data-exstatus` + `data-state` (`empty`/`draft`/`done`) painted by existing `paint()`.
- Filtering: `card.hidden = ...` + `[hidden]{display:none!important}` prevents the known flex-override bug.
- `data-answer="exercise:<ID>"` / `:field`, `data-done="exercise:<ID>"`, hint `<details>`, answer links — unchanged semantics.
- `localStorage['spss-mlp-progress-v1']`, `spss-os` — read-only use, no migration, no `odp-*`.

## 6. Progress compatibility (live-tested)

Seeded `{ef-d01, ef-d02, exercise:P1-Q01 done, P1-Q10:bmi_mean draft}`:
- Bank status filter: `done`→1, `draft`→1 (P1-Q10 shows `Đang làm`). ✅
- Detail page shows `Đang làm` status for seeded draft. ✅
- New answer `bmi_sd=4.1` persisted across reload. ✅
- Done click → `done['exercise:P1-Q10']=true`; bank `done`→2; `ef-d01` unaffected. ✅
- Empty-storage path unaffected (verified earlier sessions, no write paths added).

## 7. Search/filter testing (Chromium, 1440px)

`p1-q10` search →1 · impossible search → empty state + reset →60 · `P2` →16 · `ttest` →≥4 · `advanced` →≥1 · status filters →correct counts. Hidden cards actually disappear (`[hidden]` guard verified in output).

## 8. Answer-entry testing

P1-Q10: 2 labeled inputs (`BMI trung bình`/`độ lệch chuẩn`), drafts persist, done button toggles state+label, `Xem đáp án (D06)` link present only because verified. **P1-Q15 (advanced):** `ANSWER_NOT_VERIFIED` banner, warn prereq box, **no** answer link — honest status preserved.

## 9. Mobile responsiveness

Overflow `scrollWidth ≤ clientWidth` at 1440/1280/768/390/375 on bank + P1-Q10 + P1-Q15 — **15/15 PASS**. Cards stack; detail columns collapse to single column; hint pills stay tappable.

## 10. Accessibility

Native `<select>`/`<input>`/`<details>` — keyboard + labels intact; status pill is text (not color-only); focus-visible ring kept; `[hidden]` respected by AT; reset button reachable. No hover-only interactions added.

## 11. Browser screenshots (`report/samples/screenshots/`)

`t18-bank-desktop`, `t18-bank-mobile`, `t18-bank-filtered`, `t18-detail-desktop`, `t18-detail-mobile`, `t18-p1q15-advanced`, `t18-answer-entry`.

## 12. Build & route results

| Gate | Result |
|---|---|
| `npm run sync` | 114 files generated |
| `astro build` | **116 pages**, 0 errors |
| `check-scene-data.mjs` | 318 PASS · 0 FAIL |
| `check-progress-keys.mjs` | 14 PASS · 0 FAIL |
| `check-exercise-bank.mjs` | 21 PASS · 0 FAIL |
| `browser-smoke.mjs :8378` | 22 PASS · 0 FAIL |
| `exercise-bank-smoke.mjs :8378` | 29 PASS · 0 FAIL |
| `.sav`/`.pdf` in `dist/` | 0 — sources stay local |
| JS runtime errors | 0 across all sweeps |

## 13. Adaptations & remaining Phase D risks

- Starlight's right-TOC rail capped content at ~740px → `tableOfContents:false` on hub+details; lessons keep their TOC (Phase D decision pending).
- Detail page h1 = frontmatter title duplicates `.exd-title` (minor; inherited from existing template behavior).
- Phase D risk: `.exd-layout` uses `:has()` (modern browsers); lesson-page TOC/simulator specificity untested — flagged for Phase D, no impact measured here.

## 14. Git status

- Modified: `website/scripts/sync-content.mjs`, `website/public/js/exercise-bank.js`, `website/src/styles/custom.css`.
- New: `report/samples/screenshots/t18-*.png`, `reviews/TASK18-UI-INTEGRATION-PHASE-C.md`.
- Untracked preserved: `design-prototypes/`.
- Local commit only; **no push, no deploy, Phase D not started.**
