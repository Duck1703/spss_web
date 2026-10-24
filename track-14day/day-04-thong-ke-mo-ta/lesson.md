# Ngày 04 — Thống kê mô tả

> **Lộ trình:** Practice-first 14 ngày · **Thời lượng:** ~90–120 phút · **Dataset:** `clinic_bp_my_clean.sav` — **file BẠN tự làm sạch + gắn nhãn ở Ngày 03** (đây là file làm việc chính từ giờ). *Chưa có?* → quay lại Ngày 03; tạm thời dùng `clinic_bp.sav` (bản chuẩn có nhãn) để không vỡ nhịp, nhưng phải hoàn thành Ngày 03 trước Ngày 12.
> **Trạng thái:** DRAFT — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`. Con số mong đợi = cross-check Python, nhãn `NOT_RUN`.

---

## A. Hôm nay bạn sẽ làm gì

1. Chạy **Frequencies** cho biến định tính: tần số + phần trăm.
2. Chạy **Descriptives/Explore** cho biến định lượng: mean, SD, min, max, median.
3. Hiểu khi nào nên báo cáo mean±SD, khi nào median (IQR).
4. Tạo một **"Bảng 1"** — bảng đặc điểm bệnh nhân kiểu bài báo y khoa.

## B. Tình huống y khoa

Bác sĩ Lan cần viết phần "Đặc điểm bệnh nhân" cho báo cáo nội bộ: *"160 bệnh nhân của chúng ta
là ai — bao nhiêu tuổi, bao nhiêu nam/nữ, bao nhiêu người có đái tháo đường, huyết áp trung bình
lúc nhập là bao nhiêu?"*

Mọi bài báo y khoa đều bắt đầu bằng bảng như vậy — gọi là **Table 1**. Hôm nay bạn tự tạo nó.

## C. Những điều cần biết trước

- **Tần số (frequency)** và **phần trăm**: cho biến định tính — "60/159 có đái tháo đường = 37,7%".
  Trong output SPSS nhớ đọc đúng cột: `Frequency` (số đếm), `Percent` (% trên tổng kể cả missing),
  `Valid Percent` (% chỉ trên dòng có dữ liệu) — **dùng Valid Percent** khi có missing.
- **Mean (trung bình)** và **SD (độ lệch chuẩn)**: tóm tắt biến định lượng — "huyết áp trung bình
  139 mmHg, SD 15". SD cho biết các giá trị rải quanh trung bình cỡ bao nhiêu.
- **Median (trung vị)** và **IQR**: khi dữ liệu lệch/có cực trị, trung bình bị kéo — median
  (giá trị đứng giữa) vững hơn. Báo cáo dạng "median 74 điểm (IQR 60–84)".
- Quy tắc chọn chỉ số: biến định tính → n (%); biến định lượng gần đối xứng → mean (SD);
  lệch rõ → median (IQR). *(Nhìn lệch thế nào? Histogram — Ngày 05.)*

## D. Thực hành từng bước trên Mac

> ⚠️ `MAC_SPSS_VERIFICATION_PENDING`

### Bước 1 — Tần số biến định tính

**Analyze → Descriptive Statistics → Frequencies…**

- Đưa `sex_code`, `diabetes_flag`, `smoking_status`, `treatment_group`, `followup_completed`,
  `bp_controlled` vào ô **Variable(s)** → OK.
- Trong Output Viewer: mỗi biến một bảng `Frequency / Percent / Valid Percent / Cumulative Percent`.

**Đọc thử (đối chiếu với con số mong đợi `NOT_RUN`, tính bằng Python):**

| Biến | Kỳ vọng |
|---|---|
| `sex_code` | Nữ 76 (Valid % ≈ 47,8), Nam 83 (≈ 52,2), missing 1 |
| `diabetes_flag` | Có = 60/159 (37,7%) |
| `smoking_status` | 0: 94 · 1: 37 · 2: 29 |
| `treatment_group` | A: 86 · B: 74 |
| `bp_controlled` | 0: 57 · 1: 80 · missing 23 → Valid % đạt ≈ 58,4 |

### Bước 2 — Chỉ số cho biến định lượng

**Analyze → Descriptive Statistics → Descriptives…** → đưa `age_years`, `bmi`, `sbp_baseline`,
`sbp_followup`, `adherence_score` → **Options…** → tick `Mean`, `Std. deviation`, `Minimum`,
`Maximum` → OK.

**Kỳ vọng (`NOT_RUN`, cross-check Python — bản sạch):**

| Biến | N | Mean | SD | Min | Max |
|---|---|---|---|---|---|
| `age_years` | 159 | 52,7 | 13,0 | 24 | 82 |
| `bmi` | 159 | 25,9 | 3,7 | 17,5 | 36,1 |
| `sbp_baseline` | 159 | 139,0 | 15,0 | 98 | 177 |
| `sbp_followup` | 137 | 135,1 | 18,6 | 95 | 171 |
| `adherence_score` | 159 | 70,4 | 17,9 | 18,3 | 96,2 |

> 🧭 Chú ý **N khác nhau** giữa các biến (159 vs 137) — do missing. Luôn đọc N trước khi đọc mean.

### Bước 3 — Median/IQR bằng Explore

`adherence_score` lệch (nhiều người tuân thủ cao) → cần median/IQR:

**Analyze → Descriptive Statistics → Explore…** → `adherence_score` vào **Dependent List** →
trong **Statistics…** tick `Percentiles` → Continue → OK.

Đọc bảng **Percentiles**: `50% (Median) ≈ 74,3` · `25% ≈ 60,2` · `75% ≈ 84,0` → IQR = 60,2–84,0.

### Bước 4 — Ghép thành Bảng 1

Mở một tài liệu (Word/Google Docs/Notes) và viết lại thành bảng theo kiểu y khoa — ví dụ:

| Đặc điểm | Kết quả (n=160) |
|---|---|
| Tuổi (năm), mean ± SD | 52,7 ± 13,0 |
| Nữ, n (%) | 76 (47,8%) |
| BMI (kg/m²), mean ± SD | 25,9 ± 3,7 |
| Có đái tháo đường, n (%) | 60 (37,7%) |
| Đang hút thuốc, n (%) | 29 (18,1%) |
| HA tâm thu lúc nhập (mmHg), mean ± SD | 139,0 ± 15,0 |
| HA tâm thu sau 3 tháng (mmHg), mean ± SD* | 135,1 ± 18,6 (*n=137 có tái khám) |
| Điểm tuân thủ (0–100), median [IQR] | 74,3 [60,2–84,0] |

## E. Hiểu kết quả của bạn

- Bạn vừa mô tả **mẫu 160 bệnh nhân giả lập** — chỉ số này nói đúng *về mẫu này*, không tự động
  nói về "bệnh nhân tăng huyết áp Việt Nam" (suy luận quần thể cần công cụ khác — Ngày 06+).
- Mọi % nên ghi kèm mẫu số (n=?), và nêu khi có missing.

## F. Bài tập tự làm

`workbook.md` — Bảng 1 cho dataset HbA1c + câu hỏi chọn chỉ số.

## G. Đáp án

`answer-key.md`.

## H. Checkpoint qua bài

- [ ] Một Bảng 1 hoàn chỉnh cho dataset clinic_bp (đủ biến chính, đúng đơn vị, ghi n và missing).
- [ ] Nói được khi nào dùng Valid Percent; vì sao `adherence_score` báo cáo median thay vì mean.

## I. Đọc thêm (không bắt buộc)

- **Cumulative Percent** trong bảng Frequencies = % tích lũy theo thứ tự mã — hữu ích cho biến
  ordinal, vô nghĩa với nominal thuần (đừng diễn giải "luỹ kế giới tính").
- **Descriptives vs Explore:** Descriptives gọn (mean/SD/min/max); Explore cho thêm median,
  percentiles, và cả histogram/kiểm định phân phối trong một chỗ — sẽ dùng lại ở Ngày 05–06.
- Nếu dữ liệu của bạn cần nhiều nhóm con (theo khoa, theo giới) → `Data → Split File…` hoặc
  `Analyze → Compare Means → Means…` — gặp Ngày 05.
