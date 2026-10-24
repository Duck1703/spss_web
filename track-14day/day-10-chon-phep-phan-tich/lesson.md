# Ngày 10 — Chọn phép phân tích phù hợp

> **Lộ trình:** Practice-first 14 ngày · **Thời lượng:** ~90–120 phút · **Dataset:** `clinic_bp_my_clean.sav`
> **Trạng thái:** DRAFT — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`.

---

## A. Hôm nay bạn sẽ làm gì

1. Dùng **bảng quyết định 3 câu hỏi** để chọn phương pháp cho một câu hỏi y khoa bất kỳ.
2. Luyện chọn cho 6–8 tình huống — không chạy máy cho đến khi chọn xong.
3. Tùy chọn: chạy thử **One-Way ANOVA** 3 nhóm để biết nó tồn tại (không đào sâu).

## B. Tình huống y khoa

Sau 9 ngày, bạn đã có 4 công cụ: mô tả, t-test độc lập, t-test ghép cặp, chi-square, tương quan.
Người hành nghề thực tế không hỏi "chạy test nào" — họ hỏi **"câu hỏi này thuộc dạng nào"**.
Hôm nay là ngày luyện phản xạ đó.

## C. Bảng quyết định 3 câu hỏi

Với mỗi câu hỏi nghiên cứu, trả lời lần lượt:

**Câu hỏi 1 — Biến kết quả (outcome) là định tính hay định lượng?**

**Câu hỏi 2 — So sánh nhóm hay liên hệ giữa 2 biến? Nếu so nhóm: độc lập hay ghép cặp?**

**Câu hỏi 3 — Điều kiện có thỏa không (phân phối, expected count, cực trị, n)?**

| Tình huống | Phương pháp nhập môn |
|---|---|
| Mô tả biến định tính | Frequencies, n (%) |
| Mô tả biến định lượng | Mean±SD (đối xứng) / Median [IQR] (lệch) |
| Định lượng × **2 nhóm độc lập** | Independent t-test (Welch nếu Levene bất ổn) |
| Định lượng × **trước–sau cùng người** | Paired t-test |
| Định tính × định tính | Crosstabs + Chi-square (Fisher nếu expected<5) |
| Định lượng × định lượng | Scatterplot → Pearson (thẳng) / Spearman (cong, ordinal) |
| Định lượng × **3+ nhóm độc lập** | ANOVA *(tùy chọn hôm nay — chương trình mở rộng sau)* |
| Dữ liệu quá lệch / n nhỏ / thứ hạng | Tạm dừng → hỏi chuyên gia về nonparametric |

Quy tắc vàng: **nếu không chắc câu hỏi 1–2, đừng mở Analyze** — quay lại codebook trước.

## D. Thực hành trên Mac

> ⚠️ `MAC_SPSS_VERIFICATION_PENDING`

### Bước 1 — Luyện chọn (không chạy)

Làm BT1 trong workbook: 6 tình huống, mỗi câu trả lời 3 câu hỏi + chọn phương pháp.

### Bước 2 — Kiểm chứng ngược trên dataset quen

Cho mỗi phân tích bạn đã làm tuần trước, tự hỏi lại: "3 câu hỏi cho đáp án gì, và tôi đã dùng
đúng phương pháp chưa?"

| Phân tích đã làm | Q1 | Q2 | Q3 → phương pháp |
|---|---|---|---|
| `sbp_followup` ~ `treatment_group` (D06) | định lượng | 2 nhóm độc lập | phân phối ổn, Levene 0,298 → t-test độc lập |
| `sbp_baseline` vs `sbp_followup` (D07) | định lượng | paired | diff gần đối xứng → paired t-test |
| `diabetes_flag` × `bp_controlled` (D08) | định tính | 2 biến định tính | expected min 21,4 → Chi-square |
| `bmi` × `sbp_baseline` (D09) | định lượng | liên hệ | scatter gần thẳng → Pearson (Spearman đối chiếu) |

### Bước 3 — (Tùy chọn) Nhìn thử ANOVA 3 nhóm

Câu hỏi: "Huyết áp nền khác nhau giữa 3 nhóm `smoking_status` không?" — định lượng × 3 nhóm độc lập
→ ngoài t-test, đây là chỗ của **One-Way ANOVA**:

**Analyze → Compare Means → One-Way ANOVA…** → `sbp_baseline` vào **Dependent List**,
`smoking_status` vào **Factor** → OK.

Kỳ vọng (`NOT_RUN`): F = 0,98, **p = 0,377**, mean 3 nhóm ≈ [137,7 ; 141,7 ; 139,7] →
không có khác biệt có nghĩa.

⚠️ Nếu ANOVA có nghĩa, nó chỉ nói "có ít nhất 2 nhóm khác nhau" — biết **cặp nào** khác cần
post-hoc (Tukey/Games-Howell) — thuộc chương trình mở rộng, hôm nay chỉ cần biết nó tồn tại.

## E. Hiểu kết quả của bạn

- Bạn có một **quy trình chọn phương pháp lặp lại được** — đây là kỹ năng dùng cả đời nghề.
- ANOVA p=0,377: viết "không phát hiện khác biệt có nghĩa giữa 3 nhóm hút thuốc (F(2,156)=0,98;
  p=0,377)" — không viết "3 nhóm giống nhau".

## F. Bài tập tự làm

`workbook.md`.

## G. Đáp án

`answer-key.md`.

## H. Checkpoint qua bài

- [ ] Chọn đúng phương pháp cho ≥5/6 tình huống BT1 kèm lý do.
- [ ] Giải thích được vì sao t-test không dùng cho 3 nhóm và chi-square không dùng cho biến số.

## I. Đọc thêm (không bắt buộc)

- **Vì sao không chạy 3 t-test cho 3 nhóm?** Mỗi test một ngưỡng α=0,05 → xác suất "trúng kiểm
  định dương giả" tăng khi chạy nhiều test (multiple comparisons). ANOVA kiểm tra một lần trước.
- **Bản đồ mở rộng (chương trình 16 tuần):** định lượng lệch × 2 nhóm → Mann–Whitney;
  paired lệch → Wilcoxon; 3+ nhóm lệch → Kruskal–Wallis; kết quả nhị phân nhiều biến giải thích →
  logistic regression. Hôm nay chỉ cần biết *chúng tồn tại và khi nào phải hỏi*.
