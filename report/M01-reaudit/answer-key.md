# M01 — Đáp án & giải thích

> Đọc **sau khi** đã làm xong `workbook.md`. Mỗi đáp án gồm: đáp án → lý do → lỗi hay gặp → cách tự sửa.
> Toàn bộ số liệu tính từ bảng `mini_records` (GIẢ LẬP) trong `lesson.md` mục 3.4; đã tái tính độc lập (xem `qa/M01-author-selfcheck.md`).

---

## Đáp án Checkpoint (lesson.md mục 11)

1. **Vì sao viết câu hỏi trước khi thu dữ liệu?** — Vì câu hỏi quyết định đo cái gì, trên ai, và kết luận được phép đến đâu. Thu dữ liệu trước → thường thiếu biến cần thiết hoặc thu thừa, và dễ "câu cá" kết luận sau khi thấy số liệu.
2. **`sex_code` là số nhưng vẫn định tính** — vì 1/2 chỉ là *mã nhãn* cho nhóm Nữ/Nam, không có ý nghĩa toán (1,5 giới = vô nghĩa). Ví dụ tương tự: mã khoa `1=Nội, 2=Ngoại`, mã nhóm máu.
3. **Quần thể/mẫu của bác sĩ Lan:** quần thể = bệnh nhân khám định kỳ tại phòng khám của cô (mà câu hỏi nhắm tới); mẫu = nhóm hồ sơ thực tế được đo. Trong bài: mẫu là 12 hồ sơ **giả lập**.
4. **Hai lý do "ĐTĐ gây tăng huyết áp" chưa đứng:** (a) bảng này chỉ cho thấy *liên quan* trong 12 hồ sơ giả lập — mối liên quan quan sát được tự nó không chứng minh nhân quả; (b) yếu tố nhiễu: nhóm ĐTĐ già hơn hẳn (62,7 vs 40,4 tuổi) và BMI cao hơn — chênh lệch huyết áp có thể do tuổi/BMI, không hẳn do ĐTĐ.
5. **Quan sát có kết luận nhân quả được không?** — Chính xác hơn: *một mối liên quan quan sát được thuần túy thì không*; nhưng dữ liệu quan sát **vẫn có thể** hỗ trợ lập luận nhân quả khi có thiết kế, giả định và phân tích phù hợp để xử lý yếu tố nhiễu (ví dụ khung "thử nghiệm mục tiêu" — Matthews và cs., BMJ 2022). Thử nghiệm ngẫu nhiên là chuẩn được ưu tiên cho hiệu quả can thiệp, nhưng nhiều câu hỏi không thể ngẫu nhiên hóa (đạo đức/chi phí) → quan sát thiết kế tốt vẫn là công cụ nghiên cứu nhân quả. Với bảng `mini_records`: chưa có thiết kế/phân tích như vậy → chỉ kết luận được liên quan trong mẫu.

---

## BT1 — Viết câu hỏi nghiên cứu

**BT1a.**
1. **Mô tả** — chỉ hỏi đặc điểm (HbA1c trung bình) của một nhóm, không so sánh, không liên kết.
2. **So sánh** — hai nhóm (gạc A vs gạc B), một chỉ số (thời gian lành vết thương).
3. **Liên quan** — hai biến đo trên cùng người (giờ ngủ, đường huyết), hỏi "đi cùng nhau không".

*Lỗi hay gặp:* nhầm câu 1 thành "so sánh" vì thấy con số — **so sánh cần ≥2 nhóm hoặc 2 thời điểm rõ ràng**; nhầm câu 3 thành nhân quả — "liên quan" chỉ hỏi cùng thay đổi.

**BT1b.** Ví dụ chấp nhận được (miễn đủ 3 thành phần):
> "Ở bệnh nhân tăng huyết áp đang dùng thuốc X tại phòng khám Y trong 3 tháng, huyết áp tâm thu trung bình sau 3 tháng là bao nhiêu, và khác bao nhiêu so với lúc bắt đầu?"

Câu gốc "có tốt không?" thiếu: **quần thể** (ai?), **biến/kết cục** ("tốt" đo bằng gì — huyết áp? tác dụng phụ?), **đơn vị quan sát** (mỗi bệnh nhân), và điểm so sánh (so với lúc nào/nhóm nào?).

---

## BT2 — 12 biến

| # | Biến | Đáp án | Lý do |
|---|---|---|---|
| 1 | `patient_id` | **Định danh — không phải biến phân tích** | Chỉ để phân biệt dòng, không mang thông tin đo |
| 2 | `age_years` | Định lượng | Trung bình tuổi có nghĩa |
| 3 | `sex_code` | **Định tính danh định** *(bẫy)* | Số 1/2 chỉ là mã nhãn; không cộng trừ được |
| 4 | `blood_group` | Định tính danh định | Nhóm máu không có thứ tự |
| 5 | `bmi` | Định lượng | Đo được, trung bình có nghĩa |
| 6 | `sbp_baseline` | Định lượng | mmHg — đại lượng đo |
| 7 | `diabetes_flag` | Định tính danh định (nhị phân) | 0/1 là mã có/không |
| 8 | `pain_level` | Định tính thứ bậc | Có thứ tự nhẹ→nặng, khoảng cách không đều |
| 9 | `satisfaction` | Định tính thứ bậc | Thang 1–5 có thứ tự; "điểm trung bình 3,4 sao" đôi khi được dùng mô tả nhưng bản chất là thứ bậc |
| 10 | `admission_ward` | Định tính danh định | Khoa không có thứ tự |
| 11 | `birth_year` | Định lượng | Có thể trừ để ra tuổi — phép tính có nghĩa |
| 12 | `smoking_status` | **Định tính danh định** | Các nhãn "không hút / đã bỏ / đang hút" là *trạng thái*, không tạo thành một thứ tự có nghĩa cho đại lượng đang đo (đã bỏ ≠ mức giữa của "không" và "đang hút"). Thứ bậc chỉ đúng khi biến được *định nghĩa lại* thành một thang có thứ tự rõ ràng — ví dụ đo mức phơi nhiễm: "không hút / hút thỉnh thoảng / hút hằng ngày". Nhãn đã cho như đề → đáp án duy nhất là **danh định**. |

**Hai cái bẫy:** #1 (định danh ≠ biến) và #3 (số ≠ định lượng).

*Cách tự sửa lỗi:* với mỗi biến hỏi "trung bình có nghĩa không? có thứ tự không? chỉ là nhãn?" — theo đúng thứ tự đó.

---

## BT3 — Kết luận vượt quyền

| # | Câu | ✅/❌ | Vì sao |
|---|---|---|---|
| 1 | "25% có ĐTĐ trong 12 hồ sơ giả lập" | ✅ | Mô tả đúng mẫu, đúng phạm vi, có nhãn giả lập |
| 2 | "Người VN có tỷ lệ ĐTĐ ~25%" | ❌ | Nhảy từ mẫu 12 hồ sơ giả lập → quần thể quốc gia: mẫu không đại diện + dữ liệu không thật |
| 3 | "Nhóm ĐTĐ huyết áp TB cao hơn (149,0 vs 123,3)" | ✅ | Mô tả trong bảng — đúng cả con số lẫn phạm vi |
| 4 | "ĐTĐ gây tăng huyết áp" | ❌ | Tuyên bố nhân quả từ một bảng quan sát chưa xử lý nhiễu; bỏ qua confounder tuổi/BMI; mẫu nhỏ không đại diện |
| 5 | "Nhóm ĐTĐ lớn tuổi hơn (62,7 vs 40,4)" | ✅ | Mô tả đúng — và chính là bằng chứng confounder cho #4 |

*Lỗi hay gặp:* cho rằng câu đúng con số = câu hợp lệ. Câu 2 và 4 đều "đúng số" nhưng **sai phạm vi kết luận** — đây là lỗi nguy hiểm nhất.

---

## BT4 — Đáp án mẫu (tình huống tiêm chủng)

**1. Hai câu hỏi nghiên cứu:**
- (Mô tả) "Trong những người ≥60 tuổi được tiêm vaccine cúm tại trạm y tế phường trong đợt 2 tuần và hoàn thành theo dõi, tỷ lệ sốt trong 7 ngày sau tiêm là bao nhiêu?"
- (Liên quan) "Trong cùng mẫu đó, tuổi có liên quan với số ngày hạn chế sinh hoạt thường ngày sau tiêm không?"

**2. Quần thể / mẫu / đơn vị quan sát:**
- Quần thể: người ≥60 tuổi tại phường đủ điều kiện tiêm cúm (nhóm câu hỏi muốn nói về).
- Mẫu: 200 người thực tế được tiêm và theo dõi.
- Đơn vị quan sát: **mỗi người được tiêm** (không phải mỗi mũi tiêm hay mỗi cuộc gọi).

**3. Bảng biến tối thiểu (ví dụ chấp nhận được):**

| Biến | Mã | Kiểu |
|---|---|---|
| `person_id` | T001… | Định danh |
| `age_years` | năm | Định lượng |
| `fever_7d` | 0/1 | Định tính danh định (nhị phân) |
| `pain_site` | 0=không,1=nhẹ,2=vừa,3=nặng | Định tính thứ bậc |
| `days_limited` | Số ngày hạn chế sinh hoạt thường ngày | Định lượng |
| `satisfaction` | 1–5 | Định tính thứ bậc |

**4. Thiết kế:** **quan sát** — trạm chỉ tiêm và ghi nhận, không phân nhóm ngẫu nhiên, không nhóm đối chứng không tiêm. → Với dữ liệu thu thập như vậy, **chưa thể** kết luận "vaccine gây sốt": chỉ mô tả được tỷ lệ sốt sau tiêm; muốn nói về nhân quả cần thiết kế/phân tích phù hợp hơn (tối thiểu là nhóm so sánh không tiêm — người không tiêm cũng có thể sốt vì lý do khác, ví dụ đang là mùa cúm).

**5. Tính được tỷ lệ sốt chưa?** — **Chưa.** Thiếu cả hai thành phần:
- *Tử số:* số người sốt trong 7 ngày sau tiêm — tình huống chưa cho con số này.
- *Mẫu số:* số người **hoàn thành theo dõi 7 ngày** — không chắc bằng 200, vì có thể có người không quay lại/không nghe điện. Mẫu số đúng là số người có dữ liệu theo dõi, không phải số người được tiêm.

Đây là kỹ năng quan trọng: **nhận ra khi chưa đủ dữ kiện để tính** thay vì tự bịa con số.

**6. Kết luận vượt quyền → phiên bản hợp lệ:**
- ❌ "Vaccine cúm gây sốt ở người già." (vượt quyền kép: vừa nhân quả vừa tự có con số khi chưa đủ dữ kiện)
- ✅ "Chưa tính được tỷ lệ sốt vì chưa biết số người sốt và số người hoàn thành theo dõi. Khi có đủ, đó là tỷ lệ mô tả trong mẫu quan sát — muốn nói vaccine *gây* sốt cần thiết kế có nhóm so sánh và xử lý yếu tố nhiễu."

*Lỗi hay gặp ở BT4:* chọn đơn vị quan sát = "mũi tiêm" (sai — mỗi người 1 mũi nhưng bảng theo dõi theo người); quên mã hóa cho biến định tính trong bảng biến.
