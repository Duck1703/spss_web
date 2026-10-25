# Ngày 09 — So sánh trung bình (1 mẫu & 2 nhóm độc lập)

> **Lộ trình:** Exercise-first 14 ngày · **Thời lượng:** ~100 phút · **Dataset:** `exercises/bai_2/File1.sav`
> **Trạng thái:** READY v3 (Task 15) — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`; số liệu kiểm chứng Python `NOT_RUN`.
> **Bài tập nguồn hôm nay:** **P2-Q04**, **P2-Q05**, **P2-Q07** (bắt buộc).

---

## A. Bài tập gốc — "trung bình có khác nhau không?"

{{exercise:P2-Q04}}

{{exercise:P2-Q05}}

{{exercise:P2-Q07}}

> **Đọc đề gốc:** `BSNT_Bài TH_Phần 2_Cô Hiền.pdf` trang 3 — Câu 4 (CLCS trước tai nạn
> có thể xem là 75?), Câu 5 (CLCS trước tai nạn QB vs T.T.Huế), Câu 7 (tuổi QB vs QT).
> File đề gọi "File1_Phan 2.sav" — đó chính là `File1.sav` (xác minh bằng codebook).

## B. Mục tiêu

Chuyển từ câu hỏi **tỷ lệ** (Ngày 08) sang câu hỏi **trung bình trên biến số**. Ba
phép kiểm định đầu tiên trong nhóm "Compare Means":
- **One-Sample T Test:** trung bình mẫu vs một con số giả định (75).
- **Independent-Samples T Test:** trung bình hai nhóm *người khác nhau* (hai tỉnh).

Kỹ năng mấu chốt của buổi: đọc đúng **hai dòng t** trong bảng output — chọn dòng
theo kết quả **Levene's Test**.

## C. Dữ liệu cần mở

| Bài | File | Biến | Ghi chú |
|---|---|---|---|
| Q04–Q07 | `bai_2/File1.sav` | `ytruo` (CLCS trước TN), `htuo` (tuổi), `otin` (1=QB, 2=QT, 3=Huế) | nhãn lỗi font — tra codebook trang 2 |

> 📁 File1 dùng lại cả Ngày 09–11 — lần đầu mở, hãy lướt Variable View đối chiếu
> codebook trước (tên biến tắt: `otin`=tỉnh, `htuo`=tuổi, `ytruo`=ý trước, `csa`=…sau).

## D. Kiến thức cần biết (vừa đủ)

- **Câu hỏi → phép kiểm định:**
  - "Trung bình có bằng X không?" → **one-sample t** (1 biến số, 1 hằng số).
  - "Trung bình 2 nhóm có khác nhau?" → **independent t** (1 biến số + 1 biến nhóm 2 mã).
  - ⚠️ "Trước vs sau *của cùng người*" → KHÔNG phải independent — đó là paired t
    (Ngày 10). Nhầm kiểu mẫu = sai toàn bộ kết luận.
- **Giả định:** biến số xấp xỉ phân phối chuẩn trong (mỗi) nhóm; quan sát độc lập;
  cho independent t thêm **phương sai hai nhóm bằng nhau** — kiểm bằng Levene.
- **Đọc Independent-Samples Test:** SPSS in **hai dòng**: "Equal variances assumed"
  và "…not assumed". Nhìn **Levene's Test p**:
  - p ≥ 0,05 → phương sai không khác nhau ý nghĩa → đọc dòng **assumed**.
  - p < 0,05 → đọc dòng **not assumed** (Welch — df không nguyên là bình thường).
- **Đọc kết quả:** cột **Sig. (2-tailed)** = p hai phía (đề luôn hỏi hai phía).
  Kèm **95% CI của chênh lệch** — nếu CI chứa 0 tương ứng p ≥ 0,05.
- **Một phía vs hai phía:** đề chỉ hỏi "khác nhau không" → luôn đọc **2-tailed**;
  không tự ý chia đôi p.
- **Ý nghĩa thống kê ≠ ý nghĩa lâm sàng:** p=0,23 ở Q05 nói *chưa đủ bằng chứng*,
  không nói "hai tỉnh bằng nhau" — CI −3,9…17,2 cho thấy chênh lệch thật có thể
  lên tới ~17 điểm (mẫu nhỏ).

## E. Thực hành có hướng dẫn

> ⚠️ `MAC_SPSS_VERIFICATION_PENDING`

### Bước 1 — Câu 4: One-Sample T Test

- **Làm:** mở `File1.sav` (All cases). Analyze → **Compare Means → One-Sample T
  Test…** → `ytruo` → Test Variable(s) → ô **Test Value: 75** → OK.
- **Đọc:** bảng One-Sample Statistics: n=50, Mean=**75,32**, SD=13,73.
  Bảng One-Sample Test: **t = 0,165**, df=49, Sig (2-tailed) = **0,870**; Mean
  Difference = 0,32, 95% CI của chênh lệch: **−3,58 đến 4,22**.
- **Kết luận:** CLCS trung bình trước tai nạn không khác 75 có ý nghĩa → **có thể
  xem là 75**.

{{guide:d09-1sample}}

### Bước 2 — Câu 5: Independent-Samples T (ytruo ~ QB vs Huế)

- **Làm:** Analyze → **Compare Means → Independent-Samples T Test…** →
  `ytruo` → Test Variable(s); `otin` → Grouping Variable → **Define Groups…** →
  Group 1: `1`, Group 2: `3` → Continue → OK.
- **Đọc Group Statistics:** QB (1): n=18, 78,67±15,68; Huế (3): n=12, 72,00±12,42.
- **Đọc Independent-Samples Test:** **Levene's p = 0,481** ≥ 0,05 → đọc dòng
  *Equal variances assumed*: **t = 1,234**, df=28, p = **0,227**;
  Mean diff = 6,67, 95% CI **−3,88…17,22**.
- **Kết luận:** CLCS trước tai nạn QB cao hơn Huế ~6,7 điểm nhưng **chưa ý nghĩa
  thống kê** (mẫu nhỏ, CI chứa 0).

{{guide:d09-independent}}

### Bước 3 — Câu 7: tuổi QB vs QT

- **Làm:** cùng dialog: `htuo` → Test Variable; `otin` → Grouping; Define Groups
  `1` và `2` → OK.
- **Đọc:** QB: n=18, 35,06±16,58; QT: n=20, 36,90±18,91. Levene p = **0,170** →
  dòng assumed: t = **−0,318**, df=36, **p = 0,752**.
- **Kết luận:** tuổi trung bình hai tỉnh **không khác nhau có ý nghĩa**.

## F. Mô phỏng SPSS

Hai mô phỏng: hộp One-Sample T (Test Value 75) + bảng output; hộp Independent-Samples
T + Define Groups + bảng hai dòng t với Levene.

## G. Bài tập tự làm

Mở [workbook](/d09/bai-tap/): làm lại **P2-Q04**, **P2-Q05**, **P2-Q07**; câu đố
nhận diện độc lập vs ghép cặp.

## H. Kiểm tra kết quả

- [ ] Q04: t=0,165, df=49, p=0,870; CI chênh lệch −3,58…4,22 chứa 0.
- [ ] Q05: n=18 vs 12; Levene p=0,481 → dòng assumed t=1,234, df=28, p=0,227.
- [ ] Q07: t=−0,318, df=36, p=0,752.
- [ ] Biết nói rõ "chưa đủ bằng chứng khác nhau" thay vì "bằng nhau".

## I. Giải thích đáp án

[đáp án](/d09/dap-an/) — đủ ba bảng output (từng con số), quy tắc chọn dòng Levene,
và các kết luận mẫu.

## J. Chuyển bài

Hôm nay là hai mẫu **độc lập**. Câu 9 của đề hỏi khác: CLCS *của cùng người* trước
vs sau tai nạn — quan sát **ghép cặp** cần paired t; còn so sánh **3 tỉnh** cùng lúc
vượt t-test → one-way ANOVA. Toàn bộ ở Ngày 10.

## K. Đọc thêm (không bắt buộc)

- Nếu Levene p < 0,05 → đọc dòng Welch (Equal variances not assumed) — df sẽ lẻ
  (vd 27,04) và p hơi khác: đó là thiết kế an toàn, không phải lỗi.
- Vì sao không so 3 tỉnh bằng 3 lần t-test? Mỗi kiểm định thêm rủi ro sai lầm loại I
  (đa so sánh) — Ngày 10 dùng ANOVA để kiểm một lần.
