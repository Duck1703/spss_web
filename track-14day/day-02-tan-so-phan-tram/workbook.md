# Ngày 02 — Workbook: Tần số và phần trăm

> Làm lần lượt, **không nhìn `answer-key.md`** cho tới khi xong.
> Đầu vào: `p1_B01_HA (1).sav` đã mở, filter đã tắt (Select Cases → All cases).

---

## BT1 — Bài tập gốc: P1-Q02

Điền vào khung trả lời của đề (bảng "Thuộc tính / Số lượng / Phần trăm"):

1. Chạy Frequencies cho `HVan`. Có bao nhiêu người **không biết chữ** (mã 1)?
2. Tỷ lệ % tương ứng — bạn đọc ở cột nào và vì sao?
3. Viết câu trả lời đầy đủ có mẫu số.

{{exercise:P1-Q02}}

> ✅ **Sản phẩm:** số lượng + % không biết chữ đúng · câu trả lời ghi kèm mẫu số /620 · biết phân biệt Percent vs Valid Percent

## BT2 — Bài tập gốc: P1-Q38

Đề hỏi "tỷ lệ chẩn đoán tình trạng cao huyết áp (Bình thường và Cao huyết áp)":

1. Chạy Frequencies cho `CD.HA`. Ghi số lượng của **từng** mã 1–5.
2. Nhóm nào được tính là "Cao huyết áp"? Cộng số lượng và tính % — ghi lại phép tính.
3. Nhận xét một câu về tỷ lệ bạn vừa tính.

{{exercise:P1-Q38}}

> ✅ **Sản phẩm:** bảng 5 mã + phép cộng nhóm cao HA · % cao HA và % bình thường cộng lại = 100%

> **Gợi ý 1** (nhóm nào là "cao HA"): mở Values của `CD.HA` — mã 3,4,5 là các mức tăng HA.
>
> **Gợi ý 2** (nếu % lạ): kiểm tra Total của bảng = 620. Thấy 244/376 → filter ngày 01
> còn bật.

## BT3 — Luyện cùng kỹ năng: GTinh & TTrang.KTe

1. Frequencies `GTinh`: số nam, số nữ, và % mỗi giới. Có khớp với số dòng filter
   bạn thấy Ngày 01 không (244/376)?
2. Frequencies `TTrang.KTe`: bao nhiêu người thuộc "Hộ nghèo / cận nghèo" — số lượng và %.
3. *(Suy luận, không cần SPSS)* Trong bảng `HVan` ở BT1, dòng Cumulative Percent của mã 4
   (THPT) có ý nghĩa gì? Cột này có nghĩa tương tự cho `GTinh` không — vì sao?

> **Gợi ý:** Cumulative = cộng dồn theo thứ tự mã; chỉ hợp lý khi thứ tự mã có nghĩa thứ bậc.

## BT4 — Phát hiện: biến có missing

Chạy Frequencies cho `NNghiep` (nghề nghiệp — không tính điểm, chỉ quan sát):

1. Bảng này có gì khác bảng `HVan`? Ghi ra các giá trị "lạ" bạn thấy (so với codebook
   mã 1–6 trong Values).
2. Cột `Percent` và `Valid Percent` ở đây có khác nhau không — vì sao?
3. *(Để nguyên, đừng sửa gì — Ngày 07 sẽ quay lại xử lý biến này trong Câu 14.)*
