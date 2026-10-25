# Ngày 10 — Đáp án & giải thích

> Đọc **sau khi** đã làm xong `workbook.md`. Số liệu tái tính trực tiếp từ
> `bai_2/File1.sav` và `File2_Phan2.sav` bằng Python/scipy (cross-check, `NOT_RUN`).

---

## BT1 — P2-Q09 (paired t, CLCS trước − sau)

| Ý | n (cặp) | Trước | Sau | Diff (trước−sau) | t | df | p | 95% CI |
|---|---|---|---|---|---|---|---|---|
| a) Toàn bộ | 50 | 75,32±13,73 | 72,64±16,82 | **2,68±10,81** | **1,754** | 49 | **0,086** | −0,39…5,75 |
| b) Quảng Trị | 20 | 74,30±12,57 | 67,85±19,34 | **6,45±16,58** | **1,739** | 19 | **0,098** | −1,31…14,21 |
| c) QT thành thị | 11 | 72,18±10,19 | 68,73±8,36 | **3,45±6,02** | **1,902** | 10 | **0,086** | −0,59…7,50 |

→ Cả ba ý: CLCS sau tai nạn **giảm** so với trước (2,7–6,5 điểm) nhưng **chưa đạt ý
nghĩa thống kê** (p≈0,09). df giảm đúng theo số cặp (49→19→10) — dấu hiệu kiểm chứng
bạn đang dùng đúng paired t trên đúng mẫu con.

*Lỗi hay gặp:* đưa nhầm `csa`/`ytruo` đảo thứ tự → diff âm (−2,68) — chỉ đổi dấu,
kết luận giữ nguyên; quên trả All cases sau ý c → Q06 chạy trên 11 người; đọc p
của bảng Correlations (SPSS in 3 bảng — p cần đọc ở **Paired Samples Test**).

## BT2 — P2-Q13 (paired t, thuốc ngủ)

- Cấu trúc file: 12 bệnh nhân, **hai cột** giờ ngủ — cùng người đo hai điều kiện →
  paired t (không phải independent).
- Thuốc: **6,92±0,89** giờ; Giả dược: **5,49±1,26** giờ.
- Diff = **1,43±1,79** giờ; **t = 2,767, df = 11, p = 0,018**; 95% CI **0,29…2,57**.

→ Thuốc tăng giờ ngủ trung bình **~1,4 giờ** so với giả dược, **có ý nghĩa thống
kê** (p=0,018). Mặc dù n chỉ 12, chênh lệch ổn định giữa các cặp (SD diff 1,79) —
đối lập trực tiếp với Q09 (diff lớn hơn nhưng SD diff quá lớn so với n).

*Lỗi hay gặp:* dùng independent t → coi như 24 quan sát → p sai (~0,002 và cách diễn
giải sai thiết kế); quên rằng df=11 (12 cặp −1).

## BT3 — P2-Q06 (One-Way ANOVA)

1. Ba tỉnh = 3 cặp so sánh — nhiều t-test tích lũy rủi ro sai lầm loại I (mỗi test
   thêm ~5% cơ hội "trúng giả"). ANOVA kiểm **một lần**: H₀ "ba trung bình bằng nhau".

| Nhóm (`otin`) | n | Mean ytruo |
|---|---|---|
| Quảng Bình (1) | 18 | 78,67 |
| Quảng Trị (2) | 20 | 74,30 |
| T.T.Huế (3) | 12 | 72,00 |

**ANOVA: F = 0,938, df = (2, 47), Sig. = 0,399** → CLCS trước tai nạn **không khác
nhau có ý nghĩa giữa 3 tỉnh**. Khớp với Q05 (QB–Huế p=0,227): cùng kết luận, không
mâu thuẫn.

*Lỗi hay gặp:* đưa `otin` vào Dependent thay `ytruo` → bảng ANOVA vô nghĩa; mong đợi
"bảng so sánh từng cặp" — ANOVA chỉ in F/Sig. tổng thể (post-hoc ở nút riêng).

## BT4 — P2-Q08 (luyện thêm)

**ANOVA tuổi ~ otin: F = 0,090, df = (2, 47), Sig. = 0,914** → tuổi trung bình ba
tỉnh **đồng đều** (QB 35,06 · QT 36,90 · Huế 37,42). Ba tỉnh cân bằng nhân khẩu —
mọi khác biệt CLCS (nếu có) không thể đổ cho chênh tuổi.

## BT5 — Đố vui

1. Paired t đếm **cặp**, không đếm quan sát: QT có 20 bệnh nhân → 20 cặp → df=19.
   df=38 chỉ xuất hiện nếu dùng nhầm independent t (2×20−2).
2. Q09a: diff=2,68 nhưng **SD diff = 10,81** — chênh lệch dao động mạnh giữa các
   người → t nhỏ dù n=50. Q13: diff=1,43 với SD diff chỉ 1,79 — chênh lệch rất đồng
   nhất giữa 12 cặp → t=2,767 ý nghĩa. Bài học: paired t thắng/thua ở **độ đồng
   nhất của chênh lệch**, không chỉ ở độ lớn trung bình.
3. "Cặp nhóm nào khác nhau?" → nút **Post Hoc…** trong hộp One-Way ANOVA (Tukey khi
   phương sai đồng nhất; Games-Howell khi không). ANOVA tổng thể chỉ trả lời "có hay
   không có khác biệt".
