# datasets/ — Data contract và tổ chức

- **Trạng thái:** chưa có dataset nào (dự kiến tạo khi sản xuất M03+ được duyệt).

## Data contract (theo Blueprint §5)

1. **File raw bất biến** — mọi file trong `synthetic-raw/` sau khi phát hành không được sửa; chỉnh sửa làm trên bản sao ở `cleaned/`.
2. Mọi dataset có `codebook` trong `codebooks/`: tên biến, nhãn, đơn vị, kiểu biến, mã giá trị, missing, định nghĩa kết cục.
3. Dữ liệu giả lập: generator trong `generators/` **cố định seed** + mô tả cách sinh; mọi file kèm nhãn **SIMULATED — không phải bằng chứng lâm sàng**.
4. `expected_results` chỉ được tạo bằng cách tái tính từ dữ liệu nguồn; gắn `NOT_RUN` cho tới khi chạy SPSS thật.
5. Không dữ liệu bệnh nhân thật khi chưa có cơ sở pháp lý/bảo mật (Blueprint §5).

## Bộ dữ liệu dự kiến (chưa tạo)

| Mã | Tên | Dùng cho | Trạng thái |
|---|---|---|---|
| DS-A | `clinic_bp_synthetic` (160 hồ sơ) | M04–M11 | `NOT_CREATED` |
| DS-A-mini | dataset nhỏ có lỗi gài cho pilot | M03 | `PLANNED` (xem `lessons/M03-data-preparation/production-plan.md`) |
| DS-B | `diagnostic_test_synthetic` | E01 | `NOT_CREATED` |
| DS-C | `survival_synthetic` | E02 | `NOT_CREATED` |
| — | CDC NHANES (public, tùy chọn) | E03 | `NOT_CREATED` — chỉ sau khi dạy complex sampling + weights |

## Cấu trúc con

- `synthetic-raw/` — dữ liệu giả lập gốc (có lỗi cố tình cho bài làm sạch khi phù hợp). Bất biến.
- `cleaned/` — bản sạch tham chiếu + log biến đổi.
- `codebooks/` — một codebook/dataset, kèm danh mục lỗi gài (bản nội bộ cho tác giả, không lộ trong file học viên).
- `generators/` — script sinh dữ liệu; path tương đối từ project root; log vào `.workspace/logs/`; tuyệt đối không ghi ngoài `D:\spss`.
