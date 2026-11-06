# Ngày 09 — Đáp án & giải thích

> Đọc **sau khi** đã làm xong `workbook.md`. Số liệu tái tính trực tiếp từ
> `bai_2/File1.sav` bằng Python/scipy (cross-check, nhãn `NOT_RUN`). t/Welch/CI tính
> theo công thức SPSS mô tả trong tài liệu IBM.

---

## BT1 — P2-Q04

**One-Sample Statistics:** n=50, Mean=**75,32**, SD=13,73, SEM≈1,94.
**One-Sample Test (Test Value = 75):** **t = 0,165**, df=49, **Sig.(2-tailed)=0,870**;
Mean Difference=0,32; 95% CI của chênh lệch: **−3,58 đến 4,22**.

→ Chất lượng cuộc sống trung bình trước tai nạn **không khác 75 có ý nghĩa thống kê**
(t=0,165, p=0,870) → **có thể xem là 75**. CI chứa 0 khớp với p≥0,05.

*Lỗi hay gặp:* nhập Test Value ở ô sai (đưa 75 vào Test Variable cùng biến); đọc
"Mean=75,32" rồi kết luận "là 75" mà không nhìn p — 75,32 là *ước lượng mẫu*, câu
hỏi "có thể xem là 75" trả lời bằng p/CI.

## BT2 — P2-Q05

**Group Statistics:**

| Tỉnh (`otin`) | n | Mean | SD |
|---|---|---|---|
| Quảng Bình (1) | 18 | 78,67 | 15,68 |
| Thừa Thiên Huế (3) | 12 | 72,00 | 12,42 |

**Independent-Samples Test:** Levene's F → **p = 0,481** ≥ 0,05 → đọc dòng
*Equal variances assumed*:
- **t = 1,234**, df=28, **p = 0,227**; Mean diff = 6,67; 95% CI **−3,88…17,22**.
- (Dòng Welch tham khảo: t=1,294, df=27,04, p=0,207 — cùng kết luận.)

→ CLCS trước tai nạn của QB cao hơn Huế trung bình ~6,7 điểm, nhưng **chênh lệch chưa
có ý nghĩa thống kê** (t=1,234, df=28, p=0,227). Nói thêm: mẫu nhỏ (18 vs 12), CI
rộng → không kết luận "bằng nhau".

*Lỗi hay gặp:* Define Groups nhập nhãn "Quảng Bình" thay vì mã `1`/`3`; đọc nhầm dòng
Welch khi Levene không ý nghĩa; đảo nhóm (Huế−QB cho t=−1,234 — dấu âm chỉ đổi chiều
chênh lệch, p giữ nguyên).

## BT3 — P2-Q07

**Group Statistics:** QB (1): n=18, 35,06±16,58; QT (2): n=20, 36,90±18,91.
**Test:** Levene p = **0,170** → dòng assumed: **t = −0,318**, df=36, **p = 0,752**
(Welch: −0,320, df≈35,98, p=0,751).

→ Tuổi trung bình bệnh nhân ở QB và QT **không khác nhau có ý nghĩa** (p=0,752) —
hai nhóm tuổi tương đương cho các so sánh sau.

## BT4 — Đố vui

1. Dòng "assumed" dùng **phương sai gộp** (pooled SD — giả định σ₁=σ₂, df=n₁+n₂−2);
   "not assumed" (Welch) giữ riêng hai phương sai, df chỉnh Satterthwaite (số lẻ).
   Đọc dòng dưới khi **Levene's p < 0,05** (phương sai khác nhau ý nghĩa).
2. Q09 đo **cùng người** hai lần (trước/sau) — hai cột không độc lập; independent t
   coi chúng như 100 người khác nhau → bỏ phí thông tin ghép cặp và kết luận sai.
   Phải dùng **Paired-Samples T** (Ngày 10).
3. Không. p=0,227 = "chưa đủ bằng chứng cho khác biệt" — CI −3,9…17,2 vẫn chứa khả
   năng chênh ~17 điểm. Câu chặt: "chưa phát hiện khác biệt có ý nghĩa giữa hai
   tỉnh trên mẫu n=30".

## P3-Q08 — t-test E29 ~ giới (So_Lieu_NC) *(bài mới)*

**Group Statistics:** Nam (1): n=131, E29 = 128,85 ± 13,16 · Nữ (2): n=229,
126,35 ± 14,14.
**Levene's:** F = 0,774, Sig. = 0,380 → dòng assumed: **t = 1,655**, df = 358,
**Sig. (2-tailed) = 0,099**; diff ≈ +2,50 mmHg, 95% CI ≈ −0,5…5,5.
(Dòng Welch tham khảo: t = 1,688, p = 0,093 — cùng kết luận.)

→ HA tâm thu nam cao hơn nữ ~2,5 mmHg nhưng **chưa có ý nghĩa thống kê**
(p = 0,099). Viết đúng: "chưa đủ bằng chứng khác biệt" — không viết "bằng nhau".

## P3-Q12 — One-sample t E29 vs 120 (So_Lieu_NC) *(bài mới)*

n = 360, E29 = 127,26 ± 13,83. Test Value = 120:
**t = 9,968**, df = 359, **Sig. (2-tailed) < 0,001**; Mean Difference = **+7,26**,
95% CI của diff ≈ 5,8…8,7 (CI của mean: 125,83–128,70).

→ HA tâm thu trung bình mẫu này **cao hơn 120 mmHg có ý nghĩa** — hợp lý với bối
cảnh mẫu người lớn tuổi nhiều yếu tố nguy cơ.
