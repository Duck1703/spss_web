# Production Plan — M01: Tư duy nghiên cứu y khoa và ngôn ngữ thống kê

- **Tuần:** 1 · **Trạng thái:** `PLANNED` — chờ HUMAN_APPROVAL để vào `SOURCE_RESEARCH`
- **Phạm vi pilot:** có (M01–M03 theo Blueprint §10)
- **Ràng buộc:** đây là kế hoạch sản xuất, **không phải bài học**. Chưa viết `lesson.md`/`workbook.md`/`answer-key.md`.

## 1. Scope

- Phạm vi trong: câu hỏi nghiên cứu y khoa; kiểu câu hỏi (mô tả/so sánh/liên quan); quần thể–mẫu; đơn vị quan sát; kiểu biến; liên quan ≠ nhân quả.
- Phạm vi ngoài: **không mở SPSS** (Blueprint §10: "không SPSS ở phần đầu"); không kiểm định; không p-value.
- Kết thúc module: người học đọc một tình huống y khoa và xác định được câu hỏi, đơn vị quan sát, kiểu từng biến.

## 2. Learning goals (đo được, 3–5 mục)

1. Viết được câu hỏi nghiên cứu đủ: quần thể + chỉ số/biến + đơn vị quan sát.
2. Phân loại đúng câu hỏi (mô tả/so sánh/liên quan) ở 3 tình huống cho sẵn.
3. Xác định đúng kiểu của ≥10/12 biến trong bảng cho trước (định tính danh định/thứ bậc; định lượng).
4. Nêu được ≥1 lý do một mối liên quan trong ví dụ không chứng minh nhân quả.

## 3. Prerequisites

- Không có (module mở đầu). Kỹ năng số học cơ bản: đọc bảng, tính %.
- Checkpoint tiên quyết nội bộ: tự kiểm "một dòng trong bảng đại diện cho cái gì?"

## 4. Core examples

- **Ví dụ trụ cột (theo Blueprint §10):** "Trong 12 hồ sơ minh họa, tuổi trung bình và tỷ lệ đái tháo đường là bao nhiêu?" → bảng 12 hồ sơ giả lập; mỗi dòng = 1 bệnh nhân; `age_years` định lượng, `diabetes_flag` nhị phân; vẽ bảng biến trên giấy **trước** khi đụng SPSS.
- **Phản ví dụ nhân quả:** người uống cà phê nhiều có tỷ lệ mất ngủ cao hơn → cà phê gây mất ngủ? (vai trò yếu tố nhiễu/ngược nhân quả).
- **3 câu hỏi mẫu 3 loại:** mô tả (tỷ lệ đái tháo đường trong mẫu), so sánh (huyết áp nhóm A vs B), liên quan (BMI vs huyết áp).

## 5. Required sources

| Nguồn | Dùng cho | Trạng thái |
|---|---|---|
| S03 OpenIntro ISLBS Ch.1 | Khung kiểu biến, data matrix, thiết kế quan sát vs thí nghiệm | `VERIFIED_SOURCE` — cần đọc & viết lại (R-04) |
| S05 SAMPL | Tư duy báo cáo có trách nhiệm (tham chiếu xa) | `VERIFIED_SOURCE` |
| Blueprint §1, §10 | Phạm vi, nguyên tắc, demo tuần đầu | Internal |

## 6. Planned exercises

- BT1: viết câu hỏi nghiên cứu cho 3 tình huống y khoa ngắn.
- BT2: phân loại 12 biến (bảng cho sẵn, có bẫy: mã số `sex_code=1/2` là định tính dù là số; `patient_id` không phải biến phân tích).
- BT3: đánh dấu câu kết luận vượt quyền (tuyên bố nhân quả từ dữ liệu quan sát).
- BT4 (tự làm không nhìn hướng dẫn): tự viết câu hỏi + bảng biến cho một tình huống mới.

## 7. Required datasets

- `mini_records` — 12 hồ sơ giả lập (inline trong bài hoặc `datasets/synthetic-raw/mini_records.csv`; quyết định khi LEARNING_DESIGN). Biến tối thiểu: `patient_id`, `age_years`, `sex_code`, `diabetes_flag`, `sbp_baseline` — khớp naming với DS-A để M02 tái sử dụng khi nhập `.sav`.
- Nhãn SIMULATED bắt buộc trong file + codebook mini.

## 8. Expected outputs (artifacts)

- `lesson.md` (đủ 12 mục chuẩn Blueprint §6, phần "Mac walkthrough"/"SPSS Syntax" ghi "không áp dụng — module không dùng SPSS").
- `workbook.md` — BT1–BT4.
- `answer-key.md` — đáp án có giải thích; không cần expected output SPSS.
- `qa-report.md` — sau Pass 1/3/4/5 (Pass 2 không áp dụng — ghi rõ lý do, không phải "bỏ qua âm thầm").

## 9. QA checklist (theo module)

- [ ] Mọi kiểu biến dùng đúng khái niệm; có phản ví dụ (số ≠ định lượng).
- [ ] Không thuật ngữ nào dùng trước khi định nghĩa (đối chiếu `concept-map.md`).
- [ ] Ví dụ nhân quả có phản ví dụ rõ.
- [ ] Bài tập có đủ đầu vào (bảng biến kèm theo).
- [ ] Claim thống kê nào cũng truy được S03/Blueprint.
- [ ] Pass 3: người mới đọc xong phân loại được biến không cần hỏi.

## 10. Risks & unresolved questions

| Rủi ro/câu hỏi | Mức | Xử lý dự kiến |
|---|---|---|
| Người học "tăng tốc" muốn mở SPSS ngay | Thấp | Bài có lưu ý lý do chưa mở SPSS; gợi ý đọc trước START-HERE-MAC |
| Bảng 12 hồ sơ inline hay file CSV? | OPEN | Quyết ở LEARNING_DESIGN — cân nhắc tái dùng cho M02 |
| Thuật ngữ "population/sample" dễ nhầm với nghĩa dân số | Trung bình | Cần phản ví dụ + ví dụ y khoa cụ thể trong glossary |
| Độ khó câu hỏi nghiên cứu: giới hạn PICO hay dạng đơn giản? | OPEN | Xu hướng dạng đơn giản (quần thể–biến–đơn vị); PICO chỉ giới thiệu nhận biết, không bắt buộc |
