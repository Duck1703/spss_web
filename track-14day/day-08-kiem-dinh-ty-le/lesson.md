# Ngày 08 — Kiểm định về tỷ lệ (GOF · Binomial · 2×2 nâng cao)

> **Lộ trình:** Exercise-first 14 ngày · **Thời lượng:** ~110 phút · **Datasets:** `p1_B01_HA (1).sav` · `P1_B02 CrossTab (2).sav` · `bai_2/File1.sav`
> **Trạng thái:** READY v3 (Task 15) — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`; số liệu kiểm chứng Python `NOT_RUN`.
> **Bài tập nguồn hôm nay:** **P1-Q22**, **P2-Q02**, **P2-Q03** (bắt buộc) · **P1-Q21**, **P2-Q01**, **P1-Q40** (luyện thêm).

---

## A. Bài tập gốc — "tỷ lệ có khớp giá trị kỳ vọng không?"

{{exercise:P1-Q22}}

{{exercise:P2-Q02}}

{{exercise:P2-Q03}}

> **Đọc đề gốc:** `Bai thuc hanh SDH P1.pdf` Câu 22 (tr.3) — "Kiểm định xem tỉ lệ giới
> tính trong điều tra này có cùng phân phối với tỷ lệ sinh sản tự nhiên?" (3 trường
> hợp: **Nam** 55/40/50%); `BSNT_Bài TH_Phần 2_Cô Hiền.pdf` Câu 2–3 (tr.3) — tỷ lệ
> nam:nữ có khớp 0,5:0,5 không; tỷ lệ nằm viện trong nam có thể xem là 60% không.

## B. Mục tiêu

Ngày 05 bạn hỏi "hai biến có liên quan không" (bảng chéo). Hôm nay câu hỏi khác:
"**một** tỷ lệ quan sát có khớp con số kỳ vọng không" — tỷ lệ giới tính có đúng
55:45 / 40:60 / 50:50? Đây là **kiểm định phù hợp** (Chi-square goodness-of-fit) và
**kiểm định nhị thức** (Binomial). Phần luyện thêm gom hai bài bị dời từ Ngày 05:
**P1-Q21** (bảng tổng hợp → Weight Cases → RR/OR) và **P2-Q01** (crosstabs trên
File1 — lần đầu dùng dataset gói 2).

## C. Dữ liệu cần mở

| Bài | File | Biến | Ghi chú |
|---|---|---|---|
| Q22 | `p1_B01_HA (1).sav` | `GTinh` (1=Nữ, 2=Nam) | 3 lần chạy với 3 tỷ lệ kỳ vọng |
| Q02, Q03 | `bai_2/File1.sav` | `igioitin` (1=Nam,2=Nữ), `gnamvie` (0/1) | File1 mở lần đầu hôm nay |
| Q21 (thêm) | `P1_B02 CrossTab (2).sav` | `benh`, `phoinhiem`, `soluong` | file 4 dòng — cần Weight Cases |
| Q01-P2, Q40 (thêm) | `File1.sav` / `p1_B01_HA` | `cchanthuon`,`gnamvie` / `TSu.RBia`,`MDoSD.RB` | McNemar cần recode trước |

## D. Kiến thức cần biết (vừa đủ)

- **Chi-square phù hợp (GOF):** so tần số quan sát từng nhóm với tần số *kỳ vọng* theo
  giả thuyết. p < 0,05 → phân phối quan sát **không khớp** tỷ lệ giả định; p ≥ 0,05 →
  chưa bác bỏ được. SPSS: **Analyze → Nonparametric Tests → Legacy Dialogs →
  Chi-square…**, ô **Expected Values** nhập từng con số theo thứ tự mã tăng dần.
  ⚠️ Thứ tự nhập kỳ vọng phải theo **mã biến**, không theo thứ tự câu chữ — Câu 22
  nói "Nam: 55" nhưng mã 1 là **Nữ**, nên nhập 279 (Nữ) rồi 341 (Nam).
- **Binomial:** trường hợp riêng của GOF khi chỉ có 2 nhóm và đề cho sẵn tỷ lệ p₀.
  SPSS: **Nonparametric → Legacy Dialogs → Binomial…**, nhập **Test Proportion = 0,60**.
  Nếu biến có >2 giá trị phải lọc mẫu trước (Q03 chỉ hỏi trong **nam**).
- **"Không bác bỏ" ≠ "chứng minh đúng":** p=0,74 nghĩa là dữ liệu *tương thích* với
  tỷ lệ 40:60, không chứng minh tỷ lệ đúng là vậy.
- **Weight Cases** (Q21): file 4 dòng tổng hợp — mỗi dòng đại diện `soluong` người;
  bắt buộc Data → Weight Cases → `soluong` trước khi Crosstabs, kèm **Risk** để đọc
  RR/OR. **McNemar** (Q40): chi-square cho bảng 2×2 **ghép cặp** (cùng người, hai
  thời điểm) — chỉ quan tâm các ô bất đồng (thay đổi trạng thái).
- **Liên quan ≠ nhân quả** và "khác biệt ý nghĩa" ≠ "khác biệt lớn về lâm sàng":
  RR=4,3 của Q21 rất lớn, nhưng bảng Q20 (8 vs 2 người) cho p≈0,11 là quá nhỏ để kết
  luận dù hướng giảm.

## E. Thực hành có hướng dẫn

> ⚠️ `MAC_SPSS_VERIFICATION_PENDING`

### Bước 1 — Câu 22: GOF cho GTinh, ba lần chạy

- **Làm:** mở `p1_B01_HA (1).sav`. Analyze → **Nonparametric Tests → Legacy Dialogs
  → Chi-square…** → `GTinh` → Test Variable List.
- **Làm:** ô **Expected Values** → chọn **Values:** → nhập từng số → Add:
  - Trường hợp Nam55:Nữ45 → mã1 (Nữ) = `620*0,45 = 279` → Add; mã2 (Nam) = `341` → Add.
  - OK → đọc bảng **Test Statistics**: χ² ≈ **61,316**, df=1, p < 0,001 → **không khớp**.
- **Làm lại** hai lần: Nam40:Nữ60 (nhập 372 rồi 248) → χ² ≈ **0,108**, p ≈ **0,743**
  → **khớp**; Nam50:Nữ50 (310, 310) → χ² ≈ **28,103**, p < 0,001 → không khớp.
- **Kết luận đề:** tỷ lệ giới tính mẫu phù hợp phân phối Nam40:Nữ60.

{{guide:d08-gof}}

### Bước 2 — P2-Q02: GOF trên File1

- **Làm:** mở `bai_2/File1.sav` (nhãn biến lỗi font — xem codebook trang 2 PDF gói 2:
  `igioitin` = giới tính: 1=Nam, 2=Nữ).
- **Làm:** Chi-square GOF → `igioitin` → Expected **All categories equal** (mặc định
  = 0,5:0,5) → OK.
- **Đọc:** quan sát 28 nam / 22 nữ; χ² ≈ **0,720**, df=1, **p = 0,396** → tỷ lệ
  nam:nữ **không khác biệt có ý nghĩa** so với 0,5:0,5.

### Bước 3 — P2-Q03: Binomial 60% trong nhóm nam

- **Làm:** Data → Select Cases → If… → `igioitin = 1` → OK (còn 28 nam).
- **Làm:** Nonparametric → Legacy Dialogs → **Binomial…** → `gnamvie` → Test
  Variable → **Test Proportion: 0,60** → OK.
- **Đọc:** bảng Binomial Test: tỷ lệ quan sát nằm viện = **0,54** (15/28);
  Exact Sig. (2-sided) ≈ **0,564** → chưa bác bỏ được giả thuyết 60%.
- **Làm:** trả All cases. *(Có thể thay Binomial bằng GOF với kỳ vọng 0,6:0,4 —
  cùng kết luận.)*

{{guide:d08-binomial}}

### Bước 4 — (Luyện thêm) Câu 21: Weight Cases + Risk

- **Làm:** mở `P1_B02 CrossTab (2).sav` — 4 dòng: `benh` (1=CTC+,2=CTC−),
  `phoinhiem` (1=HPV+,2=HPV−), `soluong` (số người mỗi ô).
- **Làm:** Data → **Weight Cases…** → Weight cases by → `soluong` → OK
  (status bar "Weight On" — file giờ đại diện **88** người).
- **Làm:** Crosstabs `phoinhiem` × `benh` → Cells: Row % → Statistics: **Chi-square
  + Risk** → OK.
- **Đọc:** CTC+ ở HPV+ = 20/28 = **71,4%** vs HPV− = 10/60 = **16,7%**;
  Pearson χ² ≈ **25,480**, p<0,001; **RR ≈ 4,29**; **OR ≈ 12,50** → người HPV+ có
  nguy cơ CTC gấp ~4,3 lần. **Nhớ tắt Weight** sau khi xong.

{{guide:d08-weight}}

### Bước 5 — (Luyện thêm) P2-Q01: crosstabs File1

- **Làm:** mở `File1.sav` → Crosstabs `cchanthuon` (vị trí CT nặng: 1=Đầu/CS,
  2=Thân, 3=Tay/chân) × `gnamvie` → Chi-square → OK.
- **Đọc:** bảng 3×2, Pearson χ² ≈ **0,502**, df=2, **p = 0,778** → chưa có bằng
  chứng vị trí chấn thương nặng liên quan việc nằm viện.

### Bước 6 — (Luyện thêm) Câu 40: McNemar rượu bia

- **Làm:** `p1_B01_HA`: Transform → Recode into Different → `MDoSD.RB` → `RB_now`:
  `0 → 0` (không uống); `1 thru 4 → 1` (đang uống).
- **Làm:** Crosstabs `TSu.RBia` (1=có TS,2=không) × `RB_now` → Statistics →
  **McNemar** → OK.
- **Đọc:** trước đây uống 288 (46,5%), hiện tại 213 (34,4%); ô bất đồng 4 vs 79;
  McNemar p < 0,001 → tỷ lệ uống **giảm có ý nghĩa** giữa hai thời điểm.
- *(Q20 tương tự với hút thuốc: 8 vs 2 → p≈0,109 — mẫu bất đồng quá nhỏ.)*

## F. Mô phỏng SPSS

Bốn mô phỏng: hộp Chi-square GOF với Expected Values (Bước 1), hộp Binomial (Bước 3),
Weight Cases + Risk (Bước 4 — chuyển từ Ngày 05). McNemar dùng lại dialog Statistics
quen thuộc (tick McNemar thay Chi-square).

## G. Bài tập tự làm

Mở [workbook](/d08/bai-tap/): làm lại **P1-Q22** (3 kết quả), **P2-Q02**, **P2-Q03**;
phần luyện thêm **P1-Q21**, **P2-Q01**, **P1-Q40** nếu còn thời gian.

## H. Kiểm tra kết quả

- [ ] Câu 22: 3 cặp χ²/p (61,316/<0,001 · 0,108/0,743 · 28,103/<0,001) — nhập kỳ vọng
  theo thứ tự mã 1→2 chứ không theo câu chữ.
- [ ] Q02: χ²=0,720, p=0,396; Q03: tỷ lệ quan sát 0,54, p=0,564.
- [ ] Q21 (nếu làm): bảng sau Weight có Total=88; đọc được RR và OR.
- [ ] Kết luận viết "không bác bỏ / phù hợp" chứ không viết "chứng minh tỷ lệ đúng".

## I. Giải thích đáp án

[đáp án](/d08/dap-an/) — từng kết quả kèm cách nhập Expected Values đúng thứ tự mã,
bẫy nam/nữ ngược, và mẫu câu kết luận chuẩn cho GOF + Binomial + McNemar.

## J. Chuyển bài

Hôm nay hỏi "tỷ lệ có khớp không". Ngày 09–10 đổi kiểu câu hỏi sang **biến số**:
"trung bình có bằng 75 không" (one-sample t), "hai tỉnh có khác nhau không"
(independent t), "trước/sau tai nạn khác nhau không" (paired t) — toàn trên File1.

## K. Đọc thêm (không bắt buộc)

- P1-Q39: GOF đồng đều cho `TSu.HA` (χ²=72,642, p<0,001 — không đồng đều) và
  `HA.GDinh` (χ²=25,606, p<0,001) — cùng thao tác Bước 1, Expected = All equal.
- SPSS mới hơn có **Analyze → Nonparametric Tests → One Sample** (dialog mới, tự
  chọn kiểm định) — Legacy Dialogs vẫn cho output giống sách giáo khoa hơn, nên bài
  này dùng Legacy.
