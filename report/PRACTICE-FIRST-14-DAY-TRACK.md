# Lộ trình thực hành 14 ngày — SPSS cho thống kê y khoa

> **Đây là lộ trình học chính thức hiện tại** (quyết định D-020, chỉ thị của chủ dự án — Task 09).
> Mỗi ngày ~90–120 phút: khoảng 80% thời lượng là thao tác thật trên SPSS và diễn giải kết quả,
> ~20% là lý thuyết vừa-đủ để làm đúng bài hôm đó.
> Lộ trình 16 tuần trong `curriculum/roadmap.md` vẫn tồn tại như **tài liệu tham khảo / hướng mở rộng sau này** — không phải đường đi mặc định nữa.

## 1. Vì sao có lộ trình này

Người học còn khoảng hai tuần và cần **tự làm được các phân tích y khoa thường gặp** trên SPSS —
không phải đọc hết một giáo trình thống kê. Lộ trình này đảo thứ tự truyền thống:
mở SPSS ngay Ngày 01, mỗi khái niệm chỉ được giải thích *đúng lúc cần dùng nó*.

## 2. Sau 14 ngày bạn làm được gì

1. Mở SPSS, nhập dữ liệu CSV, lưu/mở lại file `.sav`.
2. Định nghĩa biến đúng trong Variable View (Name, Label, Values, Missing, Measure).
3. Phát hiện và xử lý các lỗi dữ liệu thường gặp; giữ file gốc bất biến.
4. Tạo bảng thống kê mô tả và biểu đồ phù hợp.
5. Nhận ra khi nào t-test độc lập / ghép cặp / Chi-square / tương quan là phù hợp.
6. Chạy các phân tích đó trong SPSS và đọc đúng bảng output.
7. Viết một đoạn kết quả ngắn, thận trọng, đúng giới hạn của thiết kế.
8. Hoàn thành một mini-project phân tích độc lập từ dữ liệu mới.

**Lộ trình này không hứa:** bạn chưa đủ nền cho hồi quy đa biến, logistic, sống còn,
hay các phân tích cần mô hình điều chỉnh nhiễu — những chủ đề đó nằm ở chương trình mở rộng.

## 3. Lịch 14 ngày

| Ngày | Chủ đề | Bạn thực hành | Dataset |
|---|---|---|---|
| 01 | Tiếp xúc đầu tiên với SPSS | Mở SPSS · phân biệt Data View/Variable View · import CSV · lưu `.sav` | `clinic_bp_v1_clean.csv` |
| 02 | Biến và mã hóa | Name/Label/Values/Missing/Measure · nhãn giá trị · đối chiếu codebook | `clinic_bp_v1_clean.csv` |
| 03 | Làm sạch dữ liệu | Soi lỗi bằng Frequencies/Descriptives · phát hiện trùng lặp · recode · lưu bản sạch | `clinic_bp_v1_raw.csv` → bản sạch của bạn |
| 04 | Thống kê mô tả | Frequencies, Descriptives · mean/SD/min/max · bảng đặc điểm bệnh nhân | bản sạch |
| 05 | Biểu đồ và mô tả theo nhóm | Bar chart, histogram, boxplot · tóm tắt theo nhóm · nhận ra giá trị bất thường | bản sạch |
| 06 | T-test hai nhóm độc lập | Kiểm tra điều kiện áp dụng · chạy · đọc đúng dòng · viết câu kết quả | bản sạch |
| 07 | T-test mẫu ghép cặp | Nhận diện thiết kế trước–sau · chạy paired t-test · phân biệt với độc lập | bản sạch + `exercise_hba1c_pairs.csv` |
| 08 | Bảng chéo và Chi-square | Crosstabs, % theo hàng · Chi-square · kiểm tra expected count | bản sạch |
| 09 | Tương quan | Scatterplot · Pearson · Spearman khi phù hợp · liên quan ≠ nhân quả | bản sạch |
| 10 | Chọn phép phân tích phù hợp | Từ câu hỏi y khoa → kiểu biến → thiết kế → phương pháp · ôn giả định | bản sạch |
| 11 | Đọc và báo cáo output | Điều hướng Output Viewer · xuất bảng · viết kết quả thận trọng | bản sạch |
| 12 | Capstone 1 — chuẩn bị dữ liệu | Import dataset mới · tự kiểm tra chất lượng · làm sạch · viết báo cáo ngắn | `capstone_screening_raw.csv` |
| 13 | Capstone 2 — phân tích | Tự đặt câu hỏi · chọn và chạy ≥1 phân tích suy luận · lưu output · diễn giải | bản sạch capstone |
| 14 | Đánh giá cuối khóa | Tình huống hoàn chỉnh → dataset chuẩn bị + output + bảng mô tả + ≥1 phân tích + diễn giải có giới hạn | `assessment_gp_raw.csv` |

## 4. Datasets dùng trong lộ trình

| Dataset | Vai trò | Codebook |
|---|---|---|
| `clinic_bp` (DS-A) | Dataset chính xuyên suốt Ngày 01–11: 160 hồ sơ tăng huyết áp giả lập; bản raw có 9 lỗi gài | `datasets/codebooks/clinic_bp_codebook.md` |
| `exercise_hba1c_pairs` (DS-EX1) | Bài tập paired t-test Ngày 07 (n=24) | `datasets/codebooks/exercise_hba1c_codebook.md` |
| `capstone_screening` (DS-CAP) | Capstone Ngày 12–13 (n=90, 6 lỗi gài) | `datasets/codebooks/capstone_screening_codebook.md` |
| `assessment_gp` (DS-FINAL) | Đánh giá Ngày 14 (n=60, 4 lỗi gài) | `datasets/codebooks/assessment_gp_codebook.md` |

- Tất cả **giả lập 100%**, sinh bởi `datasets/generators/generate_all.py` với seed cố định.
- Con số mong đợi (để đối chiếu): `datasets/expected-results.md` — tính bằng Python, nhãn `NOT_RUN` (chưa chạy trên SPSS thật).

## 5. Tiêu chí hoàn thành mỗi ngày

- Mỗi ngày có **checkpoint sản phẩm cụ thể** (file `.sav`, bảng output, câu diễn giải viết tay…) —
  không qua ngày tiếp theo khi chưa làm ra sản phẩm đó.
- Đáp án chỉ mở **sau khi** đã tự làm.
- Hoàn thành toàn bộ ≠ "thành thạo SPSS": tiêu chí đánh giá cuối khóa nằm ở rubric Ngày 14.

## 6. Những nội dung cố ý hoãn (không dạy trong 14 ngày)

| Chủ đề | Lý do hoãn | Học ở đâu sau này |
|---|---|---|
| Suy luận thống kê dạng bài học riêng (CI/p-value/power sâu) | Gộp "just-in-time" vào Ngày 06–09 ở mức đủ dùng | M05 chương trình 16 tuần |
| Kiểm định phi tham số (Mann–Whitney, Wilcoxon) | Cần thêm nền thứ hạng; chỉ nhắc tên + khi nào cần hỏi người có chuyên môn | M07 |
| ANOVA ≥3 nhóm | Nhắc ở mục tùy chọn Ngày 10; chưa đủ thời lượng cho hậu kiểm | M09 |
| Hồi quy tuyến tính / logistic | Cần tư duy đa biến, residual, điều chỉnh nhiễu | M10–M11 |
| SPSS Syntax | Giới thiệu ở mức nhận biết cuối khóa (Ngày 11) | M03+ chương trình gốc |
| Chẩn đoán/ROC, sống còn, complex survey | Ngoài phạm vi nhập môn thực hành | E01–E03 |

## 7. Quan hệ với chương trình 16 tuần

- `curriculum/roadmap.md` (16 tuần) = **bản đồ tham khảo dài hạn**; Blueprint gốc không đổi.
- M01 (tư duy nghiên cứu — không SPSS) được giữ nguyên tại `lessons/M01-research-thinking/` và trên
  website ở mục **Tham khảo**. Các khái niệm M01 (kiểu biến, đơn vị quan sát, liên quan ≠ nhân quả)
  được lộ trình 14 ngày **dùng lại**, giải thích ngắn ngay khi cần.
- Khi có thêm thời gian, nên học lại M01 đầy đủ để hiểu sâu phần tư duy nghiên cứu.

## 8. Việc kiểm chứng còn tồn đọng (trung thực)

- Mọi hướng dẫn menu SPSS trên macOS được viết theo tài liệu IBM SPSS 32 nhưng **chưa chạy thật** →
  nhãn `MAC_SPSS_VERIFICATION_PENDING` + checklist tự kiểm tra trong mỗi bài.
- Con số "kết quả mong đợi" là cross-check Python (`NOT_RUN`), cần đối chiếu lại trên SPSS thật.
- Chưa có pilot học viên thật — đây là bản dùng đầu tiên, sẽ hiệu chỉnh theo phản hồi.
