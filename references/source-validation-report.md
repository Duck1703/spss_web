# Source Validation Report — Task 02

- **Ngày kiểm chứng:** 2026-10-24 · **Người kiểm:** Devin
- **Phương pháp:** `webfetch` trực tiếp từng URL; khi trang JS chặn fetch → tìm đường truy cập chính thức thay thế (PDF deep link, trang support Q&A, báo cáo SPCR qua search index/reproduction). Không khai "verified" khi chỉ HTTP 200 mà không thấy nội dung.
- **Quy ước trường:** `URL_ACCESS` · `SOURCE_AUTHORITY` · `CONTENT_REVIEW` · `VERSION_RELEVANCE` · `CURRICULUM_APPLICABILITY` — giá trị `VERIFIED` / `PARTIALLY_VERIFIED` / `PENDING` / `FAILED` / `NOT_APPLICABLE`.

## Tóm tắt

| ID | URL_ACCESS | SOURCE_AUTHORITY | CONTENT_REVIEW | VERSION_RELEVANCE | CURRICULUM_APPLICABILITY | Trạng thái tổng |
|---|---|---|---|---|---|---|
| S01 | FAILED (portal JS) | VERIFIED | PENDING | VERIFIED (đúng docs SPSS 32) | VERIFIED — qua đường PDF thay thế | `PARTIALLY_VERIFIED` |
| S02 | VERIFIED | VERIFIED | VERIFIED | VERIFIED | VERIFIED | `VERIFIED` |
| S03 | VERIFIED | VERIFIED | PARTIALLY_VERIFIED | VERIFIED | VERIFIED (lý thuyết; labs dùng R) | `VERIFIED` |
| S04 | VERIFIED | VERIFIED | VERIFIED | PARTIALLY_VERIFIED (ví dụ SPSS cũ) | VERIFIED (bản đồ chọn test; không sao chép menu) | `VERIFIED` |
| S05 | VERIFIED | VERIFIED | VERIFIED | VERIFIED | VERIFIED | `VERIFIED` |
| S06 | VERIFIED | VERIFIED | VERIFIED | VERIFIED | VERIFIED | `VERIFIED` |
| S07 | VERIFIED | VERIFIED | VERIFIED | VERIFIED | VERIFIED | `VERIFIED` |
| S08 | VERIFIED | VERIFIED | VERIFIED | VERIFIED | VERIFIED | `VERIFIED` |
| S09 | VERIFIED | VERIFIED | VERIFIED | VERIFIED | VERIFIED (chỉ E03, kèm data agreement) | `VERIFIED` |
| S10 | FAILED (Salesforce JS) | VERIFIED (cùng domain IBM) | FAILED | — | Thay bằng S10a + S10b | `SUPERSEDED` (URL gốc) |
| S10a (mới) | VERIFIED | VERIFIED | VERIFIED | VERIFIED | VERIFIED | `VERIFIED` |
| S10b (mới) | VERIFIED | VERIFIED | VERIFIED | PARTIALLY_VERIFIED (blog 2020, vẫn đúng cơ chế) | VERIFIED | `VERIFIED` |

## Chi tiết từng nguồn

### S01 — IBM SPSS Statistics 32 docs portal
- URL: `https://www.ibm.com/docs/en/spss-statistics/32.0.0`
- **URL_ACCESS: FAILED** — fetch trả trang rỗng (portal render bằng JS; Task 01 + Task 02 đều xác nhận).
- **SOURCE_AUTHORITY: VERIFIED** — domain ibm.com/docs chính thức của IBM; nội dung phát hành IBM.
- **CONTENT_REVIEW: PENDING** — không đọc được nội dung portal qua fetch. **Đường truy cập thay thế đã kiểm chứng:** PDF deep links dạng `https://www.ibm.com/docs/en/SSLVMB_32.0.0/pdf/<file>.pdf` trả PDF thật (`%PDF-1.6`): đã xác minh `Authorized_User_License_Installation_Instructions_macOS.pdf` và `IBM_SPSS_Statistics_Command_Syntax_Reference.pdf` (2026-10-24). Danh mục PDF đầy đủ có tại S02.
- **VERSION_RELEVANCE: VERIFIED** — đúng bộ docs cho 32.0.0 (mục tiêu v1).
- **CURRICULUM_APPLICABILITY: VERIFIED** — nguồn chính thức cho menu/syntax/algorithms; truy cập qua PDF khi cần trích chứng.
- **Hạn chế truy cập:** nội dung có bản quyền IBM — link + trích dẫn, không phân phối lại PDF.
- **Đề xuất:** giữ S01 nhưng ghi truy cập "qua PDF deep-link"; TB-004 vẫn mở — snapshot mục lục portal bằng trình duyệt thật khi có điều kiện.

### S02 — IBM SPSS Statistics 32 Documentation (support page)
- URL: `https://www.ibm.com/support/pages/ibm-spss-statistics-32-documentation`
- **Tất cả trường: VERIFIED** (fetch thành công 2026-10-24). Trang "IBM SPSS Statistics 32.0.0.0 Documentation" liệt kê đầy đủ: hướng dẫn cài macOS (Authorized/Concurrent License, Getting Started with Installation and Licensing) + manuals (Base, Core System User Guide, Command Syntax Reference, Data Preparation, Regression, Advanced Statistics, Complex Samples, Exact Tests, Missing Values, Bootstrapping, Custom Tables…) — đủ cho mapping module→manual (R-07).
- **Licensing:** docs có bản quyền IBM — link, không lưu/phát hành lại.

### S03 — OpenIntro: Introductory Statistics for the Life and Biomedical Sciences (ISLBS)
- URL: `https://www.openintro.org/book/biostat/`
- **URL_ACCESS: VERIFIED**; **SOURCE_AUTHORITY: VERIFIED** — tác giả **Julie Vu** (Preceptor in Statistics, Harvard) & **David Harrington** (Professor of Biostatistics Emeritus, Harvard T.H. Chan/DFCI); phát sinh từ OpenIntro Statistics 3rd (Diez, Barr, Çetinkaya-Rundel). *Sửa attribution sai ở register cũ (T1-F3).*
- **CONTENT_REVIEW: PARTIALLY_VERIFIED** — đã xem trang sách + mục lục chương 1–8 + front matter PDF; chưa đọc từng chương (thuộc việc biên soạn từng module).
- **VERSION_RELEVANCE: VERIFIED** — First Edition ©2020 (version date 2021-08-08); vẫn là bản biostat chính của OpenIntro; labs/slides kèm.
- **CURRICULUM_APPLICABILITY: VERIFIED** — lý thuyết thống kê y sinh cho M01, M04–M11. **Phân biệt:** labs của sách dùng **R**, không phải SPSS → chỉ dùng cho khái niệm/ví dụ sư phạm; thao tác phần mềm lấy từ S01/S02.
- **Licensing: VERIFIED** — CC BY-SA 3.0 (ghi rõ trong front matter): được tải miễn phí, thích ứng + chia sẻ với ghi công & share-alike. Cho phép lưu PDF trong workspace cho biên soạn; khi phát hành học liệu vẫn ưu tiên link + viết lại.

### S04 — UCLA OARC: What statistical analysis should I use (SPSS)
- URL: `https://stats.oarc.ucla.edu/spss/whatstat/what-statistical-analysis-should-i-usestatistical-analyses-using-spss/`
- **URL_ACCESS / SOURCE_AUTHORITY / CONTENT_REVIEW: VERIFIED** (đọc được toàn trang 2026-10-24).
- **VERSION_RELEVANCE: PARTIALLY_VERIFIED** — nội dung thống kê còn hiệu lực, nhưng ví dụ dùng SPSS phiên bản cũ → menu/dialog không được sao chép vào giáo trình; phải đối chiếu SPSS 32 (S01/S02).
- **CURRICULUM_APPLICABILITY: VERIFIED** — bản đồ chọn phép kiểm định M06–M11; ví dụ output để đối chiếu diễn giải.
- **Licensing:** nội dung giáo dục mở để đọc; trích dẫn có nguồn.

### S05 — EQUATOR/SAMPL
- URL `https://www.equator-network.org/reporting-guidelines/sampl/` — **VERIFIED** mọi trường. Lang TA, Altman DG. Int J Nurs Stud. 2015;52(1):5-9; record cập nhật 2022-01-13; có link PDF checklist. Vai trò: chuẩn viết Methods/Results (M05, M08, M12, toàn bài viết kết quả).
- **Licensing:** guideline mở truy cập; trích dẫn citation đầy đủ.

### S06 — EQUATOR/STROBE
- URL `.../strobe/` — **VERIFIED** mọi trường. STROBE 2007 (von Elm et al., đồng xuất bản 8 journals), checklist cohort/case-control/cross-sectional Word+PDF có sẵn; vẫn là version hiện hành. Vai trò: M12 capstone (nghiên cứu quan sát), nền M08.

### S07 — EQUATOR/CONSORT
- URL `.../consort/` — **VERIFIED** mọi trường. Trang hiển thị **CONSORT 2025** (Hopewell et al., BMJ 2025;388:e081123 + JAMA/Lancet/Nat Med/PLoS Med) — khớp Blueprint "CONSORT 2025"; bản 2025 thay thế CONSORT 2010 → giáo trình phải dùng 2025. Vai trò: M12 (RCT), bối cảnh M06.

### S08 — EQUATOR/STARD
- URL `.../stard/` — **VERIFIED** mọi trường. STARD 2015 (Bossuyt et al., BMJ 2015;351:h5527) + checklist/flow diagram; STARD 2003 đã superseded (trang tự ghi) — dùng 2015. Vai trò: E01, nền M08.

### S09 — CDC NHANES Sample Design tutorial
- URL `https://wwwn.cdc.gov/nchs/nhanes/tutorials/SampleDesign.aspx` — **VERIFIED** mọi trường. Trang tutorials NHANES mở được; modules Sample Design/Weighting/Variance Estimation hiện diện. Vai trò: E03 duy nhất.
- **Licensing/truy cập:** tutorials công khai; **dữ liệu NHANES đi kèm Data User Agreement** — ghi rõ khi E03 được thiết kế.

### S10 — IBM mysupport defect notice (Apple Silicon)
- URL gốc: `https://www.ibm.com/mysupport/s/defect/aCIgJ000000HGefWAG/dt495860?language=en_US`
- **URL_ACCESS: FAILED** — Salesforce/JS ("CSS Error"); Task 01 + Task 02 đều không mở được.
- **Quyết định:** đánh dấu `SUPERSEDED` cho URL gốc; vai trò thông tin được thay bằng 2 nguồn chính thức dưới đây. Không xóa dòng S10 khỏi register (giữ lịch sử).

### S10a — IBM Support Q&A: ARM architecture (thay thế chính thức) — MỚI
- URL: `https://www.ibm.com/support/pages/are-ibm-spss-client-products-supported-arm-architecture-devices`
- **VERIFIED** mọi trường (fetch thành công; modified 19 June 2026): "supported on Intel Macs and Intel/AMD x86_64…"; footnote: **từ SPSS 27.0.1.0 + macOS 11.0 (Big Sur), SPSS Statistics for macOS được hỗ trợ trên Apple Silicon**; trỏ SPCR.
- Vai trò: preflight M02, quyết định D-003.

### S10b — IBM Community blog: SPSS on macOS Big Sur (cơ chế Rosetta 2) — MỚI
- URL: `https://community.ibm.com/community/user/ai-datascience/blogs/todd-peterson1/2020/11/20/spss-statistics-on-macos-big-sur-110`
- **VERIFIED** (fetch thành công; Todd Peterson/IBM, 2020-11-20): "SPSS Statistics is designed for the Intel chip architecture… will still work on the new M1 hardware… due to an Apple supplied technology called 'Rosetta 2'". Xác nhận cơ chế: **SPSS bản Intel chạy trên Apple Silicon qua Rosetta 2**.
- **VERSION_RELEVANCE: PARTIALLY_VERIFIED** — viết cho bản 27/Big Sur nhưng cơ chế Rosetta vẫn đúng cho bản Intel mới hơn (khớp S10a + SPCR).

### S11 — IBM SPCR cho SPSS Statistics 32.0.0.0 — MỚI (bổ sung)
- URL: `https://www.ibm.com/software/reports/compatibility/clarity-reports/report/html/softwareReqsForProduct?deliverableId=788A8F840F664D6BB6C09C290CC7D709` (và cổng `clarity/index.html?name=IBM+SPSS+Statistics`)
- **URL_ACCESS: FAILED** — app yêu cầu JavaScript. **Nhưng** nội dung Mac OS đọc được qua reproduction của SPCR trên trang vendor (ualberta.onthehub.com, đã fetch được): `macOS Sequoia 15.0 | x86-64 | 64-Exploit | 32.0.0.0` và `macOS Tahoe 26.0 | ARM64 | 64-Exploit | 32.0.0.0 | note (1)`; phần cứng Mac: 4GB disk, 4GB RAM (8 khuyến nghị), 1024×768.
- **CONTENT_REVIEW: PARTIALLY_VERIFIED** — dữ liệu từ SPCR nhưng qua bên thứ ba; **bắt buộc mở SPCR bằng trình duyệt thật trước khi chốt tương thích** (TB-003/TB-004).
- Ý nghĩa: bảng SPCR này là căn cứ chính thức duy nhất cho tuyên bố Blueprint "macOS 15 và 26 được hỗ trợ" → cập nhật D-004 thành `PARTIALLY_VERIFIED` (xem `MAC-SPSS-PREFLIGHT.md`).

## Gaps còn lại

1. SPCR cần mở bằng trình duyệt thật để xác nhận trực tiếp hàng macOS + footnote (1) (ARM64/Rosetta).
2. Chưa kiểm chứng module→tính năng chính thức (Regression/Survival/Complex Samples/Exact Tests chứa gì) — có tên PDF manuals tại S02, cần đọc nội dung khi thiết kế M08/E01–E03 (R-07).
3. Chưa xác minh ngày phát hành SPSS 32 chính thức (trang download yêu cầu PAO sign-in).
4. UCLA OARC: các trang con khác (annotated output từng test) chưa mở — theo nhu cầu module.
