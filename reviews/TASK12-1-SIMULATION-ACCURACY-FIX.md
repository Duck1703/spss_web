# TASK 12.1 — SIMULATION ACCURACY FIX

Ngày: (xem git log) · Base commit: `bc448d5` · Commit: `607b7ec` (amended; xem `git log -1` để chắc chắn)

## 1. Lỗi đã xác nhận và sửa

| Vị trí | Sai | Đúng (theo CSV) |
|---|---|---|
| `day02` Frequencies `sex_code` | Nữ 65 / Nam 95 / Total 160 | Nữ 76 / Nam 83 / Missing System 1 / Total 160 (Valid 159) |
| `day02` ifWrong | Gợi ý 76/83 = "import nhầm file" | Đã bỏ; hướng dẫn kiểm tra đúng dataset `clinic_bp_v1_clean.csv` |
| `day02` ví dụ P003 | age 55, sex 1 | age 47, sex 2 (Nam), BMI 23.9, SBP 131, nhóm B |
| `day02` `treatment_group` | Numeric; A="Amlodipine", B="Valsartan" | String; A = Điều trị chuẩn, B = Chuẩn + hỗ trợ tuân thủ |
| `day03` `sbp_followup` raw N | 143 | 138 |
| `day03` clean ranges | max khác (age 78, bmi 41.6, adherence 98…) | age 24–82, bmi 17.5–36.1, sbp 98–177, adherence 18.3–96.2 |
| `day03` raw freq sex_code | sai tỉ lệ | 1=76, 2=83, 9=1, F=1 (total 161) |
| `day03` trạng thái sau sửa | 77/82 | work: 1=77, 2=83, Missing 9=1, total 161 → clean (sau xóa P088 trùng): Nữ 76, Nam 83, Missing 1, Total 160 |
| `day03` P088 duplicates | thứ tự/indicator sai | PrimaryLast: dòng P088 đầu (giữa P087/P089) = 0 (trùng), dòng sau (giữa P104/P105) = 1 (giữ lại); P088 có sex_code=1 |
| Cả 3 file | nhãn y khoa bịa | theo codebook: `sex_code` nhãn "Giới", `treatment_group` "Điều trị chuẩn" |

Nguồn sự thật: `datasets/synthetic-raw/clinic_bp_v1_raw.csv` (161 dòng), `datasets/cleaned/clinic_bp_v1_clean.csv` (160), `datasets/codebooks/clinic_bp.md`, `planted-errors-INTERNAL.md`.

## 2. Audit 47 scene — phương pháp

Script mới `website/scripts/check-scene-data.mjs` đọc CSV thật + codebook expected và rà soát toàn bộ scene:

- Grid dòng bệnh nhân (Pxxx) ↔ giá trị cell ↔ CSV (chấp nhận hiển thị value-label khi khớp codebook).
- Bảng Frequencies `sex_code` theo 3 trạng thái: `raw` (1:76/2:83/9:1/F:1, total 161), `work` (đã F→1, chưa xóa trùng: 1:77/2:83, Missing 9:1, valid 160/grand 161 — scene gắn `dataState:"work"`), `clean` (Nữ 76/Nam 83/System 1, total 160 — `dataState:"clean"`).
- Bảng Descriptives: N/min/max/mean/SD khớp CSV theo đúng state.
- Callout: mỗi số callout phải có control mang `hot`/`tabHot`/`menubarHot`/`menuHotN`/`hotRow` tương ứng — bổ sung marker cho menubar, tabs, header cột, outline, cell bảng, listbox.

Kết quả: **243 checks, 0 FAIL**.

## 3. Sửa tính rõ ràng của tương tác (không đổi kiến trúc)

- `spss-guides.js`: nút menu chỉ mở/advance khi scene đó định nghĩa dropdown/advanceMenu — menu không hướng dẫn giờ inert.
- `SPSSActionGuide.astro` + CSS: phân biệt control hướng dẫn (click được, có cursor/hover) vs control chỉ minh họa; legend callout vẫn pulse.
- Không bịa path menu khác OS — ghi chú OS giữ nguyên câu dùng chung, `MAC_SPSS_VERIFICATION_PENDING` giữ nguyên.

## 4. Kết quả validation

| Kiểm tra | Kết quả |
|---|---|
| JSON parse 3 file scenes | PASS |
| `node scripts/check-scene-data.mjs` | 243 checks, 0 FAIL |
| `npm run build` | PASS, 54 trang |
| jsdom: nav scene, menu inert khi không có dropdown, OS selector, `data-stepdone` persist + restore sau "refresh" | PASS |
| `git diff --check` | PASS (LF warnings chỉ là core.autocrlf) |
| Kiểm tra trình duyệt thật | **NOT_TESTED** — chỉ jsdom; preview http://localhost:4321 |
| Thực thi SPSS thật | NOT_RUN — không có runtime; mọi số liệu tính bằng Python từ CSV |

## 5. Còn bất định (đánh dấu trong nội dung)

- Wording menu một số phiên bản SPSS trên macOS (`CHƯA XÁC MINH TRÊN PHẦN MỀM THẬT`).
- Giao diện Identify Duplicate Cases (thứ tự dòng hiển thị khi sort) cần xác minh trên máy thật.

## 6. File đã thay đổi

- `website/public/visual-guides/day01/scenes.json` — nhãn/ví dụ đúng dataset + hot markers.
- `website/public/visual-guides/day02/scenes.json` — freq 76/83/System 1, treatment String + nhãn đúng, P003 thật, hot markers.
- `website/public/visual-guides/day03/scenes.json` — raw/clean/work states chính xác, P088 PrimaryLast, hots, `dataState`.
- `website/src/components/spss/SpssMock.astro` — hỗ trợ `menubarHot`, `menuHot`/`menuHotN`, `tabHot`, `col.hot`, outline `hot`, list `hot` (badge ở box).
- `website/src/components/spss/SPSSActionGuide.astro` — phân biệt control hướng dẫn/minh họa.
- `website/public/js/spss-guides.js` — menu inert khi scene không định nghĩa dropdown.
- `website/src/styles/custom.css` — style control guided vs visual-only.
- `website/scripts/check-scene-data.mjs` — **mới**: kiểm tra nhất quán scene↔CSV (reusable).
- `reviews/TASK12-1-SIMULATION-ACCURACY-FIX.md` — file này.
- `report/` — refresh latest-only package.
