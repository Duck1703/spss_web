# TASK 08 — Website MVP Review (Astro + Starlight)

> Báo cáo bàn giao website học SPSS Medical Learning Pack. **Local-only**, chưa deploy, không backend.

## 1. Stack & lý do

**Astro 7.4.0 + @astrojs/starlight 0.42.7** (pinned trong `package.json`, `package-lock.json` committed). Starlight cho sẵn: sidebar, TOC, search (Pagefind), dark mode, responsive — đúng mô hình "đọc giáo trình". Vanilla JS cho progress (không cần framework UI cho mức MVP). Chi tiết: `website/ARCHITECTURE.md`.

**Lưu ý version:** Astro 7.4.1+ đòi Node ≥22.23.4; máy hiện có 22.23.2 → pin 7.4.0 (đã verify engines từ registry, build PASS).

## 2. Cấu trúc

```
website/
├── scripts/sync-content.mjs   ← adapter canonical→docs (chỉ đọc canonical)
├── src/content/docs/          ← GENERATED, gitignored (không 2 nguồn nội dung)
├── src/pages/index.astro      ← landing tùy chỉnh
├── src/components/            ← ExerciseCard, ReadMore, CompleteModuleButton
├── public/js/progress.js      ← localStorage progress + export/import JSON
├── ARCHITECTURE.md · DEPLOYMENT.md
```

## 3. Canonical → web mapping

| Canonical | Route | Transform |
|---|---|---|
| `lessons/M01/lesson.md` | `/m01/bai-hoc/` | frontmatter, link rewrite, `<details>`→`<ReadMore>`, escape `<26`, nút hoàn thành |
| `workbook.md` | `/m01/bai-tap/` | inject **16 `<ExerciseCard>`** theo từng câu (bt1a-1..3, bt1b, bt2, bt3-1..5, bt4-1..6) |
| `answer-key.md` | `/m01/dap-an/` | mỗi `##` section → `<details>` (đáp án không lộ) |
| `roadmap.md` | `/lo-trinh/` | + banner trạng thái |
| glossary/outcomes/concept-map/START-HERE-MAC | `/tai-lieu/*` | copy + strip path nội bộ |

Không đưa `project-control/`, `reviews/`, `qa/`, `report/`, `source-map` lên web — dist đã grep sạch.

## 4. Chức năng đã triển khai

- ✅ Homepage: giới thiệu, đối tượng, kết quả học tập, grid M01–M12 + E01–E03 với trạng thái thật (M01 "Có bài học", còn lại "Đang biên soạn" — không trang rỗng), nút Bắt đầu/Tiếp tục học, cách học, lưu ý localStorage + xuất/nhập JSON.
- ✅ Bài học M01 đầy đủ trên web: sidebar, TOC, prev/next, bảng cuộn ngang, `<ReadMore>` cho "Đọc thêm".
- ✅ 16 ô nhập bài tập, autosave, đánh dấu "đã làm", link sang đáp án.
- ✅ Đáp án ẩn trong 5 `<details>` — không lộ trước khi mở.
- ✅ Tiến độ persist sau refresh (localStorage); "Tiếp tục học" quay đúng trang.
- ✅ Search (Pagefind — 10 trang), dark mode, font Việt system stack.
- ✅ Build-time sync: sửa canonical → `npm run build` cập nhật web; generated files gitignored.

## 5. Kiểm chứng đã chạy (thật)

| Kiểm | Kết quả |
|---|---|
| `npm install` | PASS — 0 vulnerabilities |
| `npm run build` | PASS — 10 trang + Pagefind index, ~2s |
| `astro preview` + curl 6 URL | PASS — `/`, `/lo-trinh/`, `/m01/bai-hoc/`, `/m01/bai-tap/`, `/m01/dap-an/`, `/js/progress.js` đều **200** |
| Số liệu canonical↔web (9 giá trị M01) | PASS — khớp 1:1 (46,0/129,8/149,0/123,3/140,8/118,7/62,7/40,4/25,0%) |
| Đáp án ẩn | PASS — 5 `<summary>` "Hiển thị đáp án" trong HTML |
| ExerciseCard | PASS — 16 `<textarea>` render |
| Leak nội bộ trong dist | PASS — 0 file chứa project-control/decisions/reviews |
| **Chưa kiểm (NOT_TESTED):** | Safari thật, browser interaction (click/type — chỉ kiểm chứng qua HTTP + HTML markup), pilot người học |

URL local đã kiểm: `http://localhost:4321/` (`npm run preview`).

## 6. Còn thiếu / giới hạn

- Không chụp được screenshot (không có browser tool trong môi trường này) — owner mở URL sẽ tự xem.
- BT2 (bảng 12 biến) nhập đáp án bằng textarea tự do, không điền được vào từng ô bảng.
- Exercise chỉ nháp văn bản — không chấm, đúng yêu cầu (không AI/keyword chấm).
- `site` chưa set → sitemap skip (điều chỉnh khi chọn domain).

## 7. Trước khi public

Owner duyệt trải nghiệm → chọn host (gợi ý Cloudflare Pages/Netlify/GitHub Pages trong DEPLOYMENT.md) → set `site` → kiểm Safari → deploy.

## 8. File thay đổi

- **Mới:** toàn bộ `website/` (trừ `src/content/docs/`, `node_modules/`, `dist/` — gitignored).
- **Cập nhật:** `reviews/TASK08-website-mvp-review.md`, `project-control/{progress-log,project-state}.md`, `report/` refresh (D-018).
- **Không đụng:** Blueprint (hash `cdb0b973…0366036` không đổi), M01 canonical, các repo khác.
