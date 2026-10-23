# scripts/ — Script tiện ích nội bộ

- **Trạng thái:** trống — chỉ thêm khi có nhu cầu thật (ví dụ TB-016 link-check/lint trạng thái, generator dataset).
- **Quy tắc an toàn (bắt buộc):**
  - Chỉ dùng đường dẫn tương đối từ project root, hoặc validate project root trước khi chạy.
  - Tuyệt đối không ghi file ngoài `D:\spss`.
  - Temp/cache/log → `.workspace/` (gitignored).
  - Không cài đặt package toàn cục; nếu cần dependency, khai báo trong README này và dùng môi trường cục bộ trong workspace.
  - Không tự động hóa máy người học/MacBook từ script trong workspace này.
