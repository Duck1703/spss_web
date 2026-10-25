# Ngày 07 — Soi & xử lý dữ liệu sai (Data cleaning)

> **Lộ trình:** Exercise-first 14 ngày · **Thời lượng:** ~100 phút · **Dataset:** `exercises/bai_1/p1_B01_HA (1).sav`
> **Trạng thái:** READY v3 (Task 15) — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`; số liệu kiểm chứng Python `NOT_RUN`.
> **Bài tập nguồn hôm nay:** **P1-Q14**, **P1-Q13** (bắt buộc) · **P1-Q07** (luyện thêm — Multiple Response).

---

## A. Bài tập gốc — file thật có lỗi nhập liệu

{{exercise:P1-Q14}}

{{exercise:P1-Q13}}

> **Đọc đề gốc:** `exercises/bai_1/Bai thuc hanh SDH P1.pdf` — Câu 14 và Câu 13 (tr.2).
> *Tóm tắt:* Câu 14 = phát hiện biến `NNghiep` (nghề nghiệp) bị nhập sai → liệt kê mã số
> phiếu sai → loại khỏi dữ liệu; Câu 13 = đếm người đái tháo đường tuổi 50–70 (và riêng
> nam) — cần Select Cases điều kiện kép.

## B. Mục tiêu

Đến giờ bạn tin rằng dữ liệu "sạch". File thật không vậy — `NNghiep` trong codebook
chỉ có 6 mã hợp lệ, nhưng người nhập liệu gõ thêm mã **0**, mã **8**, và để **trống**.
Hôm nay học quy trình kiểm tra dữ liệu: **phát hiện → liệt kê → quyết định xử lý →
lưu bản mới** — kỹ năng nền tảng trước mọi phân tích.

## C. Dữ liệu cần mở

| Bài | File | Biến | Ghi chú |
|---|---|---|---|
| Q14 | `p1_B01_HA (1).sav` | `NNghiep` (1–6 hợp lệ), `ID` (mã phiếu) | giá trị sai: 0, 8, trống |
| Q13 | cùng file | `Tieuduong`, `Tuoi`, `GTinh` | điều kiện lọc kép |
| Q07 (thêm) | cùng file | `Timmach…Gut` (nhị phân) + `Benh.MT_1`, `Benh.MT_2` (danh mục) | 2 cách lưu câu nhiều trả lời |

> ⚠️ **Nguyên tắc vàng:** kết quả lọc/loại dòng **Save As thành file mới**
> (`p1_B01_HA_work.sav` trong `SPSS_Practice/workspace/`) — tuyệt đối không ghi đè gốc.

## D. Kiến thức cần biết (vừa đủ)

- **Kiểm tra dữ liệu nhập:** bảng Frequencies của một biến mã phải chỉ chứa các mã có
  trong codebook. Mã lạ (`0`, `8`) hoặc ô trống (System-missing, hiện `.`) = lỗi.
- **Ba cách xử lý phiếu sai** (đề yêu cầu cách 3):
  1. Sửa tay nếu tra được phiếu gốc — tốt nhất nhưng cần giấy tờ;
  2. Đặt thành *missing* (Declare Missing Values) — giữ dòng nhưng loại khỏi phân tích;
  3. **Loại dòng** bằng Select Cases — đề Câu 14 yêu cầu "loại khỏi dữ liệu".
- **Select Cases để loại bỏ:** đảo điều kiện — giữ các dòng *hợp lệ*
  (`NNghiep >= 1 & NNghiep <= 6` và không missing). Dòng bị loại hiện gạch chéo;
  chọn "Delete unselected cases" trong Save As để tạo file sạch vĩnh viễn.
- **Missing:** trong điều kiện If, giá trị trống KHÔNG khớp `NNghiep=0` — phải dùng
  hàm `MISSING(NNghiep)` để bắt được. Đây là bẫy kinh điển: 2 phiếu trống sẽ "lọt"
  nếu bạn chỉ kiểm `NNghiep=0 | NNghiep=8`.
- **Multiple Response (Q07, thêm):** cùng một câu hỏi "bạn có những bệnh nào" được lưu
  2 cách — 5 cột 0/1 (`Timmach…Gut`) hoặc 2 cột mã (`Benh.MT_1`, `Benh.MT_2`).
  SPSS gom chúng thành "bộ đa trả lời" qua **Analyze → Multiple Response → Define
  Variable Sets** để đếm theo lượt chọn, không theo dòng.

## E. Thực hành có hướng dẫn

> ⚠️ `MAC_SPSS_VERIFICATION_PENDING`

### Bước 1 — Câu 14a: soi lỗi bằng Frequencies

- **Làm:** Analyze → Descriptive Statistics → **Frequencies…** → `NNghiep` → OK.
- **Bạn thấy:** mã hợp lệ 1–6 (132, 6, 323, 67, 67, 18 người) **cộng thêm**: `0` ×3,
  `8` ×2, và **Missing ×2** → 7 phiếu lỗi, tổng vẫn 620.
- **Kiểm chứng:** codebook biến `NNghiep` chỉ có 6 mã → mọi giá trị khác là sai.

{{guide:d07-freq-errors}}

### Bước 2 — Câu 14b: liệt kê mã phiếu sai

- **Làm:** Data → Select Cases… → If… → gõ
  `NNghiep = 0 | NNghiep = 8 | MISSING(NNghiep)` → Continue → OK.
  (`|` = "hoặc"; `MISSING()` bắt cả ô trống.)
- **Làm:** Data View chỉ hiện 7 dòng. Đọc cột `ID`: **5, 184, 243, 285, 305, 318, 375**.
- **Màn hình mong đợi:** 7 dòng còn hiện, 613 dòng bị gạch chéo.
- **Làm:** ghi 7 mã số vào bảng trả lời của đề.

{{guide:d07-select-bad}}

### Bước 3 — Câu 14c: loại phiếu sai, lưu file mới

- **Làm:** quay lại Select Cases → All cases → OK (trả 620).
- **Làm:** Select Cases → If… → gõ điều kiện **giữ lại**:
  `NNghiep >= 1 & NNghiep <= 6` → OK → 7 dòng lỗi bị gạch chéo.
- **Làm:** **File → Save As…** → `p1_B01_HA_work.sav` trong `workspace/` →
  *(trong hộp Save As có thể tick "Delete unselected cases"* — nếu tick, file mới chỉ còn 613 dòng*.)*
- **Kiểm chứng:** mở file work → Frequencies `NNghiep` chỉ còn mã 1–6, Total **613**.
- **Làm:** tắt filter (All cases) trên file work trước khi đi tiếp.

{{guide:d07-keep-clean}}

### Bước 4 — Câu 13: đếm trên mẫu con điều kiện kép

- **Làm:** (vẫn file `p1_B01_HA (1).sav` gốc, hoặc file work — đề không yêu cầu loại
  trước; kết quả giống nhau vì 7 phiếu sai không liên quan ĐTĐ.)
- **Làm:** Select Cases → If… → `Tieuduong = 1 & Tuoi >= 50 & Tuoi <= 70` → OK.
- **Đọc:** Data View còn **96** dòng → 96 người ĐTĐ tuổi 50–70.
- **Làm:** thêm `& GTinh = 2` vào điều kiện → còn **52** dòng → 52 nam ĐTĐ 50–70.
- **Làm:** trả All cases trước khi kết thúc.

### Bước 5 — (Luyện thêm) Câu 7: bảng bệnh mạn tính 2 cách lưu

- **Cách nhị phân:** Analyze → Multiple Response → **Define Variable Sets…** →
  đưa `Timmach, Tieuduong, Than, Gan, Gut` vào Set → chọn "Dichotomies, counted
  value = 1" → đặt tên `$benh` → Add → Close. Rồi Multiple Response → Frequencies
  → `$benh` → OK: Tim mạch **92**, ĐTĐ **196**, Thận **16**, Gan **11**, Gút **9**.
- **Cách danh mục:** Define Sets → `Benh.MT_1` + `Benh.MT_2` → "Categories, range
  1–5" → `$benhDM` → Frequencies → cùng 5 con số trên (kiểm chứng chéo khớp!).
- *Lưu ý:* tổng lượt chọn (324) > số người có bệnh vì một người có thể có 2 bệnh —
  bảng in cả "% of responses" lẫn "% of cases".

## F. Mô phỏng SPSS

Ba mô phỏng: (1) bảng Frequencies `NNghiep` lộ mã 0/8/missing; (2) hộp Select Cases
If với điều kiện liệt kê + Data View 7 dòng; (3) hộp If đảo chiều để giữ phiếu hợp lệ
+ lưu file work. Mở lại từng bước trong mục E.

## G. Bài tập tự làm

Mở [workbook](/d07/bai-tap/): làm lại **P1-Q14** (liệt kê đủ 7 ID + file đã loại) và
**P1-Q13** (hai con số), thêm **P1-Q07** luyện thêm với Multiple Response Sets.

## H. Kiểm tra kết quả

- [ ] Liệt kê đủ **7 ID** sai (5, 184, 243, 285, 305, 318, 375) — nếu chỉ 5 ID, bạn
  quên `MISSING()` và bỏ sót 2 phiếu trống.
- [ ] File `*_work.sav` Frequencies `NNghiep`: Total = **613**, không còn mã 0/8/missing.
- [ ] Câu 13: 96 (mọi ĐTĐ 50–70) và 52 (nam).
- [ ] File **gốc** không đổi (620 dòng) — kiểm tra bằng cách mở lại file gốc.

## I. Giải thích đáp án

[đáp án](/d07/dap-an/) — danh sách ID chi tiết từng loại lỗi (0 / 8 / trống), kết quả
Câu 13 kèm cách viết điều kiện đúng, và bẫy `MISSING()` kinh điển.

## J. Chuyển bài

Dữ liệu giờ đã sạch. Ngày 08 quay lại câu hỏi tỷ lệ — nhưng nâng cấp: thay vì so hai
nhóm qua bảng chéo, bạn kiểm định **một tỷ lệ có khớp giá trị kỳ vọng không**
(chi-square phù hợp P1-Q22, P2-Q02; binomial P2-Q03), cộng hai bài luyện thêm:
**P1-Q21** (Weight Cases + Risk trên file tổng hợp) và **P2-Q01** (bảng chéo file
gói 2 — lần đầu chạm `File1.sav`).

## K. Đọc thêm (không bắt buộc)

- P1-Q39 (GOF đồng đều cho TSu.HA, HA.GDinh) dạy ở phần luyện thêm Ngày 08.
- Vì sao không sửa tay luôn giá trị sai? Vì không có phiếu gốc — quy tắc nghiệp vụ:
  chỉ sửa khi có bằng chứng; nếu không thì missing/loại và **ghi chép** quyết định.
- "Delete unselected cases" chỉ ảnh hưởng file ĐANG LƯU — file gốc mở sẵn vẫn 620.
