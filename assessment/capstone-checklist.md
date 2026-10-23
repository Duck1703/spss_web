# Capstone Checklist — M12 Mini-project nghiên cứu y khoa

- **Dùng khi:** chấm hồ sơ mini-project M12 (Blueprint §3, GATE 5).
- **Nguyên tắc:** người khác phải tái tạo được kết quả từ **dữ liệu + syntax + phiên bản phần mềm** ghi lại — không cần hỏi tác giả.

## A. Câu hỏi & thiết kế

- [ ] Câu hỏi nghiên cứu viết rõ: quần thể, biến kết cục, biến giải thích, đơn vị quan sát
- [ ] Loại câu hỏi (mô tả/so sánh/liên quan/dự báo) khớp với phân tích đã chọn
- [ ] Thiết kế nghiên cứu mô tả đúng (nguồn dữ liệu, cách chọn mẫu — hoặc nêu rõ là dữ liệu giả lập/bài tập)
- [ ] Giới hạn suy luận nhân quả nêu trước khi phân tích

## B. Dữ liệu & chuẩn bị

- [ ] File raw nguyên vẹn (checksum hoặc ghi chú nguồn)
- [ ] `codebook.md`: tên/nhãn/kiểu/đơn vị/missing/định nghĩa kết cục đầy đủ
- [ ] `cleaning_log.md`: mọi quyết định xử lý có lý do + bằng chứng
- [ ] Nhãn SIMULATED rõ nếu dữ liệu giả lập

## C. Phương pháp & giả định

- [ ] Phép thử/mô hình được chọn từ cấu trúc dữ liệu + câu hỏi (giải trình bằng lời)
- [ ] Giả định được kiểm tra và báo cáo cách kiểm tra
- [ ] Phương án thay thế (phi tham số/Welch/Fisher…) được cân nhắc có lý do
- [ ] Module SPSS cần thiết ghi rõ; tương thích license được kiểm tra

## D. Thực thi & tái tạo

- [ ] File `.sps` đầy đủ chạy lại được từ raw → kết quả (không ghi đè raw)
- [ ] Version SPSS, chip, macOS, module license ghi trong hồ sơ
- [ ] Mọi con số trong phần Results đối chiếu được với output (hoặc expected_results tái tính)
- [ ] Không có bước thủ công "vô hình" — mọi thao tác có trong syntax hoặc ghi chú

## E. Báo cáo & diễn giải

- [ ] Methods: thiết kế, biến, phương pháp, phần mềm (theo SAMPL tối thiểu)
- [ ] Results: ước lượng + CI 95% + p khi phù hợp + cỡ hiệu ứng; bảng/biểu đồ có chú giải đơn vị
- [ ] Diễn giải đúng thiết kế (không OR→RR sai chỗ, không association→causation)
- [ ] Checklist báo cáo phù hợp thiết kế: STROBE (quan sát) / CONSORT (RCT) / STARD (chẩn đoán) — kèm lý do chọn
- [ ] ≥3 giới hạn nghiên cứu nêu thật

## F. Bảo vệ miệng ngắn (rubric gợi ý)

- [ ] Vì sao chọn phương pháp này? (trả lời từ cấu trúc dữ liệu + câu hỏi)
- [ ] Giả định nào quan trọng nhất và kiểm tra thế nào?
- [ ] Kết quả này **không** nói được điều gì?
- [ ] Nếu làm lại với dữ liệu thật, khác gì so với bài tập giả lập?

---
*Checklist này là khung chấm; tiêu chí đạt/trượt chi tiết theo `assessment/rubrics.md` + quyết định của hội đồng con người ở `HUMAN_APPROVAL`.*
