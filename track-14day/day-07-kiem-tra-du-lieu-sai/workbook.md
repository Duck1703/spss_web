# Ngày 07 — Workbook: Soi & xử lý dữ liệu sai

> Làm lần lượt, **không nhìn `answer-key.md`** cho tới khi xong.
> File dùng: `p1_B01_HA (1).sav` — **không lưu đè file gốc**.

---

## BT1 — Bài tập gốc: P1-Q14

1. Chạy Frequencies `NNghiep`. Ghi lại: các giá trị xuất hiện, số dòng mỗi giá trị,
   và đánh dấu giá trị nào **không có trong codebook** (mã hợp lệ 1–6).
2. Dùng Select Cases để hiện **chỉ các dòng sai** — ghi điều kiện bạn đã gõ.
   Đọc cột `ID` và liệt kê mã số phiếu sai vào bảng đề.
3. Đảo điều kiện để **giữ phiếu hợp lệ** → Save As `p1_B01_HA_work.sav`
   (workspace). Ghi lại số dòng còn lại.
4. Mở file work, chạy lại Frequencies `NNghiep` để chứng minh sạch. Ghi Total.

{{exercise:P1-Q14}}

> ✅ **Sản phẩm:** danh sách 7 ID sai · file `*_work.sav` 613 dòng · bảng tần số chứng minh sạch

> **Gợi ý:** nếu danh sách chỉ có 5 ID → 2 phiếu trống bị sót. Ô trống không khớp
> `NNghiep = 0` — cần hàm `MISSING(NNghiep)` trong điều kiện.

## BT2 — Bài tập gốc: P1-Q13

1. Select Cases → điều kiện `Tieuduong = 1` và tuổi trong khoảng 50–70 → đếm số dòng còn lại.
2. Thêm điều kiện giới tính nam (mã `GTinh` của nam là mấy? — nhớ mã ngược) → đếm lại.
3. Trả All cases trước khi sang BT3.

{{exercise:P1-Q13}}

> ✅ **Sản phẩm:** 2 con số (ĐTĐ 50–70; nam ĐTĐ 50–70) + chuỗi điều kiện đã gõ

> **Gợi ý:** "tuổi 50–70" hiểu **khoảng đóng** — người đúng 50 và đúng 70 vẫn tính.

## BT3 — Luyện thêm: P1-Q07 (Multiple Response)

1. Define Variable Sets → dichotomies `Timmach…Gut` (counted=1) → `$benh` →
   Multiple Response → Frequencies. Ghi số lượt chọn mỗi bệnh.
2. Define Sets → categories `Benh.MT_1` + `Benh.MT_2` (khoảng 1–5) → `$benhDM` →
   Frequencies. Hai bảng có khớp nhau không?
3. Vì sao tổng lượt chọn (cột "Percent of cases" > 100%) lại lớn hơn số người?

{{exercise:P1-Q07}}

> ✅ **Sản phẩm:** bảng 5 bệnh theo lượt chọn + nhận xét 1 câu về 2 cách lưu

## BT4 — Đố vui (không cần SPSS)

1. Vì sao nói "dữ liệu nhập sai phải loại khỏi file gốc" là **sai quy trình**?
   Nên làm gì thay thế?
2. Trong điều kiện `NNghiep >= 1 & NNghiep <= 6`, hai phiếu trống có được giữ lại
   không? Giải thích.
3. Khi nào chọn "đặt missing" thay vì "loại dòng"? Cho ví dụ.
