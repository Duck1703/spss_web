# Ngày 03 — Workbook: Làm sạch dữ liệu

> Làm lần lượt, không nhìn `answer-key.md`.

---

## BT1 — Soi bảng lỗi mini (trên giấy)

Bảng 8 dòng giả lập sau được nhập tay. Không cần SPSS — hãy liệt kê **tất cả** vấn đề bạn thấy
và đề xuất cách xử lý cho từng vấn đề:

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

*(Quy ước codebook: `sex` chỉ cho phép 1=Nữ, 2=Nam; tuổi người lớn 18–100; SBP 60–250 mmHg.)*

1. Liệt kê các vấn đề (kèm id dòng).
2. Với mỗi vấn đề: sửa thành missing, sửa theo codebook, hay xóa dòng? Vì sao?

## BT2 — Vì sao không sửa file gốc?

Đồng nghiệp nói: "Tôi mở file CSV bằng Excel, sửa mấy ô sai rồi lưu đè — nhanh hơn nhiều."

1. Nêu **hai** rủi ro của cách làm này.
2. Quy trình đúng của bạn gồm những file/bước nào?

## BT3 — Missing nào là missing "có chủ đích"?

Trong `clinic_bp_my_clean.sav` của bạn:

1. `sbp_followup` có bao nhiêu ô missing? Những ô đó missing vì lý do gì — và missing này có phải
   "lỗi cần sửa" không?
2. Bạn vừa tạo thêm vài ô missing (tuổi 250, BMI 152.4…). Hai loại missing này khác nhau thế nào
   về *nguyên nhân* — và điểm giống nhau về *cách SPSS xử lý* là gì?

## BT4 — Tình huống mới: sổ theo dõi đường huyết

Một y tá gửi file `glucose_log.csv` 300 dòng; mỗi dòng là một lần đo đường huyết đói tại nhà.
Bạn chạy Descriptives và thấy: `glucose` min = 2,1 mmol/L; max = 33,9 mmol/L.

1. Min = 2,1 có phải "lỗi chắc chắn" không? Vì sao không nên xóa/sửa ngay?
2. Max = 33,9 thì sao? Xử lý hợp lý là gì nếu **không** liên hệ được bệnh nhân?
3. Trước khi chạy Descriptives, bạn còn cần biết điều gì về bảng này để tránh sai lầm ở BT4 Ngày 01
   (bảng theo lần đo vs theo bệnh nhân)?
