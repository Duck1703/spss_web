# TASK 13 — Review: Exercise-Driven SPSS Curriculum Refactor

> **Phạm vi:** chuyển xương sống khóa học từ curriculum AI-invented (`clinic_bp`) sang hai bộ
> đề thực hành thật trong `exercises/` — theo triết lý **EXERCISE FIRST — EXPLANATION WHEN
> NECESSARY**. Không redesign UI, không push/deploy, không xóa lịch sử cũ.
> **Ngày hoàn thành báo cáo:** theo commit Task 13.

---

## 1. Source PDFs đã kiểm tra

| PDF | Đường dẫn | Trang | Kết quả trích xuất |
|---|---|---|---|
| Phần 1 | `exercises/bai_1/Bai thuc hanh SDH P1.pdf` | 5 | **43 câu** đánh số Câu 1–43 — đọc hết bằng `pypdf`, đối chiếu từng câu |
| Phần 2 | `exercises/bai_2/BSNT_Bài TH_Phần 2_Cô Hiền.pdf` | 4 | **15 câu** Câu 1–15 + 1 hoạt động không đánh số ("Bài TH3": xử lý, phân tích File5 và tập viết báo cáo) + bảng mã hóa biến phiếu điều tra |

Cảnh báo trích xuất "Ignoring wrong pointing object" ở PDF Phần 2 — không ảnh hưởng nội dung.

## 2. File `.sav` thực tế đã kiểm tra

Đọc bằng `pyreadstat` 1.3.7 / `pandas` 2.3.2 (Python 3.13.12) — tất cả **9 file mở được**:

| File | Kích thước | Ghi chú kiểm tra |
|---|---|---|
| `bai_1/p1_B01_HA (1).sav` | 620 × 40 | nhãn đầy đủ; `GTinh` mã **1=Nữ, 2=Nam** (ngược trực giác); `NNghiep` có lỗi nhập đúng như P1-Q14 kỳ vọng (0 ×3, 8 ×2, missing ×2) |
| `bai_1/P1_B02 CrossTab (2).sav` | bảng tổng hợp | dữ liệu dạng tần số — phù hợp bài Weight Cases (P1-Q21) |
| `bai_1/P1_B03 ROC.sav` | 30 × 5 | WBC/CRP/PCT vs viêm phổi — đúng bối cảnh P1-Q15/Q16 |
| `bai_1/So_Lieu_NC.sav` | 360 × nhiều | dataset khảo sát khác — **không câu nào tham chiếu** → supplementary |
| `bai_2/File1.sav` | 50 × 18 | tên biến lệch bảng mã hóa PDF nhưng ánh xạ theo vị trí/nhãn khớp |
| `bai_2/File2_Phan2.sav` | 12 | giờ ngủ thuốc vs giả dược (paired) |
| `bai_2/File3_Phan2.sav` | 20 | `NDEAT` chuỗi có giá trị rác `H0` ở bản ghi đầu |
| `bai_2/File4_Phan2.sav` | 30 | `HYPOTENSION`, `DEATH` lưu **chuỗi** '0'/'1' — cần recode số |
| `bai_2/File5_Phan2.sav` | 296 × 7 | PSA, sinh thiết TT liệt (positive 95 / negative 201) |

## 3. 58 exercise IDs — trạng thái

- `curriculum/exercise-inventory.json`: **60 bản ghi** — P1-Q01…P1-Q43 ✓, P2-Q01…P2-Q15 ✓,
  + `P2-TH3` (hoạt động không đánh số) + `P1-BONUS-SLNC` (dataset phụ So_Lieu_NC).
- Kiểm chứng máy: không thiếu ID nào trong dãy (script kiểm tập {P1-Q01..Q43} ∪ {P2-Q01..Q15} = đầy đủ).
- Mỗi bản ghi có: ID · PDF gốc · trang · ref · tóm tắt · dataset · biến · kỹ năng · menu SPSS ·
  tiên quyết · độ khó · thời lượng · sản phẩm · trạng thái mapping · vai trò · ngày · gợi ý · answerSpec.

## 4. Mapping câu hỏi ↔ dataset và độ tin cậy

Bảng đầy đủ: `curriculum/EXERCISE-SOURCE-MAP.md`. Tóm tắt:

- **P1-Q01…Q42** → `p1_B01_HA (1).sav` — VERIFIED bằng tên biến/nhãn/khớp bối cảnh đề
  (Tuoi, GTinh, HVan, NNghiep, CD.HA, Timmach/Tieuduong/…, HA.TD/TT_L1/L2…).
- **P1-Q21** → `P1_B02 CrossTab (2).sav` — VERIFIED (bảng 2×2 tổng hợp HPV).
- **P1-Q15/Q16** → `P1_B03 ROC.sav` — VERIFIED (WBC/CRP/PCT chẩn đoán viêm phổi).
- **P2-Q01…Q12** → `File1.sav` — VERIFIED (PDF gọi "File1_Phan 2.sav"; nội dung khớp: chấn
  thương GT, CLCS trước/sau, tuổi, ngày nằm viện, tỉnh…).
- **P2-Q13** → `File2_Phan2.sav` — VERIFIED (paired thuốc ngủ vs giả dược).
- **P2-Q14** → `File3_Phan2.sav` — VERIFIED (PCT ↔ NDEAT) nhưng **có rác `H0`**.
- **P2-Q15** → `File4_Phan2.sav` — VERIFIED (PCT + hạ huyết áp + tuổi ↔ DEATH) nhưng outcome chuỗi.
- **P2-TH3** → `File5_Phan2.sav` — VERIFIED.
- **`So_Lieu_NC.sav`** → không câu nào → `bonus`/supplementary (dùng Ngày 01 BT4 "nhận file lạ").

## 5. Dữ liệu thiếu / không tương thích

1. `File3_Phan2.sav`: `NDEAT` chứa `H0` — P2-Q14 bắt buộc bước làm sạch trước (deferred).
2. `File4_Phan2.sav`: `HYPOTENSION`/`DEATH` dạng chuỗi — P2-Q15 cần recode (deferred).
3. `NNghiep`: 5 mã lạ (0, 8) + 2 missing — **không phải lỗi**, chính là dữ kiện P1-Q14.
4. `TSu.HA`: nhãn khai 4 mức nhưng không ai có mã 1 — chú ý khi đọc output.
5. `GTinh` mã ngược (2=Nam) ở `p1_B01_HA` vs `So_Lieu_NC` (1=Nam) — điểm dạy quan trọng,
  đã đưa vào Ngày 01.
6. Không thiếu file nào so với danh sách khai báo; khác biệt tên `File1.sav` vs
  `File1_Phan 2.sav` đã xác minh bằng nội dung.

## 6. Cấu trúc khóa học mới

`curriculum/EXERCISE-FIRST-14-DAY-ROADMAP.md` — 14 ngày theo stage A→G:

- **D01–03 (READY):** nền tảng trên `p1_B01_HA` — mở file/đọc biến (Q01) → tần số (Q02, Q38)
  → thống kê mô tả (Q03, Q04).
- **D04–08 (DRAFT):** nhóm & bảng chéo & biến đổi & dữ liệu sai & kiểm định tỷ lệ
  (Q05–Q14, Q17–Q22, Q38–Q41, P2-Q01–Q03).
- **D09–11 (DRAFT):** Phần 2 — so sánh trung bình, paired/ANOVA, tương quan & hồi quy
  (P2-Q04–Q13).
- **D12–13 (DRAFT):** Capstone P2-TH3 trên `File5_Phan2.sav`.
- **D14 (DRAFT):** đánh giá — pool Q24/Q26/Q28/Q31/Q33/Q43 + P2-Q08.

## 7. Bài tập core đã chọn

45 bản ghi role=core (gồm P2-TH3). Tiêu chí: phủ đủ chuỗi kỹ năng đọc-de → chọn lệnh →
chạy → đọc output → diễn giải, tăng độ khó hợp lý, ưu tiên câu đầu mỗi cụm kỹ năng.

## 8. Bài tập nâng cao hoãn (deferred)

| Bài | Lý do |
|---|---|
| P1-Q15, P1-Q16 | ROC/Se/Sp/PPV — cần nền chẩn đoán học chưa thể dạy có trách nhiệm trong 14 ngày → E01 |
| P2-Q14, P2-Q15 | tiên lượng đa biến + dữ liệu cần làm sạch (H0, chuỗi) → E01–E02 |
| P2-Q12 | hồi quy đa biến — chỉ giới thiệu tùy chọn D11, không đánh giá |
| P1-Q07 | Multiple Response Sets — dialog riêng, để optional D07 |

Pool optional (luyện thêm, không bắt buộc): P1-Q07, Q19, Q20, Q23, Q25, Q27, Q29, Q30,
Q32, Q34–Q37, Q39, Q42.

## 9. Bài học đã rebuild

| Ngày | Trạng thái | Bài tập nguồn | Nội dung |
|---|---|---|---|
| 01 | **READY** | P1-Q01 (+BT nhận file lạ So_Lieu_NC) | lesson 146 dòng + workbook 4 BT + đáp án + 4 mô phỏng (open-sav, varview, select, sort) |
| 02 | **READY** | P1-Q02 + P1-Q38 | lesson + workbook + đáp án + 2 mô phỏng (frequencies HVan, cdha-freq) |
| 03 | **READY** | P1-Q03 + P1-Q04 | lesson + workbook + đáp án + 2 mô phỏng (descriptives, freq-stats percentiles) |
| 04–14 | **DRAFT** | theo roadmap §6 | mỗi ngày có lesson/workbook/answer-key canonical: bảng ánh xạ bài tập đầy đủ, kỹ năng, kế hoạch hoàn thiện — đúng yêu cầu "DRAFT not READY" |

Mỗi bài READY tuân cấu trúc A–J của task: bài tập gốc → mục tiêu → dữ liệu → kiến thức
vừa đủ → thực hành → mô phỏng → tự làm → kiểm tra → đáp án → chuyển bài.

## 10. Website changes

- `website/scripts/sync-content.mjs`: DAYS trỏ `track-14day/day-*` mới; thêm `expandExercises`
  (marker `{{exercise:P1-Qnn}}` → khối `src-ex` từ `exercise-inventory.json`); `fileBox`
  hỗ trợ `savLocal` (hiển thị đường dẫn, không link tải); `syncTrackRoadmap` đọc
  `EXERCISE-FIRST-14-DAY-ROADMAP.md`; banner DRAFT riêng cho ngày chưa READY;
  trang `du-lieu` viết lại: bảng dataset nguồn local-only + CSV giả lập thành phầ luyện thêm.
- `astro.config.mjs`: sidebar 14 nhãn mới (không đổi bố cục).
- `src/pages/index.astro`: tiêu đề/hero/outcomes/howTo đổi sang exercise-first; card ngày
  hiển thị đúng READY/DRAFT; footer cập nhật. **Không thay đổi thiết kế** — chỉ nội dung.
- `src/styles/custom.css`: + `.src-ex` (khối bài tập nguồn).
- `scripts/check-scene-data.mjs`: hỗ trợ `"audit": "external-sav"` — scene dataset ngoài
  chỉ kiểm cấu trúc + callout (số liệu kiểm chứng bằng Python riêng).
- Tiến trình học viên: **giữ nguyên** — `spss-mlp-progress-v1`, key `module:dNN` /
  `step:<guide>` không đổi; slug `d01`…`d14` giữ nguyên → không reset progress.
- Generated `src/content/docs/` tái sinh qua `npm run sync` (52 file, 54 trang).

## 11. Tái sử dụng mô phỏng SPSS (Task 12)

- Giữ nguyên kiến trúc `SpssMock`/`SPSSActionGuide`/`OSSelector`/`spss-guides.js`.
- Scenes `clinic_bp` cũ → `archive/visual-guides-clinic-bp/` (không xóa, không tái sử dụng
  vì sai dataset).
- **8 mô phỏng mới** cho Ngày 01–03 viết lại theo đúng dataset nguồn: tên file thật,
  biến thật (`GTinh`, `Cannang`, `HVan`, `CD.HA`, `Tuoi`), output = số liệu tổng hợp
  thật tái tính (620, 101/16,3%, 335/54,0%, Mean 66,9…); dòng grid chỉ minh họa (ghi chú).
- Phân tách rõ trong scene note: "số liệu thật (NOT_RUN)" vs "minh họa".

## 12. Tests đã chạy

| Kiểm tra | Kết quả |
|---|---|
| Trích xuất 2 PDF + đếm câu | 43 + 15 ✓ |
| `pyreadstat` đọc 9/9 `.sav` | PASS |
| Tái tính số liệu đáp án (pandas/scipy) | ghi `curriculum/exercise-verified-stats.md` — P1-Q01 (45kg, ID 89/167/429/507), Q02 (101, 16,3%), Q03/Q04 (66,9/10,93/119,43/62/71/CV 16,3%), Q38 (335, 54,0%), P1-Q43, P2-Q01…Q13 |
| Inventory completeness | 60 records, đủ P1-Q01–43 + P2-Q01–15 ✓ |
| `node website/scripts/check-scene-data.mjs` | **85 checks, 0 FAIL** |
| `npm run sync` | 52 file generated |
| `npm run build` (astro) | **PASS — 54 trang** |
| `{{exercise:}}`/`{{guide:}}` expand trong output | đã kiểm (`src-ex` ×1 d01 lesson, ×2 d02 workbook; `<SPSSActionGuide>` đủ 4+2+2) |

**NOT_RUN / chưa kiểm:** mọi bước menu SPSS (viết theo tài liệu IBM, chưa pilot trên
SPSS thật — `MAC_SPSS_VERIFICATION_PENDING`); không chạy trên macOS; mô phỏng chưa
human-review lần 2; percentiles SPSS có thể lệch nội suy vài phần mười so với numpy.

## 13. Quyền / riêng tư

- `exercises/bai_1`, `bai_2` **không được commit** — `.gitignore` chặn; file vẫn ở local.
  README trong `exercises/` cập nhật ghi rõ chính sách.
- `.workspace/` (text trích xuất PDF, stats JSON) cũng gitignore.
- Không copy nội dung đề nguyên văn lên website — chỉ tóm tắt + trỏ mã câu/trang.
- `.sav` là dữ liệu bệnh nhân/nghiên cứu ẩn danh của nguồn ngoài: **NEEDS_OWNER_VERIFICATION**
  cho quyền lưu hành; website không phục vụ file này (không route tải).
- Không phát hiện định danh cá nhân rõ ràng (tên, địa chỉ); vẫn khuyến nghị chủ kiểm trước
  khi dùng công khai.

## 14. Rủi ro sư phạm còn lại

1. Ngày 04–14 mới ở DRAFT — chưa có hướng dẫn từng bước/mô phỏng; học viên tự học ngay
   sẽ vấp ở các ngày này (đã hiển thị rõ banner DRAFT).
2. Một số câu đề mơ hồ ("nhận xét", "tỷ lệ" không ghi mẫu số) — cần lời giải mẫu khi
   hoàn thiện đáp án.
3. P1-Q05 % theo 2 chiều và P1-Q21 (Weight Cases) là điểm hay vấp — khi build D05 cần
   mô phỏng riêng cho Weight Cases.
4. `File1.sav` lệch tên biến với bảng mã hóa đề — workbook D09–11 phải dạy học viên cách
   tra biến (Label/Values) thay vì nhớ tên.
5. Chưa có bài kiểm tra "đầu vào" — giả định học viên có SPSS bản quyền và file local.

## 15. Git status & commit

- Old curriculum `track-14day/day-*` → `git mv` sang `archive/track-14day-clinic-bp/`;
  scenes cũ → `archive/visual-guides-clinic-bp/`; + `archive/README.md`.
- Mới: `track-14day/` (14 ngày exercise-first), `curriculum/` (roadmap + source-map +
  inventory + verified-stats), `reviews/TASK13-…` (file này), `scripts/gen_*.py`,
  scenes mới day01–03, cập nhật sync/check-scene-data/astro config/index/custom.css,
  `.gitignore` chặn exercises + .workspace, `exercises/README.md` cập nhật.
- Commit local: `Task 13: exercise-driven curriculum refactor` (xem git log).
- **Không push, không deploy** theo chỉ thị.

---

### Tệp đại diện đính kèm (latest-only)

- `track-14day/day-01-mo-file-bai-tap/lesson.md` — mẫu READY hoàn chỉnh (A–J + 4 mô phỏng).
- `track-14day/day-02-tan-so-phan-tram/workbook.md` — workbook gắn 2 bài nguồn + gợi ý nấc.
- `track-14day/day-03-mo-ta-bien-so/answer-key.md` — mẫu đáp án kiểm chứng.
- `website/public/visual-guides/day01/scenes.json` — 4 mô phỏng dataset thật.
- `curriculum/EXERCISE-FIRST-14-DAY-ROADMAP.md` · `curriculum/EXERCISE-SOURCE-MAP.md` ·
  `curriculum/exercise-inventory.json` · `curriculum/exercise-verified-stats.md`.
