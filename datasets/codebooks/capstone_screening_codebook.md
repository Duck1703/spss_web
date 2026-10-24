# Codebook — `capstone_screening` (DS-CAP)

> ⚠️ **SIMULATED — dữ liệu giả lập 100%**, sinh bằng `datasets/generators/generate_all.py` (seed `20261026`).
> Mã W001–W090 hư cấu. Dùng cho Capstone Ngày 12–13. **Không phải bằng chứng lâm sàng.**

## Bối cảnh giả lập

Khoa y tế của một khu công nghiệp khám sức khỏe định kỳ cho 90 công nhân. Họ muốn biết tình trạng
huyết áp của công nhân và liệu làm **ca đêm luân phiên** có đi kèm huyết áp cao hơn.
Đơn vị quan sát: **mỗi dòng = một công nhân**.

## File

| File | Vai trò | Dòng |
|---|---|---|
| `synthetic-raw/capstone_screening_raw.csv` | Bản gốc có lỗi gài — Ngày 12 làm sạch. Bất biến. | 91 |
| `cleaned/capstone_screening_clean.csv` | Bản sạch tham chiếu — đối chiếu sau khi tự làm sạch. | 90 |

## Từ điển biến

| Tên biến | Nhãn | Đơn vị / mã | Type | Measure |
|---|---|---|---|---|
| `worker_id` | Mã công nhân | W001–W090 | String | Nominal |
| `age_years` | Tuổi | năm | Numeric | Scale |
| `sex_code` | Giới | 1 = Nữ · 2 = Nam | Numeric | Nominal |
| `bmi` | Chỉ số khối cơ thể | kg/m² | Numeric | Scale |
| `shift_type` | Loại ca làm việc | 0 = ca ngày · 1 = ca đêm luân phiên | Numeric | Nominal |
| `smoking_status` | Tình trạng hút thuốc | 0 = không hút · 1 = đã bỏ · 2 = đang hút | Numeric | Nominal |
| `sleep_hours` | Giờ ngủ trung bình mỗi đêm (tự báo cáo) | giờ | Numeric | Scale |
| `caffeine_cups` | Số ly cà phê/trà đặc trung bình mỗi ngày | ly | Numeric | Scale |
| `sbp` | Huyết áp tâm thu đo tại buổi khám | mmHg | Numeric | Scale |
| `fasting_glucose` | Đường huyết đói | mmol/L | Numeric | Scale |
