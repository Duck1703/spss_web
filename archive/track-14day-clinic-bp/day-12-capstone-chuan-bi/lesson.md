# Ngày 12 — Capstone phần 1: Chuẩn bị dữ liệu

> **Lộ trình:** Practice-first 14 ngày · **Thời lượng:** ~90–120 phút · **Dataset:** `capstone_screening_raw.csv`
> **Trạng thái:** DRAFT — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`. Đây là bài tập độc lập —
> không còn hướng dẫn từng cú click.

---

## A. Hôm nay bạn sẽ làm gì

1. Tự import một dataset **mới hoàn toàn** và thiết lập Variable View theo codebook.
2. Tự soi và xử lý **6 vấn đề chất lượng dữ liệu** (số lỗi được tiết lộ để bạn biết khi nào dừng tìm).
3. Viết **cleaning log** và báo cáo chất lượng dữ liệu ngắn.
4. Lưu `capstone_my_clean.sav` — ngày mai phân tích trên file này.

## B. Tình huống y khoa

Khoa y tế khu công nghiệp gửi bạn file `capstone_screening_raw.csv` — kết quả khám định kỳ của
công nhân, kèm codebook `datasets/codebooks/capstone_screening_codebook.md`. Câu hỏi họ quan tâm
(để dành Ngày 13): *"Làm ca đêm luân phiên có đi kèm huyết áp cao hơn?"*

Họ cảnh báo: *"file xuất từ hệ thống cũ, có thể có lỗi nhập liệu — kiểm tra trước khi phân tích."*

## C. Chuẩn bị trước khi mở SPSS

- Đọc codebook trước — từng biến, đơn vị, bộ mã, kiểu dữ liệu mong đợi.
- Dataset raw có **91 dòng** (gồm 1 dòng trùng lặp). Bản sạch chuẩn có **90 dòng**.
- Lỗi gài trong file: **đúng 6 vấn đề** — việc của bạn là tìm đủ và xử lý có lý do.

## D. Gợi ý quy trình (tự triển khai)

Đây là khung — bạn tự quyết định từng thao tác (Ngày 01–03 đã dạy đủ):

1. **Import** CSV → lưu ngay `capstone_raw.sav` (file gốc phải còn nguyên).
2. **Variable View:** đặt Label + Values + Missing + Measure cho tất cả biến theo codebook.
3. **Vòng quét lỗi** (theo thứ tự gợi ý, đổi tự do):
   - Descriptives cho các biến Scale → soi min/max vô lý (giờ ngủ âm? cà phê vài chục ly?
     huyết áp 260?)
   - Frequencies cho các biến mã → mã ngoài danh mục (`shift_type` chỉ được {0,1}),
     missing bất ngờ.
   - Identify Duplicate Cases theo `worker_id` → trùng lặp.
4. **Xử lý:** lỗi số liệu vô lý → đặt **system-missing** (không xóa dòng, không đoán số);
   dòng trùng → giữ bản đầu; missing sẵn có → ghi nhận, không bịa.
5. **Cleaning log:** bảng | biến | mã/dòng | vấn đề | cách phát hiện | xử lý | — 6 dòng.
6. Lưu `capstone_my_clean.sav` (sẽ còn dùng Ngày 13).

## E. Kết quả mong đợi

- `capstone_my_clean.sav`: 90 dòng, không trùng `worker_id`, mọi giá trị trong miền codebook.
- Cleaning log đủ 6 mục — mỗi mục nêu được "phát hiện bằng gì".
- Đoạn báo cáo ngắn 3–5 câu: tổng số ca, số ca có ≥1 trường missing sau làm sạch, loại lỗi
  gặp nhiều nhất, nhận xét chung.

Đối chiếu số mô tả bản sạch chuẩn (`NOT_RUN`, Python): `sbp` n=89, mean=131,4, SD=11,4;
`sleep_hours` n=89, mean=6,7, SD=1,1; `shift_type` {0:49, 1:40}, missing 1.

## F. Bài tập tự làm

`workbook.md` — checklist tự chấm + câu hỏi phản biện.

## G. Đáp án

`answer-key.md` — danh mục 6 lỗi + xử lý tham chiếu. **Chỉ mở sau khi đã tự tìm đủ.**

## H. Checkpoint qua bài

- [ ] `capstone_my_clean.sav`: 90 dòng, 0 trùng ID.
- [ ] Cleaning log 6 dòng đầy đủ.
- [ ] Báo cáo chất lượng dữ liệu 3–5 câu.

## I. Đọc thêm (không bắt buộc)

- Nếu nghi ngờ sót lỗi: chạy **Validate Data** (`Data → Validation → Validate Data`) — chức năng
  có sẵn để áp quy tắc miền giá trị một lần cho nhiều biến. Không bắt buộc hôm nay.
- Thói quen nghề nghiệp: làm sạch **luôn viết log** — người khác (và bạn sau 3 tháng) phải truy
  lại được mọi quyết định.
