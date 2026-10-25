# Ngày 10 — T-test ghép cặp & ANOVA một yếu tố

> **Lộ trình:** Exercise-first 14 ngày · **Thời lượng:** ~110 phút · **Datasets:** `exercises/bai_2/File1.sav` · `File2_Phan2.sav`
> **Trạng thái:** READY v3 (Task 15) — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`; số liệu kiểm chứng Python `NOT_RUN`.
> **Bài tập nguồn hôm nay:** **P2-Q09**, **P2-Q13**, **P2-Q06** (bắt buộc) · **P2-Q08** (luyện thêm).

---

## A. Bài tập gốc — "trước/sau" và "3 nhóm"

{{exercise:P2-Q09}}

{{exercise:P2-Q13}}

{{exercise:P2-Q06}}

> **Đọc đề gốc:** `BSNT_Bài TH_Phần 2_Cô Hiền.pdf` trang 3 — Câu 9 (CLCS trước/sau tai
> nạn: a) toàn bộ; b) riêng Quảng Trị; c) thành thị của Quảng Trị), Câu 13 (giờ ngủ
> thuốc vs giả dược — File2), Câu 6 (CLCS trước TN ở 3 tỉnh), Câu 8 (tuổi ở 3 tỉnh).

## B. Mục tiêu

Hai nâng cấp so với Ngày 09:
1. **Paired-Samples T:** hai lần đo trên **cùng một người** (trước/sau tai nạn, uống
   thuốc/giả dược) — kiểm định trên *cột chênh lệch* thay vì hai cột độc lập.
2. **One-Way ANOVA:** so sánh trung bình **3+ nhóm** trong một kiểm định (thay vì
   chạy 3 lần t-test tích lũy rủi ro).

## C. Dữ liệu cần mở

| Bài | File | Biến | Ghi chú |
|---|---|---|---|
| Q09, Q06, Q08 | `File1.sav` | `ytruo`, `csa`, `htuo`, `otin` (1=QB,2=QT,3=Huế), `hnoicutr` (1=Thành phố,2=Nông thôn) | Q09b/c cần Select Cases |
| Q13 | **`File2_Phan2.sav`** | `Benhnhan`, `Sogio_cothuoc`, `Sogio_placebo` | file mới: 12 bệnh nhân, 2 cột giờ ngủ |

## D. Kiến thức cần biết (vừa đủ)

- **Độc lập vs ghép cặp — câu hỏi quyết định:**
  - "Người QB vs người Huế" → hai nhóm người khác nhau → independent t (Ngày 09).
  - "Trước vs sau **của cùng người**" → mỗi người đóng góp **một cặp** quan sát →
    paired t. Dùng nhầm independent t cho dữ liệu cặp là lỗi phương pháp.
- **Paired t làm gì:** tính d = trước − sau cho từng người, rồi kiểm định trung bình
  d khác 0 (về bản chất là one-sample t trên cột chênh lệch). n bằng số **cặp**
  hoàn chỉnh — ai thiếu một trong hai lần đo sẽ rơi khỏi phân tích (listwise).
- **ANOVA một yếu tố:** H₀ "trung bình mọi nhóm bằng nhau". Đọc bảng ANOVA: cột **F**
  và **Sig.**. p<0,05 → ít nhất một nhóm khác — **nhưng ANOVA không nói nhóm nào**
  (muốn biết cặp nào khác cần post-hoc, xem phần K). F = t² khi chỉ có 2 nhóm.
- **Giả định ANOVA:** biến số ~chuẩn trong từng nhóm, phương sai đồng nhất, quan sát
  độc lập — giống independent t mở rộng sang ≥3 nhóm.
- **Đọc có trách nhiệm:** Q09 cho p≈0,09 ở cả 3 mẫu — "xu hướng giảm ~3–6 điểm
  nhưng chưa ý nghĩa" chứ không phải "không thay đổi"; ngược lại Q13 p=0,018 với
  CI 0,29–2,57 giờ: vừa ý nghĩa vừa có độ lớn đọc được.

## E. Thực hành có hướng dẫn

> ⚠️ `MAC_SPSS_VERIFICATION_PENDING`

### Bước 1 — Câu 9a: paired t trên toàn mẫu

- **Làm:** `File1.sav`, All cases. Analyze → **Compare Means → Paired-Samples T
  Test…** → đưa `ytruo` và `csa` vào **Paired Variables** (Variable1 = ytruo,
  Variable2 = csa) → OK.
- **Đọc:** bảng Paired Samples Statistics: trước 75,32±13,73, sau 72,64±16,82.
  Bảng Paired Samples Test: Mean diff = **2,68** (SD diff 10,81), **t = 1,754**,
  df=49, **p = 0,086**; 95% CI diff **−0,39…5,75**.
- **Kết luận:** CLCS sau tai nạn thấp hơn trước ~2,7 điểm nhưng **chưa ý nghĩa
  thống kê** (p=0,086).

{{guide:d10-paired}}

### Bước 2 — Câu 9b/c: paired t trên mẫu con

- **Làm:** Select Cases → `otin = 2` (Quảng Trị) → chạy lại paired t:
  n=20; trước 74,30, sau 67,85; diff=6,45±16,58; **t=1,739, df=19, p=0,098**.
- **Làm:** đổi điều kiện `otin = 2 & hnoicutr = 1` (thành thị của QT):
  n=11; trước 72,18, sau 68,73; diff=3,45±6,02; **t=1,902, df=10, p=0,086**.
- **Làm:** trả All cases.
- *Nhận xét:* cả ba lần p≈0,09 — hướng giảm nhất quán nhưng mẫu con càng nhỏ
  càng khó đạt ý nghĩa.

### Bước 3 — Câu 13: thuốc ngủ vs giả dược (File2)

- **Làm:** mở `File2_Phan2.sav` — 12 bệnh nhân, mỗi người có **hai cột**:
  `Sogio_cothuoc` và `Sogio_placebo`. Cùng người → paired t.
- **Làm:** Paired-Samples T → Pair: `Sogio_cothuoc` / `Sogio_placebo` → OK.
- **Đọc:** thuốc 6,92±0,89 vs giả dược 5,49±1,26; diff=1,43±1,79;
  **t = 2,767, df=11, p = 0,018**; 95% CI **0,29…2,57** giờ.
- **Kết luận:** thuốc tăng giờ ngủ trung bình **~1,4 giờ** so với giả dược —
  **có ý nghĩa thống kê** (p=0,018).

### Bước 4 — Câu 6: One-Way ANOVA (3 tỉnh)

- **Làm:** `File1.sav`. Analyze → **Compare Means → One-Way ANOVA…** →
  `ytruo` → Dependent List; `otin` → Factor → OK.
- **Đọc:** bảng ANOVA: **F = 0,938**, giữa nhóm df=2, trong nhóm df=47,
  **Sig. = 0,399**.
- **Kết luận:** CLCS trước tai nạn ba tỉnh (QB 78,67 · QT 74,30 · Huế 72,00)
  **không khác nhau có ý nghĩa** — khớp kết luận t-test Q05 ở Ngày 09.

{{guide:d10-anova}}

### Bước 5 — (Luyện thêm) Câu 8: ANOVA cho tuổi

- **Làm:** cùng dialog → `htuo` → Dependent; `otin` → Factor → OK.
- **Đọc:** F = **0,090**, Sig. = **0,914** → tuổi ba tỉnh đồng đều — nền nhân
  khẩu cân bằng trước khi so sánh các biến khác.

## F. Mô phỏng SPSS

Hai mô phỏng: hộp Paired-Samples T (kéo 2 biến thành 1 cặp) + bảng Paired Samples
Test; hộp One-Way ANOVA + bảng ANOVA với F và Sig.

## G. Bài tập tự làm

Mở [workbook](/d10/bai-tap/): làm lại **P2-Q09** (cả 3 ý), **P2-Q13**, **P2-Q06**;
thêm **P2-Q08** luyện thêm.

## H. Kiểm tra kết quả

- [ ] Q09a: n=50, t=1,754, p=0,086; Q09b: n=20, t=1,739, p=0,098; Q09c: n=11,
  t=1,902, p=0,086 — chú ý df giảm theo mẫu con.
- [ ] Q13: t=2,767, df=11, p=0,018, CI 0,29–2,57.
- [ ] Q06: F=0,938, df(2,47), p=0,399; Q08 (nếu làm): F=0,090, p=0,914.
- [ ] Giải thích được vì sao Q09 dùng paired chứ không phải independent t.

## I. Giải thích đáp án

[đáp án](/d10/dap-an/) — ba bảng paired output đầy đủ, bảng ANOVA, và lỗi hay gặp
khi lọc mẫu con quên trả All cases.

## J. Chuyển bài

Bạn đã đủ bộ kiểm định trung bình cơ bản. Ngày 11 hỏi kiểu câu cuối của phần 2:
"hai biến số có đi cùng nhau không" — **tương quan** (P2-Q10) và **hồi quy tuyến
tính** (P2-Q11) trên cùng File1.

## K. Đọc thêm (không bắt buộc)

- ANOVA chỉ nói "có ít nhất một nhóm khác" — để biết cặp nào, nút **Post Hoc…** →
  Tukey/Bonferroni. Ở Q06/Q08 p lớn nên post-hoc không cần; biết nút ở đâu khi
  ANOVA ý nghĩa là đủ cho mức nhập môn.
- Bảng "Paired Samples Correlations" (SPSS in kèm) cho thấy độ mạnh của liên kết
  trước–sau (ở đây r≈0,63) — tương quan cao là lý do paired t mạnh hơn independent t.
