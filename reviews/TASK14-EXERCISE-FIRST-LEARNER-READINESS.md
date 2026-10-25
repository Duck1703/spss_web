# TASK 14 — Exercise-first learner readiness + Days 04–06

> Baseline: commit `d0e3005` (Task 13). Workspace `D:\spss`. Không push, không deploy.
> Trạng thái tổng: **CONTENT_READY_PENDING_HUMAN_PILOT** cho Ngày 01–06.

---

## 1. Kết quả audit Task 13

Đã đọc lại và kiểm chứng độc lập (không tin nhãn READY cũ):

- **Ngày 01–03 số liệu:** tái tính trực tiếp từ `p1_B01_HA (1).sav` bằng pyreadstat/pandas/scipy —
  P1-Q01 (45kg, ID 89/167/429/507), P1-Q02 (HVan 101/129/141/181/42/26), P1-Q38
  (226/59/250/79/6), P1-Q03–04 (n=620, 66,9±10,93, Q1=62, P70=71, CV=16,3%), P1-Q06,
  P1-Q05 → **khớp**, không tìm thấy sai số trong đáp án cũ.
- **Inventory:** đủ 60 bản ghi (P1-Q01–43, P2-Q01–15, P2-TH3, P1-BONUS-SLNC); mỗi bản ghi có
  đúng 1 `dataset` tường minh; **mọi biến trong `vars` tồn tại trong dataset được gán**
  (kiểm tra tự động bằng metadata 9 file .sav — 0 missing).
- **Lỗi tìm thấy và đã sửa:**
  1. `stripInternalStatus()` trong `sync-content.mjs` xóa cả dòng learner-facing
     "**Bài tập nguồn hôm nay:**" ở mọi trang bài học (regex nuốt mọi dòng `>` sau
     Trạng thái). Đã sửa: chỉ nuốt dòng tiếp nối **không** mở đầu bằng `**Key:**`.
  2. Nhiều file canonical dùng CRLF/mixed line endings → `injectTrackCards` bỏ sót
     marker `> ✅ **Sản phẩm:**` (regex `.+$` không match `\r`) — trang Ngày 04 mất
     checklist sản phẩm. Đã sửa `read()` normalize `\r\n?→\n` + normalize 27 file canonical.
  3. Roadmap ghi chung "P1-Q01–Q42 dùng p1_B01_HA" — inventory đã đúng (Q15/16→ROC,
     Q21→CrossTab) nhưng prose gây hiểu nhầm; xác nhận lại bằng kiểm tra biến-thực-tế,
     không chỉ tên file.
  4. Trong bản nháp đầu của Ngày 05, χ² Pearson và Yates bị **hoán đổi**
     (scipy mặc định `correction=True` cho 2×2). Đã sửa toàn bộ và thêm cảnh báo vào
     `exercise-verified-stats.md`.

## 2. Truy cập dữ liệu local cho học viên

- Hướng dẫn mới: `curriculum/spss-practice-setup.md` → trang `/tai-lieu/chuan-bi-du-lieu/`
  (sidebar: *Chuẩn bị dữ liệu thực hành*), link trực tiếp từ bài học Ngày 01.
- Nội dung: 2 kịch bản (cùng máy / web trên Windows + SPSS trên MacBook), cấu trúc
  `SPSS_Practice/{sources,workspace,outputs}`, quy tắc không ghi đè file gốc,
  lưu `*_work.sav` vào `workspace/`, cách chuyển file qua USB/Drive/AirDrop.
- File `.sav`/PDF nguồn vẫn local-only (`.gitignore` giữ nguyên từ Task 13).

## 3. Rà soát khối lượng học (~45 bản ghi core)

- Thêm **mục 3a** vào `curriculum/EXERCISE-FIRST-14-DAY-ROADMAP.md`: bảng phân tầng
  ESSENTIAL / REINFORCEMENT / ADVANCED cho cả 14 ngày + ước lượng phút + số thao tác mới
  + độ khó người mới.
- Kết luận: nhịp khả thi 90–120 phút/ngày nếu REINFORCEMENT là tùy chọn; Ngày 05 nặng nhất
  (4 thao tác mới, 3 dataset) — roadmap ghi rõ fallback (chuyển P1-Q18 xuống pool).
- `exercise-inventory.json`: thêm trường `tier` (`essential`/`reinforcement`) cho 29 bài
  thuộc Ngày 01–06; exercise card trên web hiển thị "tầng: BẮT BUỘC / LUYỆN THÊM".

## 4. Sửa ánh xạ bài→dataset

- Kiểm chứng toàn bộ 60 bản ghi: mỗi bài đúng 1 dataset tường minh; P1-Q15/16 →
  `P1_B03 ROC.sav`, P1-Q21 → `P1_B02 CrossTab (2).sav`, P2-Q13→File2, Q14→File3, Q15→File4.
- Kiểm tra biến-thực-tế (không suy từ tên file): 0 biến thiếu.
- Không cần sửa dữ liệu inventory — chỉ làm rõ tài liệu (mục 3a + báo cáo này).

## 5. Ngày 04–06 — triển khai đầy đủ

| Ngày | Kỹ năng | Bài ESSENTIAL | REINFORCEMENT | Mô phỏng |
|---|---|---|---|---|
| 04 | Select Cases (điều kiện kép), Split File, Means | P1-Q08, P1-Q09, P1-Q06 | P1-Q41; pool Q23/25/27/30 | d04-select-age, d04-split, d04-means |
| 05 | Crosstabs, % hàng/cột, Chi-square, expected<5→Fisher, Weight Cases, Risk | P1-Q05, P1-Q17, P1-Q21, P2-Q01 | P1-Q18; pool Q19/29/32/34–37 | d05-crosstabs, d05-chisq, d05-weight |
| 06 | Compute, Recode-Different, Count; lần đầu Save As `_work.sav` | P1-Q10, P1-Q11, P1-Q12 | kiểm chứng chéo Benh.MT_1/2 | d06-compute, d06-recode, d06-count |

Mỗi ngày: `lesson.md` (A–J đủ) + `workbook.md` + `answer-key.md` + 3 scenes.json
(9 scenes mới, gắn `"audit": "external-sav"`, giá trị lấy từ file nguồn thật).

## 6. Kiểm chứng thống kê (Python, nhãn NOT_RUN)

| Bài | Giá trị kiểm chứng |
|---|---|
| P1-Q08a | HVan mẫu Nam n=244: 48/36/51/67/19/23 |
| P1-Q08b | HVan mẫu 50–70 n=368: 44/75/84/120/28/17 |
| P1-Q09 | bảng 6×2 khớp Q08a (53/48 · 93/36 · 90/51 · 114/67 · 23/19 · 3/23) |
| P1-Q06 | Nữ 376/67,16/11,06 (range 56) · Nam 244/66,51/10,74 (range 53) |
| P1-Q41 | 4 ô mean tuổi: 69,02/65,36/67,15/64,38 |
| P1-Q05 | 2×2: 131/98/245/146; %hàng 57,2–42,8·62,7–37,3; %cột 34,8–40,2·65,2–59,8; χ²=1,800 p=0,180 |
| P1-Q17 | ĐTĐ: Pearson χ²=1,075 p=0,300 · Gan: Pearson 0,175 p=0,676 NHƯNG exp<5 → Fisher p=0,759 |
| P1-Q18 | Pearson χ²=320,77 p<0,001 (17,6% vs 91,0%) |
| P1-Q21 | n=88; 71,4% vs 16,7%; χ²=25,480 p<0,001; RR=4,29; OR=12,50 |
| P2-Q01 | 3×2 n=50; χ²=0,502 df=2 p=0,778 (exp min 6,90) |
| P1-Q10 | BMI (cm→m): n=620 mean 20,42 SD 1,91 min 15,77 max 28,91 |
| P1-Q11 | DoTuoi: 54/40/309/217; ≥70 = 217 (35,0%) |
| P1-Q12 | đếm 5 biến nhị phân: 326/264/30; ≥2 = 30; ≥1 = **294** (sửa con số 289 ghi nhầm trước đây) |

## 7. Website & quality gate

| Check | Kết quả |
|---|---|
| `npm run sync` | 53 file generated (+1 trang chuẩn-bị-du-lieu) |
| `npm run build` | PASS — 55 trang; warning cũ không fatal: i18n trống, docs→404 thiếu, sitemap thiếu `site` |
| Scene checker | `check-scene-data.mjs` mở rộng day01–06: **183 checks, 0 FAIL** |
| Exercise ID integrity | 60/60 ID hợp lệ; 0 marker `{{exercise:}}`/`{{guide:}}` sót lại trong generated |
| Route check | 14 route /dNN×3 + /tai-lieu/chuan-bi-du-lieu + scenes.json → HTTP 200 (astro preview) |
| Answer leakage | d05 workbook từng lộ RR=4,29 trong câu đố — **đã sửa**; quét lại không còn đáp số trong bài tập |
| Progress compat | `module:dNN` keys nguyên vẹn; ExerciseCard id `dNN-btK-N` nhất quán |
| Đáp án | bọc `<details>` sau heading — không lộ bên cạnh bài tập |
| Browser | preview chạy trên :4323; cấu trúc HTML kiểm tra qua curl (guide/src-ex cards render). Tương tác click đầy đủ: **BROWSER_NOT_TESTED** (cần người xác nhận trên UI) |
| SPSS | **SPSS_NOT_RUN** — mọi menu `MAC_SPSS_VERIFICATION_PENDING` |
| Human pilot | chưa có → **CONTENT_READY_PENDING_HUMAN_PILOT** |

## 8. Vấn đề usability còn lại

- Ngày 05 dùng 3 dataset — người mới dễ quên tắt Weight/Split khi đổi file (đã có Bước 6
  "Dọn trạng thái" nhưng chưa kiểm chứng trên người học thật).
- `File1.sav` nhãn lỗi font (mojibake) — bài học hướng dẫn đối chiếu codebook trang 2 PDF;
  cân nhắc bảng ánh xạ biến→nhãn hiển thị sẵn nếu pilot thấy vướng.
- Câu hỏi "nhận xét" (Q09) cần người học viết văn — ExerciseCard chỉ checklist sản phẩm,
  chưa chấm nội dung lập luận.
- Chi-square: khác biệt scipy mặc định (Yates) vs dòng Pearson của SPSS đã được ghi chú
  rõ trong lesson + stats doc để tránh nhầm lần cho người kiểm chứng sau này.

## 9. Git

- Commit local sau báo cáo này; không push, không deploy.
- File nguồn bên thứ ba (`exercises/bai_1|bai_2/`) vẫn gitignored.
- `design-prototypes/` untracked từ trước — không liên quan, không commit.

## 10. Next (khi được phê duyệt tiếp)

- Pilot Ngày 01–06 trên máy có SPSS thật (ưu tiên kiểm chứng Select/Split/Weight/Crosstabs
  trên macOS) → gỡ nhãn `MAC_SPSS_VERIFICATION_PENDING`.
- Xây Ngày 07–10 theo cùng khuôn (đã có DRAFT + số liệu kiểm chứng sẵn).
