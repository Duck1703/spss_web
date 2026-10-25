# Ngày 05 — Bảng chéo & kiểm định Chi-square (Crosstabs)

> **Lộ trình:** Exercise-first 14 ngày · **Thời lượng:** ~100 phút · **Dataset:** `exercises/bai_1/p1_B01_HA (1).sav`
> **Trạng thái:** READY v3 (Task 15) — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`; số liệu kiểm chứng Python `NOT_RUN`.
> **Bài tập nguồn hôm nay:** **P1-Q05**, **P1-Q17** (bắt buộc) · **P1-Q18** (luyện thêm).
> *(P1-Q21 — Weight Cases/Risk và P2-Q01 đã chuyển sang Ngày 08 để buổi này vừa sức.)*

---

## A. Bài tập gốc — một công cụ trả lời hai câu hỏi

{{exercise:P1-Q05}}

{{exercise:P1-Q17}}

> **Đọc đề gốc:** `exercises/bai_1/Bai thuc hanh SDH P1.pdf` — Câu 5 (tr.1) và Câu 17 (tr.3).
> *Tóm tắt:* Câu 5 = số lượng & % hộ nghèo/cận nghèo theo giới tính (đề hỏi **cả hai**
> chiều %); Câu 17 = nhận xét tỷ lệ đái tháo đường và bệnh gan mạn tính theo giới tính —
> có "khác nhau" không?

## B. Mục tiêu

Ngày 04 bạn so sánh nhóm bằng **hai bảng riêng**. Hôm nay bạn học **bảng chéo** —
hai biến phân loại trong **một** bảng ô — và câu hỏi đi kèm: *"khác biệt đó có ý nghĩa
thống kê không?"* (kiểm định Chi-square). Chỉ một công cụ (Crosstabs) nhưng hai kỹ
năng đọc: chọn đúng % và đọc đúng dòng kiểm định.

## C. Dữ liệu cần mở

| Bài | File | Biến | Ghi chú |
|---|---|---|---|
| Q05 | `p1_B01_HA (1).sav` | `TTrang.KTe` (hàng), `GTinh` (cột) | 620 dòng như cũ |
| Q17, Q18 | cùng file | `GTinh`, `Tieuduong`, `Gan`, `TSu.RBia` | cùng thao tác, 3 biến bệnh/thói quen |

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
  - p ≥ 0,05 → chưa đủ bằng chứng nói khác biệt (không phải "chứng minh bằng nhau"!).
  - ⚠️ Điều kiện dùng: ô kỳ vọng (expected) không nên có ô nào < 1 và tối đa 20% ô < 5.
    Nếu vi phạm → đọc **Fisher's Exact Test** thay thế (SPSS tự in cho bảng 2×2).
- **Nhận xét tỷ lệ** (Câu 17): chi-square chỉ nói "có liên quan không" — muốn nói
  *hướng* khác biệt (giới nào cao hơn) phải nhìn lại **% trong bảng chéo**.
- **Liên quan ≠ nguyên nhân:** chi-square đo kết hợp; tuyên bố "rượu gây tăng HA" cần
  thiết kế nghiên cứu khác — ghi nhớ khi viết nhận xét.

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

## F. Mô phỏng SPSS

Hai mô phỏng trong Bước 1–2: hộp Crosstabs + Cells (tick % hàng/cột), hộp Statistics
(Chi-square) + bảng Chi-Square Tests với footnote expected count.

## G. Bài tập tự làm

Mở [workbook](/d05/bai-tap/): làm lại **P1-Q05** và **P1-Q17** vào đề,
thêm **P1-Q18** luyện thêm và một câu đố về % hàng/% cột.

## H. Kiểm tra kết quả

- [ ] Câu 5: mỗi ô có đủ Count + %hàng + %cột; ghi đúng 4 con số % đề hỏi.
- [ ] Câu 17: đọc đúng dòng Pearson; với `Gan` nhận ra cảnh báo expected < 5 và đọc Fisher.
- [ ] Viết được câu kết luận kiểu "tỷ lệ X ở nhóm A vs B là a% vs b%, χ²=…, p=… →
  có/chưa có khác biệt ý nghĩa" — chứ không chỉ chép con số.

## I. Giải thích đáp án

[đáp án](/d05/dap-an/) — bảng chéo đầy đủ từng câu, cách viết câu kết luận kiểm định
đúng chuẩn (kèm χ², df, p), và lỗi kinh điển.

## J. Chuyển bài

Đến đây bạn đọc được bảng mô tả 2 chiều và kiểm định liên quan cơ bản. Nhưng nhiều câu
hỏi cần **tạo biến mới** trước khi phân tích: BMI (Câu 10), nhóm tuổi (Câu 11), số bệnh
mạn tính (Câu 12). Ngày 06 = Compute · Recode · Count.
*(Riêng kỹ năng Weight Cases cho bảng tổng hợp — P1-Q21 — và bảng chéo ở file gói 2
— P2-Q01 — được dạy ở Ngày 08 cùng cụm kiểm định tỷ lệ.)*

## K. Đọc thêm (không bắt buộc)

- Pool luyện cùng kỹ năng: P1-Q19, Q29, Q32, Q34–Q37 — toàn crosstabs/chi-square
  trên các biến khác của file HA; một số câu cần recode trước (học ở Ngày 06).
- "Organize output by groups" của Split File cho bảng tương đương crosstabs nhưng
  khác cấu trúc — Crosstabs vẫn là cách chuẩn cho bảng 2 chiều.
- Với bảng >2×2, Fisher's Exact tốn tính toán — SPSS vẫn in được (Exact Sig.) nhưng
  đọc Pearson trước nếu điều kiện expected thỏa.
