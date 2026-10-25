# Ngày 03 — Thống kê mô tả biến số

> **Lộ trình:** Exercise-first 14 ngày · **Thời lượng:** ~90 phút · **Dataset:** `exercises/bai_1/p1_B01_HA (1).sav`
> **Trạng thái:** READY v1 (Task 13) — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`; số liệu kiểm chứng Python `NOT_RUN`.
> **Bài tập nguồn hôm nay:** **P1-Q03** và **P1-Q04** (trang 1) — "Bài thực hành SDH P1".

---

## A. Bài tập gốc — một biến, hai bảng chỉ số

{{exercise:P1-Q03}}

{{exercise:P1-Q04}}

> **Đọc đề gốc:** `exercises/bai_1/Bai thuc hanh SDH P1.pdf` — trang 1.
> *Tóm tắt:* Câu 3 yêu cầu trung bình, trung vị, độ lệch chuẩn, phương sai, khoảng biến
> thiên, tứ vị 1 và bách phân vị 70 của Tuổi. Câu 4 yêu cầu trung bình, độ lệch chuẩn,
> min, max, khoảng biến thiên và **hệ số tập trung** của Tuổi.

## B. Mục tiêu

Hai câu hỏi cùng mô tả `Tuoi` nhưng đòi hai bộ chỉ số khác nhau — và Câu 4 có một chỉ số
SPSS **không in sẵn**: hệ số tập trung (CV). Hôm nay bạn học:
- hai cửa lấy thống kê mô tả: **Descriptives** (nhanh) và **Frequencies → Statistics…**
  (đầy đủ percentiles);
- tính **CV = SD / Mean × 100%** từ output;
- đọc đề để chọn đúng chỉ số — đây là kỹ năng cốt lõi của toàn bộ phần mô tả.

## C. Dữ liệu cần mở

| Mục | Chi tiết |
|---|---|
| File | `p1_B01_HA (1).sav` (vẫn file Phần 1 chính) |
| Biến chính | `Tuoi` — "Tuổi" — biến **số** (Scale) |
| Biến luyện thêm | `Cannang`, `Chieucao` — cùng kiểu biến số |
| Mẫu | 620 người — vẫn giữ Select Cases → All cases |

> Kinh nghiệm đọc đề: hỏi *mean/median/SD/min-max/percentiles* → biến **số**
> (Tuoi, Cannang, Chieucao, HA.TD…); hỏi *số lượng/tỷ lệ* → biến **mã** (HVan, GTinh…).

## D. Kiến thức cần biết (vừa đủ)

- **Mean (trung bình)** = tổng/n — nhạy với giá trị cực đoan.
- **Median (trung vị)** = giá trị giữa — bền vững với đuôi dữ liệu.
- **Std. Deviation (SD)** = độ phân tán quanh mean; **Variance (phương sai)** = SD².
- **Range (khoảng biến thiên)** = Max − Min.
- **Percentiles**: Q1 = bách phân vị 25. Muốn P70 phải vào Statistics… → tick
  **Percentile(s)** → gõ `70` → **Add** — quên bấm Add là lỗi hay gặp nhất.
- **Hệ số tập trung (CV, hệ số biến thiên)** = `SD / Mean × 100%` — đo độ phân tán
  *tương đối* so với trung bình, dùng để so sánh độ biến động giữa các biến khác đơn vị.
  **SPSS không in sẵn** — bạn lấy Mean và SD rồi tự chia (hoặc Compute — Ngày 06).
- **Hai cửa lấy thống kê:**
  - **Descriptives**: nhanh — Mean, SD, Min, Max (+ Variance nếu tick Options).
  - **Frequencies → Statistics…**: đầy đủ — Median, Quartiles, Percentile(s) tùy ý.
    Với biến số nhớ **bỏ tick Display frequency tables** để khỏi in bảng hàng chục dòng.

## E. Thực hành có hướng dẫn

> ⚠️ `MAC_SPSS_VERIFICATION_PENDING`

### Bước 1 — Descriptives nhanh cho Tuoi (đủ cho phần lớn Câu 4)

- **Làm:** **Analyze → Descriptive Statistics → Descriptives…** → `Tuoi` → **Variable(s)** →
  **Options…** → tick thêm **Variance** (giữ Mean, Std. deviation, Minimum, Maximum) →
  Continue → **OK**.
- **Bạn thấy:** bảng *Descriptive Statistics* một dòng cho Tuoi: N, Min, Max, Mean, SD,
  Variance. — Nhanh, nhưng thiếu Median/percentiles.

{{guide:d03-descriptives}}

### Bước 2 — Lấy đủ chỉ số Câu 3 qua Frequencies → Statistics…

- **Làm:** **Analyze → Descriptive Statistics → Frequencies…** → `Tuoi` → Variable(s) →
  **bỏ tick Display frequency tables** → **Statistics…** → tick:
  - Central Tendency: **Mean, Median**;
  - Dispersion: **Std. deviation, Variance, Range, Minimum, Maximum**;
  - **Quartiles**; **Percentile(s)** → gõ `70` → **Add** → Continue → OK.
- **Bạn thấy:** bảng Statistics một cột dọc — đủ 7 chỉ số của Câu 3.

{{guide:d03-freq-stats}}

### Bước 3 — Tính hệ số tập trung cho Câu 4

- Từ output: `CV = SD / Mean × 100 = 10,93 / 66,9 × 100 ≈ 16,3%`.
- Điền bảng Câu 4: Mean, SD, Min, Max, Range (đã có) + CV vừa tính.
- *Nếu muốn SPSS tự tính:* Transform → Compute Variable → đặt biến `CV_Tuoi = 10.93/66.9*100`
  — nhưng với một số duy nhất thì chia tay nhanh hơn (Compute sẽ học kỹ ở Ngày 06).

## F. Mô phỏng SPSS

Hai mô phỏng nằm trong Bước 1–2: hộp Descriptives + Options, và hộp Frequencies →
Statistics với ô Percentile(s) 70.

## G. Bài tập tự làm — quay lại bài tập gốc

Mở [workbook](/d03/bai-tap/): điền đủ **7 ô Câu 3** và **5 ô Câu 4** của đề (kèm phép
tính CV), luyện lại toàn bộ quy trình trên `Cannang`.

## H. Kiểm tra kết quả

- [ ] Câu 3 đủ 7 ô: Mean ≈ **66,9** · Median **66** · SD ≈ **10,9** · Variance ≈ **119,4** ·
      Range **56** · Q1 ≈ **62** · P70 ≈ **71**.
- [ ] Câu 4 đủ 5 ô + CV ≈ **16,3%** — có ghi phép tính `10,93/66,9×100`.
- [ ] Kiểm chứng: Variance ≈ SD² (10,93² ≈ 119,4 ✓); Range = Max − Min (97−41=56 ✓).
- [ ] Output bảng Statistics không bị "nhấn chìm" bởi bảng tần số 60 dòng (đã bỏ tick
      Display frequency tables).

## I. Giải thích đáp án

[đáp án](/d03/dap-an/) — bảng chỉ số đầy đủ, CV của Tuoi và Cannang, lỗi hay gặp.

## J. Chuyển bài

Bạn mô tả xong một biến số cho cả mẫu. Câu 5–6 của đề đi xa hơn một bước: **so sánh giữa
các nhóm** — nghèo/cận nghèo theo giới (Q5: Crosstabs) và Tuổi theo giới tính (Q6:
thống kê theo nhóm). Ngày 04 bạn học Split File + Descriptives theo nhóm cho Câu 6;
Ngày 05 Crosstabs cho Câu 5.

## K. Đọc thêm (không bắt buộc)

- `Analyze → Descriptive Statistics → Explore…` cho thêm khoảng tin cậy 95% của mean và
  trimmed mean — sẽ cần cho câu "KTC cho trị trung bình" (P1-Q29, Ngày 10).
- CV chỉ có nghĩa cho biến tỉ lệ (ratio) có mean khác 0 và cùng dấu — đừng tính CV cho
  biến mã hay biến có giá trị âm.
