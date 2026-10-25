# Ngày 08 — Workbook: Kiểm định về tỷ lệ

> Làm lần lượt, **không nhìn `answer-key.md`** cho tới khi xong.
> Ba file hôm nay: `p1_B01_HA (1).sav` → `bai_2/File1.sav` → (luyện thêm) `P1_B02 CrossTab (2).sav`.
> Nhớ **tắt Weight Cases** khi đổi file.

---

## BT1 — Bài tập gốc: P1-Q22

File `p1_B01_HA (1).sav`, biến `GTinh` (quan sát: Nữ=376, Nam=244).

1. Chạy Chi-square GOF ba lần với kỳ vọng **Nam:Nữ** = 55:45 · 40:60 · 50:50.
   ⚠️ Trong ô Expected Values nhập theo **thứ tự mã 1→2** (mã 1 = Nữ!) — ghi lại
   hai con số bạn đã nhập cho mỗi lần chạy.
2. Điền bảng: χ², df, p cho từng trường hợp.
3. Kết luận: tỷ lệ giới tính của mẫu nghiên cứu phù hợp trường hợp nào?

{{exercise:P1-Q22}}

> ✅ **Sản phẩm:** bảng 3×(χ², df, p) + một câu kết luận

> **Gợi ý:** nếu kết quả trường hợp 40:60 ra χ²≈110 thay vì ≈0,1 → bạn nhập kỳ vọng
> ngược thứ tự (đã cho Nữ=248 thay vì 372).

## BT2 — Bài tập gốc: P2-Q02

File `bai_2/File1.sav`, biến `igioitin` (1=Nam, 2=Nữ).

1. Tra codebook trang 2 PDF gói 2: xác nhận `igioitin` là biến giới tính và hướng mã.
2. Chi-square GOF → Expected **All categories equal** → ghi tần số quan sát, χ², df, p.
3. Kết luận về tỷ lệ nam:nữ 0,5:0,5.

{{exercise:P2-Q02}}

> ✅ **Sản phẩm:** χ² + p + câu kết luận

## BT3 — Bài tập gốc: P2-Q03

1. Vì sao phải Select Cases `igioitin = 1` trước khi kiểm định? (Đề hỏi tỷ lệ *trong
   bệnh nhân nam*.)
2. Binomial → `gnamvie`, Test Proportion **0,60** → ghi: tỷ lệ quan sát, Exact Sig. (2-sided).
3. Kết luận: có thể xem tỷ lệ nằm viện trong nam là 60% không? Trả All cases.

{{exercise:P2-Q03}}

> ✅ **Sản phẩm:** tỷ lệ quan sát + p + câu kết luận

## BT4 — Luyện thêm: P1-Q21

File `P1_B02 CrossTab (2).sav`.

1. File có mấy dòng? Mỗi dòng là người hay nhóm? → Weight Cases bằng biến nào?
2. Crosstabs `phoinhiem` × `benh` + Row % + Statistics: Chi-square **và Risk**.
3. Ghi: tỷ lệ CTC+ hai nhóm; χ²; p; RR; OR; diễn giải RR bằng lời.

{{exercise:P1-Q21}}

> ✅ **Sản phẩm:** bảng 2×2 Total=88 + χ², RR, OR + câu diễn giải

## BT5 — Luyện thêm: P2-Q01

File `bai_2/File1.sav` (tắt Weight trước!).

1. `cchanthuon` × `gnamvie` + Chi-square → ghi χ², df, p, kết luận.
2. Bảng 3×2 nên df = mấy? So với bảng 2×2?

{{exercise:P2-Q01}}

> ✅ **Sản phẩm:** χ² + df đúng + kết luận

## BT6 — Luyện thêm: P1-Q40 (McNemar)

1. Recode `MDoSD.RB` → `RB_now` (0→0; 1–4→1). Ghi lại bảng recode.
2. Crosstabs `TSu.RBia` × `RB_now` + Statistics → **McNemar** → ghi p và kết luận.
3. Đếm tay hai ô bất đồng — chúng nói gì về hướng thay đổi?

{{exercise:P1-Q40}}

> ✅ **Sản phẩm:** p McNemar + kết luận chiều thay đổi

## BT7 — Đố vui (không cần SPSS)

1. Q22 trường hợp 40:60 cho p=0,743 — vì sao nói "tỷ lệ thật đúng là 40:60" là chưa chặt?
2. Vì sao Q03 không dùng luôn chi-square GOF trên cả 50 người mà phải lọc nam trước?
3. McNemar khác chi-square bảng chéo thường ở điểm nào? (Gợi ý: hai phép đo trên *cùng
   một* đối tượng.)
