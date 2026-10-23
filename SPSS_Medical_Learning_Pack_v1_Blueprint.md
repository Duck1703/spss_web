# SPSS MEDICAL LEARNING PACK v1

**Đặc tả chương trình học và kế hoạch biên soạn**  
**Ngày thiết kế:** 24/10/2026  
**Ngôn ngữ:** Tiếng Việt (giữ thuật ngữ SPSS/biostatistics tiếng Anh trong ngoặc ở lần xuất hiện đầu)  
**Đối tượng:** Người chưa từng sử dụng SPSS và gần như chưa có nền tảng thống kê  
**Thiết bị ưu tiên:** MacBook + IBM SPSS Statistics 32; xác minh phiên bản/chip/macOS/license trước khi hướng dẫn thao tác.  
**Trạng thái:** BLUEPRINT — chưa phải bộ giáo trình hoàn chỉnh, chưa được kiểm chứng thực thi trên thiết bị của người học.

---

## 1. Đích đến và nguyên tắc sư phạm

**Đích đến:** Người học tự biến một câu hỏi nghiên cứu y khoa đơn giản thành kế hoạch phân tích, chuẩn bị dữ liệu, chọn phương pháp phù hợp, thực hiện trên SPSS, kiểm tra giả định, diễn giải kết quả (gồm hiệu ứng và khoảng tin cậy), xuất bảng và viết một đoạn kết quả nghiên cứu có trách nhiệm.

**Không hứa:** Sau khóa cơ bản người học đủ năng lực tự làm mọi phân tích thử nghiệm lâm sàng hoặc nghiên cứu phức tạp; kiểm định p < 0,05 không đồng nghĩa có ý nghĩa lâm sàng; tương quan không chứng minh nhân quả.

**5 nguyên tắc:**
1. Bắt đầu bằng vấn đề y khoa, không bằng menu hoặc công thức.
2. Chỉ giới thiệu khái niệm mới khi phải dùng đến; cung cấp ôn tập tiên quyết.
3. Mỗi bài có 1 nhiệm vụ thật, 1 bộ dữ liệu (giả lập hoặc công khai hợp lệ), 1 đầu ra quan sát được.
4. Có thao tác giao diện SPSS trên Mac và, sau giai đoạn làm quen, có SPSS Syntax lưu lại quy trình.
5. Không xem việc tạo được Output là hiểu bài: phải giải thích được *vì sao chọn phương pháp*, *giả định*, *điều kết quả không nói được*.

## 2. Phạm vi và thời lượng

- **12 chuyên đề cốt lõi trong 16 tuần**, khoảng **4–6 giờ/tuần** (64–96 giờ) là nhịp tự học đề xuất, không phải cam kết tốc độ.
- **3 chuyên đề mở rộng tùy chọn**, học sau khi qua core: chẩn đoán/ROC; phân tích sống còn; khảo sát mẫu phức tạp, missing data và các vấn đề thiết kế nghiên cứu nâng cao.
- Mỗi tuần: đọc hiểu 45–75 phút, thao tác SPSS 90–150 phút, bài tập độc lập 45–75 phút, tự kiểm tra và sửa lỗi 30–60 phút.
- Mỗi bài có checkpoint học thuật và checkpoint kỹ thuật độc lập.

## 3. Lộ trình chuyên đề

| Mã | Tuần | Chủ đề | Người học phải làm được | Minh chứng bắt buộc |
|---|---|---|---|---|
| M01 | 1 | Tư duy nghiên cứu y khoa và ngôn ngữ thống kê | Viết câu hỏi nghiên cứu, phân biệt mô tả/so sánh/liên quan, quần thể/mẫu, đơn vị quan sát, biến định tính/định lượng; hiểu không được suy nhân quả tùy tiện | Phiếu nghiên cứu 1 trang + xác định kiểu 12 biến |
| M02 | 2 | SPSS trên MacBook | Kiểm tra thiết bị/version/license, mở SPSS; phân biệt Data View, Variable View, Output, Syntax; tạo, lưu, mở `.sav` | File `hello_spss.sav` + ảnh chụp có kiểm chứng |
| M03 | 3–4 | Xây codebook, nhập liệu, làm sạch | Đặt `Name`, `Label`, `Values`, `Missing`, `Measure`; nhập CSV/XLSX; kiểm tra mã sai, missing, giá trị bất thường; giữ dữ liệu raw bất biến | `codebook.md`, `cleaning_log.md`, data sạch và syntax thao tác |
| M04 | 5 | Thống kê mô tả và biểu đồ | Tính tần số, %, mean/SD, median/IQR, tứ phân vị; tạo bảng đặc điểm bệnh nhân; nhận biết đơn vị/kiểu biến | Bảng 1 + 2 biểu đồ và chú giải |
| M05 | 6–7 | Tư duy suy luận thống kê | Giải thích biến thiên do lấy mẫu, khoảng tin cậy 95%, giả thuyết, p-value, cỡ hiệu ứng, sai lầm loại I/II, power ở mức nhập môn; ý nghĩa lâm sàng khác ý nghĩa thống kê | Phiếu giải thích 4 Output giả định, không chỉ đọc Sig. |
| M06 | 8 | So sánh trung bình 2 nhóm | Nhận diện độc lập/cặp, kiểm tra thiết kế/giả định, chọn independent/paired t-test và Welch khi thích hợp | Phân tích huyết áp 2 nhóm hoặc trước/sau, kèm CI hiệu số |
| M07 | 9 | Khi giả định hoặc thang đo không phù hợp | Suy xét Mann–Whitney/Wilcoxon; phân biệt câu hỏi và tham số đích; không dùng Shapiro–Wilk như công tắc máy móc | Bản giải trình quyết định phép kiểm định |
| M08 | 10 | Bảng chéo và biến nhị phân | Chạy Crosstabs, Chi-square/Fisher khi phù hợp; hiểu tỷ lệ, OR và RR (phụ thuộc thiết kế nghiên cứu), phân biệt association với causation | Bảng 2×2 + diễn giải mức độ liên quan |
| M09 | 11 | So sánh từ 3 nhóm | One-way ANOVA/Welch hoặc Kruskal–Wallis khi hợp lý; phân tích hậu kiểm chỉ khi có lý do | Báo cáo so sánh 3 nhóm, chú thích phương pháp hậu kiểm |
| M10 | 12–13 | Tương quan và hồi quy tuyến tính | Pearson/Spearman theo dữ liệu; hồi quy tuyến tính đơn và đa biến căn bản; đọc hệ số B, CI, residual, cảnh giác confounding | Phân tích tuổi/BMI và huyết áp, bảng hệ số có giải thích |
| M11 | 14 | Hồi quy Logistic nhập môn | Hiểu kết cục nhị phân, OR điều chỉnh, CI, cỡ mẫu/số biến, diễn giải không biến OR thành RR; nhận diện mô hình không ổn định | Bảng kết quả logistic + 3 giới hạn diễn giải |
| M12 | 15–16 | Mini-project nghiên cứu y khoa | Từ câu hỏi đến data audit → phân tích → kiểm tra → viết Methods/Results; lưu syntax, bảng và log sai lệch; chọn checklist báo cáo phù hợp | Hồ sơ phân tích hoàn chỉnh và bảo vệ miệng/ngắn |

**Cổng kiến thức:**
- Sau M03: tự nhập/chuẩn hóa dữ liệu mà không dựa vào screenshot.
- Sau M05: tự giải thích CI và p-value bằng lời không sai bản chất.
- Sau M08: tự xác định lựa chọn t-test / nonparametric / chi-square bằng cấu trúc dữ liệu.
- Sau M11: tự phân biệt câu hỏi về trung bình, tỷ lệ, tương quan, dự báo và điều chỉnh yếu tố nhiễu.
- Sau M12: một người khác có thể tái tạo kết quả từ dữ liệu + syntax + phiên bản phần mềm.

## 4. Chuyên đề mở rộng (không bắt buộc trước khi hoàn thành core)

| Mã | Chủ đề | Điều kiện học | Lưu ý |
|---|---|---|---|
| E01 | Phân tích chẩn đoán: sensitivity, specificity, PPV/NPV, ROC/AUC | Hoàn thành M08 và M10 | Phân biệt accuracy, prevalence, lựa chọn ngưỡng; tuân thủ STARD khi báo cáo nghiên cứu độ chính xác chẩn đoán |
| E02 | Kaplan–Meier, log-rank, Cox | Hoàn thành M05, M08, M10–M11 | Phải dạy censoring, risk set, proportional hazards, thiết kế theo dõi trước khi bấm SPSS |
| E03 | Missing data nâng cao, complex survey, multiple testing, thiết kế và báo cáo | Hoàn thành core | NHANES cần weights, strata/PSU phù hợp; kiểm tra module/license SPSS; không phân tích như mẫu ngẫu nhiên đơn giản |

## 5. Bộ dữ liệu thực hành đề xuất

**DS-A `clinic_bp_synthetic`:** 160 hồ sơ *hoàn toàn giả lập* để học mô tả, paired t-test, so sánh nhóm, hồi quy. Biến đề xuất:
- `patient_id` (mã giả; unique), `age_years`, `sex_code`, `treatment_group` (A/B; *không tự nhận là phân nhóm ngẫu nhiên*), `bmi`, `sbp_baseline`, `sbp_followup`, `diabetes_flag`, `adherence_score`, `followup_completed`, `bp_controlled_simulated` (định nghĩa rõ chỉ nhằm bài tập).
- Có thể tạo các phiên bản `v1_raw.csv` (chứa missing và lỗi *cố tình gài*), `v1_clean.sav`, `codebook.md`, `analysis.sps`, `expected_results.md`.
- Những quan hệ trong dữ liệu là giả lập để phục vụ bài tập, **không phải bằng chứng hiệu quả điều trị**.

**DS-B `diagnostic_test_synthetic`:** dữ liệu giả lập có `reference_diagnosis`, `test_result`, `biomarker_value`, giúp xây 2×2 và ROC ở E01.

**DS-C `survival_synthetic`:** dữ liệu giả lập có `followup_months`, `event_observed`, `group`, để dạy censoring và sống còn ở E02.

**Nguồn thực tế tùy chọn:** Bộ dữ liệu công khai CDC NHANES *chỉ học khi đã dạy đúng cách đọc thiết kế mẫu phức tạp và trọng số*. Không dùng dữ liệu bệnh nhân thật khi chưa có cơ sở pháp lý/quy trình bảo mật phù hợp.

**Data contract:** File raw bất biến; codebook ghi đơn vị, loại biến, missing, định nghĩa kết cục; dữ liệu giả lập cố định seed + mô tả cách sinh; expected outputs được tạo lại từ source dữ liệu.

## 6. Chuẩn mỗi bài học

01. **Tình huống y khoa:** 4–8 câu không giả định người đọc biết thống kê.
02. **Kết quả học tập:** tối đa 3–5 mục đo được bằng hành vi.
03. **Kiến thức nền vừa đủ:** thuật ngữ được định nghĩa + phản ví dụ.
04. **Câu hỏi chọn phương pháp trước khi mở SPSS:** kiểu biến, thiết kế, mục tiêu, giả định.
05. **Mac walkthrough:** menu chính xác cho bản SPSS được chọn; thay đổi giữa phiên bản phải ghi chú.
06. **SPSS Syntax:** từ mức phù hợp, có chú thích, file đầu vào/output, tuyệt đối không ghi đè dữ liệu gốc.
07. **Đọc Output:** mỗi chỉ số gắn với một câu hỏi, đơn vị, CI, effect size khi áp dụng.
08. **Viết kết quả y khoa:** một đoạn mẫu, nêu thiết kế và giới hạn kết luận.
09. **Khi gặp lỗi:** 3–5 tình huống hay gặp và cách khôi phục.
10. **Tự làm không nhìn hướng dẫn:** bài tập biến thể khác bài mẫu.
11. **Checkpoint:** hỏi lý do chọn phép thử, diễn giải CI/p và giới hạn nghiên cứu.
12. **Đáp án & bằng chứng:** expected numbers chỉ khi đã tái tính; nguồn và ngày kiểm chứng.

## 7. MacBook / SPSS compatibility contract

**Mục tiêu v1:** IBM SPSS Statistics 32 trên macOS **được IBM xác nhận tương thích**. Bản 32 dùng mã Intel, cần Rosetta trên Apple Silicon. IBM thông báo SPSS 33 hướng tới ARM64 native, nhưng không mặc định thay đổi phiên bản giáo trình trước khi xác nhận phát hành và tính tương thích.

**Preflight cá nhân bắt buộc:**
- Ghi chip: Intel hoặc Apple Silicon; phiên bản macOS; phiên bản SPSS đã cài; hình thức license; các module được cấp quyền.
- Dựa trên thông tin IBM, macOS 15 và 26 nằm trong phạm vi hỗ trợ SPSS 32; trường hợp macOS khác phải kiểm tra chính thức theo version/build trước khi hứa chạy được.
- Cài qua nguồn IBM hoặc giấy phép của trường/cơ sở; không hướng dẫn crack hoặc key lậu.
- Xác nhận mở được Data Editor và Output, lưu/mở `.sav`, chạy demo `FREQUENCIES`, ghi log nếu có khác biệt menu hoặc lỗi font/dấu thập phân.
- Hướng dẫn tên biến ASCII, chữ Việt ở Variable Labels, quy ước dấu chấm thập phân và delimiter CSV, đường dẫn file tương đối/nội dung hướng dẫn không phụ thuộc một máy.
- Với regression/survival/complex samples, xác nhận thành phần được cấp license trước mỗi bài; cung cấp phương án học lý thuyết khi thiếu module, không hứa tính năng chưa kiểm tra.

## 8. Nguồn học thuật và cách sử dụng

| ID | Nguồn | Vai trò | Link |
|---|---|---|---|
| S01 | IBM SPSS Statistics 32 docs | Nguồn chính thức về menu, thuật toán, cú pháp, version | https://www.ibm.com/docs/en/spss-statistics/32.0.0 |
| S02 | IBM SPSS Statistics 32 PDF/manuals | Manual chi tiết, hướng dẫn cài trên macOS | https://www.ibm.com/support/pages/ibm-spss-statistics-32-documentation |
| S03 | OpenIntro: Introductory Statistics for the Life and Biomedical Sciences | Kiến thức nhập môn bằng tình huống y sinh, tư duy sư phạm | https://www.openintro.org/book/biostat/ |
| S04 | UCLA OARC: What statistical analysis should I use? | Bản đồ chọn phép kiểm định; đối chiếu SPSS syntax/output | https://stats.oarc.ucla.edu/spss/whatstat/what-statistical-analysis-should-i-usestatistical-analyses-using-spss/ |
| S05 | EQUATOR / SAMPL Guidelines | Tiêu chuẩn báo cáo phương pháp và kết quả thống kê y sinh | https://www.equator-network.org/reporting-guidelines/sampl/ |
| S06 | EQUATOR / STROBE | Checklist báo cáo nghiên cứu quan sát | https://www.equator-network.org/reporting-guidelines/strobe/ |
| S07 | EQUATOR / CONSORT 2025 | Checklist báo cáo thử nghiệm ngẫu nhiên | https://www.equator-network.org/reporting-guidelines/consort/ |
| S08 | EQUATOR / STARD | Checklist báo cáo độ chính xác chẩn đoán | https://www.equator-network.org/reporting-guidelines/stard/ |
| S09 | CDC NHANES Sample Design | Nguyên tắc thiết kế mẫu phức tạp và trọng số | https://wwwn.cdc.gov/nchs/nhanes/tutorials/SampleDesign.aspx |
| S10 | IBM Apple Silicon support notice | Ghi chú kiến trúc Intel / Rosetta / bản 33 | https://www.ibm.com/mysupport/s/defect/aCIgJ000000HGefWAG/dt495860?language=en_US |

**Nguồn phải có metadata:** tiêu đề, tác giả/tổ chức, URL, ngày truy cập, bản tài liệu, nhóm nội dung dùng, điều gì được xác minh và hạn chế/bất định. Giáo trình viết lại theo lời riêng; không đóng gói nguyên PDF có bản quyền nếu không có quyền phân phối. Trang UCLA có các ví dụ SPSS phiên bản cũ: dùng làm nguồn thống kê và đối chiếu, nhưng đường dẫn menu phải xác nhận lại trên SPSS 32.

## 9. Quy trình kiểm định chất lượng

**Pass 1 — Scientific/statistical:** Reviewer có chuyên môn kiểm tra câu hỏi nghiên cứu, kiểu biến, thiết kế, phép thử, giả định, p/CI/effect size, hạn chế và tính đúng của câu kết luận.

**Pass 2 — SPSS/macOS execution:** Chạy hướng dẫn trên phiên bản/chip/macOS mục tiêu; dùng cả GUI và Syntax để tái tạo expected output; ghi version, license/module, mã lỗi, ảnh chụp có nguồn gốc và nhật ký thực thi. *Nếu chưa chạy thật, đánh dấu `NOT_RUN`, không báo PASS.*

**Pass 3 — Beginner walkthrough:** Chỉ xem bài học và kiến thức bài trước; reviewer đánh dấu mọi thuật ngữ chưa giải thích, bước phải đoán, số thao tác quá nhiều, ví dụ thiếu trực quan; người mới thử thực tế và báo điểm nghẽn.

**Pass 4 — Source & citation audit:** Tất cả tuyên bố có nguồn được kiểm tra link, phiên bản, nguồn sơ cấp, điều kiện áp dụng; kiểm tra quyền sử dụng tư liệu.

**Pass 5 — Independent adjudication:** Reviewer thứ hai giải quyết finding bất đồng; không để người biên soạn tự đóng lỗi của mình.

**Thang điểm đề xuất (100):**
- Chính xác thống kê & diễn giải y khoa: 30.
- Sư phạm cho người mới: 25.
- Đúng thao tác SPSS/macOS: 15.
- Tái lập dữ liệu và Output: 15.
- Ngữ cảnh y khoa, đạo đức, dữ liệu: 10.
- Nguồn và phiên bản: 5.

**Ngưỡng phát hành:** >=85/100, không tồn tại BLOCKER/MAJOR chưa xử lý; ít nhất 80% mục bài tập độc lập do học viên pilot hoàn thành *không cần xem lời giải* (mục tiêu pilot đề xuất, không phải kết quả hiện có). Ghi nhận thời gian, mức hỗ trợ, lời giải sai và các điểm cần đoán.

**BLOCKER bất kể điểm:** sai phép thử/diễn giải làm đổi kết luận; lấy tương quan thành nhân quả; lộ dữ liệu bệnh nhân; expected result không đối chiếu được dữ liệu; hướng dẫn yêu cầu chức năng không có trong bản SPSS dùng mà không ghi cảnh báo; phát minh kết quả thực nghiệm; không thể hoàn thành bài do thiếu đầu vào bắt buộc.

**Cấu trúc issue:** `id`, `module`, `lesson/section`, `severity`, `claim`, `evidence`, `source_url`, `reproduction_steps`, `expected`, `actual`, `suggested_fix`, `owner`, `status` (`OPEN/RESOLVED/REVERIFY_REQUIRED`), `reviewer`, `date`, `version`.

## 10. Pilot trước khi sản xuất hàng loạt

**Pilot M01–M03, không viết ngay 12 chuyên đề.**
1. Biên soạn M01: từ câu hỏi nghiên cứu đến biến và thiết kế; không SPSS ở phần đầu.
2. Biên soạn M02: Mac setup, Data/Variable View, Output, `.sav`.
3. Biên soạn M03: nhập và làm sạch một dataset giả lập nhỏ, có codebook và file lỗi.
4. Chạy audit 5 pass; mời người chưa biết SPSS làm bài tập độc lập.
5. Thu lỗi sư phạm, sửa template; rồi mới mở M04–M12.

**Demo trải nghiệm tuần đầu:** Câu hỏi 'Trong 12 hồ sơ minh họa, tuổi trung bình và tỷ lệ có bệnh đái tháo đường là bao nhiêu?' → xác định đơn vị quan sát (mỗi dòng là một bệnh nhân giả lập) và loại biến (`age_years` định lượng, `diabetes_flag` nhị phân), vẽ trên giấy bảng biến → bước sau mới dùng SPSS. Không cho người học dùng `Analyze` khi chưa hiểu biến.

## 11. Cấu trúc thư mục học liệu đề xuất

```text
SPSS-Medical-Learning-Pack/
├── README.md
├── START-HERE-MAC.md
├── curriculum/
│   ├── roadmap.md
│   ├── learning-outcomes.md
│   └── glossary-vi-en.md
├── lessons/
│   ├── M01-research-thinking/
│   │   ├── lesson.md
│   │   ├── workbook.md
│   │   ├── answer-key.md
│   │   └── qa-report.md
│   └── ... M02-M12/
├── datasets/
│   ├── synthetic-raw/
│   ├── cleaned/
│   └── codebooks/
├── syntax/
│   ├── M02-demo.sps
│   └── ...
├── references/
│   ├── source-register.md
│   └── citations.md
├── assessment/
│   ├── beginner-pilot.md
│   ├── rubrics.md
│   └── capstone-checklist.md
└── reviews/
    └── findings-register.md
```

Đầu ra xuất bản từng chương có thể có PDF để đọc, Markdown để duy trì, `.csv`/`.sav` cho dữ liệu, `.sps` cho thao tác tái tạo. Không gắn nhãn `VERIFIED` cho `.sav` hay `.sps` chưa chạy bằng SPSS thực tế.

## 12. Công cụ và tự động hóa

- **Tác giả/điều phối:** AI dùng để nghiên cứu, tóm tắt, soạn bản thảo, tổ chức nguồn.
- **Reviewer độc lập:** AI thứ hai kiểm tra sư phạm và logic thống kê, nhưng kết luận kỹ thuật cuối cần người có chuyên môn.
- **Kiểm chứng thực thi:** SPSS 32 trên Mac thật, log và đối chiếu chỉ số; có thể bổ sung phân tích tham chiếu bằng Python/R với dataset giả lập để cross-check, không tuyên bố đây là SPSS runtime.
- **Make (giai đoạn sau):** Theo dõi tài liệu IBM/EQUATOR thay đổi, đưa nguồn mới vào hàng chờ, gửi reminder re-audit; **không** để Make tự động sửa/chốt giáo trình y khoa.

## 13. Định nghĩa hoàn thành v1

Chỉ gọi **Learning Pack v1 READY** khi: M01–M12 đều có bài + workbook + answer key + data/codebook + nguồn; đã qua scientific QA và beginner QA; mọi ví dụ SPSS bắt buộc chạy lại được trên thiết bị/version đã chốt; capstone có thể tái tạo; quyền sở hữu/cấp phép của tư liệu rõ ràng; báo cáo hạn chế và phiên bản kèm theo.

**Hiện tại:** Tài liệu này là **blueprint đã đối chiếu các nguồn bên ngoài**; chưa có bộ 12 bài thực tế, chưa có screenshot thực thi hoặc kết quả pilot. Đó là các sản phẩm phải tạo ở giai đoạn biên soạn và kiểm định tiếp theo.
