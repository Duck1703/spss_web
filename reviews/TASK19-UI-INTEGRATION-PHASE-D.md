# TASK 19 — Open Design Production Integration, Phase D
## Lesson Experience + SPSS Action Guide

**Scope:** all 14 lesson days (`/dNN/bai-hoc/`), SPSS guide presentation, shared lesson components. Existing functionality authoritative.

**Verdict:** ✅ Phase D complete — all gates green, zero regressions. Phase E not started.

---

## 1. Existing lesson UX audit

The 14 canonical `lesson.md` files already carried a consistent A–K structure (bài tập gốc → mục tiêu → dữ liệu → kiến thức → thực hành → …). Presentation gaps found:

- **Duplicate H1** — `# Ngày NN` in source markdown rendered below the Starlight page-title H1 (same issue class as the exd duplicate flagged in Task 18).
- **Dataset info** was a plain blockquote — easy to miss.
- **`.src-ex` source-exercise block** had no link to the exercise detail page.
- **Guide "why" text** was flat body text — purpose/menu-path not visually distinct.
- **Expected result** was a bare `<p>` — weak "how do I know I'm done" signal.
- **Step headings** (`### Bước N`) were plain h3s (they live inside `.sl-heading-wrapper`, so direct-child selectors needed updating).
- **d13/d14 mobile overflow** — wide markdown tables (~650px) + a `white-space:nowrap` menu-path chip (~400px) exceeded a 390px viewport.

## 2. Open Design integration summary

Applied the prototype lesson direction via shared components only:

| Prototype element | Production realisation |
|---|---|
| Dataset/file panel | `.lesson-files` card emitted by `fileBox()` — eyebrow label, file chips, local-only note |
| Scenario card | `.src-ex` upgraded — tier meta (`BẮT BUỘC`/`LUYỆN THÊM` as `<b>`), `Mở trang bài tập →` link |
| Step header chips | `.sl-heading-wrapper.level-h3` pill (accent bar) on guide pages |
| Guide purpose panel | `.sguide-why` lavender panel with `MỤC ĐÍCH`/`VỊ TRÍ`/`BẤM THEO` chip labels |
| Expected-result box | `.sguide-result` green panel + `KẾT QUẢ MONG ĐỢI` label |
| Troubleshooting | `.sguide-trouble` amber `<details>` panel |
| Checkpoint | `.sguide-done` full-width dashed row, 1.05em checkbox, hover accent |
| Step nav | existing `‹ Trước`/`Tiếp ›` pill buttons + Starlight TOC retained |

## 3. Shared components / pipeline changes

| File | Change |
|---|---|
| `website/scripts/sync-content.mjs` | `fileBox()` → `.lesson-files` HTML panel; `expandExercises()` → `+.src-ex__link` to `/kho-bai-tap/<slug>/`; lesson `.md` leading `#` H1 stripped (title comes from frontmatter); exercise-detail `.exd-title` h2 removed (Task-18 duplicate fix) |
| `website/src/components/spss/SPSSActionGuide.astro` | `Làm gì/Bạn đang ở/Bấm:` text labels → `.sguide-lbl` chip labels (`Mục đích`/`Vị trí`/`Bấm theo`); result paragraph gets `KẾT QUẢ MONG ĐỢI` label. All data attrs/`data-stepdone`/`data-nav`/scene plumbing untouched |
| `website/src/styles/custom.css` | Phase D section: `.lesson-files*`, `.src-ex__link`, guide-page `.sl-heading-wrapper.level-h3` pill, `.sguide-why`/`.sguide-result`/`.sguide-trouble`/`.sguide-done`/`nav` pills, `.os-sel` shadow; mobile table scroll (`.sl-markdown-content > table` block+overflow); `≤50rem .sguide-menuitem` wrap |

No per-day manual edits — changes flow through `npm run sync` (114 generated files).

## 4. Lesson layout

- Single page-title H1; description strip; notice banners; **dataset panel**; OS selector; lettered A–K sections; step pills; guides; `complete-module` banner; prev/next pagination intact.
- **TOC kept** on lessons — it functions as the in-page step navigator (prototype's right rail mapped onto Starlight TOC; no second sidebar added).
- Content column unchanged on lessons (sim needs ~700px; current column serves it; no 3-col squeeze).

## 5. SPSS Action Guide presentation

Each guide now reads: `Bước N` chip + title + `MÔ PHỎNG` badge → labelled purpose panel (MỤC ĐÍCH / VỊ TRÍ / BẤM THEO menu chips, per-OS notes) → interactive `SpssMock` window → legend → `‹/›` scene nav → green expected-result panel → amber troubleshooting `<details>` → simulation disclaimer → full-width checkpoint row.

Task 16.1 sim internals untouched (menus, dialogs, callout targets, `.spss-mock` tables all scoped stronger than Starlight's).

## 6. macOS/Windows verification

- `OSSelector` rendered once per guide-bearing lesson; `[data-os-pick]` click → `localStorage['spss-os']` updated (`mac` verified live), `html[data-spss-os]` drives `[data-os]` span visibility; progress not reset on switch.

## 7. Progress compatibility

- Checkpoint `<input data-stepdone="ef-d01-open-sav">` → stored key `step:ef-d01-open-sav` — **unchanged semantics**, persists across reload.
- `data-module-done="ef-dNN"` unchanged; exercise keys untouched; no `odp-*` introduced; no auto-completion added.

## 8. Browser screenshots (`report/samples/screenshots/`)

`t19-d01-desktop`, `t19-d01-mobile`, `t19-d01-bottom`, `t19-sguide`, `t19-d05-desktop`, `t19-d05-mobile`, `t19-d13-desktop`, `t19-d13-mobile` (+ `t19-before-*` comparison pair).

## 9. Readability & responsive results

- Overflow sweep 1440/1280/768/390/375 across `/d01,d04,d05,d09,d11,d13,d14/bai-hoc/` + `/d14/bai-tap/` + bank + exd: **all clean** (d13/d14 466/420 → 390/375 after fixes).
- `### Bước N` wrappers render as accent pills at all sizes.
- Guide panels wrap cleanly at 390px; menu chips wrap (`white-space:nowrap` relaxed ≤50rem); sim keeps its own contained scroll.

## 10. Answer-leakage checks

- `answerHref` still links to `/dNN/dap-an/` (separate page) — no answers on lesson pages.
- Sim scenes unchanged (procedure only); `ANSWER_NOT_VERIFIED` states preserved (bank-smoke 29/0 incl. coverage).
- `.sav`/`.pdf` absent from `dist/` (0 hits).

## 11. Full build & route results

| Gate | Result |
|---|---|
| `npm run sync` | 114 generated |
| `astro build` | **116 pages**, 0 errors |
| `check-scene-data.mjs` | 318 · 0 FAIL |
| `check-progress-keys.mjs` | 14 · 0 FAIL |
| `check-exercise-bank.mjs` | 21 · 0 FAIL |
| `browser-smoke.mjs` | 22 · 0 FAIL |
| `exercise-bank-smoke.mjs` | 29 · 0 FAIL |
| JS errors | 0 |

## 12. Remaining prototype differences

- Lessons keep Starlight TOC (right rail) rather than prototype's custom rail — chosen deliberately (Option B): TOC = step navigation.
- Frontmatter prev/next pagination is Starlight's, not prototype step buttons.
- Workbook (`bai-tap`) and answer-key (`dap-an`) pages keep their existing presentation — ExerciseCard already matches the system.

## 13. Phase E regression risks

- `:has(.sguide)`/`has(.exd-layout)` selectors — modern-browser only (matches project baseline).
- `table{display:block}` on direct-child markdown tables — verified `.spss-mock` tables unaffected (descendant scoping); Phase E sweep should still eyeball wide tables on m01/legacy pages.
- d13/d14 fixed via two mechanisms — re-verify after any future scene/table edits.

## 14. Changed files & commit

Modified: `website/scripts/sync-content.mjs`, `website/src/components/spss/SPSSActionGuide.astro`, `website/src/styles/custom.css` + `reviews/`, `report/samples/screenshots/t19-*`. Local commit only; no push, no deploy, Phase E not started.
