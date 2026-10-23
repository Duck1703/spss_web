# Project State — Trạng thái hiện tại của dự án

> Đây là **nguồn thật duy nhất** về trạng thái dự án. Mọi agent tiếp nối phải đọc file này trước khi làm việc. Quy ước trạng thái module theo `WORKFLOW-CONTRACT.md`.

- **Cập nhật lần cuối:** 2026-10-24
- **Phase hiện tại:** BOOTSTRAP (Task 01) — hoàn tất thiết lập, chờ review/ủy quyền sản xuất nội dung
- **Blueprint:** nguyên vẹn — SHA-256 `cdb0b9736d20893a540320b88dc8b849928a2ff3976ecfe8718ccc7fc8066036` (xem `blueprint-provenance.md`)

## 1. Trạng thái tổng quan

| Hạng mục | Trạng thái | Ghi chú |
|---|---|---|
| Workspace `D:\spss` | ✅ Đã xác minh truy cập | Windows, Git Bash (MINGW64), git 2.45.2 |
| Cấu trúc thư mục | ✅ Đã tạo theo layout được giao | Không tạo thư mục lồng `SPSS-Medical-Learning-Pack` |
| Tài liệu nền (README, START-HERE-MAC, curriculum/) | ✅ Đã soạn | Chưa review độc lập |
| Hợp đồng quy trình + QA | ✅ Đã soạn | `WORKFLOW-CONTRACT.md`, `qa/QA-POLICY.md`, `assessment/rubrics.md` |
| Đăng ký nguồn | ✅ Khởi tạo + kiểm tra truy cập | 8/10 URL mở được; S01, S10 `PENDING_VERIFICATION` |
| Production-plan M01–M03 | ✅ Đã soạn | Chưa được duyệt; chưa viết bài học |
| Nội dung bài học (lesson/workbook/answer-key) | ⛔ Chưa bắt đầu | Cố ý — cần ủy quyền sau review setup |
| Dataset DS-A/B/C | ⛔ Chưa tạo | Chỉ có README mô tả data contract |
| Git repository | ✅ Local init | Không remote, không push, không đổi global config |
| Bất kỳ artifact nào mang nhãn VERIFIED | ⛔ Không có | Workspace không có SPSS — mọi thứ mặc định `NOT_RUN` |

## 2. Trạng thái từng module

| Module | Trạng thái lifecycle | Vị trí | Ghi chú |
|---|---|---|---|
| M01 | `PLANNED` (chưa vào lifecycle — chờ duyệt) | `lessons/M01-research-thinking/production-plan.md` | Pilot |
| M02 | `PLANNED` (chờ duyệt) | `lessons/M02-spss-mac-foundations/production-plan.md` | Pilot; phụ thuộc U1–U3 (version/macOS/license) |
| M03 | `PLANNED` (chờ duyệt) | `lessons/M03-data-preparation/production-plan.md` | Pilot; cần dataset giả lập nhỏ |
| M04–M11 | `NOT_STARTED` | `lessons/M04-*` … `lessons/M11-*` | Chỉ có README giữ chỗ |
| M12 | `NOT_STARTED` | `lessons/M12-capstone-project/` | Capstone; phụ thuộc toàn bộ core |
| E01–E03 | `NOT_STARTED` | `extensions/` | Học sau core |

## 3. Trạng thái nguồn (chi tiết: `references/source-register.md`)

| Nguồn | Trạng thái | Ngày kiểm |
|---|---|---|
| S02–S09 | `VERIFIED_SOURCE` (mở được, nội dung khớp mô tả) | 2026-10-24 |
| S01 (ibm.com/docs SPSS 32) | `PENDING_VERIFICATION` (trang JS, fetch trả nội dung rỗng) | 2026-10-24 |
| S10 (IBM mysupport defect notice) | `PENDING_VERIFICATION` (trang Salesforce yêu cầu JS, không mở được) | 2026-10-24 |

## 4. Blockers / phụ thuộc đang mở

1. **Cần con người duyệt báo cáo setup** trước khi sản xuất nội dung (STOP condition của Task 01).
2. **U1–U3** (xem `blueprint-analysis.md` §9): version SPSS chốt, macOS hỗ trợ, cấu hình máy người học — cần thông tin từ người dùng + tài liệu IBM.
3. **Không có môi trường chạy SPSS trong workspace** → mọi artifact thực thi `NOT_RUN` cho tới khi có MacBook QA.
4. **Chưa có học viên pilot** cho Pass 3 thật.
5. **S01/S10 chưa mở được** → các claim về menu/version từ IBM docs chưa thể trích chứng tự động.

## 5. Trạng thái kiểm chứng (kiên quyết không thổi phồng)

- Số artifact gắn `VERIFIED`: **0**
- Số artifact gắn `NOT_RUN`: toàn bộ artifact thực thi tương lai (hiện chưa có file nào)
- Số bài học đã soạn: **0** (chỉ có 3 production-plan)
- Số dataset đã tạo: **0**
- Số finding QA: **0** (register đã khởi tạo)
