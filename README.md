# SPSS Medical Learning Pack

Bộ học liệu tiếng Việt dạy **IBM SPSS Statistics** và **thống kê y sinh nhập môn** cho người hoàn toàn mới, thực hành trên **MacBook**.

> **Trạng thái dự án:** BOOTSTRAP — khung dự án và quy trình đã thiết lập; **chưa có nội dung bài học, dataset hay kết quả nào được kiểm chứng thực thi**. Xem chi tiết tại `project-control/project-state.md`.

## 1. Dự án này là gì?

Đây là workspace biên soạn một giáo trình tự học: từ một **câu hỏi y khoa** đến **kế hoạch phân tích**, **chuẩn bị dữ liệu**, **chọn phương pháp**, **chạy SPSS**, **diễn giải output** và **viết kết quả có trách nhiệm**.

Nguyên lý trụ cột (không phải giáo trình bấm menu):

```
HIỂU CÂU HỎI Y KHOA → HIỂU THỐNG KÊ → CHỌN PHƯƠNG PHÁP
→ DÙNG SPSS → DIỄN GIẢI OUTPUT → BÁO CÁO KẾT QUẢ
```

Đặc tả đầy đủ: `SPSS_Medical_Learning_Pack_v1_Blueprint.md` (file gốc, không sửa — provenance tại `project-control/blueprint-provenance.md`).

## 2. Người học là ai?

- Chưa từng dùng SPSS, gần như không có nền thống kê.
- Học bằng tiếng Việt (thuật ngữ Anh giữ trong ngoặc lần đầu xuất hiện).
- Thực hành trên MacBook với IBM SPSS Statistics 32 (mục tiêu v1 — cần xác minh tương thích trên máy thật, xem `START-HERE-MAC.md`).

## 3. Lộ trình 12 module cốt lõi (16 tuần, ~4–6 giờ/tuần)

| Mã | Chủ đề | Năng lực đầu ra chính |
|---|---|---|
| M01 | Tư duy nghiên cứu y khoa & ngôn ngữ thống kê | Viết câu hỏi nghiên cứu, phân loại biến, không suy nhân quả tùy tiện |
| M02 | SPSS trên MacBook | Mở SPSS, phân biệt Data/Variable View, Output, Syntax; tạo `.sav` |
| M03 | Codebook, nhập liệu, làm sạch | Định nghĩa biến, nhập CSV/XLSX, phát hiện lỗi, giữ raw bất biến |
| M04 | Thống kê mô tả & biểu đồ | Tần số, mean/SD, median/IQR, bảng đặc điểm bệnh nhân |
| M05 | Tư duy suy luận thống kê | Giải thích CI 95%, p-value, cỡ hiệu ứng, sai lầm I/II |
| M06 | So sánh trung bình 2 nhóm | Chọn independent/paired t-test, Welch khi phù hợp |
| M07 | Khi giả định/thang đo không phù hợp | Mann–Whitney/Wilcoxon có suy xét, không máy móc |
| M08 | Bảng chéo & biến nhị phân | Crosstabs, Chi-square/Fisher, OR/RR, association ≠ causation |
| M09 | So sánh từ 3 nhóm | One-way ANOVA/Welch hoặc Kruskal–Wallis, hậu kiểm có lý do |
| M10 | Tương quan & hồi quy tuyến tính | Pearson/Spearman, hồi quy đơn/đa biến, đọc B, CI, residual |
| M11 | Hồi quy logistic nhập môn | OR điều chỉnh, CI, không biến OR thành RR |
| M12 | Mini-project nghiên cứu y khoa | Toàn trình từ câu hỏi đến Methods/Results có thể tái tạo |

**Mở rộng tùy chọn (sau core):** E01 chẩn đoán/ROC · E02 phân tích sống còn · E03 missing data, complex survey, multiple testing.

Chi tiết từng module: `curriculum/roadmap.md` · Kết quả học tập đo được: `curriculum/learning-outcomes.md` · Bản đồ tiên quyết: `curriculum/concept-map.md`.

## 4. Cấu trúc thư mục

| Đường dẫn | Nội dung |
|---|---|
| `curriculum/` | Lộ trình, kết quả học tập, bản đồ khái niệm, glossary Việt–Anh |
| `lessons/M01…M12-*/` | Mỗi module: `production-plan.md` → `lesson.md` + `workbook.md` + `answer-key.md` + `qa-report.md` |
| `extensions/E01…E03-*/` | Chuyên đề mở rộng |
| `datasets/` | `synthetic-raw/` (bất biến) · `cleaned/` · `codebooks/` · `generators/` |
| `syntax/` | File `.sps` tái tạo phân tích |
| `exercises/`, `solutions/` | Bài tập và đáp án (đáp án chỉ khi expected đã tái tính) |
| `references/` | `source-register.md` (nguồn + trạng thái kiểm chứng) · `research-backlog.md` · `snapshots/` |
| `assessment/` | Rubric, kế hoạch pilot, checklist capstone |
| `qa/` | `QA-POLICY.md` + `findings-register.md` |
| `reviews/` | Báo cáo review độc lập |
| `project-control/` | Trạng thái, quyết định, backlog, nhật ký, hợp đồng quy trình, phân tích Blueprint |
| `scripts/` | Script tiện ích (path tương đối, không ghi ngoài workspace) |
| `exports/` | Bản xuất bản sinh lại được (PDF…) — không chỉnh tay |
| `.workspace/` | tmp/cache/logs nội bộ (không đưa lên git) |

## 5. Nội dung được tạo ra và kiểm chứng thế nào?

Mỗi module đi qua vòng đời 9 trạng thái — chi tiết tại `project-control/WORKFLOW-CONTRACT.md`:

`SOURCE_RESEARCH → LEARNING_DESIGN → DRAFTING → STATISTICAL_QA → BEGINNER_QA → TECHNICAL_REPRODUCIBILITY_QA → INDEPENDENT_REVIEW → HUMAN_APPROVAL → READY_FOR_LEARNING`

Nguyên tắc cứng:
- Không phát minh screenshot, output, p-value, CI hay bằng chứng kiểm chứng.
- Chưa chạy thật trên SPSS/macOS mục tiêu → gắn `NOT_RUN`, không báo PASS.
- Kết quả cross-check bằng Python/R không được ghi là kết quả SPSS.
- Dataset phải công khai hợp lệ hoặc giả lập có nhãn rõ.
- `HUMAN_APPROVAL` chỉ do con người quyết định.
- Rubric 100 điểm, ngưỡng phát hành ≥85 và không còn BLOCKER/MAJOR (`assessment/rubrics.md`, `qa/QA-POLICY.md`).

## 6. Trạng thái hiện tại (2026-10-24)

- ✅ Khung thư mục + tài liệu điều hành + production-plan M01–M03.
- ✅ 8/10 nguồn trong Blueprint đã mở kiểm tra thành công; S01, S10 chờ kiểm tra bằng trình duyệt.
- ⛔ Chưa có bài học, dataset, syntax hay kết quả nào — đây là chủ đích, đang chờ review setup trước khi sản xuất.
- ⛔ Workspace là Windows không có SPSS → mọi artifact thực thi mặc định `NOT_RUN`.

## 7. Agent tiếp theo cần làm gì để an toàn?

1. Đọc `project-control/project-state.md` → `WORKFLOW-CONTRACT.md` → `task-backlog.md`.
2. Không viết nội dung bài học cho tới khi có quyết định `APPROVED` trong `decisions.md` cho phép sản xuất (TB-001).
3. Không gắn nhãn `VERIFIED` cho thứ chưa chạy thật; không vượt cổng `HUMAN_APPROVAL`.
4. Mọi file nằm trong `D:\spss`; script dùng path tương đối; không cài đặt toàn cục.
5. Khi Blueprint mâu thuẫn yêu cầu: ghi `decisions.md` + hỏi, đừng tự quyết.
