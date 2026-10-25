# Ngày 11 — Tương quan & hồi quy tuyến tính

> **Lộ trình:** Exercise-first 14 ngày · **Thời lượng:** ~105 phút · **Dataset:** `exercises/bai_2/File1.sav`
> **Trạng thái:** READY v1 (Task 16) — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`; số liệu kiểm chứng Python `NOT_RUN`.
> **Bài tập nguồn hôm nay:** **P2-Q10**, **P2-Q11** (bắt buộc) · **P2-Q12** (giới thiệu — nâng cao, không bắt buộc).

---

## A. Bài tập gốc — "hai biến số có đi cùng nhau không"

{{exercise:P2-Q10}}

{{exercise:P2-Q11}}

{{exercise:P2-Q12}}

> **Đọc đề gốc:** `BSNT_Bài TH_Phần 2_Cô Hiền.pdf` trang 3–4 — Câu 10 (tương quan 3
> cặp biến), Câu 11 (hồi quy tuyến tính 3 cặp), Câu 12 (hồi quy đa biến — phần mở
> rộng, xem mục K).

## B. Mục tiêu

1. Nhận ra khi nào câu hỏi là "liên hệ giữa **hai biến số** (liên tục)" — không phải
   so sánh nhóm.
2. Vẽ & đọc scatterplot, chạy **Bivariate Correlations**, đọc `r` và `Sig.`.
3. Chạy **Linear Regression đơn biến**, đọc R², hệ số `B`, `Sig.` của hệ số.
4. Nói được **tương quan ≠ nhân quả**.

## C. Dữ liệu cần mở

| Bài | File | Biến | Vai trò |
|---|---|---|---|
| Q10, Q11, Q12 | `bai_2/File1.sav` | `csa` (CLCS sau tai nạn), `ytruo` (CLCS trước), `htuo` (tuổi), `nsonga` (số ngày nằm viện) | 4 biến đều định lượng, n=50, không missing |

Nhắc lại ánh xạ File1 (nhãn file lỗi font — đối chiếu codebook trang 2 của PDF):
`csa` = CLCS sau, `ytruo` = CLCS trước, `htuo` = tuổi, `nsonga` = ngày nằm viện.

## D. Kiến thức cần biết (vừa đủ)

- **So sánh nhóm vs liên hệ biến:** t-test/ANOVA (Ngày 09–10) hỏi "nhóm A khác nhóm
  B không". Hôm nay hỏi "khi X tăng thì Y thay đổi thế nào" — cần tương quan/hồi quy.
- **Pearson `r`:** từ −1 đến +1. Dấu = chiều (dương: cùng tăng; âm: ngược chiều);
  độ lớn = sức mạnh (|r|<0,3 yếu; 0,3–0,7 trung bình; >0,7 mạnh — quy ước). `Sig.`
  cho biết r có khác 0 có ý nghĩa không.
- **Hồi quy đơn biến:** đường thẳng `Y = B0 + B1·X`. Bảng **Model Summary** cho
  **R²** = % biến thiên của Y do X giải thích; bảng **Coefficients** cho **B0
  (Constant)** và **B1** + `t`, `Sig.` — với 1 biến độc lập, Sig. của B1 = Sig. của r.
- **Pearson vs Spearman:** Pearson cần quan hệ tuyến tính, biến ~chuẩn; khi dữ liệu
  lệch mạnh hoặc thang đo thứ bậc → tick thêm **Spearman** trong cùng dialog để so.
- **Tương quan ≠ nhân quả:** r=0,77 giữa CLCS trước/sau chỉ nói "đi cùng nhau",
  không chứng minh cái này gây ra cái kia.
- **Khi không được kết luận:** quan hệ cong (không tuyến tính) → r nhỏ dù liên hệ
  mạnh; ngoại lai mạnh làm r méo; n nhỏ → p không ổn định.

## E. Thực hành có hướng dẫn

> ⚠️ `MAC_SPSS_VERIFICATION_PENDING`

### Bước 1 — Nhìn trước bằng scatterplot

- **Làm:** mở `File1.sav`. Graphs → **Chart Builder…** (hoặc Graphs → Legacy
  Dialogs → Scatter/Dot…) → chọn **Simple Scatter** → X = `htuo`, Y = `csa` → OK.
- **Đọc:** đám mây đi xuống nhẹ từ trái sang phải → tương quan **âm yếu–trung**.
- **Vì sao:** scatterplot lộ dạng quan hệ (tuyến tính? cong? ngoại lai?) trước khi
  tin vào con số r.

### Bước 2 — Câu 10: Bivariate Correlations

- **Làm:** Analyze → **Correlate → Bivariate…** → đưa `csa`, `ytruo`, `htuo` vào
  Variables → tick **Pearson** (mặc định), Two-tailed, "Flag significant
  correlations" → OK.
- **Đọc bảng Correlations:** mỗi ô có `Pearson Correlation` / `Sig. (2-tailed)` / `N`.
  - csa ↔ htuo: **r = −0,351**, p = **0,012**
  - csa ↔ ytruo: **r = 0,768**, p = **<0,001**
  - ytruo ↔ htuo: **r = −0,349**, p = **0,013**
- **Kết luận:** tuổi tăng → CLCS (cả trước lẫn sau) giảm nhẹ–vừa; CLCS trước/sau
  liên hệ **dương mạnh** — người vốn khỏe trước tai nạn thường hồi phục tốt hơn.

{{guide:d11-correlate}}

### Bước 3 — Câu 11: Linear Regression đơn biến

- **Làm:** Analyze → **Regression → Linear…** → **Dependent** = `csa`,
  **Independent** = `htuo` → OK. Lặp lại với `csa ~ ytruo` và `ytruo ~ htuo`.
- **Đọc:** bảng **Model Summary** → cột **R Square**; bảng **Coefficients** →
  dòng **(Constant)** = B0, dòng biến = **B1** + `t` + `Sig.`
  - `csa = 85,795 − 0,362·htuo` — R² = **0,123**, p = 0,012
  - `csa = 1,821 + 0,940·ytruo` — R² = **0,589**, p < 0,001
  - `ytruo = 85,978 − 0,293·htuo` — R² = **0,121**, p = 0,013
- **Diễn giải B1:** "mỗi 1 tuổi tăng, CLCS sau giảm 0,362 điểm" — hệ số đo *mức
  thay đổi kỳ vọng*, còn r đo *sức mạnh liên hệ*; Sig. giống nhau vì cùng câu hỏi.
- **Xem lại p:** chú ý p của B1 trùng p của r ở Bước 2 — với hồi quy đơn, hai kiểm
  định là một.

{{guide:d11-regression}}

### Bước 4 — Thử nhanh Spearman (nhận biết, không bắt buộc)

- **Làm:** mở lại Bivariate → tick thêm **Spearman** → OK.
- **Đọc:** bảng thứ hai cho hệ số `rho`: csa~htuo ρ=−0,287; csa~ytruo ρ=0,919 —
  cùng hướng, cùng ý nghĩa → kết luận Pearson không bị lệch phân phối làm méo.

## F. Mô phỏng SPSS

Hai mô phỏng: hộp Bivariate Correlations + bảng Correlations 3×3; hộp Linear
Regression + bảng Model Summary & Coefficients. Có tab Windows/macOS như mọi ngày.

## G. Bài tập tự làm

Mở [workbook](/d11/bai-tap/): làm lại 3 cặp tương quan (Q10) + 3 hồi quy đơn
(Q11); đọc thêm khung nâng cao Q12 nếu còn thời gian.

## H. Kiểm tra kết quả

- [ ] Q10: r(csa,htuo)=−0,351 p=0,012; r(csa,ytruo)=0,768 p<0,001;
  r(ytruo,htuo)=−0,349 p=0,013.
- [ ] Q11: R² lần lượt 0,123 / 0,589 / 0,121; p của B1 trùng p của r.
- [ ] Diễn giải được B1 = −0,362 thành lời ("mỗi tuổi…").
- [ ] Nêu được 1 lý do "tương quan ≠ nhân quả" cho cặp csa~ytruo.

## I. Giải thích đáp án

[đáp án](/d11/dap-an/) — bảng Correlations đầy đủ, ba phương trình hồi quy, cách
đọc R², và bẫy hay gặp (đảo X/Y, nhầm r² với r, đọc nhầm dòng Sig. của bảng ANOVA
hồi quy).

## J. Chuyển bài

Xong phần "biến số ↔ biến số". Ngày 12–13 là **capstone Bài TH3**: mở `File5_Phan2.sav`
(nghiên cứu sinh thiết tuyến tiền liệt, n=296), tự khám phá dữ liệu, chọn phép
phân tích và **viết báo cáo ngắn** — tổng hợp mọi kỹ năng 11 ngày.

## K. Đọc thêm — P2-Q12 (nâng cao, không bắt buộc)

Câu 12 hỏi hồi quy **đa biến**: `csa ~ htuo + nsonga + ytruo`. Cùng dialog Linear,
chỉ khác là Independent nhận **3 biến**. Kết quả kiểm chứng (NOT_RUN): R² = 0,623,
F = 25,314, p<0,001 — nhưng trong bảng Coefficients chỉ `ytruo` còn ý nghĩa
(B=0,850, t=7,00, p<0,001); `htuo` và `nsonga` tắt dấu khi đã có `ytruo`.
Bài học mở rộng: thêm biến không tự động làm mô hình tốt hơn — mỗi biến phải
đóng góp thêm phần giải thích. **Không yêu cầu nộp; chỉ cần biết nút và biết
đọc B/Sig. từng biến.**
