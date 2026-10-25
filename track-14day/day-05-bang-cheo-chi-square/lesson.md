# Ngày 05 — Bảng chéo & kiểm định Chi-square (Crosstabs · Weight Cases)

> **Lộ trình:** Exercise-first 14 ngày · **Thời lượng:** ~110 phút · **Datasets:** `p1_B01_HA (1).sav` · `P1_B02 CrossTab (2).sav` · `bai_2/File1.sav`
> **Trạng thái:** READY v2 (Task 14) — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`; số liệu kiểm chứng Python `NOT_RUN`.
> **Bài tập nguồn hôm nay:** **P1-Q05**, **P1-Q17**, **P1-Q21**, **P2-Q01** (bắt buộc) · **P1-Q18** (luyện thêm).

---

## A. Bài tập gốc — một công cụ trả lời nhiều câu hỏi

{{exercise:P1-Q05}}

{{exercise:P1-Q17}}

{{exercise:P1-Q21}}

{{exercise:P2-Q01}}

> **Đọc đề gốc:** `exercises/bai_1/Bai thuc hanh SDH P1.pdf` (Câu 5, 17, 18, 21) và
> `exercises/bai_2/BSNT_Bài TH_Phần 2_Cô Hiền.pdf` trang 3 (Câu 1).
> *Tóm tắt:* Câu 5 = số lượng & % hộ nghèo/cận nghèo theo giới tính (% hai chiều);
> Câu 17 = tỷ lệ đái tháo đường & bệnh gan mạn theo giới (có "khác nhau" không?);
> Câu 21 = bệnh chứng HPV–ung thư CTC, so sánh nguy cơ hai nhóm phơi nhiễm;
> P2-Câu 1 = liên quan giữa vị trí chấn thương nặng và việc phải nằm viện.

## B. Mục tiêu

Ngày 04 bạn so sánh nhóm bằng **hai bảng riêng**. Hôm nay bạn học **bảng chéo** —
hai biến phân loại trong **một** bảng ô — và câu hỏi đi kèm: *"khác biệt đó có ý nghĩa
thống kê không?"* (kiểm định Chi-square). Riêng Câu 21 còn cho thấy một tình huống
mới: **file chỉ có 4 dòng tổng hợp** — bạn phải "dãn" nó ra bằng **Weight Cases**,
rồi dùng chỉ số **RR/OR** để so sánh *nguy cơ* chứ không chỉ tỷ lệ.

## C. Dữ liệu cần mở

| Bài | File | Biến | Ghi chú |
|---|---|---|---|
| Q05, Q17, Q18 | `p1_B01_HA (1).sav` | `TTrang.KTe`, `GTinh`, `Tieuduong`, `Gan`, `TSu.RBia` | 620 dòng như cũ |
| Q21 | **`P1_B02 CrossTab (2).sav`** | `benh` (CTC+/−), `phoinhiem` (HPV+/−), `soluong` (tần số) | ⚠️ file **khác** — chỉ 4 dòng tổng hợp, cần Weight Cases |
| P2-Q01 | **`bai_2/File1.sav`** | `cchanthuon` (vị trí chấn thương), `gnamvie` (có nằm viện) | ⚠️ file **gói 2** — nhãn bị lỗi font, xem mục D |

## D. Kiến thức cần biết (vừa đủ)

- **Bảng chéo (Crosstabs):** ô (i,j) = số người vừa thuộc nhóm i của biến hàng, vừa
  thuộc nhóm j của biến cột. Chọn đúng hàng/cột theo câu hỏi — thường biến "giải thích"
  đặt ở hàng (hoặc cột) rồi đọc % theo chiều đó.
- **% hàng vs % cột:** đây là chỗ Câu 5 "bẫy" người học.
  - "% theo tình trạng kinh tế" = trong nhóm nghèo có bao nhiêu % là nữ → **% hàng**.
  - "% theo giới tính" = trong nhóm nữ có bao nhiêu % là nghèo → **% cột**.
  Hai con số này trả lời **hai câu hỏi khác nhau** — đề hỏi cả hai nên phải lấy cả hai.
- **Chi-square:** kiểm định "hai biến phân loại có liên quan không". Đọc dòng
  **Pearson Chi-Square** → cột **Asymptotic Significance (p)**:
  - p < 0,05 → có khác biệt/liên quan ý nghĩa thống kê.
  - p ≥ 0,05 → chưa đủ bằng chứng nói khác biệt.
  - ⚠️ Điều kiện dùng: ô kỳ vọng (expected) không nên có ô nào < 1 và tối đa 20% ô < 5.
    Nếu vi phạm → đọc **Fisher's Exact Test** thay thế (SPSS tự in cho bảng 2×2).
- **Weight Cases:** khi mỗi dòng của file *đại diện nhiều người* (cột tần số `soluong`),
  phải khai **Data → Weight Cases → Weight cases by** `soluong` — nếu không SPSS hiểu
  file chỉ có 4 người!
- **RR vs OR:** RR (Relative Risk) = tỷ lệ mắc bệnh nhóm phơi nhiễm ÷ nhóm không phơi
  nhiễm; OR (Odds Ratio) = tỷ số chênh của odds. Đề Câu 21 dạy bạn đọc cả hai trong
  bảng **Risk Estimate**.
- **File1.sav nhãn lỗi font:** nhãn biến/giá trị trong file này bị lỗi encoding
  (vd "iGioi tin"). Đối chiếu **codebook trang 2 của PDF gói 2**: cột mô tả cho biết
  `cchanthuon` = Câu 8 (vị trí chấn thương), `gnamvie` = Câu 9 (có nằm viện).

## E. Thực hành có hướng dẫn

> ⚠️ `MAC_SPSS_VERIFICATION_PENDING`

### Bước 1 — Câu 5: bảng chéo đầu tiên

- **Làm:** mở `p1_B01_HA (1).sav` (chắc chắn không filter/split — All cases + Analyze all cases).
- **Làm:** **Analyze → Descriptive Statistics → Crosstabs…**
  - `TTrang.KTe` → **Row(s)** (tình trạng kinh tế làm hàng)
  - `GTinh` → **Column(s)** (giới tính làm cột)
- **Làm:** nút **Cells…** → tick **Observed** + dưới Percentages tick **Row** và
  **Column** → Continue → OK.
- **Màn hình mong đợi:** bảng 2×2; mỗi ô in 3 số (Count, % trong hàng, % trong cột).
- **Đọc cho Câu 5:**
  - "% theo TTKT" (hàng): nhóm nghèo/cận nghèo — **57,2% nữ / 42,8% nam**;
    nhóm không nghèo — **62,7% nữ / 37,3% nam**.
  - "% theo giới tính" (cột): trong nữ — **34,8% nghèo**; trong nam — **40,2% nghèo**.

{{guide:d05-crosstabs}}

### Bước 2 — Câu 17: thêm Chi-square

- **Làm:** Crosstabs → `GTinh` → Row(s), `Tieuduong` → Column(s) → **Statistics…** →
  tick **Chi-square** → Continue → OK.
- **Đọc:** bảng *Chi-Square Tests*, dòng **Pearson Chi-Square**: Value ≈ **1,075**,
  df=1, **p = 0,300** → tỷ lệ đái tháo đường hai giới **không khác nhau có ý nghĩa**
  (nữ 113/376=30,1% vs nam 83/244=34,0%).
- **Làm lại** với `Gan` thay `Tieuduong`:
  - Pearson χ² ≈ 0,175, p = 0,676 — NHƯNG nhìn chú thích dưới bảng:
    *"a. 1 cells (25,0%) have expected count less than 5"* → **không tin Pearson**,
    đọc dòng **Fisher's Exact Test**: Exact Sig. (2-sided) ≈ **0,759** → cũng không khác nhau.
  - Bệnh gan mạn: nữ 6/376 (1,6%) vs nam 5/244 (2,0%) — tỷ lệ gần nhau và mẫu bệnh rất nhỏ.

{{guide:d05-chisq}}

### Bước 3 — (Luyện thêm) Câu 18: rượu bia theo giới

- **Làm:** Crosstabs `GTinh` × `TSu.RBia` + Chi-square.
- **Kết quả:** χ² ≈ **320,8**, p < 0,001 — nam uống rượu bia nhiều áp đảo
  (nam có TS: 222/244 = 91,0% vs nữ 66/376 = 17,6%). Kết luận khác biệt rất mạnh.

### Bước 4 — Câu 21: file tổng hợp + Weight Cases + Risk

- **Làm:** mở file mới **`P1_B02 CrossTab (2).sav`** — chỉ 4 dòng × 3 biến!
  (`benh`: 1=CTC+, 2=CTC−; `phoinhiem`: 1=HPV+, 2=HPV−; `soluong`: số người mỗi ô.)
- **Làm:** **Data → Weight Cases…** → **Weight cases by** → `soluong` → OK.
  Thanh trạng thái ghi "Weight On". Giờ SPSS hiểu file đại diện **88 người**.
- **Làm:** Crosstabs → `phoinhiem` → Row(s), `benh` → Column(s) → Cells: Row %
  → Statistics…: **Chi-square** + **Risk** → OK.
- **Đọc:**
  - Tỷ lệ CTC+ : HPV+ = 20/28 = **71,4%** ; HPV− = 10/60 = **16,7%**.
  - Chi-square: Pearson χ² ≈ **25,480**, p < 0,001 (Yates/continuity ≈ 23,101).
  - Bảng **Risk Estimate**: RR (cohort CTC+) ≈ **4,29**; OR ≈ **12,50**.
  - → Người HPV+ có nguy cơ ung thư cổ tử cung **gấp ~4,3 lần** nhóm HPV−.

{{guide:d05-weight}}

### Bước 5 — P2-Q01: bảng chéo 3×2 ở file khác

- **Làm:** mở `bai_2/File1.sav` (nhớ **tắt Weight**: Data → Weight Cases → Do not weight).
- **Làm:** Crosstabs → `cchanthuon` → Row(s), `gnamvie` → Column(s) → Chi-square → OK.
- **Đọc:** bảng 3×2 (đầu-cột sống / thân mình / tay-chân × nằm viện có/không), n=50;
  Pearson χ² ≈ **0,502**, df=2, **p = 0,778** → chưa có bằng chứng nói vị trí chấn
  thương nặng liên quan tới việc phải nằm viện.
- *(Tỷ lệ nằm viện: đầu/CS 10/17=58,8% · thân mình 10/18=55,6% · tay chân 7/15=46,7% —
  tuy có chênh nhưng mẫu nhỏ nên chưa đủ ý nghĩa.)*

### Bước 6 — Dọn trạng thái

- **Data → Weight Cases → Do not weight cases → OK** (file B02 đóng, file HA không bị ảnh hưởng).
- Kiểm tra status bar không còn "Split On"/"Weight On" trước khi kết thúc.

## F. Mô phỏng SPSS

Ba mô phỏng trong Bước 1–4: hộp Crosstabs + Cells, hộp Statistics (Chi-square) +
bảng Chi-Square Tests, hộp Weight Cases + bảng Risk Estimate.

## G. Bài tập tự làm

Mở [workbook](/d05/bai-tap/): làm lại **P1-Q05, P1-Q17, P1-Q21, P2-Q01** vào đề,
thêm **P1-Q18** luyện thêm và một câu đố về % hàng/% cột.

## H. Kiểm tra kết quả

- [ ] Câu 5: mỗi ô có đủ Count + %hàng + %cột; ghi đúng 4 con số % đề hỏi.
- [ ] Câu 17: đọc đúng dòng Pearson; với `Gan` nhận ra cảnh báo expected < 5 và đọc Fisher.
- [ ] Câu 21: bảng sau Weight có Total = **88** (không phải 4); đọc được RR và OR.
- [ ] P2-Q01: n = 50, df = 2, p = 0,778 — kết luận "chưa đủ bằng chứng" chứ không nói "không liên quan tuyệt đối".

## I. Giải thích đáp án

[đáp án](/d05/dap-an/) — bảng chéo đầy đủ từng câu, cách viết câu kết luận kiểm định
đúng chuẩn (kèm χ², df, p), và lỗi kinh điển.

## J. Chuyển bài

Đến đây bạn đã đọc được gần như mọi bảng mô tả. Nhưng nhiều câu hỏi cần **tạo biến
mới** trước khi phân tích: BMI (Câu 10), nhóm tuổi (Câu 11), số bệnh mạn tính (Câu 12).
Ngày 06 = Compute · Recode · Count — xong đó bạn mở khóa được cả nhóm câu phía sau.

## K. Đọc thêm (không bắt buộc)

- Pool luyện cùng kỹ năng: P1-Q19, Q29, Q32, Q34–Q37 — toàn crosstabs/chi-square
  trên các biến khác của file HA; một số câu cần recode trước (học ở Ngày 06).
- "Organize output by groups" của Split File cho bảng tương đương crosstabs nhưng
  khác cấu trúc — Crosstabs vẫn là cách chuẩn cho bảng 2 chiều.
- Với bảng >2×2, Fisher's Exact tốn tính toán — SPSS vẫn in được (Exact Sig.) nhưng
  đọc Pearson trước nếu điều kiện expected thỏa.
