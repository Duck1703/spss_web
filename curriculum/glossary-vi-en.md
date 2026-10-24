# Glossary Việt–Anh — Thuật ngữ thống kê cho người mới

> Cách dùng: tra khi gặp từ lạ trong bài học. Định nghĩa viết bằng lời đời thường trước, thuật ngữ Anh trong ngoặc. Bảng này sẽ được bổ sung theo tiến độ biên soạn — phiên bản hiện tại phủ M01–M05 (phạm vi pilot + nền).
> Quy ước trong giáo trình: tiếng Việt trước, thuật ngữ Anh trong ngoặc ở lần xuất hiện đầu (theo Blueprint header).

## A. Nghiên cứu và dữ liệu (M01–M03)

| Tiếng Việt | English | Giải thích dễ hiểu |
|---|---|---|
| Đơn vị quan sát | observation unit | "Một dòng là ai/cái gì?" — ví dụ: mỗi dòng là một bệnh nhân. Câu trả lời khác nhau → cách phân tích khác nhau. |
| Biến | variable | Đặc điểm được ghi lại cho mỗi đơn vị quan sát (tuổi, giới, huyết áp). Mỗi biến là một cột. |
| Biến định tính | categorical variable | Biến chia nhóm: giới tính, có/không bệnh. Không cộng trừ được. |
| Biến định lượng | quantitative/numeric variable | Biến đo được bằng số có ý nghĩa toán: tuổi, BMI, huyết áp. |
| Biến danh định | nominal variable | Định tính, các nhóm không có thứ tự (nhóm máu A/B/O/AB). |
| Biến thứ bậc | ordinal variable | Định tính, các nhóm có thứ tự nhưng khoảng cách không đều (nhẹ/trung bình/nặng). |
| Thang đo | measurement level (Measure) | Cách SPSS phân loại biến: Nominal / Ordinal / Scale — chọn sai ảnh hưởng phép kiểm định gợi ý. |
| Quần thể | population | Toàn bộ nhóm người ta muốn nói về (mọi bệnh nhân tăng huyết áp ở VN). |
| Mẫu | sample | Nhóm thực tế được đo trong nghiên cứu — một phần của quần thể. |
| Suy luận | inference | Việc rút kết luận về quần thể từ mẫu — luôn kèm bất định. |
| Mô tả | description/descriptive | Tóm tắt dữ liệu *trong mẫu mình có* (trung bình tuổi của 160 hồ sơ). |
| Liên quan / tương quan | association / correlation | Hai thứ thay đổi cùng nhau — **không có nghĩa cái này gây cái kia**. |
| Nhân quả | causation | Cái này thật sự làm cái kia thay đổi — cần thiết kế + phân tích thích hợp (thử nghiệm ngẫu nhiên là chuẩn ưu tiên cho can thiệp; quan sát vẫn có thể lập luận nhân quả khi xử lý được nhiễu). |
| Codebook | codebook/data dictionary | "Sổ tay" của bộ dữ liệu: tên biến, ý nghĩa, đơn vị, mã, giá trị missing. |
| Dữ liệu khuyết | missing data | Ô trống/không có thông tin. Phải ghi rõ mã missing, đừng để SPSS đoán. |
| Giá trị bất thường | outlier | Số liệu xa hẳn phần còn lại — có thể lỗi nhập, có thể thật: phải kiểm tra, không xóa bừa. |
| File raw | raw data file | File gốc chưa chỉnh sửa — giữ bất biến, mọi sửa chữa làm trên bản sao. |
| Dữ liệu giả lập | simulated/synthetic data | Dữ liệu do máy tạo ra để luyện tập — **không phải bệnh nhân thật, không phải bằng chứng lâm sàng**. |

## B. Mô tả và suy luận (M04–M05)

| Tiếng Việt | English | Giải thích dễ hiểu |
|---|---|---|
| Tần số | frequency | Có bao nhiêu quan sát rơi vào mỗi nhóm. |
| Tỷ lệ / phần trăm | proportion / percentage | Một phần của tổng: 40/160 = 25%. |
| Trung bình | mean | Cộng tất cả chia số lượng — nhạy với giá trị cực trị. |
| Trung vị | median | Giá trị đứng giữa khi xếp từ nhỏ đến lớn — vững hơn khi dữ liệu lệch. |
| Độ lệch chuẩn | standard deviation (SD) | Mức độ các số nằm rải quanh trung bình (cùng đơn vị với biến). |
| Khoảng tứ phân vị | interquartile range (IQR) | Khoảng chứa 50% giữa của dữ liệu — đi kèm median. |
| Phân phối | distribution | Hình dạng các giá trị trải ra — quyết định nên tả bằng mean hay median. |
| Biến thiên do lấy mẫu | sampling variability | Lấy mẫu khác → số khác. Đó là chuyện bình thường, không phải lỗi. |
| Khoảng tin cậy 95% | 95% confidence interval (CI) | Khoảng ước lượng cho giá trị thật của quần thể; rộng/hẹp nói lên độ chắc của ước lượng. |
| Giả thuyết không | null hypothesis (H0) | Giả định "không có khác biệt/liên quan" để đối chiếu dữ liệu. |
| Giá trị p | p-value | Xác suất thấy dữ liệu (hoặc cực đoan hơn) *nếu H0 đúng* — **không phải** "xác suất H0 đúng". |
| Ý nghĩa thống kê | statistical significance | Đạt ngưỡng quy ước (thường p < 0,05) — chỉ là nhãn toán học. |
| Ý nghĩa lâm sàng | clinical significance | Khác biệt đủ lớn để quan trọng với bệnh nhân — khác hẳn ý nghĩa thống kê. |
| Cỡ hiệu ứng | effect size | Độ lớn của khác biệt/liên quan — thứ quan trọng hơn p-value. |
| Sai lầm loại I | type I error | Kết luận "có" khi thật ra "không" (báo động giả). |
| Sai lầm loại II | type II error | Kết luận "không" khi thật ra "có" (bỏ sót). |
| Power | statistical power | Khả năng phát hiện hiệu ứng thật nếu nó tồn tại — liên quan cỡ mẫu. |

## C. So sánh và liên quan (M06–M11 — sẽ mở rộng khi biên soạn các module này)

| Tiếng Việt | English | Giải thích dễ hiểu |
|---|---|---|
| Thiết kế độc lập | independent groups | Hai nhóm người khác nhau (nhóm A vs nhóm B). |
| Thiết kế ghép cặp | paired design | Cùng một người đo 2 lần (trước/sau) — phân tích khác với 2 nhóm. |
| Kiểm định t | t-test | Phép so sánh trung bình — cần giả định về phân phối/phương sai. |
| Kiểm định phi tham số | nonparametric test | Phép so sánh dùng thứ hạng, dùng khi giả định t-test không hợp (Mann–Whitney, Wilcoxon). |
| Bảng chéo | crosstabulation (crosstabs) | Bảng đếm theo 2 biến định tính — nền của Chi-square. |
| Tỷ số chênh | odds ratio (OR) | Tỷ số giữa hai "odds" — hay gặp trong nghiên cứu bệnh chứng và logistic. **Không phải RR**. |
| Nguy cơ tương đối | relative risk (RR) | Tỷ số giữa hai tỷ lệ bệnh — chỉ tính đúng được ở một số thiết kế (đoàn hệ, RCT). |
| Phân tích phương sai | ANOVA | So sánh trung bình ≥3 nhóm một lúc thay vì chạy nhiều t-test. |
| Hậu kiểm | post-hoc test | So sánh từng cặp sau khi omnibus có ý nghĩa — chỉ làm khi có lý do. |
| Tương quan Pearson | Pearson correlation | Mức liên hệ tuyến tính giữa 2 biến định lượng (−1 đến +1). |
| Tương quan Spearman | Spearman correlation | Như Pearson nhưng trên thứ hạng — vững hơn khi dữ liệu lệch/có ngoại lai. |
| Hồi quy tuyến tính | linear regression | Ước lượng biến kết cục định lượng từ biến giải thích; hệ số B có đơn vị. |
| Hồi quy logistic | logistic regression | Ước lượng xác suất kết cục nhị phân; đọc Exp(B) = OR điều chỉnh. |
| Yếu tố nhiễu | confounder | Biến thứ ba làm méo mối liên quan đang xét — lý do cần mô hình đa biến. |
| Residual | residual | Phần chênh giữa giá trị quan sát và giá trị mô hình dự đoán — dùng kiểm tra giả định. |

## D. Thuật ngữ SPSS/phần mềm (M02+)

| Tiếng Việt | English | Giải thích |
|---|---|---|
| Cửa sổ dữ liệu | Data Editor | Nơi nhập/xem dữ liệu; có Data View (số liệu) và Variable View (định nghĩa biến). |
| Cửa sổ kết quả | Output Viewer | Nơi hiện bảng/biểu đồ sau khi chạy lệnh; lưu thành `.spv`. |
| Cửa sổ lệnh | Syntax Editor | Nơi viết lệnh dạng text `.sps` — giúp tái tạo toàn bộ quy trình. |
| Nhãn biến | Variable Label | Tên dài dễ hiểu của biến — chỗ đặt tiếng Việt có dấu. |
| Nhãn giá trị | Value Labels | Ý nghĩa của mã: 1 = "Nam", 2 = "Nữ". |
| Kết quả mẫu | expected output | Kết quả đúng đã được tính sẵn để đối chiếu — chỉ tin khi đã tái tạo từ dữ liệu. |

---
*Bổ sung dần theo tiến độ module. Khi thêm thuật ngữ: viết định nghĩa đời thường trước, có ví dụ hoặc phản ví dụ nếu dễ nhầm.*
