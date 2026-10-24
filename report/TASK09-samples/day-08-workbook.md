# Ngày 08 — Workbook: Crosstabs & Chi-square

> Đầu vào: `clinic_bp_my_clean.sav`. Không nhìn `answer-key.md`.

---

## BT1 — Crosstabs mới: giới tính × kiểm soát huyết áp

1. Chạy Crosstabs `sex_code` (Row) × `bp_controlled` (Column), tick Chi-square + Risk, Cells → Row %.
2. Tỷ lệ đạt kiểm soát ở Nữ vs Nam là bao nhiêu? Mỗi nhóm có bao nhiêu ca hợp lệ?
3. Kiểm tra expected count — Chi-square có dùng được không? p là bao nhiêu?
4. Viết một câu kết quả đầy đủ (có %, χ², p, hướng liên quan — và "liên quan", không phải "gây").

## BT2 — Khi nào cần Fisher?

Một nghiên cứu nhỏ cho bảng 2×2:

| | Biến chứng | Không biến chứng |
|---|---|---|
| Thuốc mới | 1 | 14 |
| Thuốc cũ | 6 | 9 |

1. Expected count ở ô "Thuốc mới × Biến chứng" ≈ bao nhiêu? (gợi ý: tổng hàng 15, tổng cột 7, N=30)
2. Chi-square có đáng tin ở đây không? Nên đọc dòng nào trong output SPSS?
3. Nếu dùng Fisher, cách diễn giải p có thay đổi không?

## BT3 — Diễn giải OR

Output Risk Estimate cho OR = 2,8 cho "smoker × bp_controlled" (mã 1 = hút thuốc hiện tại).

1. "OR=2,8 nghĩa là người hút thuốc có nguy cơ mất kiểm soát HA gấp 2,8 lần" — đúng hay sai?
2. Viết câu diễn giải thận trọng hơn cho OR này.
3. Nếu OR = 0,55 cho cùng so sánh, hướng liên quan là gì?

## BT4 — Tình huống mới

Bạn có biến `obese` (0/1) và `knee_pain` (0/1) trên 200 bệnh nhân.

1. Câu hỏi nghiên cứu mà bảng chéo này trả lời?
2. Bạn sẽ đặt biến nào vào Row, vào Column — và % nào cần tick? Vì sao?
3. Kết quả χ² p=0,03, OR=2,1. Viết câu kết quả và một câu giới hạn.
