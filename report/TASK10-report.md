# Task 10 — Remediation report: Practice-first quality gate & Day 01 pilot readiness

> **Bối cảnh:** independent review của Task 09 cho quyết định `CHANGES_REQUIRED`.
> Task này xử lý từng finding. File review gốc `SPSS_Task09_Independent_Review.md`
> **không có trong workspace** — các finding được trích từ task brief của owner
> (Tasks 1–7 trong brief khớp mô tả reviewer) và xác minh lại trực tiếp trên repo.
>
> **Nhãn trung thực giữ nguyên:** số liệu `NOT_RUN` (Python cross-check, không phải
> output SPSS); menu Mac `MAC_SPSS_VERIFICATION_PENDING`; dữ liệu `SIMULATED`;
> toàn bộ chưa `HUMAN_APPROVAL`.

---

## Finding 1 — Mâu thuẫn dòng comment `# SIMULATED` trước header CSV → ĐÃ SỬA

**Hiện trạng xác minh (đọc byte đầu file):**
- `datasets/cleaned/clinic_bp_v1_clean.csv`: dòng 1 = `patient_id,age_years,...` — **không có comment**; 161 dòng = header + 160 bản ghi.
- `datasets/synthetic-raw/clinic_bp_v1_raw.csv`: dòng 1 = header giống hệt; 162 dòng = header + 161 bản ghi (gồm 1 dòng trùng P088).
- Cả hai UTF-8 có BOM.

**Nguồn gốc mâu thuẫn:** `datasets/codebooks/clinic_bp_codebook.md` còn sót câu cũ
"header ở dòng đầu (**sau 1 dòng comment `#` nhãn SIMULATED**)" từ trước khi Task 09
bỏ comment-line (vì phá wizard import SPSS). File thực tế và `lesson.md`/`report` đều
đã nói đúng là không có comment → codebook là điểm duy nhất sai.

**Sửa:** codebook giờ ghi rõ *"dòng đầu tiên của file chính là header — không có dòng
comment nào trước header"*; nhãn SIMULATED nằm ở `00-SIMULATED-NOTICE.md` kèm theo.

**`sex_code = 9`:** cột Missing của codebook từng ghi "trống, 9" — đọc như 9 là quy ước
missing hợp lệ. Đã sửa: cột Missing = "trống"; phần quy ước missing ghi rõ
**`sex_code = 9` là giá trị không hợp lệ trong bản RAW (lỗi gài), không phải quy ước
missing**; cleaned → missing. Khớp `planted-errors-INTERNAL.md` (#3, P052).

**Không có byte dữ liệu nào đổi** → không cần chạy lại thống kê cho finding này.

## Finding 2 — OR Ngày 08 mơ hồ (0,91 vs 1,10) + thiếu định nghĩa → ĐÃ SỬA

**Toán học kiểm chứng (Python):** bảng `sex_code` × `bp_controlled` = `[[26,39],[30,41]]`.
- OR theo quy ước nhãn SPSS `Odds Ratio for sex_code (1 / 2)` (sự kiện = cột mã đầu
  `bp_controlled=0`) = (26×41)/(39×30) = **0,91**.
- Phát biểu đảo chiều "odds *đạt* kiểm soát ở Nữ vs Nam" = 1/0,91 = **1,10**.
- → 0,91 và 1,10 là **cùng một OR**, hai chiều phát biểu. Answer-key cũ ghi "OR ≈ 1,10"
  không nêu chiều → đúng nguyên nhân reviewer bắt.

**Sửa:**
- `answer-key.md` BT1: ghi cả hai số kèm định hướng đầy đủ (sự kiện = ctrl=0; nhóm so
  sánh = Nữ; tham chiếu = Nam; công thức tính tay) + lưu ý xác nhận thứ tự mã khi chạy
  SPSS thật (`NOT_RUN`).
- `lesson.md` Bước 4: viết lại thành quy trình 3 câu hỏi — *tiếp xúc nào, sự kiện nào,
  chiều nào* — với bảng diabetes: exposure `diabetes_flag` (0 vs 1 trong nhãn), event =
  `bp_controlled=0`, OR = (23×19)/(61×33) = 0,22; hai phát biểu tương đương nêu rõ.
- `expected-results.md`: generator giờ tự emit mục "Day 08 BT1" có ghi định hướng OR.
- Mỗi ví dụ OR giờ có đủ: biến tiếp xúc, mã tiếp xúc/tham chiếu, outcome, sự kiện,
  chiều so sánh, bảng đếm (nếu là ví dụ tính được), câu diễn giải.
- OR `2,8`/`0,55` ở BT3 được đánh dấu rõ **GIẢ ĐỊNH** và cho sẵn định hướng.
- Không nơi nào gọi OR là RR; có cảnh báo "xác nhận thứ tự mã khi chạy thật".

**Mâu thuẫn `smoking_status` vs `smoker` (BT3):** dataset dùng `smoking_status` 3 mức
(0=không · 1=đã bỏ · 2=đang hút); BT3 cũ nói "mã 1 = hút thuốc hiện tại" trên biến
`smoker` không tồn tại. Đã sửa: BT3 định nghĩa `smoker` nhị phân **giả định**
(0/1) riêng, ghi rõ không phải `smoking_status`; answer-key bổ sung lỗi hay gặp
(recode 3→2 mức trước khi đọc OR; Crosstabs 3 mức không in Risk Estimate).

## Finding 3 — BT4 không giải được → ĐÃ SỬA (phương án B)

Chọn **B**: đổi đề thành "chỉ có thống kê, chưa có bảng". Đồng nghiệp báo p=0,03 và
OR=2,1 (định hướng cho sẵn: odds đau gối, béo phì vs không béo phì) — học viên viết câu
kết quả chỉ từ 2 số có và **nêu rõ số nào KHÔNG tính được** (% từng nhóm, số ô,
expected counts, RR) vì thiếu bảng 2×2. Answer-key cho câu mẫu + danh sách không tính
được + lỗi hay gặp ("bịa % để câu nghe đầy đủ — tuyệt đối không").
Không fabricate bất kỳ % nào.

## Finding 4 — Ngôn ngữ về kết quả không có nghĩa (BT1) → ĐÃ SỬA

Answer-key BT1 thay câu "không có nghĩa thống kê" đứng một mình bằng đoạn dạy rõ:
> *"không có ý nghĩa thống kê" nghĩa là phân tích này không đưa ra đủ bằng chứng về sự
> khác biệt — nó KHÔNG chứng minh hai nhóm giống hệt nhau.*

Câu mẫu kết quả viết lại theo hướng "không cho thấy bằng chứng về sự khác biệt" thay vì
ngầm khẳng định đồng nhất; kèm lưu ý cỡ mẫu 136 ca vẫn có thể bỏ sót khác biệt thật nhỏ.

## Finding 5 — Vòng eo `assessment_gp` 63,0 cm không hợp lý → ĐÃ SỬA (generator bug)

**Chẩn đoán:** lỗi công thức generator — intercept `62` trong
`waist = 62 + 1.6×(bmi−24) + N(0,6)` (dòng 253 cũ). Không phải lỗi gài có chủ đích
(waist không nằm trong `planted-errors-INTERNAL.md`), không phải lỗi đơn vị — chỉ là
intercept thấp phi lý cho người lớn (mean BMI 25,4 → vòng eo kỳ vọng ~85–95 cm).

**Khắc phục:** intercept `62 → 88`. Vì `rng.gauss` được tiêu thụ theo đúng thứ tự cũ,
**mọi giá trị khác không đổi**; `waist_cm` mỗi dòng dịch đúng +26,0 cm
(kiểm chứng: 60 ô đổi, tất cả chênh đúng 26.0, 0 ô ngoài `waist_cm`).

| Chỉ số `waist_cm` | Trước | Sau |
|---|---|---|
| mean ± SD | 63,0 ± 8,8 | **89,0 ± 8,8** |
| min – max | 43,2 – 80,9 | **69,2 – 106,9** |
| `waist_cm` × `sbp` r | 0,11 (p=0,396) | 0,11 (p=0,396) — *đổi dấu không đổi, shift-invariant* |
| `bmi` × `waist_cm` r | 0,75 | 0,75 — không đổi |

**Đánh giá tác động trước khi sửa (đúng yêu cầu):**
- Codebook `assessment_gp`: chỉ định nghĩa biến, không quote số → không cần sửa.
- `expected-results.md`: tái sinh tự động bởi generator (waist mới; correlations giữ nguyên).
- Day 14 answer-key: 1 ô bảng mô tả `63,0 ± 8,8` → `89,0 ± 8,8`. Các r/p quote (0,11, 0,75)
  không đổi → mục 3–5 không đụng. Rubric/workbook không quote số waist.
- Website downloads: `npm run sync` copy lại CSV; dist đã có waist mới.
- Raw file: 4 lỗi gài không liên quan waist → danh mục lỗi giữ nguyên.
- Lợi ích phụ: trước đây learner kiểm tra plausibility sẽ "phát hiện" 43,2 cm như một lỗi
  chưa gài — tạo bẫy chấm điểm; giờ dải 69–107 cm nhất quán với BMI 17–34,5.
- Validation mới: `chk(55 ≤ waist ≤ 140)` chống hồi quy.

**Đồng thời vá lỗ hổng tái sinh:** 3 mục thủ công trong `expected-results.md`
(Day 06 BT1, Day 08 BT1, Day 09 `age×sbp`) giờ do **generator emit** → file không còn
mất nội dung khi regenerate. Kèm sửa 2 chi tiết nhỏ phát hiện khi đối chiếu:
mean nhóm ĐTĐ là 26,3 (không phải 26,4 — làm tròn sai trước đây) trong cả
`expected-results.md` lẫn `day-06 answer-key`; diff/CI emit ở 2 chữ số (−0,76; [−1,97; 0,45])
khớp answer-key.

## Finding 6 — Pilot Ngày 01 trên Mac → ĐÃ CHUẨN BỊ

`track-14day/day-01-lan-dau-mo-spss/pilot-checklist-mac.md` — checklist cho owner chạy:
lấy CSV đúng (website `/du-lieu/` hoặc copy repo, nhấn mạnh `_clean` ≠ `_raw`),
mở SPSS, wizard import + 3 setting bắt buộc (header=Yes, comma, period),
kiểm chứng 160×12 + P160 + `.` missing, lưu/mở lại `.sav`, bảng evidence E0–E5
(screenshot cụ thể), quy trình `DIFFERS:` khi menu khác, checkpoint rõ ràng.
**Không claim đã PASS** — trạng thái `NOT_RUN` tới khi có evidence thật.

## Finding 7 — Validation tự động → ĐÃ CHẠY

| Kiểm tra | Kết quả |
|---|---|
| Header CSV + số bản ghi (7 file) | PASS — header ở dòng 1, không comment; 160/161/24/90/91/60/60 |
| Raw vs cleaned conventions | PASS — clean chỉ {1,2,''}, raw còn `9`, dup P088 chỉ ở raw, không giá trị vượt miền |
| Bảng chéo Ngày 08 | PASS — [[23,61],[33,19]] & [[26,39],[30,41]] |
| OR định hướng | PASS — diab 0,22; sex 0,91 (nhãn SPSS) ⇔ 1,10 (đảo) |
| Waist plausibility | PASS — mean 89,0; range 69,2–106,9 |
| Workbook ↔ answer-key (Ngày 08) | PASS — BT1–BT4 đồng bộ sau sửa |
| Rubric Ngày 14 | PASS — 11 hạng mục = 100đ, ngưỡng ≥85 |
| Website build | PASS — 54 trang, Pagefind OK |
| CSV download | PASS — `/datasets/*.csv` = 200 |
| Internal leak | PASS — 0 file dist chứa `project-control`/`reviews/`/`planted-errors` |
| Progress storage | PASS — key `spss-mlp-progress-v1` + schema giữ nguyên (không đụng) |
| `git diff --check` | PASS — chỉ cảnh báo LF→CRLF chuẩn Windows |
| Route smoke (11 route) | PASS — toàn 200 |

## File đã thay đổi

| File | Thay đổi |
|---|---|
| `datasets/codebooks/clinic_bp_codebook.md` | Bỏ claim comment-line; `sex_code=9` = invalid code, không phải missing convention |
| `datasets/generators/generate_all.py` | Intercept waist 62→88; emit 3 mục expected-results; +waist validation chk |
| `datasets/synthetic-raw/assessment_gp_raw.csv` | `waist_cm` +26 mỗi dòng (regen) |
| `datasets/cleaned/assessment_gp_clean.csv` | `waist_cm` +26 mỗi dòng (regen) |
| `datasets/expected-results.md` | Tái sinh: waist mới; 3 mục BT1/age giờ generator-made |
| `track-14day/day-06…/answer-key.md` | mean ĐTĐ 26,4→26,3 (làm tròn đúng) |
| `track-14day/day-08…/lesson.md` | Bước 4: quy trình đọc OR 3 câu hỏi + định hướng rõ |
| `track-14day/day-08…/workbook.md` | BT3 hypothetical + định hướng; BT4 interpret-only |
| `track-14day/day-08…/answer-key.md` | BT1 OR 0,91/1,10 + ngôn ngữ không-có-nghĩa; BT3/BT4 viết lại |
| `track-14day/day-14…/answer-key.md` | waist 63,0→89,0 trong bảng mô tả |
| `track-14day/day-01…/pilot-checklist-mac.md` | **MỚI** — checklist pilot owner chạy trên Mac |

## Còn lại (trung thực)

- Mọi số phân tích vẫn `NOT_RUN` — cần pilot SPSS thật cho các ngày 03–14 (không chỉ Ngày 01).
- `MAC_SPSS_VERIFICATION_PENDING` vẫn đứng trên toàn bộ menu steps.
- Chưa có `HUMAN_APPROVAL`; review file gốc không có trong repo (finding xử lý theo brief).
- Không deploy, không push.
