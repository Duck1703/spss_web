# Ngày 01 — Workbook: Lần đầu mở SPSS

> Làm lần lượt, **không nhìn `answer-key.md`** cho tới khi xong.
> Đầu vào: SPSS đã mở được + file `exercise_hba1c_pairs.csv` (GIẢ LẬP — tải ở trang Dữ liệu)
> trong thư mục khóa học.
> Bị kẹt ở đâu → mở đúng **Gợi ý** của câu đó trước, đừng nhảy thẳng vào đáp án.

---

## BT1 — Import một file mới *không nhìn hướng dẫn*

Đóng `clinic_bp.sav`. Tự import `exercise_hba1c_pairs.csv` vào SPSS và trả lời:

1. File này có bao nhiêu dòng dữ liệu? Bao nhiêu cột (biến)?
2. Một dòng trong file này đại diện cho **ai/cái gì**?
3. Ô `hba1c_t0` của bệnh nhân R01 bằng bao nhiêu? Đọc thành một câu đầy đủ
   (ví dụ: "Bệnh nhân R01 có …").
4. Lưu file thành `hba1c_pairs.sav` trong thư mục khóa học. Thoát SPSS (⌘Q), mở lại,
   mở lại file `.sav` — dữ liệu có còn đó không?

> ✅ **Sản phẩm:** `hba1c_pairs.sav` lưu đúng thư mục · mở lại được sau khi thoát SPSS · đếm đúng số dòng/cột

> **Gợi ý 1** (nếu quên wizard): File → Import Data → CSV Data… → 3 câu: header **Yes**,
> delimiter **Comma**, decimal **Period**.
>
> **Gợi ý 2** (nếu không biết "một dòng là ai"): đọc codebook `exercise_hba1c_codebook.md`
> trong thư mục datasets/codebooks — đơn vị quan sát ghi ở phần đầu.
>
> **Gợi ý 3** (nếu không chắc file lưu đúng): mở Finder, vào `~/Documents/spss-learning/`,
> phải thấy `hba1c_pairs.sav` nằm cạnh `clinic_bp.sav`.

## BT2 — Data View hay Variable View?

Với mỗi việc sau, ghi bạn sẽ nhìn ở tab nào (Data View / Variable View) — làm trên giấy:

1. Xem con số huyết áp của từng bệnh nhân.
2. Xem biến `sex_code` được định nghĩa kiểu số hay chuỗi.
3. Đếm xem có bao nhiêu bệnh nhân trong file.
4. Xem `diabetes_flag` có ghi nhãn gì không.

> **Gợi ý:** hỏi "thứ tôi cần là *con số* hay *định nghĩa*?" — con số → Data View;
> định nghĩa → Variable View.

## BT3 — Đọc một ô trống

Mở lại `clinic_bp.sav`. Cuộn tìm một dòng có `sbp_followup` trống (hiển thị `.`).

1. Ghi `patient_id` của một dòng như vậy.
2. Theo bạn vì sao ô đó trống? *(Nhìn cột `followup_completed` của cùng dòng.)*
3. Ô trống này là "lỗi cần sửa" hay "thiếu thật"? Giải thích một câu.

> **Gợi ý:** `followup_completed = 0` nghĩa là bệnh nhân không quay lại tái khám —
> hỏi "khi đó con số `sbp_followup` có *tồn tại* không?"

## BT4 — Tình huống mới: bảng của phòng xét nghiệm

Phòng xét nghiệm gửi file CSV mà **mỗi dòng là một lần đo đường huyết** — một bệnh nhân
có thể có nhiều dòng. File có 340 dòng, 5 cột: `patient_id, visit_date, glucose, fasting, note`.

1. Đơn vị quan sát của file này là gì — bệnh nhân hay lần đo?
2. Nếu file có 340 dòng, có kết luận được là có 340 bệnh nhân không? Vì sao?
3. `fasting` có mã `0 = đã ăn, 1 = nhịn đói`. Biến này là số — "trung bình fasting = 0,4"
   có nghĩa không?

*(BT4 chỉ suy luận trên giấy — không cần mở file.)*

> **Gợi ý:** quay lại câu hỏi nền của Ngày 01 — "một dòng là ai?" Áp dụng y hệt vào file mới.
