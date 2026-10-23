# Phân tích Blueprint — SPSS Medical Learning Pack v1

- **Nguồn phân tích:** `../SPSS_Medical_Learning_Pack_v1_Blueprint.md`
- **Ngày phân tích:** 2026-10-24
- **Người phân tích:** Devin (agent thiết lập dự án)
- **Phạm vi:** đã đọc toàn bộ Blueprint (208 dòng). Tài liệu này *diễn giải* Blueprint phục vụ thiết lập; nó không thay đổi phạm vi chương trình học và không thay thế Blueprint gốc.
- **Bản ghi provenance:** xem `blueprint-provenance.md`.

---

## 1. Mục tiêu dự án và đối tượng người học

**Mục tiêu (đích đến):** Người học tự biến một câu hỏi nghiên cứu y khoa đơn giản thành kế hoạch phân tích, chuẩn bị dữ liệu, chọn phương pháp phù hợp, thực hiện trên SPSS, kiểm tra giả định, diễn giải kết quả (gồm cỡ hiệu ứng và khoảng tin cậy), xuất bảng và viết một đoạn kết quả nghiên cứu có trách nhiệm.

**Đối tượng:** người chưa từng dùng SPSS, gần như không có nền tảng thống kê.

**Ngôn ngữ học:** tiếng Việt; giữ thuật ngữ SPSS/biostatistics tiếng Anh trong ngoặc ở lần xuất hiện đầu.

**Thiết bị ưu tiên:** MacBook + IBM SPSS Statistics 32 (cần xác minh phiên bản/chip/macOS/license trước khi hướng dẫn thao tác).

**Cam kết giới hạn (Blueprint tự nêu):** sau khóa cơ bản người học *không* đủ năng lực tự làm mọi phân tích lâm sàng phức tạp; p < 0,05 không đồng nghĩa ý nghĩa lâm sàng; tương quan không chứng minh nhân quả.

**5 nguyên tắc sư phạm:**
1. Bắt đầu bằng vấn đề y khoa, không bằng menu/công thức.
2. Chỉ giới thiệu khái niệm mới khi phải dùng đến (kèm ôn tập tiên quyết).
3. Mỗi bài: 1 nhiệm vụ thật + 1 bộ dữ liệu hợp lệ + 1 đầu ra quan sát được.
4. Thao tác GUI trên Mac; sau giai đầu làm quen thì có SPSS Syntax lưu quy trình.
5. Tạo được Output ≠ hiểu bài — phải giải thích được lý do chọn phương pháp, giả định, và giới hạn kết quả.

**Nguyên lý trụ cột:** HIỂU CÂU HỎI Y KHOA → HIỂU THỐNG KÊ → CHỌN PHƯƠNG PHÁP → DÙNG SPSS → DIỄN GIẢI OUTPUT → BÁO CÁO KẾT QUẢ.

## 2. Phạm vi: 12 module cốt lõi + 3 mở rộng

**Nhịp đề xuất:** 12 module trong 16 tuần, 4–6 giờ/tuần (64–96 giờ tổng). Mỗi tuần: đọc 45–75', thao tác SPSS 90–150', bài tập độc lập 45–75', tự kiểm 30–60'. Mỗi bài có checkpoint học thuật và checkpoint kỹ thuật độc lập.

| Mã | Tuần | Chủ đề | Minh chứng bắt buộc |
|---|---|---|---|
| M01 | 1 | Tư duy nghiên cứu y khoa và ngôn ngữ thống kê | Phiếu nghiên cứu 1 trang + xác định kiểu 12 biến |
| M02 | 2 | SPSS trên MacBook | `hello_spss.sav` + ảnh chụp có kiểm chứng |
| M03 | 3–4 | Codebook, nhập liệu, làm sạch | `codebook.md`, `cleaning_log.md`, data sạch + syntax |
| M04 | 5 | Thống kê mô tả và biểu đồ | Bảng 1 + 2 biểu đồ có chú giải |
| M05 | 6–7 | Tư duy suy luận thống kê | Phiếu giải thích 4 Output giả định |
| M06 | 8 | So sánh trung bình 2 nhóm | Phân tích huyết áp 2 nhóm/trước-sau + CI hiệu số |
| M07 | 9 | Khi giả định/thang đo không phù hợp | Bản giải trình quyết định phép kiểm định |
| M08 | 10 | Bảng chéo và biến nhị phân | Bảng 2×2 + diễn giải mức độ liên quan |
| M09 | 11 | So sánh từ 3 nhóm | Báo cáo so sánh 3 nhóm + chú thích hậu kiểm |
| M10 | 12–13 | Tương quan và hồi quy tuyến tính | Phân tích tuổi/BMI–huyết áp + bảng hệ số |
| M11 | 14 | Hồi quy logistic nhập môn | Bảng kết quả logistic + 3 giới hạn diễn giải |
| M12 | 15–16 | Mini-project nghiên cứu y khoa | Hồ sơ phân tích hoàn chỉnh + bảo vệ |

**Cổng kiến thức:** sau M03 (tự nhập/chuẩn hóa dữ liệu), sau M05 (giải thích CI/p-value đúng bản chất), sau M08 (chọn t-test/nonparametric/chi-square theo cấu trúc dữ liệu), sau M11 (phân biệt câu hỏi trung bình/tỷ lệ/tương quan/dự báo/điều chỉnh nhiễu), sau M12 (người khác tái tạo được từ data + syntax + version).

**Mở rộng (chỉ sau core):** E01 chẩn đoán/ROC (cần M08+M10, tuân thủ STARD); E02 sống còn Kaplan–Meier/log-rank/Cox (cần M05+M08+M10+M11, dạy censoring/risk set/PH trước khi bấm SPSS); E03 missing data, complex survey, multiple testing (cần toàn bộ core; NHANES cần weights/strata/PSU + kiểm tra license module).

**Pilot:** chỉ M01–M03 trước khi sản xuất hàng loạt; chạy audit 5-pass + thử với người chưa biết SPSS → sửa template → mới mở M04–M12.

## 3. Tiên quyết học tập

- Không yêu cầu nền thống kê; không yêu cầu kinh nghiệm SPSS.
- Yêu cầu thiết bị: MacBook có SPSS được cấp phép hợp lệ (xem §6).
- Về toán: mức số học cơ bản; mọi khái niệm thống kê được định nghĩa khi xuất hiện (nguyên tắc 2).
- Mỗi module có tiên quyết nội khóa (xem `../curriculum/concept-map.md`).

## 4. Học liệu bắt buộc phải có (learning artifacts)

Mỗi module hoàn chỉnh gồm: `lesson.md`, `workbook.md`, `answer-key.md`, `qa-report.md` (theo cấu trúc §11 Blueprint). Chuẩn mỗi bài học gồm 12 mục (Blueprint §6): tình huống y khoa; kết quả học tập (3–5, đo được); kiến thức nền vừa đủ; câu hỏi chọn phương pháp trước khi mở SPSS; Mac walkthrough đúng version; SPSS Syntax có chú thích không ghi đè dữ liệu gốc; đọc Output gắn câu hỏi–đơn vị–CI–effect size; đoạn viết kết quả mẫu; mục "khi gặp lỗi" (3–5 tình huống); bài tập biến thể; checkpoint; đáp án & bằng chứng chỉ khi đã tái tính.

Định dạng đầu ra: Markdown để duy trì, PDF có thể xuất, `.csv`/`.sav` dữ liệu, `.sps` tái tạo. Không gắn nhãn `VERIFIED` cho `.sav`/`.sps` chưa chạy SPSS thật.

## 5. Yêu cầu nguồn và trích dẫn

- 10 nguồn danh định S01–S10 (IBM docs ×2, OpenIntro, UCLA OARC, EQUATOR SAMPL/STROBE/CONSORT/STARD, CDC NHANES, IBM Apple Silicon notice).
- Metadata bắt buộc mỗi nguồn: tiêu đề, tác giả/tổ chức, URL, ngày truy cập, bản tài liệu, nhóm nội dung dùng, phần đã xác minh và hạn chế/bất định.
- Giáo trình viết lại bằng lời riêng; không đóng gói/phân phối PDF có bản quyền khi không có quyền.
- UCLA OARC dùng SPSS phiên bản cũ → chỉ dùng làm nguồn thống kê/đối chiếu; đường dẫn menu phải xác nhận lại trên SPSS 32.
- Đăng ký nguồn hiện tại: `../references/source-register.md` (đã khởi tạo, ghi trạng thái kiểm chứng thật).

## 6. Yêu cầu tương thích MacBook/SPSS

- Mục tiêu v1: IBM SPSS Statistics 32 trên macOS *được IBM xác nhận tương thích*. Bản 32 là mã Intel → Apple Silicon cần Rosetta 2. Blueprint ghi nhận IBM thông báo SPSS 33 hướng tới ARM64 native, nhưng không đổi version giáo trình trước khi xác nhận phát hành/tương thích.
- Blueprint nêu "theo thông tin IBM, macOS 15 và 26 nằm trong phạm vi hỗ trợ SPSS 32" — đây là **tuyên bố của Blueprint, chưa được workspace này đối chiếu với tài liệu tương thích chính thức**; phải kiểm tra theo version/build cụ thể trước khi hứa "chạy được".
- Preflight cá nhân bắt buộc (cho người học): chip, macOS, version SPSS, hình thức license, module được cấp quyền; mở Data Editor/Output; lưu/mở `.sav`; chạy demo `FREQUENCIES`; ghi log khác biệt menu/lỗi font/dấu thập phân.
- Quy ước: tên biến ASCII; tiếng Việt ở Variable Labels; dấu chấm thập phân + delimiter CSV; đường dẫn tương đối, không phụ thuộc một máy.
- Regression/survival/complex samples: xác nhận license module trước mỗi bài; có phương án học lý thuyết khi thiếu module.
- Không hướng dẫn crack/key lậu.

## 7. Yêu cầu dữ liệu

- **DS-A `clinic_bp_synthetic`:** 160 hồ sơ giả lập (age, sex, treatment_group A/B *không tự nhận ngẫu nhiên*, bmi, sbp_baseline, sbp_followup, diabetes_flag, adherence_score, followup_completed, bp_controlled_simulated). Các phiên bản `v1_raw.csv` (missing + lỗi cố tình), `v1_clean.sav`, `codebook.md`, `analysis.sps`, `expected_results.md`.
- **DS-B `diagnostic_test_synthetic`:** reference_diagnosis, test_result, biomarker_value → 2×2 và ROC cho E01.
- **DS-C `survival_synthetic`:** followup_months, event_observed, group → censoring/sống còn cho E02.
- **Nguồn thực tế tùy chọn:** CDC NHANES — chỉ sau khi dạy thiết kế mẫu phức tạp và trọng số. Không dùng dữ liệu bệnh nhân thật khi chưa có cơ sở pháp lý/bảo mật.
- **Data contract:** raw bất biến; codebook ghi đơn vị/loại biến/missing/định nghĩa kết cục; giả lập cố định seed + mô tả cách sinh; expected outputs phải tái tạo từ source.
- Quan hệ trong dữ liệu giả lập phục vụ bài tập, **không phải bằng chứng lâm sàng** — phải ghi nhãn rõ.

## 8. Cổng chất lượng (quality gates)

- **5 pass QA:** (1) scientific/statistical; (2) SPSS/macOS execution — chưa chạy thật thì `NOT_RUN`, không báo PASS; (3) beginner walkthrough; (4) source & citation audit; (5) independent adjudication — người biên soạn không tự đóng lỗi của mình.
- **Thang điểm /100:** chính xác thống kê & diễn giải 30; sư phạm người mới 25; thao tác SPSS/macOS 15; tái lập dữ liệu/Output 15; ngữ cảnh y khoa–đạo đức–dữ liệu 10; nguồn & phiên bản 5.
- **Ngưỡng phát hành:** ≥85/100, không còn BLOCKER/MAJOR mở; mục tiêu pilot ≥80% mục bài tập độc lập do học viên hoàn thành không xem lời giải (mục tiêu đề xuất, chưa phải kết quả).
- **BLOCKER bất kể điểm:** sai phép thử/diễn giải đổi kết luận; tương quan→nhân quả; lộ dữ liệu bệnh nhân; expected result không đối chiếu được dữ liệu; yêu cầu chức năng không có trong bản SPSS mà không cảnh báo; phát minh kết quả; thiếu đầu vào bắt buộc khiến không hoàn thành bài.
- Cấu trúc issue đầy đủ trường (id, module, section, severity, claim, evidence, source_url, reproduction_steps, expected, actual, suggested_fix, owner, status OPEN/RESOLVED/REVERIFY_REQUIRED, reviewer, date, version) — quy chế vận hành tại `../qa/QA-POLICY.md`.

## 9. Quyết định chưa chốt và phụ thuộc

| # | Vấn đề | Trạng thái | Cần |
|---|---|---|---|
| U1 | SPSS 32 vs 33 làm version chốt cho giáo trình | DEFERRED | Xác nhận phát hành/tương thích IBM + license người học |
| U2 | Tuyên bố "macOS 15 và 26 được hỗ trợ" trong Blueprint | UNVERIFIED | Đối chiếu tài liệu tương thích IBM chính thức theo version/build |
| U3 | Chip, macOS, license và module SPSS trên máy người học | UNKNOWN | Người dùng chạy preflight (START-HERE-MAC) và báo lại |
| U4 | S01 (ibm.com/docs) chỉ render trang rỗng qua fetch; S10 (mysupport defect) không mở được | PENDING_VERIFICATION | Mở bằng trình duyệt thật, ghi snapshot vào `references/snapshots/` |
| U5 | Tổ chức thư mục: Blueprint gợi ý `reviews/findings-register.md`, layout được giao đặt ở `qa/findings-register.md` | RESOLVED (theo layout được giao; `reviews/` dùng cho report độc lập) | — (quyết định D-001) |
| U6 | Ngôn ngữ tài liệu điều hành (project-control) | PROPOSED: tiếng Việt, thuật ngữ kỹ thuật song ngữ | Xác nhận của chủ dự án (D-002) |
| U7 | Chưa có học viên pilot thật | OPEN | Tuyển ≥1 người chưa biết SPSS khi M01–M03 sẵn sàng |
| U8 | Có dùng Python/R cross-check cho expected results không | DEFERRED | Quyết định khi tạo dataset DS-A (Blueprint §12 cho phép nhưng phải ghi nhãn không-phải-SPSS) |
| U9 | Kịch bản Make (giám sát nguồn, reminder re-audit) | DEFERRED — giai đoạn sau | Không triển khai trong bootstrap |

## 10. Rủi ro ảnh hưởng thực thi

| Rủi ro | Ảnh hưởng | Giảm thiểu |
|---|---|---|
| Workspace authoring là Windows; không có SPSS/macOS tại đây | Không thể chạy TECHNICAL_REPRODUCIBILITY_QA trong workspace | Mọi artifact thực thi mặc định `NOT_RUN`; cần MacBook người học/QA machine có SPSS 32 + license |
| License thiếu module (Regression, Survival, Complex Samples, Exact Tests) | M06+, M11, E01–E03 thiếu chức năng | Preflight kiểm tra module trước mỗi bài; phương án lý thuyết thay thế |
| Khác biệt menu/thuật ngữ giữa SPSS 32 và tài liệu cũ (UCLA) | Hướng dẫn thao tác sai | Chỉ chốt menu theo S01/S02 sau khi chạy thật; ghi chú khác biệt version |
| Trang nguồn yêu cầu JS/đăng nhập (IBM docs, mysupport) | Không kiểm chứng tự động được | Snapshot thủ công vào `references/snapshots/`, ghi ngày |
| Nội dung sách giáo khoa có bản quyền | Rủi ro pháp lý nếu sao chép | Viết lại bằng lời riêng; trích dẫn metadata; không phân phối PDF |
| Scope creep: viết vượt pilot M01–M03 | Mất kiểm soát chất lượng | WORKFLOW-CONTRACT + cổng HUMAN_APPROVAL; backlog tách theo ủy quyền |
| Dữ liệu giả lập bị diễn giải như bằng chứng lâm sàng | Sai lệch sư phạm/đạo đức | Nhãn "SIMULATED — không phải bằng chứng điều trị" trong mọi codebook/bài |
| Tuyên bố tương thích macOS trong Blueprint chưa kiểm chứng | Hứa sai với người học | Đánh dấu UNVERIFIED ở mọi tài liệu dẫn lại (U2) |
| Không có người review độc lập có chuyên môn | Pass 1/Pass 5 thiếu chủ thể | Ghi rõ "reviewer cần người có chuyên môn" trong QA-POLICY; AI reviewer chỉ hỗ trợ |
