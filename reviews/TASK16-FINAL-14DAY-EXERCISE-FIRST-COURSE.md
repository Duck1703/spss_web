# TASK 16 — FINAL 14-DAY EXERCISE-FIRST COURSE

- Baseline: `c7af2cf` (Task 15) · Phạm vi: hoàn thiện Ngày 11–14, rà soát toàn khóa.
- Trạng thái tổng: **CONTENT_READY_PENDING_HUMAN_PILOT** · **SPSS_NOT_RUN** · Browser: **tested, 22/22 PASS**.

## 1. Roadmap reconciliation

Mâu thuẫn phát hiện: ghi chú "next" trong TASK15 nói Ngày 11–14 sẽ là ROC/nâng cao —
**sai** so với roadmap Task 13 đã duyệt. Bản thân roadmap đã đúng:

| Ngày | Roadmap (giữ nguyên) | Ghi chú Task 15 (đã sửa) |
|---|---|---|
| 11 | P2-Q10, P2-Q11 (+Q12 giới thiệu) — File1 | ❌ đã sửa dòng trong TASK15 report |
| 12–13 | Capstone P2-TH3 — File5_Phan2.sav | ❌ → đúng |
| 14 | Đánh giá: P1-Q24/26/31/33/43 + P2-Q08 | ❌ → đúng |
| Hoãn | P1-Q15/16 (ROC), P2-Q14/15 (logistic), P2-Q12 (đa biến, chỉ giới thiệu) | giữ nguyên mục 6 |

Sửa tối thiểu: chỉ chỉnh dòng nhầm trong `reviews/TASK15-*.md`; roadmap không đổi.

## 2. Workload review Ngày 08 & 10

| Ngày | Essential | Reinforcement | Ops mới | Ước lượng | Đánh giá |
|---|---|---|---|---|---|
| 08 | P1-Q22 (GOF×3 tỷ lệ), P2-Q02, P2-Q03 | Q21 Weight+Risk, P2-Q01, Q40/Q20 McNemar | 2 (+2 nếu làm reinf.) | 95–120' | Khả thi nhưng đầy; đã thêm dòng ngân sách vào workbook: hết giờ → bỏ trọn BT4–6 |
| 10 | P2-Q09 (3 ý), P2-Q13, P2-Q06 | P2-Q08 | 2 | 95–115' | Khả thi; đã đánh dấu ý 9c (mẫu con TP) là phần bỏ được đầu tiên |

Không bài nào bị xóa; mọi ID nguồn giữ tham chiếu trong workbook/đáp án.

## 3. Ánh xạ Ngày 11–14 (đã kiểm chứng nguồn)

| Ngày | Bài | Dataset | Phép | Số kiểm chứng |
|---|---|---|---|---|
| 11 | P2-Q10, Q11 (Q12 optional) | File1 | Correlate, Regression đơn | r & B bảng dưới |
| 12 | P2-TH3 phần chuẩn bị | File5 | codebook, Frequencies, phiếu chất lượng, plan | n=296, missing=0 |
| 13 | P2-TH3 phần phân tích | File5_work | Crosstabs+χ², indep t (Levene→dòng), report | bảng B2 dưới |
| 14 | P1-Q24/26/31/33/43, P2-Q08 | p1_B01, File1 | tổng hợp 6 nhiệm vụ + rubric 100đ | đáp án ẩn /dap-an/ |

## 4. Số liệu kiểm chứng mới (pyreadstat/scipy — NOT_RUN)

**Ngày 11** (n=50): r(csa,htuo)=−0,351 p=0,012 · r(csa,ytruo)=0,768 p<0,001 ·
r(ytruo,htuo)=−0,349 p=0,013. Hồi quy: csa=85,795−0,362·htuo (R²=0,123);
csa=1,821+0,940·ytruo (R²=0,589); ytruo=85,978−0,293·htuo (R²=0,121).
Q12 (mở rộng): R²=0,623; chỉ ytruo ý nghĩa.

**Ngày 12–13** (n=296, missing=0): Sinhthiet dương 95 (32,1%); PSA 8,81±17,05
median 5,80 (lệch phải, max 221). Khám_TT×Sinhthiet χ²=4,920 p=0,027;
Siêu_âmTT χ²=14,779 p<0,001. t: Tuoi pooled −0,488 p=0,626; **PSA Welch −3,426
p=0,0009** (Levene<0,001); **Thetich Welch 2,542 p=0,012** (Levene 0,033) —
capstone có cả hai trường hợp Levene để dạy "đọc đúng dòng". PSA nhóm:
14,4%→78,9% dương, χ²=33,684 p<0,001.

**Ngày 14**: Q24 HA.TD_tb 136,28 SEM 0,77 P30 120; Q26 (HVan 6→3: 136,62/135,01/
142,38); Q31 "mới phát hiện" = TSu.HA=0 ∧ CD.HA≥3 → n=141, χ²=25,140 **nhưng
5/9 ô expected<5 → không hợp lệ** (câu chấm phán đoán, không chỉ số); Q33 ĐTĐ
χ²=87,60 & Tim χ²=61,13 hợp lệ, Than/Gan/Gut chỉ mô tả; Q43 Nữ 67,16±11,06 /
Nam 66,51±10,74; P2-Q08 F=0,090 p=0,914.

## 5. Bản đồ phụ thuộc 14 ngày

| D | Kỹ năng mới | Cần từ | Bài nguồn | File |
|---|---|---|---|---|
| 01 | mở file, 2 view, sort, select | — | P1-Q01 | p1_B01 |
| 02 | Frequencies, percentile | D01 | Q02, Q38 | p1_B01 |
| 03 | Descriptives, CV | D02 | Q03, Q04 | p1_B01 |
| 04 | If kép, Split File, Means | D02–03 | Q08, Q09, Q06 | p1_B01 |
| 05 | Crosstabs, %, χ²/Fisher | D02, D04 | Q05, Q17 | p1_B01 |
| 06 | Compute, Recode, Count, work.sav | D01 | Q10–Q12 | p1_B01 |
| 07 | soi lỗi, recode missing, loại phiếu | D02/04/06 | Q13, Q14 | p1_B01 |
| 08 | GOF χ², Binomial (+Weight, McNemar) | D02, D05 | Q22, P2-Q02/03 | p1_B01, File1, P1_B02 |
| 09 | one-sample & independent t, Levene | D03, D04 | P2-Q04/05/07 | File1 |
| 10 | paired t, ANOVA | D04, D09 | P2-Q09/13/06(+08) | File1+2 |
| 11 | scatterplot, correlate, reg đơn | D03 | P2-Q10/11(+12) | File1 |
| 12 | quy trình phân tích: codebook→plan | D01–07 | P2-TH3 | File5 |
| 13 | phân tích + báo cáo | D05, D09, D12 | P2-TH3 | File5_work |
| 14 | tổng hợp độc lập | tất cả | 6 câu ôn | p1_B01, File1 |

Audit: mọi lesson có J-handoff đúng ngày kế; không phát hiện handoff gãy, sai file,
hay claim thống kê không có nguồn. 2 điểm cần pilot thật: bẫy Expected-theo-mã
(D08) và điều kiện "mới phát hiện" (D14-Q3 đã có gợi ý nhãn).

## 6. Simulation coverage (tổng 16 guide mới task này: 2+1+2+1)

- day11: `d11-correlate` (Bivariate + bảng 3×3 r/p), `d11-regression` (Linear +
  Model Summary/Coefficients)
- day12: `d12-explore` (Variable View File5 + Frequencies missing=0)
- day13: `d13-crosstab` (Siêu_âmTT×Sinhthiet), `d13-ttest` (2 dòng Levene)
- day14: `d14-compute` (Compute trung bình 2 lần đo — không lộ đáp số)

Mọi scene `external-sav`, NOT_RUN, osNote Win+macOS. Scene checker mở rộng
day01–14: **318 checks · 0 FAIL**.

## 7. Quality gate

| Check | Kết quả |
|---|---|
| sync | 53 file; 0 marker sót |
| build | PASS — 55 trang (warnings cũ không fatal) |
| scene checker | **318 / 0 FAIL** |
| route sweep | 14 ngày × 3 trang = 42/42 HTTP 200 |
| progress regression | `check-progress-keys.mjs` **14/14 PASS** |
| answer leakage | đố vui d09/d10 đã sửa ở T15; d14 workbook sạch (quét số) |
| **Real browser (Playwright headless Chromium)** | **22/22 PASS** — guide render, OS selector, scene nav, ef- progress keys viết đúng, legacy `module:d01` bảo tồn, mobile 390px không tràn, keyboard focus OK, 0 JS error |
| SPSS | **SPSS_NOT_RUN** — `MAC_SPSS_VERIFICATION_PENDING` trên mọi menu |
| Human pilot | **CONTENT_READY_PENDING_HUMAN_PILOT** cả 14 ngày |

## 8. Pedagogical defects còn lại

- File1 nhãn mojibake → learner phải đối chiếu codebook PDF trang 2 (đã hướng dẫn).
- D08 nặng nhất — đã có fallback "bỏ trọn reinforcement" trong workbook.
- D14-Q3 yêu cầu tự suy ra điều kiện "mới phát hiện" — cố ý để đo reasoning,
  có gợi ý nhãn; đáp án giải thích n=141 và expected-count.
- Báo cáo viết tay (D13) chưa có chấm tự động — checklist tự đánh giá thay thế.

## 9. File thay đổi (Task 16)

- Canonical mới/đổi: `track-14day/day-{11,12,13,14}-*/{lesson,workbook,answer-key}.md`,
  d08/d10 workbook (dòng ngân sách)
- Scenes mới: `visual-guides/day{11,12,13,14}/scenes.json`; vá hot `day11`, `day14`
- Scripts: `sync-content.mjs` (ready d11–14, status line), `check-scene-data.mjs`
  (+day11–14), `browser-smoke.mjs` (mới)
- Curriculum: roadmap §7 status; `exercise-inventory.json` (tier d11/d14, day
  P2-Q08→"d10+d14"); `exercise-verified-stats.md` (+Task 16)
- Reviews: `TASK16-*.md` mới; sửa dòng next-step trong `TASK15-*.md`
- Report package: `report/` refresh (samples d05 + d07–10 + d11–14 + scenes + tests)

## 10. Git

- Commit local duy nhất; không push/deploy; `design-prototypes/`, `exercises/`,
  `.workspace/*.py` vẫn untracked/gitignored.

## 11. Còn lại khi được duyệt

- Pilot 14 ngày trên SPSS thật (Win + macOS) → gỡ `MAC_SPSS_VERIFICATION_PENDING`.
- Extension track E01+ cho ROC/logistic/đa biến (ngoài phạm vi task này).
- OpenDesign redesign — theo kế hoạch riêng, sau khi content được duyệt.
