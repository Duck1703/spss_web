# Ngày 13 — Workbook: Capstone B — phân tích & báo cáo

> Làm lần lượt, **không nhìn `answer-key.md`** cho tới khi xong.
> File: `SPSS_Practice/workspace/File5_work.sav` (từ Ngày 12).

---

## BT1 — Bảng mô tả (Table 1 của báo cáo)

1. Frequencies + Descriptives → điền:

| Đặc điểm | Kết quả của bạn |
|---|---|
| n | |
| Tuổi: mean ± SD (min–max) | |
| Khám_TT dương: n (%) | |
| Siêu_âmTT dương: n (%) | |
| PSA: mean ± SD, median | |
| Thể tích: mean ± SD | |
| Sinhthiet dương: n (%) | |

> ✅ **Sản phẩm:** bảng mô tả 7 dòng

## BT2 — So sánh theo Sinhthiet (Bảng 2)

1. Crosstabs: `Khám_TT` × `Sinhthiet`, rồi `Siêu_âmTT` × `Sinhthiet` —
   Column %, Chi-square. Ghi % mỗi nhóm + χ² + p + min expected.
2. Independent-Samples T: `Tuoi`, `PSA`, `Thetich` theo `Sinhthiet` —
   ghi Levene p **trước**, rồi chọn dòng t đúng.
3. (Tùy chọn) Recode `PSA`→`PSA_grp` (<4/4–10/10–20/>20) → Crosstabs × Sinhthiet.

> ✅ **Sản phẩm:** bảng so sánh đầy đủ gồm %, mean±SD, thống kê, p cho từng biến

> **Gợi ý:** quên tick Column % → bảng chỉ có đếm, khó so sánh trực quan; Levene
> p<0,05 → đọc dòng dưới (Equal variances not assumed).

## BT3 — Viết báo cáo ngắn

Dùng mẫu 6 câu trong lesson mục E-Bước 5, thay số liệu của bạn. Yêu cầu:

- [ ] Có n và % outcome.
- [ ] ≥2 so sánh kèm giá trị thực (%, mean) **và** p.
- [ ] Nhận xét riêng về PSA lệch phải.
- [ ] Câu giới hạn cuối (không kết luận nhân quả).

> ✅ **Sản phẩm:** `outputs/BaoCao_TH3.docx` + file output `.spv`

## BT4 — Đố vui (không cần SPSS)

1. Levene p=0,217 cho Tuoi nhưng p<0,001 cho PSA — tại sao hai biến đọc ở hai
   dòng khác nhau của cùng một bảng output?
2. PSA t có ý nghĩa nhưng sd (27,96) lớn hơn mean (15,55) — phát biểu nào trong
   báo cáo chịu trách nhiệm về điều này?
3. χ² bảng 2×2 Khám_TT có min expected 35 — giả định χ² có bị vi phạm không?
