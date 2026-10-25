# Ngày 07 — Soi và xử lý dữ liệu nhập sai

> **Lộ trình:** Exercise-first 14 ngày · **Dataset:** `p1_B01_HA (1).sav`
> **Trạng thái:** DRAFT — đã ánh xạ đầy đủ bài tập nguồn (bảng dưới). Hướng dẫn từng bước,
> mô phỏng SPSSActionGuide và đáp án sẽ hoàn thiện theo mẫu Ngày 01–03 (READY).
> Số liệu kỳ vọng đã tái tính: `curriculum/exercise-verified-stats.md` (nhãn NOT_RUN).

---

## A. Bài tập nguồn của ngày này

| Mã | Gốc | Nội dung (tóm tắt — đọc đề đầy đủ trong PDF nguồn) | Vai trò |
|---|---|---|---|
| **P1-Q14** | Câu 14 (tr.2) | Kiểm tra biến Nghề nghiệp nhập sai; liệt kê mã số phiếu sai; loại khỏi dữ liệu | core |
| **P1-Q13** | Câu 13 (tr.2) | Số người đái tháo đường tuổi 50–70; số nam đái tháo đường tuổi 50–70 | core |
| P1-Q07 | Câu 7 (tr.1) | Bảng bệnh mạn tính theo 2 cách lưu: biến nhị phân nhiều cột vs biến danh mục; × giới tính | optional |



## B. Kỹ năng mục tiêu

- Phát hiện mã không hợp lệ (NNghiep có giá trị 0
- 8
- missing)
- liệt kê ID phiếu sai
- Select Cases loại trừ; lọc điều kiện kép AND.

## C. Vì sao ngày này nằm ở đây

Bài "audit" thật trên dataset thật — chuẩn bị cho Capstone kiểm tra dữ liệu Ngày 12.

## D. Kế hoạch hoàn thiện (theo mẫu Ngày 01–03)

1. Mở bằng bài tập gốc đầu tiên của ngày (khối thông tin ở cuối trang này).
2. Thêm mục D. "Kiến thức cần biết" — chỉ đủ để giải các câu trên.
3. Hướng dẫn menu chi tiết + `{{guide:...}}` mô phỏng đúng dataset thật.
4. Workbook BT1–BTn với gợi ý nấc + sản phẩm bắt buộc; đáp án bọc `<details>`.

### Bài tập gốc dẫn đầu ngày

{{exercise:P1-Q14}}
