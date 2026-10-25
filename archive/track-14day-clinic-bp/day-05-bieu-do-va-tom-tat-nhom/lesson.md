# Ngày 05 — Biểu đồ và mô tả theo nhóm

> **Lộ trình:** Practice-first 14 ngày · **Thời lượng:** ~90–120 phút · **Dataset:** `clinic_bp_my_clean.sav`
> **Trạng thái:** DRAFT — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`.

---

## A. Hôm nay bạn sẽ làm gì

1. Vẽ **bar chart** cho biến định tính và **histogram** cho biến định lượng.
2. Vẽ **boxplot** so sánh một biến định lượng giữa các nhóm.
3. Dùng **Means** để xem thống kê mô tả theo từng nhóm.
4. Nhận ra giá trị bất thường trên hình và viết một đoạn mô tả ngắn.

## B. Tình huống y khoa

Bảng 1 ở Ngày 04 cho bác sĩ Lan các con số. Nhưng con số không cho thấy *hình dạng* dữ liệu:
huyết áp có phân bố đều quanh trung bình không? Có bệnh nhân nào "xa hẳn" không? Nhóm A và nhóm B
nhìn lướt qua có khác nhau không?

Hôm nay bạn *nhìn* dữ liệu — kỹ năng mà nhiều người bỏ qua rồi hối hận.

## C. Những điều cần biết trước

- **Chọn biểu đồ theo kiểu biến:** định tính → **bar chart** (đếm theo nhóm);
  định lượng → **histogram** (phân phối tần số theo khoảng giá trị).
  *Cấm kinh điển:* bar chart cho biến số, hay "histogram" cho giới tính.
- **Phân phối:** hình dạng các giá trị trải ra. "Chuông" đối xứng → mean/SD ổn;
  lệch (đuôi dài) → median/IQR hợp lý hơn.
- **Boxplot:** hộp = khoảng IQR (50% giữa), vạch giữa hộp = median, "râu" + các chấm xa = cực trị.
  Đặt hai hộp cạnh nhau để so nhóm nhanh.
- **Outlier trên hình ≠ lỗi:** chấm xa có thể là giá trị thật — quay lại nguyên tắc Ngày 03:
  kiểm tra ngữ cảnh trước khi động vào.

## D. Thực hành từng bước trên Mac

> ⚠️ `MAC_SPSS_VERIFICATION_PENDING`

### Bước 1 — Bar chart cho biến định tính

**Graphs → Legacy Dialogs → Bar…** → chọn **Simple** → **Define** →
đưa `diabetes_flag` vào ô **Category Axis** → OK.

- Trục X = các mã (0/1, hiển thị nhãn "Không/Có" nhờ Value Labels), trục Y = số đếm.
- Kỳ vọng: cột "Không" ≈ 99, cột "Có" ≈ 60 (`NOT_RUN`, Python cross-check).

*(Trong SPSS 27+ cũng có **Graphs → Chart Builder…** — Gallery → Bar → Simple Bar, kéo biến vào trục X.
Cả hai đường đều đúng.)*

### Bước 2 — Histogram cho biến định lượng

**Graphs → Legacy Dialogs → Histogram…** → đưa `sbp_baseline` vào **Variable** →
tick **Display normal curve** → OK.

Nhìn hình: đối xứng gần chuông? Có cột lẻ loi xa không?
Kỳ vọng: hình gần chuông, tâm quanh ~139 mmHg, không có cột cô lập.

Lặp lại cho `adherence_score` → bạn sẽ thấy hình **lệch trái** (đuôi kéo về điểm thấp) —
giải thích vì sao Ngày 04 báo cáo median thay vì mean.

### Bước 3 — Boxplot so sánh hai nhóm

**Graphs → Legacy Dialogs → Boxplot…** → **Simple** → tick **"Summaries for groups of cases"** →
Define → **Variable:** `sbp_followup` · **Category Axis:** `treatment_group` → OK.

Nhìn: hộp của nhóm B thấp hơn nhóm A (kỳ vọng median thấp hơn ~10 mmHg). Chấm tròn/sao xa hộp =
giá trị cực trị tiềm năng — SPSS ghi số dòng bên cạnh, có thể tra lại trong Data View.

### Bước 4 — Tóm tắt theo nhóm bằng Means

**Analyze → Compare Means → Means…** → `sbp_followup` vào **Dependent List**,
`treatment_group` vào **Independent List** → OK.

Output cho bảng mean/SD/N theo từng nhóm. Kỳ vọng (`NOT_RUN`):
**A: n=74, mean=140,5, SD=16,4 · B: n=63, mean=128,7, SD=19,2.**

*(Đây là *mô tả theo nhóm* — chưa phải kiểm định. "Khác nhau có ý nghĩa không" học Ngày 06.)*

### Bước 5 — Viết đoạn mô tả

Viết 3–4 câu mô tả những gì hình cho thấy — mẫu:

> "Huyết áp tâm thu lúc nhập phân bố gần đối xứng, tâm quanh 139 mmHg, không có giá trị cô lập
> bất thường. Điểm tuân thủ lệch trái — đa số bệnh nhân trên 60 điểm. Boxplot cho thấy
> huyết áp sau 3 tháng của nhóm B thấp hơn nhóm A (median ~… vs ~…); [nếu có] một giá trị cực trị
> thấp ở nhóm … cần kiểm tra lại hồ sơ."

## E. Hiểu kết quả của bạn

- Bạn có 3 loại hình + 1 bảng theo nhóm. Hình cho thấy *hình dạng và cực trị* mà bảng số không lộ.
- So sánh nhóm bằng mắt chỉ là **mô tả** — để kết luận "khác biệt có ý nghĩa" cần kiểm định (Ngày 06).
- Chấm cực trị trên boxplot **không tự động là lỗi** — chỉ là điểm cần kiểm tra.

## F. Bài tập tự làm

`workbook.md` — vẽ thêm 2 hình khác và chọn đúng loại biểu đồ cho tình huống mới.

## G. Đáp án

`answer-key.md`.

## H. Checkpoint qua bài

- [ ] 1 bar chart + 2 histogram + 1 boxplot đã tạo (xem được trong Output Viewer).
- [ ] Đoạn mô tả 3–4 câu viết xong, có nhắc cực trị nếu thấy.
- [ ] Trả lời được: vì sao không vẽ histogram cho `smoking_status`?

## I. Đọc thêm (không bắt buộc)

- **Chart Builder** mạnh hơn Legacy Dialogs (kéo-thả, đổi màu, panel theo nhóm) — cùng một nguyên lý.
- **Nhìn lệch bằng số:** Explore cho thêm chỉ số skewness/kurtosis; ở mức nhập môn, mắt + histogram
  là đủ để chọn mean vs median.
- **Boxplot nhiều trục:** "Clustered boxplot" cho phép so theo 2 biến nhóm cùng lúc
  (vd: nhóm điều trị × giới) — hữu ích khi khám phá, không bắt buộc.
