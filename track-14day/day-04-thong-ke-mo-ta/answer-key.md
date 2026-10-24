# Ngày 04 — Đáp án & giải thích

> Số liệu `hba1c_pairs` tính từ CSV (cross-check Python — `NOT_RUN` trên SPSS).

---

## BT1 — Bảng 1 mini HbA1c

1. Kỳ vọng (n = 24):
   - `hba1c_t0`: mean = **7,69%**, SD = 0,76, min = 6,3, max = 9,2
   - `hba1c_t3`: mean = **7,41%**, SD = 0,77, min = 6,4, max = 9,2
   *(cho phép sai khác làm tròn ở chữ số cuối)*
2. Ví dụ: "24 bệnh nhân đái tháo đường type 2 (giả lập) có HbA1c trung bình 7,69% (SD 0,76)
   trước chương trình và 7,41% (SD 0,77) sau 3 tháng."
3. Không — cả `hba1c_t0` và `hba1c_t3` đều là định lượng; `patient_id` là định danh.
   Biến định tính mới dùng n (%).

*Lỗi hay gặp:* quên ghi n; lấy % cho biến số (vô nghĩa); viết "%" sai đơn vị — HbA1c ở đây đo bằng %.

## BT2 — Chọn chỉ số mô tả

1. **n (%) theo nhóm** — biến nominal.
2. **median [IQR]** — phân phối lệch phải mạnh; mean sẽ bị kéo lên bởi các ca nằm viện rất dài.
3. **mean ± SD** — phân phối gần đối xứng, đại lượng đo thật.
4. **median [IQR]** (hoặc n % từng mức) — thang 0–10 bản chất thứ bậc; nhiều bài vẫn báo mean ± SD
   nhưng median an toàn hơn khi phân phối lệch.

## BT3 — Đọc output có missing

1. Mẫu số là **137** — chỉ những bệnh nhân *có* `bp_controlled` (đã tái khám). Valid Percent loại missing.
2. Câu "58,4% bệnh nhân đạt kiểm soát" **thiếu mẫu số và phạm vi**: 23/160 không có dữ liệu tái khám —
   viết như vậy ngầm ý 160 người đều được đánh giá.
3. Viết đúng: "Trong 137/160 bệnh nhân có đo huyết áp tái khám, 80 người (58,4%) đạt kiểm soát
   (<140 mmHg)." *(Tỷ lệ trên nhóm có theo dõi — nêu rõ.)*

## BT4 — Báo cáo khoa

1. `ventilator_days`: báo **median [IQR]** — SD 9,8 > mean 6,2 và max 41 cho thấy lệch phải mạnh.
2. `discharged_home` là biến **nhị phân (định tính)** → báo n và %: "30/45 (66,7%) được xuất viện về nhà".
3. Ví dụ: "45 bệnh nhân hồi sức (giả lập) có tuổi trung bình 58 ± 16 năm. Số ngày thở máy
   trung vị [IQR tính từ dữ liệu]; 30/45 (66,7%) xuất viện về nhà."
   *(Nếu muốn con số median thật → tự chạy Explore — đây là bài tập ngoài file mẫu.)*
