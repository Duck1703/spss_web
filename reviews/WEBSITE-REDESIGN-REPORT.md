# WEBSITE-REDESIGN-REPORT — SPSS Medical Learning Pack

Ngày: 2026-10-24 · Phạm vi: redesign toàn bộ UI/UX website `website/` (Astro 7.4.0 + Starlight 0.42.7)

## 1. Files đã thay đổi

| File | Thay đổi |
|---|---|
| `src/styles/tokens.css` | **Mới** — lớp design token: màu (light/dark), type scale, spacing, radius, shadow, motion |
| `src/styles/custom.css` | **Rewrite** — override biến `--sl-*` của Starlight, style chrome (header/sidebar/TOC/pagination), style nội dung markdown (typography, bảng, callout, details), style component khóa học |
| `src/pages/index.astro` | **Rewrite** — homepage learning-dashboard mới (xem §3) |
| `src/components/PageTitle.astro` | **Mới** — override Starlight: breadcrumb (SPSS MLP / M01 / Bài học) + tiêu đề + mô tả trang |
| `src/components/Pagination.astro` | **Mới** — override Starlight: card prev/next có nhãn "Trước"/"Tiếp" + icon |
| `src/components/ExerciseCard.astro` | **Redesign** — workbook card: chip ID mono, status pill 3 trạng thái, textarea focus ring, hàng action có autosave indicator |
| `src/components/CompleteModuleButton.astro` | **Redesign** — banner cuối module với text hỏi + nút toggle |
| `src/components/ReadMore.astro` | Không đổi markup — style mới qua CSS (`.read-more`) |
| `public/js/progress.js` | Mở rộng hiển thị: status pill `data-state`, flash "Đã lưu tự động", progress bar + đếm `n/16`, null-safe cho `<select>` BT2. **Schema storage giữ nguyên** |
| `scripts/sync-content.mjs` | 2 transform mới (presentation-only): inject `<select>` từng dòng cho bảng BT2; badge trạng thái sau mỗi heading `## Mxx` trong roadmap |
| `astro.config.mjs` | Thêm `customCss` tokens, `logo`, `favicon`, `components` overrides, font links |
| `src/assets/logo.svg` + `public/favicon.svg` | **Mới** — brand mark (vuông indigo + 3 cột bar) |

File generated `src/content/docs/**` thay đổi theo sync (gitignored, đúng kiến trúc single-source). Không sửa file canonical nào.

## 2. Quyết định thiết kế

- **Direction:** nền tảng EdTech học thuật-hiện đại — nền trung tính ấm (light) / slate-navy sâu (dark), chữ navy-slate, 1 accent indigo dịu (`hsl(238)`), semantic xanh/amber/đỏ cho trạng thái.
- **Typography:** Be Vietnam Pro (Google Fonts, weights 400–700) — thiết kế riêng cho tiếng Việt; fallback system stack đầy đủ. Body 17px / line-height 1.78 / measure ≤72ch; heading tight-tracking nhẹ; label caps `letter-spacing ≥0.06em`.
- **Layout bài học:** giữ kiến trúc Starlight 3 cột (sidebar trái — nội dung — TOC phải), tinh chỉnh bằng CSS: TOC có active-indicator accent, sidebar link là "pill" bo góc, trang hiện tại nền accent-soft.
- **Callout:** blockquote → panel nền mềm bo góc (không dùng thanh màu viền trái — tránh cliché); `details` đáp án là reveal-card có chevron xoay, chỉ mở khi learner chủ động click.
- **Bảng:** khung card bo góc, header in hoa nhỏ, scroll ngang trên mobile, hover row.
- **BT2:** ô "Kiểu của bạn" trống → `<select>` từng dòng (12 lựa chọn, id `bt2-1..12`). ID mới lưu cùng schema `answers{id}`; card `bt2` gốc vẫn giữ nguyên → tương thích dữ liệu cũ, không chấm điểm giả.
- **Homepage:** hero + 3 CTA, meta strip, panel "Tiến độ của bạn" (progress bar + đếm + xuất/nhập JSON), outcome cards đánh số, M01 featured card (viền accent + CTA), M02–M12 & E01–E03 compact cards "Đang biên soạn", 4 nguyên tắc học, theme toggle sáng/tối.

## 3. Chức năng được bảo toàn

- Tất cả route public (`/`, `/lo-trinh/`, `/m01/*`, `/tai-lieu/*`) — 10 trang build ra.
- Pipeline `sync-content.mjs` chạy trong `npm run dev/build` — chỉ thêm transform presentation, không đổi nội dung canonical.
- Storage `localStorage['spss-mlp-progress-v1']` — schema `{lastPage, done, answers}` **không đổi**; mọi id cũ (`bt1a-1`…`bt4-6`, `module:m01`) giữ nguyên.
- Autosave, mark-as-done, module-done, continue-learning, export/import JSON, Pagefind search, dark mode (cùng key `starlight-theme` giữa homepage và docs pages), TOC, prev/next.

## 4. Tests đã chạy

| Test | Kết quả |
|---|---|
| `npm run sync` | PASS — 8 file generated |
| `npm run build` | PASS — 10 trang + Pagefind index (warning sitemap/i18n có sẵn, không liên quan) |
| Verify HTML output: crumbs, pagination, selects BT2, details, font/logo links | PASS — kiểm tra trên `dist/` |
| Transform BT2: đúng 12 select `bt2-1..12` trong bảng | PASS |
| Transform roadmap: badge sau 12 heading `## Mxx` | PASS |

## 5. Tests chưa chạy (NOT_TESTED)

Môi trường không có trình duyệt/headless driver — các mục sau chưa kiểm chứng trực quan:

- Tương tác thật: nhập textarea, autosave sau refresh, toggle done, reveal/hide đáp án, import/export JSON, theme toggle trên homepage.
- Responsive trực quan tại 1440/768/390px (đã viết CSS responsive nhưng chưa screenshot).
- Hiển thị webfont Be Vietnam Pro (cần mạng khi mở trang; offline vẫn fallback hệ thống).

Cách tự kiểm tra: `cd website && npm run dev` → mở `http://localhost:4321`.

## 6. Vấn đề còn lại

- Homepage là trang standalone — theme toggle 2 trạng thái (sáng/tối), không có "auto" như Starlight select; lựa chọn vẫn chia sẻ cùng `starlight-theme` key nên không xung đột.
- Câu trả lời cũ đã lưu trong textarea `bt2` vẫn hiển thị ở card "Nháp BT2" (không mất dữ liệu) nhưng phần select từng dòng là nhập mới.
- Chưa có screenshot before/after (không có browser tool).
