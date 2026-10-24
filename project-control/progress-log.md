# Progress Log — Nhật ký tiến độ

> Ghi nhận việc **đã thực sự làm**, việc bị chặn, và việc cố ý không làm. Phân biệt: file đã tạo / nội dung đã soạn / đã review độc lập / đã chạy kiểm chứng / con người đã duyệt / học viên đã thử.

## 2026-10-24 — Task 01: Bootstrap dự án (agent Devin)

### Đã làm (bằng chứng: file trong `D:\spss`)

| Phase | Việc | Kết quả |
|---|---|---|
| Preflight | Xác minh truy cập `D:\spss`; liệt kê nội dung (chỉ có Blueprint); ghi SHA-256; nhận diện OS/shell | PASS — Windows, Git Bash MINGW64, git 2.45.2; Blueprint 20,709 bytes |
| P0 | Đọc toàn bộ Blueprint (208 dòng); soạn `blueprint-analysis.md` + `blueprint-provenance.md` | DONE — file đã soạn, chưa review độc lập |
| P1 | Tạo cấu trúc thư mục theo layout được giao (không tạo nested root) | DONE — 38 thư mục + file giữ chỗ/README |
| P2 | Soạn `README.md`, `START-HERE-MAC.md`, `curriculum/` ×4, `references/source-register.md`, `qa/QA-POLICY.md`, `assessment/rubrics.md`, `assessment/beginner-pilot.md`, `assessment/capstone-checklist.md` | DONE — file đã soạn, chưa review độc lập |
| P3 | Soạn `project-control/WORKFLOW-CONTRACT.md` (lifecycle 9 trạng thái + yêu cầu chất lượng + finding schema) | DONE |
| P4 | Soạn `references/research-backlog.md`; kiểm tra truy cập 10 URL nguồn | DONE — 8/10 `VERIFIED_SOURCE`; S01, S10 `PENDING_VERIFICATION` (trang JS không fetch được) |
| P5 | Soạn `production-plan.md` cho M01, M02, M03 | DONE — chỉ kế hoạch; chưa viết bài học |
| P6 | `.gitignore`, README quy ước cho datasets/syntax/exercises/solutions/reviews/scripts/exports; git init local | DONE (commit: xem mục git bên dưới) |
| Validation | Kiểm tra cuối: SHA-256 Blueprint, cấu trúc, links tương đối, phạm vi (12 core + 3 ext), production-plans, không có nhãn VERIFIED sai | Kết quả ghi tại báo cáo setup trả về cho chủ dự án |

### Bị chặn / chưa thể làm trong workspace này

- Không thể kiểm chứng runtime SPSS/macOS — workspace là Windows, không có SPSS → mọi artifact thực thi mặc định `NOT_RUN`.
- S01 (ibm.com/docs) và S10 (mysupport defect) không mở được bằng fetch (portal JS / Salesforce) → cần trình duyệt thật (TB-004).
- Không thể xác minh cấu hình máy người học (chip/macOS/license) — cần người dùng chạy `START-HERE-MAC.md` (TB-002).

### Cố ý KHÔNG làm (theo STOP condition Task 01)

- Không viết `lesson.md`/`workbook.md`/`answer-key.md` bất kỳ module nào.
- Không tạo dataset, không tạo `.sps`, không tạo expected results.
- Không cài SPSS, không tự động hóa MacBook, không push git remote, không đổi git config toàn cục.
- Không tải/phân phối tài liệu có bản quyền; chỉ đăng ký metadata + link.
- Không gắn nhãn `VERIFIED` cho bất kỳ artifact nào.

### Git

- Repo local được init tại `D:\spss\.git` (không remote, không đổi global config — identity đã có sẵn).
- Commit khởi tạo: `4094497` — "Bootstrap SPSS Medical Learning Pack workspace (Task 01)", 53 file tracked.
- `.gitignore` kiểm tra: `.workspace/*` (trừ `.gitkeep`) và `exports/*` (trừ README/.gitkeep) bị loại; `.sav/.sps/.csv` học liệu không bị ignore.

### Kết quả validation cuối (chạy thật, không suy diễn)

| Check | Lệnh/method | Kết quả |
|---|---|---|
| Blueprint nguyên vẹn | `sha256sum` đối chiếu | PASS — khớp `cdb0b973…0366036` |
| Không nội dung bài học sớm | `find` lesson.md/workbook/answer-key/.sav/.sps/.csv/.spv | PASS — 0 file |
| Production-plan M01–M03 | `ls` trực tiếp | PASS — đủ 3 file |
| Đếm module | `ls -d lessons/M??-*` / `extensions/E??-*` | PASS — 12 + 3 |
| Liên kết tương đối hỏng | Script kiểm tra mọi `](path)` nội bộ trong .md | PASS — 0 link hỏng |
| Nhãn VERIFIED sai | `grep -rn VERIFIED` toàn repo | PASS — chỉ `VERIFIED_SOURCE` ở source-register (đã fetch thật) và từ vựng trạng thái; 0 artifact runtime được gắn VERIFIED |

## 2026-10-24 — Task 02: Verification & Academic Source Validation (agent Devin)

### Workspace rule precheck

- Phân tích injected rules `D:\SpeakMinto` (repo-scoped) + `global_rules.md` (spendwise): **không có rule ưu tiên cao hơn owner cấm `D:\spss`** → PROCEED (D-011). Không đọc/ghi file project khác.

### Đã làm

| Phase | Việc | Kết quả |
|---|---|---|
| A1 | Filesystem audit | Root/Blueprint hash/53 file/38 dir/0 untracked/0 ignored-thật/0 symlink/không root lồng — đều khớp baseline |
| A2 | Git read-only audit | master, 2 commits baseline, clean, không remote, không secrets tracked |
| A3 | Content reverification vs Blueprint | Không BLOCKER/MAJOR; 3 MINOR (T1-F1 typo "thiếtế"→đã sửa; T1-F2 M02 plan không nhất quán→amendment D-015; T1-F3 S03 tác giả→đã sửa) + 4 NOTE → `reviews/TASK01-evidence-reverification.md` |
| B | Source validation 5-field | `references/source-validation-report.md`; cập nhật `source-register.md` (10 VERIFIED + 2 PENDING + 1 SUPERSEDED); `research-backlog.md` (R-02/R-09 DONE, R-08 PARTIALLY, typo sửa) |
| B-alt | Đường truy cập thay thế IBM | S01: PDF deep link `SSLVMB_32.0.0/pdf/…` trả PDF thật (install macOS + Command Syntax Reference); S10 → S10a (Q&A ARM, VERIFIED) + S10b (blog Rosetta 2, VERIFIED); S11 SPCR tìm được (JS-gated, dữ kiện macOS qua vendor reproduction) |
| C | Tương thích Mac/SPSS 32 | `project-control/MAC-SPSS-PREFLIGHT.md`; phân loại phụ thuộc: M01 không cần SPSS; M02/M03 runtime chặn tới khi preflight + SPCR chốt |
| D | Readiness assessment | `reviews/TASK02-readiness-assessment.md` — verdict `READY_WITH_LIMITATIONS` |
| — | Control files | decisions +D-011…D-015; project-state cập nhật Task 02; task-backlog TB-001…TB-004 điều chỉnh |

### Bị chặn / chưa thể làm

- SPCR + portal S01 yêu cầu JS → mở bằng trình duyệt thật (TB-003/TB-004).
- Phiếu preflight chưa có dữ liệu học viên (TB-002).
- Không chạy được Pass 2 trong workspace (không SPSS/macOS).

### Cố ý KHÔNG làm (STOP condition Task 02)

- Không viết/sửa nội dung bài học, production-plan (trừ amendment đề xuất ghi log), dataset, exercises/solutions.
- Không sửa Blueprint, không đổi scope curriculum, không push remote.
