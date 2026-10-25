# Checklist Pilot Ngày 01 — chạy thật trên Mac + IBM SPSS Statistics

> **Mục đích:** owner chạy thử Ngày 01 trên máy thật để kiểm chứng các bước menu
> (`MAC_SPSS_VERIFICATION_PENDING`). Điền vào ô `[ ]` khi làm xong mỗi mục.
> **Thời gian dự kiến:** 30–45 phút. **Trạng thái kiểm chứng:** `NOT_RUN` cho tới khi
> có bằng chứng chụp màn hình thật.

**Chuẩn bị ghi lại:** phiên bản SPSS (menu *SPSS Statistics → About SPSS Statistics*),
phiên bản macOS ( → About This Mac).

---

## 1. Lấy file dữ liệu đúng

- [ ] **Cách A — qua website local:** mở `http://localhost:4321/du-lieu/` (sau khi
  `npm run preview` trong thư mục `website`), bấm link tải **`clinic_bp_v1_clean.csv`**
  (bản *sạch* — KHÔNG phải `_raw`). File vào `~/Downloads/`.
  > ⚠️ **`localhost` chỉ trỏ về chính máy đang mở trình duyệt.** Nếu website đang chạy trên
  > máy Windows còn pilot thực hiện trên MacBook khác, `localhost:4321` trên Mac sẽ **không**
  > mở được. Hai cách xử lý: (a) chạy preview ngay trên Mac (`npm run preview` trong bản
  > clone repo trên Mac); (b) trên Windows chạy `npx astro preview --host` rồi trên Mac mở
  > `http://<IP-LAN-máy-Windows>:4321/du-lieu/`. Đơn giản nhất: dùng **Cách B** bên dưới.
- [ ] **Cách B — copy trực tiếp:** lấy file tại
  `datasets/cleaned/clinic_bp_v1_clean.csv` trong repo.
- [ ] Copy file vào thư mục khóa học: `~/Documents/spss-learning/`
  (tạo thư mục nếu chưa có — xem `START-HERE-MAC.md`).
- [ ] **Chụp evidence E0:** danh sách file trong thư mục (Finder) hoặc kết quả
  `ls -l` — chứng minh đúng file, đúng chỗ.
- [ ] Mở file bằng TextEdit/Excel để xem trước: **dòng đầu tiên phải là
  `patient_id,age_years,sex_code,...` — không có dòng chữ chú thích nào trước header.**

## 2. Mở SPSS

- [ ] **Finder → Applications → IBM SPSS Statistics**.
- [ ] Cửa sổ **Data Editor** hiện ra (bảng trống). Đóng hộp thoại chào mừng nếu có.
- [ ] **Chụp evidence E1:** góc dưới-trái cửa sổ có 2 tab `Data View` / `Variable View`.
- [ ] Bấm qua lại 2 tab, ghi một câu: Data View trông như thế nào, Variable View khác gì.

## 3. Import CSV

- [ ] **File → Import Data → CSV Data…** *(nếu không có: **File → Open → Data…**,
  "Files of type" = `CSV (*.csv)`)*
- [ ] Chọn `clinic_bp_v1_clean.csv` → **Open**.
- [ ] Trong wizard, chọn:
  - [ ] *"Read variable names from first row of file?"* → **Yes**
  - [ ] *Delimiters* → **Comma**
  - [ ] *Decimal symbol* → **Period (.)**
  - [ ] Còn lại mặc định → **Finish/Done**.
- [ ] **Chụp evidence E2:** màn hình wizard ở bước chọn delimiter/decimal.
- [ ] **Chụp evidence E3:** Data View sau import — **được phép 2 ảnh**: một ảnh thấy dòng đầu
  (`P001…`), một ảnh cuộn xuống thấy dòng cuối (`P160`).

**Kiểm chứng ngay — phải đúng cả 3:**

- [ ] **160 dòng** dữ liệu (dòng cuối `patient_id = P160`).
- [ ] **12 cột** biến, tên cột là `patient_id, age_years, sex_code, bmi, sbp_baseline,
  treatment_group, adherence_score, diabetes_flag, smoking_status, sbp_followup,
  followup_completed, bp_controlled`.
- [ ] Ô trống trong `sbp_followup` hiển thị là **`.`** (dấu chấm), không phải số 0.

> **Nếu thấy 161 dòng hoặc `sex_code` có giá trị 9** → đã import nhầm
> `clinic_bp_v1_raw.csv` (bản có lỗi, dành cho Ngày 03). Đóng không lưu, làm lại với
> file `_clean`.

## 4. Lưu và mở lại `.sav`

- [ ] **File → Save As…** → thư mục khóa học → tên `clinic_bp.sav`,
  type `SPSS Statistics (*.sav)` → **Save**.
- [ ] Thoát SPSS hẳn (⌘Q) → mở lại → **File → Open → Data…** → `clinic_bp.sav`.
- [ ] **Chụp evidence E4:** dữ liệu mở lại đầy đủ (vẫn 160 dòng × 12 cột).

## 5. Nếu tên menu/hộp thoại khác hướng dẫn

- [ ] Ghi lại **tên menu thật** bạn thấy (chụp màn hình) và mục bạn chọn thay thế.
- [ ] Đánh dấu mục đó `DIFFERS:` + tên menu thật trong checklist này → báo lại để
  cập nhật bài học. Không tự ý đoán — một lệch menu = một mục `DIFFERS`.

## 6. Bằng chứng cần nộp lại

| # | Evidence | Nội dung bắt buộc |
|---|---|---|
| E0 | Screenshot | File `clinic_bp_v1_clean.csv` trong `~/Documents/spss-learning/` |
| E1 | Screenshot | Data Editor trống + 2 tab Data/Variable View |
| E2 | Screenshot | Wizard import (bước delimiter/decimal) |
| E3 | Screenshot | Data View sau import — nhìn thấy P001… và dòng cuối P160 (được phép 2 ảnh) |
| E4 | Screenshot | `clinic_bp.sav` mở lại được sau khi thoát hẳn SPSS |
| E5 | Text | Phiên bản SPSS + macOS; mọi mục `DIFFERS` gặp phải |

## 7. Checkpoint hoàn thành pilot

Pilot được coi là **thành công** khi: (1) cả 6 mục evidence E0–E5 đủ; (2) 3 kiểm chứng
ở mục 3 đúng; (3) `.sav` mở lại được. Khi đó mới được đổi nhãn
`MAC_SPSS_VERIFICATION_PENDING → VERIFIED` cho các bước tương ứng trong `lesson.md`.

> **Lưu ý:** pilot này kiểm chứng *các bước thao tác Ngày 01*, chưa kiểm chứng số liệu
> phân tích (những số `NOT_RUN` ở các ngày sau vẫn chờ pilot tương tự).
