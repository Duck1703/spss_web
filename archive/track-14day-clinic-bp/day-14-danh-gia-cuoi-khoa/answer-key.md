# Ngày 14 — Đáp án tham chiếu & hướng dẫn chấm

> Bản sạch chuẩn: `datasets/cleaned/assessment_gp_clean.csv` (60 dòng — dataset này **không có**
> dòng trùng; làm sạch = xử lý 4 giá trị).
> Số liệu cross-check Python (`NOT_RUN` trên SPSS).

---

## 1. Bốn lỗi gài trong `assessment_gp_raw.csv`

| # | Vị trí | Vấn đề | Phát hiện điển hình | Xử lý tham chiếu |
|---|---|---|---|---|
| 1 | `H012` | `age_years = 190` | Descriptives max | → system-missing |
| 2 | `H031` | `sbp = -15` | Descriptives min âm | → system-missing |
| 3 | `H045` | `sex_code` trống | Frequencies: System missing | → giữ missing (đã sẵn trống) |
| 4 | `H052` | `activity_level = 9` | Frequencies: mã ngoài {1,2,3} | → system-missing |

*Sau làm sạch: `age_years` n=59 · `sbp` n=59 · `sex_code` missing 1 · `activity_level` missing 1.*

## 2. Bảng mô tả tham chiếu (bản sạch)

| Đặc điểm | Kết quả (n=60) |
|---|---|
| Tuổi, mean ± SD | 47,3 ± 11,9 (n=59) |
| Nữ, n (%) | 32/59 (54,2%) — 1 missing |
| BMI, mean ± SD | 25,4 ± 3,7 |
| Vòng eo (cm), mean ± SD | 89,0 ± 8,8 |
| SBP (mmHg), mean ± SD | 115,5 ± 12,0 (n=59) |
| Đường huyết đói (mmol/L), mean ± SD | 5,4 ± 0,7 |
| Đang hút thuốc, n (%) | 12/60 (20,0%) |
| Vận động ít/vừa/nhiều, n | 22 / 31 / 6 (1 missing) |

## 3. Phân tích suy luận — các lựa chọn hợp lệ và kết quả mong đợi

Đề bài hỏi "yếu tố đi cùng SBP" → nhiều lựa chọn chấp nhận được; chấm theo *quy trình đúng*
hơn là bắt buộc một phân tích cụ thể:

| Lựa chọn | Kỳ vọng (`NOT_RUN`) | Ghi chú chấm |
|---|---|---|
| `waist_cm` × `sbp` (Pearson) | r = 0,11, p = 0,396, n=59 | **Không có nghĩa** — đáp án đúng nếu viết "chưa phát hiện liên quan có ý nghĩa" kèm CI |
| `bmi` × `waist_cm` (Pearson) | r = 0,75, p < 0,001 | Mạnh — nhưng lạc đề câu hỏi SBP nếu nộp riêng lẻ |
| `sbp` ~ `smoker_current` (t-test) | 116,2 (n=47) vs 112,8 (n=12); t=0,89, **p=0,378** | n nhỏ nhóm hút — nêu giới hạn cỡ mẫu |
| `sbp` ~ `activity_level` (3 nhóm) | ANOVA là phương án hợp lệ (ngoài core, xem Ngày 10 tùy chọn) | Chấp nhận nếu nêu đúng lý do |
| Mô tả theo giới/nhóm tuổi | Mô tả thuần — không tính là "suy luận" | Chỉ đạt mục 2 |

**Chấm phân tích:** phương pháp hợp lệ + điều kiện đã kiểm + đọc đúng + diễn giải thận trọng
= đủ điểm hạng mục 3 kể cả khi kết quả "không có nghĩa".

## 4. Câu kết quả mẫu cho lựa chọn waist × SBP

> "Vòng eo tương quan dương rất yếu với SBP trong mẫu 59 người này (r = 0,11; p = 0,396;
> 95% CI [−0,15 ; 0,36]) — chưa có bằng chứng liên quan có ý nghĩa. Giới hạn: mẫu giả lập,
> cắt ngang, một số trường missing sau làm sạch; không loại trừ khả năng liên quan thật nhỏ
> (CI rộng)."

## 5. Các mất điểm phổ biến

- Chọn phân tích "vì ra p<0,05 đẹp" thay vì vì câu hỏi → mất điểm mục 3 (lý do chọn).
- Sửa `age=190` thành 60 ("cho hợp lý") → mất điểm nguyên tắc làm sạch.
- Viết "vòng eo KHÔNG liên quan với SBP" → quá tay; đúng là "chưa phát hiện trong mẫu này".
- Bảng mô tả thiếu n hoặc dùng mean cho `activity_level` (ordinal 3 mức → n%).
