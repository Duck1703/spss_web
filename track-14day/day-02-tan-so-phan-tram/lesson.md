# Ngày 02 — Tần số và phần trăm

> **Lộ trình:** Exercise-first 14 ngày · **Thời lượng:** ~90 phút · **Dataset:** `exercises/bai_1/p1_B01_HA (1).sav`
> **Trạng thái:** READY v1 (Task 13) — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`; số liệu kiểm chứng Python `NOT_RUN`.
> **Bài tập nguồn hôm nay:** **P1-Q02** (trang 1) và **P1-Q38** (trang 4) — "Bài thực hành SDH P1".

---

## A. Bài tập gốc — hai câu cùng một kỹ năng

{{exercise:P1-Q02}}

{{exercise:P1-Q38}}

> **Đọc đề gốc:** `exercises/bai_1/Bai thuc hanh SDH P1.pdf` — Câu 2 (trang 1),
> Câu 38 (trang 4).

## B. Mục tiêu

Câu 2 hỏi "bao nhiêu người không biết chữ — số lượng và %". Câu 38 hỏi "tỷ lệ chẩn đoán
cao huyết áp (bình thường vs cao HA)". Cả hai đều chỉ cần **một lệnh SPSS**: Frequencies.
Hôm nay bạn học: chạy Frequencies, đọc đúng 3 cột %, và biến bảng output thành câu trả lời
có mẫu số.

## C. Dữ liệu cần mở

| Mục | Chi tiết |
|---|---|
| File | `p1_B01_HA (1).sav` (giống Ngày 01 — mở lại trong SPSS) |
| Biến cho Câu 2 | `HVan` — "Trình độ học vấn": 6 mã, mã **1 = "Không biết chữ"** |
| Biến cho Câu 38 | `CD.HA` — "Chẩn đoán bệnh HA": 5 mã (1–2 = không tăng HA; **3,4,5 = THA độ 1/2/3**) |
| Mẫu | Toàn bộ 620 người — **không** bật filter nào (kiểm Select Cases → All cases) |

> ⚠️ Nếu hôm qua bạn để filter `GTinh = 2` — mở Data → Select Cases → **All cases** trước,
> nếu không mọi con số hôm nay sẽ chỉ tính trên 244 nam.

## D. Kiến thức cần biết (vừa đủ)

- **Bảng tần số** liệt kê từng giá trị của biến mã và đếm số người ở mỗi giá trị. Chỉ hợp với
  biến **mã/nhóm** — đưa biến số (Tuoi) vào sẽ in bảng hàng trăm dòng vô nghĩa.
- **Ba cột % khác nhau** — đọc sai cột là lỗi phổ biến nhất:
  - `Frequency` = **số lượng** (đề hỏi "số lượng" → cột này);
  - `Percent` = % trên **tổng 620 kể cả missing**;
  - `Valid Percent` = % chỉ trên **dòng có dữ liệu**. File này `HVan`, `CD.HA` không missing
    nên hai cột giống nhau — nhưng hãy tập thói quen dùng **Valid Percent** khi báo cáo.
  - `Cumulative Percent` = % lũy theo thứ tự mã — chỉ có nghĩa với biến *thứ bậc*.
- **"Tỷ lệ" luôn đi kèm mẫu số:** "16,3%" chưa đủ — phải đọc "101/620 = 16,3%".

## E. Thực hành có hướng dẫn

> ⚠️ `MAC_SPSS_VERIFICATION_PENDING`

### Bước 1 — Kiểm nhãn giá trị trước khi phân tích

- **Làm:** Variable View → dòng `HVan` → cột **Values** → `…`.
- **Bạn thấy:** `1 = Không biết chữ`, `2 = Tiểu học`, `3 = THCS`, `4 = THPT`,
  `5 = Trung cấp, cao đẳng`, `6 = Đại học, Sau đại học`. → Đáp án Câu 2 nằm ở **mã 1**.
- **Làm tương tự** với `CD.HA`: `1 = HA bình thường`, `2 = HA bình thường Cao (Tiền tăng HA)`,
  `3 = THA độ 1`, `4 = THA Độ 2`, `5 = HA Độ 3`.

### Bước 2 — Chạy Frequencies cho HVan

- **Làm:** **Analyze → Descriptive Statistics → Frequencies…** → đưa `HVan` sang ô
  **Variable(s)** → giữ tick *Display frequency tables* → **OK**.
- **Màn hình mong đợi:** cửa sổ mới **Output Viewer** hiện ra với 2 bảng:
  *Statistics* (tóm tắt) và bảng tần số của `HVan`.

{{guide:d02-frequencies}}

### Bước 3 — Đọc bảng thành câu trả lời Câu 2

- Trong bảng `HVan`, tìm dòng **"Không biết chữ"**:
  - `Frequency` = **101** → số lượng.
  - `Valid Percent` = **16,3** → tỷ lệ %.
- **Trả lời bằng câu đầy đủ:** "Trong 620 đối tượng, có **101 người (16,3%)** không biết chữ."
- **Tự kiểm:** 101/620 × 100 ≈ 16,3 ✓.

### Bước 4 — Chạy lại cho CD.HA (Câu 38)

- **Làm:** lặp Bước 2, thay `HVan` bằng `CD.HA`.
- **Bạn thấy:** 5 dòng mã. "Cao huyết áp" của đề = mã **3 + 4 + 5** cộng lại:
  `250 + 79 + 6 = 335 người` → `335/620 = 54,0%`; còn lại 285 người (46,0%) là bình thường
  (mã 1+2).
- *(Nâng cao — chưa bắt buộc:* muốn một dòng duy nhất "Cao HA" trong output thì phải Recode
  `CD.HA` thành 2 nhóm — kỹ năng Ngày 06. Hôm nay cộng tay là đủ.)

{{guide:d02-cdha-freq}}

## F. Mô phỏng SPSS

Hai mô phỏng nằm trong Bước 2 và Bước 4 — hình đầu tiên dạy toàn bộ đường menu,
hình thứ hai chỉ nhắc lại phần đọc output.

## G. Bài tập tự làm — quay lại bài tập gốc

Mở [workbook](/d02/bai-tap/): điền kết quả **P1-Q02** và **P1-Q38** vào khung trả lời
của đề, kèm hai câu luyện tần số cùng file (`GTinh`, `TTrang.KTe`) và một câu suy luận
về Cumulative Percent.

## H. Kiểm tra kết quả

- [ ] Dòng "Không biết chữ": Frequency **101**, Valid Percent **16,3** — bạn ghi cả mẫu số /620.
- [ ] Tổng THA độ 1+2+3 = **335 người (54,0%)**; bình thường **285 (46,0%)** — cộng đủ 620.
- [ ] Output Viewer xuất hiện và bạn biết đó là cửa sổ **khác** với Data Editor.
- [ ] Filter ngày 01 đã tắt (Total trong mọi bảng = 620, không phải 244 hay 376).

## I. Giải thích đáp án

[đáp án](/d02/dap-an/) — gồm bảng tần số đầy đủ của `HVan` và `CD.HA` để đối chiếu,
kèm lỗi đọc % hay gặp.

## J. Chuyển bài

Frequencies vừa cho bạn *số lượng* — nhưng Câu 3–4 của đề hỏi **trung bình, trung vị,
độ lệch chuẩn, bách phân vị** của Tuổi. Ngày 03 bạn học hai chỗ lấy các chỉ số đó:
Descriptives và chính hộp Frequencies → **Statistics…**.

## K. Đọc thêm (không bắt buộc)

- Chênh lệch `Percent` vs `Valid Percent` chỉ hiện khi biến có missing — thử Frequencies
  trên `NNghiep`: sẽ thấy 2 dòng Missing (Percent ≠ Valid Percent) — đó chính là dấu hiệu
  dữ liệu có vấn đề mà Câu 14 (Ngày 07) yêu cầu điều tra.
- Muốn sắp xếp bảng tần số theo số lượng thay vì mã: Frequencies → **Format…** →
  *Descending counts*. Hữu ích khi biến có nhiều mức.
