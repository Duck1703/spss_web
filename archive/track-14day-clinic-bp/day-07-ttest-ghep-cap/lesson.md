# Ngày 07 — So sánh trước–sau (Paired t-test)

> **Lộ trình:** Practice-first 14 ngày · **Thời lượng:** ~90–120 phút · **Dataset:** `clinic_bp_my_clean.sav` + `exercise_hba1c_pairs.csv`
> **Trạng thái:** DRAFT — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`. Kết quả mong đợi `NOT_RUN`.

---

## A. Hôm nay bạn sẽ làm gì

1. Nhận diện thiết kế "đo 2 lần trên cùng một người" — và vì sao nó khác 2 nhóm độc lập.
2. Chạy **Paired-Samples T Test** và đọc đúng bảng.
3. Tự lặp lại trên dataset HbA1c nhỏ (n=24).
4. Biết khi nào paired t-test không đáng tin (và tên phương án thay thế để hỏi thêm).

## B. Tình huống y khoa

Câu hỏi mới của bác sĩ Lan: *"Trong những bệnh nhân có cả 2 lần đo, huyết áp sau 3 tháng có thay
đổi so với lúc nhập viện không?"*

- Không còn là 2 nhóm — đây là **cùng một người, 2 lần đo** (`sbp_baseline` ↔ `sbp_followup`).
- Mỗi người là "chứng chứng của chính mình" → phân tích **hiệu số từng người**, không phải
  so trung bình 2 đám độc lập.
→ Chỗ của **paired-samples t-test**.

## C. Những điều cần biết trước (vừa đủ)

- **Paired** = "ghép cặp": mỗi quan sát ở lần 1 khớp đúng một quan sát ở lần 2 (cùng bệnh nhân,
  cùng mắt bệnh nhân, cùng mẫu máu…). Dấu hiệu: số dòng 2 biến **phải khớp cùng người** —
  trong dataset, đó là cùng `patient_id`.
- Kiểm định thực chất hỏi: "hiệu số trung bình giữa 2 lần đo khác 0 không?" —
  tương đương t-test 1 mẫu trên cột `hiệu_số = baseline − followup`.
- Điều kiện quan trọng: **cột hiệu số** không quá lệch/không có cực trị khủng — chính cột hiệu số
  chứ không phải từng biến riêng. (Ngày 10 bạn sẽ kiểm chứng bằng histogram của hiệu số.)
- Cặp **không đầy đủ** (người chỉ đo 1 lần) bị loại khỏi phân tích → n trong output < n trong file
  là chuyện bình thường.

## D. Thực hành từng bước trên Mac

> ⚠️ `MAC_SPSS_VERIFICATION_PENDING` — checklist cuối bài.

### Bước 1 — Chạy paired t-test trên clinic_bp

**Analyze → Compare Means → Paired-Samples T Test…**

- Ô **Variable1**: `sbp_baseline` · Ô **Variable2**: `sbp_followup` → OK.
- (Trong SPSS mới có thể chọn nhiều cặp; ở đây một cặp đủ.)

### Bước 2 — Đọc output

Bảng **Paired Samples Statistics**: Baseline mean ≈ 138,8 (SD 15,5) · Follow-up mean ≈ 134,9
(SD 18,6) — chỉ trên n=136 ca có đủ cả 2 lần đo.

Bảng **Paired Samples Test** — đọc dòng của cặp biến:
- **Mean (hiệu số) ≈ 3,9 mmHg** (baseline − followup: dương = giảm)
- SD của hiệu số ≈ 8,7 · **95% CI [2,5 ; 5,4]** · **t = 5,30 · df = 135 · Sig.(2-tailed) < 0,001**

### Bước 3 — Viết kết quả

> "Trong 136 bệnh nhân có đủ 2 lần đo, huyết áp tâm thu trung bình giảm 3,9 mmHg sau 3 tháng
> (95% CI: 2,5–5,4; t(135) = 5,30; p < 0,001)."

⚠️ **Nói "giảm" ≠ nói "do điều trị"** — nhiều thứ khác có thể gây giảm (quay lại đo, thay đổi lối sống,
hồi quy về trung bình). Không có nhóm chứng → không kết luận nhân quả.

### Bước 4 — Tự lặp lại trên dataset HbA1c

Import `exercise_hba1c_pairs.csv` (File → Import Data → CSV — y như Ngày 01), lưu thành
`hba1c_pairs.sav`, rồi chạy paired t-test cho `hba1c_t0` ↔ `hba1c_t3`.

Kỳ vọng (`NOT_RUN`, Python): n=24, hiệu số trung bình **0,27%** (SD 0,31), 95% CI [0,14 ; 0,41],
t = 4,37, df = 23, p < 0,001.

## E. Hiểu kết quả của bạn

- ✅ "Trong các bệnh nhân được đo cả 2 lần, HA trung bình giảm ~3,9 mmHg."
- ⚠️ So sánh với Ngày 06: paired test cho thấy *trong cùng người* HA giảm; t-test độc lập cho thấy
  *nhóm B* thấp hơn *nhóm A* ở kỳ follow-up — hai câu hỏi khác nhau, không trộn lẫn.
- ❌ "Giảm là do phác đồ A/B" — thiết kế trước–sau không có nhóm chứng.
- ❌ Quên 24 ca không có follow-up → hiệu số chỉ tính trên 136 người, có thể không đại diện
  cho nhóm mất dấu.

## F. Bài tập tự làm

`workbook.md` — phân biệt paired vs độc lập, đọc output paired, tình huống mới.

## G. Đáp án

`answer-key.md`.

## H. Checkpoint qua bài

- [ ] Output paired t-test cho cả 2 dataset.
- [ ] Viết được 1 câu kết quả cho HbA1c.
- [ ] Giải thích được vì sao df=135 ở dataset chính dù file có 160 dòng.

## I. Đọc thêm (không bắt buộc)

- **Khi cột hiệu số lệch nặng/có cực trị khủng** → paired t-test kém tin cậy; phương án tương ứng là
  **Wilcoxon signed-rank** (chương trình mở rộng). Mốc nhớ: "paired ↔ Wilcoxon;
  độc lập ↔ Mann–Whitney".
- **Paired ≠ 2 lần đo bất kỳ:** hai nhóm người khác nhau đo ở 2 thời điểm khác nhau
  (tiền–hậu giám sát quần thể) **không** phải paired — cặp phải là *cùng đối tượng*.
- Trong SPSS: nếu muốn kiểm tra trực tiếp phân phối của hiệu số, dùng **Transform → Compute
  Variable…** tạo `sbp_diff = sbp_baseline − sbp_followup` rồi vẽ histogram — sẽ làm ở workbook.

### Checklist tự kiểm chứng trên Mac (`MAC_SPSS_VERIFICATION_PENDING`)

- [ ] Menu path `Analyze → Compare Means → Paired-Samples T Test…` tồn tại.
- [ ] Dialog cho chọn cặp Variable1/Variable2; thứ tự chọn quyết định dấu của hiệu số.
- [ ] Output có 3 bảng: Paired Samples Statistics / Correlations / Test.
- [ ] Số khớp `datasets/expected-results.md` trong sai số làm tròn.
