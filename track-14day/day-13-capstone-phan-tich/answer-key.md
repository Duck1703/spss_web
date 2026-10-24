# Ngày 13 — Đáp án Capstone 2

> Cross-check Python trên `capstone_screening_clean.csv` (`NOT_RUN` trên SPSS).

---

## Q1 — `sbp` theo `shift_type` (câu hỏi chính)

- Ca ngày: n=48, mean=129,8 mmHg (SD≈11) · Ca đêm: n=40, mean=133,6 (SD≈12).
- diff (đêm − ngày) ≈ +3,8 mmHg, 95% CI [−1,0 ; 8,6] *(dấu tùy thứ tự Define Groups)*;
  **t ≈ −1,59, p = 0,116** → chưa đủ bằng chứng khác biệt.
- Câu kết quả mẫu: "Công nhân ca đêm luân phiên có SBP trung bình cao hơn ca ngày ~3,8 mmHg,
  nhưng khác biệt tương thích với dao động ngẫu nhiên (95% CI: −1,0 đến 8,6; p = 0,116; n=88).
  Mẫu nhỏ và một ca `shift_type` missing; không kết luận 'ca đêm an toàn/không ảnh hưởng'."

## Q2/Q3 — các lựa chọn điển hình

| Câu hỏi | Kỳ vọng |
|---|---|
| `bmi` × `sbp` | **r = 0,47, p < 0,001, n = 89** — tương quan dương vừa |
| đang hút × `sbp_high` | bảng [[50,19],[18,2]]; χ²=2,64, **p=0,104**, min expected=4,7 → **đọc Fisher** (p exact có thể khác chút); hướng: nhóm đang hút 2/20 (10%) vs 19/69 (27,5%) đạt SBP≥140 — quan hệ ngược, nhưng ô nhỏ → kết luận rất thận trọng |
| Bảng 1 | tuổi 37,2±9,0 (n=90); BMI 24,5±3,6 (n=89); SBP 131,4±11,4 (n=89); Nữ 32/90 (35,6%); ca đêm 40/89 (44,9%); SBP≥140: 21/89 (23,6%) |

## Điểm ăn/thua phổ biến

- Đọc p=0,116 thành "ca đêm KHÔNG ảnh hưởng" → sai; câu đúng: "chưa phát hiện khác biệt
  có ý nghĩa trong mẫu này" (CI vẫn chứa khả năng +8,6 mmHg).
- Quên kiểm tra expected count ở crosstabs hút thuốc → min expected 4,7 <5, phải đọc Fisher.
- Bỏ sót mẫu số: mọi số capstone phải ghi n (88 cho t-test, 89 cho tương quan vì missing `bmi`/`sbp`).
- So sánh "đang hút" tách nhóm {0,1} gộp lại là hợp lý về lâm sàng — nhưng phải nêu rõ cách gộp.

## Nếu số của bạn lệch

- n=90 thay vì 88/89 → bạn đang chạy trên file raw; quay lại bản sạch.
- Mean lệch nhiều → kiểm tra đã xử lý `sbp=260` (W058) thành missing chưa — nó kéo mean lên ~+1,4.
