# M01 Review Package — Bàn giao cho reviewer độc lập

- **Module:** M01 — Tư duy nghiên cứu y khoa và ngôn ngữ thống kê
- **Phiên bản:** **draft-4** (draft-1: Task 03 → draft-2: remediation Task 05 → draft-3: readability Task 06 → draft-4: final remediation Task 07) · **Ngày:** 2026-10-24 · **Người biên soạn:** Devin
- **Trạng thái lifecycle:** `DRAFTING` hoàn tất → chờ `STATISTICAL_QA` (task gọi là "DRAFT_READY_FOR_INDEPENDENT_REVIEW" — mapping: đủ exit criteria DRAFTING, bước kế tiếp trong contract là STATISTICAL_QA).
- **Mục tiêu review:** Pass 1 (statistical) + Pass 3 (beginner) + Pass 4 (source audit) theo `qa/QA-POLICY.md`. Pass 2 = NOT_APPLICABLE (module không có SPSS). Pass 5 nếu có bất đồng.

## 1. Phạm vi và file cần review

| File | Vai trò | Reviewer nên kiểm |
|---|---|---|
| `lessons/M01-research-thinking/lesson.md` | Bài học chính, 12 mục §6 Blueprint | Đúng khái niệm? Đủ nhẹ cho người mới? Nhãn N/A trung thực? |
| `lessons/M01-research-thinking/workbook.md` | BT1–BT4 | Đủ đầu vào? Không mơ hồ? Khớp plan §6? |
| `lessons/M01-research-thinking/answer-key.md` | Đáp án có lý do | Đáp án đúng? Giải thích lỗi hay gặp đủ? |
| `lessons/M01-research-thinking/source-map.md` | Truy nguồn claim | Spot-check S03 §1.2/§1.3/§1.6; kiểm attribution CC BY-SA |
| `lessons/M01-research-thinking/qa/M01-author-selfcheck.md` | Self-check + findings | Phán xét 4 findings mở (đây là nghĩa vụ Pass 1/5, không phải của tác giả) |

Bối cảnh cần đọc kèm: `production-plan.md` (cùng thư mục), `curriculum/glossary-vi-en.md` §A, `curriculum/concept-map.md` (tiên quyết), Blueprint §6/§9/§10.

## 2. Kết quả học tập trọng tâm (để đánh giá mức phù hợp)

1. Viết câu hỏi nghiên cứu đủ 3 thành phần (quần thể + biến + đơn vị quan sát).
2. Phân loại câu hỏi: mô tả / so sánh / liên quan.
3. Phân loại biến (danh định / thứ bậc / định lượng), kể cả bẫy mã hóa số.
4. Nêu lý do association ≠ causation trong một ví dụ cụ thể.

## 3. Nguồn học thuật

- **S03 — Vu & Harrington, *Introductory Statistics for the Life and Biomedical Sciences*, 1st ed. (2020), CC BY-SA 3.0.** M01 trông vào Ch.1: §1.2 *Data basics* (data matrix, kiểu biến), §1.3 *Data collection principles* (quần thể/mẫu, quan sát vs thực nghiệm, confounding), §1.6 *Relationships between two variables* (liên quan). URL: https://www.openintro.org/book/biostat/ — `VERIFIED_SOURCE`.
- **S05 — SAMPL** (EQUATOR): chỉ mượn nguyên tắc báo cáo có trách nhiệm cho §08 — tham chiếu xa.
- Bài viết **không sao chép** sách; ví dụ y khoa nguyên tác giả; dữ liệu SIMULATED.

## 4. Lựa chọn sư phạm chính cần reviewer đánh giá

1. **Mini-dataset inline** (12 hồ sơ, 6 biến, trong bài — không tạo CSV) — quyết ở LEARNING_DESIGN để M02 nhập tay lại; naming khớp DS-A. Hợp lý?
2. **Confounder đưa vào M01** ở mức nhận diện (không tính toán) — glossary đặt nó ở nhóm M06+. Quá sớm?
3. **Checklist phát hiện kết luận vượt quyền** (§3.7) — đủ chắc tay cho người mới?
4. **Section 07 "Đọc kết quả"** biến tấu: vì không có SPSS Output, dạy đọc kết quả tính tay với khung câu hỏi→chỉ số→đơn vị. Có phá vỡ template §6 không? (Tác giả đánh giá: không — giữ đúng tinh thần "mỗi chỉ số gắn một câu hỏi".)
5. Taxonomy 3 loại câu hỏi (mô tả/so sánh/liên quan) là khung sư phạm của dự án, không nguyên văn ISLBS — có đủ cho nền tảng không?

## 5. Câu hỏi cụ thể cho reviewer

- Có claim nào trong `lesson.md` sai hoặc dễ gây hiểu nhầm ở mức nhập môn không (đặc biệt §3.5, §3.7)?
- Bảng `mini_records` có đủ "sạch về mặt sư phạm" — không vô tình dạy sai (ví dụ 3 ca ĐTĐ đều già: cố ý để dạy confounding, có gây ấn tượng quá mạnh "ĐTĐ=bệnh người già" không)?
- Workbook có mục nào thiếu đầu vào hoặc đa nghĩa không (đặc biệt BT2 #12)?
- Phần đạo đức dữ liệu (§3.8) đủ cho mức giới thiệu hay cần nguồn guideline riêng?

## 6. Kiểm/bằng chứng đã chạy (thật)

- Recompute toàn bộ số liệu `mini_records` bằng Python (khớp 100%: 46,0 / 25,0% / 129,8 / 149,0 vs 123,3 / 62,7 vs 40,4 / 29,4 vs 24,9 / BMI-split 140,8 vs 118,7 / 56,0 vs 36,0).
- Đối chiếu thủ công: 12 mục §6, 10 mục production-plan, thuật ngữ glossary, link nội bộ.
- **Nguồn đã kiểm mức full-text:** ISLBS Ch.1 §1.2.1, §1.2.2, §1.3.1–1.3.7 — trích nguyên văn từ PDF chính thức (Task 05); quote cụ thể trong `source-map.md` C1–C4.
- **Nguồn chỉ mức abstract/metadata:** S12 BMJ e071108 (fetch trực tiếp 403 — claim dựa trên abstract đã đọc).
- **Chưa chạy:** Pass 1/3/4/5 (chờ reviewer), Pass 2 (N/A), pilot học viên (chưa có).

## 7. Giới hạn đã biết / cổng còn lại

- S12 BMJ chỉ kiểm chứng mức abstract → Pass 4 nên mở full-text để spot-check.
- §3.7 có hộp "Đọc thêm" (RCT + target trial emulation) — reviewer đánh giá mức phù hợp với người mới.
- Không có SPSS runtime nào trong module → không có `VERIFIED`, đúng quy định.
- Pilot học viên thật chưa có → Pass 3 hiện chỉ là self-assessed.
- Sau review: nếu không còn BLOCKER/MAJOR → module đợi `HUMAN_APPROVAL` của chủ dự án (không tự gán).

## 8. Lịch sử review (bảo tồn — không xóa)

- **Task 04 (review độc lập 1):** `CHANGES_REQUIRED` — 9 findings M01-01…M01-09 → đã xử lý ở draft-2 (chi tiết `qa/M01-author-selfcheck.md` A0).
- **Task 06 (re-audit + readability):** 6 findings → draft-4 (BT4 mẫu số, biến động mẫu §3.2, giảm tải §3.7, "yếu tố nhiễu tiềm năng", đồng bộ metadata, chuẩn teaching kèm report).
