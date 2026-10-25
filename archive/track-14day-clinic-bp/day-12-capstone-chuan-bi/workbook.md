# Ngày 12 — Workbook Capstone 1: Chuẩn bị dữ liệu

> Đầu vào: `capstone_screening_raw.csv` + `capstone_screening_codebook.md`.
> Mục tiêu: `capstone_my_clean.sav` 90 dòng + cleaning log. Không nhìn `answer-key.md` trước khi xong.

---

## Phần A — Thực hành (làm trên SPSS)

1. Import raw → lưu `capstone_raw.sav`. Điền đủ Label/Values/Missing/Measure theo codebook.
2. Quét lỗi và ghi cleaning log theo mẫu:

   | # | Biến | Giá trị / dòng | Vấn đề | Phát hiện bằng | Xử lý |
   |---|---|---|---|---|---|
   | 1 | … | … | … | … | … |

3. Sau xử lý: kiểm chứng lại — 90 dòng, `worker_id` duy nhất, mọi min/max trong miền hợp lý.
4. Viết báo cáo 3–5 câu: số ca, số lỗi đã xử lý, trường missing còn lại ở những biến nào.

## Phần B — Tự chấm trước khi mở đáp án

Đánh dấu [x] nếu tự tin đã làm được:

- [ ] Tìm đủ **6 vấn đề** (gợi ý: 1 lỗi ở `sleep_hours`, 1 ở `shift_type`, 1 ở `bmi`,
      1 ở `sbp`, 1 trùng dòng, 1 ở `caffeine_cups`).
- [ ] Mọi lỗi số vô lý đều thành **missing** chứ không phải xóa dòng hay đoán số.
- [ ] File raw `.csv` không bị sửa (chỉ làm việc trên `.sav`).
- [ ] Cleaning log nêu được **cách phát hiện** cho từng lỗi.

## Phần C — Câu hỏi phản biện

1. Vì sao `sbp = 260` được xử lý thành missing thay vì sửa thành 160 (số "hợp lý hơn")?
2. `shift_type = 7`: bạn chọn đặt missing — vì sao không recode thành 1 (ca đêm)?
3. Sau làm sạch, `bmi` có 89 ca hợp lệ thay vì 90 — điều này ảnh hưởng gì đến phân tích Ngày 13
   dùng `bmi`?
