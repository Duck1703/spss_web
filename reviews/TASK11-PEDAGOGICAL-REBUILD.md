# TASK 11 — Critical Pedagogical Rebuild (vertical slice Ngày 01–03)

> **Phạm vi:** audit toàn bộ 14 ngày + rebuild Ngày 01–03 + sửa nền tảng website.
> **Không** mass-rewrite Ngày 04–14 (chờ owner review trải nghiệm mới).
> Người viết: implementation agent (Devin). Ngày: Task 11.

---

## 1. Phê bình sư phạm — dựa trên bằng chứng từ file thật

Hình thức cũ (build pass, 54 trang, số liệu đã cross-check) che giấu một vấn đề nền tảng:
**bài học được viết cho người đã biết SPSS, không phải người mới mở SPSS lần đầu.**

| # | Vấn đề | Bằng chứng cụ thể |
|---|---|---|
| P1 | **Handoff file gãy — mất ngầm toàn bộ công sức Ngày 02** | D02 build label vào `clinic_bp.sav`; D03 import raw CSV mới → `clinic_bp_my_clean.sav` **không có nhãn**; D04–11 dùng file đó. Không file nào nhắc việc này → học viên mất metadata mà không hề hay biết. |
| P2 | **3 file .sav cạnh tranh không bản đồ** | `clinic_bp.sav` (sạch chuẩn + nhãn), `clinic_bp_work.sav` (tạm), `clinic_bp_my_clean.sav` (sạch của học viên) — không file nào giải thích vai trò → mở nhầm file là lỗi điển hình của người mới. |
| P3 | **Nén 5 thao tác UI vào một câu** | VD cũ: "Analyze → Descriptive Statistics → Frequencies… → đưa biến vào → OK" — không nói nút ►, không mô tả dialog, không nói Output Viewer là cửa sổ *mới* tự mở (người mới hoảng "màn hình vừa nhảy đi đâu"). |
| P4 | **`sex_code` String/Numeric được hướng dẫn mơ hồ** | Cũ: "sửa `F` thành `1`; sau đó đổi Type về Numeric **nếu** SPSS đã nhận là String" — "nếu" là sai (chắc chắn là String vì chữ F); thiếu thứ tự bắt buộc (sửa chữ → đổi kiểu → khai báo missing); không đường phục hồi; không cảnh báo bẫy Automatic Recode (remap 1,2,9→1,2,3). |
| P5 | **Zero visual support** | Không ảnh, không sơ đồ, không "màn hình mong đợi" — người mới không có gì để tự đối chiếu "mình đang nhìn đúng cái không". |
| P6 | **Answer leakage trên trang Dữ liệu** | `/du-lieu/` nhúng toàn bộ `expected-results.md` (mọi N/mean/p-value/χ²/OR — kể cả đáp án assessment Ngày 14) ngay cạnh link tải file assessment; bản `_clean` nằm chung bảng với `_raw`. |
| P7 | **Textarea tràn lan thay artifact** | Mọi mục BT đều nhận "Nháp" textarea — kể cả việc "import file và lưu `.sav`" (sản phẩm là file, không phải chữ). |
| P8 | **Checkpoint quá yếu** | "File .sav mở lại được" — không nói kiểm chứng bằng gì (số dòng, cột xám, P160). |
| P9 | **Bài tập vượt scaffolding** | D03 cũ yêu cầu tìm ≥7/9 lỗi gài — gồm lỗi khó (P119 flag mâu thuẫn) — với gần như không gợi ý. |
| P10 | **Thuật ngữ không chỗ dựa** | "system missing", "listwise", "expected count" xuất hiện trước khi được định nghĩa. |
| P11 | **Độ khó nhảy cóc** | D03 cũ giới thiệu 4 dialog mới (Frequencies, Descriptives, Identify Duplicate, Sort Cases) + đổi Type + khai báo Missing trong một ngày, mỗi cái một câu. |
| P12 | **Câu chuyện y khoa đứt quãng** | Bác sĩ Lan xuất hiện rời rạc; không rõ file clean Ngày 01 và raw Ngày 03 là "cùng 160 bệnh nhân, hai bản khác nhau" → học viên tưởng dataset khác. |

## 2. Dependency map 14 ngày (đã audit)

| Ngày | Đã biết | Mới | Mở file | Tạo file | Ngày sau dùng |
|---|---|---|---|---|---|
| 01 | SPSS chưa từng mở | Data/Variable View, wizard CSV, save `.sav` | `clinic_bp_v1_clean.csv` | `clinic_bp.sav`, `hba1c_pairs.sav` | D02 |
| 02 | Import, 2 tab | Label, Value Labels, Measure, Missing (xem) | `clinic_bp.sav`, `hba1c_pairs.sav` | `clinic_bp.sav` (có nhãn) | D03 (bản tham chiếu) |
| 03 | Labels, Frequencies cơ bản | Descriptives, Identify Duplicates, đổi Type, Discrete missing, cleaning log | `clinic_bp_v1_raw.csv`, `clinic_bp.sav` (tham chiếu) | `clinic_bp_work.sav`, `clinic_bp_my_clean.sav` (có nhãn), `cleaning_log.md` | **D04–11** |
| 04 | Làm sạch, labels | Frequencies/Descriptives/Explore đầy đủ, "Bảng 1" | `clinic_bp_my_clean.sav` | bảng tóm tắt (doc) | D05 |
| 05 | Mô tả cơ bản | Charts, tóm tắt theo nhóm | same | biểu đồ | D06 |
| 06 | Mô tả theo nhóm | Independent t-test, Levene, Welch, CI | same | output t-test | D07–08 |
| 07 | T-test độc lập | Paired t-test, nonparametric | same + `exercise_hba1c_pairs.csv`→`hba1c_pairs.sav` | paired output | — |
| 08 | Nhóm định tính | Crosstabs, χ²/Fisher, OR/RR | same | bảng chéo | D09–10 |
| 09 | Kiểm định 2 nhóm | Correlation, scatterplot | same | output tương quan | D10 |
| 10 | Các phép riêng lẻ | Chọn phép phân tích, ANOVA/Welch/KW preview | same | bảng chọn test | D11 |
| 11 | Output tồn tại | Quản lý `.spv`, syntax, báo cáo | same + output cũ | `*.spv`, báo cáo | D12 |
| 12 | Toàn bộ kỹ năng làm sạch | Tự triển khai trên dataset mới | `capstone_screening_raw.csv` | `capstone_my_clean.sav`, cleaning log | D13 |
| 13 | Capstone data sạch | Pipeline phân tích hoàn chỉnh | `capstone_my_clean.sav` | output + `.spv` | D14 |
| 14 | Mọi kỹ năng | Đánh giá tổng hợp | `assessment_gp_raw.csv` | `.sav`, `.spv`, báo cáo, log | — |

**Broken dependencies tìm được (evidence):**

1. ~~D02→D03–11: metadata (labels) bị mất ngầm~~ → **đã sửa** (D03 Bước 8 gắn lại nhãn + file map).
2. ~~D03→D04: 3 file .sav không rõ vai trò, fallback CSV làm nhẹ handoff~~ → **đã sửa** (bản đồ file mục A + D04 patch chỉ rõ `clinic_bp_my_clean.sav` là file chính).
3. ~~D03 sex_code: thao tác mơ hồ~~ → **đã sửa** (Bước 4 granular, `⏳ PENDING thao tác` + recovery).
4. Website: expected-results + clean CSVs leak cạnh input files → **đã sửa** (tách 4 tầng trên `/du-lieu/`).
5. Website: textarea cho artifact task → **đã sửa** (checklist card `data-check`).
6. Chưa sửa (ngoài phạm vi slice): D04–14 vẫn theo mẫu nén cũ → **backlog mục 8**.

## 3. Đã rebuild: Ngày 01–03 (mẫu A–J)

Mỗi ngày giờ có đủ: A điểm xuất phát · B tình huống y khoa · C lý thuyết vừa đủ ·
D walkthrough granular (mỗi bước: bạn đang ở đâu → bấm gì → màn hình mong đợi → nếu sai) ·
E screenshot plan (`[SHOT-n]` placeholder trung thực) · F worked example ·
G bài tập có gợi ý từng nấc · H checkpoint artifact · I troubleshooting · J handoff tường minh.

**Quyết định continuity (Phase 3):** quy trình file thống nhất —

- `clinic_bp.sav` = bản sạch chuẩn + nhãn → **tham chiếu, không sửa**;
- `clinic_bp_work.sav` = bản phòng hờ lưu TRƯỚC khi sửa;
- `clinic_bp_my_clean.sav` = **file làm việc chính từ Ngày 04**, bắt buộc gắn lại nhãn
  (Bước 8: Apply Data Dictionary tùy chọn `⏳PENDING` hoặc gắn tay ôn lại Ngày 02);
- raw CSV bất biến. Bản đồ file in ngay mục A của D03.

**sex_code (Phase 3):** quy trình 4a–4c an toàn — sửa 'F' khi còn String → Frequencies
kiểm giá trị lạ → đổi Type qua nút `…` → khai báo `9` discrete missing → kiểm lại.
Mỗi nhánh sai có recovery (Ctrl+Z / mở lại `clinic_bp_work.sav` / Frequencies-while-String).
Toàn bộ `MAC_SPSS_VERIFICATION_PENDING` + `⏳ PENDING thao tác` — chưa claim đã chạy.
**BOM phát hiện thêm:** cả 7 CSV đều UTF-8 BOM — SPSS thường xử lý được; đã thêm hàng
troubleshooting (tên cột `ï»¿patient_id` → sửa Name thủ công hoặc chọn encoding UTF-8).

## 4. Visual assets

- `track-14day/screenshot-checklist.md` — 12 ảnh (SHOT-1…12), tất cả `NOT_CAPTURED`,
  kèm quy tắc chụp và ưu tiên (SHOT-2, 6, 11).
- Trong bài: `[SHOT-n]` markers + mô tả màn hình chữ + sơ đồ ASCII dialog
  (Value Labels box ở D02). **Không một ảnh nào bịa.**

## 5. Website learning flow (functional only — theme giữ nguyên)

| Thay đổi | Trước | Sau |
|---|---|---|
| `/du-lieu/` | Một bảng chung raw+clean + toàn bộ expected-results | 4 tầng: ① file cần theo ngày (link /dNN/) · ② codebook trong `<details>` · ③ clean CSV trong `<details>` có cảnh báo "mở sớm = tự lộ đáp án" · ④ expected-results **gỡ khỏi trang** (nội bộ repo) |
| Lesson header | — | Ô `📦 File cần hôm nay` inject tự động: CSV → link tải trực tiếp `/datasets/…`; `.sav` → ghi nguồn "tạo ở Ngày NN" |
| Workbook artifact | textarea "Nháp" cho mọi thứ | Marker `> ✅ **Sản phẩm:** a · b` → `<ExerciseCard checklist>` checkbox list (id `*-sanpham`); textarea giữ cho câu cần chữ |
| progress.js | chỉ textarea + done | `data-check` checkbox lưu `answers[id#i]` — **cùng key `spss-mlp-progress-v1`, schema tương thích**; draft-count bỏ qua key `#` |
| Link fixes | — | `START-HERE-MAC.md` → `/tai-lieu/bat-dau-mac/`; `datasets/expected-results.md` → ghi "tài liệu repo" thay vì link chết |
| `stripInternalStatus` | 1 dòng | + các dòng `> ` tiếp nối (status 2 dòng của D03 không còn bị orphan) |

## 6. Novice walkthrough — mô phỏng có cấu trúc (KHÔNG phải human test)

Phương pháp: đọc từng bước với câu hỏi *"người chưa mở SPSS biết phải làm gì tiếp?"*.
Kết quả là đánh giá tác giả theo checklist — **không thay thế pilot người thật.**

| Ngày/Bước | Người mới biết làm gì? | Còn thiếu | Trạng thái |
|---|---|---|---|
| D01 mở app | Có — Applications + Spotlight ⌘Space | tên app có thể kèm số version | `DOC_OK / EXEC: NOT_TESTED` |
| D01 wizard 3 câu | Có — bảng câu/chọn/vì sao | chỉ mô tả chữ, chưa ảnh (SHOT-2) | `DOC_OK / EXEC: NOT_TESTED` |
| D01 verify 160×12 | Có — cột xám trái, P160, `.` | — | `DOC_OK / EXEC: NOT_TESTED` |
| D01 save `.sav` | Có — Save As + ⌘Q reopen | — | `DOC_OK / EXEC: NOT_TESTED` |
| D02 Values `…` | Có — chỉ hiện sau khi chọn ô (có trong troubleshooting) | — | `DOC_OK / EXEC: NOT_TESTED` |
| D02 Add vs Change | Có — ghi rõ khi sửa nhãn phải Change không Add | — | `DOC_OK / EXEC: NOT_TESTED` |
| D02 Output Viewer đầu tiên | Có — cảnh báo cửa sổ mới tự mở | — | `DOC_OK / EXEC: NOT_TESTED` |
| D03 file map | Có — bảng vai trò 3 file ngay mục A | — | `DOC_OK` |
| D03 sex_code 4a–4c | Có — thứ tự + Frequencies-while-String + recovery | cần verify trên SPSS thật | `DOC_OK / EXEC: PENDING_Mac_SPSS` |
| D03 duplicate | Có — dialog → PrimaryLast → Ctrl+click Clear | tên menu "Clear" cần verify | `DOC_OK / EXEC: PENDING_Mac_SPSS` |
| D03 Apply Data Dictionary | Đường tùy chọn + đường tay | menu path cần verify | `PENDING` |

**Kết luận walkthrough:** mọi bước hiện có hướng dẫn cấp-thao-tác; phần *thực thi* trên
SPSS/macOS chưa được chạy → toàn bộ `EXEC` ở `NOT_TESTED`/`PENDING` cho tới pilot.
Rủi ro còn lại lớn nhất: (a) tên menu thật khác label, (b) hành vi đổi Type String→Numeric,
(c) BOM — cả ba đã có đường phục hồi trong mục I của từng bài.

## 7. Template & backlog Ngày 04–14

- **Template tái dùng:** `curriculum/TEACHING-TEMPLATE-DAY.md` (khung A–J + quy tắc + tự chấm).
- **Backlog ưu tiên** (áp dụng khi owner duyệt slice 01–03):

| Ưu tiên | Ngày | Vấn đề cần sửa |
|---|---|---|
| 🔴 Cao | 04 | Là entry sau handoff mới — rebuild đầu tiên khi tiếp tục: Frequencies/Descriptives/Explore granular + output Viewer quản lý |
| 🔴 Cao | 06 | Nhảy cóc: Levene+Welch+CI+2 bảng output cùng lúc — cần tách bước "đọc bảng nào" |
| 🔴 Cao | 12–13 | Kiểu "tự triển khai" không phù hợp trước khi có nền — cần scaffolding theo template (đây là capstone, học viên chưa chắc sống sót tới đó nếu 04–11 yếu) |
| 🟡 TB | 07 | Import `hba1c` lần hai — mượn BT0 pattern "import lại nếu chưa có" |
| 🟡 TB | 08 | Crosstabs + Risk dialog granular; OR orientation đã sửa ở Task 10 nhưng cần thao tác-level |
| 🟡 TB | 09–10 | Dialog Correlations/ANOVA + bảng chọn test |
| 🟢 Thấp | 05, 11 | Charts/syntax — nâng cấp wording + artifact |
| 🟢 Thấp | 14 | Assessment: giữ tự lập nhưng thêm rubric artifact-checklist |

Mọi rebuild sau này bắt buộc: marker `> ✅ Sản phẩm` cho artifact, `[SHOT-n]` cho dialog
mới, troubleshooting ≥4 dòng, handoff J tường minh.

## 8. Verification

- `node scripts/sync-content.mjs` — OK; `npm run build` — **54 pages PASS**.
- `dist/du-lieu`: 0 occurrence số liệu expected-results → **không còn leak**.
- `dist/d01|d03/bai-tap`: `exercise-card__checklist` render; m01 giữ nguyên (không
  checklist) → backward compat.
- Progress key `spss-mlp-progress-v1` đọc/ghi cùng schema (`done{}`, `answers{}`,
  `lastPage`) — checkbox keys `id#i` không đụng các key cũ.
- `git diff --check` — clean.

## 9. Mac SPSS limitations — trung thực

- **Không có SPSS runtime** trong môi trường viết bài → mọi thao tác menu là
  `MAC_SPSS_VERIFICATION_PENDING`; hai điểm rủi ro cao đánh `⏳ PENDING thao tác`
  (đổi Type của `sex_code`; Apply Data Dictionary; tên menu "Clear" khi xóa case).
- Walkthrough là **mô phỏng tác giả**, không phải usability test người thật.
- Số liệu vẫn `NOT_RUN` (Python cross-check), không claim SPSS output.
- Bước kế tiếp thật: owner chạy pilot `pilot-checklist-mac.md` + chụp SHOT-1…12,
  báo `DIFFERS:` để sửa label menu thật.
