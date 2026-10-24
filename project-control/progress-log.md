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

## 2026-10-24 — Task 03: M01 Lesson Production (agent Devin)

### Preflight

- Root `D:/spss`, branch `master`, HEAD `26c7f91`, tree clean, Blueprint hash khớp — baseline Task 02 đúng.
- Rules precheck: giống Task 02 (D-011) — không có cấm lệnh ưu tiên cao hơn cho `D:\spss` → PROCEED.

### Đã sản xuất (trong phạm vi ủy quyền M01)

| File | Nội dung |
|---|---|
| `lessons/M01-research-thinking/lesson.md` | Bài học đủ 12 mục §6 Blueprint; §05/§06 ghi KHÔNG ÁP DỤNG; §07 đọc kết quả tính tay (phần SPSS `NOT_APPLICABLE`); bảng `mini_records` 12 hồ sơ giả lập + codebook mini |
| `lessons/M01-research-thinking/workbook.md` | BT1–BT4 theo plan: phân loại câu hỏi, 12 biến (2 bẫy), kết luận vượt quyền, phiếu nghiên cứu tình huống mới (tiêm vaccine) |
| `lessons/M01-research-thinking/answer-key.md` | Đáp án + lý do + lỗi hay gặp + cách tự sửa; kèm đáp án checkpoint |
| `lessons/M01-research-thinking/source-map.md` | 10 claim → nguồn; nhãn SUPPORTED/INTERPRETATION/SYNTHETIC; cờ spot-check §1.3 ISLBS cho Pass 4 |
| `lessons/M01-research-thinking/qa/M01-author-selfcheck.md` | 10 kiểm tra đã chạy + 4 self-findings OPEN + giới hạn |
| `reviews/M01-review-package.md` | Handoff review độc lập: scope, nguồn, 5 lựa chọn sư phạm cần đánh giá, câu hỏi reviewer, bằng chứng đã chạy |

### Kiểm chứng đã chạy

- **Số học `mini_records`:** recompute Python độc lập — khớp 100% (age 46,0; ĐTĐ 3/12=25,0%; SBP 129,75→129,8; ĐTĐ vs không: SBP 149,0/123,3; tuổi 62,7/40,4; BMI 29,4/24,9; sex 50/50).
- **Nguồn:** ISLBS outline PDF chính thức — xác nhận Ch.1 §1.2/§1.3/§1.6; CC BY-SA 3.0 attribution ghi trong source-map.
- **Cấu trúc:** đủ 12 mục §6; thuật ngữ khớp glossary §A; link nội bộ hợp lệ.
- **Decisions:** D-016 (inline dataset), D-017 (thêm `bmi`).
- **Backlog:** R-04 → DONE (nợ spot-check §1.3); TB-005 → `DRAFT_DONE`.

### Trạng thái cuối

- M01 = `DRAFTING` hoàn tất → chờ `STATISTICAL_QA` (= "DRAFT_READY_FOR_INDEPENDENT_REVIEW" của task).
- Không chạy: Pass 1/3/4/5, Pass 2 (`NOT_APPLICABLE`), pilot, HUMAN_APPROVAL — đúng ràng buộc.

### Cố ý KHÔNG làm

- Không M02/M03, không dataset DS-A, không `.sav`/`.sps`, không sửa production-plan/Blueprint, không push remote, không tự gán HUMAN_APPROVAL.

### Bổ sung — quy ước `report/` (chỉ thị owner)

- Owner chỉ thị: file cần review copy vào `D:\spss\report\`; report sau xóa nội dung cũ, ghi mới → `report/` chỉ chứa report mới nhất (D-018).
- Đã tạo `report/TASK03-report.md` + `report/M01-needs-review/` (copy 6 file review). Bản chính vẫn ở đường dẫn gốc.

## 2026-10-24 — Task 05: M01 Remediation (sau review CHANGES_REQUIRED)

### Xử lý 9 findings

| ID | Sev | Sửa | Trạng thái |
|---|---|---|---|
| M01-01 | MAJOR | BT4 thêm câu nhận diện thiếu dữ kiện; xóa "8%" bịa — dạy tử số/mẫu số | RESOLVED |
| M01-02 | MAJOR | Viết lại §3.7 + checkpoint Q5 + answer-key + glossary: liên quan thuần túy ≠ nhân quả; quan sát + thiết kế/phân tích đúng vẫn lập luận được; nguồn S03 §1.3.5/§1.3.7 + S12 BMJ (target trial emulation) | RESOLVED |
| M01-03 | MINOR | §07 thêm hàng trả lời câu mở đầu BMI–BP (140,8 vs 118,7; tuổi nhóm 56,0 vs 36,0 — recompute) | RESOLVED |
| M01-04 | MINOR | `smoking_status` chốt danh định; thứ bậc chỉ khi định nghĩa lại thang có thứ tự | RESOLVED |
| M01-05 | MINOR | Trích nguyên văn ISLBS §1.2.1/1.2.2/§1.3.1–1.3.7 từ PDF chính thức → source-map cập nhật quote | RESOLVED |
| M01-06 | MINOR | `days_off` → `days_limited` (hạn chế sinh hoạt — phù hợp ≥60t không đi làm) | RESOLVED |
| M01-07 | MINOR | Bỏ "quá nhỏ để kết luận gì" → phân biệt mô tả mẫu vs suy luận; xóa 80/20% | RESOLVED |
| M01-08/09 | NOTE | `patient_id` ghi vai trò truy vết/nối bảng (M03); `NOT_APPLICABLE` chỉ là mô tả nội dung, không phải lifecycle state | RESOLVED |

### Bằng chứng

- Recompute `mini_records` + split BMI≥26: khớp (140,8/118,7; 56,0/36,0).
- Đọc nguyên văn ISLBS Ch.1 (PDF → text extract `.workspace/tmp/`); BMJ e071108 qua abstract/metadata (direct fetch 403 → ghi note).
- Thêm S12 vào source-register; grep không còn câu tuyệt đối; Blueprint hash khớp; `git diff --check` sạch.

### Trạng thái: M01 draft-2 → chờ re-audit độc lập (Pass 1/3/4).

## 2026-10-24 — Task 06: Beginner Teaching Standard + M01 readability

- Tạo `project-control/BEGINNER-TEACHING-STANDARD.md` (10 RULE owner → 11 mục chuẩn áp cho toàn khóa; D-019).
- Audit M01 theo chuẩn: sửa 16 chỗ thuật-ngữ-dùng-trước-khi-giải-thích (BMI, HbA1c, ĐTĐ, huyết áp tâm thu, RCT, tử/mẫu số, missing, mean, script, target trial emulation...).
- Báo cáo: `reviews/M01-beginner-readability-review.md`. Không đụng bảng `mini_records`/số học → không tái xuất lỗi Task 05.
- M01 → **draft-3**, chờ re-audit; Pass 3 (người học thật) vẫn NOT_RUN.
