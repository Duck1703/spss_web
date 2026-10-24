# Project State — Trạng thái hiện tại của dự án

> Đây là **nguồn thật duy nhất** về trạng thái dự án. Mọi agent tiếp nối phải đọc file này trước khi làm việc. Quy ước trạng thái module theo `WORKFLOW-CONTRACT.md`.

- **Cập nhật lần cuối:** 2026-10-24 (Task 07 — final beginner-quality remediation)
- **Phase hiện tại:** M01 **draft-4** (post-remediation + readability + giảm tải §3.7) → chờ **re-audit độc lập**; M02–M12 chưa sản xuất
- **Blueprint:** nguyên vẹn — SHA-256 `cdb0b9736d20893a540320b88dc8b849928a2ff3976ecfe8718ccc7fc8066036` (re-verified Task 03)
- **Git:** branch `master`, commits `4094497` → `f6d1ff5` → `26c7f91` (Task 02) → commit Task 03; clean, không remote

## 1. Trạng thái tổng quan

| Hạng mục | Trạng thái | Ghi chú |
|---|---|---|
| Workspace `D:\spss` | ✅ Đã xác minh + re-audit Task 02 | Windows, Git Bash (MINGW64), git 2.45.2; không rule xung đột |
| Cấu trúc thư mục | ✅ Đã tạo + re-verified | 38 subdir + 53 tracked file khớp baseline |
| Tài liệu nền (README, START-HERE-MAC, curriculum/) | ✅ Đã soạn + reverified | Khớp Blueprint; 3 MINOR + 4 NOTE (xem `reviews/TASK01-evidence-reverification.md`) |
| Hợp đồng quy trình + QA | ✅ Đã soạn | `WORKFLOW-CONTRACT.md`, `qa/QA-POLICY.md`, `assessment/rubrics.md` |
| Đăng ký nguồn | ✅ Validated Task 02 | 10 `VERIFIED_SOURCE` + 2 `PENDING_VERIFICATION` (S01 portal, S11 SPCR) + 1 `SUPERSEDED` (S10→S10a/b) |
| Preflight môi trường | ⏳ Form sẵn sàng, chưa điền | `project-control/MAC-SPSS-PREFLIGHT.md` — cần học viên/owner |
| Tương thích macOS/SPSS 32 | ⚠️ PARTIALLY_VERIFIED | SPCR liệt kê Sequoia 15.0 + Tahoe 26.0 (qua reproduction); S10a/b xác nhận Apple Silicon + Rosetta 2; cần mở SPCR trình duyệt chốt |
| Production-plan M01–M03 | ✅ Đã soạn | Chưa được duyệt; 1 amendment đề xuất (D-015) |
| Nội dung bài học (lesson/workbook/answer-key) | 🟡 M01 draft xong; M02–M12 chưa | Chỉ M01 — chờ independent review trước khi coi là nội dung được chấp nhận |
| Dataset DS-A/B/C | ⛔ Chưa tạo | Chỉ có README mô tả data contract |
| Git repository | ✅ Local | Không remote, không push, không đổi global config |
| Bất kỳ artifact nào mang nhãn VERIFIED | ⛔ Không có | Workspace không có SPSS — mọi thứ mặc định `NOT_RUN` |

## 2. Trạng thái từng module

| Module | Trạng thái lifecycle | Vị trí | Ghi chú |
|---|---|---|---|
| M01 | `DRAFTING` **draft-4 → chờ re-audit (`STATISTICAL_QA`)** | `lessons/M01-research-thinking/` + `reviews/` (package + readability + Task07) | Pilot; Task 05→07 đã sửa 15 findings |
| M02 | `PLANNED` (chờ duyệt) | `lessons/M02-spss-mac-foundations/production-plan.md` | Pilot; phụ thuộc U1–U3 (version/macOS/license) |
| M03 | `PLANNED` (chờ duyệt) | `lessons/M03-data-preparation/production-plan.md` | Pilot; cần dataset giả lập nhỏ |
| M04–M11 | `NOT_STARTED` | `lessons/M04-*` … `lessons/M11-*` | Chỉ có README giữ chỗ |
| M12 | `NOT_STARTED` | `lessons/M12-capstone-project/` | Capstone; phụ thuộc toàn bộ core |
| E01–E03 | `NOT_STARTED` | `extensions/` | Học sau core |

## 3. Trạng thái nguồn (chi tiết: `references/source-register.md` + `source-validation-report.md`)

| Nguồn | Trạng thái | Ngày kiểm |
|---|---|---|
| S02, S03, S04, S05, S06, S07, S08, S09, S10a, S10b | `VERIFIED_SOURCE` | 2026-10-24 |
| S01 (ibm.com/docs portal) | `PENDING_VERIFICATION` — portal JS; **đường PDF `SSLVMB_32.0.0/pdf/…` đã kiểm chứng** | 2026-10-24 |
| S11 (SPCR SPSS 32) | `PENDING_VERIFICATION` — JS-gated; dữ kiện macOS qua reproduction vendor | 2026-10-24 |
| S10 (mysupport defect URL gốc) | `SUPERSEDED` → S10a + S10b | 2026-10-24 |

## 4. Blockers / phụ thuộc đang mở

1. **Cần con người duyệt báo cáo Task 02** trước khi sản xuất nội dung (STOP condition).
2. **Phiếu preflight chưa điền** — `MAC-SPSS-PREFLIGHT.md` cần học viên/owner (chặn M02-runtime, M03-runtime; **không** chặn M01).
3. **SPCR + portal S01 JS-gated** → mở bằng trình duyệt thật để chốt macOS/footnote ARM64 (TB-003/TB-004).
4. **Không có môi trường chạy SPSS trong workspace** → mọi artifact thực thi `NOT_RUN` cho tới khi có MacBook QA.
5. **Chưa có học viên pilot** cho Pass 3 thật.

## 5. Trạng thái kiểm chứng (kiên quyết không thổi phồng)

- Số artifact gắn `VERIFIED`: **0**
- Số artifact gắn `NOT_RUN`: **0** (M01 không chứa artifact thực thi — phần SPSS `NOT_APPLICABLE`)
- Số bài học đã soạn: **1 draft** (M01 — chưa qua review độc lập)
- Số dataset đã tạo: **0** (`mini_records` là bảng inline trong bài, không phải file dataset — D-016)
- Số finding QA: **4** (trong `qa/M01-author-selfcheck.md` — self-findings, OPEN, chờ reviewer phán xét)
