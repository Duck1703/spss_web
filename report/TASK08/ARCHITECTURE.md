# Website Architecture — SPSS Medical Learning Pack

## Stack

| Lựa chọn | Version | Lý do |
|---|---|---|
| Astro | 7.4.0 (pinned, package-lock) | SSG thuần, zero-JS mặc định cho trang đọc; 7.4.0 là bản mới nhất tương thích Node 22.23.2 của máy (7.4.1+ đòi ≥22.23.4) |
| @astrojs/starlight | 0.42.7 (pinned) | Docs framework: sidebar, TOC, search (Pagefind), dark mode, responsive sẵn có — khớp đúng nhu cầu đọc giáo trình |
| Vanilla JS | `public/js/progress.js` | Đủ cho localStorage progress + autosave; không cần UI framework |

## Single source of truth

```
canonical (repo root)                website/src/content/docs/   (GENERATED — .gitignore)
─────────────────────────            ───────────────────────────
lessons/M01/lesson.md      ─sync→    m01/bai-hoc.mdx     (+CompleteModuleButton, <details>→<ReadMore>)
lessons/M01/workbook.md    ─sync→    m01/bai-tap.mdx     (+<ExerciseCard> inject theo câu)
lessons/M01/answer-key.md  ─sync→    m01/dap-an.md       (mỗi ## section → <details>)
curriculum/roadmap.md      ─sync→    lo-trinh.md         (+status banner)
curriculum/glossary…       ─sync→    tai-lieu/thuat-ngu.md
curriculum/learning-out…   ─sync→    tai-lieu/muc-tieu.md
curriculum/concept-map.md  ─sync→    tai-lieu/ban-do-khai-niem.md
START-HERE-MAC.md          ─sync→    tai-lieu/bat-dau-mac.md
```

`scripts/sync-content.mjs` chạy tự động trước `npm run dev`/`build`. Rule:
- **Chỉ đọc** canonical, **chỉ ghi** vào `src/content/docs/` (gitignored — không hai nguồn nội dung trong git).
- Không sửa số liệu/đáp án — transform chỉ là: frontmatter, link rewrite `.md`→routes, inject component, bọc `<details>` cho đáp án, escape `<` trước số cho MDX, strip path nội bộ.
- Không đưa `project-control/`, `reviews/`, `qa/`, `report/`, `source-map.md` lên web.

## Routes

- `/` — landing tùy chỉnh (`src/pages/index.astro`): hero, đối tượng, kết quả học tập, grid 12 module + 3 extension (trạng thái "Đang biên soạn" — không trang rỗng), nút **Bắt đầu học** + **Tiếp tục học** (đọc `lastPage` từ localStorage), xuất/nhập tiến độ JSON.
- `/lo-trinh/` — roadmap đầy đủ từ canonical.
- `/m01/bai-hoc/` — lesson draft-4 đầy đủ, sidebar + TOC + prev/next.
- `/m01/bai-tap/` — workbook + 16 `<ExerciseCard>` (textarea autosave + nút đánh dấu + link đáp án).
- `/m01/dap-an/` — answer-key, mỗi phần ẩn trong `<details>`.
- `/tai-lieu/*` — glossary, outcomes, concept-map, Mac setup.

## Tiến độ học tập (`progress.js`)

`localStorage['spss-mlp-progress-v1']` = `{ lastPage, done:{id:true}, answers:{id:text} }`.
- Autosave textarea theo input event; toggle "Đã làm" per card; nút "Đã học xong M01" (`module:m01`) → badge ✓ trên homepage/roadmap.
- `slpExport()`/`slpImport()` — sao lưu tiến độ JSON. Không tài khoản, không gửi dữ liệu đi đâu.
- Cảnh báo localStorage hiển thị ngay trên homepage (yêu cầu task §6).

## Quyết định kỹ thuật đáng ghi

- **dap-an dùng `.md` không `.mdx`** — tránh mdx-jsx parse lỗi với `<details>` lồng markdown; HTML passthrough đủ.
- **`<ReadMore>` component** — canonical `<details>` trong lesson chuyển thành component để MDX render ổn định.
- **Landing không dùng Starlight template** — cần hero + progress UI tùy ý; vẫn cùng base path.
- **ExerciseCard = textarea tự do** — MVP không chấm tự động (đúng yêu cầu §6, không keyword-match giả).
