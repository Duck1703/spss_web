# Beginner Pilot — Kế hoạch thử nghiệm với học viên thật

- **Căn cứ:** Blueprint §9 (Pass 3), §10 (pilot M01–M03 trước sản xuất hàng loạt).
- **Trạng thái:** kế hoạch — **chưa có pilot nào được chạy** (ghi nhận trung thực; mọi con số "kết quả" ở đây đều là trống chờ điền).

## 1. Mục tiêu pilot

- Kiểm chứng một người chưa biết SPSS/thống kê hoàn thành được M01–M03 chỉ bằng học liệu.
- Phát hiện điểm nghẽn sư phạm (thuật ngữ, bước phải đoán, quá tải thao tác) trước khi mở M04–M12.
- Đo mục tiêu Blueprint: **≥80% mục bài tập độc lập hoàn thành không xem lời giải** (mục tiêu — sẽ ghi kết quả thật).

## 2. Đối tượng & điều kiện

- ≥1 (lý tưởng 2–3) người: chưa dùng SPSS, nền thống kê tối thiểu, có MacBook + SPSS hợp lệ (preflight theo `START-HERE-MAC.md`).
- Điều kiện làm bài: chỉ dùng bài học + tài liệu module trước; **không** hỏi người hướng dẫn; có thể tra glossary.
- Thu thập đồng ý của học viên; không ghi dữ liệu cá nhân vào repo.

## 3. Quy trình

1. Preflight máy → lưu bản ghi (không chứa license key).
2. Học viên làm lần lượt M01 → M02 → M03; người quan sát ghi nhận không hướng dẫn.
3. Sau mỗi module: phỏng vấn ngắn theo mẫu §5.
4. Chấm rubric + ghi finding vào `qa/findings-register.md`; tổng hợp metrics §4.
5. Sửa template/production-plan (TB-010) → quyết định của con người về việc mở M04–M12.

## 4. Metrics ghi nhận (điền thật khi chạy)

| Chỉ số | M01 | M02 | M03 |
|---|---|---|---|
| Thời gian hoàn thành | _chưa đo_ | _chưa đo_ | _chưa đo_ |
| Mức hỗ trợ cần (không có / nhỏ / nhiều) | _chưa đo_ | _chưa đo_ | _chưa đo_ |
| Số mục bài tập độc lập | _chưa đo_ | _chưa đo_ | _chưa đo_ |
| Số mục hoàn thành không xem lời giải | _chưa đo_ | _chưa đo_ | _chưa đo_ |
| Tỷ lệ hoàn thành không lời giải | _chưa đo_ | _chưa đo_ | _chưa đo_ |
| Số câu trả lời sai ở checkpoint | _chưa đo_ | _chưa đo_ | _chưa đo_ |
| Số điểm phải đoán | _chưa đo_ | _chưa đo_ | _chưa đo_ |
| Thuật ngữ chưa giải thích phát hiện | _chưa đo_ | _chưa đo_ | _chưa đo_ |
| Lỗi kỹ thuật gặp (SPSS/macOS) | _chưa đo_ | _chưa đo_ | _chưa đo_ |

## 5. Mẫu phỏng vấn ngắn sau mỗi module

1. Chỗ nào bạn phải đọc lại/đoán?
2. Thuật ngữ nào chưa hiểu sau khi đọc?
3. Bước thao tác nào khó làm theo trên máy bạn (khác mô tả)?
4. Checkpoint: vì sao chọn phương pháp/đọc kết quả như vậy? (ghi nguyên lời trả lời)
5. Bạn có tự làm phần "tự làm không nhìn hướng dẫn" được không? Đến đâu?

## 6. Tiêu chí đánh giá pilot (đề xuất — chủ dự án duyệt khi chạy)

- `PILOT_PASS`: ≥80% mục bài tập độc lập hoàn thành không lời giải, đồng thời không phát hiện BLOCKER mới.
- `PILOT_NEEDS_REVISION`: 50–79% hoặc ≥1 MAJOR về sư phạm → sửa template rồi pilot lại.
- `PILOT_FAIL`: <50% hoặc BLOCKER sư phạm → dừng, thiết kế lại trước khi mở module mới.
