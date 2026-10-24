# Codebook — `exercise_hba1c_pairs` (DS-EX1)

> ⚠️ **SIMULATED — dữ liệu giả lập 100%**, seed `20261025`. Dùng cho bài tập độc lập Ngày 07.

## Bối cảnh giả lập

24 bệnh nhân đái tháo đường type 2 tham gia chương trình tư vấn dinh dưỡng. HbA1c
(xét nghiệm phản ánh đường huyết trung bình ~3 tháng) được đo **trước** chương trình (`hba1c_t0`)
và **sau 3 tháng** (`hba1c_t3`). Đơn vị quan sát: mỗi dòng = một bệnh nhân (hai lần đo ghép cặp).

## File

| File | Vai trò |
|---|---|
| `synthetic-raw/exercise_hba1c_pairs.csv` | File duy nhất — **không có lỗi gài**, dùng trực tiếp |

## Từ điển biến

| Tên biến | Nhãn | Đơn vị | Type | Measure |
|---|---|---|---|---|
| `patient_id` | Mã bệnh nhân | R01–R24 | String | Nominal |
| `hba1c_t0` | HbA1c trước chương trình | % | Numeric | Scale |
| `hba1c_t3` | HbA1c sau 3 tháng | % | Numeric | Scale |
