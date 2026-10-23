# Research Backlog — Kế hoạch nghiên cứu nguồn theo module

- **Khởi tạo:** 2026-10-24
- **Mục đích:** chuẩn bị hệ thống nghiên cứu — nguồn nào cần cho module nào, đọc phần nào, trạng thái hiện tại. **Không** yêu cầu tải hết tài liệu ngay; không tải/phân phối PDF có bản quyền khi chưa có quyền.
- **Trạng thái nguồn** (đồng bộ `source-register.md`): `VERIFIED_SOURCE` · `PENDING_VERIFICATION` · `SUPERSEDED` · `UNAVAILABLE`
- **Trạng thái nhiệm vụ nghiên cứu:** `TODO` · `IN_PROGRESS` · `DONE`

## 1. Ma trận nguồn × module

| Module | Nguồn chính cần dùng | Phần cần khai thác | Trạng thái nguồn hiện tại |
|---|---|---|---|
| M01 | S03 (OpenIntro ISLBS); S05 tham chiếu sau | Ch.1 Intro to Data — kiểu biến, quần thể/mẫu, thiết kế quan sát vs thí nghiệm | S03 `VERIFIED_SOURCE` |
| M02 | S01, S02, S10 | Hướng dẫn cài macOS (Authorized/Concurrent license), Core System User Guide (Data Editor/Output/Syntax), thông tin Rosetta/Apple Silicon | S02 `VERIFIED_SOURCE`; S01, S10 `PENDING_VERIFICATION` |
| M03 | S01, S02, S03 | Variable View/measure levels, import CSV/Excel, missing values, FREQUENCIES; Ch.1–2 OpenIntro cho khái niệm dữ liệu | Như trên |
| M04 | S03, S04, S01 | Ch.1–3 OpenIntro (mô tả, phân phối); ví dụ FREQUENCIES/DESCRIPTIVES/EXAMINE; menu SPSS 32 | S03, S04 verified; S01 pending |
| M05 | S03, S04 | Ch.4–5 OpenIntro (foundations for inference, CI, p, power); đối chiếu diễn giải UCLA | Verified |
| M06 | S03, S04, S01 | t-test độc lập/cặp; Welch; Levene; đọc output hai dòng | S01 pending cho menu chuẩn |
| M07 | S04, S03, S01 | Mann–Whitney/Wilcoxon trong SPSS; tham số đích của test; khi nào phi tham số | Như trên |
| M08 | S04, S03, S05 | Crosstabs/Chi-square/Fisher; OR vs RR theo thiết kế; viết kết quả theo SAMPL | Verified |
| M09 | S04, S03, S01 | One-way ANOVA + Welch + post-hoc; Kruskal–Wallis | S01 pending |
| M10 | S03, S04, S01 | Ch.6–7 OpenIntro (simple + multiple regression); Correlate/Linear trong SPSS; diagnostics | S01 pending |
| M11 | S03, S04, S01 | Logistic supplement OpenIntro; Binary Logistic SPSS; Exp(B)/CI; giới hạn OR→RR | S01 pending |
| M12 | S05, S06, S07, S01 | Chọn checklist theo thiếtế kế (SAMPL luôn; STROBE quan sát; CONSORT RCT); tái tạo end-to-end | Verified |
| E01 | S08, S01, S04 | STARD 2015; ROC/AUC trong SPSS; ngưỡng/PPV theo prevalence | S08 verified |
| E02 | S01, S04, S03 | Survival trong SPSS (KM, log-rank, Cox — kiểm tra module license); OpenIntro survival supplement | S01 pending |
| E03 | S09, S01, S05 | NHANES Sample Design/Weighting/Variance modules; Complex Samples manual (S02 list); missing data | S09, S02 verified |

## 2. Hàng chờ nhiệm vụ nghiên cứu (ưu tiên theo pilot)

| ID | Nhiệm vụ | Module | Trạng thái nhiệm vụ | Ghi chú |
|---|---|---|---|---|
| R-01 | Mở S01 bằng trình duyệt thật, snapshot mục lục docs SPSS 32; xác định trang tham chiếu menu cho M02–M03 | M02, M03 | `TODO` — chặn bởi portal JS | Cập nhật register sau khi có snapshot |
| R-02 | Mở S10 bằng trình duyệt; nếu không truy cập được, tìm tài liệu IBM chính thức tương đương về SPSS 32 + Apple Silicon/Rosetta | M02 | `TODO` | Kết quả ảnh hưởng D-003 |
| R-03 | Từ S02, ghi nhận đúng tên PDF cần: `Core_System_User_Guide`, `Command_Syntax_Reference`, hướng dẫn cài macOS; lưu link (không phân phối lại) | M02, M03 | `DONE` (trang đã xác minh có các mục này) | Link trong register |
| R-04 | Đọc Ch.1 OpenIntro ISLBS; trích khung "data matrix / types of variables / study design" cho M01 | M01 | `TODO` | Viết lại bằng lời riêng |
| R-05 | Đối chiếu cách giải thích CI/p giữa OpenIntro Ch.4 và mục tiêu M05 | M05 | `TODO` | Chuẩn bị cho GATE 2 |
| R-06 | Đối chiếu menu/syntax M03 (import CSV, MISSING VALUE, VALUE LABELS) với S01 khi R-01 xong | M03 | `TODO` — phụ thuộc R-01 | |
| R-07 | Xác nhận module SPSS nào chứa: Logistic Regression, ROC, Survival, Complex Samples, Exact Tests — theo tài liệu IBM | M08, M11, E01–E03 | `TODO` | Ảnh hưởng preflight license |
| R-08 | Kiểm tra trang compatibility IBM cho SPSS 32 ↔ macOS versions (xác minh tuyên bố "macOS 15 và 26" của Blueprint) | M02 | `TODO` | Cập nhật D-004 |
| R-09 | Rà soát điều khoản sử dụng OpenIntro (CC license) để trích dẫn đúng | M01+ | `TODO` | Ghi license vào register |
| R-10 | Tổng hợp checklist báo cáo tối thiểu cho M12 từ S05/S06/S07 | M12 | `TODO` | Không sao chép nguyên văn |

## 3. Nguyên tắc vận hành

1. Claim nào cũng truy được về nguồn trong `source-register.md`; nguồn `PENDING_VERIFICATION` không đủ cho claim chính.
2. Khi nguồn đổi nội dung → đổi trạng thái, mở finding nếu bài đã xuất bản dùng nguồn đó.
3. Không tải hàng loạt sách/PDF có bản quyền; chỉ lưu link + metadata + snapshot trang đích khi hợp pháp.
4. Ghi ngày truy cập thật; không bịa "last verified".
