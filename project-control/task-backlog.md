# Task Backlog — Hàng chờ công việc có ưu tiên

- **Cập nhật:** 2026-10-24 (Task 02)
- **Quy ước ưu tiên:** P0 = chặn mọi việc khác · P1 = cần cho pilot · P2 = cần cho giai đoạn sau · P3 = cải tiến
- **Quy tắc:** không hạng mục nào được tự ý vượt cổng `HUMAN_APPROVAL` (xem `WORKFLOW-CONTRACT.md`).

## P0 — Cổng tiếp theo của dự án

| ID | Việc | Phụ thuộc | Tiêu chí chấp nhận | Trạng thái |
|---|---|---|---|---|
| TB-001 | Con người review báo cáo Task 01 + **Task 02** và cấp ủy quyền sản xuất | — | Quyết định ghi vào `decisions.md`; phạm vi được phép nêu rõ (đề xuất: M01, có thể kèm phần không-runtime của M03) | `OPEN` — chờ chủ dự án |

## P1 — Phục vụ pilot M01–M03 (chạy sau TB-001)

| ID | Việc | Phụ thuộc | Tiêu chí chấp nhận | Trạng thái |
|---|---|---|---|---|
| TB-002 | Thu thập preflight máy người học: chip, macOS, version SPSS, license, modules | Người dùng/học viên điền `project-control/MAC-SPSS-PREFLIGHT.md` (form đã sẵn sàng) | Phiếu đã điền lưu trong `project-control/` (không chứa secret); chặn tiêu chí runtime M02/M03, không chặn M01 | `OPEN` — cần input người dùng |
| TB-003 | Mở SPCR (S11) bằng trình duyệt thật; xác nhận trực tiếp hàng macOS + footnote ARM64 cho SPSS 32 | Trình duyệt có JS; nguồn S11 | Dữ kiện SPCR trực tiếp lưu snapshot `references/snapshots/`; D-014 → VERIFIED hoặc điều chỉnh | `OPEN` — dữ kiện gián tiếp đã PARTIALLY_VERIFIED |
| TB-004 | Snapshot mục lục portal S01 bằng trình duyệt (PDF deep links đã kiểm chứng sẵn — chỉ còn cần mục lục điều hướng) | Trình duyệt có JS | Snapshot vào `references/snapshots/`; S01 → `VERIFIED_SOURCE` hoặc ghi chính sách "dùng PDF-only" | `OPEN` — mức ưu tiên giảm (đường PDF đã dùng được) |
| TB-005 | Sản xuất M01 (lesson + workbook + answer-key) theo `production-plan.md` | TB-001 | Đủ 12 mục chuẩn §6 Blueprint; không dùng SPSS; claim có nguồn trong register | `OPEN` — chưa ủy quyền |
| TB-006 | Sản xuất M02 theo `production-plan.md` | TB-001, TB-002, TB-003 | Menu/phiên bản khớp môi trường kiểm chứng; ảnh chụp chỉ từ chạy thật | `OPEN` |
| TB-007 | Tạo dataset giả lập nhỏ cho M03 (raw có lỗi cố tình + codebook + expected) | TB-001; `datasets/README.md` | Seed cố định, script generator trong `datasets/generators/`, raw bất biến, nhãn SIMULATED | `OPEN` |
| TB-008 | Sản xuất M03 theo `production-plan.md` | TB-001, TB-007 | codebook.md + cleaning_log.md + syntax mẫu; mọi thao tác `NOT_RUN` cho tới khi chạy thật | `OPEN` |
| TB-009 | Chạy 5-pass QA cho M01–M03; mời ≥1 học viên chưa biết SPSS | TB-005→TB-008 | Findings ghi `qa/findings-register.md`; rubric ≥85; pilot metric ghi nhận thực tế | `OPEN` |
| TB-010 | Sửa template/quy trình theo findings pilot | TB-009 | Cập nhật `production-plan.md` mẫu + `WORKFLOW-CONTRACT.md` nếu cần; quyết định mở M04–M12 thuộc con người | `OPEN` |

## P2 — Sau pilot / trong tầm core

| ID | Việc | Phụ thuộc | Tiêu chí chấp nhận | Trạng thái |
|---|---|---|---|---|
| TB-011 | Production-plan + sản xuất M04–M11 lần lượt | TB-009, TB-010 + ủy quyền mới | Mỗi module qua đủ lifecycle; gate sau M05, M08, M11 theo Blueprint §3 | `OPEN` |
| TB-012 | Dataset DS-A đầy đủ (`clinic_bp_synthetic` 160 hồ sơ) | TB-007 kinh nghiệm; ủy quyền | Đủ `v1_raw.csv`, `v1_clean.sav`, `codebook.md`, `analysis.sps`, `expected_results.md` | `OPEN` |
| TB-013 | Datasets DS-B (chẩn đoán), DS-C (sống còn) | E01/E02 được duyệt | Như data contract | `OPEN` |
| TB-014 | Capstone M12 + `capstone-checklist.md` vận hành | Core hoàn tất | Hồ sơ tái tạo được bởi người khác từ data+syntax+version | `OPEN` |
| TB-015 | Đánh giá cross-check bằng Python/R cho expected results (nếu dùng) | U8 trong blueprint-analysis | Ghi nhãn rõ "không phải SPSS runtime"; script trong `scripts/` | `OPEN` |

## P3 — Hạ tầng/cải tiến

| ID | Việc | Phụ thuộc | Tiêu chí chấp nhận | Trạng thái |
|---|---|---|---|---|
| TB-016 | Script kiểm tra liên kết nội bộ + lint trạng thái (`NOT_RUN`/`VERIFIED` hợp lệ) | — | Script trong `scripts/`, path tương đối, log `.workspace/logs/` | `OPEN` |
| TB-017 | Snapshot định kỳ nguồn trọng yếu (EQUATOR, IBM docs) | TB-004 | Có lịch re-audit; không tự động sửa nội dung | `OPEN` |
| TB-018 | Quy trình xuất PDF từng chương ra `exports/` | Nội dung sẵn sàng | Export là artifact sinh lại được, không chỉnh tay | `OPEN` |
| TB-019 | Xem xét Make/automation giám sát nguồn (Blueprint §12) | P1/P2 ổn định | Chỉ nhắc lịch review; không tự chốt nội dung | `DEFERRED` |
