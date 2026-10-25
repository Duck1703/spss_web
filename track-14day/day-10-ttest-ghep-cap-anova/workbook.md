# Ngày 10 — Workbook: Paired t & ANOVA

> Làm lần lượt, **không nhìn `answer-key.md`** cho tới khi xong.
> Hai file: `bai_2/File1.sav` (Q09, Q06, Q08) và `File2_Phan2.sav` (Q13).
> Nhớ **trả All cases** sau mỗi lần lọc mẫu con.
> **Ngân sách ~115':** BT1–BT3 bắt buộc; ý 9c (mẫu con thành thị) và BT4 là
> luyện thêm — hết giờ thì bỏ 9c trước.

---

## BT1 — Bài tập gốc: P2-Q09

1. a) Paired-Samples T → cặp `ytruo`/`csa` trên toàn mẫu. Ghi: n; mean hai lần đo;
   Mean diff; SD diff; t; df; p; 95% CI.
2. b) Select Cases `otin = 2` → chạy lại → ghi n, diff, t, df, p.
3. c) Đổi điều kiện `otin = 2 & hnoicutr = 1` → ghi n, diff, t, df, p.
4. Nhận xét hướng chênh lệch và df qua 3 lần chạy; trả All cases.

{{exercise:P2-Q09}}

> ✅ **Sản phẩm:** 3 hàng kết quả paired t + nhận xét 1–2 câu

> **Gợi ý:** nếu n bỗng thành 100 → đã dùng nhầm Independent T (mỗi cột 50 người).
> Paired t luôn có df = (số cặp − 1).

## BT2 — Bài tập gốc: P2-Q13

File `File2_Phan2.sav` (12 dòng, 3 cột).

1. Hai cột `Sogio_cothuoc`/`Sogio_placebo` đo cùng người hay hai nhóm khác nhau?
   (Nhìn cấu trúc file trước khi chọn phép!)
2. Paired-Samples T → ghi mean mỗi nhóm, diff, t, df, p, CI.
3. Kết luận: thuốc có giúp ngủ nhiều hơn không — ý nghĩa lẫn độ lớn?

{{exercise:P2-Q13}}

> ✅ **Sản phẩm:** bộ chỉ số paired t + câu kết luận

## BT3 — Bài tập gốc: P2-Q06

1. Vì sao so 3 tỉnh không chạy 3 lần t-test?
2. One-Way ANOVA → `ytruo` Dependent, `otin` Factor → ghi F, df, Sig., kết luận.
3. Đối chiếu với kết quả Q05 (Ngày 09) — có mâu thuẫn không?

{{exercise:P2-Q06}}

> ✅ **Sản phẩm:** F + p + kết luận

## BT4 — Luyện thêm: P2-Q08

1. One-Way ANOVA → `htuo` Dependent, `otin` Factor → ghi F, df, Sig.
2. Kết luận về sự cân bằng tuổi giữa 3 tỉnh.

{{exercise:P2-Q08}}

> ✅ **Sản phẩm:** F + p + kết luận

## BT5 — Đố vui (không cần SPSS)

1. Vì sao trong Q09, df=19 ở ý (b) thay vì 38? (Mẫu con QT có bao nhiêu cặp?)
2. Hai paired t trong buổi này (Q09a và Q13) cho kết luận khác nhau — đại lượng nào
   trong số liệu quyết định điều đó, hơn là độ lớn của chênh lệch trung bình?
   (Gợi ý: so sánh SD của cột chênh lệch với chính chênh lệch.)
3. Nếu ANOVA cho p=0,02, câu hỏi tiếp theo nên hỏi là gì và nút nào trong SPSS
   trả lời nó?
