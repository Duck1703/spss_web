# Ngày 12 — Đáp án Capstone 1

> **Chỉ đọc sau khi đã tự tìm.** Bản sạch tham chiếu: `datasets/cleaned/capstone_screening_clean.csv`.
> Số liệu cross-check Python (`NOT_RUN` trên SPSS).

---

## Danh mục 6 lỗi gài (tham chiếu)

| # | Vị trí | Vấn đề | Phát hiện điển hình | Xử lý tham chiếu |
|---|---|---|---|---|
| 1 | `W014` | `sleep_hours = -3` | Descriptives: min âm | → system-missing |
| 2 | `W027` | `shift_type = 7` | Frequencies: mã ngoài {0,1} | → system-missing |
| 3 | `W033` | `bmi` trống | Frequencies/Descriptives: missing bất ngờ | → giữ missing, ghi nhận |
| 4 | `W058` | `sbp = 260` | Descriptives: max vô lý | → system-missing |
| 5 | `W071` | dòng trùng lặp | Identify Duplicate Cases | → giữ bản đầu, xóa bản trùng |
| 6 | `W085` | `caffeine_cups = 42` | Descriptives: max vô lý | → system-missing |

Kết quả: **90 dòng**, mọi biến trong miền codebook. Bản sạch chuẩn: `capstone_screening_clean.csv`.

## Số mô tả bản sạch để đối chiếu (n hợp lệ / mean / SD)

| Biến | n | mean | SD | Ghi chú |
|---|---|---|---|---|
| `age_years` | 90 | 37,2 | 9,0 | — |
| `bmi` | 89 | 24,5 | 3,6 | 1 missing |
| `sleep_hours` | 89 | 6,7 | 1,1 | 1 missing sau xử lý |
| `caffeine_cups` | 89 | 2,5 | 1,5 | 1 missing sau xử lý |
| `sbp` | 89 | 131,4 | 11,4 | 1 missing sau xử lý |
| `fasting_glucose` | 90 | 5,4 | 0,8 | — |
| `sex_code` | — | — | — | Nữ 32 / Nam 58 |
| `shift_type` | — | — | — | ngày 49 / đêm 40, missing 1 |
| `smoking_status` | — | — | — | 0:46 / 1:24 / 2:20 |

*Cho phép sai số làm tròn; nếu n của bạn lệch → rà lại xử lý missing.*

## Phần C — Phản biện

1. Vì **không có cơ sở biết số thật**. 260 có thể là lỗi gõ (nhầm 126? 160?), nhưng đoán số =
   bịa dữ liệu — nghiêm trọng hơn mất 1 quan sát. Quy tắc: giá trị không thể xảy ra và không
   truy nguồn được → missing.
2. Mã 7 không có ý nghĩa trong codebook — recode sang 1 là **phán đoán người nhập liệu nghĩ gì**,
   không an toàn. Missing trung thực hơn.
3. Mọi phân tích có `bmi` chỉ còn **n=89** — khi báo cáo phải ghi mẫu số; và nếu missing không
   ngẫu nhiên (vd: người béo phì hay bỏ cân) thì kết luận về `bmi` có thể lệch — điểm cần ghi
   trong giới hạn.

## Lỗi hay gặp khi tự làm

- Tìm 5 lỗi rồi dừng → gợi ý ở workbook nêu đủ 6 vị trí biến — đọc lại.
- Sửa trực tiếp trong file `.csv` gốc → **không được**; raw bất biến, sửa trên `.sav`.
- Đặt missing nhưng quên khai Missing trong Variable View — mã số lỗi vẫn trôi lại vào output.
