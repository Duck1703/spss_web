# Ngày 01 — Lần đầu mở SPSS

> **Lộ trình:** Practice-first 14 ngày · **Thời lượng:** ~90 phút · **Dataset:** `clinic_bp_v1_clean.csv` (GIẢ LẬP)
> **Trạng thái:** DRAFT v2 (rebuild Task 11) — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`; chưa có ảnh chụp thật (xem mục E).

---

## A. Điểm xuất phát — bạn cần có sẵn gì

Trước khi đọc tiếp, kiểm tra đủ 3 thứ:

- [ ] **SPSS đã cài trên Mac** của bạn (biểu tượng "IBM SPSS Statistics" trong Applications).
  Chưa cài → hỏi người phụ trách; bài này không hướng dẫn cài đặt.
- [ ] **Thư mục khóa học** `~/Documents/spss-learning/` đã tạo (xem hướng dẫn `START-HERE-MAC.md`
  / trang *Chuẩn bị SPSS trên MacBook*).
- [ ] **File `clinic_bp_v1_clean.csv`** đã tải và để trong thư mục đó — tải ở trang
  [Dữ liệu](/du-lieu/) hoặc link ngay trong bài web. **Chú ý chữ `_clean`**
  — file `_raw` dành cho Ngày 03, mở nhầm sẽ thấy dữ liệu "bẩn".

> ⏱️ Mục tiêu hôm nay: trong **15–30 phút đầu** bạn đã thấy dữ liệu thật nằm trong SPSS.

## B. Tình huống y khoa

Bác sĩ Lan phụ trách phòng khám quận. Phòng khám vừa theo dõi xong **160 bệnh nhân
tăng huyết áp** trong 3 tháng và gửi bạn một file `clinic_bp_v1_clean.csv`.

Trước khi phân tích bất cứ điều gì, việc đầu tiên của người làm thống kê là:
**mở được file, nhìn được dữ liệu, biết mình đang nhìn cái gì, và lưu lại đúng định dạng.**
Đó là toàn bộ bài hôm nay.

## C. Chỉ cần biết điều này trước

- **Dataset (bộ dữ liệu)** = một bảng. Trong dữ liệu y khoa, thường **mỗi dòng = một bệnh nhân /
  một lần đo** (gọi là *đơn vị quan sát*); **mỗi cột = một biến** (một đặc điểm được đo).
- **CSV** (comma-separated values): file văn bản thuần, các ô cách nhau bởi dấu `,`.
  Là định dạng "trung lập" để trao đổi — Excel, SPSS đều đọc được, nhưng **không lưu được
  định nghĩa biến** (nhãn, mã) — ngày mai sẽ thấy vì sao điều đó quan trọng.
- **`.sav`** = định dạng riêng của SPSS: lưu cả dữ liệu *và* định nghĩa biến.
  **Quy tắc làm việc của toàn khóa:** import CSV → lưu ngay một bản `.sav` → từ nay làm trên `.sav`.
  File CSV gốc không bao giờ bị sửa.

## D. Làm theo từng bước

> ⚠️ **`MAC_SPSS_VERIFICATION_PENDING`** — các bước viết theo tài liệu SPSS 32 cho Mac,
> chưa kiểm chứng trên máy thật. Mỗi bước có mục **"Nếu sai"** — đừng bỏ qua nó.
> 📸 Ký hiệu `[SHOT-x]` = ảnh cần chụp khi chạy pilot thật (danh sách ở mục E); hiện bài
> mô tả màn hình bằng chữ, **không** dùng ảnh giả.

### Bước 1 — Mở SPSS

- **Bạn đang ở:** màn hình Mac.
- **Làm:** Finder → **Applications → IBM SPSS Statistics**.
- **Màn hình mong đợi:** một cửa sổ bảng trống giống Excel hiện ra — đó là **Data Editor**,
  cửa sổ bạn sẽ làm việc suốt khóa. (Nếu có hộp thoại chào mừng "What's New" → bấm ✕ đóng.)
- **Kiểm chứng:** nhìn **góc dưới-trái** cửa sổ — có 2 tab nhỏ: `Data View` và `Variable View`.
  `[SHOT-1]`
- **Nếu sai:** không thấy 2 tab → bạn có thể đang mở **Output Viewer** (cửa sổ kết quả) hoặc
  **Syntax Editor** — chúng là cửa sổ khác. Mở lại SPSS hoặc vào menu **File → New → Data**.
  Không tìm thấy SPSS trong Applications → mở **Spotlight** (⌘Space) gõ `SPSS` → Enter.

{{guide:d01-open}}

### Bước 2 — Nhận diện Data View và Variable View

- **Làm:** bấm tab **Variable View** → nhìn → bấm lại **Data View**.
- **Bạn thấy gì:**
  - `Data View`: lưới ô giống Excel — nơi **số liệu** nằm. Đang trống.
  - `Variable View`: mỗi *dòng* là định nghĩa của **một biến** (tên, kiểu, nhãn…). Cũng trống
    vì chưa có dữ liệu.
- **Ghi nhớ một câu:** *Data View = nhìn số liệu; Variable View = nhìn định nghĩa biến.*
  Ngày 02 sẽ sống trong Variable View.

{{guide:d01-two-views}}

### Bước 3 — Mở wizard import CSV

- **Làm:** menu **File → Import Data → CSV Data…**
- **Màn hình mong đợi:** hộp chọn file hiện ra.
- **Nếu không có mục "Import Data":** dùng **File → Open → Data…**, ở hộp thoại đổi
  "Files of type" thành `CSV (*.csv)`.
- **Làm tiếp:** điều hướng tới `~/Documents/spss-learning/`, chọn `clinic_bp_v1_clean.csv`
  → **Open**.
- **Màn hình mong đợi:** một **wizard** (hộp thoại nhiều bước) hiện ra, hỏi cách đọc file.
  `[SHOT-2]`

{{guide:d01-import}}

### Bước 4 — Trả lời wizard import (3 câu quan trọng)

Wizard hỏi nhiều câu — **chỉ 3 câu cần chỉnh**, còn lại để mặc định:

| Câu hỏi của wizard | Chọn | Vì sao |
|---|---|---|
| *"Read variable names from first row of file?"* | **Yes** | Dòng đầu file chứa tên biến (`patient_id, age_years…`), không phải dữ liệu. |
| *"What delimiters appear between variables?"* | **Comma** | File CSV phân cột bằng dấu `,`. |
| *"The decimal symbol is"* | **Period (.)** | File ghi `25.9` bằng dấu chấm, không phải `25,9`. |

- **Làm:** chọn như bảng trên → bấm **Next** qua các màn hình còn lại → **Finish** / **Done**.
- **Màn hình mong đợi:** Data View đầy số liệu; hàng tiêu đề cột là tên biến thật
  (`patient_id, age_years, sex_code…`). `[SHOT-3]`

**Kiểm chứng ngay — đủ cả 3 mới qua:**

- [ ] **160 dòng** dữ liệu — cuộn hết xuống cuối bảng, nhìn **số dòng ở cột xám bên trái**:
  dòng cuối là 160, với `patient_id = P160`.
- [ ] **12 cột**, tên đúng như codebook.
- [ ] Vài ô ở cột `sbp_followup` hiển thị **`.`** (dấu chấm) — đó là missing, không phải lỗi.

- **Nếu sai:**
  - Thấy **161 dòng** hoặc `sex_code` có giá trị `9` / chữ `F` → bạn đã import nhầm
    `clinic_bp_v1_raw.csv` (bản có lỗi gài cho Ngày 03). Đóng không lưu → làm lại Bước 3–4
    với file `_clean`.
  - Cột đầu tên `V1, V2…` và dòng 1 là `patient_id, age_years…` → bạn chọn "No" ở câu
    "variable names from first row". Import lại với **Yes**.
  - Số `25,9` bị tách thành 2 cột → bạn chọn decimal = Comma thay vì Period. Import lại.

{{guide:d01-wizard}}

### Bước 5 — Đọc bảng như người làm thống kê

Nhìn 5 dòng đầu, trả lời miệng (hoặc ghi vào sổ):

- **Một dòng là ai?** → một *bệnh nhân* (`patient_id`: P001, P002…).
- **Một cột là gì?** → một *biến* — đặc điểm đo được của mỗi bệnh nhân.
- Đọc một ô: `sbp_baseline` của P001 = **139** → *"bệnh nhân P001 có huyết áp tâm thu
  139 mmHg lúc nhập chương trình."*
- Ô trống `.` ở `sbp_followup` → bệnh nhân đó không có đo tái khám (thiếu thật — hiểu kỹ ở Ngày 03).

{{guide:d01-verify}}

### Bước 6 — Lưu thành `.sav` và mở lại

- **Làm:** **File → Save As…** → vào thư mục khóa học → đặt tên **`clinic_bp.sav`**,
  "Save as type" = `SPSS Statistics (*.sav)` → **Save**.
- **Làm:** thoát hẳn SPSS (⌘Q) → mở lại → **File → Open → Data…** → chọn `clinic_bp.sav`.
- **Màn hình mong đợi:** dữ liệu hiện lại đầy đủ — 160 dòng × 12 cột. `[SHOT-4]`
- **Nếu sai:** file mở ra trống → có thể lưu nhầm chỗ khác; tìm `clinic_bp.sav` trong
  thư mục khóa học bằng Finder trước rồi mở lại từ đó.

{{guide:d01-save}}

## E. Minh họa & danh sách ảnh cần chụp

Bài này **chưa có ảnh chụp SPSS thật** — mô tả màn hình bằng chữ và sơ đồ để bạn tự đối chiếu.
Khi owner chạy pilot trên Mac (checklist: `pilot-checklist-mac.md`), các ảnh sau sẽ được chụp
và chèn vào — cho tới lúc đó chúng là **placeholder có chủ đích, không phải evidence**.

| Mã | Ảnh cần | Chụp khi |
|---|---|---|
| SHOT-1 | Data Editor trống + 2 tab Data/Variable View | Sau Bước 1 |
| SHOT-2 | Wizard CSV import (màn hình chọn delimiter) | Trong Bước 3–4 |
| SHOT-3 | Data View đầy dữ liệu sau import | Sau Bước 4 |
| SHOT-4 | `clinic_bp.sav` mở lại sau khi thoát ⌘Q | Sau Bước 6 |

Sơ đồ chữ — vị trí 2 tab trong Data Editor:

```
┌─ IBM SPSS Statistics Data Editor ────────────────┐
│  [bảng lưới số liệu / hoặc trống]                │
│                                                  │
│ [Data View] [Variable View]  ← góc dưới-trái     │
└──────────────────────────────────────────────────┘
```

## F. Ví dụ hoàn chỉnh — một vòng đời từ đầu tới cuối

Đây là toàn bộ chu trình bạn vừa làm, nhìn lại một lượt:

| # | Hành động | Kết quả kiểm chứng |
|---|---|---|
| 1 | Mở SPSS | Data Editor hiện, có 2 tab dưới-trái |
| 2 | File → Import Data → CSV Data → chọn `clinic_bp_v1_clean.csv` | Wizard hiện |
| 3 | Trả lời: header=Yes, delimiter=Comma, decimal=Period | Data View đầy số liệu |
| 4 | Đếm & đọc | 160 dòng × 12 cột; P160 ở cuối; `.` = missing |
| 5 | Save As → `clinic_bp.sav` → ⌘Q → mở lại | File mở lại đủ 160×12 |

**Bạn vừa hoàn thành vòng đời nhỏ nhất của công việc thống kê:**
*lấy dữ liệu → nhìn hiểu → lưu đúng định dạng → mở lại được.*

## G. Bài tập tự làm

Mở [workbook](/d01/bai-tap/) (hoặc `workbook.md`): lặp lại toàn bộ quy trình **không nhìn
hướng dẫn** với file `exercise_hba1c_pairs.csv` — file nhỏ hơn, 24 dòng. Có gợi ý từng
nấc nếu bị kẹt.

## H. Checkpoint — sản phẩm bạn phải có

Qua Ngày 01 khi có đủ:

- [ ] File **`clinic_bp.sav`** trong thư mục khóa học, mở lại được sau khi thoát SPSS.
- [ ] File **`hba1c_pairs.sav`** (từ bài tập workbook).
- [ ] Trả lời được miệng: "160 dòng = 160 bệnh nhân; 12 cột = 12 biến; một ô `.` = missing."
- [ ] Nói được Data View và Variable View khác nhau ở điểm nào.

## I. Gỡ rối khi bị kẹt

| Triệu chứng | Nguyên nhân hay gặp | Cách gỡ |
|---|---|---|
| Không tìm thấy "Import Data" | Phiên bản SPSS cũ/menu khác | Dùng File → Open → Data → chọn "Files of type = CSV" |
| Biến thành V1, V2, V3 | Chọn "No" ở câu header | Import lại, chọn Yes |
| 161 dòng thay vì 160 | Import nhầm file `_raw` | Đóng không lưu; kiểm tra tên file có `_clean` |
| Một cột bị tách làm hai | Decimal chọn sai (Comma) | Import lại với Period |
| `.sav` mở lại trống | Lưu nhầm thư mục | Tìm `clinic_bp.sav` bằng Finder, mở trực tiếp |
| Menu tên khác hướng dẫn | Phiên bản SPSS khác | Ghi lại tên thật, đánh dấu `DIFFERS:` trong checklist pilot, báo người phụ trách — không tự đoán |

## J. Chuyển giao sang Ngày 02

**File bạn vừa tạo:**

| File | Vai trò | Ngày mai |
|---|---|---|
| `clinic_bp.sav` | File làm việc chính (160×12) | **Mở lại đầu giờ** — sẽ thêm nhãn biến vào chính file này |
| `hba1c_pairs.sav` | File luyện từ workbook | Dùng trong BT Ngày 02 (định nghĩa biến) |
| `clinic_bp_v1_clean.csv` | File nguồn gốc | Để nguyên — không đụng tới nữa |

**Kỹ năng mang theo:** import CSV qua wizard, đọc Data View, lưu/mở `.sav`.

**Thay đổi ngày mai:** bạn sẽ làm việc chủ yếu ở **Variable View** (tab còn lại) để
"giải mã" file — `sex_code = 1` là nam hay nữ?

## K. Đọc thêm (không bắt buộc)

- SPSS còn 2 cửa sổ khác sẽ gặp sau: **Output Viewer** (kết quả phân tích — tự mở khi chạy
  lệnh đầu tiên ở Ngày 03) và **Syntax Editor** (ghi lệnh dạng text — Ngày 11).
- Vì sao không nhập file `.sav` có sẵn? Vì thực tế người ta trao đổi CSV — biết import là
  kỹ năng bắt buộc.
- CSV kiểu châu Âu dùng `25,9` (phẩy thập phân) → chọn "decimal = comma" trong wizard.
- File CSV của khóa học bắt đầu ngay bằng dòng header — **không có dòng chú thích nào
  trước tên biến** (nhãn GIẢ LẬP nằm trong file `00-SIMULATED-NOTICE.md` kèm theo).
