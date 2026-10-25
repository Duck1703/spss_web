# Ngày 02 — Đáp án & giải thích

> Đọc sau khi làm xong `workbook.md`.

---

## BT1 — Định nghĩa biến cho `hba1c_pairs.sav`

1. Label (tra codebook `exercise_hba1c_codebook.md`):
   - `patient_id` → Mã bệnh nhân (giả lập)
   - `hba1c_t0` → HbA1c trước tư vấn (%)
   - `hba1c_t3` → HbA1c sau 3 tháng (%)
2. `hba1c_t0/t3` → **Scale** — đây là phép đo định lượng; trung bình HbA1c có ý nghĩa lâm sàng
   (vd: HbA1c trung bình nhóm = 7,2%).
3. **Không cần** — `patient_id` là mã định danh, mỗi bệnh nhân một giá trị riêng; gắn nhãn
   cho 24 mã riêng lẻ không giúp ai hiểu thêm. Value Labels dành cho biến có **số mã hữu hạn,
   mỗi mã là một nhóm** (0/1, 1/2/3).
4. File đã lưu — mở lại kiểm tra Label còn đó.

*Lỗi hay gặp:* gắn Value Labels cho `patient_id` từng mã một — không sai nhưng vô nghĩa và
mất thời gian.

## BT2 — Chọn Measure

| Biến | Measure | Lý do |
|---|---|---|
| `ward_code` | Nominal | Mã khoa chỉ là nhóm, không thứ tự, "khoa trung bình = 2" vô nghĩa |
| `pain_score` | Ordinal | Có thứ tự 0→10 nhưng khoảng cách giữa các mức không đảm bảo đều (đau 2→4 và 7→9 không hẳn "bằng nhau"). Nhiều nghiên cứu vẫn tính trung bình điểm đau — đó là tranh luận có thật, ở mức nhập môn chọn Ordinal là an toàn |
| `nyha_class` | Ordinal | I < II < III < IV rõ ràng thứ tự, khoảng cách không đều |
| `weight_kg` | Scale | Phép đo định lượng |
| `hospital_id` | Nominal | Mã định danh |

## BT3 — Đối chiếu codebook

1. Tự kiểm theo bảng Measure trong lesson Bước 5.
2. `bp_controlled = 1` = bệnh nhân **đạt kiểm soát huyết áp sau 3 tháng**, ngưỡng
   `sbp_followup < 140 mmHg` (và có đo tái khám).
3. Hai biến **String**: `patient_id` (chứa chữ "P001") và `treatment_group` (chứa chữ "A"/"B").
   SPSS để String vì trong CSV chúng là văn bản — đây là **String chủ đích** (text thật),
   khác với `sex_code` ở file raw sẽ gặp Ngày 03: một cột số bị SPSS ép thành String chỉ vì
   *một ô chứa chữ*.

## BT4 — Phiếu khảo sát

1. **Ordinal** — có thứ tự rõ (1→5) nhưng khoảng cách giữa các mức không đảm bảo đều;
   không hẳn Scale vì "trung bình hài lòng 3,7" chỉ tương đối có nghĩa.
2. Tạo biến số mới (vd `sex_code`) mã hóa `F = 1`, `M = 2` (hoặc quy ước khác — **ghi nhãn
   ngay**); gắn Value Labels; đặt Measure = Nominal. Giữ nguyên `sex_text` làm gốc.
   Đây chính là tình huống `sex_code = "F"` sẽ làm tay ở Ngày 03.
3. Sau 3 tháng, ai đó mở file thấy cột 1/2 trần — **không ai chắc 1 là nam hay nữ**.
   Phân tích theo giới vẫn "chạy" được nhưng diễn giải kết quả theo hướng ngược nhau là
   rủi ro thật. Bài học: **mã hóa và nhãn phải đi cùng nhau**.
