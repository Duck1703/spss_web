# Ngày 03 — Làm sạch dữ liệu: từ file gốc tới bản sạch

> **Lộ trình:** Practice-first 14 ngày · **Thời lượng:** ~120 phút · **Dataset:** `clinic_bp_v1_raw.csv` (GIẢ LẬP — có lỗi gài)
> **Trạng thái:** DRAFT v2 (rebuild Task 11) — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`;
> riêng bước đổi kiểu String→Numeric của `sex_code` đánh dấu `⏳ PENDING thao tác` kèm đường phục hồi.

---

## A. Điểm xuất phát — bạn cần có sẵn gì

- [ ] **`clinic_bp.sav`** có đầy đủ nhãn (Ngày 02) — hôm nay đóng vai trò **bản tham chiếu**,
  không sửa.
- [ ] **`clinic_bp_v1_raw.csv`** đã tải trong thư mục khóa học — đây là file *bẩn*, khác file
  `_clean` hôm trước. Kiểm tên file kỹ.
- [ ] Một trình soạn văn bản (TextEdit / VS Code / Notes) để ghi **cleaning log**.
- [ ] Đã quen: Variable View, Value Labels, Frequencies (Ngày 02 Bước 7).

### 🗂 Bản đồ file — đọc trước khi làm (rất quan trọng)

Ba file `.sav` sẽ tồn tại trong thư mục của bạn sau hôm nay. Đây là lý do nhiều người mới học
bị lẫn — đọc bảng này hai lần:

| File | Là gì | Tạo khi nào | Có nhãn không | Dùng để làm gì |
|---|---|---|---|---|
| `clinic_bp.sav` | Bản **sạch chuẩn** + đã gắn nhãn (Ngày 01–02) | Ngày 01–02 | ✅ Đủ | **Bản tham chiếu** — mượn nhãn, đối chiếu kết quả. Không sửa nữa |
| `clinic_bp_work.sav` | Bản **làm việc tạm** từ file raw | Hôm nay, Bước 2 | ❌ (CSV không mang nhãn) | Phòng hờ — nếu lỡ phá, mở lại file này làm lại |
| `clinic_bp_my_clean.sav` | **Bản BẠN tự làm sạch** + gắn lại nhãn | Hôm nay, Bước 7–8 | ✅ (bạn gắn lại) | **FILE CHÍNH từ Ngày 04 trở đi** — mọi phân tích sau này dùng file này |

> ❓ *Vì sao không sửa luôn trong `clinic_bp.sav` cho tiện?* Vì file đó là **bản sạch chuẩn**
> phòng khám cung cấp — bạn cần giữ nó nguyên để đối chiếu "bản của tôi làm có đúng không".
> Đây cũng là nguyên tắc thật: *không bao giờ ghi đè dữ liệu tham chiếu.*

## B. Tình huống y khoa

Bác sĩ Lan xin lỗi: file hôm trước là "bản đã qua xử lý". Hôm nay cô ấy gửi **file gốc nhập
tay** (`clinic_bp_v1_raw.csv`) — cùng 160 bệnh nhân đó nhưng là bản thô, chưa ai kiểm tra.

Nhiệm vụ: làm sạch bản thô này sao cho **kết quả cuối tương đương bản sạch chuẩn** — và ghi lại
mọi thứ bạn sửa. Trong nghiên cứu thật, đây chính là công việc chiếm ~80% thời gian.

## C. Chỉ cần biết điều này trước

- **Nguyên tắc 1 — file raw bất biến.** Không bao giờ sửa trực tiếp `clinic_bp_v1_raw.csv`.
  Mọi sửa đổi làm trên bản `.sav` sao chép → luôn truy vết được.
- **Nguyên tắc 2 — không đoán.** `tuổi = 250` không "sửa thành 25" — bạn không biết ý định
  người nhập. Xử lý chuẩn của người mới: **đặt về missing** và **ghi log**.
- **Nguyên tắc 3 — ghi log mọi thay đổi.** Một dòng log cho một hành động:
  *ai (dòng/biến) — vấn đề gì — phát hiện bằng cách nào — xử lý ra sao.*
- **Hai loại "dữ liệu không đúng miền":**
  - *Bất khả thi* (tuổi 250, SBP −30) → chắc chắn lỗi → missing.
  - *Ngoài codebook* (`sex_code = 9`) → không biết ý → missing (khai báo mã 9 = missing,
    giữ được vết tích).
  - *Cực trị nhưng có thể thật* (BMI 45) → **không** xóa — outlier ≠ lỗi, kiểm ngữ cảnh.
- **Missing hiển thị là `.`** trong Data View (system missing) — SPSS tự loại khỏi phép
  tính cần biến đó, dòng vẫn còn cho các biến khác.

## D. Làm theo từng bước

> ⚠️ `MAC_SPSS_VERIFICATION_PENDING`. Có **2 điểm dễ phá** được đánh dấu ⚠️⚠️ — làm chậm
> đúng như hướng dẫn, file `clinic_bp_work.sav` chính là phao cứu sinh.

### Bước 1 — Import file raw

- **Làm:** y như Ngày 01 — File → Import Data → CSV Data… → chọn `clinic_bp_v1_raw.csv`
  → header **Yes** · comma · period → Finish.
- **Kiểm chứng:** **161 dòng** (không phải 160 — có một dòng trùng gài sẵn), 12 cột.
- **Nếu sai:** thấy 160 → bạn mở nhầm file `_clean`. Thấy cột đầu tên lạ (vd `ï»¿patient_id`
  hoặc `?patient_id`) → vấn đề encoding của file — xem mục I.
- **Nhìn Variable View ngay:** lưu ý cột `Type` của `sex_code` — đang là **`String`**
  thay vì Numeric (vì sao — ở Bước 4). Đây là dấu hiệu đầu tiên của một lỗi gài.

### Bước 2 — Lưu ngay `clinic_bp_work.sav` (TRƯỚC khi sửa bất cứ thứ gì)

- **Làm:** File → Save As… → **`clinic_bp_work.sav`** → Save.
- **Vì sao trước tiên:** từ giờ mọi sửa đổi đều có thể sai. File này là "điểm lưu" —
  phá hỏng thì đóng không lưu, mở lại file này, làm lại từ đầu. **Đây là thói quen
  chuyên nghiệp, không phải thừa bước.**

{{guide:d03-import-work}}

### Bước 3 — Soi lỗi bằng thống kê mô tả (đọc output kỹ)

Dùng **hai dialog khác nhau** cho hai loại biến — đây là lần đầu bạn tự mở dialog phân tích,
làm chậm:

**3a. Frequencies cho biến mã hóa** (sex_code, diabetes_flag, smoking_status,
followup_completed, bp_controlled, treatment_group):

- **Làm:** menu **Analyze → Descriptive Statistics → Frequencies…**
- **Màn hình mong đợi:** dialog hai khung — **trái**: danh sách tất cả biến; **phải**:
  khung `Variable(s)` đang trống; giữa hai khung là nút mũi tên **►**. `[SHOT-9]`
- **Làm:** bấm chọn `sex_code` trong danh sách trái → bấm **►** (hoặc **double-click** tên
  biến) → `sex_code` nhảy sang khung phải. Lặp lại cho 6 biến.
- **Làm:** bấm **OK** → Output Viewer hiện bảng tần số cho từng biến.
- **Đọc gì ở mỗi bảng:** cột `Frequency` — giá trị nào **ngoài codebook**? Soi:
  - `sex_code`: thấy `F`, `1`, `2`, `9` → **`F` và `9` là lỗi** (codebook chỉ cho 1, 2).
  - `diabetes_flag`: có một ô **System missing** → ghi nhận (thiếu thật, giữ nguyên).
  - Các biến còn lại: giá trị đều trong codebook.

**3b. Descriptives cho biến định lượng** (age_years, bmi, sbp_baseline, adherence_score,
sbp_followup):

- **Làm:** **Analyze → Descriptive Statistics → Descriptives…** → đưa 5 biến sang khung
  `Variable(s)` → **OK**. `[SHOT-10]`
- **Đọc gì:** cột **Minimum** và **Maximum** của từng biến, so với miền hợp lý:
  - `age_years`: **max 250** → lỗi (người không thể 250 tuổi).
  - `bmi`: **max 152,4** → lỗi (BMI người không thể 152).
  - `sbp_baseline`: **min −30** → lỗi (huyết áp không âm).
  - `adherence_score`: **max 118** → lỗi (thang chỉ tới 100 — xem codebook).
  - `sbp_followup`: N chỉ ~137 và min/max hợp lý → OK.

- **Nếu sai:** bảng Descriptives thiếu `sex_code` → đúng ý — nó đang là String, Descriptives
  bỏ qua biến chuỗi. Không phải lỗi của bạn.

**Viết lại** mọi thứ vừa phát hiện vào giấy/log nháp: giá trị lạ + biến nào.

{{guide:d03-frequencies}}

{{guide:d03-descriptives}}

### Bước 4 — Sửa `sex_code` (⚠️⚠️ điểm dễ phá #1 — `⏳ PENDING thao tác`)

**Hiểu trước đã:** trong CSV, cột `sex_code` gần như toàn số `1`/`2` — nhưng **một ô** chứa
chữ `F`. CSV không phân kiểu từng ô, nên SPSS buộc chọn **String cho cả cột**. Hệ quả:
Descriptives bỏ qua nó, và bạn không thể khai báo missing bằng số. Phải: **sửa chữ →
đổi cả cột về Numeric → khai báo mã 9 là missing.** Làm sai thứ tự sẽ mất dữ liệu.

**4a. Sửa ô `F` trong khi cột còn là String**

- **Làm:** Data View → tìm dòng `patient_id = P022` (cuộn hoặc dùng Edit → Find… gõ `P022`
  trên cột `patient_id`) → bấm vào ô `sex_code` chứa `F` → gõ `1` → Enter.
- **Vì sao `1`:** tra codebook/logic — `F` = Female = nữ = mã `1`. Đây là trường hợp hiếm
  "sửa theo nghĩa rõ ràng", không phải đoán.
- **Ghi log ngay:** `P022 · sex_code 'F' → 1 (nữ)`.

**4b. Đổi Type của cột về Numeric**

- **Làm:** Variable View → dòng `sex_code` → bấm ô `Type` → nút **…** hiện ra → bấm **…** →
  hộp thoại chọn kiểu → chọn **Numeric** → OK.
- **Màn hình mong đợi:** ô Type đổi thành `Numeric`. Các giá trị `'1','2','9'` trong Data
  View chuyển thành số 1, 2, 9 (nội dung giống hệt, chỉ khác kiểu). `[SHOT-11]`
- **Nếu sai:**
  - Vài ô hiển thị `.` sau khi đổi → tức còn ký tự không phải số → **Ctrl+Z** hoặc đóng
    không lưu → mở lại `clinic_bp_work.sav` → kiểm tra lại cột kỹ (Frequencies trên biến
    String sẽ liệt kê mọi giá trị lạ) rồi làm lại 4a.
  - *Mẹo an toàn:* trước khi đổi Type, chạy **Frequencies trên `sex_code` khi còn String** —
    danh sách hiện đúng các giá trị `{1, 2, 9}` (sau khi đã sửa F) → an toàn để đổi.

**4c. Khai báo mã `9` là missing**

- **Làm:** vẫn Variable View → dòng `sex_code` → bấm ô `Missing` → nút **…** → chọn
  **Discrete missing values** → gõ `9` vào ô đầu → OK.
- **Kiểm chứng:** chạy lại Frequencies `sex_code` → bảng chỉ còn **1 và 2**, dòng Missing
  hiển thị `9` với số đếm 1.
- **Vì sao không xóa ô `9`:** khai báo missing giữ lại *vết tích* — ai mở file cũng biết
  từng có mã lạ; xóa ô sẽ giống hệt "thiếu thật".
- **Ghi log:** `sex_code=9 (P052) → khai báo discrete missing`.
- **Cấm:** **đừng** dùng Transform → Automatic Recode cho việc này — nó sẽ remap {1,2,9}
  → {1,2,3} âm thầm, phá nghĩa của mã.

{{guide:d03-sexcode}}

### Bước 5 — Sửa các giá trị bất khả thi → missing

Với mỗi ô lỗi đã soi ra ở Bước 3, làm đúng chu trình: **tìm dòng → xóa nội dung ô → ghi log.**

- **Tìm dòng:** Edit → Find… (hoặc cuộn) theo `patient_id`.
- **Xóa ô:** bấm ô lỗi → nhấn **Delete** → ô chuyển thành `.` (system missing).

| Dòng | Biến | Giá trị lỗi | → |
|---|---|---|---|
| `P037` | `age_years` | 250 | `.` |
| `P074` | `sbp_baseline` | −30 | `.` |
| `P103` | `bmi` | 152,4 | `.` |
| `P007` | `adherence_score` | 118 | `.` |

- **Ghi log mỗi dòng:** `P037 · age_years 250 → missing (bất khả thi sinh học)`.
- **Nếu sai:** xóa nhầm ô đúng → Ctrl+Z ngay; hoặc gõ lại giá trị gốc (tra file raw bằng
  trình soạn văn bản — file raw không đổi, đó là lý do nó phải bất biến).

### Bước 6 — Xử lý dòng trùng (⚠️⚠️ điểm dễ phá #2)

- **Làm:** menu **Data → Identify Duplicate Cases…** `[SHOT-12]`
- **Màn hình mong đợi:** dialog — khung "Define matching cases by" trống.
- **Làm:** đưa `patient_id` vào khung đó (► hoặc double-click) → **OK**.
- **Kết quả:** SPSS tạo biến mới `PrimaryLast` ở cuối bảng + một bảng output báo số nhóm
  trùng. Dòng nào là bản trùng thứ hai sẽ mang giá trị **0** ở `PrimaryLast`
  (0 = không phải bản chính).
- **Làm:** tìm dòng có `PrimaryLast = 0` (sẽ là bệnh nhân **P088** — xuất hiện 2 lần ở hai
  chỗ khác nhau trong file). Kiểm tra hai dòng P088 có **giống hệt nhau** → đúng là trùng.
- **Xóa bản trùng:** bấm **chuột phải vào số dòng** (header xám bên trái — trên Mac:
  Ctrl+click hoặc chạm hai ngón) của dòng có `PrimaryLast = 0` → chọn **Clear** → dòng
  biến mất. Còn **160 dòng**.
- **Dọn dẹp:** xóa biến tạm `PrimaryLast` — Variable View → chuột phải (Ctrl+click) số
  dòng của biến → **Clear**.
- **Ghi log:** `P088 trùng lặp → giữ dòng đầu, xóa bản trùng`.
- **Nếu sai:** xóa nhầm dòng P088 chính → Ctrl+Z; hoặc đóng không lưu → mở lại
  `clinic_bp_work.sav` → làm lại từ Bước 4 (mất ít nhất thời gian — đó là lý do Bước 2 tồn tại).

{{guide:d03-duplicates}}

### Bước 7 — Lỗi "khớp logic" cuối cùng + lưu bản sạch

- **Soi bằng mắt / sort:** có một dòng `followup_completed = 1` nhưng `sbp_followup` trống
  (P119) — mâu thuẫn: đánh dấu "đã tái khám" mà không có đo tái khám.
- **Xử lý:** sửa `followup_completed` của P119 thành `0` (sửa *cờ*, vì đo không tồn tại —
  không thể bịa con số). `sbp_followup` và `bp_controlled` vẫn missing — đúng.
- **Ghi log:** `P119 · followup_completed 1→0 (không có đo tái khám)`.
- **Làm:** **File → Save As… → `clinic_bp_my_clean.sav`** → Save.
  *(Giữ `clinic_bp_work.sav` — nó là bản "giữa chừng" phòng hờ.)*

### Bước 8 — Gắn lại nhãn cho `clinic_bp_my_clean.sav` (đừng bỏ qua!)

File vừa lưu **chưa có một nhãn nào** — CSV không mang theo định nghĩa bạn gắn hôm Ngày 02.
Hai cách:

- **Cách nhanh (tùy chọn, `⏳ PENDING thao tác`):** mở `clinic_bp_my_clean.sav` →
  **File → Apply Data Dictionary…** → chọn `clinic_bp.sav` làm nguồn → Apply. SPSS sao
  chép toàn bộ Label/Values/Measure/Missing sang. Chạy Frequencies kiểm tra nhãn hiện.
- **Cách chắc chắn (ôn lại Ngày 02, ~10 phút):** gắn lại bằng tay như Bước 3–5 Ngày 02 —
  12 Label + Value Labels cho 5 biến mã hóa + Measure. Làm xong chạy Frequencies `sex_code`:
  bảng hiện **Nữ/Nam** là đúng.
- **Kiểm chứng:** View → Value Labels trong Data View → `sex_code` hiển thị Nữ/Nam.

{{guide:d03-finish}}

### Bước 9 — Hoàn thiện cleaning log

Mở trình soạn văn bản → tạo file **`cleaning_log.md`** trong thư mục khóa học, theo mẫu:

```markdown
# Cleaning log — clinic_bp_v1_raw.csv → clinic_bp_my_clean.sav
> Ngày làm: … · Người làm: … · File raw giữ nguyên bất biến.

| # | Vị trí | Vấn đề | Phát hiện bằng | Xử lý |
|---|---|---|---|---|
| 1 | P022 · sex_code | chữ 'F' trong cột số | cột thành String khi import | 'F'→1 (nữ), đổi Type về Numeric |
| 2 | … | … | … | … |
```

Log đầy đủ của bạn phải có **7–8 dòng** tương ứng số lỗi đã xử lý.

## E. Minh họa & danh sách ảnh cần chụp

| Mã | Ảnh cần | Chụp khi |
|---|---|---|
| SHOT-9 | Dialog Frequencies (2 khung + nút ►) | Bước 3a |
| SHOT-10 | Bảng Descriptives có min/max | Bước 3b |
| SHOT-11 | Variable View: sex_code đổi String→Numeric | Bước 4b |
| SHOT-12 | Dialog Identify Duplicate Cases + cột PrimaryLast | Bước 6 |

## F. Ví dụ hoàn chỉnh — một vòng đời làm sạch

| # | Hành động | Kiểm chứng |
|---|---|---|
| 1 | Import `_raw.csv` → lưu `clinic_bp_work.sav` | 161 dòng, sex_code = String |
| 2 | Frequencies (mã hóa) + Descriptives (định lượng) | Soi ra giá trị lạ: F, 9, 250, −30, 152,4, 118, trùng |
| 3 | Sửa 'F'→1, đổi Type, khai báo 9=missing | sex_code chỉ còn 1/2 |
| 4 | 4 ô bất khả thi → missing | Min/max về miền hợp lý |
| 5 | Identify Duplicates → xóa bản trùng | 160 dòng |
| 6 | Sửa P119 flag → lưu `clinic_bp_my_clean.sav` | File mới, 160 dòng sạch |
| 7 | Gắn lại nhãn + cleaning_log.md | Nhãn hiện, log đủ dòng |

## G. Bài tập tự làm

[Workbook](/d03/bai-tap/): soi lỗi trên bảng giấy mini, hai loại missing, và một tình
huống bảng "dài" (nhiều dòng/bệnh nhân) — nơi "trùng id" **không** phải lỗi.

## H. Checkpoint — sản phẩm bạn phải có

- [ ] `clinic_bp_my_clean.sav` — **160 dòng**, không còn giá trị ngoài miền, **có nhãn**.
- [ ] `cleaning_log.md` — ghi đủ các lỗi đã xử lý (7–8 mục).
- [ ] `clinic_bp_work.sav` vẫn tồn tại (bản phòng hờ).
- [ ] `clinic_bp.sav` **không bị sửa** — vẫn là bản chuẩn để đối chiếu.
- [ ] Trả lời được: vì sao không sửa raw trực tiếp? Outlier khác lỗi thế nào?

## I. Gỡ rối khi bị kẹt

| Triệu chứng | Nguyên nhân | Cách gỡ |
|---|---|---|
| Cột đầu tên `ï»¿patient_id`/`?patient_id` | File CSV có ký tự BOM đầu file | Trong wizard import, thử chọn encoding **UTF-8** nếu được hỏi; nếu đã import và chỉ sai tên cột đầu → sửa Name thủ công về `patient_id` ở Variable View |
| `sex_code` không đổi được Type | Đang gõ trực tiếp thay vì bấm **…** | Bấm ô Type → nút … → chọn Numeric |
| Sau đổi Type nhiều ô thành `.` | Còn ký tự lạ chưa sửa | Ctrl+Z → Frequencies khi còn String để liệt kê giá trị lạ → sửa hết → đổi lại |
| Phá hỏng giữa chừng | — | **Đóng không lưu → mở `clinic_bp_work.sav` → làm lại từ Bước 4** (file này chính là lý do Bước 2 bắt lưu trước) |
| Xóa nhầm dòng / ô | — | Ctrl+Z tức thì; hoặc tra giá trị gốc trong file `_raw.csv` bằng trình soạn văn bản rồi gõ lại |
| Descriptives không hiện `sex_code` | Nó đang là String | Đúng ý — sửa ở Bước 4 |
| Không thấy `PrimaryLast` | Identify Duplicates chưa đưa `patient_id` vào "matching" | Mở lại dialog, kéo đúng khung |
| 161 dòng sau khi xóa | Xóa nhầm dòng hoặc chưa xóa | Đếm lại; PrimaryLast=0 chỉ 1 dòng |
| N trong output < 160 | Biến có missing — bình thường | Đọc N của từng bảng, không hoảng |

## J. Chuyển giao sang Ngày 04

**File sau hôm nay:**

| File | Trạng thái | Ngày mai |
|---|---|---|
| `clinic_bp_my_clean.sav` | Bản sạch CỦA BẠN, có nhãn | **File làm việc chính** — mở ngay đầu Ngày 04 |
| `clinic_bp_work.sav` | Bản phòng hờ | Có thể xóa sau khi đối chiếu xong Ngày 04 |
| `clinic_bp.sav` | Bản chuẩn tham chiếu | Chỉ dùng để soi đáp — không phân tích trên nó |
| `cleaning_log.md` | Minh chứng làm sạch | Giữ cùng thư mục — Ngày 12–14 sẽ viết log tương tự |
| `clinic_bp_v1_raw.csv` | File gốc bất biến | Để nguyên mãi mãi |

**Kỹ năng mang theo:** đọc min/max để bắt lỗi; khai báo missing; Identify Duplicate Cases;
tư duy "phát hiện → xử lý → ghi log".

**Thay đổi ngày mai:** dữ liệu đã sạch — bắt đầu **mô tả** nó (tỷ lệ %, trung bình, biểu đồ)
để trả lời câu hỏi đầu tiên của Bác sĩ Lan: "bệnh nhân của tôi là những ai?"

## K. Đọc thêm (không bắt buộc)

- **Sort Cases** (Data → Sort Cases…) — cách khác soi cực trị nhanh: sort giảm dần rồi nhìn
  đầu bảng. Trong lớp này Descriptives min/max là đủ.
- **Select Cases / Filter** — khi muốn phân tích trên một nhóm con (vd: chỉ người có
  tái khám). Dùng từ Ngày 08.
- **Vì sao khai báo missing thay vì xóa ô:** `Discrete missing values` ghi lại *mã nào*
  từng xuất hiện — log trong chính file dữ liệu, khỏi tra file ngoài.
- **Outlier thật:** BMI 152,4 là lỗi chắc chắn; nhưng BMI 45 là người thật — quyết định
  xử lý cần ngữ cảnh + bằng chứng, không chỉ nhìn con số (BT4 workbook đào sâu điều này).
