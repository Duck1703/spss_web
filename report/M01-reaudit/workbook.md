# M01 — Workbook: Bài tập tự luyện

> Làm theo thứ tự, **không nhìn `answer-key.md`** cho tới khi xong hết.
> Đầu vào cần có: bài `lesson.md` (đặc biệt bảng `mini_records` + codebook mini ở mục 3.4).
> Nhãn: mọi dữ liệu trong bài tập đều là **GIẢ LẬP**.

---

## BT1 — Viết câu hỏi nghiên cứu (nhận biết + sản xuất)

**BT1a.** Với mỗi tình huống, xếp loại câu hỏi (**mô tả / so sánh / liên quan**):

1. "Ở người bệnh đái tháo đường type 2 điều trị ngoại trú tại phòng khám X, HbA1c trung bình là bao nhiêu?"
2. "Thời gian lành vết thương ở bệnh nhân dùng băng gạc A có khác bệnh nhân dùng băng gạc B không?"
3. "Số giờ ngủ trung bình mỗi đêm có liên quan với đường huyết đói không?"

**BT1b.** Viết lại câu hỏi mơ hồ sau thành câu hỏi đủ 3 thành phần (quần thể + biến + đơn vị quan sát):
> "Thuốc hạ huyết áp có tốt không?"

---

## BT2 — Phân loại 12 biến

Bảng dưới liệt kê 12 cột trong một hồ sơ phòng khám giả lập. Điền kiểu của từng biến vào cột trống — chọn một trong: **định danh (không phải biến phân tích)** · **định tính danh định** · **định tính thứ bậc** · **định lượng**.

| # | Tên | Mô tả / mã | Kiểu của bạn |
|---|---|---|---|
| 1 | `patient_id` | Mã hồ sơ P001… | |
| 2 | `age_years` | Tuổi (năm) | |
| 3 | `sex_code` | 1 = Nữ, 2 = Nam | |
| 4 | `blood_group` | A / B / O / AB | |
| 5 | `bmi` | Chỉ số khối cơ thể (kg/m²) | |
| 6 | `sbp_baseline` | Huyết áp tâm thu lúc nhập (mmHg) | |
| 7 | `diabetes_flag` | 0 = không, 1 = có ĐTĐ | |
| 8 | `pain_level` | không / nhẹ / vừa / nặng | |
| 9 | `satisfaction` | rất không hài lòng … rất hài lòng (1–5) | |
| 10 | `admission_ward` | Khoa nhập viện (Nội / Ngoại / Sản / Nhi) | |
| 11 | `birth_year` | Năm sinh | |
| 12 | `smoking_status` | không hút / đã bỏ / đang hút | |

**Mục tiêu Blueprint:** đúng ≥10/12. Có **2 cái bẫy** cố ý — tìm ra chúng.

---

## BT3 — Kết luận nào vượt quyền?

Dùng đúng bảng `mini_records` (lesson.md mục 3.4). Với mỗi câu, đánh dấu ✅ (hợp lệ trong giới hạn dữ liệu) hoặc ❌ (vượt quyền) và nói vì sao:

1. "Trong 12 hồ sơ giả lập này, 25% có chẩn đoán đái tháo đường."
2. "Bệnh nhân Việt Nam có tỷ lệ đái tháo đường khoảng 25%."
3. "Nhóm có đái tháo đường có huyết áp trung bình cao hơn nhóm còn lại trong bảng này (149,0 vs 123,3 mmHg)."
4. "Đái tháo đường gây tăng huyết áp."
5. "Trong bảng này, bệnh nhân có đái tháo đường cũng lớn tuổi hơn (62,7 vs 40,4 tuổi)."

---

## BT4 — Bài tập tích hợp (tình huống mới, tự làm hoàn toàn)

**Tình huống mới — chưa xuất hiện trong bài học:**

> Trạm y tế phường tổ chức tiêm vaccine cúm mùa cho người ≥60 tuổi. Trong 2 tuần, trạm tiêm cho 200 người. Sau tiêm, mỗi người được hẹn quay lại hoặc gọi điện sau 7 ngày để hỏi: có sốt không (có/không), mức độ đau tại chỗ tiêm (không/nhẹ/vừa/nặng), số ngày phải hạn chế sinh hoạt thường ngày sau tiêm, và có hài lòng với quy trình không (1–5 sao). Trạm trưởng muốn biết: "Tỷ lệ người sốt sau tiêm trong đợt này là bao nhiêu? Người lớn tuổi hơn có nhiều ngày hạn chế sinh hoạt hơn không?"

**Nhiệm vụ — phiếu nghiên cứu 1 trang của bạn** (sản phẩm bắt buộc theo Blueprint, nộp cho người hướng dẫn):

1. Viết **2 câu hỏi nghiên cứu** từ tình huống (mỗi câu đủ: quần thể + biến + đơn vị quan sát), và xếp loại từng câu.
2. Nêu **quần thể** và **mẫu** của tình huống. Đơn vị quan sát là gì?
3. Thiết kế bảng biến tối thiểu cho tình huống: liệt kê ≥5 biến, ghi kiểu của từng biến (kèm mã hóa nếu là biến định tính).
4. Đây là thiết kế **quan sát hay thực nghiệm**? Kết luận về "vaccine *gây* sốt" có được phép không?
5. Trạm trưởng yêu cầu: "Tính cho tôi tỷ lệ người sốt sau tiêm." — Với thông tin trong tình huống, **tính được chưa?** Nếu chưa, chỉ rõ đang thiếu những con số nào (tử số là gì? mẫu số là gì? có chắc mẫu số là 200 không?).
6. Viết 1 câu kết luận **vượt quyền** mà một người hấp tấp có thể rút ra từ tình huống này — rồi viết lại phiên bản hợp lệ.

---

## Tự đánh giá sau khi làm

- [ ] BT1: phân loại đúng 3/3 + viết được câu hỏi đủ 3 thành phần
- [ ] BT2: đúng ≥10/12, nhận ra được 2 cái bẫy
- [ ] BT3: đúng ≥4/5 và giải thích được vì sao
- [ ] BT4: hoàn thành phiếu nghiên cứu không xem đáp án

Nếu mục nào trượt → đọc lại đúng mục tương ứng trong `lesson.md` (3.1–3.8), đừng học vẹt đáp án.
