# TASK 15 — EXERCISE-FIRST DAYS 07–10 + WORKLOAD/PROGRESS CORRECTIONS

- Baseline: `6aea269` (Task 14)
- Phạm vi: sửa Ngày 05, bảo vệ ngữ nghĩa progress, xây Ngày 07–10. Không đụng Ngày 11–14.
- Trạng thái tổng: **CONTENT_READY_PENDING_HUMAN_PILOT** · **SPSS_NOT_RUN** · **BROWSER_NOT_TESTED** (tương tác click)

## 1. Sửa workload Ngày 05

Trước: Crosstabs + % dòng/cột + χ² + expected + Fisher + Weight Cases + Risk + RR/OR, 4 bài ESSENTIAL trên 3 dataset — quá tải cho người mới trong 90–120 phút.

Sau:

| Nhóm | Bài | Dataset |
|---|---|---|
| ESSENTIAL | P1-Q05 (bảng chéo mô tả), P1-Q17 (χ² + Fisher khi expected <5) | `p1_B01_HA (1).sav` |
| REINFORCEMENT | P1-Q18 | `p1_B01_HA (1).sav` |
| CHUYỂN → Ngày 08 | P1-Q21 (Weight Cases + Risk Estimate), P2-Q01 (χ² 3×2), P1-Q20 (McNemar hút thuốc — cùng chủ đề Q40) | như cũ |

- `lesson.md` Ngày 05 viết lại: 5 bước (Frequencies 2 biến → Crosstabs → đọc % → χ²/Fisher → dọn trạng thái), không còn Weight/Risk bắt buộc. Workbook còn BT1–BT3 (Q05/Q17/Q18) + đố vui + block "bài đã chuyển".
- Scene `d05-weight` tách thành `d08-weight` trong `visual-guides/day08/scenes.json`; `day05/scenes.json` còn 2 guide (Crosstabs, χ²).
- `sync-content.mjs`: DAYS[d05].files chỉ còn `p1_B01_HA (1).sav`; DAYS[d08].files thêm File1; title d08 đổi thành "Kiểm định tỷ lệ".
- `exercise-inventory.json`: tier cập nhật (Q21/Q01/Q20 → `d08` reinforcement; Q40 → `d08` reinforcement; d07–d10 essentials).
- Roadmap §3a: Ngày 05 essential = Q05+Q17 (~90'), ghi rõ Q21/Q01 chuyển sang Ngày 08.

## 2. Progress semantics

**Vấn đề:** localStorage `spss-mlp-progress-v1` giữ `done` theo key `module:dNN`. Curriculum cũ (clinic_bp) dùng cùng route `/dNN/` → học viên từng hoàn thành clinic_bp sẽ thấy bài mới đánh dấu "xong" sai.

**Cách sửa (không phá dữ liệu cũ):**

- Namespace mới cho curriculum exercise-first: `ef-d01`…`ef-d14` cho module badge/CompleteModuleButton; card id và step id prefix `ef-`.
- `progress.js` giữ nguyên API (`isDone`, `setDone`, `setStepDone`, `answer`); key schema không đổi — chỉ đổi ID được emit.
- Dữ liệu cũ `module:dNN` **được bảo tồn nguyên vẹn** trong storage; không migrate, không xóa, không copy sang key mới → không bài mới nào được đánh dấu xong âm thầm.
- Route `/m01/` (module cũ giữ lại) vẫn emit `m01` như trước.

**Điểm sửa:** `sync-content.mjs` (CompleteModuleButton + ExerciseCard id), `src/pages/index.astro` (badge), `SPSSActionGuide.astro` (step ids).

**Regression test:** `website/scripts/check-progress-keys.mjs` — **14 PASS / 0 FAIL**:
14 ngày emit `ef-dNN`; card id prefix `ef-`; không generated page nào emit `module:dNN`; `/m01/` vẫn `m01`; schema storage tương thích.

## 3. Bài tập nguồn Ngày 07–10

| Ngày | Chủ đề | ESSENTIAL | REINFORCEMENT/OPTIONAL | Dataset |
|---|---|---|---|---|
| 07 | Kiểm tra & sửa lỗi dữ liệu | P1-Q13 (filter điều kiện kép), P1-Q14 (mã nghề sai) | P1-Q07 (multi-response) | `p1_B01_HA (1).sav` |
| 08 | Kiểm định tỷ lệ | P1-Q22 (GOF χ²), P2-Q02 (GOF), P2-Q03 (Binomial) | P1-Q21 (Weight+Risk), P2-Q01, P1-Q40 (McNemar), P1-Q20 | p1_B01_HA, P1_B02, File1 |
| 09 | So sánh trung bình 1 & 2 nhóm | P2-Q04 (1-sample t), P2-Q05 (indep t), P2-Q07 (indep t) | — | `File1.sav` |
| 10 | t-test ghép cặp & ANOVA | P2-Q09 (paired + subgroup), P2-Q13 (paired), P2-Q06 (ANOVA), P2-Q08 (ANOVA) | — | File1, `File2_Phan2.sav` |

Prereq map: D07 cần Select Cases (D04); D08 cần Crosstabs (D05) + filter (D07); D09 cần đọc output cơ bản; D10 cần Select Cases (Q09b/c) + t-test (D09).

## 4. Nội dung đã xây (mỗi ngày: lesson + workbook + answer-key theo khung A–J)

- A: điểm bắt đầu cụ thể (file `.sav` chính xác, kiểm tra prereq).
- B–D: block `{{exercise:P*-Q**}}` render đề gốc + biến/nhãn từ inventory.
- E: lý thuyết tối thiểu đúng lúc cần (GOF vs Binomial; paired vs indep; Levene→Welch; McNemar).
- F–G: menu SPSS từng click + guide tương tác.
- H: bài nguồn độc lập + progressive hints trong workbook.
- I: đáp án số kiểm chứng + lỗi người mới hay gặp.
- J: troubleshooting + handoff ngày sau.

## 5. Kiểm chứng số (pyreadstat + scipy, `curriculum/exercise-verified-stats.md`)

| Bài | Kết quả kiểm chứng |
|---|---|
| Q13 | ĐTĐ∩50–70: n=96; ∩nam=52 |
| Q14 | NNghiep lỗi: 0×3, 8×2, missing×2 = 7 phiếu (ID 5,184,243,285,305,318,375) → 613 còn lại |
| Q07 | đa biến: 92/196/16/11/9 lượt (tim/đtđ/thận/gan/gút) |
| Q22 | 55:45 χ²=61,316 p<,001; 40:60 χ²=0,108 p=,743; 50:50 χ²=28,103 p<,001 (Expected nhập theo mã 1=Nữ trước!) |
| P2-Q02 | GOF igioitin 28/22: χ²=0,720 p=,396 |
| P2-Q03 | Binomial 15/28 vs 0,60: p=,564 |
| Q40 | McNemar rượu 4 vs 79: χ²=67,771 p<,001 (exact ≈4e-19); Q20 thuốc 8v2: χ²=3,60 p=,058 |
| P2-Q04 | t=0,165 df49 p=,870; CI mean 71,42–79,22 |
| P2-Q05 | Levene ,481 → pooled t=1,234 p=,227 (Welch 1,294 p=,207); diff 6,67 CI −3,88..17,22 |
| P2-Q07 | pooled t=−0,318 df36 p=,752 |
| P2-Q09 | a) t=1,754 p=,086; b) QT t=1,739 p=,098; c) QT-thành phố t=1,902 p=,086 |
| P2-Q13 | t=2,767 df11 p=,018; diff 1,43 CI 0,29–2,57 |
| P2-Q06/Q08 | ANOVA F=0,938 p=,399; F=0,090 p=,914 |

Lỗi bẫy được ghi chú: Expected Values GOF nhập theo **thứ tự mã** (đề viết Nam:Nữ nhưng mã 1=Nữ); scipy mặc định Yates ≠ Pearson SPSS; `otin` (không phải `ucapho`) là biến tỉnh; File1 nhãn mojibake → codebook trang 2 PDF.

## 6. Scenes mới (giá trị nguồn, audit `external-sav`)

- day07: `d07-freq-errors` (Frequencies phát hiện mã sai), `d07-select-bad` (Select Cases If → 613), `d07-keep-clean`
- day08: `d08-gof` (Chi-square phù hợp + bẫy thứ tự Expected), `d08-binomial`, `d08-weight` (từ d05)
- day09: `d09-1sample`, `d09-independent` (Levene → hai dòng t)
- day10: `d10-paired` (3 cấp filter), `d10-anova`

Sửa trong task: bảng ANOVA scene ban đầu ghi SS ước lượng — đã thay bằng SS thật (354,7/8884,2/9238,9, MS 177,3/189,0). Mọi `osNote` giữ hướng dẫn Win/macOS; mọi output ghi `NOT_RUN`.

## 7. Quality gate

| Check | Kết quả |
|---|---|
| `npm run sync` | 53 file generated; 0 marker `{{exercise:}}`/`{{guide:}}` sót |
| `npm run build` | PASS — 55 trang; cùng 3 warning không fatal |
| Scene checker (đã mở rộng day01–10) | **263 checks · 0 FAIL** (fix: `d08-gof` JSON lồng sai do script tạo — đã dựng lại entry) |
| Route | d01–d10 ×{bai-hoc,bai-tap,dap-an} + lộ trình → 200 (server :4323) |
| Progress keys | `check-progress-keys.mjs` 14/14 PASS; 0 `module:dNN` trong dist d05,d07–d10; badges `ef-dNN` |
| Answer leakage | đố vui d09/d10 từng lộ p=0,227 / p=0,086+0,018 — **đã viết lại không đáp số**; quét lại sạch |
| Scene-data integrity | số scene = số `exercise-verified-stats.md`; bảng ANOVA đã sửa |
| Browser click | **BROWSER_NOT_TESTED** — route/HTML kiểm tra qua curl; chưa có tương tác UI thật |
| SPSS | **SPSS_NOT_RUN** — menu steps mang `MAC_SPSS_VERIFICATION_PENDING` |
| Human pilot | **CONTENT_READY_PENDING_HUMAN_PILOT** cho Ngày 01–10 |

## 8. Rủi ro người mới còn lại

- D08: bẫy Expected-theo-mã đã cảnh báo 2 lần nhưng cần pilot thực tế.
- D09/D10: File1 nhãn mojibake — learner phải đối chiếu codebook PDF (đã hướng dẫn).
- D10 Q09b/c yêu cầu thao tác filter lồng (tỉnh → thành phố) — rủi ro quên tắt filter; checklist nhắc kiểm N từng cấp.
- McNemar Q40: recode thủ công dễ nhầm nhãn — workbook có hint kiểm bảng chéo trước.

## 9. File đã thay đổi

Canonical mới/đổi: `track-14day/day-0{5,7,8,9,10}-*/{lesson,workbook,answer-key}.md`
Scenes: `website/public/visual-guides/day0{5,7,8,9,10}/scenes.json`
Scripts: `website/scripts/sync-content.mjs`, `check-scene-data.mjs`, `check-progress-keys.mjs` (mới)
Web: `website/public/js/progress.js`, `website/src/pages/index.astro`, `website/src/components/spss/SPSSActionGuide.astro`
Curriculum: `EXERCISE-FIRST-14-DAY-ROADMAP.md`, `exercise-inventory.json`, `exercise-verified-stats.md`
Misc: `.gitignore` (+`.workspace/*.py`), `reviews/TASK15-*`, `report/` refresh.

## 10. Git

- Commit local duy nhất cho task; không push/deploy; `design-prototypes/` vẫn untracked (không liên quan); `exercises/`, `.workspace/` gitignored.

## 11. Next (khi được duyệt)

- Pilot Ngày 01–10 trên SPSS thật (Win + macOS) → gỡ pending labels.
- Ngày 11–14 theo **roadmap đã duyệt** (không phải ROC): Ngày 11 tương quan/hồi quy
  (P2-Q10/11, File1); Ngày 12–13 capstone Bài TH3 (File5); Ngày 14 đánh giá cuối
  khóa (P1-Q24/26/31/33/43 + P2-Q08). ROC P1-Q15/16, P2-Q14/15, P2-Q12 đa biến
  **vẫn hoãn** (roadmap mục 6).
