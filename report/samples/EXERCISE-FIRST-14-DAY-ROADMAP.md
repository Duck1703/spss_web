# Lộ trình thực hành 14 ngày — EXERCISE-FIRST (SPSS cho thống kê y khoa)

> **Đây là lộ trình học chính thức hiện tại** (Task 13 — quyết định D-024 của chủ dự án).
> Bài tập nguồn thật trong `exercises/` quyết định DẠY GÌ, KHI NÀO, và học viên CHỨNG MINH
> năng lực thế nào. Lý thuyết chỉ xuất hiện vừa đủ để giải bài tập.
> Lộ trình cũ quanh dataset giả lập `clinic_bp` đã chuyển xuống `archive/` (tham khảo).

## 1. Nguyên tắc

Mỗi ngày bắt đầu bằng **bài tập gốc** (mã P1-Qnn / P2-Qnn + trang trong PDF gốc), không phải
chương lý thuyết. Vòng học: bài tập → hiểu câu hỏi → kỹ năng cần → lý thuyết vừa đủ →
mô phỏng thao tác → làm mẫu có hướng dẫn → tự giải bài gốc → kiểm tra → giải thích → chuyển bài.

- **Dataset nguồn** (file `.sav` trong `exercises/bai_1|bai_2/`) là bắt buộc — chúng chỉ tồn tại
  **trên máy local** (bên thứ ba, không phát hành): mở trực tiếp trong SPSS, không tải từ web.
- **Dataset giả lập** (`datasets/*.csv`) giữ vai trò phụ: demo mẫu khi cần ví dụ sạch,
  luyện thêm tự chọn — không còn là xương sống.
- Số liệu kỳ vọng: tính từ chính file `.sav` bằng Python (đối chiếu `curriculum/exercise-verified-stats.md`),
  nhãn `NOT_RUN` — chưa chạy trên SPSS thật.

## 2. Sau 14 ngày bạn làm được gì

1. Mở file `.sav` nguồn, đọc Data View/Variable View, tra codebook và nhãn giá trị.
2. Chạy Frequencies/Descriptives và đọc đúng các cột output.
3. Tóm tắt theo nhóm bằng Select Cases, Split File, Means.
4. Bảng chéo: chọn đúng % (hàng/cột), chạy Chi-square, đọc expected count.
5. Transform: Compute (BMI…), Recode nhóm, Count đa biến.
6. Soi và xử lý dữ liệu nhập sai trên dataset thật.
7. Kiểm định tỷ lệ: chi-square phù hợp, binomial, McNemar.
8. So sánh trung bình: 1 mẫu, 2 nhóm độc lập, ghép cặp, ANOVA một yếu tố.
9. Tương quan Pearson và hồi quy tuyến tính đơn giản — đọc r, R², hệ số.
10. Hoàn thành một chu trình phân tích + viết báo cáo trên dataset mới (File5).

**Không hứa:** ROC/chẩn đoán (P1-Q15, Q16), hồi quy logistic/tiên lượng đa biến (P2-Q14, Q15),
đa biến nói chung (P2-Q12 chỉ giới thiệu) → danh sách extension.

## 3. Lịch 14 ngày — mỗi ngày gắn bài tập nguồn

| Ngày | Chủ đề | Bài tập nguồn dạy & đánh giá | Dataset |
|---|---|---|---|
| 01 | Mở file bài tập & đọc dữ liệu | **P1-Q01** (tìm ID cân nặng nhỏ nhất ở nam) | `p1_B01_HA (1).sav` |
| 02 | Tần số và phần trăm | **P1-Q02** (không biết chữ) · **P1-Q38** (tỷ lệ cao HA) | `p1_B01_HA (1).sav` |
| 03 | Đại lượng thống kê mô tả | **P1-Q03**, **P1-Q04** (Tuổi) · P1-Q42 luyện thêm | `p1_B01_HA (1).sav` |
| 04 | Tóm tắt theo nhóm: Select Cases & Split File | **P1-Q08**, **P1-Q09**, **P1-Q06**, **P1-Q41** (+ pool luyện Q23–Q28, Q30) | `p1_B01_HA (1).sav` |
| 05 | Bảng chéo và Chi-square | **P1-Q05**, **P1-Q17** · P1-Q18 luyện thêm | `p1_B01_HA` |
| 06 | Biến đổi dữ liệu: Compute · Recode · Count | **P1-Q10** (BMI), **P1-Q11** (độ tuổi), **P1-Q12** (đếm bệnh) | `p1_B01_HA (1).sav` |
| 07 | Kiểm tra & xử lý dữ liệu sai | **P1-Q14** (nghề nghiệp sai), **P1-Q13** (ĐTĐ 50–70) · P1-Q07 tùy chọn | `p1_B01_HA (1).sav` |
| 08 | Kiểm định tỷ lệ + bảng 2×2 nâng cao | **P1-Q22** (GOF 3 tỷ lệ), **P2-Q02**, **P2-Q03** (binomial) · luyện thêm **P1-Q21** (Weight Cases+Risk), **P2-Q01**, **P1-Q40**/Q20 (McNemar) | `p1_B01_HA` · `P1_B02 CrossTab` · `File1.sav` |
| 09 | So sánh trung bình: 1 mẫu & 2 nhóm độc lập | **P2-Q04** (one-sample), **P2-Q05**, **P2-Q07** | `File1.sav` |
| 10 | T-test ghép cặp & ANOVA | **P2-Q09** (paired 3 mức), **P2-Q13** (thuốc ngủ), **P2-Q06**, **P2-Q08** | `File1.sav` · `File2_Phan2.sav` |
| 11 | Tương quan & hồi quy tuyến tính | **P2-Q10**, **P2-Q11** · P2-Q12 tùy chọn nâng cao | `File1.sav` |
| 12 | Capstone A — khám phá & chuẩn bị | **Bài TH3**: codebook File5, kiểm tra dữ liệu, chọn phép phân tích | `File5_Phan2.sav` |
| 13 | Capstone B — phân tích & báo cáo | **Bài TH3**: bảng mô tả + ≥2 phân tích + báo cáo ngắn | `File5_Phan2.sav` |
| 14 | Đánh giá cuối khóa | **P1-Q24**, **P1-Q26**, **P1-Q31**, **P1-Q33**, **P1-Q43**, **P2-Q08** | `p1_B01_HA` · `File1.sav` |

Pool luyện thêm (optional, cùng chủ đề — không dạy trước): P1-Q07, Q19, Q20, Q23, Q25, Q27,
Q29, Q30, Q32, Q34–Q37, Q39, Q42.

## 3a. Khối lượng học — phân tầng bài tập (rà soát Task 14)

Nhịp mục tiêu: **90–120 phút/ngày** cho người mới hoàn toàn. Không phải ~45 bản ghi "core"
đều là bắt buộc — mỗi ngày chỉ có một tập nhỏ **ESSENTIAL** (phải xong để đạt kỹ năng mục
tiêu), phần còn lại là **REINFORCEMENT** (luyện thêm cùng kỹ năng) hoặc **ADVANCED**
(hoãn/tùy chọn khi thiếu nền). Mọi mã bài gốc vẫn được tham chiếu đầy đủ.

| Ngày | ESSENTIAL (bắt buộc) | REINFORCEMENT | Thao tác mới | Ước lượng phút* | Độ khó người mới |
|---|---|---|---|---|---|
| 01 | P1-Q01 | BT tìm nữ nhẹ nhất, người già nhất | 5 (mở file, 2 view, Values, Select, Sort) | 80–100 | Dễ–TB (mới mọi thứ) |
| 02 | P1-Q02, P1-Q38 | đọc % tích lũy, Valid vs Percent | 2 (Frequencies, Statistics→Percentiles) | 80–95 | Dễ |
| 03 | P1-Q03, P1-Q04 | P1-Q42 (min–max nhóm biến) | 2 (Descriptives, Options) | 80–95 | Dễ |
| 04 | P1-Q08, P1-Q09, P1-Q06 | P1-Q41; pool Q23/Q25/Q27/Q30 | 3 (If-kép, Split File, Means) | 95–110 | TB (3 khái niệm "chia nhóm") |
| 05 | P1-Q05, P1-Q17 | P1-Q18; pool Q19/Q29/Q32/Q34–37 | 3 (Crosstabs, Cells%, Chi-square) | 90–105 | TB (bảng chiều %) |
| 06 | P1-Q10, P1-Q11, P1-Q12 | BT4 kiểm chứng chéo Benh.MT | 3 (Compute, Recode-Diff, Count) | 95–110 | TB (lần đầu biến đổi + Save As) |
| 07 | P1-Q14, P1-Q13 | P1-Q07 (Multiple Response) | 3 (tần số soi lỗi, recode missing, xử lý phiếu) | 90–110 | TB |
| 08 | P1-Q22, P2-Q02, P2-Q03 | P1-Q21 (Weight+Risk — chuyển từ ngày 05), P2-Q01, P1-Q40/Q20 (McNemar) | 3 (GOF chi-square, binomial; +Weight Cases, McNemar nếu làm reinforcement) | 95–120 | TB–Khó |
| 09 | P2-Q04, P2-Q05, P2-Q07 | — | 2 (one-sample t, independent t) | 90–110 | TB |
| 10 | P2-Q09, P2-Q13, P2-Q06 | P2-Q08 | 2 (paired t, one-way ANOVA) | 95–115 | TB–Khó |
| 11 | P2-Q10, P2-Q11 | P2-Q12 (ADVANCED — chỉ giới thiệu) | 2 (correlate, regression đơn) | 90–110 | TB–Khó |
| 12 | Bài TH3: codebook + khám phá File5 | — | 1 (chu trình phân tích tự chọn) | 90–110 | TB |
| 13 | Bài TH3: phân tích + báo cáo ngắn | — | 0 (tổng hợp) | 100–120 | TB–Khó |
| 14 | P1-Q24, Q26, Q31, Q33, Q43, P2-Q08 | — | 0 (ôn tập có chọn lọc) | 100–120 | TB |

*Ước lượng = hướng dẫn + tự làm + kiểm chứng/giải thích, cho người lần đầu dùng SPSS.
Bài REINFORCEMENT làm được trong 10–20 phút/bài nhờ kỹ năng đã demo — không tính vào
ngân sách bắt buộc. Nếu trễ nhịp: bỏ REINFORCEMENT, giữ nguyên ESSENTIAL.

**Nguyên tắc phân tầng:** ESSENTIAL = bài bắt buộc để hình thành kỹ năng mục tiêu của ngày;
REINFORCEMENT = cùng công cụ, thêm cặp biến mới (chuyển sang ngày hôm sau không sao);
ADVANCED = defer có lý do (mục 6). Ngày 05 đã được nhẹ hóa (Task 15): P1-Q21
(Weight Cases/Risk) và P2-Q01 chuyển sang Ngày 08 cùng cụm kiểm định tỷ lệ — giờ nặng
nhất là Ngày 08; nếu vượt 120 phút, bỏ toàn bộ phần REINFORCEMENT (P1-Q21/P2-Q01/
McNemar) sang ngày 09–10.

## 4. Dataset theo ngày

| Dataset (trong `exercises/`) | Dùng ngày | Nội dung |
|---|---|---|
| `bai_1/p1_B01_HA (1).sav` | 01–08, 14 | 620×40 — khảo sát tăng huyết áp & yếu tố nguy cơ |
| `bai_1/P1_B02 CrossTab (2).sav` | 08 | Bảng 2×2 HPV–ung thư CTC (dạng tần số tổng hợp) |
| `bai_2/File1.sav` | 08–11, 14 | 50×18 — chấn thương giao thông 3 tỉnh (điều tra 2022) |
| `bai_2/File2_Phan2.sav` | 10 | 12 bệnh nhân — giờ ngủ thuốc vs giả dược |
| `bai_2/File5_Phan2.sav` | 12–13 | 296×7 — sinh thiết tuyến tiền liệt |
| `bai_1/P1_B03 ROC.sav` | extension | 30×5 — WBC/CRP/PCT & viêm phổi |
| `bai_2/File3_Phan2.sav` · `File4_Phan2.sav` | extension | tiên lượng tử vong / logistic |
| `bai_1/So_Lieu_NC.sav` | tự do | dataset phụ — không bài tập gắn sẵn |

> ⚠️ File gốc KHÔNG sửa: mọi biến đổi (Compute/Recode/xóa phiếu) lưu thành file mới
> `*_work.sav` trong thư mục làm việc của bạn — không ghi đè `exercises/`.

## 5. Tiêu chí qua ngày

- Mỗi ngày có **sản phẩm bắt buộc** (bảng output, con số điền vào bảng trả lời của đề, file `.sav` mới,
  hoặc đoạn báo cáo) — checklist trong workbook.
- Gợi ý mở theo nấc trong exercise card; đáp án chỉ sau khi tự làm.
- Bài *deferred* (ROC, logistic) không nằm trong đánh giá — xem mục extension.

## 6. Nội dung cố ý hoãn (với lý do gắn bài tập)

| Bài tập | Lý do hoãn | Học ở đâu |
|---|---|---|
| P1-Q15, P1-Q16 (ROC, Se/Sp/PPV) | Cần khái niệm chẩn đoán + đường cong ROC — chưa đủ nền trong 14 ngày | E01 (extension) |
| P2-Q14, P2-Q15 (tiên lượng, logistic) | Đa biến + outcome nhị phân; còn cần làm sạch `NDEAT`/`DEATH` | E01–E02 (extension) |
| P2-Q12 (hồi quy đa biến) | Giới thiệu tùy chọn Ngày 11 — không đánh giá | phần nâng cao ngày 11 |
| P1-Q07 (Multiple Response Sets) | Dialog riêng, trung cấp — optional Ngày 07 | workbook ngày 07 |
| SPSS Syntax, nonparametric, survival | Ngoài phạm vi 14 ngày | M03+/E-tracks |

## 7. Trạng thái kiểm chứng (trung thực)

- Mọi con số kỳ vọng trong bài học & đáp án được tái tính trực tiếp từ file `.sav` bằng Python
  (`pyreadstat`/`pandas`/`scipy`) — ghi trong `curriculum/exercise-verified-stats.md`, nhãn `NOT_RUN`.
- Menu SPSS viết theo tài liệu IBM SPSS; chưa chạy pilot thật → `MAC_SPSS_VERIFICATION_PENDING`.
- Ngày 01–14: xây dựng đầy đủ (lesson + workbook + đáp án + mô phỏng SPSS) —
  `CONTENT_READY_PENDING_HUMAN_PILOT` (chưa có học viên thật chạy thử; hoàn thiện
  Ngày 07–10 ở Task 15, Ngày 11–14 ở Task 16).
