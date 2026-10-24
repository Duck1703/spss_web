# Ngày 01 — Workbook: Lần đầu mở SPSS

> Làm lần lượt, **không nhìn `answer-key.md`** cho tới khi xong.
> Đầu vào: SPSS đã mở được + file `exercise_hba1c_pairs.csv` (GIẢ LẬP) trong thư mục khóa học.

---

## BT1 — Import một file mới không nhìn hướng dẫn

Đóng file `clinic_bp.sav`. Hãy tự import `exercise_hba1c_pairs.csv` vào SPSS
(nhớ: dòng đầu là tên biến, phân cách bằng dấu `,`, thập phân dấu `.`).

1. File này có bao nhiêu dòng dữ liệu? Bao nhiêu cột (biến)?
2. Một dòng trong file này đại diện cho **ai/cái gì**?
   *(Gợi ý: đọc codebook `datasets/codebooks/exercise_hba1c_codebook.md` nếu không chắc.)*
3. Ô `hba1c_t0` của bệnh nhân R01 bằng bao nhiêu? Đọc bằng lời thành một câu đầy đủ
   (ví dụ: "Bệnh nhân R01 có …").
4. Lưu file này thành `hba1c_pairs.sav` trong thư mục khóa học. Đóng SPSS, mở lại, mở lại file `.sav` —
   dữ liệu có còn đó không?

---

## BT2 — Data View hay Variable View?

Với mỗi việc sau, ghi bạn sẽ nhìn ở tab nào (Data View / Variable View):

1. Xem con số huyết áp của từng bệnh nhân.
2. Xem biến `sex_code` được định nghĩa là kiểu số hay chuỗi.
3. Đếm xem có bao nhiêu bệnh nhân trong file.
4. Xem `diabetes_flag` có ghi nhãn gì không.

---

## BT3 — Đọc một ô trống

Trong `clinic_bp.sav` (mở lại file này), cuộn tìm một dòng có `sbp_followup` trống (hiển thị `.`).

1. Ghi `patient_id` của một dòng như vậy.
2. Theo bạn, vì sao ô đó trống? (Nhìn cột `followup_completed` của cùng dòng.)
3. Ô trống này là "lỗi cần sửa" hay "thiếu thật"? Giải thích một câu.

---

## BT4 — Tình huống mới: bảng của phòng xét nghiệm

Phòng xét nghiệm gửi bạn một file CSV mà **mỗi dòng là một lần đo đường huyết**, một bệnh nhân
có thể có nhiều dòng. File có 340 dòng, 5 cột: `patient_id, visit_date, glucose, fasting, note`.

1. Đơn vị quan sát của file này là gì — bệnh nhân hay lần đo?
2. Nếu file có 340 dòng, bạn có kết luận được là có 340 bệnh nhân không? Vì sao?
3. `fasting` có mã `0 = đã ăn, 1 = nhịn đói`. Biến này là số — trung bình của nó có nghĩa không?

*(BT4 chỉ cần suy luận trên giấy — không cần mở file.)*
