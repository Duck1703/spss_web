# Ngày 01 — Lần đầu mở SPSS

> **Lộ trình:** Practice-first 14 ngày · **Thời lượng:** ~90 phút · **Dataset:** `clinic_bp_v1_clean.csv` (GIẢ LẬP)
> **Trạng thái:** DRAFT — các bước menu mang nhãn `MAC_SPSS_VERIFICATION_PENDING` (chưa chạy kiểm chứng trên Mac thật).

---

## A. Hôm nay bạn sẽ làm gì

1. Mở SPSS trên MacBook.
2. Nhận ra hai "chế độ nhìn" của cùng một cửa sổ dữ liệu: **Data View** (bảng số liệu) và **Variable View** (định nghĩa biến).
3. Nhập một file CSV dữ liệu y khoa vào SPSS.
4. Nhìn bảng dữ liệu và trả lời được: có bao nhiêu dòng, bao nhiêu cột, một dòng là ai.
5. Lưu dữ liệu thành file `.sav` — định dạng riêng của SPSS.

**Mục tiêu tối thiểu:** trong 15–30 phút đầu, bạn đã thấy dữ liệu thật nằm trong SPSS.

## B. Tình huống y khoa

Bác sĩ Lan phụ trách một phòng khám quận. Phòng khám vừa kết thúc đợt theo dõi **160 bệnh nhân
tăng huyết áp** trong 3 tháng và gửi cho bạn một file Excel-export tên `clinic_bp_v1_clean.csv`.

Trước khi phân tích bất cứ điều gì, việc đầu tiên của người làm thống kê là: **mở được file,
nhìn được dữ liệu, và biết mình đang nhìn cái gì.** Đó là toàn bộ bài hôm nay.

## C. Những điều cần biết trước (rất ngắn)

- **Dataset (bộ dữ liệu):** một bảng gồm dòng và cột. Trong dữ liệu y khoa, thường **mỗi dòng là
  một bệnh nhân / một lần đo** — gọi là *đơn vị quan sát*. **Mỗi cột là một biến** — một đặc điểm
  được đo (tuổi, giới, huyết áp…).
- **CSV** (comma-separated values): file văn bản thuần, mỗi dòng một hàng, các ô cách nhau bởi dấu `,`.
  Excel/SPSS đều đọc được. Đây là định dạng "trung lập" để trao đổi dữ liệu.
- **`.sav`** là định dạng riêng của SPSS: lưu cả dữ liệu *và* định nghĩa biến (nhãn, mã, kiểu).
  Quy tắc làm việc: import CSV → lưu ngay một bản `.sav` → từ nay làm việc trên `.sav`.

Vậy thôi. Mọi thứ khác học qua tay.

## D. Thực hành từng bước trên Mac

> ⚠️ **`MAC_SPSS_VERIFICATION_PENDING`** — Các bước dưới viết theo tài liệu IBM SPSS Statistics 32
> nhưng **chưa được chạy kiểm chứng trên máy Mac thật**. Nếu tên menu/hộp thoại trên máy bạn hơi khác:
> (1) ghi lại tên bạn thấy, (2) tìm mục tương đương trong cùng menu, (3) báo người phụ trách để cập nhật.

### Bước 1 — Mở SPSS

1. Chuẩn bị: copy file `clinic_bp_v1_clean.csv` vào thư mục khóa học của bạn
   (gợi ý ở `START-HERE-MAC.md`: `~/Documents/spss-learning/`).
2. Mở **Finder → Applications → IBM SPSS Statistics** (biểu tượng chữ SPSS).
3. Chờ cửa sổ **IBM SPSS Statistics Data Editor** hiện ra — một bảng trống giống Excel.
   *(Nếu có hộp thoại chào mừng "What's New"/"Recent Files" thì cứ đóng nó bằng nút ✕.)*

**Kiểm tra:** nhìn góc dưới-trái cửa sổ — có 2 tab: `Data View` và `Variable View`.

### Bước 2 — Nhận diện Data View vs Variable View

1. Bạn đang ở **Data View**: mỗi ô là một con số/chữ của dữ liệu. Hiện đang trống.
2. Bấm tab **Variable View**: mỗi *dòng* ở đây là định nghĩa của **một biến**
   (tên, kiểu, nhãn…). Cũng đang trống.
3. Bấm lại **Data View**.

Ghi nhớ: *Data View = nhìn số liệu; Variable View = nhìn định nghĩa biến.* Ngày 02 sẽ dùng Variable View nhiều.

### Bước 3 — Import file CSV

1. Menu **File → Import Data → CSV Data** …
   *(Nếu máy bạn không có mục này: dùng **File → Open → Data…**, ở hộp thoại chọn "Files of type" = `CSV (*.csv)`.)*
2. Chọn file `clinic_bp_v1_clean.csv` trong thư mục khóa học → **Open**.
3. SPSS mở một "wizard" hỏi vài câu. Trả lời theo hướng dẫn:
   - *"Read variable names from first row of file?"* → **Yes** (dòng đầu của file chứa tên biến).
   - *"What delimiters appear between variables?"* → **Comma**.
   - *"The decimal symbol is"* → **Period (.)** — file của ta dùng dấu chấm (`25.9`).
   - Các câu khác để mặc định → **Next** → … → **Finish** / **Done**.
4. Data View bây giờ hiện đầy số liệu.

**Kiểm tra ngay:** bảng có **160 dòng dữ liệu** và **12 cột**. Dòng cuối cùng là `P160`.

> 💡 Nếu thấy 161 dòng hoặc cột tên kỳ lạ → có thể bạn mở nhầm `clinic_bp_v1_raw.csv` (bản có lỗi
> dành cho Ngày 03) hoặc chọn sai delimiter. Đóng không lưu, làm lại Bước 3.

### Bước 4 — Đọc bảng như một người làm thống kê

Nhìn vào 5 dòng đầu và trả lời (ghi vào sổ/giấy):

- **Một dòng là ai?** → một *bệnh nhân* (cột `patient_id`: P001, P002…).
- **Một cột là gì?** → một *biến* — đặc điểm được đo cho mỗi bệnh nhân.
- Ô `sbp_baseline` của P001 = **139** — nghĩa là: bệnh nhân P001 có huyết áp tâm thu
  lúc nhập chương trình là 139 mmHg.
- Vài ô `sbp_followup` bị **trống/hiển thị `.`** — nghĩa là bệnh nhân đó không có đo tái khám
  (missing — sẽ hiểu rõ ở Ngày 03).

### Bước 5 — Lưu thành `.sav`

1. **File → Save As…** → điều hướng vào thư mục khóa học.
2. Tên file: `clinic_bp.sav` · "Save as type": **SPSS Statistics (\*.sav)** → **Save**.
3. Đóng SPSS hẳn (⌘Q), mở lại, **File → Open → Data…** → chọn `clinic_bp.sav` → dữ liệu hiện lại.

**Xong.** Bạn vừa hoàn thành vòng đời nhỏ nhất của công việc thống kê: *lấy dữ liệu → nhìn → lưu đúng định dạng.*

## E. Hiểu kết quả của bạn

- Bạn có **1 file `.sav`** chứa 160 bệnh nhân × 12 biến.
- Trong SPSS, `.` trong một ô số = **system missing** (thiếu) — đây là *thông tin*, không phải lỗi phần mềm.
- File CSV gốc vẫn nằm nguyên trong thư mục — chúng ta **không bao giờ sửa file gốc**; mọi thao tác làm trên bản `.sav`.

**Điều hôm nay chưa nói được:** mọi con số tóm tắt (trung bình, tỷ lệ…) — Ngày 04 mới học.
Hôm nay chỉ cần *mở được, nhìn hiểu, lưu đúng.*

## F. Bài tập tự làm

Mở `workbook.md` (hoặc trang *Bài tập Ngày 01* trên website): lặp lại quy trình **không nhìn hướng dẫn**
với file `exercise_hba1c_pairs.csv`, rồi trả lời vài câu kiểm tra quan sát.

## G. Đáp án

Xem `answer-key.md` — chỉ mở sau khi đã tự làm.

## H. Checkpoint qua bài

Bạn qua Ngày 01 khi có đủ:
- [ ] File `clinic_bp.sav` mở lại được trong SPSS.
- [ ] Trả lời được miệng: "160 dòng = 160 bệnh nhân; 12 cột = 12 biến; một ô trống = missing."
- [ ] Nói được Data View và Variable View khác nhau ở điểm nào.

## I. Đọc thêm (không bắt buộc)

- SPSS còn 2 cửa sổ khác bạn sẽ gặp: **Output Viewer** (hiện kết quả phân tích — tự mở khi bạn chạy
  lệnh đầu tiên ở Ngày 03–04) và **Syntax Editor** (ghi lại lệnh dạng text để tái tạo — gặp ở Ngày 11).
- Vì sao không nhập trực tiếp file `.sav` được gửi sẵn? Vì trong thực tế người ta thường trao đổi CSV;
  biết cách import CSV là kỹ năng bắt buộc.
- CSV với dấu phẩy thập phân (kiểu `25,9`) cần chọn "decimal = comma" trong wizard — file của khóa học
  dùng dấu chấm nên chọn Period.
