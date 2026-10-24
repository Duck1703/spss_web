# Ngày 02 — Đáp án & giải thích

> Đọc sau khi làm xong `workbook.md`. Quy ước: mỗi đáp án gồm đáp án → lý do → lỗi hay gặp → tự sửa.

---

## BT1 — Định nghĩa `hba1c_pairs.sav`

1. Label gợi ý: `patient_id` → "Mã bệnh nhân"; `hba1c_t0` → "HbA1c trước chương trình (%)";
   `hba1c_t3` → "HbA1c sau 3 tháng (%)".
2. `hba1c_t0`/`hba1c_t3` → **Scale**: HbA1c là đại lượng đo bằng số, trung bình có nghĩa
   (ví dụ "HbA1c trung bình giảm 0,3%").
3. `patient_id` **không cần** Value Labels — nó là mã định danh, mỗi giá trị là một người duy nhất,
   không phải mã hóa nhóm.
4. Nhật ký làm việc nên có: ngày, file, việc đã làm ("điền Label + Measure cho 3 biến").

*Lỗi hay gặp:* đặt `hba1c` là Ordinal vì "có lớn nhỏ" — Ordinal dành cho biến *định tính có thứ tự*
(nhẹ/vừa/nặng); HbA1c là số đo thật → Scale.

## BT2 — Measure

| # | Biến | Measure | Lý do |
|---|---|---|---|
| 1 | `ward_code` | Nominal | Khoa chỉ là nhãn nhóm, không thứ tự |
| 2 | `pain_score` | Ordinal (chấp nhận Scale nếu giải thích được) | Thang 0–10 có thứ tự nhưng "đau 8 đau gấp đôi đau 4" là không đúng → bản chất thứ bậc; nhiều nghiên cứu vẫn coi như Scale khi phân tích — quan trọng là *biết mình đang giả định gì* |
| 3 | `nyha_class` | Ordinal | I→IV là thứ tự nặng dần rõ ràng, khoảng cách không đều |
| 4 | `weight_kg` | Scale | Đo thật, trung bình có nghĩa |
| 5 | `hospital_id` | Nominal | Mã định danh |

*Lỗi hay gặp:* cho `pain_score` và `satisfaction` là Scale "vì là số". Quy tắc: số có *khoảng cách đều*
và phép tính có nghĩa mới là Scale.

## BT3 — Đối chiếu codebook

1. Tự kiểm tra — tất cả biến phải khớp cột Measure trong codebook.
2. `bp_controlled = 1` = huyết áp tâm thu sau 3 tháng `< 140 mmHg` (đạt kiểm soát); `0` = ≥140;
   trống khi chưa có đo tái khám.
3. `patient_id` và `treatment_group` là **String** vì chứa chữ cái (`P001`, `A`/`B`).
   Biến chữ không nhận "missing rời rạc" theo số — ô trống của nó là chuỗi rỗng.

## BT4 — Phiếu khảo sát

1. `satisfaction` 1–5 → **Ordinal**: có thứ tự rõ, nhưng khoảng cách giữa "rất không hài lòng" và
   "không hài lòng" không đo được bằng số. (Báo cáo thực tế hay tả bằng % chọn từng mức.)
2. `sex_text` nên **recode thành biến số mới** (ví dụ `sex_code`: 1=F, 2=M) kèm Value Labels —
   biến số tiện cho lọc, đếm, chia nhóm; giữ nguyên cột chữ gốc để truy vết.
3. Sau 3 tháng không ai nhớ 1 là nam hay nữ → file trở nên mơ hồ, dễ diễn giải ngược.
   **Bài học: mã hóa luôn phải đi kèm Value Labels + ghi vào codebook.**
