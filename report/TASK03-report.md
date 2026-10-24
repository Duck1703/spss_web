# BÁO CÁO TASK 03 — M01 LESSON PRODUCTION

> **Quy ước thư mục `report/` (chỉ thị owner 2026-10-24):** mỗi task để lại tại đây (1) file báo cáo cuối, (2) bản **copy** mọi file cần review trong thư mục con. Task sau **xóa toàn bộ nội dung cũ rồi ghi bộ mới** — `report/` luôn chỉ chứa report mới nhất. File trong `report/` là bản sao phục vụ review; **bản chính (canonical) nằm ở đường dẫn gốc** ghi bên dưới — sửa chữa/review chính thức làm trên bản gốc.

## A. Trạng thái thực thi

**Hoàn tất trong phạm vi ủy quyền.** Lifecycle: `DRAFTING` hoàn tất → chờ `STATISTICAL_QA` (= "DRAFT_READY_FOR_INDEPENDENT_REVIEW" của task). Không `HUMAN_APPROVAL`, không `READY_FOR_LEARNING`.

## B. File đã tạo (bản chính)

| Đường dẫn gốc (canonical) | Copy trong `report/` | Mục đích |
|---|---|---|
| `lessons/M01-research-thinking/lesson.md` | `M01-needs-review/lesson.md` | Bài học 12 mục §6; §05/06 KHÔNG ÁP DỤNG; §07 đọc kết quả tính tay (SPSS = `NOT_APPLICABLE`) |
| `lessons/M01-research-thinking/workbook.md` | `M01-needs-review/workbook.md` | BT1–BT4 |
| `lessons/M01-research-thinking/answer-key.md` | `M01-needs-review/answer-key.md` | Đáp án + lý do + lỗi hay gặp |
| `lessons/M01-research-thinking/source-map.md` | `M01-needs-review/source-map.md` | 10 claim → nguồn, nhãn SUPPORTED/INTERPRETATION/SYNTHETIC |
| `lessons/M01-research-thinking/qa/M01-author-selfcheck.md` | `M01-needs-review/M01-author-selfcheck.md` | 10 kiểm tự chạy + 4 self-findings OPEN |
| `reviews/M01-review-package.md` | `M01-needs-review/M01-review-package.md` | **Điểm vào cho reviewer** |

Control cập nhật: `decisions.md` (+D-016 inline dataset, +D-017 thêm `bmi`, +D-018 quy ước report/), `project-state.md`, `task-backlog.md` (TB-005→DRAFT_DONE), `progress-log.md`, `research-backlog.md` (R-04→DONE).

## C. Thiết kế sư phạm

- Mở bằng tình huống y khoa (bác sĩ Lan, BMI–huyết áp) trước định nghĩa — nguyên tắc 1 Blueprint.
- `mini_records` 12 hồ sơ giả lập cố ý có confounding: nhóm ĐTĐ huyết áp cao hơn (149,0 vs 123,3 mmHg) **và** già hơn (62,7 vs 40,4 tuổi) — vật liệu dạy "liên quan ≠ nhân quả".
- Đo tư duy độc lập: checklist phát hiện kết luận vượt quyền; BT2 có 2 bẫy (`patient_id`, `sex_code`); BT3 phân biệt "đúng số nhưng sai phạm vi"; BT4 tình huống mới.

## D. Bằng chứng học thuật

- **S03 ISLBS** (Vu & Harrington, 1st ed. 2020, CC BY-SA 3.0): outline PDF chính thức xác nhận Ch.1 §1.2 Data basics / §1.3 Data collection principles / §1.6 Relationships between two variables → claim C1–C4.
- **S05 SAMPL:** tham chiếu xa §08.
- **Chưa đủ kiểm chứng (trung thực):** chưa đọc nguyên văn §1.3 → cờ spot-check Pass 4; taxonomy 3 loại câu hỏi = khung sư phạm dự án (INTERPRETATION). Không sao chép sách, ví dụ nguyên tác giả.

## E. Kết quả chất lượng

- Số học `mini_records`: recompute Python độc lập — khớp 100% (age 46,0; ĐTĐ 25,0%; SBP 129,8; subgroup 149,0/123,3; tuổi 62,7/40,4; BMI 29,4/24,9).
- Cấu trúc/workbook↔answer-key/SIMULATED/link/`git diff --check`: PASS.
- **Chưa chạy:** Pass 1/3/4/5, Pass 2 (`NOT_APPLICABLE`), pilot, HUMAN_APPROVAL.
- 4 self-findings OPEN chờ reviewer.

## F. Git

- Baseline `26c7f91` → commit **`4bfa8eb`**; Blueprint SHA-256 `cdb0b973…0366036` khớp trước/sau; tree clean; không remote.
- Commit bổ sung quy ước `report/`: xem `git log` (commit sau `4bfa8eb`).

## G. Handoff

Reviewer đọc `M01-needs-review/M01-review-package.md` trước — chứa scope, 5 lựa chọn sư phạm cần đánh giá, câu hỏi reviewer, giới hạn đã biết.

## H. Tiếp theo đề xuất (KHÔNG thực thi)

**Task 04 — Independent review M01** (Pass 1+3+4, phán xét 4 findings, chấm rubric). Tiên quyết: owner chỉ định reviewer.
