# EXERCISE-SOURCE-MAP — Kiểm kê 58 bài tập nguồn (Task 13)

> Tạo từ `curriculum/exercise-inventory.json` (machine-readable — cùng file này được website dùng
> cho exercise card). Mọi ánh xạ dataset đã kiểm chứng bằng cách đọc trực tiếp file `.sav`
> (pyreadstat): tên biến, nhãn biến, nhãn giá trị, số quan sát, missing.
> **Quyền:** tài liệu gốc của bên thứ ba — file `.pdf`/`.sav` chỉ giữ local trong `exercises/`,
> không commit, không publish; phân phối lại: NEEDS_OWNER_VERIFICATION.

## 1. Nguồn tài liệu đã kiểm tra

| Gói | PDF | Trang | Số câu | File .sav kèm theo |
|---|---|---|---|---|
| Package 1 | `exercises/bai_1/Bai thuc hanh SDH P1.pdf` | 5 | 43 (Câu 1–43) | `p1_B01_HA (1).sav` (620×40) · `P1_B02 CrossTab (2).sav` (4×3) · `P1_B03 ROC.sav` (30×5) · `So_Lieu_NC.sav` (360×38, phụ) |
| Package 2 | `exercises/bai_2/BSNT_Bài TH_Phần 2_Cô Hiền.pdf` | 4 | 15 (Câu 1–15) + Bài TH3 không đánh số | `File1.sav` (50×18) · `File2_Phan2.sav` (12×3) · `File3_Phan2.sav` (20×2) · `File4_Phan2.sav` (30×5) · `File5_Phan2.sav` (296×7) |

## 2. Ánh xạ dataset → câu hỏi (đã kiểm chứng)

| File .sav | Câu hỏi dùng | Bằng chứng ánh xạ | Độ tin cậy |
|---|---|---|---|
| `p1_B01_HA (1).sav` | P1 Q01–Q14, Q17–Q20, Q22–Q43 | Có đủ mọi biến câu hỏi đòi: Tuoi, GTinh, HVan (không biết chữ), NNghiep, TTrang.KTe, 5 biến bệnh MT (nhị phân + danh mục Benh.MT_1/2), TSu.HA, HA 2 lần đo, CD.HA, Chieucao, Cannang, hút thuốc/rượu bia/muối/stress/TDTT | **VERIFIED** |
| `P1_B02 CrossTab (2).sav` | P1-Q21 | 4 dòng × benh/phoinhiem/soluong = bảng 2×2 HPV–UTCTC trong PDF | **VERIFIED** (cần Weight Cases) |
| `P1_B03 ROC.sav` | P1-Q15, Q16 | WBC/CRP/PCT + viemphoi (vi trùng/virus), n=30 đúng mô tả | **VERIFIED** |
| `So_Lieu_NC.sav` | — (không câu nào) | Biến bộ STEPS khác (B7–F31); thiếu NNghiep, TTrang.KTe, bệnh MT → không thể trả lời Q05/Q07/Q14 | **VERIFIED = dataset phụ** |
| `File1.sav` | P2 Q01–Q12 | 18 biến khớp 1:1 thứ tự phiếu điều tra & bảng mã hóa (omah…csa); n=50. PDF gọi "File1_Phan 2.sav" — cùng file | **VERIFIED** |
| `File2_Phan2.sav` | P2-Q13 | 12 bệnh nhân × Sogio_cothuoc/Sogio_placebo — thiết kế ghép cặp | **VERIFIED** |
| `File3_Phan2.sav` | P2-Q14 | PROCALCITONI + NDEAT; n=20. ⚠️ NDEAT có giá trị rác `H0` ở bản ghi đầu | **VERIFIED + cần làm sạch** |
| `File4_Phan2.sav` | P2-Q15 | AGE, HYPOTENSION, PROCALCITONIN, DEATH; HYPOTENSION/DEATH là chuỗi 0/1 | **VERIFIED + cần recode** |
| `File5_Phan2.sav` | Bài TH số 3 | 296×7: STT, Tuoi, Khám_TT, Siêu_âmTT, PSA, Thetich, Sinhthiet | **VERIFIED** |

## 3. Kiểm kê 58 câu

| ID | Trang | Tóm tắt (không sao chép nguyên văn) | Dataset | Kỹ năng SPSS | Độ khó | Vai trò → Ngày |
|---|---|---|---|---|---|---|
| P1-Q01 | 1 | Tìm mã số những người cân nặng nhỏ nhất, giới tính Nam (kèm tuổi) | p1_B01_HA (1).sav | Mở file .sav, Data View/Variable View | Beginner | core → d01 |
| P1-Q02 | 1 | Số lượng và tỷ lệ % người không biết chữ | p1_B01_HA (1).sav | Frequencies, đọc Frequency/Percent/Valid Percent | Beginner | core → d02 |
| P1-Q03 | 1 | Đại lượng TKMT cho Tuổi: mean, median, SD, phương sai, khoảng biến thiên, tứ vị 1, BPV 70 | p1_B01_HA (1).sav | Descriptives, Frequencies→Statistics (quartiles/percentiles) | Beginner | core → d03 |
| P1-Q04 | 1 | Mean, SD, min, max, khoảng biến thiên, hệ số tập trung (CV) của Tuổi | p1_B01_HA (1).sav | Descriptives, tính CV = SD/mean×100 | Beginner | core → d03 |
| P1-Q05 | 1 | Số lượng & % hộ Nghèo/Cận nghèo theo giới tính (% theo TTKT và % theo giới tính) | p1_B01_HA (1).sav | Crosstabs, % theo hàng vs % theo cột | Beginner | core → d05 |
| P1-Q06 | 1 | Mean, SD, khoảng biến thiên của Tuổi theo giới tính | p1_B01_HA (1).sav | Split File hoặc Means | Beginner | core → d04 |
| P1-Q07 | 1 | Bảng bệnh mạn tính theo 2 cách lưu: biến nhị phân nhiều cột vs biến danh mục; × giới tính | p1_B01_HA (1).sav | Multiple Response Sets, hiểu 2 cách lưu câu nhiều trả lời | Intermediate | optional → d07 |
| P1-Q08 | 2 | Chọn mẫu Nam → bảng tần số Học vấn; rồi chọn tuổi 50–70 → làm lại | p1_B01_HA (1).sav | Select Cases (điều kiện If), Frequencies trên mẫu con | Beginner | core → d04 |
| P1-Q09 | 2 | Tách file theo giới tính, lập tần số Học vấn và nhận xét | p1_B01_HA (1).sav | Split File, so sánh phân phối giữa nhóm | Beginner | core → d04 |
| P1-Q10 | 2 | Tạo biến BMI = Cannang/Chieucao²; thống kê mean, SD, min, max | p1_B01_HA (1).sav | Compute Variable, đơn vị (cm→m) | Beginner | core → d06 |
| P1-Q11 | 2 | Recode Tuổi → Độ tuổi (40–49→1, 50–59→2, 60–69→3, ≥70→4); tần số & số người ≥70 | p1_B01_HA (1).sav | Recode Into Different Variables, gắn nhãn giá trị mới | Beginner | core → d06 |
| P1-Q12 | 2 | Đếm số bệnh mạn tính mỗi người; bao nhiêu người có ≥2 bệnh | p1_B01_HA (1).sav | Count Values within Cases | Beginner | core → d06 |
| P1-Q13 | 2 | Số người đái tháo đường tuổi 50–70; số nam đái tháo đường tuổi 50–70 | p1_B01_HA (1).sav | Select Cases điều kiện kép, đếm trên mẫu con | Beginner | core → d07 |
| P1-Q14 | 2 | Kiểm tra biến Nghề nghiệp nhập sai; liệt kê mã số phiếu sai; loại khỏi dữ liệu | p1_B01_HA (1).sav | Frequencies săn lỗi, Sort/If để liệt kê | Beginner | core → d07 |
| P1-Q15 | 2 | ROC cho CRP — điểm cắt Se/Sp tối ưu phân biệt viêm phổi vi trùng/virus; Se, Sp, PPV, NPV, FPR, FNR | P1_B03 ROC.sav | ROC Curve, diagnostic accuracy | Advanced | deferred (extension) |
| P1-Q16 | 3 | So sánh giá trị chẩn đoán của Bạch cầu, CRP, PCT (ROC nhiều test) | P1_B03 ROC.sav | ROC nhiều biến, so sánh AUC | Advanced | deferred (extension) |
| P1-Q17 | 3 | Nhận xét tỷ lệ đái tháo đường theo giới tính; bệnh gan mạn theo giới tính | p1_B01_HA (1).sav | Crosstabs + Chi-square, diễn giải tỷ lệ | Beginner | core → d05 |
| P1-Q18 | 3 | Nhận xét tỷ lệ tiền sử rượu bia theo giới tính | p1_B01_HA (1).sav | Crosstabs + Chi-square | Beginner | core → d05 |
| P1-Q19 | 3 | Tỷ lệ mức độ dùng rượu bia theo TDTT; stress theo mức độ công việc | p1_B01_HA (1).sav | Crosstabs nhiều mức, Chi-square | Intermediate | optional → d05 |
| P1-Q20 | 3 | Tình trạng hút thuốc trước đây và hiện tại khác nhau thế nào | p1_B01_HA (1).sav | McNemar (tỷ lệ ghép cặp) | Intermediate | optional → d08 |
| P1-Q21 | 3 | Bệnh chứng HPV–ung thư CTC: nguy cơ mắc bệnh 2 nhóm phơi nhiễm (bảng 2×2 tổng hợp) | P1_B02 CrossTab (2).sav | Weight Cases, Crosstabs 2×2 | Intermediate | core → d05 |
| P1-Q22 | 3 | Kiểm định tỷ lệ giới tính có cùng phân phối tỷ lệ sinh sản (55:45; 40:60; 50:50) | p1_B01_HA (1).sav | Chi-square goodness-of-fit | Intermediate | core → d08 |
| P1-Q23 | 3 | Đại lượng BMI ở nhóm huyết áp bình thường (mean, SEM, mode, skewness, median) | p1_B01_HA (1).sav | Select Cases + Descriptives/Explore, Compute BMI | Intermediate | optional → d04 |
| P1-Q24 | 3 | Đại lượng cho HA tối đa & tối thiểu (trung bình 2 lần đo): mean, SEM, mode, P30, median | p1_B01_HA (1).sav | Compute trung bình 2 lần đo, percentiles | Intermediate | assessment → d14 |
| P1-Q25 | 3 | Đại lượng BMI theo nhóm tuổi 40–60 và 61–80 | p1_B01_HA (1).sav | Select/Visual Binning hoặc Split File, SEM | Intermediate | optional → d04 |
| P1-Q26 | 3 | Đại lượng HA tối đa trung bình theo trình độ học vấn (3 nhóm) | p1_B01_HA (1).sav | Recode nhóm, Means | Intermediate | assessment → d14 |
| P1-Q27 | 4 | Đại lượng Cân nặng theo tiền sử bệnh THA (Có/Không) | p1_B01_HA (1).sav | Recode nhị phân, Split File + Descriptives | Intermediate | optional → d04 |
| P1-Q28 | 4 | Đại lượng HA tối đa/tối thiểu lần 1 theo chẩn đoán HA (bình thường vs độ 1,2,3) | p1_B01_HA (1).sav | Recode nhóm chẩn đoán, Descriptives theo nhóm | Intermediate | assessment → d14 |
| P1-Q29 | 4 | Thống kê số lượng 1 vs 2 bệnh mạn tính ở đối tượng tăng HA độ 1,2,3 (+p) | p1_B01_HA (1).sav | Count + Select Cases + Crosstabs+Chi-square | Intermediate | optional → d05 |
| P1-Q30 | 4 | Đại lượng BMI ở người có 2 bệnh mạn tính | p1_B01_HA (1).sav | Count + Select + Descriptives | Intermediate | optional → d04 |
| P1-Q31 | 4 | Người mới phát hiện bệnh HA: học vấn × mức độ HA (+p) | p1_B01_HA (1).sav | Select Cases phối hợp, Crosstabs + Chi-square | Intermediate | assessment → d14 |
| P1-Q32 | 4 | Tỷ lệ các mức chẩn đoán cao HA theo giới tính | p1_B01_HA (1).sav | Crosstabs + Chi-square | Beginner | optional → d05 |
| P1-Q33 | 4 | Tỷ lệ các mức chẩn đoán cao HA theo bệnh mạn tính | p1_B01_HA (1).sav | Crosstabs + Chi-square | Intermediate | assessment → d14 |
| P1-Q34 | 4 | Tỷ lệ chẩn đoán cao HA theo chế độ dùng muối | p1_B01_HA (1).sav | Crosstabs + Chi-square | Intermediate | optional → d05 |
| P1-Q35 | 4 | Tỷ lệ cao HA theo stress ở người không tiền sử HA | p1_B01_HA (1).sav | Select Cases + Crosstabs | Intermediate | optional → d05 |
| P1-Q36 | 4 | Tỷ lệ cao HA (bình thường vs cao) theo ăn đủ rau | p1_B01_HA (1).sav | Recode nhị phân + Crosstabs | Intermediate | optional → d05 |
| P1-Q37 | 4 | Tỷ lệ cao HA (bình thường vs cao) theo mức độ công việc | p1_B01_HA (1).sav | Recode + Crosstabs | Intermediate | optional → d05 |
| P1-Q38 | 4 | Tỷ lệ chẩn đoán tình trạng cao HA (bình thường vs cao HA) | p1_B01_HA (1).sav | Frequencies, Recode nhị phân | Beginner | core → d02 |
| P1-Q39 | 4 | Phân bố tiền sử bản thân & gia đình mắc HA có đồng đều không | p1_B01_HA (1).sav | Chi-square GOF, đọc phân bố | Intermediate | optional → d08 |
| P1-Q40 | 4 | Khác biệt tỷ lệ uống rượu trước đây và hiện tại | p1_B01_HA (1).sav | McNemar, định nghĩa 'hiện tại' từ biến mức độ | Intermediate | core → d08 |
| P1-Q41 | 4 | Tuổi trung bình theo tiền sử HA gia đình và giới tính (bảng 2 chiều) | p1_B01_HA (1).sav | Means với 2 biến phân nhóm | Intermediate | core → d04 |
| P1-Q42 | 5 | Bảng đại lượng thống kê của huyết áp tối đa / tối thiểu | p1_B01_HA (1).sav | Descriptives nhiều biến | Beginner | optional → d03 |
| P1-Q43 | 5 | Bảng đại lượng Tuổi theo giới tính | p1_B01_HA (1).sav | Descriptives theo nhóm | Beginner | assessment → d14 |
| P2-Q01 | 3 | Mối liên quan giữa vị trí chấn thương nặng và có nằm viện | File1.sav | Crosstabs + Chi-square | Beginner | core → d05 |
| P2-Q02 | 3 | Tỷ lệ nam:nữ có phù hợp 0,5:0,5 không | File1.sav | Chi-square GOF | Beginner | core → d08 |
| P2-Q03 | 3 | Tỷ lệ nằm viện trong bệnh nhân nam có thể xem là 60% không | File1.sav | Binomial test trên mẫu con | Intermediate | core → d08 |
| P2-Q04 | 3 | CLCS trung bình trước tai nạn có thể xem là 75 không | File1.sav | One-sample t-test | Beginner | core → d09 |
| P2-Q05 | 3 | So sánh CLCS TB trước tai nạn ở Quảng Bình và Thừa Thiên Huế | File1.sav | Independent t-test trên 2 nhóm con (Select Cases) | Beginner | core → d09 |
| P2-Q06 | 3 | So sánh CLCS TB trước tai nạn ở 3 tỉnh | File1.sav | One-way ANOVA | Intermediate | core → d10 |
| P2-Q07 | 3 | So sánh tuổi TB bệnh nhân ở Quảng Bình và Quảng Trị | File1.sav | Independent t-test | Beginner | core → d09 |
| P2-Q08 | 3 | So sánh tuổi TB bệnh nhân ở 3 tỉnh | File1.sav | One-way ANOVA | Intermediate | assessment → d14 |
| P2-Q09 | 3 | So sánh CLCS TB trước–sau tai nạn: toàn mẫu, riêng Quảng Trị, riêng thành thị Quảng Trị | File1.sav | Paired-samples t-test, Select Cases cho b/c | Intermediate | core → d10 |
| P2-Q10 | 3 | Tương quan: CLCS sau~tuổi; CLCS sau~CLCS trước; CLCS trước~tuổi | File1.sav | Bivariate correlation, scatterplot | Beginner | core → d11 |
| P2-Q11 | 4 | Hồi quy tuyến tính đơn: csa~tuổi; csa~ytruo; ytruo~tuổi | File1.sav | Linear regression đơn biến, đọc R², hệ số | Intermediate | core → d11 |
| P2-Q12 | 4 | Hồi quy đa biến: csa ~ tuổi + số ngày nằm viện + CLCS trước | File1.sav | Multiple linear regression | Advanced | optional → d11 |
| P2-Q13 | 4 | Hiệu quả thuốc ngủ: số giờ ngủ khi uống thuốc vs giả dược | File2_Phan2.sav | Paired t-test | Beginner | core → d10 |
| P2-Q14 | 4 | Mối liên quan PCT máu và tiên lượng tử vong trong nhiễm trùng huyết | File3_Phan2.sav | ROC / prognostic, làm sạch dữ liệu lỗi ('H0') | Advanced | deferred (extension) |
| P2-Q15 | 4 | PCT + hạ huyết áp + tuổi → tiên lượng tử vong (đa biến) | File4_Phan2.sav | Logistic regression, biến chuỗi cần recode số | Advanced | deferred (extension) |
| P2-TH3 | 4 | File5: xử lý, phân tích số liệu và tập viết báo cáo nghiên cứu (n=296, sinh thiết tuyến tiền liệt) | File5_Phan2.sav | toàn bộ pipeline: khám phá → mô tả → bảng chéo → so sánh → tương quan → báo cáo | Intermediate | core → d12 |

## 4. Vấn đề dữ liệu phát hiện khi kiểm tra

1. **`GTinh` mã ngược:** trong `p1_B01_HA (1).sav`, `1 = Nữ, 2 = Nam` — khác trực giác phổ biến
   (nam=1). Mọi bài lọc giới phải nhắc học viên kiểm tra nhãn trước.
2. **`NNghiep` có lỗi nhập** (đúng như P1-Q14 kỳ vọng): giá trị `0` ×3 (ID 5, 184, 318),
   `8` ×2 (ID 375, 285), missing ×2 (ID 243, 305) → 7 phiếu sai/thiếu.
3. **`File3_Phan2.sav`:** `NDEAT` là chuỗi, bản ghi đầu chứa `H0` (rác) — cần sửa/xóa trước phân tích.
4. **`File4_Phan2.sav`:** `HYPOTENSION`, `DEATH` lưu dạng chuỗi `'0'`/`'1'` — phải recode số trước khi
   chạy mô hình.
5. **`File1.sav`:** tên biến lệch bảng mã hóa trong PDF (vd `htuo`↔`C1 tuoi`, `csa`↔`C12 CSsau`)
   nhưng thứ tự & nhãn giá trị khớp — ánh xạ theo vị trí, đã kiểm chứng từng biến.
6. **`TSu.HA`:** nhãn khai 4 mức (0,1,2,3) nhưng dữ liệu chỉ có {0:249, 2:107, 3:264} — không ai
   mang mã 1 ("< 1 năm"). Không phải lỗi, nhưng đáng chú ý khi đọc output.
7. **`So_Lieu_NC.sav`:** dataset thứ 4 của package 1 nhưng KHÔNG câu nào tham chiếu — giữ làm
   dataset luyện tự do; không bắt buộc trong lộ trình.

## 5. Chú thích vai trò

- **core → dNN:** nằm trong lộ trình chính ngày dNN (bắt buộc).
- **optional:** bài luyện thêm cùng chủ đề — đề xuất trong workbook, không bắt buộc.
- **assessment → d14:** giữ lại làm đánh giá cuối khóa (không dạy trước).
- **deferred:** ngoài khả năng dạy có trách nhiệm trong 14 ngày → extension track (E01…).
- **bonus:** tài nguyên thêm, không bài tập gắn sẵn.
