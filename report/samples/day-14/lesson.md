# Ngày 14 — Đánh giá cuối khóa

> **Lộ trình:** Exercise-first 14 ngày · **Thời lượng:** ~110 phút · **Datasets:** `exercises/bai_1/p1_B01_HA (1).sav` · `exercises/bai_2/File1.sav`
> **Trạng thái:** READY v1 (Task 16) — đánh giá tự thực hiện, tự chấm; `SPSS_NOT_RUN`.
> **Bài tập nguồn hôm nay:** **P1-Q24**, **P1-Q26**, **P1-Q31**, **P1-Q33**, **P1-Q43**, **P2-Q08** — đều đã được kiểm chứng phù hợp kỹ năng Ngày 01–13.

---

## A. Đây là bài kiểm tra thực hành — không phải bài học

Không còn hướng dẫn từng click. Bạn tự: mở đúng file → chọn đúng phép → đọc đúng
output → viết kết quả → lưu bằng chứng. Được phép mở lại các ngày cũ, từ điển
biến (`curriculum/EXERCISE-SOURCE-MAP.md`) và bảng chọn phép — như thực hành
thật — nhưng **tự làm**, không copy đáp án.

## B. Luật chơi

- **Thời gian:** 90–110 phút thực hành + 10 phút tự chấm.
- **Bản work:** copy mỗi `.sav` ra `workspace/` trước khi sửa biến (nguyên tắc
  Ngày 06/12). File gốc tuyệt đối không ghi đè.
- **Bằng chứng:** với mỗi câu, lưu output `.spv` hoặc chụp/chép bảng output vào
  một file `KetQua_D14.docx`; ghi rõ câu nào.
- **Chấm:** xong hết mới mở [đáp án](/d14/dap-an/) + rubric trong workbook.

## C. Bảng chọn phép (được dùng trong lúc làm)

| Câu hỏi dạng | Phép | Ôn ở |
|---|---|---|
| Tần số, % | Frequencies | Ngày 02 |
| Mean/SD/median/percentile | Descriptives · Frequencies→Statistics | Ngày 03 |
| Đại lượng theo nhóm | Means / Split File / Crosstabs | Ngày 04 |
| Tỷ lệ giữa 2 biến định tính | Crosstabs + χ² (kiểm expected) | Ngày 05 |
| Tạo biến / gộp nhóm / trung bình 2 lần đo | Compute · Recode | Ngày 06 |
| Lọc mẫu con | Select Cases If | Ngày 04/07 |
| 1 trung bình vs chuẩn | One-Sample T | Ngày 09 |
| 2 nhóm độc lập | Independent T (đọc Levene) | Ngày 09 |
| Trước–sau cùng người | Paired T | Ngày 10 |
| ≥3 nhóm | One-Way ANOVA | Ngày 10 |
| Liên hệ 2 biến liên tục | Correlate · Regression đơn | Ngày 11 |

## D. Sáu nhiệm vụ (chi tiết trong workbook)

1. **P1-Q24** — đại lượng cho HA tối đa/tối thiểu **trung bình 2 lần đo**
   (mean, SEM, mode, P30, median).
2. **P1-Q26** — đại lượng HA tối đa trung bình theo **3 nhóm học vấn**
   (cần gộp 6 mã → 3 nhóm).
3. **P1-Q31** — bảng CĐ bệnh HA × học vấn ở nhóm **"mới phát hiện"** + đánh giá
   độ tin cậy của p.
4. **P1-Q33** — phân bố mức độ cao HA theo từng bệnh mạn tính.
5. **P1-Q43** — bảng đại lượng Tuổi theo giới tính (n, min, max, mean, SD).
6. **P2-Q08** — so sánh tuổi trung bình ở 3 tỉnh (File1).

## E. Tiêu chí đạt

Điểm rubric 100 (chi tiết workbook). **Đạt ≥ 70** và không vi phạm hai "lỗi loại":
(1) phân tích sai file/biến; (2) đọc p mà bỏ qua kiểm tra giả định khi đề yêu cầu.

## F. Mô phỏng hỗ trợ

Một mô phỏng duy nhất: thao tác Compute tạo biến "trung bình 2 lần đo" — kỹ năng
duy nhất trong đề chưa xuất hiện nguyên mẫu ở ngày nào (Dạy ở Ngày 06 nhưng với
phép tính khác).

{{guide:d14-compute}}

## G. Nộp bài

- `KetQua_D14.docx` (hoặc .spv gộp) trong `outputs/` — mỗi câu một bảng + câu trả
  lời ngắn.
- File `*_work.sav` đã tạo (để kiểm tra biến tính thêm nếu cần).
- Phiếu tự chấm rubric + số điểm tự cho.

## H. Kiểm tra kết quả

Chỉ mở [đáp án](/d14/dap-an/) **sau khi nộp**. Tự chấm theo rubric; ghi lại câu
sai và ngày cần ôn lại.

## I. Chuyển bài — kết thúc 14 ngày

Đây là ngày cuối lộ trình exercise-first. Nếu đạt ≥70: bạn đã đi từ "mở file .sav
đầu tiên" đến "phân tích độc lập một nghiên cứu thật". Các bài nâng cao đã hoãn
(ROC P1-Q15/16, logistic P2-Q14/15, đa biến P2-Q12) là lộ trình mở rộng tiếp theo.

## K. Đọc thêm

- Ôn lại `curriculum/spss-practice-setup.md` nếu đổi máy.
- Dataset phụ `So_Lieu_NC.sav` vẫn mở cho luyện tập tự do sau khóa.
