# Ngày 13 — Workbook Capstone 2: Phân tích

> Đầu vào: `capstone_my_clean.sav` (Ngày 12) hoặc `capstone_screening_clean.csv` nếu bỏ qua Ngày 12.
> Làm toàn bộ trước, mở `answer-key.md` sau.

---

## Phần A — Kế hoạch (viết trước, không chạy SPSS)

Điền bảng kế hoạch ở lesson mục C cho 3 câu hỏi:

1. **Q1 (bắt buộc):** SBP theo `shift_type`.
2. **Q2 (chọn):** một câu hỏi tương quan hoặc bảng chéo từ các biến còn lại.
3. **Q3 (chọn):** một câu mô tả (Bảng 1 mini cho 90 công nhân).

## Phần B — Thực hiện

1. Tạo `sbp_high` (0 = <140, 1 = ≥140) bằng Recode; kiểm tra Frequencies.
2. Chạy Q1 — đọc đúng dòng theo Levene.
3. Chạy Q2/Q3 đã chọn.
4. Lưu `capstone_analysis.spv`.

## Phần C — Viết kết quả (một trang)

1. Đoạn 1: mô tả mẫu (n, tuổi, giới, % ca đêm).
2. Đoạn 2: trả lời Q1 — đầy đủ mean hai nhóm + diff + 95% CI + t/p + câu giới hạn.
3. Đoạn 3: kết quả Q2/Q3.

## Phần D — Tự chấm trước khi mở đáp án (rubric)

| Tiêu chí | Tự chấm 0–2 |
|---|---|
| Chọn đúng phương pháp cho từng câu hỏi (0 sai / 1 lý do mập mờ / 2 đúng + lý do) | |
| Kiểm tra điều kiện trước khi chạy (Levene, expected count, missing n) | |
| Số liệu khớp bản tham chiếu trong sai số làm tròn | |
| Câu kết quả đủ 4 thành phần + không quá tay | |
| Nêu được ≥1 giới hạn thật sự của phân tích (missing, thiết kế, n nhỏ) | |
| **Tổng /10** | |

Đạt ≥8/10 mới coi như "sẵn sàng cho Ngày 14".
