# Ngày 03 — Đáp án & giải thích

> Đọc **sau khi** đã làm xong `workbook.md`. Số liệu tái tính trực tiếp từ
> `p1_B01_HA (1).sav` bằng Python (cross-check, nhãn `NOT_RUN`). Percentiles của SPSS có
> thể chênh vài phần mười do phương pháp nội suy — chấp nhận được.

---

## BT1 — P1-Q03

Điền vào dòng "Tuổi" của đề:

| Thông số | Giá trị | Lấy ở |
|---|---|---|
| Trị trung bình | **66,9** | Descriptives / Frequencies→Statistics |
| Trung vị | **66** | Frequencies→Statistics (Median) |
| Độ lệch chuẩn | **10,93** | cả hai |
| Phương sai | **119,43** | Descriptives (tick Variance) / Statistics… |
| Khoảng biến thiên | **56** | Statistics… (Range) = 97 − 41 |
| Tứ vị thứ 1 | **62** | Statistics… (Quartiles → 25th) |
| BPV thứ 70 | **71** | Statistics… (Percentile(s) 70 → Add) |

2. Kiểm chứng: 10,93² = 119,5 ≈ 119,43 ✓ (làm tròn); 97 − 41 = 56 ✓.
3. Descriptives cho: Mean, SD, Min, Max, Variance. **Bắt buộc** Frequencies→Statistics
   cho: Median, Range, Quartiles, Percentile(s).

*Lỗi hay gặp:* gõ 70 vào Percentile(s) mà quên **Add** → output không có P70;
để tick Display frequency tables → in 57 dòng mỗi tuổi một dòng; đọc nhầm
"Quartiles 25" là Q3 (25 = Q1, 50 = Median, 75 = Q3).

## BT2 — P1-Q04

| Thông số | Giá trị |
|---|---|
| Trị trung bình | 66,9 |
| Độ lệch chuẩn | 10,93 |
| Giá trị nhỏ nhất | 41 |
| Giá trị lớn nhất | 97 |
| Khoảng biến thiên | 56 |
| **Hệ số tập trung (CV)** | **10,93 / 66,9 × 100 ≈ 16,3%** |

3. CV ≈ 16,3%: tuổi dao động khoảng ~16% quanh trung bình — phân tán vừa phải
   (quy ước thực hành: CV < 10% ít biến động, 10–30% trung bình, > 30% lớn).

*Nhận xét:* Câu 4 giống hệt Câu 3 về thao tác — khác biệt duy nhất là **CV phải tự tính**.
Đây là mẫu câu hỏi "đọc output + biến đổi thêm" rất phổ biến trong phần còn lại của đề
(ví dụ KTC = mean ± 1,96×SE ở Câu 29).

## BT3 — `Cannang`

| Chỉ số | Cannang |
|---|---|
| Mean / Median | 52,36 / 51,0 |
| SD / Variance | 6,81 / 46,39 |
| Min / Max / Range | 35 / 74 / 39 |
| Q1 / P70 | 47 / 55,3 |
| **CV** | 6,81 / 52,36 × 100 ≈ **13,0%** |

So sánh: CV_Cannang (13,0%) < CV_Tuoi (16,3%) → **Tuổi phân tán tương đối nhiều hơn**
dù SD của Cannang nhỏ hơn nhiều — đây chính là giá trị của CV (chuẩn hóa theo mean).

## BT4 — Trả lời nhanh

1. `GTinh` và `HVan` không nên tính mean/median — chúng là biến **mã** (danh nghĩa /
   thứ bậc); "giới tính trung bình = 1,4" không mang nghĩa.
2. "Nghề nghiệp trung bình = 2,4" là vô nghĩa — mã nghề nghiệp không phải số lượng;
   đúng ra phải báo cáo tần số/% từng nghề (như Ngày 02).
3. Tứ vị thứ 1 (Q1) = bách phân vị **25**; trung vị = bách phân vị **50** (cũng là Q2).
