# Ngày 09 — Workbook: Tương quan

> Đầu vào: `clinic_bp_my_clean.sav`. Không nhìn `answer-key.md`.

---

## BT1 — Tự chạy một cặp khác

1. Scatterplot `age_years` (X) × `sbp_baseline` (Y) — mô tả hình dạng bằng 1 câu.
2. Chạy Pearson + Spearman cho cặp này. Ghi r, ρ, p, n.
3. Viết một câu kết quả đầy đủ.

## BT2 — Pearson hay Spearman?

Với mỗi cặp, chọn hệ số phù hợp hơn và vì sao:

1. `cân_nặng` (kg) × `chiều_cao` (cm) trên 300 học sinh — scatterplot gần đường thẳng.
2. `thang_đau` (0–10) × `điểm_hài_lòng` (1–5) trên 150 bệnh nhân.
3. `thu nhập` × `số lần tái khám` — scatterplot hình cong rõ, nhiều ca thu nhập cực cao.
4. `nhiệt độ cơ thể` × `nhịp tim` — scatterplot tuyến tính, không cực trị.

## BT3 — Đọc output được giao

Correlations cho `coffee_cups` × `sbp`: r = 0,18, p = 0,045, n = 220.

1. Liên hệ này có "có nghĩa thống kê" không?
2. Độ mạnh liên hệ thế nào? (dùng thước tham khảo ở mục C)
3. Phát biểu nào đúng hơn — giải thích:
   a. "Uống cà phê có liên quan có ý nghĩa đến tăng huyết áp."
   b. "Trong mẫu này, số ly cà phê và huyết áp có tương quan dương yếu; liên hệ nhỏ và cần cẩn trọng."

## BT4 — Tình huống mới

Bạn đang khám phá liên quan giữa `giờ ngủ` và `đường huyết đói` trên 100 người.

1. 2 bước bạn làm trước khi chạy hệ số tương quan.
2. Nếu scatterplot cho thấy hình chữ U (ngủ rất ít và rất nhiều đều đường cao),
   Pearson r có phản ánh đúng không? Bạn sẽ làm gì?
