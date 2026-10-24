# BÁO CÁO TASK 07 — M01 FINAL BEGINNER-QUALITY REMEDIATION (draft-4)

> Quy ước `report/` (D-018): chỉ report mới nhất. `M01-reaudit/` = 8 file copy: lesson, workbook, answer-key, source-map, selfcheck, review-package, readability-review, **BEGINNER-TEACHING-STANDARD.md** (để owner/reviewer xem xét D-019).

## 1. Xử lý từng finding

**① BT4 — mâu thuẫn mẫu số theo dõi**
- *Trước:* answer-key ghi "Mẫu: 200 người thực tế được tiêm **và theo dõi**" — ngầm khẳng định cả 200 đều hoàn thành theo dõi, trái đề (chỉ *hẹn* quay lại).
- *Sau:* tách hai mức — "200 người được tiêm" (ghi nhận ban đầu) vs "số người có dữ liệu theo dõi 7 ngày: chưa biết". BT4.5 bổ sung: vì sao thiếu theo dõi quan trọng (nhóm không quay lại có thể khác → tỷ lệ lệch theo hướng không biết) + **làm rõ để không hiểu máy móc**: mẫu số = nhóm câu hỏi nói về, không phải lúc nào cũng là số hoàn thành — nếu hỏi "trong 200 người được tiêm" thì mẫu số là 200 nhưng tử số phải biết trên cả 200.

**② §3.2 — giải thích bất định**
- *Trước:* "kết quả luôn có sai số nhất định mà ta phải nêu rõ" — trừu tượng, dễ nhầm với sai sót đo lường.
- *Sau:* ví dụ đời thường trước — bốc 12 hồ sơ *khác* của cùng phòng khám sẽ ra tuổi TB khác 46,0, không phải ai đo sai, chỉ vì mỗi mẫu là một phần khác nhau. Sau đó mới đặt tên: **biến động mẫu (sampling variability)**, đo nó là việc của suy luận (M05).

**③ §3.7 — giảm tải nhận thức**
- *Trước:* RCT, target trial emulation, "quan sát vẫn lập luận nhân quả" nằm dày trong thân bài chính.
- *Sau:* thân bài chỉ giữ: association ≠ causation → ví dụ ĐTĐ–tuổi trong chính bảng → ví dụ cà phê–mất ngủ → bảng thiết kế rút gọn → câu cần nhớ. Toàn bộ phần nâng cao chuyển vào hộp **"📖 Đọc thêm — chưa cần ghi nhớ"** (vẫn giữ đúng phát biểu: quan sát + thiết kế/phân tích thích hợp có thể lập luận nhân quả; RCT ưu tiên không duy nhất — **không tái xuất** luật tuyệt đối). Checkpoint Q5 rút gọn, trỏ về hộp đọc thêm.

**④ Confounder → "yếu tố nhiễu tiềm năng"**
- Tuổi trong `mini_records` giờ gọi là "yếu tố nhiễu tiềm năng" kèm "chỉ nghi, chưa khẳng định" — đồng nhất ở lesson §3.7/§09, answer-key Q4, BT3 #4–#5, BT4.6. Không trình bày giả định nhân quả chưa kiểm chứng như sự thật đã biết.

**⑤ Đồng bộ metadata**
- `reviews/M01-review-package.md`: draft-1 → **draft-4** kèm lịch sử draft; mục 6–7 viết lại — xóa phát biểu cũ "§1.3 chưa đọc nguyên văn" (đã đọc từ Task 05); ghi rõ S03 = full-text, S12 = abstract-only; thêm mục 8 "Lịch sử review" bảo tồn Task 04/06.
- `source-map.md`: cột trạng thái phân biệt rõ **mức full-text** (S03) vs **abstract/metadata** (S12) vs trang guideline (S05).
- `qa/M01-author-selfcheck.md`: header → draft-4 + bảng remediation Task 07.

**⑥ D-019 — chuẩn teaching**
- Giữ `PROPOSED`, không tự duyệt. File đầy đủ kèm trong `report/M01-reaudit/BEGINNER-TEACHING-STANDARD.md` để owner + reviewer xem xét.

## 2. File sửa

`lesson.md` (§3.2, §3.7, §09) · `answer-key.md` (Q4–Q5, BT3, BT4) · `source-map.md` · `qa/M01-author-selfcheck.md` · `reviews/M01-review-package.md` · `project-control/progress-log.md` · `project-control/project-state.md`. Workbook không đổi (đề BT4 đã đúng — chỉ answer-key mâu thuẫn).

## 3. Kiểm tra

- ✅ Bảng `mini_records` không đổi → mọi số học vẫn khớp (đã recompute ở Task 05/06).
- ✅ Grep: không còn "không bao giờ"/"chỉ cho liên quan" tuyệt đối; không "8%" bịa.
- ✅ Workbook↔answer-key khớp (BT4 đề hỏi đúng, đáp án mới trả lời đúng đề).
- ✅ Links nội bộ còn hiệu lực; Blueprint SHA-256 `cdb0b973…0366036` không đổi; `git diff --check` sạch.
- ⚠️ `<details>` trong §3.7 render được trên GitHub/viewer chuẩn — nếu reviewer muốn markdown thuần, đổi thành heading in nghiêng cũng được (quyết của reviewer).
- Không chạy (đúng ràng buộc): pilot người thật, SPSS runtime.

## 4. Git

- Baseline `0381a72` → commit Task 07. Tree clean, không push.

## 5. Còn mở cho re-audit

- Pass 3: độ phù hợp hộp "Đọc thêm" với người mới (chỉ pilot phán xét được).
- Pass 4: spot-check full-text BMJ e071108 (hiện chỉ abstract-level).
- Owner duyệt D-019 để chuẩn teaching thành bắt buộc.
