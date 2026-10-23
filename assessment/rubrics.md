# Rubrics — Thang chấm chất lượng học liệu (vận hành)

- **Căn cứ:** Blueprint §9 (thang 100, ngưỡng 85); dùng trong Pass 1–5 của `qa/QA-POLICY.md`.
- **Cách chấm:** mỗi tiêu chí có mức điểm tối đa; chấm theo bằng chứng, không theo cảm giác. **Một BLOCKER bất kể → 0 (module không đạt) dù tổng điểm cao.**

## Bảng chấm chi tiết

### 1. Chính xác thống kê & diễn giải y khoa — 30đ

| Mức | Điểm | Mô tả |
|---|---|---|
| Đạt đủ | 26–30 | Mọi phép thử khớp câu hỏi + thiết kế + kiểu biến; giả định nêu đủ; diễn giải ước lượng/CI/p/effect size đúng; kết luận trong giới hạn thiết kế |
| Thiếu nhẹ | 16–25 | Sai sót nhỏ không đổi kết luận (ví dụ thiếu 1 giả định phụ); đã có sửa rõ |
| Thiếu nặng | 1–15 | Nhiều điểm mơ hồ/dễ hiểu nhầm; diễn giải vượt thiết kế nhưng không đổi kết luận chính |
| Không đạt | 0 (BLOCKER) | Sai phép thử/diễn giải đổi kết luận; tương quan→nhân quả |

### 2. Sư phạm cho người mới — 25đ

| Mức | Điểm | Mô tả |
|---|---|---|
| Đạt đủ | 21–25 | Mở bằng vấn đề y khoa; thuật ngữ đều định nghĩa khi xuất hiện; tiên quyết khớp `curriculum/concept-map.md`; ví dụ trực quan; checkpoint kiểm tra được lý do chọn phương pháp |
| Thiếu nhẹ | 13–20 | Vài thuật ngữ/bước còn phải đoán; ví dụ thiếu minh họa |
| Thiếu nặng | 1–12 | Cấu trúc khó theo; yêu cầu kiến thức ngoài tiên quyết khai báo |
| Không đạt | 0 | Người mới không thể hoàn thành do thiếu đầu vào/giải thích bắt buộc |

### 3. Đúng thao tác SPSS/macOS — 15đ

| Mức | Điểm | Mô tả |
|---|---|---|
| Đạt đủ | 13–15 | Menu/dialog/syntax khớp version–chip–macOS đã kiểm chứng; có ghi chú khác biệt version; không hứa chức năng ngoài license |
| Thiếu nhẹ | 8–12 | Đúng phần lớn nhưng thiếu ghi chú version hoặc ảnh chụp nguồn gốc chưa đủ |
| Thiếu nặng | 1–7 | Thao tác lệch version; chưa kiểm chứng mà không ghi `NOT_RUN` |
| Không đạt | 0 | Yêu cầu chức năng không có trong bản SPSS dùng, không cảnh báo |

### 4. Tái lập dữ liệu và Output — 15đ

| Mức | Điểm | Mô tả |
|---|---|---|
| Đạt đủ | 13–15 | Dataset đủ raw bất biến + codebook + seed/cách sinh; expected output tái tạo được từ source; syntax chạy lại được trên môi trường chốt |
| Thiếu nhẹ | 8–12 | Tái tạo được nhưng thiếu log/seed/ghi chú |
| Thiếu nặng | 1–7 | Một phần expected không khớp; thiếu file đầu vào |
| Không đạt | 0 (BLOCKER) | Expected result không đối chiếu được với dữ liệu |

### 5. Ngữ cảnh y khoa, đạo đức, dữ liệu — 10đ

| Mức | Điểm | Mô tả |
|---|---|---|
| Đạt đủ | 9–10 | Tình huống y khoa thực tế-nhưng-an toàn; dữ liệu giả lập nhãn rõ; không dữ liệu bệnh nhân thật; nêu giới hạn lâm sàng |
| Thiếu nhẹ | 5–8 | Thiếu nhãn SIMULATED ở một vị trí; giới hạn nêu chưa rõ |
| Thiếu nặng | 1–4 | Tình huống gợi nhầm bằng chứng thật |
| Không đạt | 0 (BLOCKER) | Lộ dữ liệu bệnh nhân thật |

### 6. Nguồn và phiên bản — 5đ

| Mức | Điểm | Mô tả |
|---|---|---|
| Đạt đủ | 5 | Claim có nguồn `VERIFIED_SOURCE`; metadata đầy đủ; version tài liệu/phần mềm ghi rõ |
| Thiếu | 1–4 | Thiếu ngày truy cập/version; vài claim phụ chưa truy được nguồn |
| Không đạt | 0 | Claim chính dựa trên nguồn `PENDING_VERIFICATION`/không tồn tại |

## Quy tắc tổng hợp

- Tổng ≥85/100 **và** không còn `OPEN` BLOCKER/MAJOR **và** đủ 5 pass → đề xuất `HUMAN_APPROVAL` (con người quyết).
- Có ≥1 BLOCKER `OPEN` → module **không đạt**, dù điểm cao.
- Mục tiêu pilot (Blueprint §9): ≥80% mục bài tập độc lập hoàn thành không xem lời giải — ghi kết quả đo thật vào `assessment/beginner-pilot.md` khi pilot chạy.
