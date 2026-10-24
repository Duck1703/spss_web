# Ngày 02 — Biến và mã hóa trong Variable View

> **Lộ trình:** Practice-first 14 ngày · **Thời lượng:** ~90–120 phút · **Dataset:** `clinic_bp.sav` (file bạn đã lưu Ngày 01)
> **Trạng thái:** DRAFT v2 (rebuild Task 11) — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`.

---

## A. Điểm xuất phát — bạn cần có sẵn gì

- [ ] File **`clinic_bp.sav`** trong `~/Documents/spss-learning/` — tạo ở Ngày 01.
  *Chưa có?* Quay lại Ngày 01 Bước 3–6 (import `clinic_bp_v1_clean.csv` → Save As `clinic_bp.sav`).
- [ ] File **`hba1c_pairs.sav`** — tạo ở workbook Ngày 01 (BT1). *Chưa có?* Import
  `exercise_hba1c_pairs.csv` → Save As `hba1c_pairs.sav`, mất ~3 phút.
- [ ] **Codebook** `datasets/codebooks/clinic_bp_codebook.md` — mở sẵn bằng trình duyệt
  để tra khi cần (là "sổ tay định nghĩa" của dataset).

Hôm nay bạn sẽ ở **Variable View** gần như cả buổi — tab thứ hai ở góc dưới-trái mà
Ngày 01 chỉ mới nhìn qua.

## B. Tình huống y khoa

Bạn mở `clinic_bp.sav` cho đồng nghiệp xem. Cô ấy hỏi: "`sex_code` = 1 là nam hay nữ?
`smoking_status` = 1 là đang hút hay đã bỏ?" — Bạn không trả lời được nếu file chỉ có
con số trần.

Hôm nay ta làm cho file **tự giải thích được chính nó**: ai mở cũng hiểu 1 là gì, 2 là gì.
Trong nghiên cứu thật, thông tin này ghi trong **codebook** — và `.sav` cho phép lưu nó
*ngay trong file dữ liệu*. CSV không làm được điều đó.

## C. Chỉ cần biết điều này trước

- **Mã hóa (coding):** biến định tính ghi bằng số cho gọn — `1 = Nữ`, `2 = Nam`.
  Con số chỉ là *nhãn*, không mang ý nghĩa toán (không ai tính "giới trung bình = 1,5").
- **Ba thành phần định nghĩa** bạn điền hôm nay:
  - **Label** — tên đầy đủ của biến ("Giới", "Tuổi (năm)").
  - **Value Labels** — nghĩa của từng mã số (`1 = Nữ`, `2 = Nam`).
  - **Measure** — mức đo: `Nominal` (định tính không thứ tự), `Ordinal` (có thứ tự,
    khoảng cách không đều), `Scale` (định lượng). Chọn sai không hỏng dữ liệu nhưng
    SPSS sẽ gợi ý phân tích sai — nên chọn đúng ngay.
- **Quy ước tên biến:** chỉ ASCII không dấu, không khoảng trắng (`age_years` ✓, `Tuổi` ✗).
  Tiếng Việt có dấu để ở **Label**, không để ở Name.

## D. Làm theo từng bước

> ⚠️ `MAC_SPSS_VERIFICATION_PENDING` — ảnh chụp thật chờ pilot (mục E); mỗi bước có
> "Nếu sai". 📸 `[SHOT-x]` = ảnh cần chụp.

### Bước 1 — Mở file và vào Variable View

- **Làm:** mở `clinic_bp.sav` (File → Open → Data…).
- **Làm:** bấm tab **Variable View** (góc dưới-trái).
- **Màn hình mong đợi:** một bảng — **mỗi dòng = một biến** (12 dòng), **mỗi cột = một
  thuộc tính** (`Name, Type, Width, Decimals, Label, Values, Missing, Columns, Align,
  Measure, Role`). `[SHOT-5]`
- **Nhận biết nhanh các cột quan trọng hôm nay:** `Label` (đang trống), `Values` (đang
  "None"), `Missing` ("None"), `Measure` (đa số "Unknown" — SPSS đoán khi import).
- **Nếu sai:** chỉ thấy 3–4 cột → kéo thanh cuộn ngang dưới bảng, hoặc kéo rộng cửa sổ —
  Variable View có 11 cột.

### Bước 2 — Điền Variable Label cho 12 biến

Với mỗi dòng: **bấm vào ô `Label` → gõ nhãn tiếng Việt** (được dấu bình thường) → Enter
hoặc bấm ô khác để ghi. Tra codebook, không tự bịa:

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

- **Nếu sai:** gõ nhầm → bấm lại ô đó sửa — Label chỉ là chữ hiển thị, sửa bao nhiêu lần
  cũng được, không ảnh hưởng dữ liệu.

### Bước 3 — Gắn Value Labels (làm kỹ từng click ở `sex_code`)

- **Bạn đang ở:** Variable View, dòng `sex_code`.
- **Làm:** bấm ô `Values` → xuất hiện nút **…** (ba chấm) ở mép phải ô → bấm **…**.
- **Màn hình mong đợi:** hộp thoại **Value Labels** mở ra — có 2 ô nhập (`Value`, `Label`)
  và 3 nút (`Add`, `Change`, `Remove`). `[SHOT-6]`

```
┌─ Value Labels ──────────────────────────┐
│  Value: [    ]   Label: [            ]  │
│  [ Add ] [ Change ] [ Remove ]          │
│  ┌────────────────────────────────┐     │
│  │ (danh sách mã → nhãn hiện ở đây)│     │
│  └────────────────────────────────┘     │
│                    [ OK ] [ Cancel ]    │
└─────────────────────────────────────────┘
```

- **Làm:** gõ ô **Value** = `1`, ô **Label** = `Nữ` → bấm **Add** → cặp `1 = "Nữ"` hiện
  trong danh sách. Lặp lại: `2` = `Nam` → **Add** → **OK**.
- **Kiểm chứng:** quay lại Variable View — ô `Values` của `sex_code` giờ hiển thị
  `{1, Nữ}…` thay vì "None".
- **Làm tương tự** cho các biến mã hóa còn lại (tra codebook):

| Biến | Value → Label |
|---|---|
| `diabetes_flag` | 0 = Không · 1 = Có |
| `smoking_status` | 0 = Không hút · 1 = Đã bỏ · 2 = Đang hút |
| `followup_completed` | 0 = Không · 1 = Có |
| `bp_controlled` | 0 = Không (≥140 mmHg) · 1 = Có (<140 mmHg) |

*( `treatment_group` là biến chữ A/B — gắn cũng được: `A` = Điều trị chuẩn,
`B` = Chuẩn + hỗ trợ tuân thủ.)*

- **Nếu sai:**
  - Gắn nhầm `1 = Nam` → mở lại hộp Value Labels, **bấm chọn dòng sai trong danh sách** →
    sửa ô Label → **Change** (không phải Add — Add sẽ báo trùng mã).
  - Muốn xóa hẳn một dòng → chọn dòng đó → **Remove**.

### Bước 4 — Xem nhãn hoạt động trong Data View

- **Làm:** về **Data View** → menu **View → Value Labels** (bấm để bật/tắt — có dấu ✓ khi bật).
- **Màn hình mong đợi:** khi bật, ô `sex_code` hiển thị **"Nữ"/"Nam"** thay vì 1/2.
  Bật/tắt vài lần cho quen — dữ liệu bên dưới không đổi, chỉ *cách hiển thị* đổi. `[SHOT-7]`
- **Nếu sai:** bật rồi vẫn thấy số → bạn chưa Add nhãn thành công — quay lại Bước 3.

### Bước 5 — Chọn Measure đúng

Ở cột `Measure` của từng dòng: **bấm ô → chọn trong dropdown** theo codebook:

| Measure | Biến |
|---|---|
| `Scale` | `age_years`, `bmi`, `sbp_baseline`, `adherence_score`, `sbp_followup` |
| `Nominal` | `patient_id`, `sex_code`, `treatment_group`, `diabetes_flag`, `smoking_status`, `followup_completed`, `bp_controlled` |
| `Ordinal` | *(dataset này chưa có — sẽ gặp ở workbook BT2)* |

**Tự hỏi để chọn:** "trung bình của biến này có nghĩa không?" → có = Scale; không nhưng
có thứ tự = Ordinal; còn lại = Nominal.

### Bước 6 — Nhìn cột Missing (chỉ nhìn, chưa sửa)

Cột `Missing` trong Variable View. Dataset này dùng **ô trống = system missing** —
không cần khai báo gì. *(Ngày 03 sẽ gặp trường hợp phải khai báo mã missing thật — `9`.)*

### Bước 7 — Lưu lại và kiểm chứng bằng Frequencies

- **Làm:** **File → Save** (⌘S) — ghi đè `clinic_bp.sav`. Đây là bản làm việc của bạn;
  file CSV gốc vẫn nguyên.
- **Kiểm chứng cuối:** **Analyze → Descriptive Statistics → Frequencies…** → đưa `sex_code`
  vào ô Variable(s) (bấm tên biến bên trái → bấm nút ► đưa sang) → **OK**.
- **Màn hình mong đợi — LẦN ĐẦU THẤY OUTPUT VIEWER:** một cửa sổ *mới* tự mở, bên trái là
  cây mục lục, bên phải là bảng kết quả. Bảng tần số `sex_code` hiện **"Nữ"/"Nam"** kèm số
  đếm — dấu hiệu Value Labels hoạt động. `[SHOT-8]`
- **Nếu sai:** bảng hiện 1/2 thay vì nhãn → Value Labels chưa được Add — quay lại Bước 3.
  Đây là cửa sổ sẽ chứa *mọi* kết quả phân tích từ giờ — Ngày 11 học quản lý nó.

## E. Minh họa & danh sách ảnh cần chụp

| Mã | Ảnh cần | Chụp khi |
|---|---|---|
| SHOT-5 | Variable View với 11 cột (chưa điền) | Sau Bước 1 |
| SHOT-6 | Hộp thoại Value Labels đang mở | Trong Bước 3 |
| SHOT-7 | Data View hiển thị "Nữ/Nam" thay số | Sau Bước 4 |
| SHOT-8 | Output Viewer với bảng Frequencies có nhãn | Sau Bước 7 |

## F. Ví dụ hoàn chỉnh — `sex_code` từ số trần tới tự giải thích

| # | Hành động | Trước → Sau |
|---|---|---|
| 1 | Variable View → Label | trống → "Giới" |
| 2 | Values → … → Add 1=Nữ, 2=Nam | "None" → {1, Nữ}… |
| 3 | Measure → Nominal | Unknown → Nominal |
| 4 | View → Value Labels trong Data View | 1,2 → Nữ, Nam |
| 5 | Frequencies sex_code | bảng số → bảng có nhãn |
| 6 | ⌘S | `clinic_bp.sav` giờ **mang theo định nghĩa** |

## G. Bài tập tự làm

[Workbook](/d02/bai-tap/): định nghĩa biến cho `hba1c_pairs.sav`, chọn Measure cho bảng
biến mới, và một tình huống mã hóa khác (`sex_text` chữ M/F).

## H. Checkpoint — sản phẩm bạn phải có

- [ ] `clinic_bp.sav` mở ra có đủ 12 Label + Value Labels cho 5 biến mã hóa.
- [ ] `hba1c_pairs.sav` có Label + Measure đúng (BT1 workbook).
- [ ] Bật View → Value Labels thấy chữ thay vì số.
- [ ] Trả lời được: vì sao `sex_code` ghi số mà vẫn là Nominal? Vì sao `patient_id`
  không phải Scale?

## I. Gỡ rối khi bị kẹt

| Triệu chứng | Nguyên nhân | Cách gỡ |
|---|---|---|
| Nút … ở ô Values không hiện | Chưa bấm đúng vào ô — phải click chọn ô trước | Bấm ô Values một lần, … hiện mép phải |
| Add không vào danh sách | Gõ xong quên bấm Add trước khi OK | Mở lại hộp, Add từng cặp rồi mới OK |
| Không sửa được nhãn | Đang ở Data View thay vì Variable View | Sang tab Variable View |
| Bảng Frequencies ra số 1/2 | Chưa Add Value Labels thành công | Bước 3, kiểm ô Values của dòng |
| Sửa nhầm mã (1=Nam) | Gõ lộn | Chọn dòng sai → sửa → **Change**, không phải Add |
| Variable View chỉ thấy vài cột | Cửa sổ hẹp | Kéo rộng cửa sổ / cuộn ngang |

## J. Chuyển giao sang Ngày 03

**File hiện có:**

| File | Vai trò | Ngày mai |
|---|---|---|
| `clinic_bp.sav` | Bản sạch **có đầy đủ nhãn** (từ hôm nay) | **Giữ lại** — sẽ dùng để "mượn" định nghĩa + đối chiếu |
| `hba1c_pairs.sav` | Có nhãn (sau BT1) | Để nguyên, dùng lại Ngày 07 |
| `clinic_bp_v1_raw.csv` | **File mới phải tải** — bản gốc có lỗi | Import đầu giờ Ngày 03 |

**Kỹ năng mang theo:** định nghĩa biến trong Variable View; nhận biết String vs Numeric;
đọc codebook.

**Thay đổi ngày mai — QUAN TRỌNG:** phòng khám gửi *file gốc có lỗi* (`_raw.csv`).
File đó import vào sẽ **mất hết nhãn** bạn vừa gắn (CSV không lưu nhãn). Ngày 03 bạn sẽ
làm sạch file raw → tạo `clinic_bp_my_clean.sav` → và gắn lại nhãn cần thiết vào
**file mới** — đừng nhầm `clinic_bp.sav` với `clinic_bp_my_clean.sav`.

## K. Đọc thêm (không bắt buộc)

- **`Role` = Input:** khai báo vai trò biến cho các wizard nâng cao — mức nhập môn để mặc định.
- **Missing rời rạc (discrete missing):** ngoài ô trống, SPSS cho khai báo tới 3 mã làm
  "missing" (vd 99 = từ chối trả lời) — Ngày 03 dùng thật cho mã `sex_code = 9`.
- **Type = Date/String:** cột chữ (`patient_id`, `treatment_group`) để String; cột ngày
  có định dạng riêng — khóa này không dùng.
- **File → Apply Data Dictionary…:** cách "copy toàn bộ định nghĩa" từ một `.sav` sang
  file khác — tiện khi mở file raw cùng cấu trúc (nhắc lại ở Ngày 03, phần tùy chọn).
