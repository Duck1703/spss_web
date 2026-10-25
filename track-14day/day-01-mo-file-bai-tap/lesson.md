# Ngày 01 — Mở file bài tập & đọc dữ liệu

> **Lộ trình:** Exercise-first 14 ngày · **Thời lượng:** ~90 phút · **Dataset:** `exercises/bai_1/p1_B01_HA (1).sav`
> **Trạng thái:** READY v1 (Task 13) — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`; số liệu kiểm chứng Python `NOT_RUN`.
> **Bài tập nguồn hôm nay:** **P1-Q01** — trang 1, "Bài thực hành SDH P1".

---

## A. Bài tập gốc — bạn sẽ giải bài này hôm nay

{{exercise:P1-Q01}}

> **Đọc đề gốc:** mở `exercises/bai_1/Bai thuc hanh SDH P1.pdf`, trang 1, Câu 1.
> (Tóm tắt cho phép: tìm **mã số** những người có **cân nặng nhỏ nhất** trong nhóm **giới tính Nam**,
> kèm tuổi tương ứng.)

## B. Mục tiêu

Để trả lời Câu 1 bạn phải: (1) mở đúng file `.sav`; (2) hiểu dữ liệu đang nhìn là gì;
(3) xác định đâu là biến cân nặng, đâu là biến giới tính — và mã nào là "Nam";
(4) lọc ra nhóm Nam và sắp xếp theo cân nặng để đọc mã số. Hôm nay bạn học đúng bốn việc đó.

## C. Dữ liệu cần mở

| Mục | Chi tiết |
|---|---|
| File | `p1_B01_HA (1).sav` — trong thư mục `exercises/bai_1/` của khóa học (file local, không tải online) |
| Cỡ | 620 dòng × 40 biến — mỗi dòng = một người tham gia khảo sát sức khỏe |
| Biến bài này cần | `ID` (mã số), `GTinh` (giới tính), `Cannang` (cân nặng, kg), `Tuoi` (tuổi) |
| Codebook | Không có file riêng — nhãn biến & nhãn giá trị nằm ngay trong file `.sav` (xem ở Variable View) |

> ⚠️ **Quy tắc vàng của khóa học:** không bao giờ sửa/lưu đè file gốc trong `exercises/`.
> Hôm nay chỉ MỞ và NHÌN — chưa lưu gì. Từ ngày mai mọi biến đổi sẽ lưu ra file `*_work.sav` mới.

## D. Kiến thức cần biết (vừa đủ)

- **Data View vs Variable View:** Data View = lưới số liệu (mỗi dòng một người, mỗi cột một biến);
  Variable View = bảng *định nghĩa* từng biến (Name, Label, Values, Type, Measure…).
- **Variable ≠ Label:** cột `GTinh` chỉ chứa số 1/2. `1 = Nữ`, `2 = Nam` là *nhãn giá trị*
  (value label) khai trong Variable View → cột **Values**. Với file này mã **ngược trực giác**
  (nữ=1, nam=2) — đừng bao giờ đoán mã, luôn mở Values kiểm tra.
- **Sort vs Select:** `Data → Sort Cases` đổi *thứ tự hiển thị* các dòng (dữ liệu không mất);
  `Data → Select Cases → If` chỉ *lọc tạm* các dòng thỏa điều kiện (dòng bị loại hiện gạch chéo
  — vẫn còn trong file). Cả hai đều **không phá hủy** dữ liệu.
- **Đơn vị quan sát:** một dòng = một người trả lời phiếu. `ID` là mã phiếu — đây chính là
  "mã số" mà Câu 1 yêu cầu tìm.

## E. Thực hành có hướng dẫn

> ⚠️ `MAC_SPSS_VERIFICATION_PENDING` — mỗi bước có mục "Nếu sai", đừng bỏ qua.
> Mỗi khối **MÔ PHỎNG** bên dưới vẽ lại màn hình SPSS để bạn đối chiếu — bấm các mục
> được đánh số giống hệt thao tác thật.

### Bước 1 — Mở file `.sav` trong SPSS

- **Bạn đang ở:** màn hình máy tính → mở IBM SPSS Statistics.
- **Làm:** menu **File → Open → Data…** → điều hướng tới `exercises/bai_1/` →
  chọn **`p1_B01_HA (1).sav`** → **Open**.
- **Màn hình mong đợi:** Data Editor hiện bảng dữ liệu; thanh tiêu đề ghi tên file.
- **Kiểm chứng:** cuộn xuống cuối — dòng cuối là **620**. Có 40 cột.
- **Nếu sai:** mở nhầm cửa sổ Output/Syntax → **File → New → Data** rồi Open lại.
  Không thấy file `.sav` → kiểm tra ô "Files of type" = `SPSS Statistics (*.sav)`.

{{guide:d01-open-sav}}

### Bước 2 — Đọc file như người làm thống kê (Variable View)

- **Làm:** bấm tab **Variable View** (góc dưới-trái).
- **Tìm 4 biến của bài:** gõ/cuộn tới `ID`, `GTinh`, `Cannang`, `Tuoi`.
  - `ID` — Label "Mã số bệnh nhân".
  - `GTinh` — Label "Giới tính"; bấm ô cột **Values** của dòng này → nút `…` →
    hộp Value Labels hiện: **`1 = "Nữ"`, `2 = "Nam"`**. ← Ghi nhớ: **Nam = 2**.
  - `Cannang` — "Cân nặng (kg)". `Tuoi` — "Tuổi".
- **Làm:** bấm lại **Data View** → menu **View → Value Labels** (bật/tắt hiển thị nhãn):
  khi bật, ô giới tính hiện chữ "Nam"/"Nữ" thay vì số.
- **Nếu sai:** không thấy cột Values → bạn đang ở Data View, chuyển tab trước.

{{guide:d01-varview}}

### Bước 3 — Chọn mẫu: chỉ giữ nhóm Nam

- **Làm:** menu **Data → Select Cases…** → chọn **If condition is satisfied** → **If…** →
  gõ **`GTinh = 2`** → **Continue** → **OK**.
- **Màn hình mong đợi:** các dòng nữ bị gạch chéo ở cột số dòng; thanh trạng thái dưới
  cùng ghi `Filter On` (hoặc xuất hiện biến `filter_$` tạm thời).
- **Kiểm chứng:** bảng chỉ còn **244 dòng dùng được** (đúng số nam trong file).
- **Nếu sai:** gõ `GTinh = 1` sẽ ra 376 dòng — đó là nữ; sửa lại điều kiện.

{{guide:d01-select}}

### Bước 4 — Sắp xếp theo cân nặng và đọc mã số

- **Làm:** menu **Data → Sort Cases…** → đưa `Cannang` sang **Sort by** →
  **Ascending** → **OK**.
- **Làm:** nhìn các dòng đầu tiên (chỉ nhóm Nam đang được lọc): đọc `Cannang` nhỏ nhất
  và `ID` tương ứng.
- **Kiểm chứng:** cân nặng nhỏ nhất ở nhóm nam là **45 kg** — có **4 người** cùng nặng 45 kg
  (ID: **89, 167, 429, 507** — tuổi lần lượt 85, 84, 85, 84). *(Số liệu `NOT_RUN` — đối chiếu khi chạy thật.)*
- **Nếu sai:** thấy cân nặng ~41–44 kg → bạn chưa bật filter Nam (đang tính cả nữ).
  Thấy thứ tự giảm dần → chọn Descending; sửa lại Ascending.

{{guide:d01-sort}}

### Bước 5 — Trả về mẫu đầy đủ & đóng an toàn

- **Làm:** **Data → Select Cases…** → **All cases** → **OK** (gạch chéo biến mất).
- **Làm:** đóng SPSS **không lưu** (File → Close → Don't Save; hoặc thoát hẳn).
  File `p1_B01_HA (1).sav` phải còn nguyên.

## F. Mô phỏng SPSS — đã có ở mục E

Các khung hình mô phỏng nằm ngay trong từng bước ở trên (Bước 1–4). Chọn hệ điều hành
của bạn ở đầu trang để hình phím tắt/menu khớp máy bạn.

## G. Bài tập tự làm — quay lại bài tập gốc

Mở [workbook](/d01/bai-tap/): làm lại **P1-Q01** không nhìn hướng dẫn, sau đó hai bài
mở rộng cùng kỹ năng (tìm người **nữ** cân nặng nhỏ nhất; tìm người **lớn tuổi nhất**
của toàn file) để luyện tư duy lọc + sắp xếp.

## H. Kiểm tra kết quả — bạn đúng khi nào

- [ ] Số dòng khi filter Nam = **244** (status bar/bảng tần số cho thấy).
- [ ] `Cannang` nhỏ nhất trong nhóm Nam = **45**; tìm đủ **4 mã số** chứ không chỉ 1.
- [ ] Mở lại file lần nữa → sort/filter đã trả về trạng thái bạn để lại; file gốc không đổi.
- [ ] Nói được vì sao phải kiểm `Values` của `GTinh` trước khi lọc (mã ngược 1=Nữ/2=Nam).

## I. Giải thích đáp án (mở sau khi tự làm)

Xem [đáp án](/d01/dap-an/) — ngoài con số, phần quan trọng là *vì sao có tới 4 đáp án*
(dữ liệu cho nhiều người cùng cân nặng nhỏ nhất — đề hỏi "những người", số nhiều).

## J. Chuyển bài

Kỹ năng mang theo sang Ngày 02: **đọc nhãn giá trị** (HVan: mã nào = "không biết chữ"?),
**Filter/Select Cases** sẽ tái dùng liên tục. Ngày 02 bạn sẽ chạy lệnh phân tích đầu tiên
(**Frequencies**) để trả lời Câu 2 — số lượng & % người không biết chữ — và Câu 38.

## K. Đọc thêm (không bắt buộc)

- `So_Lieu_NC.sav` trong cùng thư mục cũng mở được bằng cách trên — thử mở và đếm số
  dòng/biến (360 × 38) như bài tập khởi động; file này không có bài tập gắn sẵn trong PDF.
- SPSS có 2 cửa sổ khác sẽ gặp từ ngày mai: **Output Viewer** (kết quả phân tích — tự bật
  khi chạy Frequencies) và **Syntax Editor** (ghi lệnh dạng text).
- Muốn xem biến nào thiếu dữ liệu nhanh: Variable View có cột **Missing** — file này có vài
  biến khai missing (vd `Benh.MT_1/2` trống = người không có bệnh mạn tính tương ứng).
