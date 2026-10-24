# Ngày 02 — Biến và mã hóa trong Variable View

> **Lộ trình:** Practice-first 14 ngày · **Thời lượng:** ~90–120 phút · **Dataset:** `clinic_bp.sav` (file bạn đã lưu Ngày 01)
> **Trạng thái:** DRAFT — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`.

---

## A. Hôm nay bạn sẽ làm gì

1. Mở Variable View và hiểu từng cột: `Name`, `Type`, `Label`, `Values`, `Missing`, `Measure`.
2. Viết **Variable Label** tiếng Việt cho các biến.
3. Gắn **Value Labels** cho biến mã hóa (1 = Nữ, 2 = Nam…).
4. Chọn đúng **Measure**: Nominal / Ordinal / Scale.
5. Đối chiếu định nghĩa biến với **codebook** của dataset.

## B. Tình huống y khoa

Bạn mở `clinic_bp.sav` cho đồng nghiệp xem. Cô ấy hỏi: "`sex_code` = 1 là nam hay nữ?
`smoking_status` = 1 là đang hút hay đã bỏ?" — Bạn không trả lời được nếu file chỉ có con số trần.

Hôm nay ta làm cho file **tự giải thích được chính nó**: ai mở cũng hiểu 1 là gì, 2 là gì —
đó chính là việc điền Variable View. Trong nghiên cứu thật, thông tin này được ghi trong
**codebook** (sổ tay của dataset) — file của ta có sẵn một codebook để đối chiếu.

## C. Những điều cần biết trước

- **Mã hóa (coding):** biến định tính thường được ghi bằng số cho gọn — `1 = Nữ`, `2 = Nam`.
  Con số chỉ là *nhãn*, không mang ý nghĩa toán (không ai tính "giới trung bình = 1,5").
- **Measure trong SPSS** — ba mức đo:
  - `Nominal` — định tính không thứ tự (giới, nhóm máu, có/không bệnh).
  - `Ordinal` — định tính **có thứ tự** nhưng khoảng cách không đều (đau nhẹ/vừa/nặng).
  - `Scale` — định lượng (tuổi, BMI, huyết áp).
  Chọn sai Measure không làm hỏng dữ liệu, nhưng SPSS dùng nó để gợi ý biểu đồ/phép phân tích —
  nên chọn đúng ngay từ đầu.
- **Quy ước tên biến:** chỉ ký tự ASCII không dấu, không khoảng trắng (`age_years` ✓, `Tuổi` ✗).
  Tiếng Việt có dấu để ở **Label**, không để ở Name.

## D. Thực hành từng bước trên Mac

> ⚠️ `MAC_SPSS_VERIFICATION_PENDING` — checklist kiểm tra ở cuối phần D.

### Bước 1 — Mở file và vào Variable View

1. Mở `clinic_bp.sav` (File → Open → Data…).
2. Bấm tab **Variable View** (góc dưới-trái). Mỗi dòng = một biến; mỗi cột = một thuộc tính.
   Quan sát các cột: `Name`, `Type`, `Width`, `Decimals`, `Label`, `Values`, `Missing`,
   `Columns`, `Align`, `Measure`, `Role`.

### Bước 2 — Điền Variable Label

Với mỗi biến, bấm vào ô `Label` của dòng tương ứng, gõ nhãn tiếng Việt có dấu:

| Biến | Label gõ vào |
|---|---|
| `patient_id` | Mã bệnh nhân (giả lập) |
| `age_years` | Tuổi (năm) |
| `sex_code` | Giới |
| `bmi` | Chỉ số khối cơ thể (kg/m²) |
| `sbp_baseline` | HA tâm thu lúc nhập (mmHg) |
| `treatment_group` | Nhóm điều trị |
| `adherence_score` | Điểm tuân thủ điều trị (0–100) |
| `diabetes_flag` | Có đái tháo đường |
| `smoking_status` | Tình trạng hút thuốc |
| `sbp_followup` | HA tâm thu sau 3 tháng (mmHg) |
| `followup_completed` | Hoàn thành tái khám 3 tháng |
| `bp_controlled` | HA đạt kiểm soát sau 3 tháng |

*(Label lấy từ codebook `datasets/codebooks/clinic_bp_codebook.md` — đối chiếu, không tự bịa.)*

### Bước 3 — Gắn Value Labels

1. Ở dòng `sex_code`, bấm ô `Values` → nút **…** → hộp **Value Labels** mở ra.
2. Ô **Value**: gõ `1` · ô **Label**: gõ `Nữ` → **Add**.
3. Lặp lại: `2` → `Nam` → **Add** → **OK**.
4. Làm tương tự cho các biến mã hóa (tra codebook):

| Biến | Value → Label |
|---|---|
| `diabetes_flag` | 0 = Không · 1 = Có |
| `smoking_status` | 0 = Không hút · 1 = Đã bỏ · 2 = Đang hút |
| `followup_completed` | 0 = Không · 1 = Có |
| `bp_controlled` | 0 = Không (≥140 mmHg) · 1 = Có (<140 mmHg) |

*( `treatment_group` là biến chữ A/B — Value Labels cũng gắn được, tùy chọn: `A` = Điều trị chuẩn, `B` = Chuẩn + hỗ trợ tuân thủ.)*

**Kiểm tra:** quay lại Data View → menu **View → Value Labels** (bật/tắt hiển thị nhãn).
Khi bật, ô `sex_code` hiển thị "Nữ"/"Nam" thay vì 1/2. Bật/tắt vài lần cho quen.

### Bước 4 — Chọn Measure đúng

Ở cột `Measure`, chọn theo codebook:

| Measure | Biến |
|---|---|
| `Scale` | `age_years`, `bmi`, `sbp_baseline`, `adherence_score`, `sbp_followup` |
| `Nominal` | `patient_id`, `sex_code`, `treatment_group`, `diabetes_flag`, `smoking_status`, `followup_completed`, `bp_controlled` |
| `Ordinal` | *(dataset này chưa có biến thứ bậc — sẽ gặp ở bài tập BT3)* |

**Tự hỏi để chọn:** "trung bình của biến này có nghĩa không?" → có = Scale; không nhưng có thứ tự = Ordinal; còn lại = Nominal.

### Bước 5 — Cột Missing

Nhìn cột `Missing` trong Variable View. Dataset sạch dùng **ô trống = system missing** —
không cần khai báo mã missing ở đây. *(Ngày 03 sẽ gặp trường hợp cần khai báo thật.)*

### Bước 6 — Lưu lại

**File → Save** (ghi đè `clinic_bp.sav` là được — đây là bản làm việc của bạn, không phải file raw CSV).

## E. Hiểu kết quả của bạn

- File `clinic_bp.sav` giờ **tự mang theo định nghĩa**: nhãn biến, nhãn giá trị, mức đo.
  Đây là lý do `.sav` tốt hơn CSV cho công việc nội bộ — CSV không lưu được các thông tin này.
- Kiểm chứng nhanh: vào **Analyze → Descriptive Statistics → Frequencies…**, đưa `sex_code`
  vào ô Variable(s) → OK. Output hiện bảng tần số **kèm nhãn "Nữ/Nam"** thay vì 1/2 —
  dấu hiệu Value Labels hoạt động. *(Đây là lần đầu thấy Output Viewer — chỉ cần nhìn, chưa cần hiểu sâu.)*

**Điều hôm nay chưa nói được:** bảng tần số đó có ý nghĩa gì về mặt thống kê — Ngày 04 học kỹ.

## F. Bài tập tự làm

`workbook.md`: điền định nghĩa cho dataset `exercise_hba1c_pairs.csv` + một bảng biến mới tự xây,
và câu hỏi nhận diện kiểu biến/Measure.

## G. Đáp án

`answer-key.md` — chỉ mở sau khi tự làm.

## H. Checkpoint qua bài

- [ ] File `clinic_bp.sav` mở ra có đủ 12 Label và Value Labels cho 5 biến mã hóa.
- [ ] Bật `View → Value Labels` thấy chữ thay vì số.
- [ ] Trả lời được: vì sao `sex_code` ghi số mà vẫn là Nominal? Vì sao `patient_id` không phải Scale?

## I. Đọc thêm (không bắt buộc)

- **`Role` = Input:** khai báo vai trò của biến khi dùng các wizard nâng cao — ở mức nhập môn để mặc định.
- **Missing rời rạc (discrete missing):** ngoài ô trống, SPSS cho phép khai báo tới 3 mã số làm
  "missing" (ví dụ 99 = từ chối trả lời). Dataset thật hay dùng quy ước này — Ngày 03 sẽ gặp.
- **Type = Date/String:** cột ngày tháng và chữ có cách định nghĩa riêng; khóa này chủ yếu dùng
  Numeric + một cột String (`patient_id`, `treatment_group`).
