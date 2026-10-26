# TASK 21 — Clinical Editorial B v2: HTML→Astro Integration Report

- **Phạm vi:** thay thế toàn bộ presentation bị owner từ chối (sidebar 14 bài + TOC phải + vùng đọc hẹp) bằng bốn prototype **Clinical Editorial B v2** đã duyệt, trên production Astro/Starlight.
- **Visual source of truth:** `design-prototypes/SPSS_Figma_B_v2_Approved_Design_Handoff/` (`FIGMA_HANDOFF.md`, `FIGMA_TOKENS.json`, 4 `screens/*.html`, `references/`).
- **Ngày:** phiên Task 21 · **Người thực hiện:** Devin · **Trạng thái:** implementation + regression hoàn tất; **chưa** xin acceptance, chưa deploy, chưa push.

## 1. Baseline commit & branch

- Baseline: `6fb7e90` — *Task 20 Phase E: final acceptance QA + duplicate-H1 defect fix*.
- Branch: `feat/clinical-editorial-b-v2` (tạo từ baseline).
- File untracked có sẵn (design-prototypes, v.v.) được giữ nguyên.

## 2. Shared components created/modified

| File | Mới/Sửa | Vai trò |
|---|---|---|
| `src/styles/tokens.css` | Sửa | B v2 tokens: ink `#143139`, muted `#617981`, accent `#087D77`, tint `#E9F5F2`, line `#DDE9E6`, bg `#F7FAF8`, paper, good, warm, shadow `0 5px 30px #16464108`, Be Vietnam Pro |
| `src/styles/custom.css` | Sửa | Toàn bộ B v2 stylesheet (4 CSS block của prototype + chrome mapping + production rules); **giữ nguyên** internals `.smw`/`.sm-*` của mock SPSS; fix `.exercise-row[hidden]` và nested-list overflow |
| `src/components/Bv2Nav.astro` | **Mới** | Nav ngang dùng chung: brand + Tổng quan / Lộ trình 14 ngày / Bài học / Kho bài tập / Tài liệu + progress pill |
| `src/components/Header.astro` | **Mới** (Starlight override) | Bọc `Bv2Nav`; chọn active-nav theo route |
| `src/components/PageTitle.astro` | Sửa (override) | B v2 page head: breadcrumbs, eyebrow, chips meta (phút/bài tập/dataset), `exercise-identity` badges; đọc meta từ `src/data/course-meta.json` (do `docsSchema()` strip frontmatter lạ) |
| `src/components/Pagination.astro` | Sửa (override) | Đổi wrapper sang `.pagination-links` của B v2 |
| `src/components/spss/SPSSActionGuide.astro` | Sửa | Thêm prop `part`: `window` / `followup` / `all` để split guide vào đúng vị trí trong layout workbench/sim-frame |
| `src/components/spss/OSSelector.astro` | Sửa | Segmented macOS/Windows theo B v2, giữ nguyên hooks JS |
| `scripts/sync-content.mjs` | Sửa | Sinh `template: splash` cho mọi trang; transform `### Bước` → workbench; course-step nav; fileline; src-ex/exb-mini; bank hub + 60 detail `.mdx`; **`src/data/course-meta.json`**; sửa `DAY_META` sai |
| `public/js/exercise-bank.js` | Viết lại | `.exercise-row` + search + 4 select + source tabs + pagination (15/trang) + status painting + reset/empty |
| `public/js/progress.js` | Sửa | Dashboard day-row painting; **fix:** chỉ rewrite `data-dash-next-href` khi có `data-day-row` (trước đó trang non-dashboard bị đổi link "Bài học" → "Ôn tập") |

## 3. Navigation replacement

- `template: splash` áp cho toàn bộ 114 trang docs → Starlight **không render DOM** sidebar + right-TOC (đã verify bằng browser test: không tồn tại `.sidebar`/`.right-sidebar`).
- Header override đăng ký trong `astro.config.mjs` (`components: { Header, PageTitle, Pagination }`).
- Một hệ nav ngang duy nhất trên dashboard + docs + bank + detail; mobile wrap thành hàng scroll ngang (đã đo không overflow ở 390/375/768).

## 4. Dashboard integration

- `src/pages/index.astro` viết lại theo `dashboard-b-v2.html`: continue-learning hero, progress card (0/14 + bar + 0/58 bài tập), 14 ngày nhóm 4 stage, day rows trạng thái, entry Kho bài tập, export/import.
- Metadata đọc từ **`src/data/course-meta.json`** (generate từ canonical) — không hardcode.
- **Defect fix (D04/D08/D09/D10/D14 + D11–D14):** `DAY_META` trong sync được sửa lại theo `curriculum/EXERCISE-FIRST-14-DAY-ROADMAP.md` — ví dụ D10 = T-test cặp & ANOVA (P2-Q06·P2-Q09, File1.sav); D12–13 = capstone P2-TH3 (File5_Phan2.sav); D14 = đánh giá cuối khóa 6 câu.
- Progress pill/roadmap painting dùng `done['module:ef-dNN']` — legacy `module:dNN` **được giữ, không đếm**.

## 5. Lesson & simulation integration

- 14 trang `bai-hoc` generate `.mdx`: header compact + mục tiêu + chips (phút/bài tập/dataset) → `.fileline` (đường dẫn SAV) → course-step nav (số bước = `### Bước` thực tế 3–6, không ép 5) → content A–K map vào các section có label → src-ex cards → exb-mini luyện thêm → `CompleteModuleButton ef-dNN` → prev/next `.pagination-links`.
- `### Bước` transform thành workbench: instruction `.lstep-info` trái + `.sim-frame` lớn phải khi có guide; dense-output guide giữ full-width.
- Notice kiểm chứng chuyển thành note nhẹ cuối trang (không còn banner warm to).

## 6. Exercise Bank integration

- `kho-bai-tap.md`: filter card (search + Kỹ năng/Mức độ/Loại bài/Trạng thái + ↺ Đặt lại), source tabs (Tất cả 60 / Bài 1 — Phần 1 43 / Bài 2 — Phần 2 15 / Bổ sung 2), `.listhead`, 60 `.exercise-row` (ID · tóm tắt · ngày/phút/tier · skill · tag level · status · "Mở bài →"), pagination 15/trang, `#exb-empty` empty-state.
- Status: `done['exercise:ID']` → ✓ Đã làm; `answers['exercise:ID…']` non-empty → Đang làm; còn lại Chưa làm.
- Sidebar roadmap **không còn** trên trang bank.

## 7. Exercise Detail integration

- 60 trang `.mdx`: identity badges + eyebrow nguồn + sourcedetail (ref·trang·PDF·dataset) → fileline → course-steps 5 mục neo (đề bài/thao tác/mô phỏng/gợi ý/nhập kết quả) → workbench (đề bài nguồn + thông tin đề) ‖ sim-frame với guide thật khi có (`EX_GUIDES` map id→guide) → `sim-nosim` honest khi không có guide → ops → hints `<details>` → expected → `data-check`/`data-answer`/`data-done` → prev/next + breadcrumb về bank.
- `ANSWER_NOT_VERIFIED` hiển thị cho bài chưa verify; không pre-reveal answer; không lộ số đáp án (check script §D8 PASS).
- Ví dụ ảnh: `P1-Q10` có sim Compute Variable thật; `P1-Q15` (nâng cao, ngoài roadmap) hiển thị "Chưa có mô phỏng tương tác" — không fabricate.

## 8. Content integrity checks

| Check | Kết quả |
|---|---|
| `npm run sync` | 114 files generate OK |
| `npm run build` | **116 trang** build thành công; chỉ warning sitemap `site` chưa config (pre-existing, không liên quan) |
| 14 lesson / 14 workbook / 14 answer-key / 60 exercise / bank | đủ, giữ nguyên id & route |
| Dataset mapping | giữ 9 tên SAV canonical; không `.sav`/`.pdf` nguồn trong `dist/` (script §5 PASS) |
| Nhãn verify thống kê | giữ nguyên; bài chưa verify đánh `ANSWER_NOT_VERIFIED` |
| Nội dung thống kê | **không sửa** — bất thường D13 ghi riêng tại `reviews/TASK21-CONTENT-FINDINGS-D13.md` (F-D13-01…04) |

## 9. Progress compatibility

- `localStorage 'spss-mlp-progress-v1'` giữ schema `{lastPage, done, answers}`; key `spss-os` giữ.
- `module:ef-dNN`, `exercise:P*`, `step:ef-*` đọc/ghi đúng (smoke A5/A6, F1–F3, H1–H2 PASS); legacy `module:d01` **còn nguyên** sau session test (H1 PASS).
- Export/import progress giữ trên dashboard; `odp-*` prototype keys **không** import.

## 10. Visual comparison vs approved prototypes

| Màn hình | Khớp prototype | Ghi chú |
|---|---|---|
| Dashboard | Hero continue-learning + progress + 4 stage day rows + bank entry | ACCEPTABLE_ADAPTATION: progress values thật thay demo |
| Lesson | step-nav → fileline → sections; workbench 2 cột chỗ có guide | Guide thật (DOM sim) thay placeholder — bắt buộc §7 |
| Exercise Bank | head-badge 60, filters card, tabs, rows, pagination | Counter 60/60 cập nhật khi lọc |
| Exercise Detail | 5 course-steps, đề bài trái, sim-frame phải | `sim-nosim` honest cho bài không guide |

## 11. Desktop/mobile screenshots

`reviews/task21-shots/`: `dashboard`, `lesson-d02`, `lesson-d06`, `lesson-d13`, `bank`, `ex-p1q10`, `ex-p1q15` @ 1440px & 390px. Mobile audit riêng ở 390/375/768 trên 11 route: **0 overflow**.

## 12. Browser regression results

| Suite | Kết quả |
|---|---|
| `check-progress-keys.mjs` | 14 PASS · 0 FAIL |
| `check-exercise-bank.mjs` | 21 PASS · 0 FAIL |
| `check-scene-data.mjs` | 318 checks · 0 FAIL |
| `exercise-bank-smoke.mjs` (37 test) | 37 PASS · 0 FAIL |
| `browser-smoke.mjs` (22 test) | **22 PASS · 0 FAIL** — gồm F1 mobile overflow (trước fix: 21/1), F2 guide usable, G1 keyboard focus, H1 legacy key, Z0 no JS errors |

Fixes nổi bật trong vòng QA: `.exercise-row[hidden]` bị `display:grid` override (7 smoke fail) → thêm `[hidden]{display:none!important}`; nested `<ul>` trong `.lstep-info` gây overflow +316px → direct-child selector + nested reset; `progress.js` rewrite nav sai trang → guard `data-day-row`; MDX `<ul>` multiline trong `<details>` → emit một dòng.

## 13. Remaining deviations & limitations

- **ACCEPTABLE_ADAPTATION:** `docsSchema()` strip frontmatter lạ → meta đọc từ `course-meta.json` trong PageTitle thay vì frontmatter.
- **ACCEPTABLE_ADAPTATION:** số bước nav = cấu trúc `### Bước` thật (3–6), không ép 5 như prototype.
- **NEEDS_FIX (đã fix):** các mục §12 trên.
- Còn mở: chưa so pixel-diff tự động với `references/` (so trực quan qua shots); sitemap `site` warning pre-existing; D13 content defect chờ owner quyết định (file findings riêng).
- **BLOCKER:** không có.

## 14. Git commit/status

- Branch `feat/clinical-editorial-b-v2`, commit local (không push). 13 file sửa + 2 component mới (`Header`, `Bv2Nav`) + `src/data/course-meta.json` (generated, gitignored như `src/content/docs/`).
- Generated `src/content/docs/` không commit; mọi thay đổi nội dung đi qua `scripts/sync-content.mjs`.

### Tệp đại diện đính kèm (latest-only)

- `website/src/styles/custom.css` · `website/src/styles/tokens.css` — B v2 design system.
- `website/src/components/Bv2Nav.astro` · `Header.astro` · `PageTitle.astro` — nav + chrome overrides.
- `website/scripts/sync-content.mjs` — generator toàn bộ transformed content.
- `website/public/js/exercise-bank.js` · `progress.js` — filters/tabs/status + progress dashboard.
- `website/src/pages/index.astro` — dashboard B v2.
- `reviews/task21-shots/*.png` — 14 ảnh desktop/mobile.
- `reviews/TASK21-CONTENT-FINDINGS-D13.md` — findings thống kê (OPEN).
