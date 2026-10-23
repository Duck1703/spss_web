# Learning Outcomes — Kết quả học tập đo được

> Mọi kết quả dưới đây viết bằng hành vi quan sát được (người học *làm được gì*), phù hợp chuẩn Blueprint §6 mục 02 (tối đa 3–5 mục/bài, đo được). Đây là mục tiêu thiết kế — chưa phải kết quả đạt được.

## 1. Kết quả đầu ra cuối khóa (terminal outcomes)

Sau khi hoàn thành core M01–M12, người học có thể:

- **TO-1.** Viết một câu hỏi nghiên cứu y khoa đơn giản kèm quần thể, biến kết cục, biến giải thích và đơn vị quan sát.
- **TO-2.** Xây codebook, nhập và làm sạch một bộ dữ liệu bảng (CSV/XLSX → `.sav`) với file raw được giữ bất biến và cleaning log đầy đủ.
- **TO-3.** Chọn phương pháp thống kê phù hợp (mô tả / t-test / phi tham số / chi-square–Fisher / ANOVA–Kruskal–Wallis / tương quan / hồi quy tuyến tính / logistic) từ **cấu trúc dữ liệu + câu hỏi + giả định**, và giải trình được lựa chọn.
- **TO-4.** Thực hiện phân tích đó trên SPSS bằng cả GUI lẫn syntax tái lưu được.
- **TO-5.** Diễn giải output gắn với câu hỏi: ước lượng, CI 95%, p, cỡ hiệu ứng — đúng đơn vị, đúng giới hạn, không nhầm ý nghĩa thống kê với ý nghĩa lâm sàng.
- **TO-6.** Viết một đoạn Methods/Results ngắn có trách nhiệm, nêu thiết kế, giả định và giới hạn kết luận (association ≠ causation).
- **TO-7.** Lưu hồ sơ sao cho người khác tái tạo được kết quả từ dữ liệu + syntax + phiên bản phần mềm.

**Giới hạn cam kết (Blueprint §1):** khóa cơ bản không trang bị năng lực tự làm mọi phân tích lâm sàng phức tạp; p < 0,05 ≠ ý nghĩa lâm sàng; tương quan ≠ nhân quả.

## 2. Kết quả theo module

| Module | Người học đạt khi… | Cách đo |
|---|---|---|
| M01 | Viết câu hỏi nghiên cứu đủ thành phần; phân loại đúng ≥10/12 biến; nêu được lý do không suy nhân quả | Phiếu nghiên cứu 1 trang + bảng phân loại |
| M02 | Hoàn tất preflight; tạo–lưu–mở lại `.sav`; chỉ đúng 3 cửa sổ | `hello_spss.sav` + ảnh chụp từ máy thật |
| M03 | Tự nhập/chuẩn hóa dữ liệu không nhìn screenshot; phát hiện ≥ lỗi gài sẵn | codebook.md + cleaning_log.md + data sạch |
| M04 | Lập Bảng 1 đúng chỉ số theo kiểu biến; 2 biểu đồ có chú giải đơn vị | Bảng + biểu đồ + chú giải |
| M05 | Diễn giải CI/p bằng lời đúng bản chất ở ≥3/4 output | Phiếu giải thích |
| M06 | Chọn đúng independent/paired/Welch theo thiết kế; báo cáo hiệu số + CI | File phân tích + đoạn kết quả |
| M07 | Giải trình lựa chọn tham số/phi tham số theo câu hỏi + dữ liệu (không chỉ theo Shapiro) | Bản giải trình |
| M08 | Lập và đọc 2×2: chọn Chi-square/Fisher đúng; diễn giải OR/RR đúng thiết kế | Bảng + đoạn diễn giải |
| M09 | Chọn omnibus phù hợp; hậu kiểm có lý do; viết hướng khác biệt | Báo cáo 3 nhóm |
| M10 | Chọn Pearson/Spearman đúng; đọc B + CI đúng đơn vị; nêu ≥1 confounder | Bảng hệ số + giải thích |
| M11 | Đọc Exp(B)/CI; viết 3 giới hạn; không đổi OR→RR | Bảng logistic + giới hạn |
| M12 | Hồ sơ tái tạo được bởi người khác; chọn checklist báo cáo đúng thiết kế | Capstone theo `assessment/capstone-checklist.md` |

## 3. Mốc (milestones) và cổng

| Mốc | Sau | Điều kiện qua (tự làm được, không trợ giúp) |
|---|---|---|
| MS-1 | M01–M03 | **GATE 1**: nhập/chuẩn hóa dữ liệu độc lập |
| MS-2 | M04–M05 | **GATE 2**: giải thích CI/p đúng bản chất |
| MS-3 | M06–M08 | **GATE 3**: chọn phép kiểm định từ cấu trúc dữ liệu |
| MS-4 | M09–M11 | **GATE 4**: phân biệt loại câu hỏi và vai trò điều chỉnh nhiễu |
| MS-5 | M12 | **GATE 5**: kết quả tái tạo được bởi người thứ hai |

## 4. Chỉ số đánh giá khóa học (cấp chương trình)

- Tỷ lệ người học qua từng GATE (mục tiêu pilot: **≥80% mục bài tập độc lập hoàn thành không xem lời giải** — *mục tiêu đề xuất, chưa phải kết quả đo được*).
- Điểm rubric chất lượng học liệu ≥85/100 (xem `assessment/rubrics.md`).
- Không còn finding `BLOCKER`/`MAJOR` mở tại thời điểm phát hành module.
- Ghi nhận thực tế khi pilot: thời gian hoàn thành, mức hỗ trợ cần, lời giải sai, điểm phải đoán (Blueprint §9 — sẽ đo ở Pass 3).
