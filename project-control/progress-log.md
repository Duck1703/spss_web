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

- Repo local được init tại `D:\spss\.git` (không remote). Commit: ghi hash + ngày tại đây sau khi commit — cập nhật bên dưới.
