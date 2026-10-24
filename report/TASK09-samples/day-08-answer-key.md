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
  OR ≈ 1,10.
- Câu mẫu: "Tỷ lệ đạt kiểm soát HA không khác biệt có ý nghĩa giữa nữ (60,0%) và nam (57,7%)
  (χ²(1) = 0,07; p = 0,79)."

*Đây là ví dụ "không liên quan" — quan trọng không kém ví dụ p<0,001: học cách viết kết quả
khi không có gì để nói.*

*Lỗi hay gặp:* đọc % theo cột thay vì % theo hàng → số lạc. Kiểm tra: % hàng của mỗi hàng phải
cộng thành ~100%.

## BT2 — Khi nào cần Fisher?

1. Expected (mới × biến chứng) = (15 × 7)/30 = **3,5** < 5.
2. **Chi-square không đáng tin** ở đây (expected < 5, bảng 2×2) → đọc dòng **Fisher's Exact Test**
   (SPSS in sẵn trong bảng Chi-Square Tests; đọc cột "Exact Sig.").
3. **Không thay đổi ý nghĩa của p** — vẫn là xác suất thấy bảng cực đoan như vậy nếu thật sự
   không liên quan; chỉ khác cách tính (đếm trực tiếp thay vì xấp xỉ χ²).

## BT3 — Diễn giải OR

1. **Sai** — OR không phải RR; "odds" ≠ "nguy cơ". Với sự kiện thường gặp, OR phóng đại so với RR.
2. "Người hút thuốc hiện tại có odds đạt kiểm soát HA cao gấp ~2,8 lần người không hút thuốc
   (trong mẫu này)." *(Đọc kỹ chiều: nếu biến là "mất kiểm soát" thì đảo lại.)*
3. OR = 0,55 → odds đạt kiểm soát ở nhóm hút thuốc chỉ bằng ~0,55 lần — **liên quan ngược hướng**
   (hút thuốc liên quan đến kiểm soát kém).

## BT4 — Tình huống mới

1. "Tỷ lệ đau gối có khác giữa bệnh nhân béo phì và không béo phì không?"
2. `obese` vào **Row** (biến giải thích), `knee_pain` vào **Column** (kết quả) → tick **Row %**
   để hỏi "trong nhóm béo phì, bao nhiêu % đau gối". *(Đặt ngược vẫn chạy được — chỉ đổi cách
   đọc %; quan trọng là % phải theo đúng mẫu số câu hỏi.)*
3. Câu kết quả: "Tỷ lệ đau gối ở nhóm béo phì là …% so với …% ở nhóm không béo phì (χ²(1)=…, p=0,03;
   OR=2,1)." Giới hạn: "Liên quan thống kê này không chứng minh béo phì gây đau gối — thiết kế
   cắt ngang, có thể có nhiễu; và OR ≠ RR nên không nói 'nguy cơ tăng 2,1 lần'."
