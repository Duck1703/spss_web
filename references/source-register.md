# Source Register — Đăng ký nguồn học thuật

- **Khởi tạo:** 2026-10-24
- **Quy tắc:** một nguồn chỉ được ghi `VERIFIED_SOURCE` khi URL thực sự được mở thành công và nội dung khớp mô tả. Ngày kiểm tra ghi ngày thật. Không đóng gói/phân phối PDF có bản quyền.
- **Trạng thái hợp lệ:** `VERIFIED_SOURCE` · `PENDING_VERIFICATION` · `SUPERSEDED` · `UNAVAILABLE`

## Bảng đăng ký

| ID | Tổ chức/Tác giả | Tiêu đề | URL | Module liên quan | Mục đích sử dụng | Trạng thái | Chi tiết version/ấn bản đã kiểm | Ngày kiểm gần nhất |
|---|---|---|---|---|---|---|---|---|
| S01 | IBM | IBM SPSS Statistics 32 Documentation (docs portal) | https://www.ibm.com/docs/en/spss-statistics/32.0.0 | M02–M12 (tham chiếu menu/syntax/thuật toán) | Nguồn chính thức về menu, thuật toán, cú pháp, version | `PENDING_VERIFICATION` | Fetch chỉ trả về trang rỗng (portal render bằng JS) — cần mở bằng trình duyệt + snapshot | 2026-10-24 |
| S02 | IBM | IBM SPSS Statistics 32 Documentation (support page, PDF manuals) | https://www.ibm.com/support/pages/ibm-spss-statistics-32-documentation | M02, M03, E03 | Manual chi tiết; hướng dẫn cài macOS (Authorized/Concurrent License); Command Syntax Reference; module manuals (Regression, Complex Samples…) | `VERIFIED_SOURCE` | Trang "IBM SPSS Statistics 32.0.0.0 Documentation" mở được; liệt kê đủ PDF hướng dẫn cài macOS + manuals (Base, Command Syntax Reference, Regression, Complex Samples, Exact Tests…) | 2026-10-24 |
| S03 | OpenIntro (tác giả chính thường dẫn: Diez, Çetinkaya-Rundel, Barr; bản "life & biomedical" của OpenIntro) | Introductory Statistics for the Life and Biomedical Sciences | https://www.openintro.org/book/biostat/ | M01, M04–M11 | Kiến thức nhập môn qua tình huống y sinh; khung sư phạm; PDF miễn phí (trang xác nhận "FREE — Textbook PDF (1st Edition)") | `VERIFIED_SOURCE` | Trang sách mở được; First Edition; kèm labs + slides + problem sets (một số chỉ cho Verified Teachers) | 2026-10-24 |
| S04 | UCLA OARC (Office of Advanced Research Computing) | What statistical analysis should I use? Statistical analyses using SPSS | https://stats.oarc.ucla.edu/spss/whatstat/what-statistical-analysis-should-i-usestatistical-analyses-using-spss/ | M06–M11 | Bản đồ chọn phép kiểm định; ví dụ syntax + output để đối chiếu | `VERIFIED_SOURCE` | Trang mở được, đúng nội dung chọn test bằng SPSS (t-test, crosstabs, ANOVA, regression…) — dùng SPSS phiên bản cũ → chỉ đối chiếu thống kê, không sao chép menu | 2026-10-24 |
| S05 | EQUATOR Network (Lang TA, Altman DG) | SAMPL Guidelines — Statistical Analyses and Methods in the Published Literature | https://www.equator-network.org/reporting-guidelines/sampl/ | M05, M08, M12 (+ mọi bài viết kết quả) | Chuẩn viết phần Methods/Results thống kê | `VERIFIED_SOURCE` | Trang EQUATOR mở được; trích dẫn Lang TA, Altman DG. Int J Nurs Stud. 2015;52(1):5-9; có link PDF checklist | 2026-10-24 |
| S06 | EQUATOR Network (von Elm E, et al.) | STROBE Statement — reporting observational studies | https://www.equator-network.org/reporting-guidelines/strobe/ | M12 (+ M08 bối cảnh quan sát) | Checklist báo cáo nghiên cứu quan sát cho capstone | `VERIFIED_SOURCE` | Trang mở được; STROBE 2007 (Ann Intern Med/PLoS Med/BMJ/Lancet…); checklist cohort/case-control/cross-sectional có sẵn Word/PDF | 2026-10-24 |
| S07 | EQUATOR Network / CONSORT group (Hopewell S, et al.) | CONSORT 2025 Statement — reporting randomised trials | https://www.equator-network.org/reporting-guidelines/consort/ | M12 (+ M06 bối cảnh so sánh nhóm) | Checklist báo cáo RCT | `VERIFIED_SOURCE` | Trang mở được; **CONSORT 2025** (BMJ 2025;388:e081123, đồng xuất bản JAMA/Lancet/Nat Med/PLoS Med) — đúng bản Blueprint nêu "CONSORT 2025" | 2026-10-24 |
| S08 | EQUATOR Network (Bossuyt PM, et al., STARD Group) | STARD 2015 — reporting diagnostic accuracy studies | https://www.equator-network.org/reporting-guidelines/stard/ | E01 (+ M08 nền) | Checklist báo cáo độ chính xác chẩn đoán | `VERIFIED_SOURCE` | Trang mở được; STARD 2015 (BMJ 2015;351:h5527); checklist + flow diagram có sẵn | 2026-10-24 |
| S09 | CDC / NCHS | NHANES Tutorials — Sample Design module | https://wwwn.cdc.gov/nchs/nhanes/tutorials/SampleDesign.aspx | E03 | Nguyên tắc thiết kế mẫu phức tạp, trọng số, strata/PSU | `VERIFIED_SOURCE` | Trang mở được trong hệ tutorials NHANES (Sample Design, Weighting, Variance Estimation modules hiện diện) | 2026-10-24 |
| S10 | IBM (mysupport defect notice) | Apple Silicon / Rosetta / SPSS 33 support notice | https://www.ibm.com/mysupport/s/defect/aCIgJ000000HGefWAG/dt495860?language=en_US | M02 (preflight), quyết định D-003 | Ghi nhận kiến trúc Intel/Rosetta và thông tin bản 33 | `PENDING_VERIFICATION` | Trang Salesforce yêu cầu JS — fetch thất bại ("CSS Error"); cần mở bằng trình duyệt hoặc tìm tài liệu IBM thay thế tương đương | 2026-10-24 |

## Tóm tắt trạng thái

- `VERIFIED_SOURCE`: **8/10** (S02–S09) — mở được và nội dung khớp mô tả.
- `PENDING_VERIFICATION`: **2/10** (S01, S10) — kỹ thuật trang chặn fetch; chưa được xem nội dung → mọi claim dựa trên 2 nguồn này tạm thời không được coi là đã trích chứng.
- `SUPERSEDED` / `UNAVAILABLE`: chưa có.

## Quy tắc sử dụng nguồn (nhắc từ Blueprint §8)

1. Giáo trình viết lại bằng lời riêng; trích dẫn metadata đầy đủ (tiêu đề, tác giả/tổ chức, URL, ngày truy cập, bản tài liệu).
2. UCLA OARC (S04) dùng SPSS phiên bản cũ → nguồn thống kê và đối chiếu, **không** sao chép đường dẫn menu — menu chốt theo S01/S02 sau khi chạy thật.
3. Snapshot tài liệu quan trọng vào `references/snapshots/` khi có điều kiện, ghi ngày chụp.
4. Khi nguồn thay đổi/không truy cập được: cập nhật trạng thái + mở finding nếu nội dung đã xuất bản dựa trên nguồn đó.
