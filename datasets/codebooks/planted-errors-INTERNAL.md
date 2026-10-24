# Danh mục lỗi gài — NỘI BỘ (không đưa lên website / không cho học viên)

> File này liệt kê các lỗi cố tình gài trong bản `*_raw.csv` để phục vụ bài làm sạch dữ liệu
> và chấm đáp án. **Không public** — lộ danh mục sẽ phá bài tập "tự phát hiện lỗi".

## `clinic_bp_v1_raw.csv` (9 lỗi — Ngày 03)

| # | Vị trí | Lỗi | Phát hiện bằng | Xử lý tham chiếu (`clinic_bp_v1_clean.csv`) |
|---|---|---|---|---|
| 1 | `P037` | `age_years = 250` | Descriptives: max 250 | → missing (không đoán tuổi thật) |
| 2 | `P022` | `sex_code = 'F'` (chuỗi trong cột số) | Import: cột thành String; Frequencies | → `1` (F = Female, ý nghĩa không mơ hồ) |
| 3 | `P052` | `sex_code = 9` | Frequencies: nhãn ngoài {1,2} | → missing |
| 4 | `P074` | `sbp_baseline = -30` | Descriptives: min âm | → missing |
| 5 | `P088` | dòng bị **trùng lặp** (xuất hiện 2 lần, không kề nhau) | Data → Identify Duplicate Cases | → giữ dòng đầu, xóa bản trùng |
| 6 | `P103` | `bmi = 152.4` | Descriptives: max 152.4 | → missing |
| 7 | `P119` | `followup_completed = 1` nhưng `sbp_followup` trống | Crosstabs/sort: flag ≠ dữ liệu | → `followup_completed = 0` (thực tế không có đo tái khám); sbp_followup/bp_controlled vẫn missing |
| 8 | `P141` | `diabetes_flag` trống | Frequencies: System missing | → giữ missing (ghi nhận, không bịa) |
| 9 | `P007` | `adherence_score = 118` (> thang 100) | Descriptives: max 118 | → missing |

## `capstone_screening_raw.csv` (6 lỗi — Ngày 12)

| # | Vị trí | Lỗi | Xử lý tham chiếu (`capstone_screening_clean.csv`) |
|---|---|---|---|
| 1 | `W014` | `sleep_hours = -3` | → missing |
| 2 | `W027` | `shift_type = 7` | → missing |
| 3 | `W033` | `bmi` trống | → giữ missing |
| 4 | `W058` | `sbp = 260` | → missing |
| 5 | `W071` | dòng trùng lặp | → xóa bản trùng (giữ dòng đầu) |
| 6 | `W085` | `caffeine_cups = 42` | → missing |

## `assessment_gp_raw.csv` (4 lỗi — Ngày 14, học viên tự tìm)

| # | Vị trí | Lỗi | Xử lý tham chiếu (`assessment_gp_clean.csv`) |
|---|---|---|---|
| 1 | `H012` | `age_years = 190` | → missing |
| 2 | `H031` | `sbp = -15` | → missing |
| 3 | `H045` | `sex_code` trống | → giữ missing |
| 4 | `H052` | `activity_level = 9` | → missing |

## `exercise_hba1c_pairs.csv`

Không có lỗi gài (bài tập Ngày 07 tập trung vào paired t-test, không phải làm sạch).
