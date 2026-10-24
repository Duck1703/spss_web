# TASK01 Evidence Re-verification — Kiểm tra lại bằng chứng Task 01

- **Ngày:** 2026-10-24 · **Người kiểm:** Devin (Task 02 verification agent)
- **Tính chất:** kiểm tra lại bằng chứng (evidence recheck) — **không phải** chấp thuận của con người.
- **Phương pháp:** đọc trực tiếp file trong `D:\spss`, chạy lệnh audit read-only, đối chiếu Blueprint gốc và báo cáo Task 01. Mọi claim của Task 01 được coi là *chưa kiểm chứng* cho tới khi có bằng chứng độc lập.

## 0. Workspace rule precheck (yêu cầu §2 Task 02)

**Câu hỏi:** có active rules nào cấm làm việc trong `D:\spss` không?

| Bộ rules quan sát được | Nguồn | Nội dung liên quan | Phân tích |
|---|---|---|---|
| `AGENTS.md`/`CLAUDE.md` của SpeakMinto | `d:\SpeakMinto\` (xuất hiện dạng injected always-on rules trong session Task 01) | "Canonical Windows root: `D:\SpeakMinto`. Work only inside this root." | Đây là **hợp đồng phạm vi-repo** cho dự án SpeakMinto: điều chỉnh cách làm việc *trên dự án SpeakMinto* (cấu trúc module, sprint, tools). Nó không phải lệnh cấm chủ dự án giao việc ở project khác. Chính bộ rules đó xếp **"Owner's explicit newest decision" là ưu tiên #1** — chỉ định task hiện tại (`D:\spss`) là quyết định mới nhất của owner. |
| `global_rules.md` (spendwise) | `C:\Users\Lenovo\.codeium\windsurf\memories\` | Workflow reference-project `D:\spendwise` vs `D:\spendwise-learning` | Không liên quan task này; không cấm `D:\spss`; chỉ áp cho task thuộc spendwise. |

**Kết luận precheck:** không có rule nào có ưu tiên cao hơn chỉ định hiện tại của owner cấm `D:\spss`. Giải thích theo rule SpeakMinto một cách hợp lý nhất: nó quy định *artifact của SpeakMinto không được rải ra ngoài root của nó* — hoàn toàn tương thích với việc một project khác có root riêng. **Không đọc/ghi file trong `D:\SpeakMinto`** để điều tra thêm (theo đúng yêu cầu task). → **PROCEED**, ghi nhận trong `decisions.md` (D-011).

## A1. Filesystem audit

| Check | Lệnh | Kết quả | So với baseline Task 01 |
|---|---|---|---|
| Canonical root | `git rev-parse --show-toplevel` + `pwd` | `D:/spss` | ✓ khớp |
| Blueprint tồn tại + hash | `sha256sum` | `cdb0b9736d20893a540320b88dc8b849928a2ff3976ecfe8718ccc7fc8066036` | ✓ khớp baseline |
| Blueprint size/lines | `stat`, `wc -l` | 20,709 bytes, 208 dòng | ✓ khớp |
| File tracked | `git ls-files \| wc -l` | 53 | ✓ khớp ("~53") |
| File tổng (trừ .git) | `find -type f` | 53 | ✓ 0 untracked |
| Thư mục (trừ .git) | `find -type d` | 39 (gồm `.` → 38 subdir) | ✓ khớp claim "38" |
| Untracked/ignored | `git status --short`, `--ignored` | 0 untracked; 0 file ignored hiện hữu | ✓ sạch |
| Symlink/junction | `find -type l` | 0 | ✓ |
| Root thứ hai / file lạ | `ls -A` top-level | Đúng 17 mục theo layout; không có nested `SPSS-Medical-Learning-Pack` | ✓ |
| .gitignore hoạt động | `git check-ignore -v` | `.workspace/tmp/test.tmp`→ignored; `.workspace/cache/x`→ignored; `exports/out.pdf`→ignored; `exports/README.md`→tracked | ✓ đúng thiết kế |
| Secrets trong tracked files | grep pattern `api_key|secret|password|token|license key|serial` | Chỉ `.gitignore` (patterns) và `START-HERE-MAC.md` (văn bản *cấm ghi key*) — không có secret thật | ✓ |
| File rỗng ngoài .gitkeep | `stat` toàn bộ tracked | 0 file rỗng | ✓ |

**Cấu trúc so với layout được giao (Task 01 §PHASE 1):** đầy đủ — curriculum×4 file, lessons M01–M12, extensions E01–E03, datasets×4 con, syntax, exercises, solutions, references (+snapshots), assessment×3, qa×2, reviews, scripts, exports, project-control×7, .workspace×3.

## A2. Git audit (read-only)

| Check | Kết quả |
|---|---|
| Repo root | `D:/spss` — không nested trong repo khác |
| Branch | `master` |
| Commits | `4094497` Bootstrap (53 file) + `f6d1ff5` cập nhật progress-log — khớp baseline |
| Working tree | Clean (0 thay đổi) |
| Remotes | Không có — đúng "local only" |
| Stash | Trống |
| Secrets tracked | Không (xem A1) |
| Artifacts sinh lại tracked | Không có (exports/, .workspace/ ignored đúng) |
| Lưu ý | Blueprint được track trong repo — file vẫn nguyên vẹn (hash khớp); commit message commit 2 viết không dấu (chủ đích tránh encoding issue) |

## A3. Content verification (đối chiếu Blueprint gốc)

Đã đọc lại toàn bộ file yêu cầu trong §4.A3 và so với Blueprint §1–§13:

| Hạng mục | Đánh giá |
|---|---|
| Accuracy | Nội dung khớp Blueprint: 12 module đúng tên/tuần/minh chứng; 3 extension đúng điều kiện; thang điểm 30/25/15/15/10/5; ngưỡng 85; BLOCKER list đầy đủ; 5-pass QA đúng; issue schema đủ trường; data contract đúng; 12 mục chuẩn bài học đúng |
| Completeness | Đủ các tài liệu bắt buộc; roadmap có đủ 8 trường thông tin/module theo yêu cầu PHASE 2 |
| Internal consistency | Nhất quán giữa roadmap ↔ concept-map ↔ learning-outcomes (gates GATE1–5 khớp nhau và khớp Blueprint); `decisions.md` khớp `project-state.md`; `findings-register` schema khớp `WORKFLOW-CONTRACT` §4 |
| Curriculum scope | Không mở rộng phạm vi: không thêm module/endpoint; extension giữ đúng điều kiện tiên quyết Blueprint |
| Target learner | Giữ đúng "absolute beginner", tiếng Việt + thuật ngữ Anh, MacBook |
| Dependency logic | concept-map: mô tả(M04)→suy luận(M05)→các test (M06–M11)→capstone — khớp gates Blueprint; E01 cần M08+M10, E02 cần M05+M08+M10+M11, E03 cần core ✓ |
| Honest verification states | Không artifact nào gắn `VERIFIED` sai: `VERIFIED_SOURCE` chỉ ở nguồn đã fetch thật; `NOT_RUN` mặc định; "0 artifact VERIFIED" trong project-state đúng |
| Operational usability | Backlog có dependency + acceptance criteria; workflow có exit criteria từng trạng thái; preflight Mac có checklist thao tác được |

## Findings

| ID | Severity | Phát hiện | Bằng chứng | Đề xuất xử lý |
|---|---|---|---|---|
| T1-F1 | MINOR | Lỗi đánh máy "thiếtế kế" → đúng "thiết kế" | `references/research-backlog.md` dòng M12 | Sửa khi cập nhật backlog trong Task 02 (file nằm trong danh sách được phép update) |
| T1-F2 | MINOR | M02 production-plan không nhất quán nội bộ: BT2 "nhập 5 dòng" vs Risks "Cho nhập 5–6 dòng" vs Core example "bảng 12 hồ sơ" | `lessons/M02-spss-mac-foundations/production-plan.md` | Task 02 cấm sửa production-plan trừ khi "proven material correction" → ghi **proposed amendment**: thống nhất "nhập tay 5–6 dòng đầu của bảng 12 hồ sơ" |
| T1-F3 | MINOR | `source-register.md` S03 ghi tác giả "Diez, Çetinkaya-Rundel, Barr" — thực tế tác giả ISLBS là **Julie Vu & David Harrington**; Diez et al. là tác giả tác phẩm gốc (OpenIntro Statistics 3rd) | Search result trang openintro.org/go + PDF front matter | Sửa trong update register Task 02 (đã có bằng chứng mới — Phase B) |
| T1-F4 | NOTE | `START-HERE-MAC.md` bảng module→tính năng (Survival/Exact Tests/Complex Samples) dựa trên tri thức chung, chưa đối chiếu IBM docs | START-HERE-MAC §Bước 3 | Đã có R-07 trong backlog; giữ nhãn "chưa kiểm" — chấp nhận được vì file tự đánh dấu UNVERIFIED |
| T1-F5 | NOTE | Trang SPCR IBM yêu cầu JS → kiểm chứng tương thích macOS của Blueprint chỉ qua được bằng dữ liệu gián tiếp (Phase B) | fetch SPCR trả "enable JavaScript" | Ghi PARTIALLY_VERIFIED trong source-validation-report |
| T1-F6 | NOTE | Commit message `f6d1ff5` viết không dấu tiếng Việt | `git log` | Chấp nhận (tránh encoding); không cần sửa |
| T1-F7 | NOTE | `project-state.md` đã cũ (ghi Task 01); cần cập nhật sau Task 02 | project-state.md | Cập nhật trong Task 02 |

**Không phát hiện BLOCKER hay MAJOR.** Workspace Task 01 được xác nhận đúng như báo cáo, với các điểm nhỏ nêu trên.
