# Production Plan — M02: SPSS trên MacBook

- **Tuần:** 2 · **Trạng thái:** `PLANNED` — chờ HUMAN_APPROVAL để vào `SOURCE_RESEARCH`
- **Phụ thuộc cứng:** U1–U3 (`blueprint-analysis.md` §9) — version SPSS chốt, tương thích macOS, cấu hình máy người học. **Module này không thể viết thao tác chính xác khi chưa biết môi trường mục tiêu.**

## 1. Scope

- Trong phạm vi: preflight thiết bị; mở SPSS; nhận diện Data Editor (Data View/Variable View), Output Viewer, Syntax Editor; tạo–lưu–mở lại `.sav`; đọc version + modules được cấp; nhận biết file `.sav/.sps/.spv/.csv`.
- Ngoài phạm vi: mọi phân tích `Analyze`; import CSV phức tạp (để M03); chỉnh sửa Variable View sâu (M03).

## 2. Learning goals

1. Hoàn thành bản ghi preflight máy (chip/macOS/SPSS version/license/modules) theo `START-HERE-MAC.md`.
2. Gọi đúng tên và chức năng của 3 cửa sổ: Data Editor, Output Viewer, Syntax Editor.
3. Nhập vài ô dữ liệu trong Data View và lưu thành `hello_spss.sav`; đóng và mở lại được.
4. Nêu được dòng = đơn vị quan sát, cột = biến (nối với M01).

## 3. Prerequisites

- M01: hiểu biến/đơn vị quan sát.
- Máy có SPSS hợp lệ + preflight xong; nếu chưa → dừng tại `START-HERE-MAC.md`, học song song M01 được.

## 4. Core examples

- Đưa bảng 12 hồ sơ của M01 vào Data View (nhập tay — có chủ đích để hiểu bảng dữ liệu), lưu `hello_spss.sav`.
- Mở menu `Analyze` chỉ để *nhìn* nhận diện — không chạy (nhất quán nguyên tắc "không cho dùng Analyze khi chưa hiểu biến" — đến M03 mới chạy FREQUENCIES để soi dữ liệu).
- Tình huống lỗi thường gặp: lưu nhầm định dạng; mở file từ thư mục khác; tên biến có dấu bị từ chối → dạy tên ASCII.

## 5. Required sources

| Nguồn | Dùng cho | Trạng thái |
|---|---|---|
| S02 (IBM support docs page) | Hướng dẫn cài macOS, Core System User Guide, Getting Started with Installation and Licensing | `VERIFIED_SOURCE` |
| S01 (IBM docs portal) | Tham chiếu menu/giao diện SPSS 32 | `PENDING_VERIFICATION` — **chặn claim về menu** cho tới khi mở được (R-01) |
| S10 (IBM Apple Silicon notice) | Rosetta/kiến trúc | `PENDING_VERIFICATION` (R-02) |
| Tương thích macOS chính thức của IBM | Xác nhận macOS người học được hỗ trợ | `PENDING_VERIFICATION` (R-08) |

## 6. Planned exercises

- BT1: điền phiếu preflight.
- BT2: nhập 5 dòng đầu của bảng mini_records → lưu `.sav` → đóng → mở lại → chụp màn hình Data View.
- BT3: ghép tên cửa sổ với chức năng (quiz ngắn).
- BT4 (tự làm): tạo `practice.sav` mới, tự nhập 3 dòng, lưu/mở lại không nhìn hướng dẫn.

## 7. Required datasets

- Tái dùng bảng 12 hồ sơ M01 (nhập tay một phần — không cần file; nếu M01 quyết định có `mini_records.csv` thì M02 tham chiếu nhưng vẫn nhập tay).
- Không tạo `.sav` mẫu phát hành kèm (file nhị phân tạo trong workspace Windows = `NOT_RUN`, và không mô phỏng được trải nghiệm nhập tay của học viên).

## 8. Expected outputs

- `lesson.md` với Mac walkthrough **theo version đã kiểm chứng trên máy thật** (ảnh chụp chỉ dùng ảnh từ chạy thật, có nguồn gốc).
- `workbook.md`, `answer-key.md`, `qa-report.md` (Pass 2 bắt buộc — ghi version/chip/macOS/modules).
- Ghi chú rõ các vị trí có thể khác giữa Intel/Apple Silicon và các bản macOS.

## 9. QA checklist

- [ ] Mọi đường dẫn menu được kiểm chứng trên SPSS 32 thật hoặc gắn `NOT_RUN`.
- [ ] Không ảnh chụp/stock photo giả làm output thật.
- [ ] Không hứa "SPSS 32 chạy được trên macOS X" khi chưa đối chiếu tài liệu IBM.
- [ ] License/module check có trong bài; hướng dẫn hành vi khi thiếu license (dừng + liên hệ, không crack).
- [ ] Tên biến ASCII; nhắc dấu thập phân/thư mục tương đối.
- [ ] Pass 3: người mới tìm được 3 cửa sổ không cần hỏi.

## 10. Risks & unresolved questions

| Rủi ro/câu hỏi | Mức | Xử lý dự kiến |
|---|---|---|
| Version SPSS người học ≠ 32 (vd đã có 33) | Cao | Preflight + quyết định D-003; bài phải ghi rõ version mục tiêu và bảng khác biệt |
| macOS người học ngoài phạm vi hỗ trợ | Trung bình | R-08 kiểm tra trước khi phát hành |
| Không có máy Mac trong workspace → không kiểm chứng menu/screenshot | Cao (cấu trúc) | Toàn bộ thao tác `NOT_RUN` cho tới khi chạy trên máy người học/QA; không phát hành khi chưa PASS 2 |
| UI SPSS trên macOS khác Windows screenshots tìm thấy trên mạng | Trung bình | Chỉ dùng ảnh tự chụp từ máy mục tiêu |
| Người học nhập tay 12 dòng thấy nhàm | Thấp | Cho nhập 5–6 dòng, phần còn lại là file M03 |
