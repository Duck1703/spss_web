# Ngày 14 — Đề đánh giá cuối khóa + Rubric 100 điểm

> **ĐỀ + RUBRIC — chưa phải đáp án.** Chỉ mở `answer-key.md` sau khi nộp.
> Hai file nguồn: `bai_1/p1_B01_HA (1).sav` (câu 1–5) · `bai_2/File1.sav` (câu 6).
> Được mở lại bài cũ và bảng chọn phép; tự làm.

---

## Câu 1 — P1-Q24 (15đ): trung bình 2 lần đo

Đề gốc: thống kê cho **HA tối đa và tối thiểu (trung bình trong 2 lần đo)**:
trị trung bình, SEM, số trội, bách phân vị 30, trung vị.

1. Tạo 2 biến trung bình: `HA.TD_tb` = (HA.TD_L1 + HA.TD_L2)/2 và `HA.TT_tb`
   tương tự (Compute — xem mô phỏng hỗ trợ).
2. Điền bảng 5 đại lượng cho cả hai biến.

{{exercise:P1-Q24}}

> ✅ **Sản phẩm:** bảng 2 hàng × 5 cột đại lượng

## Câu 2 — P1-Q26 (15đ): gộp nhóm học vấn

Đề gốc: đại lượng cho **HA tối đa trung bình** theo 3 nhóm trình độ học vấn:
*Dưới THPT* / *THPT, Tcấp, CĐẳng* / *ĐH, SĐH* — mean, median, SD, phương sai.

1. `HVan` có 6 mã (1=Không biết chữ … 6=ĐH/SĐH) — Recode thành biến 3 nhóm
   trước: {1,2,3} → Dưới THPT; {4,5} → THPT/Tcấp/CĐẳng; {6} → ĐH/SĐH.
2. Báo n, mean, median, SD, variance theo từng nhóm.

{{exercise:P1-Q26}}

> ✅ **Sản phẩm:** biến `HVan3` + bảng 3 nhóm × 5 đại lượng

## Câu 3 — P1-Q31 (20đ): nhóm "mới phát hiện"

Đề gốc: số lượng theo **CĐ bệnh HA × trình độ học vấn** cho đối tượng **"mới
phát hiện bệnh HA"** + p.

1. Xác định ai là "mới phát hiện": *đo hôm nay vào THA độ 1–3* nhưng *chưa từng
   biết/từng được chẩn đoán HA* — dùng nhãn `TSu.HA` và `CD.HA` để lập điều kiện
   Select Cases đúng (gợi ý: xem giá trị nhãn trong Variable View).
2. Crosstabs `HVan3` (từ câu 2) × `CD.HA` (chỉ độ 1–3) trên mẫu con đó → điền bảng.
3. **Đánh giá:** chạy χ² → đọc footnote expected counts — kết luận p có dùng
   được không? Vì sao? (Đây là phần kiếm điểm khác biệt.)

{{exercise:P1-Q31}}

> ✅ **Sản phẩm:** điều kiện lọc đã viết ra, bảng 3×3, n mẫu con, nhận định expected

## Câu 4 — P1-Q33 (15đ): mức độ HA theo bệnh mạn tính

Đề gốc: nhận xét tỷ lệ các trạng thái chẩn đoán cao HA (độ 1, 2, 3) theo bệnh
mạn tính.

1. Với **từng** bệnh (`Tieuduong`, `Timmach`, `Than`, `Gan`, `Gut`): trong nhóm
   **có bệnh**, tính % phân bố CD.HA.
2. Với mỗi bệnh: phát biểu "có ý nghĩa/không" — chỉ khi expected counts cho phép
   χ²; nếu n bệnh quá nhỏ, ghi "mô tả thôi".

{{exercise:P1-Q33}}

> ✅ **Sản phẩm:** bảng 5 bệnh × % độ 1–3 + ghi chú hợp lệ/không hợp lệ

## Câu 5 — P1-Q43 (10đ): bảng Tuổi theo giới tính

Đề gốc: bảng đại lượng của **Tuổi** theo **giới tính**: tần số, min, max, mean,
SD — kèm dòng Tổng.

{{exercise:P1-Q43}}

> ✅ **Sản phẩm:** bảng 3 dòng (Nam/Nữ/Tổng) × 5 cột

## Câu 6 — P2-Q08 (10đ): tuổi 3 tỉnh (File1)

Đề gốc: so sánh tuổi trung bình của bệnh nhân ở 3 tỉnh (`otin`).

{{exercise:P2-Q08}}

> ✅ **Sản phẩm:** F, df, p + kết luận 1 câu

## Câu 7 — Sản phẩm & nội quy file (15đ)

- [ ] `KetQua_D14.docx`: 6 bảng kết quả, mỗi bảng ghi "Câu n — nguồn …" (5đ)
- [ ] `p1_work.sav` có `HA.TD_tb`, `HA.TT_tb`, `HVan3` đúng trong workspace (5đ)
- [ ] Phiếu tự chấm + điểm + ghi chú câu sai (5đ)

---

## Rubric 100 điểm

| Câu | Điểm | Tiêu chí chính |
|---|---|---|
| 1 | 15 | Compute đúng (5) · 5 đại lượng đúng cho 2 biến (10) |
| 2 | 15 | Recode 6→3 đúng (5) · bảng nhóm đúng (10) |
| 3 | 20 | Điều kiện "mới phát hiện" đúng (7) · bảng/n đúng (8) · phán đoán expected (5) |
| 4 | 15 | % theo bệnh đúng (10) · biết bệnh nào không đủ n cho χ² (5) |
| 5 | 10 | 3 dòng × 5 cột đúng |
| 6 | 10 | F/df/p đúng + kết luận |
| 7 | 15 | File/output/tự chấm đủ và đúng chỗ |

**Đạt:** ≥70 · **Giỏi:** ≥85 · **Lỗi loại:** sai file, đọc p bỏ giả định, hoặc
mở đáp án trước khi nộp (tự khai báo).
