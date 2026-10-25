# Ngày 11 — Workbook: Tương quan & hồi quy

> Làm lần lượt, **không nhìn `answer-key.md`** cho tới khi xong.
> File dùng: `bai_2/File1.sav` — 4 biến `csa`, `ytruo`, `htuo`, `nsonga` đều định lượng.

---

## BT1 — Bài tập gốc: P2-Q10 (tương quan 3 cặp)

1. Trước khi chạy: đoán dấu của từng cặp (tuổi↔CLCS sau: + hay −?) ghi vào vở.
2. Analyze → Correlate → **Bivariate…** → 3 biến `csa`, `ytruo`, `htuo` → Pearson → OK.
3. Ghi bảng 3 cặp: r, Sig., N cho mỗi ô.
4. Viết 1 câu diễn giải cho cặp mạnh nhất (độ lớn + chiều + ý nghĩa).

{{exercise:P2-Q10}}

> ✅ **Sản phẩm:** bảng r/p 3 cặp + câu diễn giải cặp mạnh nhất

> **Gợi ý:** mỗi ô có 3 dòng — dòng trên cùng là r, dòng giữa là Sig. Nếu thấy
> `**` cạnh r → SPSS tự đánh dấu p<0,01 (vì đã tick "Flag significant").

## BT2 — Bài tập gốc: P2-Q11 (hồi quy đơn 3 cặp)

1. Analyze → Regression → **Linear…** → Dependent `csa`, Independent `htuo` → OK.
   Ghi: R², B0, B1, t, Sig.
2. Lặp: `csa ~ ytruo`; rồi `ytruo ~ htuo`. (Lưu ý cặp 3 đổi vai trò: `ytruo` giờ là
   biến phụ thuộc!)
3. Viết phương trình `Y = B0 + B1·X` cho cả 3 mô hình.
4. So sánh p của B1 với p của r cùng cặp ở BT1 — có khớp không?

{{exercise:P2-Q11}}

> ✅ **Sản phẩm:** 3 phương trình + R² mỗi mô hình + nhận xét p trùng nhau

> **Gợi ý:** Dependent = biến "bị giải thích" (kết quả); Independent = biến
> "giải thích". Đảo vai trò cho ra B khác — câu hỏi quyết định ai là Dependent.

## BT3 — Khám phá thêm (không bắt buộc): P2-Q12

1. Linear → Dependent `csa`; Independents: `htuo`, `nsonga`, `ytruo` → OK.
2. Ghi R², Adjusted R², và Sig. của **từng** hệ số trong bảng Coefficients.
3. Trả lời: thêm 2 biến vào có làm mô hình tốt hơn `csa ~ ytruo` không? Biến nào
   "thừa"?

{{exercise:P2-Q12}}

> ✅ **Sản phẩm:** R² mới + danh sách biến còn ý nghĩa

## BT4 — Đố vui (không cần SPSS)

1. r = −0,35 với p = 0,012: mô tả chiều + sức mạnh + ý nghĩa bằng một câu.
2. Hai mô hình `csa~ytruo` (R²=0,59) và `csa~htuo` (R²=0,12) — nếu chỉ được dự
   đoán CLCS sau bằng MỘT biến, chọn biến nào? Vì sao?
3. Bạn bè bảo: "r=0,77 nghĩa là CLCS trước *gây ra* 59% CLCS sau". Câu này sai ở
   đâu?
