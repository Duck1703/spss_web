# Codebook — `clinic_bp` (DS-A)

> ⚠️ **SIMULATED — dữ liệu giả lập 100%**, sinh bằng `datasets/generators/generate_all.py` (seed `20261024`).
> Mã bệnh nhân P001–P160 là hư cấu, không tương ứng người thật. **Không dùng để kết luận lâm sàng.**

## Bối cảnh giả lập

Một phòng khám quận theo dõi 160 bệnh nhân tăng huyết áp ngoại trú. Mỗi bệnh nhân được đo
huyết áp tâm thu lúc nhập chương trình (`sbp_baseline`) và sau 3 tháng (`sbp_followup`).
Một số bệnh nhân được đưa vào nhóm hỗ trợ thêm (`treatment_group = B`) **theo quyết định lâm sàng —
không phải phân nhóm ngẫu nhiên**. Đơn vị quan sát: **mỗi dòng = một bệnh nhân**.

## File

| File | Vai trò | Dòng |
|---|---|---|
| `synthetic-raw/clinic_bp_v1_raw.csv` | Bản gốc **có lỗi gài có chủ đích** — dùng cho Ngày 03 (làm sạch). Bất biến. | 161 |
| `cleaned/clinic_bp_v1_clean.csv` | Bản sạch tham chiếu sau khi áp quy tắc sửa đã công bố — dùng từ Ngày 01–02 và Ngày 04 trở đi. | 160 |

CSV: UTF-8, header ở dòng đầu (sau 1 dòng comment `#` nhãn SIMULATED), dấu `,` phân cột, dấu `.` thập phân,
ô trống = missing.

## Từ điển biến

| Tên biến | Nhãn (Variable Label) | Đơn vị / mã | Type | Measure | Missing |
|---|---|---|---|---|---|
| `patient_id` | Mã bệnh nhân (hư cấu) | P001–P160 | String | Nominal | — |
| `age_years` | Tuổi | năm | Numeric | Scale | trống |
| `sex_code` | Giới | 1 = Nữ · 2 = Nam | Numeric | Nominal | trống, 9 |
| `bmi` | Chỉ số khối cơ thể | kg/m² | Numeric | Scale | trống |
| `sbp_baseline` | Huyết áp tâm thu lúc nhập chương trình | mmHg | Numeric | Scale | trống |
| `treatment_group` | Nhóm điều trị | A = điều trị chuẩn · B = chuẩn + hỗ trợ tuân thủ | String (1) | Nominal | — |
| `adherence_score` | Điểm tuân thủ điều trị | 0–100 (điểm) | Numeric | Scale | trống |
| `diabetes_flag` | Có chẩn đoán đái tháo đường | 0 = không · 1 = có | Numeric | Nominal | trống |
| `smoking_status` | Tình trạng hút thuốc | 0 = không hút · 1 = đã bỏ · 2 = đang hút | Numeric | Nominal | — |
| `sbp_followup` | Huyết áp tâm thu sau 3 tháng | mmHg | Numeric | Scale | trống |
| `followup_completed` | Hoàn thành tái khám 3 tháng | 0 = không · 1 = có | Numeric | Nominal | — |
| `bp_controlled` | Huyết áp đạt kiểm soát sau 3 tháng | 0 = không (sbp_followup ≥140) · 1 = có (<140) | Numeric | Nominal | trống (khi chưa có follow-up) |

## Quy ước missing

- Ô trống trong CSV → SPSS đọc là **system missing** (hiển thị `.` trong Data View).
- Mã `sex_code = 9` là **lỗi gài** (ngoài miền {1,2}) — không phải quy ước missing hợp lệ; bài Ngày 03 xử lý.
- `sbp_followup`/`bp_controlled` trống khi `followup_completed = 0` (bệnh nhân không tái khám).

## Giới hạn diễn giải

- Quan hệ giữa các biến trong file là do generator tạo ra để luyện tập — **không phải hiệu quả điều trị thật**.
- `treatment_group` **không** được ngẫu nhiên hóa → mọi khác biệt giữa nhóm chỉ là liên quan, có thể nhiễu (ví dụ tuổi).
