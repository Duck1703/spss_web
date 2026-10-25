# Ngày 06 — Tạo biến mới (Compute · Recode · Count)

> **Lộ trình:** Exercise-first 14 ngày · **Thời lượng:** ~100 phút · **Dataset:** `p1_B01_HA (1).sav` → lưu bản làm việc `p1_B01_work.sav`
> **Trạng thái:** READY v2 (Task 14) — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`; số liệu kiểm chứng Python `NOT_RUN`.
> **Bài tập nguồn hôm nay:** **P1-Q10**, **P1-Q11**, **P1-Q12** — "Bài thực hành SDH P1".

---

## A. Bài tập gốc — ba câu hỏi cần biến chưa có sẵn

{{exercise:P1-Q10}}

{{exercise:P1-Q11}}

{{exercise:P1-Q12}}

> **Đọc đề gốc:** `exercises/bai_1/Bai thuc hanh SDH P1.pdf`, trang 1–2.
> *Tóm tắt:* Câu 10 = tạo BMI rồi thống kê mean/SD/min/max;
> Câu 11 = đổi biến Tuổi thành biến Độ tuổi 4 nhóm, hỏi bao nhiêu người ≥ 70 tuổi;
> Câu 12 = đếm số bệnh mạn tính mỗi người, hỏi bao nhiêu người có ≥ 2 bệnh.

## B. Mục tiêu

Đến giờ bạn toàn phân tích biến **có sẵn**. Hôm nay đề yêu cầu ba thứ file không có:
**BMI** (tính từ 2 biến), **nhóm tuổi** (gộp biến liên tục thành khoảng), và
**số bệnh mạn tính** (đếm ngang nhiều biến). Ba kỹ năng tương ứng — **Compute Variable**,
**Recode into Different Variables**, **Count Values within Cases** — là "bộ ba biến đổi"
mở khóa gần như mọi câu hỏi phía sau của cả hai gói đề.

⚠️ Hôm nay là buổi đầu tiên bạn **thay đổi dataset** (thêm cột mới) → áp dụng ngay quy
tắc vàng: **Save As ra file `_work.sav` mới, tuyệt đối không ghi đè file gốc.**

## C. Dữ liệu cần mở

| Mục | Chi tiết |
|---|---|
| File gốc | `p1_B01_HA (1).sav` — mở như cũ |
| File làm việc | Ngay sau khi mở: **File → Save As…** → `SPSS_Practice/workspace/p1_B01_work.sav` — mọi biến mới lưu vào đây |
| Biến cần | `Cannang`, `Chieucao`, `Tuoi` · `Timmach`, `Tieuduong`, `Than`, `Gan`, `Gut` |
| Biến sẽ tạo | `BMI` (số) · `DoTuoi` (mã 1–4) · `SoBenhMan` (đếm 0–5) |

## D. Kiến thức cần biết (vừa đủ)

- **Đơn vị đo trước khi tính:** `Chieucao` đang là **cm** (min ~140). Công thức BMI
  = cân nặng(kg) / chiều cao(**mét**)² — vậy phải viết `Cannang / (Chieucao/100)**2`.
  Viết `Cannang / Chieucao**2` sẽ ra BMI ≈ 0,002 — sai trắng trợn.
- **Compute ≠ Recode:** Compute tạo biến từ *công thức toán*; Recode *ánh xạ* giá trị
  cũ sang giá trị mới theo khoảng; Count *đếm* số biến có giá trị chỉ định trong mỗi dòng.
- **Recode into DIFFERENT Variables:** luôn chọn "Different Variables" — tạo biến mới
  `DoTuoi` thay vì ghi đè `Tuoi` gốc. (Chọn "Same Variables" = phá dữ liệu gốc của cột đó.)
- **Khoảng recode** cho Câu 11: 40–49→1, 50–59→2, 60–69→3, ≥70→4. File có tuổi min 41
  nên khoảng đầu bắt đầu từ 40 là hợp lệ; dùng "Range" gồm cả hai đầu mút.
- **Đếm bệnh:** `Benh.MT_1`, `Benh.MT_2` là biến **danh mục** (giá trị = loại bệnh 1–5),
  KHÔNG phải biến nhị phân có/không — không đếm được bằng Count=1. Bộ 5 biến
  `Timmach, Tieuduong, Than, Gan, Gut` mới là nhị phân (0=Không, 1=Có) — Count "giá trị 1".
- **Save As vs Save:** file đang mở sau Save As sẽ *trỏ* vào file mới — các thay đổi sau
  đó tự động lưu vào `_work.sav`, file gốc an toàn.

## E. Thực hành có hướng dẫn

> ⚠️ `MAC_SPSS_VERIFICATION_PENDING`

### Bước 0 — Lưu bản làm việc TRƯỚC khi biến đổi

- **Làm:** **File → Save As…** → chọn thư mục `SPSS_Practice/workspace/` → đặt tên
  **`p1_B01_work.sav`** → Save. Thanh tiêu đề đổi sang tên file mới.
- Từ đây mọi biến tạo ra nằm trong bản làm việc; file gốc `p1_B01_HA (1).sav` nguyên vẹn.

### Bước 1 — Câu 10: Compute BMI

- **Làm:** **Transform → Compute Variable…**
  - **Target Variable:** `BMI`
  - **Numeric Expression:** `Cannang / (Chieucao/100)**2`
  - (tuỳ chọn) **Type & Label…** → Label "Chỉ số BMI (kg/m²)" → OK → **OK**.
- **Kiểm tra nhanh:** cuộn sang cột `BMI` cuối bảng — giá trị quanh 15–29 là hợp lý;
  nếu thấy 0,001–0,003 → quên chia 100.
- **Làm:** **Analyze → Descriptive Statistics → Descriptives…** → `BMI` →
  **Options…** tick thêm Minimum/Maximum → OK.
- **Kết quả mong đợi:** n=620, Mean ≈ **20,42**, SD ≈ **1,91**, Min ≈ **15,77**, Max ≈ **28,91**.

{{guide:d06-compute}}

### Bước 2 — Câu 11: Recode Tuổi → DoTuoi

- **Làm:** **Transform → Recode into Different Variables…**
  - Đưa `Tuoi` → ô giữa → ở **Output Variable** gõ Name `DoTuoi`, Label "Nhóm độ tuổi"
    → bấm **Change** (bắt buộc — nếu không SPSS không tạo biến).
- **Làm:** **Old and New Values…** → nhập từng cặp:
  - `Range: 40 through 49` → New Value `1` → **Add**
  - `Range: 50 through 59` → `2` → Add
  - `Range: 60 through 69` → `3` → Add
  - `Range: 70 through highest` → `4` → Add
  - → Continue → OK.
- **Làm (đẹp hơn):** Variable View → dòng `DoTuoi` → Values: 1="40–49", 2="50–59",
  3="60–69", 4="≥70". Measure → **Ordinal**.
- **Làm:** Frequencies `DoTuoi` → bảng mong đợi: `1:54, 2:40, 3:309, 4:217`.
- **Trả lời đề:** số người ≥ 70 tuổi = tần số nhóm 4 = **217** (35,0%).

{{guide:d06-recode}}

### Bước 3 — Câu 12: Count số bệnh mạn tính

- **Làm:** **Transform → Count Values within Cases…**
  - **Target Variable:** `SoBenhMan`, Label "Số bệnh mạn tính"
  - Đưa **5 biến nhị phân** `Timmach, Tieuduong, Than, Gan, Gut` vào **Variables**
    (⚠️ KHÔNG đưa `Benh.MT_1/MT_2` — đó là mã loại bệnh).
  - **Define Values…** → chọn **Value** → gõ `1` → **Add** → Continue → OK.
- **Làm:** Frequencies `SoBenhMan` → phân bố: `0:326, 1:264, 2:30`.
- **Trả lời đề:** số người có **≥ 2 bệnh mạn tính** = nhóm giá trị 2 = **30 người** (4,8%);
  (tham khảo: ≥1 bệnh = 264+30 = **294** người, 47,4%).

{{guide:d06-count}}

### Bước 4 — Lưu bản làm việc

- **File → Save** (đang trỏ `_work.sav`) — ba biến `BMI`, `DoTuoi`, `SoBenhMan` được giữ
  cho các ngày sau (nhiều câu Q23–Q30 cần `SoBenhMan`/nhóm tuổi).

## F. Mô phỏng SPSS

Ba mô phỏng trong Bước 1–3: hộp Compute, hộp Recode + Old/New Values, hộp Count +
Define Values.

## G. Bài tập tự làm

Mở [workbook](/d06/bai-tap/): làm lại **P1-Q10, P1-Q11, P1-Q12** vào đề và một bài
đếm kiểm chéo bằng `Benh.MT_1/MT_2` để hiểu sự khác nhau giữa biến nhị phân và danh mục.

## H. Kiểm tra kết quả

- [ ] Cột `BMI` quanh 15–29 (không phải ~0,002); Descriptives: Mean≈20,42/SD≈1,91.
- [ ] `DoTuoi` có 4 nhóm đủ mã 1–4; nhóm 4 = **217**; total = 620 (không dòng missing).
- [ ] `SoBenhMan` phân bố 0:326 / 1:264 / 2:30; ≥2 bệnh = **30**.
- [ ] File gốc vẫn chỉ 40 biến; `_work.sav` có 43 biến.

## I. Giải thích đáp án

[đáp án](/d06/dap-an/) — đầy đủ công thức/ánh xạ/giá trị kỳ vọng, lỗi unit-conversion
và phân biệt 5 biến nhị phân vs `Benh.MT_1/MT_2`.

## J. Chuyển bài

Từ ngày mai khóa học sang **bài 2**: file mới `File1.sav` trở đi — biến tên khác,
codebook riêng. Bạn sẽ phải tự xác định biến nào trả lời câu hỏi nào — kỹ năng đọc
codebook + kiểm tra Values của 3 ngày đầu bây giờ là cứu cánh. Ngày 07–09: so sánh
trung bình (t-test, ANOVA) trên gói P2.

## K. Đọc thêm (không bắt buộc)

- Cùng kết quả đếm có thể kiểm chứng bằng `Benh.MT_1`/`Benh.MT_2`: đếm số ô **không
  missing** (đó là nơi bác sĩ ghi mã bệnh thứ 1, thứ 2) — ra hệt {0:326, 1:264, 2:30}.
  Hai cách lưu dữ liệu bệnh khác nhau nhưng phải cho cùng kết quả — bài tập suy luận hay.
- `Compute` còn dùng được hàm `MEAN()`, `SUM()`, `RND()` trong Numeric Expression —
  vd `MEAN(Tuoi, Cannang)` tính trung bình trên từng dòng (bỏ qua missing).
- Recode có thể tạo biến phân loại cho bảng chéo ngày 05 — vd recode `BMI` thành
  nhóm <18,5 / 18,5–23 / ≥23 (chuẩn châu Á) rồi crosstabs với giới tính.
