# Ngày 02 — Đáp án & giải thích

> Đọc **sau khi** đã làm xong `workbook.md`. Số liệu tái tính trực tiếp từ
> `p1_B01_HA (1).sav` bằng Python (cross-check, nhãn `NOT_RUN`).

---

## BT1 — P1-Q02

Bảng tần số `HVan` (n = 620, không missing):

| Trình độ học vấn | Frequency | Percent | Valid Percent |
|---|---|---|---|
| 1 · Không biết chữ | **101** | 16,3 | **16,3** |
| 2 · Tiểu học | 129 | 20,8 | 20,8 |
| 3 · THCS | 141 | 22,7 | 22,7 |
| 4 · THPT | 181 | 29,2 | 29,2 |
| 5 · Trung cấp, cao đẳng | 42 | 6,8 | 6,8 |
| 6 · Đại học, Sau đại học | 26 | 4,2 | 4,2 |
| **Total** | **620** | 100,0 | 100,0 |

1. **101 người** không biết chữ.
2. Cột **Valid Percent** = 16,3%. (Ở đây Percent = Valid Percent vì không missing;
   thói quen đúng là báo cáo theo Valid Percent.)
3. *"Trong 620 đối tượng khảo sát, có 101 người (16,3%) không biết chữ."*

*Lỗi hay gặp:* đọc nhầm dòng "Total" (620 — đó là mẫu số, không phải đáp án);
đọc Cumulative Percent (16,3 ở dòng 1 trùng hợp, nhưng là khái niệm khác);
quên mẫu số khi viết câu trả lời.

## BT2 — P1-Q38

Bảng `CD.HA` (n = 620):

| Chẩn đoán | Frequency | Valid Percent |
|---|---|---|
| 1 · HA bình thường | 226 | 36,5 |
| 2 · HA bình thường cao (tiền tăng HA) | 59 | 9,5 |
| 3 · THA độ 1 | 250 | 40,3 |
| 4 · THA độ 2 | 79 | 12,7 |
| 5 · HA độ 3 | 6 | 1,0 |

1. Năm dòng như trên.
2. "Cao huyết áp" = mã 3+4+5: **250 + 79 + 6 = 335 người → 335/620 = 54,0%**.
   Bình thường (mã 1+2): 226 + 59 = **285 người → 46,0%**.
3. Ví dụ: *"Hơn một nửa đối tượng (54,0%, 335/620) được chẩn đoán tăng huyết áp các độ."*

*Nhận xét:* đề chỉ cho 2 ô trả lời nhưng output cho 5 dòng — kỹ năng là **gộp nhóm**
trước khi cộng; bạn sẽ làm gộp bằng Recode ở Ngày 06 thay vì cộng tay.

## BT3 — GTinh & TTrang.KTe

1. `GTinh`: Nữ (mã 1) = **376 (60,6%)**, Nam (mã 2) = **244 (39,4%)** — đúng các con số
   filter Ngày 01.
2. `TTrang.KTe`: Hộ nghèo/cận nghèo = **229 (36,9%)**; không thuộc = 391 (63,1%).
3. Cumulative Percent tại mã 4 (THPT) = 16,3+20,8+22,7+29,2 = **89,0%** — nghĩa là
   89% đối tượng có học vấn **từ THPT trở xuống** (có nghĩa vì mã là thứ bậc).
   Với `GTinh` thì vô nghĩa — "lũy kế nữ rồi đến nam" không diễn giải được
   (biến danh nghĩa, không thứ bậc).

## BT4 — NNghiep có vấn đề

1. Ngoài mã hợp lệ 1–6, bảng còn có: **giá trị 0** (3 dòng), **giá trị 8** (2 dòng),
   và **2 dòng Missing** — tổng 7 phiếu bất thường (codebook chỉ định mã 1–6).
2. Có khác nhau: 2 dòng missing làm `Percent` (trên 620) < `Valid Percent` (trên 618).
   Đây là lý do báo cáo % nên đọc Valid Percent.
3. Để nguyên — **Câu 14 (Ngày 07)** sẽ yêu cầu liệt kê mã số các phiếu sai này và loại bỏ.
