# Ngày 07 — Đáp án & giải thích

> Đọc **sau khi** đã làm xong `workbook.md`. Số liệu tái tính trực tiếp từ
> `p1_B01_HA (1).sav` bằng Python (cross-check, nhãn `NOT_RUN`).

---

## BT1 — P1-Q14

**1. Frequencies `NNghiep` (620 dòng):**

| Giá trị | n | Đánh giá |
|---|---|---|
| 1 | 132 | hợp lệ |
| 2 | 6 | hợp lệ |
| 3 | 323 | hợp lệ |
| 4 | 67 | hợp lệ |
| 5 | 67 | hợp lệ |
| 6 | 18 | hợp lệ |
| **0** | **3** | ❌ sai — không có trong codebook |
| **8** | **2** | ❌ sai — không có trong codebook |
| **Missing (.)** | **2** | ❌ bỏ trống |

**2. Liệt kê phiếu sai** — điều kiện: `NNghiep = 0 | NNghiep = 8 | MISSING(NNghiep)`
(7 dòng hiện lại). Mã số `ID`:

| ID | Lỗi |
|---|---|
| 5 | NNghiep = 0 |
| 184 | NNghiep = 0 |
| 318 | NNghiep = 0 |
| 285 | NNghiep = 8 |
| 375 | NNghiep = 8 |
| 243 | trống (missing) |
| 305 | trống (missing) |

→ **7 phiếu: 5, 184, 243, 285, 305, 318, 375.**

**3–4. Loại khỏi dữ liệu** — điều kiện giữ: `NNghiep >= 1 & NNghiep <= 6` (ô trống
tự rớt vì missing không thỏa `>= 1`) → Save As `*_work.sav` → file mới Total = **613**,
chỉ còn mã 1–6.

*Lỗi hay gặp:* chỉ gõ `NNghiep = 0 | NNghiep = 8` → sót 2 phiếu trống (missing không
so sánh được với số nào — phải `MISSING()`); quên trả All cases giữa bước liệt kê và
bước loại; lưu đè file gốc (mất 7 dòng vĩnh viễn, không tra lại được).

## BT2 — P1-Q13

Điều kiện 1: `Tieuduong = 1 & Tuoi >= 50 & Tuoi <= 70` → **96 người** đái tháo đường
tuổi 50–70.
Điều kiện 2: thêm `& GTinh = 2` → **52 nam**.

*Lỗi hay gặp:* quên `=` trong `>=`/`<=` (mất người đúng 50/70 tuổi → ra 87 thay vì 96);
dùng `GTinh = 1` cho nam (mã ngược: **1 = Nữ**) → ra 44 — nếu bạn ra 44, kiểm tra
nhãn giá trị lại.

## BT3 — P1-Q07 (luyện thêm)

Bộ dichotomies `$benh` (đếm giá trị 1):

| Bệnh | Lượt chọn |
|---|---|
| Tim mạch | 92 |
| Đái tháo đường | 196 |
| Thận | 16 |
| Gan | 11 |
| Gút | 9 |
| **Tổng lượt** | **324** (trên 294 người có ≥1 bệnh) |

Bộ categories `$benhDM` (`Benh.MT_1`+`Benh.MT_2`, mã 1–5) cho **cùng 5 con số** —
vì hai cách lưu cùng một dữ liệu gốc, chỉ khác hình thức: nhị phân "mỗi bệnh một cột"
vs danh mục "mỗi lần chọn một cột". "% of cases" cộng >100% là bình thường vì một
người chọn nhiều bệnh.

## BT4 — Đố vui

1. File gốc là **chứng cứ** — sửa trực tiếp sẽ mất khả năng kiểm tra lại và phá
   tái lập kết quả. Quy trình đúng: giữ nguyên file gốc → xử lý trên **bản làm việc**
   → ghi chép quyết định (phiếu nào, vì sao loại).
2. **Không được giữ.** Ô trống (system-missing) không thỏa `NNghiep >= 1` — so sánh
   với missing cho kết quả "không đúng", nên dòng bị loại cùng nhóm sai. Đây là lý do
   điều kiện giữ `1–6` tự động loại cả phiếu trống.
3. Đặt missing khi muốn **giữ dòng** (người đó còn dữ liệu khác dùng được — ví dụ
   phiếu 243 có tuổi, cân nặng đúng; chỉ riêng `NNghiep` không tin được). Loại dòng
   khi cả phiếu đáng ngờ. Đề Câu 14 chọn cách loại — nhưng cách missing an toàn hơn
   cho phân tích đa biến sau này.
