# QA-POLICY — Chính sách kiểm định chất lượng

- **Phiên bản:** 1.0 · **Ngày:** 2026-10-24
- **Căn cứ:** Blueprint §9; vận hành cùng `project-control/WORKFLOW-CONTRACT.md` và `assessment/rubrics.md`.
- **Áp dụng cho:** mọi bài học, workbook, answer key, dataset, syntax, expected output, và tài liệu hướng dẫn phát hành.

## 1. Năm lượt kiểm định (5 pass)

| Pass | Tên | Người thực hiện | Nội dung |
|---|---|---|---|
| 1 | Scientific/statistical | Reviewer có chuyên môn thống kê/y sinh (con người; AI chỉ hỗ trợ) | Câu hỏi nghiên cứu, kiểu biến, thiết kế, phép thử, giả định, p/CI/effect size, giới hạn, tính đúng của câu kết luận |
| 2 | SPSS/macOS execution | Người có máy Mac + SPSS đúng version | Chạy GUI + Syntax tái tạo expected output; ghi version, license/module, mã lỗi, ảnh chụp có nguồn gốc, nhật ký thực thi. **Chưa chạy thật → `NOT_RUN`, không báo PASS** |
| 3 | Beginner walkthrough | Reviewer chỉ đọc bài + kiến thức bài trước; lý tưởng có người mới thật | Đánh dấu thuật ngữ chưa giải thích, bước phải đoán, thao tác quá tải, ví dụ thiếu trực quan |
| 4 | Source & citation audit | Reviewer nguồn | Kiểm tra link, version, nguồn sơ cấp, điều kiện áp dụng, quyền sử dụng tư liệu |
| 5 | Independent adjudication | Reviewer thứ hai khác người biên soạn | Phán xét finding bất đồng; **người biên soạn không tự đóng lỗi của mình** |

## 2. Thang điểm (100) và ngưỡng phát hành

| Tiêu chí | Điểm |
|---|---|
| Chính xác thống kê & diễn giải y khoa | 30 |
| Sư phạm cho người mới | 25 |
| Đúng thao tác SPSS/macOS | 15 |
| Tái lập dữ liệu và Output | 15 |
| Ngữ cảnh y khoa, đạo đức, dữ liệu | 10 |
| Nguồn và phiên bản | 5 |

- **Phát hành:** ≥ 85/100 **và** không còn `OPEN` BLOCKER/MAJOR **và** đủ 5 pass **và** `HUMAN_APPROVAL`.
- **Mục tiêu pilot:** ≥80% mục bài tập độc lập do học viên hoàn thành không xem lời giải (mục tiêu đề xuất — ghi kết quả thật khi có pilot).
- Ghi nhận: thời gian hoàn thành, mức hỗ trợ cần, lời giải sai, điểm phải đoán.

## 3. BLOCKER — loại bất kể điểm

- Sai phép thử hoặc diễn giải làm đổi kết luận.
- Lấy tương quan làm bằng chứng nhân quả.
- Lộ dữ liệu bệnh nhân thật.
- Expected result không đối chiếu được với dữ liệu nguồn.
- Hướng dẫn yêu cầu chức năng không có trong bản SPSS đang dùng mà không cảnh báo.
- Phát minh kết quả thực nghiệm / bằng chứng kiểm chứng.
- Bài không thể hoàn thành do thiếu đầu vào bắt buộc.

## 4. Quy tắc bằng chứng

1. Không phát minh: screenshot, console output, p-value, CI, hay log kiểm chứng.
2. Cross-check bằng Python/R chỉ là tham chiếu — ghi nhãn rõ "**không phải SPSS runtime**".
3. `.sav`/`.sps`/expected output mặc định `NOT_RUN`; chỉ `VERIFIED` khi có nhật ký chạy trên version/chip/macOS chốt.
4. Mọi claim thống kê truy về nguồn trong `references/source-register.md` hoặc suy trực tiếp từ dataset bài học.
5. Dữ liệu giả lập gắn nhãn SIMULATED trong file, trong codebook, trong bài — không trình bày như bằng chứng lâm sàng.
6. Sai lỗi thống kê vật chất → fail toàn bài bất kể điểm trung bình (trùng BLOCKER thứ nhất).

## 5. Quy trình xử lý finding

1. Reviewer ghi finding vào `qa/findings-register.md` (hoặc `qa-report.md` của module) theo cấu trúc chuẩn ở `WORKFLOW-CONTRACT.md` §4.
2. Owner xử lý → đổi `RESOLVED` kèm bằng chứng sửa.
3. Người khác owner kiểm chứng → đóng hoặc `REVERIFY_REQUIRED`.
4. Bất đồng → Pass 5 phán xét; kết luận ghi vào finding.
5. Module phát hành rồi mà phát hiện drift nguồn/version → mở finding `MAJOR`+ và đưa module về `INDEPENDENT_REVIEW`.

## 6. Hồ sơ QA tối thiểu mỗi module (`qa-report.md` trong thư mục module)

- Điểm theo 6 tiêu chí + tổng; danh sách finding và trạng thái cuối; môi trường thực thi (version/chip/macOS/module license) hoặc ghi `NOT_RUN`; bằng chứng Pass 2 (log/ảnh có nguồn); kết quả pilot nếu có; quyết định cuối và người duyệt.
