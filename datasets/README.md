# datasets/ — Data contract và tổ chức

- **Trạng thái:** đã có 4 dataset giả lập phục vụ lộ trình 14 ngày (Task 09, quyết định D-020). Mọi file là SIMULATED.

## Data contract (theo Blueprint §5)

1. **File raw bất biến** — mọi file trong `synthetic-raw/` sau khi phát hành không được sửa; chỉnh sửa làm trên bản sao ở `cleaned/`.
2. Mọi dataset có `codebook` trong `codebooks/`: tên biến, nhãn, đơn vị, kiểu biến, mã giá trị, missing, định nghĩa kết cục.
3. Dữ liệu giả lập: generator trong `generators/` **cố định seed** + mô tả cách sinh; mọi file kèm nhãn **SIMULATED — không phải bằng chứng lâm sàng**.
4. `expected_results` chỉ được tạo bằng cách tái tính từ dữ liệu nguồn; gắn `NOT_RUN` cho tới khi chạy SPSS thật.
5. Không dữ liệu bệnh nhân thật khi chưa có cơ sở pháp lý/bảo mật (Blueprint §5).

## Bộ dữ liệu

| Mã | Tên / file | Dùng cho | Trạng thái |
|---|---|---|---|
| DS-A | `synthetic-raw/clinic_bp_v1_raw.csv` (161 dòng, 9 lỗi gài) + `cleaned/clinic_bp_v1_clean.csv` (160 dòng) | Ngày 01–11 lộ trình 14 ngày | CREATED — seed 20261024, `NOT_RUN` trên SPSS |
| DS-EX1 | `synthetic-raw/exercise_hba1c_pairs.csv` (24 dòng, không lỗi gài) | Bài tập paired Ngày 07 | CREATED — seed 20261025, `NOT_RUN` |
| DS-CAP | `synthetic-raw/capstone_screening_raw.csv` (91 dòng, 6 lỗi gài) + `cleaned/capstone_screening_clean.csv` (90) | Capstone Ngày 12–13 | CREATED — seed 20261026, `NOT_RUN` |
| DS-FINAL | `synthetic-raw/assessment_gp_raw.csv` (60 dòng, 4 lỗi gài) + `cleaned/assessment_gp_clean.csv` (60) | Đánh giá Ngày 14 | CREATED — seed 20261027, `NOT_RUN` |
| DS-B | `diagnostic_test_synthetic` | E01 (tham khảo, chương trình 16 tuần) | `NOT_CREATED` |
| DS-C | `survival_synthetic` | E02 (tham khảo) | `NOT_CREATED` |
| — | CDC NHANES (public, tùy chọn) | E03 | `NOT_CREATED` — chỉ sau khi dạy complex sampling + weights |

- Codebook: `codebooks/*.md` · Danh mục lỗi gài (nội bộ): `codebooks/planted-errors-INTERNAL.md`.
- Expected results cross-check bằng Python: `expected-results.md` (nhãn `NOT_RUN` — không phải SPSS output).
- Generator: `generators/generate_all.py` — chạy `python datasets/generators/generate_all.py` từ project root; seed cố định → tái tạo 100%.

## Cấu trúc con

- `synthetic-raw/` — dữ liệu giả lập gốc (có lỗi cố tình cho bài làm sạch khi phù hợp). Bất biến.
- `cleaned/` — bản sạch tham chiếu + log biến đổi.
- `codebooks/` — một codebook/dataset, kèm danh mục lỗi gài (bản nội bộ cho tác giả, không lộ trong file học viên).
- `generators/` — script sinh dữ liệu; path tương đối từ project root; log vào `.workspace/logs/`; tuyệt đối không ghi ngoài `D:\spss`.
