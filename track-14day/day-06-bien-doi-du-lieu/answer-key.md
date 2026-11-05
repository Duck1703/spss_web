# Ngày 06 — Đáp án & giải thích

> Đọc **sau khi** đã làm xong `workbook.md`. Số liệu tái tính trực tiếp từ
> `p1_B01_HA (1).sav` bằng Python (cross-check, nhãn `NOT_RUN`).

---

## BT1 — P1-Q10

1. `Chieucao` đơn vị **cm** (giá trị ~140–180). Công thức BMI đúng:
   **`Cannang / (Chieucao/100)**2`** — phải đổi cm → m trước.
   (Viết `Cannang / Chieucao**2` cho BMI ≈ 0,002 — sai đơn vị rõ rệt.)

3. Descriptives `BMI` (n = 620):

| Chỉ số | Giá trị |
|---|---|
| Mean | **20,42** |
| Std. Deviation | **1,91** |
| Minimum | **15,77** |
| Maximum | **28,91** |

4. Lỗi ~0,002: quên chia 100 trong biểu thức. Sửa: Compute lại đúng công thức —
   **ghi đè** cùng tên `BMI` là được (không phá dữ liệu gốc), hoặc xóa biến rồi tạo lại.

*Lỗi hay gặp khác:* nhầm `Cannang`/`Chieucao` thứ tự; thiếu ngoặc quanh `Chieucao/100`;
quên tick Minimum/Maximum trong Options nên output thiếu 2 con số đề hỏi.

## BT2 — P1-Q11

2. Bốn ánh xạ Old → New:

| Old Values | New Value | Nhãn |
|---|---|---|
| Range 40 through 49 | 1 | 40–49 |
| Range 50 through 59 | 2 | 50–59 |
| Range 60 through 69 | 3 | 60–69 |
| Range 70 through highest | 4 | ≥70 |

3. Frequencies `DoTuoi`:

| Nhóm | Số lượng | % |
|---|---|---|
| 1 (40–49) | 54 | 8,7 |
| 2 (50–59) | 40 | 6,5 |
| 3 (60–69) | 309 | 49,8 |
| **4 (≥70)** | **217** | **35,0** |
| Total | 620 | 100,0 |

→ Số người **từ 70 tuổi trở lên = 217 người** (35,0%).

*Lỗi hay gặp:* quên bấm **Change** (biến mới không được tạo); đặt khoảng "50 through 60"
rồi "60 through 70" — chồng lấp đầu mút (SPSS lấy ánh xạ đầu khớp — người 60 rơi nhóm 2);
quên khai nhãn khiến đọc nhầm mã.

## BT3 — P1-Q12

1. Năm biến nhị phân (0=Không, 1=Có): `Timmach`, `Tieuduong`, `Than`, `Gan`, `Gut`.
   `Benh.MT_1`/`Benh.MT_2` là **biến danh mục** — giá trị 1–5 là *loại* bệnh
   (tim/ĐTĐ/thận/gan/dạ dày…) chứ không phải có/không; đếm "=1" sẽ sai.

2. Count `SoBenhMan` = số biến nhận giá trị 1 trong 5 biến nhị phân.

3. Frequencies `SoBenhMan`:

| Số bệnh | Số người | % |
|---|---|---|
| 0 | 326 | 52,6 |
| 1 | 264 | 42,6 |
| 2 | 30 | 4,8 |

→ Số người có **≥ 2 bệnh mạn tính = 30** (4,8%).
(Tham khảo thêm: ≥1 bệnh = 264 + 30 = **294 người**, 47,4%.)

## BT4 — Kiểm chứng chéo

1. Số ô không trống của `Benh.MT_1`+`Benh.MT_2` = số bệnh được ghi cho mỗi người:
   326 người không ô nào (0 bệnh), 264 người chỉ có `MT_1` (1 bệnh), 30 người có cả
   hai (2 bệnh) — **khớp hệt** phân bố ở BT3.
2. Khớp: {0:326, 1:264, 2:30}. Hai cách lưu cùng một thông tin → bắt buộc cùng kết quả.
3. Đây là kiểm chứng tính nhất quán dữ liệu: khi hai biểu diễn cho kết quả khác nhau
   thì một trong hai cách đếm (hoặc dữ liệu) có vấn đề — kỹ năng QA rất đáng giữ.

## BT5 — Đố vui

1. Trung bình 2 lần đo → **Compute** (`MEAN(x1,x2)` hoặc `(x1+x2)/2`); gộp học vấn →
   **Recode** (6 mức → 2 nhóm); đếm hành vi nguy cơ → **Count** (đếm giá trị 1 trên
   nhiều biến nhị phân).
2. "Same Variables" **ghi đè biến gốc** — mất `Tuoi` chi tiết, không hoàn tác được sau
   khi lưu. "Different" giữ nguyên gốc, thêm biến mới — an toàn tuyệt đối.
3. Khi thao tác **tạo/sửa dữ liệu** (Compute/Recode/Count/nhập liệu): file phải tách
   khỏi bản gốc (`_work.sav`). Ba ngày đầu chỉ đọc + lọc tạm + phân tích — không ghi
   gì nên chưa cần; hôm nay là lần đầu tạo biến.

## P3-Q04 — BMI từ E25/E26 (So_Lieu_NC) *(bài mới)*

`BMI = E26/(E25/100)**2` — n = 360: **mean = 21,83, SD = 1,39, min = 18,90,
max = 25,88**. Kiểm chứng nhanh: quên /100 → BMI ≈ 0,002 (sai rõ rệt khi nhìn Data View).

## P3-Q05 — Recode E29 → 3 nhóm HA (So_Lieu_NC) *(bài mới)*

| Nhóm HA tâm thu | Số lượng | % |
|---|---|---|
| <120 mmHg — bình thường (1) | 91 | 25,3 |
| 120–139 — tiền tăng HA (2) | 137 | 38,1 |
| ≥140 — tăng HA (3) | 132 | 36,7 |

Tổng = **360** — khớp n, không mất người nào.
*Lỗi hay gặp:* recode ghi đè E29 gốc (dùng Into Different Variables); khoảng mở
"Range, LOWEST/HIGHEST through" bỏ sót giá trị biên 120/140 — phải phủ kín.

## P3-Q07 — Đếm loại người thân mắc ĐTĐ (So_Lieu_NC) *(bài mới)*

Count giá trị **1** trên `C16.1` (gia đình nói chung), `C16.2` (anh/chị/em ruột),
`C16.3` (ông/bà nội), `C16.4` (con):

| Số loại người thân ĐTĐ | Số lượng | % |
|---|---|---|
| 0 | 210 | 58,3 |
| 1 | 1 | 0,3 |
| 2 | 107 | 29,7 |
| 3 | 42 | 11,7 |

→ Có **≥2 loại**: 107 + 42 = **149 người (41,4%)**.
*(Bản chất số liệu: C16.1 là câu chung "gia đình có ai mắc ĐTĐ" — ai trả lời Có
thường tick thêm mối quan hệ cụ thể, nên giá trị đếm ≥2 rất phổ biến.)*
