# Ngày 06 — So sánh hai nhóm độc lập (Independent t-test)

> **Lộ trình:** Practice-first 14 ngày · **Thời lượng:** ~90–120 phút · **Dataset:** `clinic_bp_my_clean.sav`
> **Trạng thái:** DRAFT — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`. Kết quả mong đợi = cross-check Python, `NOT_RUN`.

---

## A. Hôm nay bạn sẽ làm gì

1. Nhận diện khi nào câu hỏi là "so sánh 2 nhóm độc lập trên biến định lượng".
2. Kiểm tra nhanh 2 điều kiện dùng t-test (phân phối & phương sai).
3. Chạy **Independent-Samples T Test** và đọc đúng dòng output.
4. Viết một câu kết quả có kèm độ lớn khác biệt và 95% CI — không chỉ nói "p < 0,05".

## B. Tình huống y khoa

Câu hỏi của bác sĩ Lan: *"Huyết áp sau 3 tháng của nhóm A và nhóm B có khác nhau không?"*

- 2 nhóm **độc lập** (mỗi bệnh nhân chỉ ở một nhóm — không phải trước/sau trên cùng người).
- Biến kết quả `sbp_followup` là **định lượng**.
→ Đây là chỗ của independent-samples t-test.

## C. Những điều cần biết trước (vừa đủ)

- **T-test** trả lời: "trung bình hai nhóm khác nhau, và khác biệt đó có thể chỉ do ngẫu nhiên không?"
- Đọc output có 3 lớp:
  1. **Group Statistics** — mean/SD từng nhóm (luôn đọc trước).
  2. **Levene's Test** — kiểm tra giả định phương sai bằng nhau; quyết định đọc **dòng trên hay dòng dưới** của bảng t-test.
  3. **t, df, Sig. (2-tailed), Mean Difference, 95% CI** — phần trả lời câu hỏi.
- **p-value** là gì (phiên bản đủ dùng): *xác suất* nhìn thấy chênh lệch lớn như vậy (hoặc lớn hơn)
  **nếu thật sự hai nhóm không khác nhau**. p nhỏ → khác biệt khó giải thích bằng ngẫu nhiên.
  p **không** phải xác suất "thuốc B hiệu quả", và không đo độ lớn hiệu quả.
- **95% CI của khác biệt** = khoảng ước lượng thật của khác biệt trung bình. Khoảng này nói được
  "chênh bao nhiêu" — điều p-value không nói.
- Điều kiện áp dụng (mức nhập môn): (a) biến định lượng, (b) 2 nhóm độc lập, (c) phân phối không
  lệch/cực trị quá nặng trong từng nhóm, (d) n đủ cho dữ liệu.

## D. Thực hành từng bước trên Mac

> ⚠️ `MAC_SPSS_VERIFICATION_PENDING` — checklist cuối bài.

### Bước 1 — Kiểm tra trước khi chạy

- Variable View: `sbp_followup` Measure = **Scale**; `treatment_group` = **Nominal**, 2 mã (A/B).
- Dữ liệu: chỉ ca có `sbp_followup` mới vào phân tích — SPSS tự loại missing (kỳ vọng n = 74 + 63).
- Nhìn nhanh phân phối: boxplot Ngày 05 cho thấy không có cực trị khủng; nhớ rằng còn 23 ca thiếu
  follow-up → **phân tích chỉ nói về nhóm có tái khám**.

### Bước 2 — Chạy

**Analyze → Compare Means → Independent-Samples T Test…**

- `sbp_followup` → ô **Test Variable(s)**.
- `treatment_group` → ô **Grouping Variable** → bấm **Define Groups…** → gõ Group 1: `A`,
  Group 2: `B` → Continue → OK.

### Bước 3 — Đọc output

Bảng 1 **Group Statistics**: kỳ vọng `A: n=74, mean=140,5, SD=16,4` · `B: n=63, mean=128,7, SD=19,2`.

Bảng 2 **Independent Samples Test**:
- Xem **Levene's Test**: kỳ vọng F ≈ 1,09, p ≈ 0,298 (>0,05 → coi phương sai đồng nhất,
  đọc **dòng "Equal variances assumed"**).
- Kỳ vọng dòng trên: **t = 3,87 · df = 135 · Sig. (2-tailed) < 0,001 ·
  Mean Difference = 11,8 mmHg · 95% CI [5,8 ; 17,8]**.
- Nếu Levene p ≤ 0,05 → đọc dòng **Welch** (dưới): ở đây Welch t = 3,82, p < 0,001 — cùng kết luận.

### Bước 4 — Viết kết quả

> "Nhóm B có huyết áp tâm thu sau 3 tháng trung bình thấp hơn nhóm A 11,8 mmHg
> (95% CI: 5,8–17,8; t(135) = 3,87; p < 0,001)."

Câu này có đủ 4 thứ: hướng khác biệt, độ lớn, độ bất định, kiểm định. **Không viết** "thuốc B chữa
huyết áp tốt hơn" — dữ liệu giả lập + thiết kế không phải RCT → giới hạn diễn giải xem mục E.

## E. Hiểu kết quả của bạn — nói được và không nói được

- ✅ "Trong mẫu này, trung bình hai nhóm chênh ~11,8 mmHg và khác biệt khó do ngẫu nhiên."
- ⚠️ 95% CI [5,8;17,8] → khác biệt thật có thể chỉ 5,8 — vẫn có thể < ngưỡng ý nghĩa lâm sàng mà bác sĩ
  quan tâm. **Statistically significant ≠ clinically important.**
- ❌ "B tốt hơn A cho mọi bệnh nhân" — mẫu là bệnh nhân *có tái khám* (137/160), viện này, 3 tháng.
- ❌ "p < 0,001 chứng minh điều trị gây ra giảm HA" — thiết kế quan sát/ảo → có thể có nhiễu
  (nhóm B trẻ hơn? tuân thủ tốt hơn? — chưa kiểm soát ở khóa này).

## F. Bài tập tự làm

`workbook.md` — tự chạy t-test khác + chọn t-test cho tình huống mới.

## G. Đáp án

`answer-key.md`.

## H. Checkpoint qua bài

- [ ] Output có cả 2 bảng; đọc đúng dòng theo Levene.
- [ ] Viết được câu kết quả 4 thành phần cho `sbp_followup` theo `treatment_group`.
- [ ] Trả lời được: "tại sao n chỉ có 74+63 thay vì 160?"

## I. Đọc thêm (không bắt buộc)

- **Levene p < 0,05** → đọc dòng Welch (SPSS cho sẵn) — bạn không cần làm thêm gì khác.
- Nếu biến **lệch nặng / n nhỏ / nhiều cực trị** → t-test mất độ tin cậy; lúc đó hỏi về
  Mann–Whitney U (thuộc chương trình mở rộng — chỉ cần biết tồn tại).
- **Trùng hợp cần chú ý:** khác biệt nhóm ở *baseline* là nhỏ (mean A 137,8 vs B 140,5 — bạn có thể
  tự kiểm chứng bằng một t-test nữa trong workbook).

### Checklist tự kiểm chứng trên Mac (`MAC_SPSS_VERIFICATION_PENDING`)

- [ ] Menu path `Analyze → Compare Means → Independent-Samples T Test…` tồn tại trên bản SPSS của bạn.
- [ ] Define Groups nhận ký tự chữ `A`/`B` (biến string) — nếu nhóm là mã số thì nhập mã số.
- [ ] Output có bảng `Group Statistics` + `Independent Samples Test` với đủ 2 dòng t-test.
- [ ] Số liệu khớp `datasets/expected-results.md` trong sai số làm tròn.
