# Ngày 13 — Capstone B: phân tích & báo cáo File5

> **Lộ trình:** Exercise-first 14 ngày · **Thời lượng:** ~115 phút · **Dataset:** `SPSS_Practice/workspace/File5_work.sav` (bản làm việc từ Ngày 12)
> **Trạng thái:** READY v1 (Task 16) — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`; số liệu kiểm chứng Python `NOT_RUN`.
> **Bài tập nguồn hôm nay:** **P2-TH3** (Bài thực hành số 3 — phần phân tích & viết báo cáo).

---

## A. Bài tập gốc — tiếp nối kế hoạch Ngày 12

{{exercise:P2-TH3}}

> **Điều kiện đầu vào:** đã có `File5_work.sav` + phiếu khám sức khỏe + kế hoạch
> phân tích từ Ngày 12. Chưa có → quay lại Ngày 12 trước (capstone không nhảy cóc).

## B. Mục tiêu ngày 13

1. Thực thi đúng kế hoạch đã viết — không phân tích lan man.
2. Chọn đúng phép cho từng cặp biến; kiểm tra giả định trước khi đọc kết quả.
3. **Viết báo cáo ngắn** theo cấu trúc nghiên cứu: mô tả → so sánh → kết luận có
   giới hạn.

## C. Dữ liệu & phép đã chốt (từ kế hoạch Ngày 12)

| Cặp phân tích | Phép | Học ở ngày |
|---|---|---|
| Bảng mô tả toàn mẫu | Frequencies/Descriptives | Ngày 02–03 |
| Khám_TT, Siêu_âmTT × Sinhthiet | Crosstabs + χ² | Ngày 05 |
| Tuoi, PSA, Thetich theo Sinhthiet | Independent-samples t (đọc Levene → chọn dòng) | Ngày 09 |
| (tùy chọn) PSA nhóm × Sinhthiet | Recode + Crosstabs + χ² | Ngày 06 + 05 |

## D. Kiến thức cần biết (vừa đủ — nhắc lại đúng lúc cần)

- **Levene quyết định dòng đọc:** p_Levene ≥0,05 → dòng "Equal variances assumed"
  (pooled); p<0,05 → dòng "Equal variances not assumed" (Welch). Ở File5 hai biến
  cho hai kết quả Levene khác nhau → cùng một output, đọc **hai dòng khác nhau**.
- **PSA lệch phải:** kết quả t-test trên PSA đọc kèm cảnh giác; trình bày thêm
  median trong báo cáo.
- **Ý nghĩa ≠ độ lớn:** χ²/F có ý nghĩa chưa nói liên hệ mạnh cỡ nào — báo cáo cần
  cả %/trung bình thực tế.
- **Báo cáo ngắn đúng chuẩn:** đối tượng → mô tả → so sánh theo outcome → kết luận
  → giới hạn. 5–8 câu là đủ.

## E. Thực hành có hướng dẫn

> ⚠️ `MAC_SPSS_VERIFICATION_PENDING`

### Bước 1 — Mở đúng file work

- **Làm:** mở `workspace/File5_work.sav` (không phải file gốc). Kiểm tiêu đề cửa sổ.
- **Kiểm chứng:** Frequencies nhanh `Sinhthiet` → vẫn 201 âm / 95 dương.

### Bước 2 — Bảng chéo nhị phân × Sinhthiet

- **Làm:** Analyze → Descriptive Statistics → **Crosstabs** → Rows = `Khám_TT`,
  Columns = `Sinhthiet`; Statistics → **Chi-square**; Cells → **Column %** → OK.
- **Đọc:** Khám_TT dương ở nhóm sinh thiết âm **13,4%** (27/201) vs dương **71,6%**
  (68/95) — **χ² = 4,920, p = 0,027**.
- **Làm lại** cho `Siêu_âmTT`: 16,9% (34/201) vs 64,2% (61/95) — **χ² = 14,779,
  p < 0,001**. (Kiểm expected counts — đều ≥35 → χ² hợp lệ.)

{{guide:d13-crosstab}}

### Bước 3 — Independent t cho 3 biến liên tục

- **Làm:** Compare Means → **Independent-Samples T Test** → Test Variables:
  `Tuoi`, `PSA`, `Thetich`; Grouping = `Sinhthiet` (0/1) → OK.
- **Đọc đúng dòng theo Levene:**
  - `Tuoi`: Levene p=0,217 → **dòng pooled: t = −0,488, p = 0,626** — tuổi hai
    nhóm tương đương (66,6 vs 67,1).
  - `PSA`: Levene p<0,001 → **dòng Welch: t = −3,426, p = 0,0009** — PSA nhóm
    dương cao hơn rõ (5,63±5,44 vs 15,55±27,96; median 4,7 vs 7,3).
  - `Thetich`: Levene p=0,033 → **dòng Welch: t = 2,542, p = 0,012** — nhóm dương
    tuyến *nhỏ hơn* (32,5 vs 37,4 ml).
- **Bẫy:** PSA sd=27,96 > mean 15,55 → lệch phải đè lên kết quả; báo cáo phải
  ghi "đọc kèm cảnh giác, median 4,7 vs 7,3".

{{guide:d13-ttest}}

### Bước 4 — (Tùy chọn nhưng khuyến khích) PSA theo nhóm

- **Làm:** Transform → Recode into Different Variables → `PSA` → `PSA_grp`:
  0–4 → 1; 4–10 → 2; 10–20 → 3; >20 → 4 (ngưỡng lâm sàng chuẩn) → Crosstabs
  `PSA_grp` × `Sinhthiet` + χ².
- **Đọc:** tỷ lệ sinh thiết dương theo nhóm PSA: **14,4% / 34,8% / 41,4% / 78,9%**
  (tăng dần); **χ² = 33,684, df=3, p < 0,001** — gradient rõ.

### Bước 5 — Viết báo cáo (sản phẩm chính)

Mẫu 6 câu — điền số bạn vừa có:

```
Đối tượng: 296 bệnh nhân nghi K tuyến tiền liệt (tuổi 47–91, TB 66,8); 32,1%
sinh thiết dương tính. So với nhóm âm tính, nhóm dương tính có tỷ lệ khám trực
tràng dương cao hơn (71,6% vs 13,4%; p=0,027) và siêu âm trực tràng dương cao
hơn (64,2% vs 16,9%; p<0,001). PSA trung bình nhóm dương cao hơn (15,55 vs 5,63;
Welch t=−3,43, p<0,001) nhưng phân phối lệch phải (median 7,3 vs 4,7). Tuổi hai
nhóm tương đương (p=0,63). Tỷ lệ sinh thiết dương tăng theo nhóm PSA (14%→79%).
Kết luận: PSA, khám TT và siêu âm TT liên quan đến kết quả sinh thiết; cắt ngang
một trung tâm nên chỉ kết luận liên quan, không kết luận nhân quả.
```

- **Lưu:** File → Export output `.spv` (hoặc copy bảng vào Word) + lưu báo cáo
  `BaoCao_TH3.docx` vào `outputs/`.

## F. Mô phỏng SPSS

Hai mô phỏng: Crosstabs (Siêu_âmTT × Sinhthiet + χ²) và Independent-Samples T
với hai dòng Levene (PSA đọc Welch, Tuoi đọc pooled).

## G. Bài tập tự làm

Mở [workbook](/d13/bai-tap/): hoàn thiện bảng kết quả đầy đủ + viết báo cáo của
riêng bạn theo mẫu.

## H. Kiểm tra kết quả

- [ ] Bảng 2×2: Khám_TT χ²=4,920 p=0,027; Siêu_âmTT χ²=14,779 p<0,001.
- [ ] t-test đọc đúng dòng: Tuoi pooled p=0,626; PSA Welch p≈0,001; Thetich
  Welch p=0,012.
- [ ] Báo cáo có: n, % outcome, ≥2 so sánh với p, nhận xét PSA lệch, câu giới hạn.
- [ ] File output + báo cáo lưu trong `outputs/`.

## I. Giải thích đáp án

[đáp án](/d13/dap-an/) — bảng kết quả hoàn chỉnh + báo cáo mẫu + danh sách kiểm
"đủ/không đủ" cho từng mục.

## J. Chuyển bài

Ngày 14 — **đánh giá cuối khóa**: 6–7 bài độc lập chọn lọc từ kho bài nguồn
(P1-Q24, Q26, Q31, Q33, Q43, P2-Q08), rubric 100 điểm, tự chấm theo đáp án ẩn.
Không còn hướng dẫn từng click — bạn tự chọn phép.

## K. Đọc thêm (không bắt buộc)

- PSA lệch → Mann-Whitney U cho kết luận vững hơn (p<0,001, khớp hướng t-test) —
  ngoài phạm vi bắt buộc.
- Nếu muốn "điều chỉnh nhiều yếu tố cùng lúc" → hồi quy logistic (P2-Q14/Q15 —
  đã hoãn, xem lộ trình mục 6).
