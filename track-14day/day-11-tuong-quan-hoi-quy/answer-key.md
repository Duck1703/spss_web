# Ngày 11 — Đáp án: P2-Q10 / P2-Q11 (+Q12 mở rộng)

> Kiểm chứng bằng Python (pyreadstat/scipy) trên `bai_2/File1.sav` — **NOT_RUN**:
> chưa chạy SPSS thật. Số thập phân theo dấu `,` kiểu Việt trong bài; SPSS in `.`

## P2-Q10 — Tương quan (Bivariate Correlations, n=50, không missing)

| Cặp | Pearson r | Sig. (2-tailed) | Đọc |
|---|---|---|---|
| csa ↔ htuo | **−0,351** | **0,012** | âm, trung bình, có ý nghĩa |
| csa ↔ ytruo | **0,768** | **<0,001** | dương, mạnh, có ý nghĩa |
| ytruo ↔ htuo | **−0,349** | **0,013** | âm, trung bình, có ý nghĩa |

Spearman (tham khảo): ρ = −0,287 / 0,919 / −0,369 — cùng dấu, cùng ý nghĩa →
kết luận vững.

**Trả lời đề:** (a) CLCS sau giảm khi tuổi tăng (r=−0,35, p=0,012); (b) CLCS
trước/sau tương quan dương mạnh (r=0,77, p<0,001); (c) CLCS trước cũng giảm
theo tuổi (r=−0,35, p=0,013).

## P2-Q11 — Hồi quy tuyến tính đơn

| Mô hình | B0 (Constant) | B1 | R² | Sig. của B1 |
|---|---|---|---|---|
| csa ~ htuo | **85,795** | **−0,362** | **0,123** | 0,012 |
| csa ~ ytruo | **1,821** | **0,940** | **0,589** | <0,001 |
| ytruo ~ htuo | **85,978** | **−0,293** | **0,121** | 0,013 |

- Sig. của B1 = Sig. của r (hồi quy đơn = tương quan viết lại thành đường thẳng).
- Diễn giải: mỗi tuổi thêm → CLCS sau giảm 0,36 điểm; CLCS trước giải thích
  được **59%** biến thiên CLCS sau — mô hình đáng tin nhất trong ba.
- **Vị trí đọc:** Model Summary → cột "R Square"; Coefficients → "(Constant)" và
  tên biến; bảng ANOVA của hồi quy cũng in Sig. — trùng Sig. của B1 ở hồi quy đơn.

## P2-Q12 — (mở rộng) Hồi quy đa biến `csa ~ htuo + nsonga + ytruo`

- R² = **0,623** (Adjusted R² = 0,598); F(3,46) = **25,314**, p < 0,001.
- Coefficients: `ytruo` B=**0,850**, t=6,996, **p<0,001** — duy nhất ý nghĩa;
  `htuo` B=−0,124 p=0,225; `nsonga` B=−1,114 p=0,085; Constant p=0,183.
- Bài học: R² tăng ít so với mô hình đơn (0,623 vs 0,589) vì `htuo`/`nsonga`
  không còn đóng góp khi đã có `ytruo` — "nhiều biến ≠ mô hình tốt hơn".

## Lỗi người mới hay gặp

- **Đảo X/Y trong regression:** `csa~htuo` và `htuo~csa` cho B khác nhau — luôn
  đặt biến "kết quả" vào Dependent (đề hỏi về csa → csa là Dependent).
- **Đọc nhầm ô trong bảng Correlations:** mỗi ô 3 dòng (r / Sig. / N) — quên đọc
  dòng Sig. → thiếu ý nghĩa thống kê.
- **Nhầm R² với r:** R²=0,589 → r=√0,589≈0,768 (lấy dấu từ B1). Báo cáo r mà viết
  R² là sai gấp ~2 lần giá trị.
- **Kết luận nhân quả:** dữ liệu này là cắt ngang/quan sát — chỉ nói được "liên
  hệ", "dự đoán được một phần", không nói "gây ra".
- **Quên kiểm N:** File1 n=50 đủ cho Pearson; nếu file khác có missing, N trong
  ô tương quan có thể <50 (listwise/pairwise khác nhau).
