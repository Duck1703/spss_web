# TASK09 — Practice-First 14-Day Track: Final Report

> Task 09 — tái cấu trúc trải nghiệm học thành **lộ trình thực hành SPSS 14 ngày** cho người mới bắt đầu (MacBook, tiếng Việt), theo chỉ thị trực tiếp của owner.
> Trạng thái chung: **IMPLEMENTED — chờ independent review + HUMAN_APPROVAL**. Mọi thao tác SPSS trên macOS ghi `MAC_SPSS_VERIFICATION_PENDING`; mọi con số mong đợi là cross-check Python nhãn `NOT_RUN`.

---

## 1. Quyết định và mâu thuẫn đã ghi nhận

- **D-020** (`project-control/decisions.md`): owner-directed override — lộ trình 14 ngày practice-first là **đường đi mặc định**; Blueprint 16 tuần giữ nguyên làm tài liệu tham khảo. Mâu thuẫn giữa Blueprint ("không SPSS ở M01", 16 tuần) và yêu cầu owner (~2 tuần, 80% thực hành) được **ghi nhận**, không giả vờ tương thích.
- **D-021**: layout `track-14day/day-NN-slug/{lesson,workbook,answer-key}.md` + data contract mới (raw bất biến / cleaned / codebooks / generator seed cố định).
- Blueprint `SPSS_Medical_Learning_Pack_v1_Blueprint.md` và toàn bộ `lessons/M01-research-thinking/` **không sửa, không xóa** — kiểm chứng bằng `git status`/`git diff` (không có thay đổi nào trong hai vị trí đó).

## 2. Curriculum đã tạo

- `curriculum/PRACTICE-FIRST-14-DAY-TRACK.md`: lý do tăng tốc, outcomes 14 ngày, lịch từng ngày, datasets, tiêu chí hoàn thành, danh mục cố ý hoãn (nonparametric sâu, ANOVA post-hoc, hồi quy, syntax, survival…), quan hệ với lộ trình 16 tuần, việc kiểm chứng còn tồn đọng.

## 3. Bài học thực tế đã hoàn thành (14/14 ngày — đủ bộ 3 file/ngày)

| Ngày | Chủ đề | Cấu trúc A–I | Input data | Answer key + số mong đợi |
|---|---|---|---|---|
| 01 | Mở SPSS, import CSV, lưu .sav | ✅ | `clinic_bp_v1_clean.csv`, `exercise_hba1c_pairs.csv` | ✅ |
| 02 | Biến, nhãn, mã hóa, Measure | ✅ | codebook clinic/hba1c | ✅ |
| 03 | Làm sạch: 9 lỗi gài trong raw | ✅ | `clinic_bp_v1_raw.csv` → clean | ✅ |
| 04 | Thống kê mô tả → Bảng 1 | ✅ | bản sạch | ✅ (mean/SD/median đầy đủ) |
| 05 | Bar/histogram/boxplot, Means theo nhóm | ✅ | bản sạch | ✅ |
| 06 | Independent t-test | ✅ | `sbp_followup` ~ `treatment_group` | ✅ t=3,87, p<0,001; BT1 không-có-nghĩa (p=0,216) |
| 07 | Paired t-test + Compute diff | ✅ | baseline↔followup + `exercise_hba1c_pairs.csv` | ✅ t=5,30; HbA1c t=4,37 |
| 08 | Crosstabs, Chi-square, OR, Fisher khi expected<5 | ✅ | `diabetes_flag` × `bp_controlled` | ✅ χ²=17,26; BT1 sex×ctrl χ²=0,07 |
| 09 | Pearson/Spearman + scatterplot | ✅ | `bmi`×`sbp`, `adherence`×`sbp_diff` | ✅ r=0,51; BT1 age×sbp r=0,63 |
| 10 | Bảng quyết định 3 câu hỏi + ANOVA (tùy chọn) | ✅ | `smoking_status` 3 nhóm | ✅ F=0,98, p=0,377 |
| 11 | Output Viewer, export, viết kết quả, gặp syntax | ✅ | `.spv` workflow | ✅ |
| 12 | Capstone 1 — chuẩn bị dữ liệu độc lập | ✅ | `capstone_screening_raw.csv` (6 lỗi) | ✅ danh mục lỗi + số chuẩn |
| 13 | Capstone 2 — phân tích độc lập | ✅ | bản sạch capstone | ✅ t=−1,59 p=0,116; r=0,47; χ²=2,64 (Fisher case) |
| 14 | Đánh giá cuối khóa + rubric 100đ + ngưỡng ≥85 | ✅ | `assessment_gp_raw.csv` (4 lỗi) | ✅ đáp án + hướng dẫn chấm |

Mỗi lesson theo khung A–I của task: việc làm cụ thể → tình huống y khoa → lý thuyết vừa-đủ → thao tác Mac từng bước → hiểu kết quả → bài tập → đáp án → checkpoint sản phẩm → đọc thêm tùy chọn. Ngày 12–14 dùng biến thể capstone (hướng dẫn khung, tự triển khai — đúng tinh thần bài kiểm tra).

## 4. Datasets thực tế đã tạo (100% giả lập, seed cố định)

| Dataset | Dòng raw→clean | Vai trò | Lỗi gài |
|---|---|---|---|
| `clinic_bp` (DS-A) | 161→160 | Khóa chính Ngày 01–11 (160 hồ sơ tăng huyết áp) | 9 (tuổi 250, sex 'F'/9, SBP −30, BMI 152,4, trùng P088, followup flag≠dữ liệu, diabetes missing, adherence 118) |
| `exercise_hba1c_pairs` (DS-EX1) | 24 | Paired t-test Ngày 07 | 0 |
| `capstone_screening` (DS-CAP) | 91→90 | Capstone Ngày 12–13 (90 công nhân) | 6 |
| `assessment_gp` (DS-FINAL) | 60 | Đánh giá Ngày 14 | 4 |

- `datasets/generators/generate_all.py` — seed cố định, sinh lại toàn bộ + in validation (`ALL CHECKS PASS — 160/24/90/60`).
- `datasets/codebooks/` — 4 codebook learner-facing + `planted-errors-INTERNAL.md` (nội bộ, **không** lên website).
- `datasets/expected-results.md` — toàn bộ số mong đợi tính lại bằng Python/scipy; nhãn `NOT_RUN`.
- `00-SIMULATED-NOTICE.md` ở cả raw/ và cleaned/; **CSV không có dòng comment** (sửa lỗi phát hiện khi viết Ngày 01 — comment `#` phá wizard import SPSS).

## 5. Lý thuyết đã lược / gộp / chuyển optional

- **Gộp just-in-time:** CI/p-value/effect size dạy đúng lúc đọc output Ngày 06–09, không còn chương lý thuyết suy luận riêng trước.
- **Optional/deferred:** Mann–Whitney/Wilcoxon (chỉ biết tồn tại + khi nào hỏi), ANOVA post-hoc (chỉ chạy thử Ngày 10), hồi quy, logistic, syntax (nhận biết Ngày 11), ROC/survival/complex survey → hết ở chương trình mở rộng.
- **Giữ nguyên không cắt:** giả định kiểm tra trước khi chạy, expected count → Fisher, liên quan ≠ nhân quả, OR ≠ RR, significant ≠ clinically important, missing phải ghi mẫu số, raw bất biến.

## 6. Quan hệ với M01 cũ

- M01 (tư duy nghiên cứu, không SPSS) **giữ nguyên canonical** tại `lessons/M01-research-thinking/` — không sửa một byte.
- Website: M01 + lộ trình 16 tuần chuyển xuống sidebar group **"Tham khảo — chương trình 16 tuần"** (collapsed); trang `/lo-trinh/` có banner chỉ rõ không còn là mặc định; trang chủ đặt M01 trong mục "Tham khảo".
- Các khái niệm M01 (kiểu biến, đơn vị quan sát, association≠causation) được track 14 ngày **dùng lại**, giải thích ngắn tại điểm cần.

## 7. Thay đổi website content-pipeline

File: `website/scripts/sync-content.mjs`, `website/astro.config.mjs`, `website/src/pages/index.astro`, `website/src/components/ExerciseCard.astro`, `website/public/js/progress.js`.

- **sync-content.mjs:** +`syncTrackRoadmap()` (`/lo-trinh-14-ngay/`), +`syncTrack()` (42 trang `/dNN/{bai-hoc,bai-tap,dap-an}` — mdx escape braces/`<`, inject `ExerciseCard`/`CompleteModuleButton`, link rewrite theo ngày), +`syncDatasets()` (`/du-lieu/` + copy 7 CSV → `public/datasets/`). Fix lỗi YAML title chứa `:` (quote title) và lỗi path `public/` thiếu một `..`. Internal paths (`project-control/`, `planted-errors-INTERNAL.md`, `reviews/`…) vẫn bị strip thành ghi chú "_tài liệu nội bộ_".
- **astro.config.mjs:** sidebar mới — "Bắt đầu" (trang chủ, lộ trình 14 ngày, dữ liệu, chuẩn bị Mac) → "Lộ trình 14 ngày" (14 link) → collapsed "Tham khảo — 16 tuần" (lo-trinh + M01×3) → collapsed "Tài liệu".
- **index.astro:** hero → `/d01/bai-hoc/`; grid 14 ngày với badge `data-module-badge="dNN"`; M01+16w trong mục "Tham khảo"; E01–E03 giữ "đang biên soạn". Không redesign.
- **ExerciseCard.astro:** +prop `answerHref` (default `/m01/dap-an/` → tương thích ngược).
- **progress.js:** **cùng key `spss-mlp-progress-v1`, schema không đổi** → tiến độ M01 cũ của học viên được giữ nguyên (không migration, không xóa). lastPage regex +`dNN|du-lieu|lo-trinh-14-ngay`; panel đếm `module:dNN` → "x/14 ngày", vẫn hiển thị bài tập M01 và `module:m01` khi có.

## 8. Bằng chứng kiểm chứng số

- Generator chạy lại được: `ALL CHECKS PASS — 160 clinic, 24 hba1c, 90 capstone, 60 assessment`.
- Mọi số trong answer-key/expected-results được **tính lại từ CSV** bằng Python 3.13 + pandas/numpy/scipy trong session này — kể cả 3 bài tập phụ chưa có sẵn trong expected-results (bmi×diabetes t-test, sex×bp_controlled crosstab, age×sbp correlation): hai chỗ tác giả viết số ước lượng ban đầu đều bị **bắt lỗi và sửa lại đúng** trước khi giao (minh họa quy trình tự kiểm chứng hoạt động); các giá trị mới đã bổ sung vào `expected-results.md`.
- Workbook ↔ answer key khớp: mỗi BT tham chiếu đúng dataset/biến tồn tại trong codebook; mỗi "expected" trong lesson trùng bảng `expected-results.md`.
- Chưa kiểm chứng: **không có SPSS runtime trên máy này** → mọi con số `NOT_RUN`; menu path `MAC_SPSS_VERIFICATION_PENDING` + checklist cuối mỗi lesson.

## 9. Kết quả build/test website

- `npm run build` → **PASS**: sync 52 file generated, 54 trang HTML + Pagefind index.
- Smoke test preview (curl): 13/13 URL = **200** — `/`, `/lo-trinh-14-ngay/`, `/d01|d07|d12|d14/*`, `/du-lieu/`, `/m01/bai-hoc/`, `/m01/dap-an/`, `/lo-trinh/`; 3 file CSV `/datasets/*.csv` = **200** với header đúng dòng 1.
- Kiểm tra leak: `grep -rl` trong `dist/` — `project-control`, `planted-errors`, `decisions.md`, `WORKFLOW-CONTRACT`, `reviews/` = **0 kết quả** (`source-map.md` chỉ là text "(nội bộ — không public)" có sẵn trong M01 canonical, không phải link).
- NOT_TESTED (trung thực): Safari thật, tương tác trình duyệt bằng tay (click/fill), pilot học viên, SPSS trên macOS.

## 10. Rủi ro còn lại

- **Lớn nhất:** mọi menu path SPSS chưa chạy thật trên macOS → checklist `MAC_SPSS_VERIFICATION_PENDING` cuối mỗi bài là cơ chế giảm rủi ro; cần một lượt pilot thật trước khi claim "verified".
- Ngày 12–14 là phần bài tập mở: người học yếu có thể cần gợi ý thêm — rubric Ngày 14 đã thiết kế fallback "học lại ngày X".
- `progress.js` đếm ngày hoàn thành qua nút đánh dấu tay (không bắt buộc đúng) — đủ cho MVP tự học, không phải proctoring.
- Lifecycle: toàn bộ nội dung 14 ngày đang ở trạng thái **DRAFTING** — chưa qua `STATISTICAL_QA`/independent review/HUMAN_APPROVAL. Không được coi là "READY_FOR_LEARNING" cho đến khi review.

## 11. Git

- Branch `master`, local-only, **không push**. Commit Task 09: xem `git log` mới nhất (commit cuối của task này). Trước commit: `design-prototypes/` untracked từ trước — cố ý để nguyên, không stage.
