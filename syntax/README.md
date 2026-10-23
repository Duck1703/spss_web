# syntax/ — Quy ước file SPSS Syntax (.sps)

- **Trạng thái:** chưa có file `.sps` nào (tạo cùng các module M02 trở đi).
- Mọi `.sps` ở đây mặc định `NOT_RUN` cho tới khi chạy trên SPSS 32/macOS mục tiêu (xem `project-control/WORKFLOW-CONTRACT.md`).

## Quy ước bắt buộc cho mỗi `.sps`

1. Header chú thích: mục đích, file đầu vào, file đầu ra, module liên quan, version SPSS mục tiêu, trạng thái (`NOT_RUN`/`VERIFIED` + ngày).
2. **Không bao giờ ghi đè file raw** trong `datasets/synthetic-raw/` — SAVE chỉ vào `datasets/cleaned/` hoặc file mới.
3. Đường dẫn tương đối từ thư mục dữ liệu của học viên — không hardcode `D:\` hay `/Users/<tên>/`.
4. Một file `.sps` = một nhiệm vụ/quy trình rõ; đặt tên `Mxx-<tác vụ>.sps` (vd `M03-import-mini.sps`, theo kiểu `M02-demo.sps` gợi ý ở Blueprint §11).
5. Có chú thích từng bước cho người mới đọc được; mệnh lệnh in hoa, biến đúng tên ASCII.
