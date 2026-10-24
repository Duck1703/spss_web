# Ngày 02 — Workbook: Biến và mã hóa

> Làm lần lượt, không nhìn `answer-key.md`.
> Đầu vào: `hba1c_pairs.sav` (tạo ở BT1 Ngày 01) + `clinic_bp.sav` (đã có nhãn từ lesson).
> Bị kẹt → mở đúng **Gợi ý** của câu đó trước.

---

## BT1 — Định nghĩa biến cho file HbA1c

Mở `hba1c_pairs.sav` → Variable View. Tự điền:

1. Variable Label cho 3 biến (tra codebook `datasets/codebooks/exercise_hba1c_codebook.md`).
2. Measure cho `hba1c_t0` và `hba1c_t3` — Nominal, Ordinal hay Scale? Giải thích một câu.
3. `patient_id` cần Value Labels không? Vì sao không?
4. Lưu file (⌘S).

> ✅ **Sản phẩm:** `hba1c_pairs.sav` đã lưu có đủ 3 Label · Measure đúng cho 2 biến hba1c · giải thích được vì sao `patient_id` không cần Value Labels

> **Gợi ý 1:** 3 biến là `patient_id` (mã), `hba1c_t0` (HbA1c trước, %), `hba1c_t3` (sau, %).
>
> **Gợi ý 2** (câu 3): hỏi "mã này có giá trị *hữu hạn* cần giải thích không?" — 24 bệnh
> nhân = 24 mã khác nhau.

## BT2 — Chọn Measure cho biến mới

Một khoa nội có bảng biến sau. Điền Measure (Nominal/Ordinal/Scale) cho từng biến:

| # | Biến | Mô tả/mã | Measure của bạn |
|---|---|---|---|
| 1 | `ward_code` | 1=Nội tim mạch, 2=Nội tiêu hóa, 3=Nội tổng hợp | |
| 2 | `pain_score` | Đau tự chấm 0–10 (0=không đau) | |
| 3 | `nyha_class` | Độ suy tim I / II / III / IV | |
| 4 | `weight_kg` | Cân nặng (kg) | |
| 5 | `hospital_id` | Mã bệnh viện BV01… | |

> **Gợi ý:** dùng câu hỏi của lesson — "trung bình có nghĩa không? có thứ tự không?"

## BT3 — Đối chiếu codebook

Mở `datasets/codebooks/clinic_bp_codebook.md`, đối chiếu với `clinic_bp.sav` của bạn:

1. Biến nào trong codebook có Measure mà bạn chưa đặt đúng? Sửa lại.
2. Trong codebook, `bp_controlled = 1` nghĩa là gì (ghi bằng lời + ngưỡng mmHg)?
3. Tìm trong Variable View: biến nào là `String`? Tại sao SPSS để nó là String?

> **Gợi ý** (câu 3): nhìn lại CSV gốc — những cột chứa chữ thay vì số sẽ thành String.

## BT4 — Tình huống mới: phiếu khảo sát

Phòng khám cho bệnh nhân chấm mức hài lòng: `1 = Rất không hài lòng … 5 = Rất hài lòng`,
và ghi giới tính bằng chữ `M/F` trong cột `sex_text`.

1. `satisfaction` (1–5) nên để Measure gì? Vì sao không hẳn là Scale?
2. `sex_text` đang là String chữ M/F. Để phân tích theo nhóm nên làm gì? (Gợi ý: nghĩ về
   mã hóa số + Value Labels — bạn sẽ *thực hành* quy trình đó ở Ngày 03 với `sex_code`.)
3. Đồng nghiệp gán `M = 1`, `F = 2` nhưng quên ghi nhãn. Điều gì xảy ra sau 3 tháng
   khi người khác mở file?
