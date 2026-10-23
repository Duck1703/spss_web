# WORKFLOW-CONTRACT — Hợp đồng quy trình sản xuất học liệu

- **Phiên bản:** 1.0 (bootstrap)
- **Ngày lập:** 2026-10-24
- **Áp dụng cho:** mọi module M01–M12, extension E01–E03, dataset, syntax file, bài tập và đáp án trong dự án này.
- **Quan hệ chuẩn:** quy trình này vận hành hóa Blueprint §6, §9, §12, §13. Mâu thuẫn với Blueprint → ghi vào `decisions.md`, không tự ý sửa phạm vi.

---

## 1. Vòng đời trạng thái của một module

Mỗi module có **một trạng thái duy nhất** tại mỗi thời điểm, ghi trong `project-state.md`. Thứ tự bắt buộc, không được nhảy cóc:

```
SOURCE_RESEARCH → LEARNING_DESIGN → DRAFTING → STATISTICAL_QA
→ BEGINNER_QA → TECHNICAL_REPRODUCIBILITY_QA → INDEPENDENT_REVIEW
→ HUMAN_APPROVAL → READY_FOR_LEARNING
```

| Trạng thái | Việc cần làm | Tiêu chí thoát (exit criteria) |
|---|---|---|
| `SOURCE_RESEARCH` | Xác định claim cần nguồn; cập nhật `references/source-register.md` + `research-backlog.md`; snapshot tài liệu quan trọng vào `references/snapshots/` | Mọi claim thống kê/thao tác chính có ≥1 nguồn `VERIFIED_SOURCE`; nguồn chưa mở được ghi `PENDING_VERIFICATION` và claim tương ứng bị chặn |
| `LEARNING_DESIGN` | Viết/cập nhật `production-plan.md` của module; xác nhận tiên quyết theo `curriculum/concept-map.md`; chọn dataset và kiểm tra data contract | Production-plan đầy đủ 10 mục chuẩn; được chủ dự án/người có thẩm quyền duyệt |
| `DRAFTING` | Soạn `lesson.md`, `workbook.md`, `answer-key.md`, dataset + codebook + syntax đi kèm theo chuẩn 12 mục (Blueprint §6) | Đủ 12 mục; mọi con số expected đánh dấu rõ nguồn (tính từ data hay `NOT_RUN`) |
| `STATISTICAL_QA` | Pass 1 — reviewer có chuyên môn kiểm: câu hỏi nghiên cứu, kiểu biến, thiết kế, phép thử, giả định, p/CI/effect size, giới hạn, tính đúng của kết luận | Không còn finding BLOCKER/MAJOR mở về thống kê |
| `BEGINNER_QA` | Pass 3 — reviewer chỉ dùng bài học + kiến thức bài trước; đánh dấu thuật ngữ chưa giải thích, bước phải đoán, quá tải thao tác, ví dụ thiếu trực quan | Không còn BLOCKER/MAJOR mở; điểm nghẽn đã ghi nhận và xử lý |
| `TECHNICAL_REPRODUCIBILITY_QA` | Pass 2 — chạy GUI + Syntax trên đúng version/chip/macOS mục tiêu; tái tạo expected output; ghi version, license/module, mã lỗi, ảnh chụp có nguồn gốc, nhật ký thực thi | Mọi hướng dẫn bắt buộc chạy lại được trên môi trường mục tiêu. **Nếu chưa chạy thật → `NOT_RUN`, module KHÔNG được qua trạng thái này** |
| `INDEPENDENT_REVIEW` | Pass 4 + Pass 5 — audit nguồn/trích dẫn (link, version, nguồn sơ cấp, điều kiện áp dụng, quyền sử dụng); reviewer thứ hai phán xét finding bất đồng | Điểm rubric ≥85/100; không còn BLOCKER/MAJOR; mọi bất đồng có phán quyết |
| `HUMAN_APPROVAL` | Con người có thẩm quyền duyệt phát hành | Chữ ký/quyết định ghi trong `decisions.md` hoặc `qa-report.md` của module. **AI agent không bao giờ được tự đánh dấu trạng thái này** |
| `READY_FOR_LEARNING` | Đóng gói/xuất bản cho học viên; theo dõi phản hồi pilot | Module có thể đưa vào sử dụng; vẫn phải re-audit khi nguồn/version đổi |

### Trạng thái phụ cho artifact kỹ thuật

- `NOT_RUN` — chưa thực thi trên môi trường mục tiêu. **Mặc định cho mọi `.sps`, `.sav`, expected output tạo trong workspace này** (workspace là Windows, không có SPSS).
- `RUN_PENDING_REVIEW` — đã chạy, chưa đối chiếu xong.
- `VERIFIED` — đã chạy trên version/chip/macOS chốt và đối chiếu khớp expected. Chỉ dùng khi có nhật ký/bằng chứng kèm theo.

### Phân biệt bắt buộc (không được nhầm lẫn)

`File đã tạo` ≠ `Nội dung đã soạn` ≠ `Đã review độc lập` ≠ `Đã chạy kiểm chứng SPSS` ≠ `Con người đã duyệt` ≠ `Học viên đã thử`.

---

## 2. Yêu cầu chất lượng bắt buộc (áp cho mọi artifact)

1. Mọi claim thống kê phải có nguồn hỗ trợ được (trỏ tới source-register) hoặc suy ra trực tiếp từ dataset của bài.
2. Người mới không cần kiến thức tiên quyết chưa được giải thích — mọi thuật ngữ có định nghĩa hoặc liên kết ôn tập.
3. Mọi nhiệm vụ thực hành có đủ đầu vào: file dữ liệu, codebook, version phần mềm, module license cần thiết.
4. Hướng dẫn SPSS (menu, dialog, syntax) phải khớp version/môi trường đã kiểm chứng; khác version → ghi chú rõ.
5. Mọi dataset ví dụ phải là công khai được phép dùng, hoặc giả lập và **ghi nhãn giả lập rõ ràng**.
6. Kết quả phân tích chỉ được dán nhãn `VERIFIED` sau khi tái tạo; con số chưa tái tạo ghi `NOT_RUN`.
7. Không bao giờ phát minh: screenshot, console output, p-value, khoảng tin cậy, hay bằng chứng kiểm chứng.
8. Kết quả tái tạo độc lập bằng Python/R chỉ là cross-check — **không được ghi là kết quả chạy SPSS**.
9. Module có lỗi thống kê vật chất (sai phép thử/diễn giải làm đổi kết luận) **không đạt — bất kể điểm trung bình**.
10. Dữ liệu giả lập không được trình bày như bằng chứng lâm sàng; luôn nêu giới hạn suy luận nhân quả.

## 3. Cơ chế ghi nhận và phân quyền

- **Người biên soạn không tự đóng finding của chính mình.** Findings do reviewer thứ hai phán xét (Pass 5).
- **HUMAN_APPROVAL chỉ do con người.** Agent đề xuất, không quyết định.
- Mọi thay đổi phạm vi/cấu trúc/claim lớn → `decisions.md` trước khi thực thi.
- Checkpoint học thuật và checkpoint kỹ thuật của mỗi bài là bắt buộc (Blueprint §2), không gộp chung.

## 4. Bản ghi finding chuẩn (dùng trong `qa/findings-register.md` và `qa-report.md`)

| Trường | Mô tả |
|---|---|
| `id` | Mã duy nhất, dạng `F-YYYY-NNN` |
| `module` | M01…M12, E01…E03 hoặc `GLOBAL` |
| `lesson/section` | Vị trí trong bài |
| `severity` | `BLOCKER` / `MAJOR` / `MINOR` |
| `claim` | Nội dung bị nghi vấn |
| `evidence` | Bằng chứng (trích đoạn, output, ảnh có nguồn gốc) |
| `source_url` | Nguồn đối chiếu |
| `reproduction_steps` | Cách tái hiện vấn đề |
| `expected` / `actual` | Kỳ vọng vs thực tế |
| `suggested_fix` | Đề xuất sửa |
| `owner` | Người xử lý |
| `status` | `OPEN` / `RESOLVED` / `REVERIFY_REQUIRED` |
| `reviewer` | Người phát hiện/phán xét |
| `date` | Ngày ghi nhận |
| `version` | Phiên bản artifact khi finding được mở |

### Định nghĩa severity

- **BLOCKER:** sai phép thử/diễn giải đổi kết luận; lấy tương quan làm nhân quả; lộ dữ liệu bệnh nhân; expected result không đối chiếu được dữ liệu; yêu cầu chức năng không có trong bản SPSS đang dùng mà không cảnh báo; phát minh kết quả/bằng chứng; thiếu đầu vào bắt buộc khiến bài không hoàn thành được.
- **MAJOR:** sai sót có thể gây hiểu nhầm đáng kể nhưng không đổi kết luận chính; thiếu giả định/kiểm tra quan trọng; hướng dẫn thao tác sai version.
- **MINOR:** lỗi trình bày, thuật ngữ, liên kết, định dạng không ảnh hưởng kết luận.

## 5. Ngưỡng phát hành (nhắc lại từ Blueprint §9, vận hành tại `assessment/rubrics.md`)

- Điểm tổng ≥ 85/100 VÀ không còn `OPEN` BLOCKER/MAJOR VÀ đã qua đủ 5 pass VÀ có HUMAN_APPROVAL.
- Mục tiêu pilot: ≥80% mục bài tập độc lập do học viên hoàn thành không xem lời giải (mục tiêu — không phải kết quả hiện có).
- `READY_FOR_LEARNING` bị thu hồi về `INDEPENDENT_REVIEW` nếu phát hiện drift nguồn/version ảnh hưởng nội dung.

## 6. Bối cảnh thực thi đặc thù của workspace này

- Workspace authoring `D:\spss` chạy Windows, **không có SPSS**. Mọi artifact thực thi tạo ra ở đây mặc định `NOT_RUN`; việc lên trạng thái `TECHNICAL_REPRODUCIBILITY_QA → VERIFIED` đòi hỏi máy Mac có SPSS 32 + license phù hợp.
- Script trong `scripts/` phải dùng đường dẫn tương đối từ project root, tuyệt đối không ghi ngoài `D:\spss`; log/temp vào `.workspace/`.
- Không cài đặt phần mềm lên máy người học, không tự động hóa MacBook từ workspace này.
