# Lộ trình học — SPSS Medical Learning Pack v1

> Tài liệu này tổ chức lại Blueprint §3–§5 thành roadmap vận hành. Nó **không thay đổi phạm vi học** của Blueprint; mọi mâu thuẫn được ghi vào `project-control/decisions.md`.
> Nhịp đề xuất: 16 tuần, 4–6 giờ/tuần. Mỗi module có checkpoint học thuật + checkpoint kỹ thuật độc lập.
> Trạng thái từng module theo dõi tại `project-control/project-state.md`.

## Bản đồ tổng

```text
M01 tư duy nghiên cứu ──► M02 SPSS/Mac ──► M03 dữ liệu ══[GATE 1]══►
M04 mô tả ──► M05 suy luận ══[GATE 2]══► M06 ─ M07 ─ M08 ─ M09 ─ M10 ─ M11
                                                          ══[GATE 3 sau M08]══[GATE 4 sau M11]══►
M12 capstone ══[GATE 5]══► (tùy chọn) E01 / E02 / E03
```

---

## M01 — Tư duy nghiên cứu y khoa và ngôn ngữ thống kê (Tuần 1)

- **Mục tiêu học tập:** viết được câu hỏi nghiên cứu y khoa đơn giản; phân biệt câu hỏi mô tả / so sánh / liên quan; phân biệt quần thể (population) – mẫu (sample); xác định đơn vị quan sát; phân loại biến định tính/định lượng; nêu được vì sao không suy nhân quả tùy tiện.
- **Tiên quyết:** không có (module mở đầu). Không dùng SPSS.
- **Khái niệm thống kê chính:** biến (variable), kiểu biến, đơn vị quan sát, quần thể–mẫu, mô tả vs suy luận, liên quan ≠ nhân quả.
- **Kỹ năng SPSS:** chưa có — cố ý để người học hiểu biến trước khi bấm `Analyze`.
- **Tình huống y khoa:** demo Blueprint §10 — "Trong 12 hồ sơ minh họa, tuổi trung bình và tỷ lệ đái tháo đường là bao nhiêu?" → xác định đơn vị quan sát và kiểu biến, vẽ bảng biến trên giấy.
- **Sản phẩm bắt buộc:** phiếu nghiên cứu 1 trang + bảng xác định kiểu của 12 biến.
- **Tiêu chí đánh giá:** câu hỏi nghiên cứu có đủ quần thể/chỉ số/đơn vị quan sát; phân loại biến đúng ≥10/12; giải thích được vì sao ví dụ cho sẵn không chứng minh nhân quả.
- **Mở đường cho:** mọi module sau — kiểu biến và câu hỏi nghiên cứu là nền toàn khóa.

## M02 — SPSS trên MacBook (Tuần 2)

- **Mục tiêu:** hoàn thành preflight thiết bị (chip/macOS/version/license/module); mở được SPSS; phân biệt Data View, Variable View, Output Viewer, Syntax Editor; tạo–lưu–mở lại file `.sav`.
- **Tiên quyết:** M01 (hiểu biến là gì); máy có SPSS hợp lệ (`START-HERE-MAC.md`).
- **Khái niệm chính:** file dữ liệu dạng bảng (dòng = đơn vị quan sát, cột = biến); khái niệm lưu quy trình bằng syntax.
- **Kỹ năng SPSS:** mở app, nhận diện 3 cửa sổ, nhập vài ô dữ liệu, Save As `.sav`, mở lại; đọc version + module đã cấp.
- **Tình huống:** đưa bảng 12 hồ sơ của M01 vào SPSS lần đầu — chỉ nhập và lưu, chưa phân tích.
- **Sản phẩm:** `hello_spss.sav` + ảnh chụp màn hình **có kiểm chứng** (chụp từ máy thật của người học, không ảnh minh họa mạng).
- **Tiêu chí:** preflight đầy đủ; mở lại được file đã lưu; gọi đúng tên 3 cửa sổ.
- **Mở đường cho:** M03 (nhập liệu thật) — GATE 1 yêu cầu M02 vững.
- **Ràng buộc đặc thù:** menu/version phải khớp môi trường kiểm chứng; khác version ghi chú rõ (Blueprint §7).

## M03 — Codebook, nhập liệu và làm sạch dữ liệu (Tuần 3–4)

- **Mục tiêu:** đặt đúng `Name`, `Label`, `Values`, `Missing`, `Measure` trong Variable View; nhập CSV/XLSX; phát hiện mã sai, missing, giá trị bất thường; giữ file raw bất biến; viết codebook và cleaning log.
- **Tiên quyết:** M01 (kiểu biến), M02 (thao tác file `.sav`).
- **Khái niệm:** codebook, missing data, outlier sơ bộ, raw immutable, mã hóa biến định tính, measure levels (nominal/ordinal/scale).
- **Kỹ năng SPSS:** Variable View đầy đủ; `File → Import Data` (CSV/Excel); `FREQUENCIES` dùng để soi lỗi; lưu bản sạch mới; bắt đầu ghi syntax thao tác.
- **Tình huống:** nhận một file CSV "bệnh án" có lỗi cố tình (tuổi 250, mã giới tính lạ, ô trống) → phải phát hiện và ghi log.
- **Sản phẩm:** `codebook.md`, `cleaning_log.md`, file dữ liệu sạch + file `.sps` thao tác.
- **Tiêu chí:** **GATE 1** — tự nhập/chuẩn hóa dữ liệu không dựa vào screenshot; codebook đủ đơn vị/kiểu/missing/định nghĩa kết cục; raw còn nguyên.
- **Mở đường cho:** mọi phân tích sau (dữ liệu sạch là đầu vào bắt buộc).

## M04 — Thống kê mô tả và biểu đồ (Tuần 5)

- **Mục tiêu:** tính tần số, %, mean/SD, median/IQR, tứ phân vị; lập bảng đặc điểm bệnh nhân (Table 1); chọn biểu đồ phù hợp kiểu biến.
- **Tiên quyết:** M01, M03.
- **Khái niệm:** trung tâm vs phân tán; khi nào mean/SD vs median/IQR; tỷ lệ và %; đơn vị đo.
- **Kỹ năng SPSS:** `FREQUENCIES`, `DESCRIPTIVES`, `EXAMINE`; Chart Builder/bar–histogram–boxplot cơ bản; xuất bảng.
- **Tình huống:** mô tả đặc điểm 160 bệnh nhân (giả lập) của phòng khám — giới thiệu DS-A.
- **Sản phẩm:** Bảng 1 + 2 biểu đồ có chú giải đúng đơn vị.
- **Tiêu chí:** chọn chỉ số đúng kiểu biến/phân phối; chú giải đủ đơn vị; không diễn giải vượt mô tả.
- **Mở đường cho:** M05 (từ mô tả sang suy luận).

## M05 — Tư duy suy luận thống kê (Tuần 6–7)

- **Mục tiêu:** giải thích biến thiên do lấy mẫu; khoảng tin cậy 95%; giả thuyết không/có; p-value; cỡ hiệu ứng; sai lầm loại I/II; power ở mức nhập môn; phân biệt ý nghĩa thống kê vs ý nghĩa lâm sàng.
- **Tiên quyết:** M04 (đọc được chỉ số mô tả).
- **Khái niệm:** phân phối lấy mẫu, CI, kiểm định giả thuyết, p, effect size, α/β, power.
- **Kỹ năng SPSS:** đọc output có sẵn (chưa nhấn mạnh tự chạy); diễn giải CI trong output mô tả.
- **Tình huống:** 4 output giả định về huyết áp/đường huyết → phiếu giải thích bằng lời.
- **Sản phẩm:** phiếu giải thích 4 output — bắt buộc viết câu diễn giải, không chỉ đọc `Sig.`.
- **Tiêu chí:** **GATE 2** — giải thích CI và p bằng lời không sai bản chất ("95% các khoảng như vậy chứa giá trị thật" mức nhập môn chấp nhận được; cấm "xác suất giả thuyết đúng").
- **Mở đường cho:** toàn bộ M06–M11.

## M06 — So sánh trung bình 2 nhóm (Tuần 8)

- **Mục tiêu:** nhận diện thiết kế độc lập vs cặp; kiểm tra giả định; chọn independent t-test / paired t-test / Welch khi phù hợp; báo cáo hiệu số kèm CI.
- **Tiên quyết:** M05 (CI, p, effect size), M03 (dữ liệu sạch).
- **Khái niệm:** thiết kế độc lập/ghép cặp, giả định chuẩn và đồng nhất phương sai, Welch, hiệu số trung bình + CI.
- **Kỹ năng SPSS:** `Independent-Samples T Test`, `Paired-Samples T Test`; đọc bảng Levene + 2 dòng kết quả; xuất CI của hiệu số.
- **Tình huống:** so sánh huyết áp tâm thu giữa nhóm A/B, và trước–sau theo dõi (DS-A `sbp_baseline`/`sbp_followup`).
- **Sản phẩm:** phân tích 2 nhóm hoặc trước/sau kèm CI hiệu số + đoạn viết kết quả.
- **Tiêu chí:** chọn đúng test theo thiết kế; đọc đúng dòng output; nêu giả định và giới hạn.
- **Mở đường cho:** M07 (khi giả định hỏng), M09 (≥3 nhóm).

## M07 — Khi giả định hoặc thang đo không phù hợp (Tuần 9)

- **Mục tiêu:** nhận diện khi nào t-test không phù hợp; suy xét Mann–Whitney/Wilcoxon; phân biệt câu hỏi về trung bình vs tham số thứ hạng; **không** dùng Shapiro–Wilk như công tắc máy móc.
- **Tiên quyết:** M06 (đã biết giả định t-test).
- **Khái niệm:** kiểm định phi tham số, thứ hạng, trung vị, khi nào dữ liệu lệch/nhỏ/thang ordinal.
- **Kỹ năng SPSS:** `Nonparametric Tests → Independent/Related Samples`; đọc đúng tham số đích của test.
- **Tình huống:** adherence_score lệch + nhóm nhỏ → phải giải trình chọn phép kiểm định.
- **Sản phẩm:** bản giải trình quyết định phép kiểm định (t-test hay phi tham số, vì sao).
- **Tiêu chí:** quyết định dựa trên câu hỏi + thiết kế + dữ liệu, không dựa duy nhất vào p của test chuẩn; nêu được tham số mà test chọn thật sự so sánh.
- **Mở đường cho:** M09 (Kruskal–Wallis), tư duy chọn test cho M10/M11.

## M08 — Bảng chéo và biến nhị phân (Tuần 10)

- **Mục tiêu:** chạy Crosstabs; chọn Chi-square hay Fisher khi phù hợp; hiểu tỷ lệ, OR và RR theo thiết kế nghiên cứu; phân biệt association vs causation.
- **Tiên quyết:** M01 (biến định tính), M05 (suy luận).
- **Khái niệm:** bảng 2×2, tỷ lệ, nguy cơ tương đối (RR), tỷ số chênh (OR), expected count <5 → Fisher, thiết kế quyết định chỉ số nào hợp lệ.
- **Kỹ năng SPSS:** `Crosstabs` + `Statistics: Chi-square, Risk`; đọc tần số kỳ vọng, bảng risk estimate.
- **Tình huống:** bảng 2×2 giữa `diabetes_flag` và `bp_controlled_simulated` (DS-A) — nhấn mạnh kết luận chỉ là liên quan.
- **Sản phẩm:** bảng 2×2 + đoạn diễn giải mức độ liên quan (chỉ số, CI, giới hạn nhân quả).
- **Tiêu chí:** **GATE 3** — tự xác định được lựa chọn t-test / phi tham số / chi-square từ cấu trúc dữ liệu.
- **Mở đường cho:** M11 (logistic — mở rộng OR), E01 (2×2 chẩn đoán).

## M09 — So sánh từ 3 nhóm (Tuần 11)

- **Mục tiêu:** one-way ANOVA/Welch hoặc Kruskal–Wallis khi hợp lý; hiểu vì sao không chạy nhiều t-test; phân tích hậu kiểm (post-hoc) chỉ khi có lý do.
- **Tiên quyết:** M06, M07.
- **Khái niệm:** phương sai giữa/trong nhóm, omnnibus test vs post-hoc, vấn đề so sánh bội sơ bộ.
- **Kỹ năng SPSS:** `One-Way ANOVA` (+ Welch option), `Independent Samples Kruskal–Wallis`; chọn và chú thích post-hoc.
- **Tình huống:** so sánh chỉ số giữa 3 nhóm bệnh nhân phân theo mức độ/tiểu sử.
- **Sản phẩm:** báo cáo so sánh 3 nhóm có chú thích phương pháp hậu kiểm.
- **Tiêu chí:** chọn omnibus đúng giả định; không lạm dụng post-hoc khi omnibus không ý nghĩa; viết kết quả nêu rõ hướng khác biệt.
- **Mở đường cho:** M10 (mối quan hệ biến liên tục).

## M10 — Tương quan và hồi quy tuyến tính (Tuần 12–13)

- **Mục tiêu:** chọn Pearson/Spearman theo dữ liệu; chạy hồi quy tuyến tính đơn và đa biến căn bản; đọc hệ số B, CI, residual; cảnh giác confounding.
- **Tiên quyết:** M05, M04 (phân phối, quan hệ), M08 tương quan ≠ nhân quả.
- **Khái niệm:** tương quan, đường hồi quy, hệ số B và ý nghĩa đơn vị, R², residual, đa biến và hiệu chỉnh nhiễu.
- **Kỹ năng SPSS:** `Correlate → Bivariate`, `Regression → Linear`; scatterplot; đọc bảng Coefficients + CI.
- **Tình huống:** tuổi/BMI và huyết áp tâm thu (DS-A) — từ scatterplot đến mô hình đa biến đơn giản.
- **Sản phẩm:** phân tích tuổi/BMI–huyết áp, bảng hệ số có giải thích bằng lời.
- **Tiêu chí:** diễn giải B đúng đơn vị; nêu giả định + kiểm tra residual sơ bộ; nêu confounder tiềm năng thay vì kết luận nhân quả.
- **Mở đường cho:** M11 (kết cục nhị phân), E01, E02.

## M11 — Hồi quy logistic nhập môn (Tuần 14)

- **Mục tiêu:** hiểu kết cục nhị phân; OR điều chỉnh và CI; quan hệ cỡ mẫu/số biến; **không** diễn giải OR thành RR; nhận diện mô hình không ổn định.
- **Tiên quyết:** M08 (OR), M10 (tư duy hồi quy đa biến).
- **Khái niệm:** logit, OR, hiệu chỉnh đa biến, events-per-variable sơ bộ, mô hình không ổn định.
- **Kỹ năng SPSS:** `Regression → Binary Logistic`; đọc `Exp(B)`, CI của OR, bảng phân loại.
- **Tình huống:** yếu tố liên quan `bp_controlled_simulated` (nhị phân) — diễn giải OR điều chỉnh.
- **Sản phẩm:** bảng kết quả logistic + 3 giới hạn diễn giải viết rõ.
- **Tiêu chí:** **GATE 4** — phân biệt được câu hỏi về trung bình/tỷ lệ/tương quan/dự báo và khi nào cần điều chỉnh nhiễu.
- **Mở đường cho:** M12, E01, E02.

## M12 — Mini-project nghiên cứu y khoa (Tuần 15–16)

- **Mục tiêu:** toàn trình độc lập — từ câu hỏi → data audit → phân tích → kiểm tra giả định → viết Methods/Results; lưu syntax, bảng, log sai lệch; chọn checklist báo cáo phù hợp (SAMPL/STROBE/CONSORT/STARD theo thiết kế).
- **Tiên quyết:** toàn bộ M01–M11.
- **Sản phẩm:** hồ sơ phân tích hoàn chỉnh + bảo vệ miệng ngắn; checklist theo `assessment/capstone-checklist.md`.
- **Tiêu chí:** **GATE 5** — một người khác tái tạo được kết quả từ dữ liệu + syntax + phiên bản phần mềm ghi lại.

---

## Chuyên đề mở rộng (tùy chọn — chỉ sau core)

| Mã | Chủ đề | Điều kiện học | Điểm nhấn bắt buộc |
|---|---|---|---|
| E01 | Chẩn đoán: sensitivity, specificity, PPV/NPV, ROC/AUC | M08 + M10 | Phân biệt accuracy/prevalence/ngưỡng; báo cáo theo STARD |
| E02 | Kaplan–Meier, log-rank, Cox | M05 + M08 + M10 + M11 | Dạy censoring, risk set, proportional hazards, thiết kế theo dõi **trước khi** bấm SPSS |
| E03 | Missing data nâng cao, complex survey, multiple testing, thiết kế & báo cáo | Hoàn thành core | NHANES cần weights/strata/PSU đúng + license Complex Samples; không phân tích như mẫu ngẫu nhiên đơn giản |

## Cổng kiến thức (kèm điều kiện qua)

| Gate | Sau module | Người học phải tự làm được |
|---|---|---|
| GATE 1 | M03 | Nhập/chuẩn hóa dữ liệu không dựa vào screenshot |
| GATE 2 | M05 | Giải thích CI và p-value bằng lời không sai bản chất |
| GATE 3 | M08 | Chọn t-test / phi tham số / chi-square theo cấu trúc dữ liệu |
| GATE 4 | M11 | Phân biệt câu hỏi trung bình / tỷ lệ / tương quan / dự báo / điều chỉnh nhiễu |
| GATE 5 | M12 | Người khác tái tạo kết quả từ data + syntax + version |
