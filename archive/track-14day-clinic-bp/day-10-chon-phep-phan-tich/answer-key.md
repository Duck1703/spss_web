# Ngày 10 — Đáp án & giải thích

---

## BT1 — 6 tình huống

| # | Q1 | Q2 | Phương pháp |
|---|---|---|---|
| 1 | định lượng | 2 nhóm độc lập | **Independent t-test** — phân phối ổn |
| 2 | định lượng | trước–sau cùng người | **Paired t-test** (xem histogram hiệu số trước) |
| 3 | định tính nhị phân | 2 biến định tính | **Crosstabs + Chi-square** (Fisher nếu expected<5) |
| 4 | định lượng | liên hệ 2 biến | **Spearman** — scatterplot cong |
| 5 | định lượng | 4 nhóm độc lập | **One-Way ANOVA** (post-hoc nếu có nghĩa — mở rộng) |
| 6 | định tính | chỉ mô tả | **Frequencies** → n (%) — không phải kiểm định |

*Lỗi hay gặp:* câu 4 chọn Pearson vì "quen" — mất điểm vì scatterplot cong. Câu 6 quên rằng
không phải câu hỏi nào cũng cần kiểm định.

## BT2 — Sai lầm chọn phương pháp

1. **Sai** — chi-square cho biến định tính; huyết áp trung bình → t-test độc lập.
2. **Sai** — paired không phải "cỡ mẫu bằng nhau", mà là *cùng đối tượng đo 2 lần*;
   2 nhóm người khác nhau dù cùng n vẫn là độc lập.
3. **Sai** — `nhóm_máu` là định tính, không phải định lượng → Pearson vô nghĩa
   (nên nghĩ crosstabs/ANOVA tùy thiết kế).
4. **Sai** — n nhỏ + lệch nặng → t-test kém tin cậy; hướng đúng: báo cáo mô tả thận trọng và
   hỏi về **Mann–Whitney U** (mở rộng), không ép chạy test vì quen menu.

## BT3 — Từ câu hỏi → thao tác

1. Định lượng (`sbp`) × 2 nhóm độc lập (`shift_type` ngày/đêm) → **Independent t-test**.
2. `Analyze → Compare Means → Independent-Samples T Test…`; Grouping `shift_type`, Define 0/1.
3. Kiểm tra trước: (a) Measure của `sbp` = Scale, `shift_type` = Nominal 2 mã;
   (b) boxplot/histogram `sbp` theo nhóm xem lệch/cực trị + đếm n mỗi nhóm và missing.
   *(Đáp án số: sẽ kiểm chứng ở Ngày 13 — t ≈ −1,59, p = 0,116.)*

## BT4 — Tình huống mới

1. `vận_động` = ordinal 3 mức; `đái_tháo_đường` = nhị phân → bảng chéo **3×2**.
2. **Chi-square**; kiểm tra: expected count ở tất cả 6 ô, row %, và hướng liên quan.
   Với bảng >2×2, quy tắc: không ô nào <1 và ≤20% ô expected <5.
3. Một ô expected = 3,2 (16,7% ô <5 — nhưng 3,2 < 5 khá thấp): cân nhắc **gộp nhóm vận động**
   ("vừa+nhiều") nếu có lý do lâm sàng, hoặc báo cáo Fisher khi áp dụng được, hoặc tham khảo
   chuyên gia — không đọc χ² như bình thường.
