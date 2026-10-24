# M01 — Author Self-Check (tự kiểm phía tác giả)

> **Bản chất:** đây là self-check của người biên soạn — **KHÔNG phải** Pass 1 (statistical QA độc lập), Pass 3 (beginner QA), Pass 4 (source audit), Pass 5, hay HUMAN_APPROVAL.
> Ngày: 2026-10-24 · Phiên bản artifact: draft-1.

## A. Kiểm tra đã thực hiện (có bằng chứng)

| # | Kiểm | Phương pháp | Kết quả |
|---|---|---|---|
| 1 | Đủ 12 mục chuẩn Blueprint §6 | Đối chiếu thủ công heading §01–§12 trong `lesson.md` | PASS — đủ 12; mục 05/06 ghi rõ KHÔNG ÁP DỤNG; mục 07 ghi phần SPSS N/A |
| 2 | Khớp production-plan M01 | Đối chiếu 10 mục plan | PASS — scope trong đúng danh sách; không SPSS/kiểm định/p-value; demo 12 hồ sơ; 3 loại câu hỏi; phản ví dụ cà phê; BT1–BT4 đúng plan §6 |
| 3 | Số học bảng `mini_records` | Script Python độc lập (không copy từ bài) — tính lại toàn bộ | PASS — age mean 46,0 (sum 552); ĐTĐ 3/12=25,0%; sex 6/12=50%; SBP mean 129,75→ghi 129,8; nhóm ĐTĐ vs không: SBP 149,0 vs 123,3; tuổi 62,7 vs 40,4; BMI 29,4 vs 24,9 |
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
| M01-SC-1 | NOTE | §07 dùng nhãn `NOT_APPLICABLE` cho phần SPSS Output — vượt ngoài bộ 3 trạng thái phụ (NOT_RUN/RUN_PENDING_REVIEW/VERIFIED); hợp lý nhưng là diễn giải của tác giả | OPEN — reviewer quyết |
| M01-SC-2 | MINOR | Mục 3.7 đưa "confounder" sớm hơn glossary C (confounder nằm mục C-M06+) — giải thích ngay tại chỗ nên chấp nhận được, nhưng có thể quá tải nhẹ | OPEN — Pass 3 đánh giá |
| M01-SC-3 | MINOR | BT2 #12 `smoking_status` có 2 đáp án có thể bảo vệ được (danh định/thứ bậc) — đáp án đã ghi cách chấm linh hoạt; nếu muốn chặt thì đổi mô tả biến | OPEN — ý kiến reviewer |
| M01-SC-4 | NOTE | Claim C3–C4 (source-map) dựa trên TOC + outline PDF chính thức; **chưa đọc nguyên văn §1.3** — đã ghi cờ spot-check cho Pass 4 | OPEN — Pass 4 |

## C. Kiểm tra KHÔNG thực hiện được trong môi trường authoring

- Pass 2 (SPSS execution): `NOT_APPLICABLE` — module không chứa thao tác/output SPSS nào.
- Pass 3 bằng người mới thật: chưa có học viên pilot.
- Đọc nguyên văn §1.3 ISLBS: PDF truy cập được nhưng chưa trích từng câu (Pass 4).
- Font/định dạng hiển thị tiếng Việt trên máy học viên: ngoài phạm vi authoring.

## D. Kết luận self-check

Bản thảo đủ điều kiện thoát `DRAFTING` (đủ 12 mục, mọi con số expected có nguồn/tái tính). Trạng thái đề xuất tiếp theo: **`STATISTICAL_QA` (Pass 1)** — tương đương "draft ready for independent review" theo ngôn ngữ task.
