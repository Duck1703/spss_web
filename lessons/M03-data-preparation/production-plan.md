# Production Plan — M03: Codebook, nhập liệu và làm sạch dữ liệu

- **Tuần:** 3–4 · **Trạng thái:** `PLANNED` — chờ HUMAN_APPROVAL để vào `SOURCE_RESEARCH`
- **Cổng:** kết thúc module là **GATE 1** — tự nhập/chuẩn hóa dữ liệu không dựa vào screenshot.

## 1. Scope

- Trong phạm vi: Variable View đầy đủ (`Name`, `Label`, `Type`, `Values`, `Missing`, `Measure`); viết codebook; nhập CSV/XLSX; phát hiện mã sai/missing/giá trị bất thường bằng FREQUENCIES/DESCRIPTIVES; cleaning log; raw bất biến; syntax đầu tiên lưu quy trình.
- Ngoài phạm vi: xử lý missing nâng cao/imputation (E03); biến đổi compute phức tạp; merge nhiều file.

## 2. Learning goals

1. Định nghĩa đúng 5 thuộc tính Variable View cho ≥8 biến khác kiểu.
2. Viết `codebook.md` đủ: tên/nhãn/kiểu/đơn vị/mã giá trị/missing/định nghĩa kết cục.
3. Nhập file CSV có lỗi cố tình; phát hiện ≥5/6 lỗi gài sẵn bằng output mô tả; ghi `cleaning_log.md` đầy đủ lý do.
4. Giải thích và tuân thủ quy tắc raw bất biến; lưu bản sạch file mới.

## 3. Prerequisites

- M01 (kiểu biến — đặc biệt mã số ≠ định lượng), M02 (mở/lưu `.sav`, nhận diện 3 cửa sổ).
- Quy ước: tên biến ASCII, tiếng Việt ở Labels, dấu chấm thập phân.

## 4. Core examples

- **Dataset "bệnh án có lỗi":** phiên bản nhỏ của DS-A (~30–60 dòng, giả lập) gồm: `age_years=250` (lỗi nhập), mã giới tính ngoài `{1,2}`, ô trống vs mã missing khác nhau, `sbp_baseline` âm, trùng `patient_id`, format ngày lẫn. Mỗi lỗi có trong `cleaning_log` mẫu.
- **Syntax đầu tiên:** ví dụ `FREQUENCIES VARIABLES=age_years sex_code` để soi lỗi — lưu lại trong `.sps` có chú thích từng dòng.
- **Phản ví dụ:** sửa trực tiếp vào file CSV gốc rồi không nhớ sửa gì → bài học về raw bất biến + log.

## 5. Required sources

| Nguồn | Dùng cho | Trạng thái |
|---|---|---|
| S01/S02 | Variable View, MISSING VALUES, VALUE LABELS, GET DATA/CSV import, FREQUENCIES | S02 `VERIFIED_SOURCE`; S01 `PENDING_VERIFICATION` (R-01, R-06) |
| S03 Ch.1–2 | Khái niệm data matrix, kiểu biến củng cố | `VERIFIED_SOURCE` |
| Blueprint §5 | Data contract (raw bất biến, codebook, seed) | Internal |

## 6. Planned exercises

- BT1: hoàn thiện codebook cho bảng biến cho sẵn (điền Name/Label/Values/Missing/Measure).
- BT2: nhập `…_raw.csv`, chạy FREQUENCIES/DESCRIPTIVES, liệt kê lỗi phát hiện được vào cleaning_log.
- BT3: sửa lỗi trên bản sao bằng syntax có chú thích; lưu `…_clean.sav`.
- BT4 (tự làm): lặp lại toàn quy trình với file lỗi biến thể (lỗi khác — kiểm GATE 1).

## 7. Required datasets

- `clinic_bp_mini_raw.csv` (tên dự kiến — quyết ở LEARNING_DESIGN): 30–60 dòng giả lập, lược đồ con của DS-A (patient_id, age_years, sex_code, bmi, sbp_baseline, diabetes_flag + 1–2 biến nữa), **6 lỗi gài sẵn có danh mục trong codebook nội bộ của tác giả** (không lộ cho học viên).
- `clinic_bp_mini_clean.csv`/`.sav` bản sạch tham chiếu + `codebook.md` + `expected_cleaning_log.md`.
- Generator script (`datasets/generators/`) cố định seed, ghi chú cách sinh và **danh sách lỗi gài**; raw bất biến sau khi sinh.
- Nhãn SIMULATED trong file header/comment + codebook + bài.

## 8. Expected outputs

- `lesson.md` (đủ 12 mục; Mac walkthrough khớp version kiểm chứng).
- `workbook.md`, `answer-key.md` kèm `expected_cleaning_log.md` + `expected_frequencies` (chỉ gắn nhãn VERIFIED sau khi chạy SPSS thật — trước đó `NOT_RUN`).
- `qa-report.md` đủ 5 pass; dataset có hồ sơ data contract.

## 9. QA checklist

- [ ] Mọi lỗi gài đều phát hiện được bằng thao tác được dạy (test trước bằng chạy thật).
- [ ] Đáp án số liệu = tái tính từ raw, không viết tay.
- [ ] Syntax chạy lại được, không ghi đè raw, có chú thích.
- [ ] Missing được phân biệt rõ "trống thật" vs "mã missing"; Measure levels đúng.
- [ ] Codebook mẫu đủ trường theo data contract.
- [ ] Pass 2 thực thi trên SPSS 32/macOS mục tiêu trước khi `READY_FOR_LEARNING`.

## 10. Risks & unresolved questions

| Rủi ro/câu hỏi | Mức | Xử lý dự kiến |
|---|---|---|
| Tạo dataset bằng Python/R trong workspace → không phải SPSS | Trung bình | Cho phép làm *generator* (Blueprint §12), ghi nhãn rõ; expected output chỉ VERIFIED khi chạy SPSS thật |
| Kích thước dataset: 30 hay 60 dòng? | OPEN | Quyết ở LEARNING_DESIGN theo thời lượng nhập/rà soát |
| Excel import trên Mac khác Windows? | Trung bình | Ưu tiên CSV (tránh phụ thuộc driver); XLSX chỉ dạy nhận biết |
| Dấu thập phân `,` vs `.` theo region macOS | Trung bình | Bài có mục xử lý riêng; dataset dùng `.` nhất quán |
| Học viên muốn sửa tay trong Data View thay vì syntax | Thấp | Cho phép lần đầu nhưng yêu cầu lặp lại bằng syntax để thấy giá trị tái lập |
