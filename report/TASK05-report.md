# BÁO CÁO TASK 05 — M01 REMEDIATION (sau review CHANGES_REQUIRED)

> **Quy ước `report/` (D-018):** chỉ chứa report mới nhất. `M01-reaudit/` = **bản copy** các file đã sửa để reviewer đối chiếu — bản chính ở đường dẫn gốc.

## 1. Xử lý 9 findings

| ID | Sev | Cách sửa | Trạng thái |
|---|---|---|---|
| M01-01 | MAJOR | Tỷ lệ sốt 8% bịa → **xóa**. BT4 thêm câu "tính được chưa? thiếu tử số (số người sốt) / mẫu số (số người hoàn thành theo dõi ≠ nhất thiết 200)". Answer-key không còn quan sát bịa | RESOLVED |
| M01-02 | MAJOR | Luật nhân quả tuyệt đối → viết lại §3.7 (bảng thiết kế + khung "cần nhớ đúng"), checkpoint Q5, answer-key BT3/BT4, glossary: *liên quan thuần túy ≠ nhân quả; quan sát vẫn lập luận nhân quả được khi thiết kế+giả định+phân tích thích hợp; RCT là chuẩn ưu tiên cho can thiệp, không phải duy nhất* | RESOLVED |
| M01-03 | MINOR | §07 thêm hàng trả lời trực tiếp câu mở đầu: nhóm BMI≥26 vs <26 → SBP 140,8 vs 118,7 mmHg (nhóm cao cũng già hơn 56,0 vs 36,0 — confounder) | RESOLVED |
| M01-04 | MINOR | `smoking_status` = danh định là đáp án duy nhất; thứ bậc chỉ khi định nghĩa lại biến thành thang có thứ tự | RESOLVED |
| M01-05 | MINOR | Đã đọc **nguyên văn** ISLBS §1.2.1, §1.2.2, §1.3.1–1.3.7 (PDF chính thức trích text); source-map ghi quote thật, không còn "TOC-level" | RESOLVED |
| M01-06 | MINOR | `days_off` → `days_limited` = "số ngày hạn chế sinh hoạt thường ngày" (phù hợp người ≥60 không đi làm) — sửa cả workbook scenario + answer-key | RESOLVED |
| M01-07 | MINOR | Xóa "mẫu quá nhỏ để kết luận gì" → phân biệt mô tả mẫu vs suy luận quần thể/lâm sàng; xóa "80%/20%" ở §04 | RESOLVED |
| M01-08 | NOTE | `patient_id`: ghi vai trò giữ-để-truy-vết/nối-bảng (không phân tích) trong codebook mini, hẹn vai trò rõ ở M03 | RESOLVED |
| M01-09 | NOTE | `NOT_APPLICABLE` trong bài chỉ là **mô tả nội dung**, không phải lifecycle state — contract 3 trạng thái phụ (NOT_RUN/RUN_PENDING_REVIEW/VERIFIED) không đổi | RESOLVED |

## 2. File đã sửa (bản chính)

- `lessons/M01-research-thinking/lesson.md` — §04, §3.4 codebook, §3.7, §07, §09 checkpoint Q5
- `lessons/M01-research-thinking/workbook.md` — BT4 scenario + item 5/6
- `lessons/M01-research-thinking/answer-key.md` — checkpoint Q4–Q5, BT2 #12, BT3 #4, BT4
- `lessons/M01-research-thinking/source-map.md` — S12 mới + quote nguyên văn §1.2/§1.3 + sửa trạng thái claim
- `lessons/M01-research-thinking/qa/M01-author-selfcheck.md` — remediation log + cập nhật self-findings
- `curriculum/glossary-vi-en.md` — dòng "nhân quả" đồng bộ diễn giải mới
- `references/source-register.md` — +S12
- `project-control/{progress-log,project-state}.md`

## 3. Before/After kỹ thuật

- **§3.7 trước:** "Quan sát → liên quan, không nhân quả" (tuyệt đối) + "mẫu quá nhỏ để kết luận gì". **Sau:** liên quan là kết luận trực tiếp; nhân quả lập luận được khi thiết kế/phân tích xử lý nhiễu; RCT ưu tiên không duy nhất; "đủ để mô tả 12 hồ sơ, quá nhỏ để suy quần thể".
- **BT4 trước:** đáp án bịa "8% sốt". **Sau:** bài tập hỏi người học *nhận ra chưa đủ dữ kiện* (thiếu số sốt + số theo dõi đủ).

## 4. Nguồn đã kiểm chứng

- **S03 ISLBS** — đọc nguyên văn từ PDF chính thức: §1.2.1 "each row corresponds to an observational unit"; §1.2.2 numerical/categorical/nominal/ordinal + phản ví dụ "telephone numbers"; §1.3.5 "cannot by themselves show a causal connection"; §1.3.6 control/randomization/replication; §1.3.7 "not advisable to draw causal conclusions" + confounder.
- **S12 BMJ** Matthews et al. 2022 (e071108): "The randomised trial is the preferred study design for evaluating the effectiveness and safety of interventions... When it is not possible to carry out a randomised trial, observational data can be used to answer similar questions" — qua abstract/metadata (bmj.com fetch bị 403; Pass 4 nên spot-check full text).

## 5. Kiểm tra đã chạy

- ✅ Recompute mọi số `mini_records` + split BMI≥26 (140,8/118,7; 56,0/36,0) — khớp bài.
- ✅ Grep toàn bộ 4 file: không còn câu tuyệt đối kiểu "quan sát không bao giờ/chỉ liên quan".
- ✅ Workbook↔answer-key khớp (BT4 6 câu; BT2 chốt danh định).
- ✅ Blueprint SHA-256 `cdb0b973…0366036` — không đổi.
- ✅ `git diff --check` sạch; mọi file trong `D:\spss`; không secrets.
- Không chạy (đúng ràng buộc): SPSS runtime (module không có), pilot, approval.

## 6. Git

- Baseline: `06f0d02` → commit remediation: xem `git log` (commit sau `06f0d02`). Tree clean.

## 7. Còn mở cho re-audit

- Pass 4: mở full-text BMJ e071108 (abstract đủ cho claim, nhưng đối chiếu full text chắc hơn); rà đoạn "thử nghiệm mục tiêu" có quá sớm cho người mới.
- Pass 3: đoạn confounder/BMI-split có quá tải không (self-finding M01-SC-2).
- Re-audit toàn bộ M01 theo rubric — gói ở `report/M01-reaudit/`.
