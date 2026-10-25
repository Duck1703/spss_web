# Ngày 08 — Đáp án & giải thích

> Đọc **sau khi** đã làm xong `workbook.md`. Số liệu tái tính trực tiếp từ các file
> `.sav` nguồn bằng Python (cross-check, nhãn `NOT_RUN`). Binomial/McNemar lấy
> `scipy.binomtest` — SPSS in "Exact Sig. (2-sided)" tương đương.

---

## BT1 — P1-Q22

Quan sát `GTinh`: Nữ (mã 1) = 376, Nam (mã 2) = 244, n=620.
Expected Values nhập **theo thứ tự mã 1→2** (Nữ trước):

| Giả thuyết đề | Nhập (mã1, mã2) | χ² | df | p | Kết luận |
|---|---|---|---|---|---|
| Nam 55 : Nữ 45 | 279, 341 | **61,316** | 1 | <0,001 | không phù hợp |
| Nam 40 : Nữ 60 | 372, 248 | **0,108** | 1 | **0,743** | **phù hợp** |
| Nam 50 : Nữ 50 | 310, 310 | **28,103** | 1 | <0,001 | không phù hợp |

→ Tỷ lệ giới tính của mẫu (60,6% nữ) **khớp phân phối Nam 40 : Nữ 60** — đây cũng là
ý nghĩa "tỷ lệ sinh sản tự nhiên" mà đề ám chỉ khi liệt kê cả ba phương án.

*Lỗi hay gặp:* nhập kỳ vọng theo thứ tự câu chữ "Nam trước" (341 rồi 279 cho 55:45)
→ χ² đúng ngẫu nhiên *cũng ra 61,316* nhưng vì sai lý do; với 40:60 nhập ngược cho
χ²≈110,1 — dấu hiệu nhận biết nhầm thứ tự là con số "quá lớn" so với phân phối quan
sát gần khớp.

## BT2 — P2-Q02

`igioitin` (1=Nam, 2=Nữ): quan sát Nam=28, Nữ=22.
GOF Expected = All equal (25/25): **χ² = 0,720, df = 1, p = 0,396**.
→ Tỷ lệ nam:nữ (56%:44%) **không khác biệt có ý nghĩa** so với 0,5:0,5 — chấp nhận
được giả định cân bằng giới.

## BT3 — P2-Q03

Mẫu con nam (`igioitin=1`, n=28): nằm viện (`gnamvie=1`) = **15/28 = 0,536 (53,6%)**.
Binomial Test Proportion = 0,60 → **Exact Sig. (2-sided) ≈ 0,564**.
→ Chưa đủ bằng chứng bác bỏ giả thuyết "tỷ lệ nằm viện trong nam = 60%" — có thể xem
là 60%. (Lưu ý n=28 nhỏ, khoảng tin cậy cho tỷ lệ rất rộng ~34–73%: "có thể xem 60%"
chứ không phải "là 60%".)

*Lỗi hay gặp:* chạy Binomial trên cả 50 người (chưa lọc nam → tỷ lệ 54% gần giống
nhưng mẫu số sai câu hỏi); nhập Test Proportion 60 thay vì 0,60 (SPSS đòi tỷ lệ
0–1); quên trả All cases.

## BT4 — P1-Q21 (luyện thêm)

File `P1_B02` + Weight by `soluong` → n = 88.

| phoinhiem ↓ / benh → | CTC+ (1) | CTC− (2) | Tỷ lệ CTC+ |
|---|---|---|---|
| **HPV+** (1) | 20 | 8 | 20/28 = **71,4%** |
| **HPV−** (2) | 10 | 50 | 10/60 = **16,7%** |

- Pearson χ² = **25,480**, df = 1, p < 0,001 (Yates ≈ 23,101; expected min ≈ 9,5).
- **Risk Estimate:** RR (CTC+ ở HPV+ vs HPV−) ≈ **4,29**; Odds Ratio ≈ **12,50**.
- Diễn giải: phụ nữ nhiễm HPV có nguy cơ ung thư cổ tử cung **gấp ~4,3 lần** nhóm
  không nhiễm. OR=12,5 lớn hơn RR vì bệnh không hiếm ở nhóm phơi nhiễm — không dùng
  OR để nói "nguy cơ".

*Lỗi hay gặp:* quên Weight → Total=4; đọc OR nhầm thành RR; quên tắt Weight khi
sang File1 (mọi phân tích sau bị nhân sai).

## BT5 — P2-Q01 (luyện thêm)

`cchanthuon` × `gnamvie` (File1):

| Vị trí CT nặng | Không nằm viện | Có nằm viện | % nằm viện |
|---|---|---|---|
| Đầu/cột sống | 7 | 10 | 58,8% |
| Thân mình | 8 | 10 | 55,6% |
| Tay/chân | 8 | 7 | 46,7% |

Pearson χ² = **0,502**, df = **2** ((3−1)×(2−1)), p = **0,778** → chưa có bằng chứng
liên quan giữa vị trí chấn thương nặng và việc nằm viện. df=2 vì bảng 3×2.

## BT6 — P1-Q40 (luyện thêm)

Recode `MDoSD.RB` → `RB_now` (0=không, 1=đang uống). Bảng ghép cặp TSu.RBia × RB_now:

| Trước đây \ Hiện tại | Không uống | Đang uống |
|---|---|---|
| Không tiền sử | 328 | **4** |
| Có tiền sử | **79** | 209 |

- Trước đây uống: 288/620 (46,5%) → hiện tại: 213/620 (34,4%).
- Ô bất đồng: 79 người **bỏ** vs 4 người **bắt đầu** — chênh lệch một chiều rõ rệt.
- McNemar: χ² ≈ **67,771** (asymptotic); Exact Sig. (binomial) < 0,001 → tỷ lệ uống
  rượu bia **giảm có ý nghĩa** giữa hai thời điểm.
- *(Q20 hút thuốc — 8 bỏ vs 2 bắt đầu: χ²≈3,6 p≈0,058; exact p≈0,109 → xu hướng
  giảm nhưng chưa ý nghĩa vì quá ít người đổi trạng thái.)*

## BT7 — Đố vui

1. p=0,743 nói dữ liệu **tương thích** với giả thuyết — không chứng minh giả thuyết
   đúng (nhiều tỷ lệ khác cũng sẽ cho p lớn). Cách nói chặt: "không bác bỏ được giả
   thuyết Nam40:Nữ60" / "phù hợp với 40:60".
2. Vì câu hỏi là "tỷ lệ **trong bệnh nhân nam**" — mẫu phân tích phải chỉ gồm nam;
   kiểm định trên cả 50 người trả lời câu hỏi khác (tỷ lệ nằm viện chung). Đây là
   bẫy "đúng phép, sai mẫu".
3. Chi-square thường giả định hai mẫu **độc lập** (người khác nhau hai ô); McNemar
   cho **cùng một người đo hai lần** — chỉ các ô bất đồng (đổi trạng thái) quyết định
   kiểm định, ô đồng thuận không đóng góp.
