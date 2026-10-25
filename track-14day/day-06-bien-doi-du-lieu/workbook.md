# Ngày 06 — Workbook: Compute · Recode · Count

> Làm lần lượt, **không nhìn `answer-key.md`** cho tới khi xong.
> **Bắt buộc đầu buổi:** File → Save As → `SPSS_Practice/workspace/p1_B01_work.sav`
> rồi mới được tạo biến. Không ghi đè `p1_B01_HA (1).sav`.

---

## BT1 — Bài tập gốc: P1-Q10

1. Kiểm tra trước: `Chieucao` đang ở đơn vị gì? (Nhìn Data View — giá trị quanh 140–175.)
   Vậy công thức đúng trong Compute là gì?
2. **Transform → Compute Variable** → tạo `BMI` theo công thức của bạn.
3. Descriptives `BMI` (tick Min/Max trong Options) → ghi n, Mean, SD, Min, Max.
4. Nhìn cột BMI: nếu toàn số ~0,002 bạn đã sai ở đâu? Sửa thế nào?

{{exercise:P1-Q10}}

> ✅ **Sản phẩm:** biến `BMI` đúng đơn vị + bảng Descriptives 5 con số

> **Gợi ý:** BMI của người lớn hợp lý nằm trong ~14–40. Ngoài khoảng đó là sai công thức.

## BT2 — Bài tập gốc: P1-Q11

1. **Transform → Recode into Different Variables** → `Tuoi` → biến mới `DoTuoi`
   (nhớ bấm **Change** sau khi gõ tên).
2. Old and New Values: lập 4 ánh xạ theo đề (40–49→1, 50–59→2, 60–69→3, ≥70→4).
   Ghi lại chính xác 4 dòng bạn đã Add.
3. Frequencies `DoTuoi` → ghi số lượng và % từng nhóm. Trả lời: có bao nhiêu người
   từ 70 tuổi trở lên?
4. (Làm đẹp) gán value labels cho `DoTuoi` rồi xem Data View hiển thị nhãn.

{{exercise:P1-Q11}}

> ✅ **Sản phẩm:** biến `DoTuoi` 4 nhóm + tần số đầy đủ + đáp số người ≥70

> **Gợi ý:** total các nhóm phải đúng 620 — nếu thiếu thì có dòng ngoài khoảng recode
> (kiểm tra min/max của Tuoi trước khi đặt khoảng).

## BT3 — Bài tập gốc: P1-Q12

1. Liệt kê các biến biểu thị "có bệnh mạn tính" — đọc Variable View: biến nào là nhị
   phân 0/1? `Benh.MT_1`, `Benh.MT_2` có phải nhị phân không? (Nhìn Values của chúng.)
2. **Transform → Count Values within Cases** → `SoBenhMan` đếm giá trị `1` trong
   đúng 5 biến nhị phân.
3. Frequencies `SoBenhMan` → ghi phân bố đầy đủ. Trả lời đề: bao nhiêu người có
   ≥ 2 bệnh mạn tính?

{{exercise:P1-Q12}}

> ✅ **Sản phẩm:** biến đếm `SoBenhMan` + đáp số ≥2 bệnh + giải thích vì sao không dùng `Benh.MT_1/MT_2`

## BT4 — Kiểm chứng chéo (suy luận, không bắt buộc)

1. `Benh.MT_1` ghi mã bệnh thứ nhất, `Benh.MT_2` mã bệnh thứ hai. Vậy số ô **không
   trống** của hai cột này cho biết gì? Đếm thử (gợi ý: Frequencies `Benh.MT_2` —
   số dòng Valid).
2. So sánh con số "có 2 bệnh" bạn vừa suy ra với kết quả `SoBenhMan` ở BT3 — khớp không?
3. Vì sao hai cách lưu trữ (5 biến nhị phân vs 2 biến danh mục) phải cho cùng câu trả lời?

## BT5 — Đố vui (không cần SPSS)

1. Compute, Recode, Count — mỗi lệnh hợp với loại yêu cầu nào? Ghép: tính tuổi bình
   quân 2 lần đo / gộp 6 mức học vấn thành "đại học trở lên vs còn lại" / đếm số hành
   vi nguy cơ mỗi người.
2. Tại sao luôn chọn "Recode into **Different** Variables" thay vì "Same Variables"?
3. Khi nào bắt buộc Save As trước khi biến đổi, và vì sao hôm nay là lần đầu?
