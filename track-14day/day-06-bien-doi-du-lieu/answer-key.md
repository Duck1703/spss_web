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
