# Source Register — Đăng ký nguồn học thuật

- **Khởi tạo:** 2026-10-24 · **Cập nhật:** 2026-10-24 (Task 02 — sau `source-validation-report.md`)
- **Quy tắc:** một nguồn chỉ được ghi `VERIFIED_SOURCE` khi URL thực sự được mở thành công và nội dung khớp mô tả. Ngày kiểm tra ghi ngày thật. Không đóng gói/phân phối PDF có bản quyền.
- **Trạng thái hợp lệ:** `VERIFIED_SOURCE` · `PENDING_VERIFICATION` · `SUPERSEDED` · `UNAVAILABLE`
- **Lịch sử thay đổi:** cuối file.

## Bảng đăng ký

| ID | Tổ chức/Tác giả | Tiêu đề | URL | Module liên quan | Mục đích sử dụng | Trạng thái | Chi tiết version/ấn bản đã kiểm | Ngày kiểm gần nhất |
|---|---|---|---|---|---|---|---|---|
| S01 | IBM | IBM SPSS Statistics 32 Documentation (docs portal) | https://www.ibm.com/docs/en/spss-statistics/32.0.0 | M02–M12 (tham chiếu menu/syntax/thuật toán) | Nguồn chính thức về menu, thuật toán, cú pháp, version | `PENDING_VERIFICATION` (portal yêu cầu JS) | Portal không đọc được qua fetch; **đường thay thế đã kiểm chứng:** PDF deep links `ibm.com/docs/en/SSLVMB_32.0.0/pdf/…` trả PDF thật (đã mở `Authorized_User_License_Installation_Instructions_macOS.pdf` + `IBM_SPSS_Statistics_Command_Syntax_Reference.pdf`) | 2026-10-24 |
| S02 | IBM | IBM SPSS Statistics 32 Documentation (support page, PDF manuals) | https://www.ibm.com/support/pages/ibm-spss-statistics-32-documentation | M02, M03, E03 (+ R-07 module mapping) | Manual chi tiết; hướng dẫn cài macOS; danh mục manuals | `VERIFIED_SOURCE` | Trang "IBM SPSS Statistics 32.0.0.0 Documentation"; liệt kê đủ PDF cài macOS + manuals (Base, Command Syntax Reference, Regression, Complex Samples, Exact Tests, Missing Values…) | 2026-10-24 |
| S03 | OpenIntro — **Julie Vu (Harvard) & David Harrington (Harvard/DFCI)**; derivative của OpenIntro Statistics 3rd (Diez, Barr, Çetinkaya-Rundel) | Introductory Statistics for the Life and Biomedical Sciences (ISLBS) | https://www.openintro.org/book/biostat/ | M01, M04–M11 | Khái niệm nhập môn qua tình huống y sinh; khung sư phạm; **labs dùng R — chỉ lấy lý thuyết** | `VERIFIED_SOURCE` | First Edition ©2020, version date 2021-08-08; **license CC BY-SA 3.0** (cho phép tải + thích ứng có ghi công); PDF miễn phí | 2026-10-24 |
| S04 | UCLA OARC (Office of Advanced Research Computing) | What statistical analysis should I use? Statistical analyses using SPSS | https://stats.oarc.ucla.edu/spss/whatstat/what-statistical-analysis-should-i-usestatistical-analyses-using-spss/ | M06–M11 | Bản đồ chọn phép kiểm định; ví dụ syntax/output để đối chiếu | `VERIFIED_SOURCE` | Trang mở được, đúng nội dung; **ví dụ SPSS phiên bản cũ → không sao chép menu**, đối chiếu lại trên SPSS 32 | 2026-10-24 |
| S05 | EQUATOR Network (Lang TA, Altman DG) | SAMPL Guidelines — Statistical Analyses and Methods in the Published Literature | https://www.equator-network.org/reporting-guidelines/sampl/ | M05, M08, M12 (+ mọi bài viết kết quả) | Chuẩn viết Methods/Results thống kê | `VERIFIED_SOURCE` | Int J Nurs Stud. 2015;52(1):5-9; record cập nhật 2022-01-13; link PDF checklist | 2026-10-24 |
| S06 | EQUATOR Network (von Elm E, et al.) | STROBE Statement — reporting observational studies | https://www.equator-network.org/reporting-guidelines/strobe/ | M12 (+ M08 bối cảnh quan sát) | Checklist báo cáo nghiên cứu quan sát | `VERIFIED_SOURCE` | STROBE 2007 (đồng xuất bản 8 journals); checklist cohort/case-control/cross-sectional Word/PDF | 2026-10-24 |
| S07 | EQUATOR Network / CONSORT group (Hopewell S, et al.) | CONSORT 2025 Statement — reporting randomised trials | https://www.equator-network.org/reporting-guidelines/consort/ | M12 (+ M06 bối cảnh so sánh nhóm) | Checklist báo cáo RCT | `VERIFIED_SOURCE` | **CONSORT 2025** (BMJ 2025;388:e081123…) — thay thế CONSORT 2010, dùng bản 2025 | 2026-10-24 |
| S08 | EQUATOR Network (Bossuyt PM, et al., STARD Group) | STARD 2015 — reporting diagnostic accuracy studies | https://www.equator-network.org/reporting-guidelines/stard/ | E01 (+ M08 nền) | Checklist báo cáo độ chính xác chẩn đoán | `VERIFIED_SOURCE` | STARD 2015 (BMJ 2015;351:h5527); STARD 2003 đã superseded | 2026-10-24 |
| S09 | CDC / NCHS | NHANES Tutorials — Sample Design module | https://wwwn.cdc.gov/nchs/nhanes/tutorials/SampleDesign.aspx | E03 | Nguyên tắc thiết kế mẫu phức tạp, trọng số, strata/PSU | `VERIFIED_SOURCE` | Tutorials mở được; modules Sample Design/Weighting/Variance hiện diện; **dữ liệu NHANES kèm Data User Agreement** | 2026-10-24 |
| S10 | IBM (mysupport defect notice) | Apple Silicon / Rosetta / SPSS 33 support notice | https://www.ibm.com/mysupport/s/defect/aCIgJ000000HGefWAG/dt495860?language=en_US | M02 (preflight), D-003 | Ghi nhận kiến trúc Intel/Rosetta/bản 33 | `SUPERSEDED` — trang Salesforce/JS không mở được (cả Task 01 lẫn Task 02); vai trò được thay bằng S10a + S10b | — | 2026-10-24 |
| S10a | IBM Support | Q&A: Are IBM SPSS client products supported on ARM architecture devices? | https://www.ibm.com/support/pages/are-ibm-spss-client-products-supported-arm-architecture-devices | M02, D-003, preflight | Xác nhận chính thức: hỗ trợ Intel Macs + x86_64; **từ 27.0.1.0 + macOS 11 Big Sur hỗ trợ Apple Silicon**; trỏ SPCR | `VERIFIED_SOURCE` | Trang support chính thức, modified 2026-06-19 | 2026-10-24 |
| S10b | IBM Community (Todd Peterson, IBM) | SPSS Statistics on macOS Big Sur (11.0) | https://community.ibm.com/community/user/ai-datascience/blogs/todd-peterson1/2020/11/20/spss-statistics-on-macos-big-sur-110 | M02, D-003 | Xác nhận cơ chế: SPSS bản **Intel chạy trên Apple Silicon qua Rosetta 2** | `VERIFIED_SOURCE` | Blog IBM Community 2020-11-20; cơ chế vẫn đúng cho bản Intel mới hơn | 2026-10-24 |
| S11 | IBM | Software Product Compatibility Report (SPCR) — SPSS Statistics 32.0.0.0 | https://www.ibm.com/software/reports/compatibility/clarity-reports/report/html/softwareReqsForProduct?deliverableId=788A8F840F664D6BB6C09C290CC7D709 (cổng: https://www.ibm.com/software/reports/compatibility/clarity/index.html?name=IBM+SPSS+Statistics) | M02, M03, D-003/D-004, preflight | Bảng tương thích OS/hardware chính thức của IBM | `PENDING_VERIFICATION` (app yêu cầu JS) | Hàng macOS đọc được qua reproduction vendor của SPCR: **macOS Sequoia 15.0 (x86-64) + macOS Tahoe 26.0 (ARM64, note 1)**; 4GB disk / 4GB RAM (8 rec) / 1024×768 — **bắt buộc mở bằng trình duyệt trước khi chốt** | 2026-10-24 |
| S12 | BMJ (Matthews AA, Danaei G, Islam N, Kurth T) | Target trial emulation: applying principles of randomised trials to observational studies | https://www.bmj.com/content/378/bmj-2022-071108 (doi:10.1136/bmj-2022-071108) | M01 (nghiên cứu nhân quả từ dữ liệu quan sát), M05+, M12 | Cân bằng "quan sát vs thực nghiệm": RCT ưu tiên nhưng không duy nhất | `VERIFIED_SOURCE` | BMJ 2022;378:e071108, published 2022-08-30; abstract/metadata trích qua search extract (direct fetch bị 403) — full-text spot-check cho Pass 4 | 2026-10-24 |

## Tóm tắt trạng thái (sau Task 02)

- `VERIFIED_SOURCE`: **11** (S02, S03, S04, S05, S06, S07, S08, S09, S10a, S10b, S12 — S10a/b/S12 là bổ sung).
- `PENDING_VERIFICATION`: **2** (S01 portal — có đường PDF thay thế đã kiểm chứng; S11 SPCR — dữ liệu gián tiếp).
- `SUPERSEDED`: **1** (S10 URL gốc — thay bằng S10a + S10b).
- `UNAVAILABLE`: 0.

## Quy tắc sử dụng nguồn (nhắc từ Blueprint §8)

1. Giáo trình viết lại bằng lời riêng; trích dẫn metadata đầy đủ (tiêu đề, tác giả/tổ chức, URL, ngày truy cập, bản tài liệu).
2. UCLA OARC (S04) dùng SPSS phiên bản cũ → nguồn thống kê và đối chiếu, **không** sao chép đường dẫn menu — menu chốt theo S01/S02 sau khi chạy thật.
3. Snapshot tài liệu quan trọng vào `references/snapshots/` khi có điều kiện, ghi ngày chụp.
4. Khi nguồn thay đổi/không truy cập được: cập nhật trạng thái + mở finding nếu nội dung đã xuất bản dựa trên nguồn đó.
5. **Phân biệt lý thuyết vs thao tác phần mềm:** khái niệm thống kê lấy S03/S04/EQUATOR; đường dẫn menu/syntax chỉ lấy S01/S02 đúng version.

## Lịch sử thay đổi register

| Ngày | Thay đổi | Căn cứ |
|---|---|---|
| 2026-10-24 | Khởi tạo 10 nguồn S01–S10; 8 VERIFIED, S01/S10 PENDING | Task 01 |
| 2026-10-24 | Sửa tác giả S03 → Vu & Harrington (lỗi T1-F3); S10 → SUPERSEDED; thêm S10a, S10b (VERIFIED), S11 (PENDING); bổ sung license OpenIntro CC BY-SA 3.0; ghi đường PDF thay thế cho S01 | `source-validation-report.md` |
| 2026-10-24 | Thêm S12 (BMJ 2022;378:e071108, target trial emulation) phục vụ claim nhân quả-quan sát M01; S03 nâng cấp bằng chứng (đã trích nguyên văn §1.2/§1.3 từ PDF chính thức) | Task 05 remediation (review M01-02, M01-05) |
