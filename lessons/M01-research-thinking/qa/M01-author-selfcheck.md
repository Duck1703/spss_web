# M01 — Author Self-Check (tự kiểm phía tác giả)

> **Bản chất:** đây là self-check của người biên soạn — **KHÔNG phải** Pass 1 (statistical QA độc lập), Pass 3 (beginner QA), Pass 4 (source audit), Pass 5, hay HUMAN_APPROVAL.
> Ngày: 2026-10-24 · Phiên bản artifact: **draft-2 (post-remediation Task 05)**.

## A0. Remediation theo review độc lập (Task 04 → CHANGES_REQUIRED)

| Finding | Sev | Xử lý | Trạng thái |
|---|---|---|---|
| M01-01 tỷ lệ sốt 8% bịa | MAJOR | BT4 thêm câu "tính được chưa? thiếu tử/mẫu số gì?"; answer-key không còn con số bịa, dạy nhận diện thiếu dữ kiện | RESOLVED (chờ re-audit) |
| M01-02 luật nhân quả tuyệt đối | MAJOR | §3.7 + checkpoint Q5 + BT3/BT4 answer + glossary viết lại: "liên quan thuần túy ≠ nhân quả; quan sát + thiết kế/phân tích thích hợp vẫn lập luận nhân quả được; RCT ưu tiên chứ không duy nhất" — nguồn S03 §1.3.5/§1.3.7 + S12 BMJ target trial emulation | RESOLVED (chờ re-audit) |
| M01-03 câu hỏi mở đầu đứt mạch | MINOR | §07 thêm dòng trả lời trực tiếp câu BMI–huyết áp của bác sĩ Lan (140,8 vs 118,7 mmHg) + đoạn nối | RESOLVED |
| M01-04 smoking_status | MINOR | Answer-key siết: danh định là đáp án duy nhất; thứ bậc chỉ nếu định nghĩa lại biến với thang có thứ tự | RESOLVED |
| M01-05 source chỉ mức TOC | MINOR | Đã trích nguyên văn ISLBS §1.2.1/§1.2.2/§1.3.1–1.3.7 từ PDF chính thức; source-map cập nhật quote + trạng thái | RESOLVED |
| M01-06 days_off không hợp ≥60t | MINOR | Đổi `days_off`→`days_limited` ("ngày hạn chế sinh hoạt thường ngày") ở workbook + answer-key | RESOLVED |
| M01-07 quá đá vs 80/20% | MINOR | "mẫu quá nhỏ để kết luận gì" → phân biệt mô tả mẫu vs suy luận; bỏ khẳng định 80/20 ở §04 | RESOLVED |
| M01-08 patient_id sau này | NOTE | Codebook mini ghi rõ: giữ cột ID để truy vết/nối bảng, không phân tích (vai trò rõ ở M03) | RESOLVED |
| M01-09 NOT_APPLICABLE | NOTE | Giữ nhãn mô tả "KHÔNG ÁP DỤNG" trong bài; giải thích trong file này (mục C) rằng nó không phải lifecycle state — contract lifecycle không đổi | RESOLVED |

## A. Kiểm tra đã thực hiện (có bằng chứng)

| # | Kiểm | Phương pháp | Kết quả |
|---|---|---|---|
| 1 | Đủ 12 mục chuẩn Blueprint §6 | Đối chiếu thủ công heading §01–§12 trong `lesson.md` | PASS — đủ 12; mục 05/06 ghi rõ KHÔNG ÁP DỤNG; mục 07 ghi phần SPSS N/A |
| 2 | Khớp production-plan M01 | Đối chiếu 10 mục plan | PASS — scope trong đúng danh sách; không SPSS/kiểm định/p-value; demo 12 hồ sơ; 3 loại câu hỏi; phản ví dụ cà phê; BT1–BT4 đúng plan §6 |
| 3 | Số học bảng `mini_records` | Script Python độc lập (không copy từ bài) — tính lại toàn bộ, **chạy lại sau remediation** | PASS — age mean 46,0 (sum 552); ĐTĐ 3/12=25,0%; sex 6/12=50%; SBP mean 129,75→ghi 129,8; nhóm ĐTĐ vs không: SBP 149,0 vs 123,3; tuổi 62,7 vs 40,4; BMI 29,4 vs 24,9; **nhóm BMI≥26 vs <26: SBP 140,8 vs 118,7; tuổi 56,0 vs 36,0** |
| 4 | Workbook ↔ answer-key khớp | Đối chiếu từng câu BT1–BT3 với đáp án; BT4 rubric mẫu | PASS — đáp án đủ; BT2 có 12 dòng ↔ 12 đáp án; 2 bẫy (#1, #3) nêu đúng |
| 5 | Nhãn SIMULATED | grep toàn bộ 4 file | PASS — mọi nơi có bảng/kết quả đều có nhãn giả lập hoặc "trong mẫu" |
| 6 | Thuật ngữ khớp glossary | Đối chiếu `curriculum/glossary-vi-en.md` §A | PASS — dùng đúng: đơn vị quan sát, biến định tính/danh định/thứ bậc/định lượng, quần thể, mẫu, suy luận, liên quan, nhân quả, yếu tố nhiễu, codebook, dữ liệu giả lập; thuật ngữ Anh trong ngoặc ở lần đầu |
| 7 | Không thuật ngữ dùng trước định nghĩa | Rà thứ tự xuất hiện | PASS (self-assessed) — "yếu tố nhiễu/confounder" định nghĩa ngay khi dùng ở 3.7; "mô tả/suy luận" định nghĩa ở 3.2 trước khi dùng sau; *cần Pass 3 xác nhận bằng mắt người mới* |
| 8 | Link nội bộ | Kiểm tham chiếu tương đối trong lesson | PASS — `../../START-HERE-MAC.md`, `workbook.md`, `answer-key.md`, `source-map.md`, `qa/M01-author-selfcheck.md` đều tồn tại |
| 9 | Trạng thái kỹ thuật | Rà nhãn | PASS — không artifact nào gắn `VERIFIED`; phần SPSS = `NOT_APPLICABLE` (đúng hơn `NOT_RUN` vì không có gì để chạy) |
| 10 | Attribution | `source-map.md` | PASS — S03 metadata đầy đủ (Vu & Harrington, 1st ed ©2020, CC BY-SA 3.0), không sao chép, không branding |

## B. Findings tự phát hiện (severity theo `WORKFLOW-CONTRACT.md` §4)

| id | severity | claim/vấn đề | trạng thái |
|---|---|---|---|
| M01-SC-1 | NOTE | §07 dùng nhãn `NOT_APPLICABLE` cho phần SPSS Output — vượt ngoài bộ 3 trạng thái phụ (NOT_RUN/RUN_PENDING_REVIEW/VERIFIED); hợp lý nhưng là diễn giải của tác giả | RESOLVED draft-2 — `NOT_APPLICABLE` chỉ là mô tả nội dung trong bài, KHÔNG phải lifecycle state; contract không bị sửa (đồng chiều finding review M01-09) |
| M01-SC-2 | MINOR | Mục 3.7 đưa "confounder" sớm hơn glossary C (confounder nằm mục C-M06+) — giải thích ngay tại chỗ nên chấp nhận được, nhưng có thể quá tải nhẹ | OPEN — Pass 3 đánh giá (đoạn "thử nghiệm mục tiêu" mới thêm ở draft-2 cũng cần rà mức độ phù hợp) |
| M01-SC-3 | MINOR | BT2 #12 `smoking_status` có 2 đáp án có thể bảo vệ được (danh định/thứ bậc) — đáp án đã ghi cách chấm linh hoạt; nếu muốn chặt thì đổi mô tả biến | RESOLVED draft-2 — theo review M01-04: danh định là đáp án duy nhất; thứ bậc chỉ khi định nghĩa lại biến thành thang có thứ tự |
| M01-SC-4 | NOTE | Claim C3–C4 (source-map) dựa trên TOC + outline PDF chính thức; **chưa đọc nguyên văn §1.3** — đã ghi cờ spot-check cho Pass 4 | RESOLVED draft-2 — đã trích nguyên văn §1.2.1/1.2.2/§1.3.1–1.3.7 từ PDF chính thức; quote cụ thể trong source-map (đồng chiều review M01-05) |

## C. Kiểm tra KHÔNG thực hiện được trong môi trường authoring

- Pass 2 (SPSS execution): không áp dụng cho M01 — module không chứa thao tác/output SPSS nào (ghi chú: "NOT_APPLICABLE" trong bài là **mô tả nội dung**, không phải lifecycle state của contract).
- Pass 3 bằng người mới thật: chưa có học viên pilot.
- Font/định dạng hiển thị tiếng Việt trên máy học viên: ngoài phạm vi authoring.
- Đọc full-text BMJ e071108 trực tiếp từ bmj.com: bị chặn 403 — claim S12 dựa trên abstract/metadata qua doi.org + search extract; re-audit nên mở full text để spot-check.

## D. Kết luận self-check

Bản thảo draft-2 (post-remediation) đủ điều kiện thoát `DRAFTING` (đủ 12 mục, mọi con số expected có nguồn/tái tính, 9/9 finding review đã xử lý). Trạng thái đề xuất tiếp theo: **`STATISTICAL_QA` (Pass 1) — re-audit độc lập** theo ngôn ngữ contract.
