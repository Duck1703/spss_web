# TASK 12 — GENERATED SPSS VISUAL GUIDANCE (Days 01–03)

> Scope: visual action guides cho 3 ngày đầu của lộ trình practice-first.
> Trạng thái trung thực: **không có ảnh chụp SPSS thật** — mọi hình là **mô phỏng DOM/CSS**,
> gắn nhãn MÔ PHỎNG + disclaimer trên từng guide. Menu/control lấy từ tài liệu SPSS
> và bài học canonical; mục không chắc được ghi `CHƯA XÁC MINH TRÊN PHẦN MỀM THẬT`.

## 1. Components đã triển khai

| File | Vai trò |
|---|---|
| `website/src/components/spss/SpssMock.astro` | Render **cửa sổ SPSS mô phỏng** bằng DOM/CSS: title bar (chrome đổi theo OS), menu bar 11 menu thật của SPSS, dropdown + submenu hover, toolbar, Data/Variable grid, dialog, Output Viewer, file browser. Đọc scene descriptor → HTML tĩnh tại build time. |
| `website/src/components/spss/SPSSActionGuide.astro` | Khối guide hoàn chỉnh (A–H): step/title → purpose → where → menuPath → osNote → scenes → expected result → troubleshooting `<details>` → disclaimer → checkbox `data-stepdone`. Đọc `public/visual-guides/dayNN/scenes.json` lúc build. |
| `website/src/components/spss/OSSelector.astro` | `[macOS] [Windows]` — lựa chọn toàn cục, `localStorage['spss-os']`, áp cho mọi guide và chrome cửa sổ mô phỏng. |
| `website/public/js/spss-guides.js` | Client logic: OS pick + auto-detect UA; nav Trước/Tiếp; **`data-advance`** — click menu/mục/nút trong mock nhảy sang scene kế (mô phỏng click thật: File → Import Data → CSV Data → OK); legend callout → pulse vùng control tương ứng; toggle submenu cho touch. |
| `website/public/js/progress.js` | Mở rộng: restore `data-stepdone` trong `paint()` + persist `done['step:<id>']` trong listener `change`. **Schema `spss-mlp-progress-v1` giữ nguyên — key mới chỉ thêm vào `done{}`, không reset dữ liệu cũ.** |
| `website/src/styles/custom.css` | +~330 dòng: `.sguide`, `.os-sel`, `.smw` (mock window), dropdown/submenu, grid/dialog/output/finder, badge, hotspot `sm-hot`, pulse, responsive mobile. |
| `website/scripts/sync-content.mjs` | Marker `{{guide:id}}` trong lesson.md canonical → `<SPSSActionGuide id>` khi sync; tự thêm import `SPSSActionGuide`/`OSSelector` + `<OSSelector />` đầu bài khi có guide. |
| `website/astro.config.mjs` | Load `/js/spss-guides.js` global (defer) cạnh progress.js. |

**Vì sao DOM/CSS thay vì SVG/ảnh:** menu phải **click được** (File → Import Data → CSV Data thực sự mở dropdown/submenu rồi chuyển scene) — ảnh tĩnh không làm được; DOM cũng cho keyboard access, responsive, OS-chrome swap, và callout highlight.

## 2. Day 01 — coverage (6 guide / 14 scene)

| Guide | Che mục bắt buộc |
|---|---|
| `d01-open` (3 scenes) | Mở SPSS (Finder/Start + Spotlight), đóng What's New, nhận diện Data Editor + menubar + 2 tab |
| `d01-two-views` (2) | Data View ↔ Variable View — **tab click được trong mock** chuyển scene |
| `d01-import` (3) | File → Import Data → CSV Data (click mô phỏng thật) + chọn đúng `_clean.csv`; fallback File→Open→Data cho bản cũ |
| `d01-wizard` (2) | 3 lựa chọn wizard (header / comma / period) + kết quả Data View đầy |
| `d01-verify` (1) | Kiểm 160×12, ô `.` missing, nhận biết nhầm file `_raw` (161 dòng) |
| `d01-save` (3) | Save As → `clinic_bp.sav` → thoát → Open lại; phím ⌘S/Ctrl+S theo OS |

## 3. Day 02 — coverage (6 guide / 14 scene)

| Guide | Nội dung |
|---|---|
| `d02-varview` | Vào Variable View, đọc 11 cột, định vị Label/Values/Measure |
| `d02-label` | Double-click ô Label → gõ → Enter (before/after) |
| `d02-values` | Ô Values → nút `…` → dialog Value Labels: Value+Label+**Add** (nhấn mạnh "quên Add = mất"), danh sách `1="Nữ" 2="Nam"` → OK → ô `{1, Nữ}…` |
| `d02-measure` | Dropdown Measure + bảng Scale/Ordinal/Nominal với quy tắc nhớ |
| `d02-toggle` | View → Value Labels: ô `1/2` → `Nữ/Nam` — nhấn mạnh "chỉ đổi cách hiển thị" |
| `d02-save` | ⌘S/Ctrl+S → Analyze → Descriptive Statistics → Frequencies → Output Viewer đầu tiên (pane Outline + bảng Giới tính 65/95) |

## 4. Day 03 — coverage (6 guide / 19 scene)

| Guide | Nội dung (bám số liệu raw thật) |
|---|---|
| `d03-import-work` | Import `_raw` (thấy ngay `F`, `250`), Save As `clinic_bp_work.sav` trước khi sửa |
| `d03-frequencies` | Frequencies → output sex_code **76/83/9(1)/F(1), Total 161** — số liệu đếm thật từ CSV |
| `d03-descriptives` | Descriptives → bảng Min/Max lộ 250/−30/152.4/118, N=143 của followup |
| `d03-sexcode` (4 scenes) | Thao tác nhạy nhất: sửa `F` còn String → Variable View đổi Type Numeric (cảnh báo "chữ sót → missing") → Missing dialog Discrete=9 → Frequencies kiểm chứng. **4 recovery paths** + cấm Automatic Recode. |
| `d03-duplicates` | Data → Identify Duplicate Cases → patient_id → cột indicator → P088 trùng → xóa đúng dòng (Ctrl+click Mac) |
| `d03-finish` | Sửa 4 ô bất khả thi → missing, gắn lại nhãn, Save `clinic_bp_my_clean.sav`, kiểm chứng cuối (Min/Max sạch + nhãn Nữ/Nam) |

Workflow D-022 giữ nguyên: `clinic_bp.sav` (tham chiếu) → `clinic_bp_work.sav` (điểm lưu) → `clinic_bp_my_clean.sav` (file chính Ngày 04+). Không đụng canonical dataset.

## 5. Visual assets

- 3 file dữ liệu scene: `website/public/visual-guides/day01/scenes.json` (20KB), `day02/scenes.json` (20KB), `day03/scenes.json` (28KB) — **18 guide, 47 scene**, ~290 badge/callout.
- Không có file ảnh — visual render bằng component + scene data (đúng kiến trúc đã chọn; asset "generated" = mã + data, không phải PNG giả).
- Mọi guide đều có dòng: *"Hình mô phỏng thao tác SPSS — giao diện thực tế có thể khác tùy phiên bản và hệ điều hành."* + chip **MÔ PHỎNG**.

## 6. macOS / Windows

- OSSelector toàn cục trên cả 3 bài; lưu `spss-os`, auto-detect UA khi chưa chọn.
- Chrome cửa sổ mock đổi theo OS: macOS = traffic-light trái; Windows = −▢✕ phải (CSS `html[data-spss-os]`).
- `osNote` per guide: ⌘S/Ctrl+S, ⌘Z/Ctrl+Z, Spotlight/Start, Finder menu-path.
- Không bịa khác biệt: thao tác giống nhau dùng chung scene; khác biệt chỉ ghi qua `osNote` + chrome.

## 7. Interactive đã implement

- **Menu simulation thật:** click `File` → dropdown mở → hover/click `Import Data` → submenu → click `CSV Data…` → scene nhảy tới dialog. Idem Analyze→Frequencies, Data→Identify Duplicates, View→Value Labels, tab Variable View, nút OK/Save/…
- Nav **‹ Trước / Tiếp ›** + counter `n/N` trên mọi guide.
- **Legend callout:** click mục ①②③ dưới scene → control tương ứng pulse cam.
- Troubleshooting `<details>` per guide (mở được, có recovery paths).
- Checkpoint `[x] Tôi đã thực hiện xong bước này` → `done['step:<id>']` cùng key progress cũ.

## 8. Giới hạn còn lại (trung thực)

- Chưa có ảnh SPSS thật — `MAC_SPSS_VERIFICATION_PENDING` vẫn đứng; mock dựa trên layout SPSS 29/30 phổ biến; vài mục ghi `CHƯA XÁC MINH TRÊN PHẦN MỀM THẬT` (nút Value Labels toolbar, Read CSV File dialog title, Apply Data Dictionary path).
- Screenshot checklist Ngày 01–03 (`track-14day/screenshot-checklist.md`) vẫn `NOT_CAPTURED` — mock **bổ sung**, không thay thế việc chụp thật khi pilot.
- Hover submenu trên mobile phụ thuộc tap-toggle `is-subopen` — kiểm thử DOM được, chưa test thiết bị cảm ứng thật.
- Mock không mô phỏng cuộn/pagination thật của grid 160 dòng (hiển thị đại diện + dòng cuối P160).
- `⏳ PENDING thao tác` của Day 03 giữ nguyên — mock minh họa quy trình đã spec, chưa xác minh trên SPSS.

## 9. Validation

| Kiểm tra | Kết quả |
|---|---|
| `npm run build` | **PASS — 54 pages**, không lỗi |
| d01/d02/d03 bai-hoc render guide | 6 + 6 + 6 `<figure class="sguide">`, 14/14/19 scenes trong DOM |
| Marker `{{guide:` lọt ra HTML | 0 (đã transform) |
| JS `/js/spss-guides.js` + `/js/progress.js` trong head | Có |
| **DOM-executed test (jsdom trên dist/)** | OS pick mac/win → `html[data-spss-os]` + `localStorage['spss-os']` đúng; next/prev 1/3→2/3; **click File→CSV Data advance 1→3/3**; legend click pulse đúng `.sm-item.sm-hot`; `data-stepdone` → `done['step:d01-open']` **giữ sau simulated refresh**; `lastPage` ghi đúng |
| Routes | 11 route + `visual-guides/*/scenes.json` → 200 |
| Leak `expected-results`/`planted-errors`/`INTERNAL` trên 3 trang | 0 |
| Progress schema | Không đổi — `done/answers/lastPage` cũ nguyên; step keys additive |
| `git diff --check` | CLEAN (đã renormalize `astro.config.mjs` CRLF→LF) |
| **Kiểm tra bằng trình duyệt thật** | **NOT_TESTED bởi tác giả** — môi trường không có browser automation; jsdom xác nhận DOM+JS, **bố cục/hover/visual fidelity chờ preview thủ công** (server chạy `localhost:4321`) |

## 10. Teaching risks

- Mock trông "gọn" hơn SPSS thật — disclaimer + troubleshooting cover; rủi ro learner tìm menu hơi khác vị trí (đã ghi "trên Mac menu nằm mép màn hình").
- `sex_code` String→Numeric vẫn là thao tác rủi ro thật — mock hiển thị đủ 4 cảnh + warning; cần pilot xác nhận wording SPSS 32 Mac.
- Scene `d01-wizard` gộp wizard nhiều trang thành 1 dialog — SPSS thật là wizard nhiều bước; lesson text vẫn nói rõ "Next qua các màn hình" — có thể gây lệch kỳ vọng nhẹ.
- Badge số trong ô grid dùng `{label}` — một số ô `hotRow`/`sel` là minh họa chọn, không phải trạng thái thật.

## 11. File đã thay đổi

```
website/src/components/spss/SpssMock.astro        (mới, ~295 dòng)
website/src/components/spss/SPSSActionGuide.astro (mới)
website/src/components/spss/OSSelector.astro      (mới)
website/public/js/spss-guides.js                  (mới)
website/public/js/progress.js                     (+data-stepdone restore/persist)
website/public/visual-guides/day01/scenes.json    (mới)
website/public/visual-guides/day02/scenes.json    (mới)
website/public/visual-guides/day03/scenes.json    (mới)
website/src/styles/custom.css                     (+SPSS mock/guide CSS ~330 dòng)
website/scripts/sync-content.mjs                  ({{guide:id}} transform + conditional imports + LF renormalize)
website/astro.config.mjs                          (+spss-guides.js head script; LF renormalize)
track-14day/day-01-lan-dau-mo-spss/lesson.md      (+6 marker {{guide:…}})
track-14day/day-02-bien-va-ma-hoa/lesson.md       (+6 marker)
track-14day/day-03-lam-sach-du-lieu/lesson.md     (+6 marker)
src/content/docs/d01|d02|d03/bai-hoc.mdx          (generated — không commit)
```

## 12. Git

- Commit local: xem log — **không push, không deploy** theo yêu cầu.
- `design-prototypes/` vẫn untracked, không stage.
- generated `dist/`, `src/content/docs/`, `public/datasets/` gitignored như cũ.

---
*Preview test: `cd website && npx astro preview` → http://localhost:4321/d01/bai-hoc/ — mở xuống từng Bước để xem mock + bấm thử menu.*
