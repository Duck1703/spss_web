# BÁO CÁO TASK 06 — Beginner Teaching Standard + M01 Readability

> Quy ước `report/` (D-018): chỉ chứa report mới nhất. `M01-reaudit/` = bản copy file chính để reviewer đối chiếu.

## 1. Đã làm

- **Tạo chuẩn toàn khóa:** `project-control/BEGINNER-TEACHING-STANDARD.md` — 11 mục: persona người học, nguyên tắc ngôn ngữ, quy tắc giới thiệu thuật ngữ (đời thường → giải thích → tên chuyên môn), mức độ giải thích, thiết kế ví dụ (bộ 4 đúng-sai-vì sao-cách tự nhận), kiểm soát độ khó, liên kết module, chuẩn viết hướng dẫn SPSS (5 câu hỏi trước menu), chuẩn bài tập, danh sách cách viết bị cấm, quy trình áp dụng. Quyết định D-019 (PROPOSED — chờ owner duyệt làm chuẩn bắt buộc).
- **Audit + sửa M01** theo chuẩn đó — 16 chỗ readability (danh sách đầy đủ: `reviews/M01-beginner-readability-review.md`).

## 2. Sửa chính ở M01

Thuật ngữ trước đây dùng mà chưa giải thích → giờ có gloss ngay tại chỗ:
`BMI` (§01), `HbA1c` + viết tắt `ĐTĐ` (§3.1 + workbook BT1a), "độ bất định" → sai số (§3.2), `bmi`/`sbp_baseline` trong codebook (§3.4), `RCT` viết đầy đủ (§3.7), "mô phỏng thử nghiệm mục tiêu" diễn giải đời thường (§3.7), `tử số/mẫu số` (§3.7 + BT4), `missing` (§3.8), `mean` (§07), `script` (§12), "cs." → "các đồng nghiệp", "câu cá" viết rõ (answer-key).

## 3. Giữ nguyên (không đánh đổi độ chính xác)

- Sắc thái nhân quả đúng từ Task 05 (quan sát vẫn có thể lập luận nhân quả với thiết kế/phân tích thích hợp).
- Toàn bộ số học `mini_records`, cấu trúc 12 mục, BT1–BT4, nội dung confounder.
- Blueprint, roadmap 12 module — không đụng.

## 4. Kiểm tra

- ✅ Không đụng bảng dữ liệu → mọi số Task 05 vẫn khớp; grep không tái xuất lỗi (8%, nhân quả tuyệt đối, days_off, 80/20%).
- ✅ Blueprint SHA-256 `cdb0b973…0366036` không đổi; `git diff --check` sạch.
- ⚠️ Chưa chứng minh được "người mới học được" — chỉ là AI-audit; Pass 3 pilot vẫn `NOT_RUN` (ghi trung thực trong review file).

## 5. Git

- Baseline `34999ed` → commit Task 06 (xem `git log`). Tree clean.

## 6. Còn mở cho reviewer

- §3.7 vẫn là đoạn nặng nhất — chỉ pilot thật phán xét được mức tải.
- BT4 6 nhiệm vụ — kiểm chứng độ dài bằng người học.
