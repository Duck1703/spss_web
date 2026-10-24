# BÁO CÁO TASK 08 — Website MVP

**Xong.** Website học thật tại `D:\spss\website` — Astro 7.4.0 + Starlight 0.42.7.

## Chạy website
```
cd D:\spss\website && npm run dev      # http://localhost:4321/
npm run build && npm run preview       # production build + preview
```

## Đã có
- Homepage: giới thiệu, lộ trình 12 module + 3 extension (M01 live, còn lại "Đang biên soạn" — không trang rỗng), Bắt đầu/Tiếp tục học, xuất/nhập tiến độ JSON.
- `/lo-trinh/` — roadmap đầy đủ · `/m01/bai-hoc/` — lesson draft-4 · `/m01/bai-tap/` — 16 ô nháp tự lưu + đánh dấu · `/m01/dap-an/` — đáp án ẩn `<details>` · `/tai-lieu/*` — glossary/outcomes/concept-map/Mac setup · Search, dark mode, responsive.

## Kiểm chứng
- build PASS (10 trang + Pagefind), 6 URL → 200, số liệu M01 canonical↔web khớp 1:1, dist không leak file nội bộ.
- NOT_TESTED: Safari thật, click/type trong browser, pilot.

## Canonical → web
`scripts/sync-content.mjs` chỉ đọc canonical → generated docs (gitignored). Sửa canonical → `npm run build` tự cập nhật.

## File trong report/
TASK08-review · ARCHITECTURE · DEPLOYMENT · package.json (copy). Canonical giữ nguyên; Blueprint hash không đổi.
