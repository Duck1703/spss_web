# Ngày 08 — Bảng chéo và Chi-square

> **Lộ trình:** Practice-first 14 ngày · **Thời lượng:** ~90–120 phút · **Dataset:** `clinic_bp_my_clean.sav`
> **Trạng thái:** DRAFT — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`. Kết quả mong đợi `NOT_RUN`.

---

## A. Hôm nay bạn sẽ làm gì

1. Tạo **Crosstabs** giữa 2 biến định tính — đọc % theo hàng.
2. Chạy **Chi-square**, kiểm tra **expected count** trước khi tin kết quả.
3. Đọc **Odds Ratio (OR)** từ output và biết vì sao OR ≠ RR.
4. Biết khi nào phải hỏi thêm về **Fisher exact test**.

## B. Tình huống y khoa

Bác sĩ Lan hỏi: *"Bệnh nhân **có đái tháo đường** và **không có đái tháo đường** có khác nhau về
tỷ lệ đạt kiểm soát huyết áp sau 3 tháng (`bp_controlled`) không?"*

- `diabetes_flag` (định tính: 0/1) × `bp_controlled` (định tính: 0/1) → **bảng chéo 2×2**.
- Không so trung bình — so **tỷ lệ** → công cụ của ngày hôm nay.

## C. Những điều cần biết trước (vừa đủ)

- **Crosstabs**: ô (i,j) = số ca có mã hàng i và mã cột j. Đọc kèm **Row % / Column %** —
  chọn hướng % theo câu hỏi ("trong nhóm có ĐTĐ, bao nhiêu % đạt kiểm soát" → Row % nếu
  `diabetes_flag` là hàng).
- **Chi-square** hỏi: "mối liên hệ giữa 2 biến trong mẫu này có thể chỉ do ngẫu nhiên không?"
  Điều kiện tối thiểu: **expected count** (tần số kỳ vọng) không được quá nhỏ —
  quy tắc nhập môn: không ô nào expected < 1 và ≤20% ô expected < 5 (2×2: **tất cả ≥5** là đẹp).
- **Expected < 5 → không chạy Chi-square nữa** → nhớ đến **Fisher exact test** (SPSS cho sẵn trong
  cùng bảng output cho 2×2) — đọc dòng "Fisher's Exact Test" thay thế.
- **OR (odds ratio)**: tỷ số odds giữa 2 nhóm — hay dùng khi không tính trực tiếp nguy cơ.
  OR=1: không liên quan. **OR ≠ RR** (RR = tỷ lệ % thực tế) — ở sự kiện hiếm OR≈RR, ở sự kiện
  thường gặp OR "phóng đại" so với RR. Trong khóa này: đọc được OR, diễn giải hướng (nhỏ hơn/
  lớn hơn 1), không biến nó thành RR.

## D. Thực hành từng bước trên Mac

> ⚠️ `MAC_SPSS_VERIFICATION_PENDING` — checklist cuối bài.

### Bước 1 — Crosstabs

**Analyze → Descriptive Statistics → Crosstabs…**

- `diabetes_flag` → **Row(s)** · `bp_controlled` → **Column(s)**.
- **Cells…** → tick `Row` trong Percentages → Continue.
- **Statistics…** → tick `Chi-square` + `Risk` → Continue → OK.

### Bước 2 — Đọc bảng chéo

Kỳ vọng (`NOT_RUN`, Python — chỉ 136 ca có đủ 2 biến; 23 thiếu `bp_controlled` + 1 thiếu `diabetes_flag`):

| | `bp_controlled`=0 | =1 | % đạt kiểm soát |
|---|---|---|---|
| `diabetes_flag`=0 | 23 | 61 | **72,6%** |
| `diabetes_flag`=1 | 33 | 19 | **36,5%** |

Đọc: trong nhóm không ĐTĐ, 72,6% đạt kiểm soát; nhóm có ĐTĐ chỉ 36,5%.

### Bước 3 — Đọc Chi-square

Bảng **Chi-Square Tests**:
- Đọc cảnh báo expected count ngay dưới bảng: kỳ vọng **0 ô có expected < 5** (min expected ≈ 21,4)
  → điều kiện thỏa, Chi-square dùng được.
- Dòng **Pearson Chi-Square**: χ² = 17,26, df=1, **p < 0,001**.
  *(Dòng Continuity Correction = chi-square có hiệu chỉnh Yates — SPSS in cho 2×2: χ²≈15,80, p<0,001.)*

### Bước 4 — Đọc Risk (OR)

Bảng **Risk Estimate** → dòng `Odds Ratio for diabetes_flag (0 / 1)`: kỳ vọng **OR ≈ 0,22**.

Diễn giải: odds đạt kiểm soát ở nhóm không-ĐTĐ thấp hơn… — khoan, đọc cẩn thận: OR≈0,22 ứng với
thứ tự mã `diabetes_flag` 0/1; **odds đạt kiểm soát ở nhóm *có* ĐTĐ chỉ bằng ~0,22 lần nhóm không
ĐTĐ** (đảo lại: không-ĐTĐ có odds cao gấp ~4,6 lần). Luôn kiểm tra thứ tự mã trước khi phát biểu
hướng OR.

### Bước 5 — Viết kết quả

> "Trong 136 bệnh nhân có đủ dữ liệu tái khám, tỷ lệ đạt kiểm soát huyết áp ở nhóm có đái tháo
> đường là 36,5% so với 72,6% ở nhóm không có (χ²(1) = 17,26; p < 0,001; OR = 0,22)."

## E. Hiểu kết quả của bạn

- ✅ "Liên quan thống kê giữa ĐTĐ và kiểm soát HA trong mẫu này."
- ❌ "ĐTĐ **gây** mất kiểm soát HA" — thiết kế cắt ngang/quan sát → **liên quan ≠ nhân quả**
  (có thể ngược chiều hoặc do biến thứ 3 — tuổi, béo phì, tuân thủ).
- ❌ "OR 0,22 nghĩa là nguy cơ giảm 78%" — OR không phải RR; câu an toàn: "odds đạt kiểm soát ở
  nhóm có ĐTĐ chỉ bằng ~0,22 lần".
- ⚠️ Chỉ 136/160 ca có `bp_controlled` — 23 ca mất follow-up có thể làm lệch kết luận
  (người mất dấu có thể là nhóm kiểm soát kém).

## F. Bài tập tự làm

`workbook.md` — chạy thêm 1 crosstabs khác + nhận diện khi nào cần Fisher.

## G. Đáp án

`answer-key.md`.

## H. Checkpoint qua bài

- [ ] Bảng chéo 2×2 + % hàng đúng.
- [ ] Kiểm tra expected count trước khi đọc Chi-square.
- [ ] Câu kết quả có % thực tế + χ² + p + OR — và không nói "gây".

## I. Đọc thêm (không bắt buộc)

- **Bảng lớn hơn 2×2** (vd: `smoking_status` 3 mức × `bp_controlled`): Chi-square vẫn chạy,
  OR không còn in trực tiếp; kiểm tra expected count theo quy tắc ≤20% ô <5.
- **Fisher exact test** = "đếm trực tiếp" thay xấp xỉ χ² — SPSS in dòng này ngay trong bảng
  Chi-Square Tests cho 2×2; dùng khi expected < 5.
- **RR**: SPSS chỉ tính RR cho 2×2 (trong Risk Estimate). Công thức RR = (61/84)/(19/52) =
  72,6%/36,5% ≈ **1,99** — tự tính tay được: "% đạt kiểm soát ở không-ĐTĐ gấp ~2 lần nhóm có ĐTĐ".
  So với OR=0,22 (đảo) → thấy rõ OR và RR không giống nhau.

### Checklist tự kiểm chứng trên Mac (`MAC_SPSS_VERIFICATION_PENDING`)

- [ ] `Statistics…` có cả `Chi-square` và `Risk`; `Cells…` có `Row` %.
- [ ] Bảng Chi-Square Tests có chú thích expected count.
- [ ] Risk Estimate chỉ xuất hiện với bảng 2×2 — nếu đổi sang biến 3 mức, mục này vắng.
- [ ] Số khớp `datasets/expected-results.md`.
