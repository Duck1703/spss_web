# Ngày 05 — Đáp án & giải thích

> Đọc **sau khi** đã làm xong `workbook.md`. Số liệu tái tính trực tiếp từ các file
> `.sav` nguồn bằng Python (cross-check, nhãn `NOT_RUN`). p-value Fisher lấy từ
> `scipy.fisher_exact` (2-sided) — SPSS in "Exact Sig. (2-sided)" tương đương.
> *(Đáp án P1-Q21 và P2-Q01 nằm ở Ngày 08 — `/d08/dap-an/`.)*

---

## BT1 — P1-Q05

Bảng chéo `TTrang.KTe` (hàng) × `GTinh` (cột), Count + % hàng + % cột:

| TTrang.KTe | | Nữ (GTinh=1) | Nam (GTinh=2) | Total |
|---|---|---|---|---|
| **Hộ nghèo/cận nghèo** (1) | Count | 131 | 98 | 229 |
| | % trong TTKT (**hàng**) | 57,2% | 42,8% | 100,0% |
| | % trong GTinh (**cột**) | 34,8% | 40,2% | 36,9% |
| **Không nghèo** (2) | Count | 245 | 146 | 391 |
| | % trong TTKT | 62,7% | 37,3% | 100,0% |
| | % trong GTinh | 65,2% | 59,8% | 63,1% |
| **Total** | Count | 376 | 244 | 620 |

3. (a) Trong hộ nghèo/cận nghèo: **57,2% nữ, 42,8% nam** (% hàng).
   (b) Tỷ lệ hộ nghèo: nữ **34,8%**, nam **40,2%** (% cột).
   *(Chi-square tham khảo: χ²=1,800, df=1, p=0,180 — chênh lệch không ý nghĩa.)*

*Lỗi hay gặp:* đổi lẫn hai chiều %; quên tick Row/Column trong Cells chỉ đọc được Count.

## BT2 — P1-Q17

**a) Đái tháo đường (`Tieuduong`, 0=Không / 1=Có):**

| | Nữ | Nam |
|---|---|---|
| Không ĐTĐ | 263 (69,9%) | 161 (66,0%) |
| Có ĐTĐ | 113 (30,1%) | 83 (34,0%) |

Pearson χ² = **1,075**, df = 1, p = **0,300** → **không** có khác biệt ý nghĩa giữa
hai giới về tỷ lệ đái tháo đường. (Expected min 77 — dùng Pearson hợp lệ. Tham khảo:
Yates continuity 0,900/p=0,343; Fisher 0,331 — cùng kết luận.)

**b) Bệnh gan mạn (`Gan`, 0=Không / 1=Có):**

| | Nữ | Nam |
|---|---|---|
| Không | 370 (98,4%) | 239 (98,0%) |
| Có | 6 (1,6%) | 5 (2,0%) |

- Pearson χ² = 0,175, p = 0,676 — **NHƯNG** output cảnh báo *1 ô (25%) có expected
  count < 5* (ô nam-có-bệnh kỳ vọng ≈ 4,33) → điều kiện chi-square vi phạm.
- Đọc **Fisher's Exact Test**: Exact Sig. (2-sided) ≈ **0,759** → kết luận cuối:
  tỷ lệ bệnh gan mạn hai giới **không khác nhau có ý nghĩa**.
- Bài học: với biến bệnh hiếm, luôn đọc footnote expected count trước khi trích p.

## BT3 — P1-Q18 (luyện thêm)

`TSu.RBia` (1=Có / 2=Không tiền sử rượu bia) × giới:

| | Nữ | Nam |
|---|---|---|
| Có TS rượu bia | 66 (17,6%) | 222 (91,0%) |
| Không | 310 (82,4%) | 22 (9,0%) |

Pearson χ² = **320,77**, df = 1, p **< 0,001** → nam có tiền sử rượu bia nhiều hơn
nữ **rất có ý nghĩa thống kê**. Đây là khác biệt lớn nhất trong bộ câu 17–18.

## BT4 — Đố vui

1. Hai mẫu số khác nhau: "% nữ trong nhóm nghèo" chia cho tổng nhóm nghèo (229);
   "% nghèo trong nhóm nữ" chia cho tổng nhóm nữ (376). Khi cần trả lời "phụ nữ có
   nghèo hơn nam không" → dùng % cột (theo giới); khi cần biết "trong nhóm đối tượng
   nghèo, giới nào chiếm đa số" → % hàng.
2. Khi có ô expected < 1, hoặc >20% số ô có expected < 5 (SPSS in footnote cảnh báo) —
   điển hình biến bệnh hiếm như `Gan`.
3. **Cần viết lại.** p = 0,30 chỉ nói *"chưa đủ bằng chứng kết luận có khác biệt"* —
   không chứng minh được hai tỷ lệ bằng nhau (muốn chứng minh tương đương cần phân
   tích tương đương/equivalence — khác hẳn). Cách viết đúng: "tỷ lệ ĐTĐ ở nữ (30,1%)
   và nam (34,0%) không khác nhau có ý nghĩa thống kê (χ²=1,075, p=0,300)".

## P3-Q06 — C13 × giới tính (So_Lieu_NC) *(bài mới)*

| C13 — đã được chẩn đoán THA | Nam (n=131) | Nữ (n=229) |
|---|---|---|
| Có (1) | 74 (**56,5%**) | 119 (**52,0%**) |
| Chưa (2) | 57 (43,5%) | 110 (48,0%) |

Pearson χ² = **0,686**, df = 1, Sig. (2-sided) = **0,408** → tỷ lệ đã từng được
chẩn đoán THA **không khác nhau có ý nghĩa** giữa hai giới (mọi ô expected ≥ 5 —
chi-square hợp lệ).

## P3-Q10 — Gộp CD.HA 2 nhóm × M.LucAn (p1_B01_HA) *(bài mới)*

Biến mới `CDHA_2n`: 0 = CD.HA 1–2 ("chưa THA", n=285); 1 = THA độ 1–3 (n=335).

| M.LucAn (thêm muối lúc nấu) | Chưa THA | THA độ 1–3 |
|---|---|---|
| Không bao giờ (1) | 2 (0,7%) | 0 (0,0%) |
| Hiếm khi (2) | 120 (42,1%) | 82 (24,5%) |
| Thỉnh thoảng (3) | 142 (49,8%) | 199 (59,4%) |
| Thường xuyên (4) | 21 (7,4%) | 54 (16,1%) |

Pearson χ² = **29,36**, df = 3, p **< 0,001** — **NHƯNG** output cảnh báo 1 ô (25%)
có expected < 5 (ô "Không bao giờ" nhóm THA ≈ 0,92) → chi-square **chỉ nên tham khảo**.
Cách xử lý đúng: gộp "Không bao giờ"+"Hiếm khi" rồi chạy lại, hoặc chỉ nhận xét mô tả:
người THA cho thêm muối thỉnh thoảng–thường xuyên nhiều hơn rõ (75,5% vs 57,2%).
