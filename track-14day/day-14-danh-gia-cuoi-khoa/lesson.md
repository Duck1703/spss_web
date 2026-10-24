# Ngày 14 — Đánh giá thực hành cuối khóa

> **Lộ trình:** Practice-first 14 ngày · **Thời lượng:** ~120 phút làm bài + 30 phút tự chấm
> **Dataset:** `assessment_gp_raw.csv` — **dataset hoàn toàn mới**, chưa từng mở.
> **Trạng thái:** DRAFT — `MAC_SPSS_VERIFICATION_PENDING`. Kết quả mong đợi `NOT_RUN`.

---

## A. Hôm nay bạn sẽ làm gì

Không có bài học mới. Bạn nhận **một tình huống hoàn chỉnh** và phải tự đi từ đầu đến cuối —
đây là bài kiểm tra xem 14 ngày có để lại kỹ năng thật không.

## B. Đề bài

Phòng khám đa khoa gửi bạn `assessment_gp_raw.csv` — sàng lọc sức khỏe của người lớn, kèm
codebook `datasets/codebooks/assessment_gp_codebook.md`. Họ hỏi:

> *"Trong mẫu này, các đặc điểm chính của người được sàng lọc là gì? Và có yếu tố nào trong dữ
> liệu đi cùng với huyết áp tâm thu không?"*

## C. Sản phẩm phải nộp (checklist bắt buộc)

| # | Sản phẩm | Chi tiết |
|---|---|---|
| 1 | File `.sav` đã chuẩn bị | Import + đầy đủ Label/Values/Missing/Measure + làm sạch **4 lỗi** trong file raw |
| 2 | Cleaning log | Bảng ghi 4 vấn đề + cách phát hiện + xử lý |
| 3 | Bảng mô tả | Bảng 1: tuổi, giới, BMI, SBP, glucose, hút thuốc, vận động — đúng chỉ số cho từng kiểu biến |
| 4 | ≥1 phân tích suy luận | Chọn bằng bảng quyết định Ngày 10; ghi lý do chọn; đã kiểm tra điều kiện |
| 5 | File output `.spv` | Có đủ output cho mục 3–4, đã đặt tên bảng |
| 6 | Bản kết quả viết tay | 1 trang: mô tả + kết quả phân tích + **ít nhất 2 giới hạn** |

**Điều kiện làm bài:** tự làm, không mở đáp án các ngày trước; mở codebook và dùng lại bảng
quyết định Ngày 10 được phép (thi mở tài liệu là đúng nghề).

## D. Lộ trình gợi ý 120 phút

| Thời gian | Việc |
|---|---|
| 0–15' | Đọc codebook, import, thiết lập Variable View |
| 15–40' | Quét + xử lý lỗi, viết cleaning log, lưu `assessment_my_clean.sav` |
| 40–60' | Bảng mô tả + 1 biểu đồ nếu hữu ích |
| 60–90' | Chọn + chạy phân tích suy luận, kiểm tra điều kiện |
| 90–110' | Viết trang kết quả |
| 110–120' | Đối chiếu checklist, lưu `.spv` |

## E. Sau khi nộp — tự chấm bằng rubric

Mở `workbook.md` → rubric chấm 100 điểm → tự chấm trung thực trước khi đọc `answer-key.md`
(đáp án có kết quả mong đợi của mọi phân tích khả dĩ trên dataset này).

**Ngưỡng:** ≥85/100 và không mất hoàn toàn hạng mục nào → đạt chuẩn cuối khóa.
Dưới ngưỡng → rubric chỉ ra ngày nào cần học lại.

## F. Giới hạn của đánh giá (thành thật)

Đạt chuẩn nghĩa là bạn **đã thực hiện được quy trình phân tích cơ bản từ đầu đến cuối trên một
dataset mới** — không nghĩa là "thành thạo SPSS". Hồi quy, điều chỉnh nhiễu, nonparametric,
syntax… vẫn chờ ở chương trình mở rộng. Nhưng bạn đã có đủ nền để tự học tiếp đúng hướng —
đó là mục tiêu của 14 ngày.
