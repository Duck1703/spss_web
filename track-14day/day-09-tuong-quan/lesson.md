# Ngày 09 — Tương quan

> **Lộ trình:** Practice-first 14 ngày · **Thời lượng:** ~90–120 phút · **Dataset:** `clinic_bp_my_clean.sav`
> **Trạng thái:** DRAFT — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`. Kết quả mong đợi `NOT_RUN`.

---

## A. Hôm nay bạn sẽ làm gì

1. Vẽ **scatterplot** giữa 2 biến định lượng — nhìn hình trước, tính sau.
2. Chạy **Pearson** và **Spearman** — hiểu khác nhau ở đâu.
3. Đọc hệ số r: hướng, độ mạnh, p-value.
4. Tập câu thần chú quan trọng nhất của môn thống kê: **liên quan ≠ nhân quả**.

## B. Tình huống y khoa

Hai câu hỏi của bác sĩ Lan:

1. *"BMI cao hơn có đi kèm huyết áp nhập viện cao hơn không?"* — `bmi` × `sbp_baseline`.
2. *"Bệnh nhân tuân thủ tốt hơn có giảm huyết áp nhiều hơn không?"* — `adherence_score` × `sbp_change`
   (biến hiệu số tự tạo bằng Compute Variable — bạn đã làm Ngày 07).

Cả hai đều là "2 biến định lượng đi cùng nhau thế nào" → **tương quan**.

## C. Những điều cần biết trước (vừa đủ)

- **Hệ số tương quan r** nằm trong [−1 ; +1]: dấu = hướng (cùng tăng / một tăng một giảm),
  |r| = độ mạnh (0 = không liên hệ tuyến tính, ±1 = liên hệ hoàn hảo).
  Thước tham khảo mềm: |r| ~0,1 yếu · ~0,3 trung bình · ~0,5 khá mạnh · ≥0,7 mạnh — **ngữ cảnh
  y khoa mới quyết định ý nghĩa**, không có ngưỡng "đủ tốt" tuyệt đối.
- **Pearson**: đo liên hệ *tuyến tính* — dùng khi 2 biến định lượng, quan hệ gần đường thẳng,
  không có cực trị khủng (nhìn scatterplot trước!).
- **Spearman (ρ)**: chạy trên **thứ hạng** — hợp khi quan hệ đơn điệu nhưng cong, dữ liệu lệch,
  nhiều cực trị, hoặc biến dạng thang ordinal.
- **p-value của r**: hỏi "r khác 0 có thể chỉ do ngẫu nhiên không" — với n lớn, r nhỏ vẫn có thể
  "có nghĩa" → luôn đọc |r| cùng p, đừng chỉ đọc p.
- ⚠️ **Correlation is not causation** — r cao chỉ nói "đi cùng nhau", không nói cái nào gây cái nào.

## D. Thực hành từng bước trên Mac

> ⚠️ `MAC_SPSS_VERIFICATION_PENDING` — checklist cuối bài.

### Bước 1 — Scatterplot trước

**Graphs → Legacy Dialogs → Scatter/Dot…** → **Simple Scatter** → Define →
`bmi` → X Axis, `sbp_baseline` → Y Axis → OK.

Nhìn: đám mây chéo lên (dương), khá rời rạc — quan hệ gần tuyến tính, vài điểm xa nhưng không
có cực trị "treo" hẳn → Pearson chạy được; kiểm chứng thêm bằng Spearman.

### Bước 2 — Pearson

**Analyze → Correlate → Bivariate…** → đưa `bmi` và `sbp_baseline` → tick **Pearson**
(**Two-tailed**) → OK.

Output **Correlations**: kỳ vọng **r = 0,51 · p < 0,001 · n = 158**
(95% CI của r ≈ [0,38 ; 0,61] — SPSS không in sẵn CI của r ở bảng mặc định; đối chiếu
`datasets/expected-results.md`).

### Bước 3 — Spearman cho cùng cặp

Cùng dialog, thêm tick **Spearman** (giữ Pearson) → OK → đọc thêm bảng *Nonparametric
Correlations*: kỳ vọng **ρ = 0,49 · p < 0,001**.

Pearson 0,51 và Spearman 0,49 gần nhau → quan hệ khá đều, ít bị cực trị kéo.

### Bước 4 — Câu hỏi 2: adherence × mức giảm HA

Nếu chưa có `sbp_diff`: **Transform → Compute Variable…** → `sbp_diff = sbp_baseline - sbp_followup`
→ OK → Bivariate cho `adherence_score` × `sbp_diff`.

Kỳ vọng: **r = 0,38 · p < 0,001 · n = 135** (Spearman ρ = 0,35).

### Bước 5 — Viết kết quả

> "BMI tương quan dương vừa phải với huyết áp tâm thu lúc nhập (r = 0,51; p < 0,001; n = 158)."

## E. Hiểu kết quả của bạn

- ✅ "BMI và HA nền có xu hướng đi cùng nhau trong mẫu này, mức vừa."
- ⚠️ r=0,51 → chỉ ~26% (r²) độ biến thiên của HA gắn với BMI — còn ~74% do thứ khác. Tương quan
  "vừa" không phải "giải thích hết".
- ❌ "BMI cao gây HA cao" / "giảm BMI sẽ giảm HA" — cần thiết kế can thiệp, không phải cắt ngang.
- ❌ Đọc p mà quên r: với n vài trăm, r=0,15 cũng có thể p<0,05 — "có nghĩa thống kê" ≠ "có ý nghĩa".

## F. Bài tập tự làm

`workbook.md` — tự chạy 1 cặp khác + nhận diện Pearson vs Spearman.

## G. Đáp án

`answer-key.md`.

## H. Checkpoint qua bài

- [ ] 2 scatterplot + 2 bảng Correlations (Pearson và Spearman).
- [ ] Câu kết quả có r, p, n — và không chứa chữ "gây".

## I. Đọc thêm (không bắt buộc)

- **r²** (hệ số xác định) = phần trăm biến thiên "đi cùng nhau" — cách giải thích độ mạnh dễ hình dung.
- **Quan hệ phi tuyến:** chữ U, chữ V ngược → Pearson có thể thấp dù liên hệ mạnh. Đây là lý do
  *luôn vẽ scatterplot trước* — đám mây cong là tín hiệu đổi sang Spearman hoặc phân tích khác.
- **Phạm vi hẹp:** nếu mẫu chỉ gồm người BMI 20–26, r có thể nhỏ dù trong quần thể liên hệ mạnh —
  hệ số tương quan nhạy với phạm vi dữ liệu.

### Checklist tự kiểm chứng trên Mac (`MAC_SPSS_VERIFICATION_PENDING`)

- [ ] `Scatter/Dot… → Simple Scatter` tồn tại trong Legacy Dialogs.
- [ ] `Analyze → Correlate → Bivariate…` cho tick cả Pearson + Spearman cùng lúc.
- [ ] n trong bảng = số cặp có đủ cả 2 biến (158 cho BMI×SBP — kiểm tra lại vì sao khác 160).
- [ ] Số khớp `datasets/expected-results.md`.
