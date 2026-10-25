# Ngày 04 — Tóm tắt theo nhóm (Select Cases · Split File · Means)

> **Lộ trình:** Exercise-first 14 ngày · **Thời lượng:** ~100 phút · **Dataset:** `exercises/bai_1/p1_B01_HA (1).sav`
> **Trạng thái:** READY v2 (Task 14) — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`; số liệu kiểm chứng Python `NOT_RUN`.
> **Bài tập nguồn hôm nay:** **P1-Q08**, **P1-Q09**, **P1-Q06** (bắt buộc) · **P1-Q41** (luyện thêm) — "Bài thực hành SDH P1".

---

## A. Bài tập gốc — ba câu hỏi, ba cách "chia nhóm"

{{exercise:P1-Q08}}

{{exercise:P1-Q09}}

{{exercise:P1-Q06}}

> **Đọc đề gốc:** `exercises/bai_1/Bai thuc hanh SDH P1.pdf` — trang 1.
> *Tóm tắt:* Câu 8 = lọc nhóm Nam rồi nhóm tuổi 50–70, mỗi lần lập tần số `HVan`;
> Câu 9 = tách file theo giới rồi tần số `HVan` hai nhóm + nhận xét;
> Câu 6 = Mean/SD/khoảng biến thiên của `Tuoi` theo giới tính.

## B. Mục tiêu

Ba câu hỏi nghe giống nhau ("theo giới tính") nhưng đòi **ba công cụ khác nhau** — đây là
bài học chính của hôm nay:

| Nhu cầu | Công cụ | Hiệu ứng |
|---|---|---|
| Chỉ làm việc trên **một nhóm** (ẩn phần còn lại) | **Select Cases** (Ngày 01 đã gặp) | Dòng khác bị gạch chéo — kết quả chỉ của nhóm đó |
| **So sánh hai nhóm** cùng lúc | **Split File** | Mọi output tự tách đôi: bảng Nữ riêng, bảng Nam riêng |
| Bảng **chỉ số theo nhóm** gọn trong 1 bảng | **Means** (Compare Means) | Không cần filter/split — một lệnh ra bảng nhiều nhóm |

Nếu nhầm công cụ: dùng Select khi cần so sánh sẽ phải chạy lại từng nhóm; để Split bật
mà quên tắt sẽ làm mọi output sau này tách đôi.

## C. Dữ liệu cần mở

| Mục | Chi tiết |
|---|---|
| File | `p1_B01_HA (1).sav` — vẫn file gốc, chỉ đọc |
| Biến | `GTinh` (nhóm: 1=Nữ, 2=Nam) · `HVan` (biến mã tần số) · `Tuoi` (biến số) · `HA.GDinh` (BT4) |
| Mẫu | 620 — Select Cases → All cases, Split File → Analyze all cases trước khi bắt đầu |

> 📁 File chưa đúng chỗ? Xem lại [Chuẩn bị dữ liệu](/tai-lieu/chuan-bi-du-lieu/).

## D. Kiến thức cần biết (vừa đủ)

- **Điều kiện kép** trong Select Cases: `Tuoi >= 50 & Tuoi <= 70` — `&` nghĩa "và"
  (còn `|` là "hoặc"). Đề ghi "độ tuổi 50–70" hiểu là **khoảng đóng** [50, 70].
- **Split File ≠ Select Cases:** Split *giữ cả hai nhóm* và lặp phân tích cho từng nhóm —
  vì thế bảng tần số Câu 9 ra **hai bảng**: một cho Nữ, một cho Nam. Đúng cho câu hỏi
  "nhận xét hai nhóm".
- **So sánh chéo:** cột "Nam" của bảng Câu 9 phải trùng hệt bảng Câu 8 (phần Nam) —
  đây là cách tự kiểm tra bạn đã làm đúng.
- **Means** (Analyze → Compare Means → Means…): cho bảng mô tả **theo tầng nhóm** —
  có thể xếp chồng 2 biến nhóm (GTinh rồi HA.GDinh) thành bảng 2 chiều dễ đọc.
- **Nhận xét theo nhóm** = so sánh *cùng một con số* giữa các nhóm (vd % THPT của nữ
  vs nam) — không phải nhận xét từng bảng riêng.

## E. Thực hành có hướng dẫn

> ⚠️ `MAC_SPSS_VERIFICATION_PENDING`

### Bước 1 — Câu 8a: chọn mẫu Nam → tần số HVan

- **Làm:** **Data → Select Cases…** → If condition is satisfied → If… → gõ `GTinh = 2`
  → Continue → OK. Rồi **Analyze → Descriptive Statistics → Frequencies…** → `HVan` → OK.
- **Màn hình mong đợi:** bảng tần số `HVan` với **Total = 244** (chỉ nam).
- **Kiểm chứng:** dòng "Không biết chữ" = **48** (toàn file là 101 — nếu thấy 101 bạn
  quên bật filter).

{{guide:d04-select-age}}

### Bước 2 — Câu 8b: quay về mẫu đầy đủ, rồi chọn tuổi 50–70

- **Làm:** Select Cases → **All cases** → OK (trả 620 dòng).
- **Làm lại:** Select Cases → If… → gõ **`Tuoi >= 50 & Tuoi <= 70`** → Continue → OK →
  chạy lại Frequencies `HVan`.
- **Màn hình mong đợi:** Total = **368** người trong nhóm tuổi 50–70.
- **Nếu sai:** gõ `Tuoi > 50 & Tuoi < 70` (thiếu `=`) sẽ loại người đúng 50 và đúng 70 —
  kết quả lệch. Đề "50–70" hiểu gồm cả hai đầu mút.

### Bước 3 — Câu 9: tách file theo giới tính

- **Làm:** trước hết trả mẫu đầy đủ (Select Cases → All cases).
- **Làm:** **Data → Split File…** → **Compare groups** → đưa `GTinh` vào
  **Groups Based on** → OK.
- **Làm:** chạy Frequencies `HVan` → output giờ có **hai bảng liền nhau**:
  "GTinh = Nữ" (Total 376) và "GTinh = Nam" (Total 244).
- **Kiểm chứng:** cột Nam phải khớp kết quả Câu 8a (48/36/51/67/19/23) — khác nghĩa là
  một trong hai lần sai.
- **Nhận xét (ghi vào đề):** vd "Nữ có tỷ lệ không biết chữ cao hơn nam (53/376 = 14,1%
  vs 48/244 = 19,7%? — **tự so sánh cột %**, đừng so sánh số lượng vì mẫu hai nhóm khác nhau!)".

{{guide:d04-split}}

### Bước 4 — Câu 6: Mean/SD/range của Tuoi theo giới

- **Cách 1 (đang Split):** chạy Descriptives `Tuoi` → hai bảng theo giới. Ghi Mean, SD,
  Range (= Max − Min) cho từng nhóm.
- **Cách 2 (gọn hơn — tắt Split trước):** Split File → **Analyze all cases** → OK.
  Rồi **Analyze → Compare Means → Means…** → `Tuoi` vào **Dependent** → `GTinh` vào
  **Independent** → OK → **một bảng** gồm N, Mean, SD cho cả hai giới.
- **Đọc:** Nữ (GTinh=1): n=376, Mean=67,16, SD=11,06; Nam (GTinh=2): n=244, Mean=66,51,
  SD=10,74. Range tự tính: Nữ 97−41=56, Nam 94−41=53.

{{guide:d04-means}}

### Bước 5 — (Luyện thêm) Câu 41: Means hai tầng nhóm

- **Làm:** Means… → `Tuoi` → Dependent; `GTinh` → Independent; bấm **Next** (Layer 2) →
  `HA.GDinh` → Independent → OK.
- **Bạn thấy:** bảng 4 ô: tuổi trung bình theo giới × tiền sử HA gia đình
  (Nữ có TS: 69,0 · Nữ không: 65,4 · Nam có TS: 67,2 · Nam không: 64,4).
- Đây là câu hỏi "bảng 2 chiều trung bình" — Means xử lý đẹp hơn Split (Split cho 4 bảng rời).

## F. Mô phỏng SPSS

Ba mô phỏng trong Bước 1–4: hộp Select Cases điều kiện kép, hộp Split File + output
hai bảng, hộp Means + bảng report.

## G. Bài tập tự làm

Mở [workbook](/d04/bai-tap/): làm lại **P1-Q08, P1-Q09, P1-Q06** vào đề; BT4 là
**P1-Q41** (luyện thêm) và một câu đố "khi nào dùng Select, khi nào dùng Split".
Nhớ **tắt Split File** trước khi kết thúc buổi học.

## H. Kiểm tra kết quả

- [ ] Câu 8a: bảng `HVan` của Nam có Total **244**; Câu 8b (50–70) Total **368**.
- [ ] Câu 9: hai bảng, cột Nam khớp 8a từng con số.
- [ ] Câu 6: ghi đủ n/Mean/SD/Range từng giới; nữ 376/67,16/11,06/56 · nam 244/66,51/10,74/53.
- [ ] Đã tắt Split File — Frequencies chạy lại chỉ ra **một** bảng Total 620.

## I. Giải thích đáp án

[đáp án](/d04/dap-an/) — bảng đầy đủ cho 8a/8b/9/6/41, cách viết "nhận xét" đúng chuẩn,
và lỗi kinh điển khi dùng Split File.

## J. Chuyển bài

Hôm nay bạn so sánh nhóm bằng **hai bảng riêng**. Nhưng đề còn kiểu hỏi khác: "tỷ lệ
nghèo *theo* giới tính" — cần một **bảng chéo** (2×2) với % hàng/% cột và kiểm định
Chi-square. Đó là toàn bộ Ngày 05.

## K. Đọc thêm (không bắt buộc)

- Pool luyện cùng kỹ năng: P1-Q23 (BMI ở nhóm HA bình thường), P1-Q25 (BMI theo 2 nhóm
  tuổi), P1-Q27 (Cannang theo tiền sử THA), P1-Q30 (BMI ở người ≥2 bệnh mạn tính —
  cần đến Ngày 06 mới có biến đếm bệnh).
- Split File có lựa chọn thứ ba "Organize output by groups" — gộp các nhóm vào **một**
  bảng chung thay vì bảng riêng (tiện so sánh trực tiếp).
