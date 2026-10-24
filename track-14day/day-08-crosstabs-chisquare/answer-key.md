# Ngày 08 — Đáp án & giải thích

> Cross-check Python (`NOT_RUN` trên SPSS). Sai số làm tròn cho phép.

---

## BT1 — `sex_code` × `bp_controlled`

Kỳ vọng (Python, trên các ca có đủ 2 biến):

| | ctrl=0 | ctrl=1 | % đạt |
|---|---|---|---|
| Nữ (1) | 26 | 39 | 60,0% |
| Nam (2) | 30 | 41 | 57,7% |

- n hợp lệ = 136 (1 ca thiếu `sex_code` + 23 thiếu `bp_controlled`).
- Expected min ≈ 26,8 → Chi-square dùng được; **χ² = 0,07, df=1, p = 0,79** — không có nghĩa thống kê.
- **OR — đọc đúng chiều** *(kỳ vọng theo quy ước sắp mã của SPSS, xác nhận lại khi chạy thật — `NOT_RUN`)*:
  - Biến tiếp xúc (hàng): `sex_code`; sự kiện SPSS dùng = cột mã đầu tiên `bp_controlled = 0` (không đạt kiểm soát).
  - Nhãn `Odds Ratio for sex_code (1 / 2)` kỳ vọng in **OR ≈ 0,91** = odds *không* đạt kiểm soát ở **Nữ** bằng 0,91 lần ở **Nam** [tính: (26×41)/(39×30)].
  - Phát biểu tương đương (đảo chiều): odds *đạt* kiểm soát ở Nữ ≈ **1,10** lần Nam.
  - Cả 0,91 và 1,10 đều là **cùng một OR** — chỉ khác chiều phát biểu; cả hai đều gần 1 → không liên quan.
- Câu mẫu: "Tỷ lệ đạt kiểm soát HA ở nữ là 60,0% và nam 57,7%; phân tích không cho thấy
  bằng chứng về sự khác biệt giữa hai giới (χ²(1) = 0,07; p = 0,79; OR ≈ 0,91)."

*Cách nói đúng về kết quả không có nghĩa:* **"không có ý nghĩa thống kê" nghĩa là phân tích này
không đưa ra đủ bằng chứng về sự khác biệt — nó KHÔNG chứng minh hai nhóm giống hệt nhau.**
Với mẫu 136 ca, một khác biệt thật nhỏ vẫn có thể tồn tại mà phân tích không phát hiện được.
Không viết "hai giới giống nhau" hay "giới tính không ảnh hưởng".

*Đây là ví dụ "không đủ bằng chứng" — quan trọng không kém ví dụ p<0,001: học cách viết kết quả
khi không có gì để nói, mà không kết luận quá tay.*

*Lỗi hay gặp:* đọc % theo cột thay vì % theo hàng → số lạc. Kiểm tra: % hàng của mỗi hàng phải
cộng thành ~100%.

## BT2 — Khi nào cần Fisher?

1. Expected (mới × biến chứng) = (15 × 7)/30 = **3,5** < 5.
2. **Chi-square không đáng tin** ở đây (expected < 5, bảng 2×2) → đọc dòng **Fisher's Exact Test**
   (SPSS in sẵn trong bảng Chi-Square Tests; đọc cột "Exact Sig.").
3. **Không thay đổi ý nghĩa của p** — vẫn là xác suất thấy bảng cực đoan như vậy nếu thật sự
   không liên quan; chỉ khác cách tính (đếm trực tiếp thay vì xấp xỉ χ²).

## BT3 — Diễn giải OR (ví dụ GIẢ ĐỊNH)

Định hướng đã cho: tiếp xúc = `smoker` (0 = không hút → nhóm tham chiếu; 1 = đang hút → nhóm so sánh);
sự kiện = `bp_controlled = 0` (mất kiểm soát HA); OR = odds sự kiện ở nhóm đang hút / nhóm không hút.

1. **Sai.** OR = 2,8 nói về **odds**, không phải nguy cơ (risk) — OR ≠ RR; với sự kiện thường gặp
   OR luôn "phóng đại" so với RR. Ngoài ra ví dụ này là giả định, không có bảng đếm để quy về risk.
2. Câu mẫu: *"Trong mẫu giả định này, odds bị mất kiểm soát huyết áp ở nhóm đang hút thuốc cao
   gấp ~2,8 lần nhóm không hút thuốc (OR = 2,8)."* — đủ 3 yếu tố: tiếp xúc (đang hút vs không hút),
   sự kiện (mất kiểm soát), chiều (hút/không hút).
3. OR = 0,55 cùng định hướng → *"odds bị mất kiểm soát HA ở nhóm đang hút thuốc chỉ bằng ~0,55
   lần nhóm không hút"* — **ngược hướng** (hút thuốc liên quan đến odds mất kiểm soát *thấp hơn*
   trong ví dụ giả định này). Đảo đồng thời hai chiều: odds *đạt* kiểm soát ở nhóm đang hút ≈
   1/0,55 ≈ 1,8 lần nhóm không hút — cùng một OR.

*Lỗi hay gặp:* đổi `smoking_status` 3 mức (0=không, 1=đã bỏ, 2=đang hút) của `clinic_bp` thành
"smoker 0/1" bằng trí nhớ → sai nhóm tham chiếu. Nếu muốn OR hút/không-hút từ biến 3 mức, phải
**recode** thành nhị phân trước (Ngày 03 đã tập recode) — và Crosstabs trên biến 3 mức sẽ **không**
in bảng Risk Estimate.

## BT4 — Chỉ có thống kê, chưa có bảng

1. "Tỷ lệ đau gối có khác giữa bệnh nhân béo phì và không béo phì không?"
2. `obese` vào **Row** (biến giải thích), `knee_pain` vào **Column** (kết quả) → tick **Row %**
   để hỏi "trong nhóm béo phì, bao nhiêu % đau gối". *(Đặt ngược vẫn chạy được — chỉ đổi cách
   đọc %; quan trọng là % phải theo đúng mẫu số câu hỏi.)*
3. Câu kết quả chỉ dùng số đã có: *"Phân tích cho thấy có liên quan thống kê giữa béo phì và đau
   gối (χ²(1), p = 0,03); odds đau gối ở nhóm béo phì cao gấp ~2,1 lần nhóm không béo phì (OR = 2,1)."*
   **Không tính được** (vì đề chỉ cho p và OR, không cho bảng đếm 2×2): tỷ lệ % đau gối của từng
   nhóm, số ca mỗi ô, expected counts, và RR. Muốn có % phải lấy lại bảng Crosstabs đầy đủ.
   Câu giới hạn: "Liên quan thống kê này không chứng minh béo phì *gây* đau gối — thiết kế cắt
   ngang, có thể có nhiễu; và OR ≠ RR nên không nói 'nguy cơ tăng 2,1 lần'."

*Lỗi hay gặp:* bịa thêm % (ví dụ viết "40% so với 25%") để câu văn nghe đầy đủ — **tuyệt đối
không**. Số nào không có trong dữ kiện thì nói rõ là chưa tính được.
