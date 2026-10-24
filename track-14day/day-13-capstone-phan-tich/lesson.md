# Ngày 13 — Capstone phần 2: Phân tích

> **Lộ trình:** Practice-first 14 ngày · **Thời lượng:** ~120 phút · **Dataset:** `capstone_my_clean.sav` (từ Ngày 12)
> **Trạng thái:** DRAFT — `MAC_SPSS_VERIFICATION_PENDING`. Kết quả mong đợi `NOT_RUN`.

---

## A. Hôm nay bạn sẽ làm gì

1. Tự đặt và chọn **2–3 câu hỏi phân tích** từ bối cảnh khoa y tế.
2. Chọn phương pháp bằng bảng quyết định Ngày 10 — tự chọn, tự kiểm tra điều kiện.
3. Chạy, lưu output `.spv`, và viết **một trang kết quả ngắn**.
4. Tự chấm bằng rubric trước khi đối chiếu đáp án.

## B. Bối cảnh (nhắc lại)

Khoa y tế khu công nghiệp muốn biết: *"Làm **ca đêm luân phiên** có đi kèm huyết áp cao hơn?"*
— câu hỏi chính. Họ cũng muốn bản mô tả đội ngũ 90 công nhân và gợi ý thêm: *"anh chị tự xem
còn yếu tố nào đi cùng huyết áp trong dữ liệu không"* — câu hỏi mở.

## C. Kế hoạch phân tích (viết ra trước khi chạy)

Tự điền vào khung (mỗi câu hỏi 3 dòng — theo bảng quyết định Ngày 10):

| # | Câu hỏi | Biến kết quả (kiểu) | Biến giải thích (kiểu) | Phương pháp | Điều kiện cần kiểm tra |
|---|---|---|---|---|---|
| 1 | SBP khác nhau giữa ca ngày và ca đêm? | `sbp` (Scale) | `shift_type` (2 nhóm độc lập) | ? | ? |
| 2 | (tự chọn) | | | | |
| 3 | (tự chọn) | | | | |

Gợi ý câu hỏi 2–3 (chọn, không bắt buộc đúng ý): `bmi` × `sbp` · `smoking_status` (3 nhóm) × SBP
≥140 · `sleep_hours` × `sbp` · mô tả tỷ lệ SBP ≥140 toàn mẫu.

## D. Gợi ý quy trình (tự triển khai)

1. Mở `capstone_my_clean.sav` — chạy lại nhanh Frequencies/Descriptives để "nhớ" dữ liệu.
2. Tạo biến phụ nếu cần: `sbp_high = (sbp >= 140)` bằng **Transform → Recode into Different
   Variables** hoặc Compute; đặt nhãn giá trị.
3. Chạy từng phân tích; đổi tên bảng trong Output Viewer; lưu `capstone_analysis.spv`.
4. Viết trang kết quả: mỗi câu hỏi một đoạn 2–3 câu theo mẫu Ngày 11 (n + độ lớn + CI/p +
   giới hạn), kèm 1 bảng mô tả đặc điểm mẫu.

## E. Kết quả mong đợi (đối chiếu sau khi làm — `NOT_RUN`)

- **Q1 — `sbp` ~ `shift_type`:** ngày n=48, mean=129,8 (SD≈11); đêm n=40, mean=133,6 (SD≈12);
  t ≈ −1,59, **p = 0,116**, diff ≈ −3,8 mmHg, 95% CI [−8,6 ; 1,0] → **chưa đủ bằng chứng**
  khác biệt (không phải "chứng minh giống nhau").
- **`bmi` × `sbp`:** r = 0,47, p < 0,001, n=89 — tương quan dương vừa.
- **`smoking hiện tại` × `sbp≥140`:** χ² = 2,64, p = 0,104; **min expected = 4,7 < 5** →
  đây là tình huống gọi Fisher — bảng: smoking 0/đã bỏ gộp so với đang hút theo cách gộp của bạn.
- Tỷ lệ SBP ≥140 toàn mẫu: 21/89 ≈ 23,6%.

⚠️ Một kết quả "không có nghĩa" (p=0,116) **vẫn là kết quả đáng báo cáo** — câu hỏi của khoa
y tế được trả lời là "chưa thấy khác biệt có ý nghĩa trong mẫu n=90 này", kèm CI cho biết
khác biệt thật có thể nằm trong khoảng nào.

## F. Bài tập tự làm

`workbook.md`.

## G. Đáp án

`answer-key.md` — sau khi tự làm và tự chấm.

## H. Checkpoint qua bài

- [ ] `capstone_analysis.spv` chứa đủ output cho các câu hỏi đã chọn.
- [ ] Trang kết quả: ≥1 phân tích suy luận có độ lớn + CI/p + giới hạn.
- [ ] Câu hỏi chính được trả lời đúng thận trọng (không "chứng minh ngày = đêm").

## I. Đọc thêm (không bắt buộc)

- Với câu hỏi chính, nếu muốn đi sâu hơn t-test: hỏi "độ tuổi/giới có lệch giữa 2 ca không?"
  (confounding) — kiểm tra bằng so sánh mô tả 2 nhóm. Điều chỉnh nhiễu bằng hồi quy nằm ở
  chương trình mở rộng.
- **Missing trong capstone:** `shift_type` có 1 missing → t-test chỉ trên n=88. Tập thói quen
  ghi mẫu số thực tế.
