# Ngày 03 — Workbook: Làm sạch dữ liệu

> Làm lần lượt, không nhìn `answer-key.md`.
> Đầu vào: `clinic_bp_my_clean.sav` (vừa tạo ở lesson) + `cleaning_log.md`.
> Bị kẹt → mở đúng **Gợi ý** của câu đó trước.

---

## BT0 — Tự đối chiếu bản sạch của bạn với bản chuẩn

Trước khi làm bài, kiểm chứng file bạn vừa tạo có đúng không:

1. Mở `clinic_bp_my_clean.sav` → chạy **Descriptives** trên `age_years`, `bmi`,
   `sbp_baseline`, `adherence_score`, `sbp_followup`. Ghi lại N, min, max của mỗi biến.
2. Chạy **Frequencies** trên `sex_code`, `diabetes_flag`, `smoking_status`,
   `followup_completed`, `bp_controlled`. Ghi N hợp lệ và các giá trị xuất hiện.
3. Mở `clinic_bp.sav` (bản chuẩn) → chạy cùng hai lệnh → so sánh.
   Hai bảng phải **gần giống hệt** (chênh nhỏ do làm tròn là chấp nhận được).

> ✅ **Sản phẩm:** `clinic_bp_my_clean.sav` 160 dòng, min/max trong miền hợp lý · `cleaning_log.md` đủ mục lỗi · `clinic_bp.sav` không bị sửa

> **Gợi ý 1:** nếu bảng của bạn khác bản chuẩn ở một biến → tra `cleaning_log.md` xem bạn
> đã xử lý biến đó chưa, hoặc xử lý sai kiểu nào.
>
> **Gợi ý 2:** `sex_code` hợp lệ = chỉ thấy 1 và 2; nếu thấy `9` → quên khai báo missing
> (lesson Bước 4c); nếu biến không có trong Descriptives → nó vẫn là String (Bước 4b).

## BT1 — Soi bảng lỗi mini (trên giấy)

Bảng 8 dòng giả lập sau được nhập tay. Không cần SPSS — liệt kê **tất cả** vấn đề bạn thấy
và đề xuất cách xử lý:

| id | age | sex | sbp | weight_kg |
|---|---|---|---|---|
| T01 | 45 | 1 | 132 | 58 |
| T02 | 38 | 2 | 128 | 72 |
| T03 | 520 | 2 | 140 | 65 |
| T04 | 29 | 3 | 118 | 54 |
| T05 | 61 | 1 | 156 | |
| T06 | 34 | 2 | 124 | 70 |
| T06 | 34 | 2 | 124 | 70 |
| T07 | 48 | 1 | 135 | 60 |

*(Quy ước: `sex` chỉ cho 1=Nữ, 2=Nam; tuổi 18–100; SBP 60–250.)*

1. Liệt kê các vấn đề (kèm id dòng).
2. Mỗi vấn đề: sửa theo nghĩa, đặt missing, hay xóa dòng? Vì sao?

> **Gợi ý:** hỏi lần lượt "bất khả thi sinh học? ngoài codebook? trùng? thiếu thật?"

## BT2 — Vì sao không sửa file gốc?

Đồng nghiệp: "Tôi mở file CSV bằng Excel, sửa mấy ô sai rồi lưu đè — nhanh hơn nhiều."

1. Nêu **hai** rủi ro của cách này.
2. Kể lại quy trình đúng bạn vừa làm: file nào → file nào → file nào, log ở đâu.

> **Gợi ý:** nghĩ về "truy vết" — sau khi sửa đè, còn ai biết giá trị gốc là gì?

## BT3 — Hai loại missing

Trong `clinic_bp_my_clean.sav`:

1. `sbp_followup` có bao nhiêu ô missing? Missing đó vì lý do gì — có phải "lỗi cần sửa" không?
2. Bạn vừa tự tạo thêm vài ô missing (tuổi 250, BMI 152,4…). Hai loại missing này khác nhau
   về *nguyên nhân* thế nào — và giống nhau về *cách SPSS xử lý* ra sao?

> **Gợi ý:** chạy Frequencies `sbp_followup` → đọc dòng Missing; nhìn cột `followup_completed`.

## BT4 — Tình huống mới: sổ theo dõi đường huyết

Y tá gửi `glucose_log.csv` 300 dòng; **mỗi dòng là một lần đo đường huyết đói tại nhà**
(một bệnh nhân có nhiều lần đo). Descriptives cho `glucose`: min = 2,1; max = 33,9 mmol/L.

1. Min = 2,1 có phải "lỗi chắc chắn"? Vì sao không nên xóa/sửa ngay?
2. Max = 33,9 thì sao? Xử lý hợp lý nếu **không** liên hệ được bệnh nhân?
3. Vì đây là bảng *theo lần đo*: nếu chạy Identify Duplicate Cases theo `patient_id`,
   kết quả "nhiều id trùng" có phải lỗi không? Khác gì với bài clinic_bp?

> **Gợi ý:** đây là cái bẫy của BT "trùng" — trùng *dòng giống hệt* mới là lỗi;
> một người nhiều dòng *khác nhau* là thiết kế đúng.
