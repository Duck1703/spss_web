# Project State — Trạng thái hiện tại của dự án

> Đây là **nguồn thật duy nhất** về trạng thái dự án. Mọi agent tiếp nối phải đọc file này trước khi làm việc. Quy ước trạng thái module theo `WORKFLOW-CONTRACT.md`.

- **Cập nhật lần cuối:** 2026-10-24 (Task 10 — remediation sau independent review `CHANGES_REQUIRED`)
- **Phase hiện tại:** **Lộ trình 14 ngày practice-first là default learning path** (D-020); 14/14 ngày có đủ lesson+workbook+answer-key dạng **DRAFTING**; Task 10 đã sửa 5/5 nhóm finding review + pilot checklist Ngày 01 — chờ owner chạy pilot Mac thật
- **Blueprint:** nguyên vẹn — SHA-256 `cdb0b9736d20893a540320b88dc8b849928a2ff3976ecfe8718ccc7fc8066036` (không đổi qua Task 09–10)
- **Git:** branch `master`, local-only không remote; commit mới nhất = Task 10 remediation (xem `git log`)

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
| Nội dung bài học (lesson/workbook/answer-key) | 🟡 M01 draft-4 (tham khảo) + **14/14 ngày draft** mới | Track 14 ngày đủ bộ 3/ngày — đều chưa qua independent review |
| Dataset DS-A/B/C | ✅ 4 dataset giả lập (Task 09) + waist fix (Task 10) | `datasets/` — clinic_bp 160 · hba1c 24 · capstone 90 · assessment 60; `waist_cm` assessment intercept 62→88 (mean 89,0 cm) |
| Git repository | ✅ Local | Không remote, không push, không đổi global config |
| Bất kỳ artifact nào mang nhãn VERIFIED | ⛔ Không có | Workspace không có SPSS — mọi thứ mặc định `NOT_RUN` |

## 2. Trạng thái từng module

### Lộ trình chính thức — PRACTICE-FIRST 14 NGÀY (D-020)

| Ngày | Trạng thái | Vị trí | Ghi chú |
|---|---|---|---|
| D01–D05 (P0) | `DRAFTING` — đủ 3 file/ngày + pilot checklist (D01) | `track-14day/day-0{1..5}-*/` | Menu `MAC_SPSS_VERIFICATION_PENDING`; số `NOT_RUN`; `day-01/pilot-checklist-mac.md` sẵn sàng cho owner |
| D06–D11 (P1) | `DRAFTING` — đủ 3 file/ngày | `track-14day/day-0{6..9}-*/`, `day-1{0,1}-*/` | Inferential: t-test độc lập/paired, χ²+OR+Fisher, Pearson/Spearman, chọn phương pháp, báo cáo output |
| D12–D14 (P2) | `DRAFTING` — capstone + rubric 100đ | `track-14day/day-1{2..4}-*/` | D12 6 lỗi gài · D13 phân tích mở · D14 rubric ≥85/100 |
| Datasets | ✅ Created + validated | `datasets/{synthetic-raw,cleaned,codebooks,generators}` | 4 dataset giả lập, seed cố định, 19 lỗi gài có catalog nội bộ |
| Roadmap | ✅ | `curriculum/PRACTICE-FIRST-14-DAY-TRACK.md` | Default path |

### Chương trình 16 tuần (Blueprint gốc — tham khảo, KHÔNG còn default)

| Module | Trạng thái lifecycle | Vị trí | Ghi chú |
|---|---|---|---|
| M01 | `DRAFTING` **draft-4 → chờ re-audit (`STATISTICAL_QA`)** — giữ nguyên làm tham khảo | `lessons/M01-research-thinking/` + `reviews/` | Pilot; Task 05→07 đã sửa 15 findings; website hiển thị dưới nhóm "Tham khảo" |
| M02 | `PLANNED` (chờ duyệt) | `lessons/M02-spss-mac-foundations/production-plan.md` | Nội dung lớp phủ trùng lộ trình 14 ngày — xem lại khi resume track 16 tuần |
| M03 | `PLANNED` (chờ duyệt) | `lessons/M03-data-preparation/production-plan.md` | Tương tự |
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

1. **Track 14 ngày vẫn `DRAFTING`** — Task 09 review `CHANGES_REQUIRED` đã remediation xong (Task 10); chờ reviewer đánh giá lại bằng chứng pilot thật + HUMAN_APPROVAL.
2. **`MAC_SPSS_VERIFICATION_PENDING` trên toàn bộ 14 ngày** — cần pilot trên MacBook có SPSS; checklist riêng cho Ngày 01 tại `track-14day/day-01-lan-dau-mo-spss/pilot-checklist-mac.md` (yêu cầu evidence E0–E5); số expected `NOT_RUN`.
3. **Phiếu preflight chưa điền** — `MAC-SPSS-PREFLIGHT.md` cần học viên/owner.
4. **SPCR + portal S01 JS-gated** → mở bằng trình duyệt thật để chốt macOS/footnote ARM64 (TB-003/TB-004).
5. **Không có môi trường chạy SPSS trong workspace** → mọi artifact thực thi `NOT_RUN` cho tới khi có MacBook QA.
6. **Chưa có học viên pilot** cho Pass 3 thật.

## 5. Trạng thái kiểm chứng (kiên quyết không thổi phồng)

- Số artifact gắn `VERIFIED`: **0**
- Số artifact gắn `NOT_RUN`: **tất cả expected-results + menu SPSS trong 14 ngày** (Python cross-check ≠ SPSS runtime)
- Số bài học đã soạn: **M01 draft-4 (tham khảo) + 14/14 ngày draft** — chưa qua independent review
- Số dataset đã tạo: **4** (clinic_bp / hba1c_pairs / capstone_screening / assessment_gp — giả lập, seed cố định)
- Số finding QA: **4** (trong `qa/M01-author-selfcheck.md` — self-findings, OPEN, chờ reviewer phán xét); + Task 09 chưa có findings register riêng
