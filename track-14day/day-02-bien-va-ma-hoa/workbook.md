# Ngày 02 — Workbook: Biến và mã hóa

> Làm lần lượt, không nhìn `answer-key.md`. Đầu vào: `hba1c_pairs.sav` (Ngày 01) + `clinic_bp.sav`.

---

## BT1 — Định nghĩa biến cho file HbA1c

Mở `hba1c_pairs.sav` → Variable View. Tự điền:

1. Variable Label cho 3 biến (gợi ý tra codebook `datasets/codebooks/exercise_hba1c_codebook.md`).
2. Measure cho `hba1c_t0` và `hba1c_t3` — Nominal, Ordinal hay Scale? Giải thích một câu.
3. `patient_id` cần Value Labels không? Vì sao không?
4. Lưu file. Ghi lại thao tác bạn vừa làm vào một dòng "nhật ký làm việc" (tự do).

## BT2 — Chọn Measure cho biến mới

Một khoa nội có bảng biến sau. Điền Measure (Nominal/Ordinal/Scale) cho từng biến:

| # | Biến | Mô tả/mã | Measure của bạn |
|---|---|---|---|
| 1 | `ward_code` | 1=Nội tim mạch, 2=Nội tiêu hóa, 3=Nội tổng hợp | |
| 2 | `pain_score` | Đau tự chấm 0–10 (0=không đau) | |
| 3 | `nyha_class` | Độ suy tim I / II / III / IV | |
| 4 | `weight_kg` | Cân nặng (kg) | |
| 5 | `hospital_id` | Mã bệnh viện BV01… | |

## BT3 — Đọc codebook và đối chiếu

Mở `datasets/codebooks/clinic_bp_codebook.md`, đối chiếu với `clinic_bp.sav` của bạn:

1. Biến nào trong codebook có Measure mà bạn chưa đặt đúng? Sửa lại.
2. Trong codebook, `bp_controlled = 1` nghĩa là gì (ghi lại bằng lời + ngưỡng mmHg)?
3. Tìm trong Variable View: biến nào là `String`? Tại sao SPSS để nó là String?

## BT4 — Tình huống mới: phiếu khảo sát

Phòng khám cho bệnh nhân chấm mức hài lòng: `1 = Rất không hài lòng … 5 = Rất hài lòng`,
và ghi giới tính bằng chữ `M/F` (Male/Female) trong cột `sex_text`.

1. `satisfaction` (1–5) nên để Measure gì? Vì sao không hẳn là Scale?
2. `sex_text` đang là String chữ M/F. Để phân tích nhóm, nên làm gì? (Gợi ý: nghĩ về mã hóa số
   + Value Labels — bạn sẽ *thực hành* recode ở Ngày 03.)
3. Đồng nghiệp đề nghị gán `M = 1`, `F = 2` nhưng quên ghi nhãn. Điều gì có thể xảy ra sau 3 tháng
   khi người khác mở file?
