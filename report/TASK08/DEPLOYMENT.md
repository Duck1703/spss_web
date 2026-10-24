# DEPLOYMENT — chạy, build và đưa website lên hosting

## Chạy local (dev)

```bash
cd D:\spss\website
npm install        # lần đầu
npm run dev        # sync canonical → docs rồi mở http://localhost:4321/
```

## Build production

```bash
npm run build      # sync + astro build → output tĩnh trong website/dist/
npm run preview    # xem bản production tại http://localhost:4321/
```

## Cập nhật nội dung bài học

1. Sửa file **canonical** ở repo root (vd `lessons/M01-research-thinking/lesson.md`).
2. `npm run build` (hoặc `npm run sync` rồi `npm run dev`) — website tự cập nhật.
3. **Không bao giờ** sửa file trong `src/content/docs/` — đó là output generated, sẽ bị ghi đè.

## Đưa lên internet (khi owner duyệt — chưa làm trong Task 08)

Output `dist/` là static thuần — host được ở bất kỳ static host nào. Gợi ý:

| Host | Cách | Ghi chú |
|---|---|---|
| Cloudflare Pages | Connect repo, build cmd `cd website && npm run build`, output `website/dist` | Free, nhanh |
| Netlify | Tương tự — build `npm run build`, publish `website/dist` | Free tier đủ |
| GitHub Pages | `astro.config.mjs` thêm `site` + `base: '/<repo>/'`; deploy `dist/` | Cần điều chỉnh base path |

Trước khi public:
- [ ] Owner duyệt nội dung + trải nghiệm học.
- [ ] Chọn tên miền/host → set `site` trong `astro.config.mjs` (sitemap hiện bị skip vì chưa set).
- [ ] Kiểm tra lại không có file nội bộ trong `dist/`.
- [ ] Dùng thử trên Safari/macOS thật (hiện chưa kiểm — NOT_TESTED).
