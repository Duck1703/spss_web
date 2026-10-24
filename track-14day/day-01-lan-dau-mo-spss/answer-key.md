# Ngày 01 — Đáp án & giải thích

> Đọc **sau khi** đã làm xong `workbook.md`. Số liệu tính từ file CSV thật của khóa học
> (GIẢ LẬP; cross-check bằng Python — xem `datasets/expected-results.md`, nhãn `NOT_RUN` cho SPSS).

---

## BT1 — Import `exercise_hba1c_pairs.csv`

1. **24 dòng × 3 cột** (`patient_id`, `hba1c_t0`, `hba1c_t3`). Nếu bạn thấy 24 dòng + 1 dòng toàn
   khoảng trống ở cuối thì vẫn đúng — SPSS đôi khi hiển thị thêm dòng trống sau dữ liệu.
2. Một dòng = **một bệnh nhân đái tháo đường** được đo HbA1c hai lần (trước và sau 3 tháng
   tư vấn dinh dưỡng). Hai cột `hba1c_t0/t3` là hai lần đo **của cùng một người** — chi tiết này
   sẽ quan trọng ở Ngày 07 (paired t-test).
3. R01: `hba1c_t0` = **6.5%** → đọc: "Bệnh nhân R01 có HbA1c 6,5% trước chương trình."
4. Có — file `.sav` lưu được và mở lại đầy đủ.

*Lỗi hay gặp:* quên chọn "dòng đầu = tên biến" → SPSS đặt tên biến `V1, V2, V3` và dòng
`patient_id,hba1c_t0,hba1c_t3` thành dữ liệu dòng 1. **Sửa:** đóng không lưu, import lại với
"Read variable names from first row = Yes".

## BT2 — Data View hay Variable View

1. **Data View** (đó là số liệu). 2. **Variable View** (cột `Type`). 3. **Data View** (đếm dòng).
4. **Variable View** (cột `Label`/`Values`).

*Lỗi hay gặp:* tìm nhãn giá trị trong Data View — Data View chỉ hiện số/nhãn hiển thị,
còn *định nghĩa* nằm ở Variable View (học kỹ Ngày 02).

## BT3 — Ô trống

1. Ví dụ một id hợp lệ: bất kỳ dòng nào có `followup_completed = 0` sẽ có `sbp_followup` trống
   (trong bản sạch có 23 dòng như vậy).
2. Vì bệnh nhân đó **không quay lại tái khám** → không có đo huyết áp 3 tháng.
3. **Thiếu thật**, không phải lỗi nhập — dữ liệu không tồn tại. Trong phân tích, SPSS sẽ tự loại
   dòng này ra khỏi các phép tính cần `sbp_followup` (listwise). **Không** điền 0 hay điền đoán.

## BT4 — Bảng của phòng xét nghiệm

1. Đơn vị quan sát = **một lần đo** (không phải một bệnh nhân).
2. **Không.** Vì một bệnh nhân có thể có nhiều dòng; số bệnh nhân = số `patient_id` *khác nhau*,
   không phải số dòng. Đây là lỗi rất hay gặp khi đọc bảng "dài".
3. Không. `fasting` chỉ là mã 0/1 cho hai trạng thái — "đói trung bình = 0,4" vô nghĩa.
   Con số chỉ có nghĩa khi nó là phép đo thật (kiểu biến định lượng — khái niệm sẽ dùng liên tục
   từ Ngày 02).

*Cách tự sửa:* mỗi khi mở một bảng mới, hỏi đúng hai câu — **"một dòng là ai?"** và
**"trung bình của cột này có nghĩa không?"**
