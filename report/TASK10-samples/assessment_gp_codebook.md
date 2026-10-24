# Codebook — `assessment_gp` (DS-FINAL)

> ⚠️ **SIMULATED — dữ liệu giả lập 100%**, seed `20261027`. Dùng cho bài đánh giá cuối khóa Ngày 14.

## Bối cảnh giả lập

Một phòng mạch đa khoa khám sức khỏe tổng quát cho 60 người lớn. Người phụ trách muốn một báo cáo
mô tả + một phân tích so sánh/liên quan phù hợp. Đơn vị quan sát: **mỗi dòng = một bệnh nhân**.

## File

| File | Vai trò |
|---|---|
| `synthetic-raw/assessment_gp_raw.csv` | Bản gốc có 4 lỗi gài — học viên tự phát hiện và xử lý (Ngày 14). |
| `cleaned/assessment_gp_clean.csv` | Bản sạch tham chiếu — chỉ dùng để đối chiếu/chấm. |

## Từ điển biến

| Tên biến | Nhãn | Đơn vị / mã | Type | Measure |
|---|---|---|---|---|
| `patient_id` | Mã bệnh nhân | H001–H060 | String | Nominal |
| `age_years` | Tuổi | năm | Numeric | Scale |
| `sex_code` | Giới | 1 = Nữ · 2 = Nam | Numeric | Nominal |
| `bmi` | Chỉ số khối cơ thể | kg/m² | Numeric | Scale |
| `waist_cm` | Vòng eo | cm | Numeric | Scale |
| `sbp` | Huyết áp tâm thu tại buổi khám | mmHg | Numeric | Scale |
| `fasting_glucose` | Đường huyết đói | mmol/L | Numeric | Scale |
| `smoker_current` | Đang hút thuốc | 0 = không · 1 = có | Numeric | Nominal |
| `activity_level` | Mức vận động thể lực | 1 = ít · 2 = vừa · 3 = nhiều | Numeric | Ordinal |
