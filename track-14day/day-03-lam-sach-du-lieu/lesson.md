# Ngày 03 — Làm sạch dữ liệu

> **Lộ trình:** Practice-first 14 ngày · **Thời lượng:** ~120 phút · **Dataset:** `clinic_bp_v1_raw.csv` (GIẢ LẬP, có lỗi gài)
> **Trạng thái:** DRAFT — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`.

---

## A. Hôm nay bạn sẽ làm gì

1. Import file dữ liệu **gốc** (raw) vừa nhận từ phòng khám.
2. Dùng Frequencies và Descriptives để **soi lỗi**: giá trị bất khả thi, mã lạ, ô trống.
3. Phát hiện **dòng trùng lặp** bằng công cụ của SPSS.
4. Sửa lỗi trên **bản sao** bằng Recode/Compute — ghi cleaning log.
5. Lưu file sạch `clinic_bp_my_clean.sav` và đối chiếu với bản chuẩn.

## B. Tình huống y khoa

Phòng khám gửi bạn file gốc `clinic_bp_v1_raw.csv` — *khác* với bản sạch bạn dùng 2 ngày qua.
File này được nhập tay từ hồ sơ giấy bởi hai điều dưỡng khác nhau — và như mọi dữ liệu nhập tay
trên đời, **nó có lỗi**.

Nếu bạn phân tích thẳng file này: tuổi trung bình sẽ bị kéo lên bởi một bệnh nhân "250 tuổi",
bảng giới tính sẽ xuất hiện "giới số 9", và một bệnh nhân được đếm hai lần. **Dữ liệu bẩn →
kết quả sai → kết luận sai.** Công việc hôm nay: tìm và xử lý đúng quy trình.

## C. Những điều cần biết trước

- **Nguyên tắc raw bất biến:** không bao giờ sửa file gốc. Mọi sửa chữa làm trên bản sao `.sav`,
  mọi quyết định ghi vào **cleaning log** (nhật ký: lỗi gì, vì sao là lỗi, xử lý ra sao).
- **Ba loại vấn đề thường gặp:**
  1. *Giá trị bất khả thi* — tuổi 250, huyết áp âm, BMI 152.
  2. *Mã không hợp lệ* — `sex_code = 9` khi codebook chỉ cho phép 1/2.
  3. *Dữ liệu thiếu (missing)* — ô trống: có khi là lỗi nhập, có khi là thiếu thật.
- **"Sửa" ≠ "đoán":** khi không đối chiếu được hồ sơ gốc, giá trị bất khả thi được đặt thành
  **missing** (thiếu) — không bịa con số. Missing trong SPSS hiển thị là `.` và tự bị loại khỏi
  phép tính liên quan.
- **Trùng lặp (duplicate):** cùng một đơn vị quan sát bị nhập hai dòng → mọi thống kê bị đếm kép.

## D. Thực hành từng bước trên Mac

> ⚠️ `MAC_SPSS_VERIFICATION_PENDING` — checklist ở cuối phần.

### Bước 1 — Import file raw

1. File → Import Data → CSV Data… → chọn `clinic_bp_v1_raw.csv` → qua wizard như Ngày 01
   (tên biến ở dòng đầu, delimiter `,`, decimal `.`).
2. **Ngay lập tức** File → Save As → `clinic_bp_work.sav` — file làm việc của bạn. File CSV gốc để nguyên.
3. **Đếm dòng:** cuộn xuống cuối Data View → bạn sẽ thấy **161 dòng** (không phải 160!) — dấu hiệu đầu tiên.

### Bước 2 — Soi lỗi bằng Frequencies (biến định tính)

**Analyze → Descriptive Statistics → Frequencies…** → đưa `sex_code`, `diabetes_flag`,
`smoking_status`, `followup_completed`, `bp_controlled` vào ô Variable(s) → OK.

Đọc bảng trong Output Viewer, tìm:
- `sex_code`: ngoài `1`/`2` có xuất hiện **`9`** và **`F`** không? *(Ghi lại tần số từng mã.)*
- `diabetes_flag`: có dòng **System missing** nào không?
- Các biến còn lại có mã ngoài miền không?

### Bước 3 — Soi lỗi bằng Descriptives (biến định lượng)

**Analyze → Descriptive Statistics → Descriptives…** → đưa `age_years`, `bmi`,
`sbp_baseline`, `adherence_score`, `sbp_followup` vào → **Options…** tick thêm
`Minimum`, `Maximum` (mặc định đã có Mean, Std. deviation) → Continue → OK.

Đọc cột **Minimum** và **Maximum**:
- `age_years`: max = **250** → bất khả thi (con người không 250 tuổi).
- `bmi`: max = **152.4** → bất khả thi (BMI người lớn ~15–60).
- `sbp_baseline`: min = **−30** → bất khả thi (huyết áp không âm).
- `adherence_score`: max = **118** > thang 100 → vượt miền cho phép.
- `sbp_followup`: min/max trong khoảng hợp lý — nhưng để ý N (số dòng có dữ liệu) nhỏ hơn 161.

> 🧭 **Cách nghĩ của người làm dữ liệu:** min/max là "cỗ máy dò lỗi" nhanh nhất — mọi biến định lượng
> đều có miền hợp lý sinh học; giá trị ngoài miền đó cần kiểm tra.

### Bước 4 — Tìm dòng trùng lặp

**Data → Identify Duplicate Cases…** → ô "Define matching cases by": đưa `patient_id` vào → OK.

Output liệt kê các `patient_id` xuất hiện >1 lần — bạn sẽ thấy **P088** (2 dòng, không kề nhau).

### Bước 5 — Soi lỗi mâu thuẫn giữa hai biến

**Data → Sort Cases…** → sort theo `followup_completed` (Descending) rồi nhìn cột `sbp_followup`:
tìm dòng có `followup_completed = 1` nhưng `sbp_followup` trống → **P119**: ghi "đã tái khám"
nhưng không có con số đo → mâu thuẫn.

*(Cách khác nhanh hơn khi quen: dùng Frequencies crosstab giữa hai biến — học Crosstabs ở Ngày 08.)*

### Bước 6 — Sửa lỗi trên file làm việc

Quy tắc xử lý tham chiếu (đối chiếu logic codebook, không đoán số):

| Lỗi | Cách sửa trên `clinic_bp_work.sav` |
|---|---|
| `age=250` (P037) | Đặt về missing |
| `sex_code=9` (P052) | Đặt về missing |
| `sex_code='F'` (P022) | Cột sẽ bị import thành **String** vì có chữ → đổi 'F'→'1' rồi chuyển kiểu |
| `sbp_baseline=−30` (P074) | missing |
| `bmi=152.4` (P103) | missing |
| Trùng P088 | Xóa 1 dòng |
| `adherence=118` (P007) | missing |
| P119 mâu thuẫn | `followup_completed` → 0 (thực tế không có đo) |
| `diabetes_flag` trống (P141) | **giữ missing** — không bịa |

**Cách đặt một ô thành missing** (đơn giản nhất cho người mới): bấm thẳng vào ô đó trong
Data View → bấm **Delete** → ô chuyển thành `.`. *(Nhanh và minh bạch cho file nhỏ; dữ liệu lớn
sẽ dùng syntax — xem mục I.)*

**Xóa dòng trùng:** click chọn dòng trùng thứ hai của P088 → chuột phải → **Clear** (xóa cả dòng).

**Ô chữ 'F':** sửa thành `1` trực tiếp; sau đó trong Variable View đổi `Type` của `sex_code`
về Numeric nếu SPSS đã nhận là String.

### Bước 7 — Ghi cleaning log + lưu + đối chiếu

1. Tạo file `cleaning_log.md` (TextEdit/VSCode đều được) ghi bảng: lỗi | dòng | cách phát hiện | cách xử lý.
2. File → Save As → **`clinic_bp_my_clean.sav`**.
3. Kiểm tra lại: chạy lại Descriptives — `age_years` max giờ phải ≤ 82, `sbp_baseline` min > 0,
   số dòng = 160.
4. Đối chiếu với bản chuẩn: mở `datasets/cleaned/clinic_bp_v1_clean.csv` — hai bản phải khớp nhau
   về mặt *quyết định xử lý* (cùng 160 dòng, cùng các ô missing).

## E. Hiểu kết quả của bạn

Sau bài này bạn có: file `clinic_bp_my_clean.sav` (160 dòng sạch) + `cleaning_log.md` + kinh nghiệm
"đọc lỗi" bằng min/max và bảng tần số.

**Điều quan trọng cần hiểu:** làm sạch không phải "làm đẹp số liệu". Mỗi quyết định đều phải
giải thích được *vì sao* — và luôn có thể quay về file raw để kiểm tra lại.

## F. Bài tập tự làm

`workbook.md` — một bảng lỗi mini mới + câu hỏi về quy trình.

## G. Đáp án

`answer-key.md` — chỉ mở sau khi tự làm. *(Danh mục lỗi đầy đủ của file này nằm ở
`datasets/codebooks/planted-errors-INTERNAL.md` — nội bộ, bạn không cần mở.)*

## H. Checkpoint qua bài

- [ ] Tự tìm được **ít nhất 7/9 lỗi** trong file raw.
- [ ] File `clinic_bp_my_clean.sav` có đúng 160 dòng; Descriptives không còn giá trị bất khả thi.
- [ ] `cleaning_log.md` ghi được từng quyết định + lý do.
- [ ] Nói được vì sao không sửa thẳng vào file CSV gốc.

## I. Đọc thêm (không bắt buộc)

- **Syntax cách nhanh tái lập:** thay vì bấm tay, thao tác sửa có thể ghi thành lệnh, ví dụ
  `RECODE age_years (250=SYSMIS).` — Ngày 11 sẽ giới thiệu cách lưu syntax để tái tạo quy trình.
- **Missing có "mã riêng":** nghiên cứu thật hay phân biệt `99 = từ chối trả lời` vs `98 = không biết`
  vs trống. Khai báo ở cột `Missing` trong Variable View → SPSS loại chúng khỏi phân tích nhưng
  vẫn giữ thông tin "thiếu vì sao".
- **Khi nào xóa hẳn một dòng?** Chỉ khi dòng đó *không phải một quan sát thật* (trùng lặp, dòng
  tiêu đề lẫn vào). Giá trị sai trong một dòng thật → sửa ô thành missing, không xóa người đó.
