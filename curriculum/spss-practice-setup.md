# Chuẩn bị dữ liệu thực hành — file nguồn đi đâu, làm việc ở đâu

> Đọc trước Ngày 01. Hai bộ đề + 9 file `.sav` là **tài liệu bên thứ ba của chủ dự án** —
> chỉ lưu trên máy của bạn, không tải từ website, không upload lên đâu cả.

---

## 1. Bạn cần gì trên máy

| Thứ | Ở đâu | Ghi chú |
|---|---|---|
| Đề bài tập | `exercises/bai_1/Bai thuc hanh SDH P1.pdf` (43 câu) · `exercises/bai_2/BSNT_Bài TH_Phần 2_Cô Hiền.pdf` (15 câu) | Mở bằng trình đọc PDF bất kỳ — đây là "đề thi" của bạn |
| Dữ liệu | `exercises/bai_1/*.sav` · `exercises/bai_2/*.sav` (9 file) | Mở bằng SPSS — **không** mở bằng Excel |
| Bài học | Website này (ngày 01 → 14) | Đọc trên trình duyệt |

## 2. Cấu trúc thư mục khuyến nghị

Trên **máy chạy SPSS**, tạo một thư mục làm việc riêng:

```
SPSS_Practice/
├── sources/          ← BẢN GỐC — chỉ đọc, tuyệt đối không sửa
│   ├── bai_1/        ← Bai thuc hanh SDH P1.pdf + 4 file .sav
│   └── bai_2/        ← BSNT_Bài TH_Phần 2_Cô Hiền.pdf + 5 file .sav
├── workspace/        ← FILE LÀM VIỆC của bạn (*.sav do bạn tạo/lưu)
└── outputs/          ← file .spv (Output Viewer) bạn lưu lại nếu muốn
```

**Tại sao tách `sources/` và `workspace/`?**
- File gốc là "đề + đáp án tham chiếu" — nếu lỡ ghi đè (Save thay vì Save As) là mất bản chuẩn.
- Mọi biến đổi (Compute, Recode, xóa phiếu, filter lưu lại) đều **Save As** sang `workspace/`
  với tên khác, ví dụ `p1_B01_work.sav`. Gốc trong `sources/` luôn nguyên vẹn để mở lại.
- Bài sau dùng lại file workspace của bài trước khi đề yêu cầu (ví dụ biến BMI tạo ở Ngày 06
  sẽ cần ở các bài sau — mở `workspace/p1_B01_work.sav` là có sẵn).

## 3. Kịch bản A — website và SPSS cùng một máy

1. Copy `exercises/bai_1` và `exercises/bai_2` vào `SPSS_Practice/sources/`
   (hoặc dùng luôn thư mục `D:\spss\exercises` làm `sources/` — khỏi copy, nhưng nhớ
   **không Save đè** vào đó).
2. Trong SPSS: **File → Open → Data…** → duyệt tới file `.sav` bài học chỉ định.
3. Sau khi biến đổi: **File → Save As…** → `SPSS_Practice/workspace/ten_moi.sav`.

## 4. Kịch bản B — học trên Windows, làm SPSS trên MacBook

File `.sav` chuyển qua Mac giữ nguyên nội dung (định dạng nhị phân SPSS đọc được cả hai hệ).
Cách đơn giản nhất — **một trong ba**:

- **USB/di động:** copy `sources/bai_1` + `sources/bai_2` sang USB → dán vào
  `~/Documents/SPSS_Practice/sources/` trên Mac.
- **Mạng LAN/AirDrop:** gửi cả thư mục `sources/` (nén zip trước nếu nhiều file) qua
  AirDrop → giải nén vào `Documents/SPSS_Practice/`.
- **Đám mây cá nhân** (Google Drive/iCloud/USB): upload thư mục `sources/` từ Windows,
  tải về trên Mac. *Chỉ dùng tài khoản cá nhân của bạn — không share link công khai,
  vì đây là tài liệu bên thứ ba.*

> ⚠️ **Không gửi file qua nhóm/chat công khai và không đưa lên repo git** — `.sav` và PDF
> là tài liệu của nguồn bên thứ ba (xem `exercises/README.md`).

**Trên MacBook**, đường dẫn khác chút: `~/Documents/SPSS_Practice/sources/bai_1/p1_B01_HA (1).sav`.
Mọi bài học ghi `exercises/bai_1/...` → hiểu là `sources/bai_1/...` trên Mac.

## 5. Checklist trước khi học

- [ ] `SPSS_Practice/sources/bai_1/` có 1 PDF + 4 `.sav`; `bai_2/` có 1 PDF + 5 `.sav`.
- [ ] Đã tạo `workspace/` trống — biết mình sẽ Save As vào đây.
- [ ] Mở thử `p1_B01_HA (1).sav` trong SPSS → thấy bảng dữ liệu (620 dòng × 40 cột).
- [ ] Mở sẵn PDF Phần 1 — bạn sẽ tra đề gốc theo mã câu (ví dụ "Câu 2, trang 1").

## 6. Quy tắc vàng trong suốt 14 ngày

1. **Gốc chỉ đọc:** mở từ `sources/` → biến đổi → **Save As** sang `workspace/`.
2. **Filter/Split chỉ là tạm thời** — đóng file không save là không mất gì.
3. **Không bao giờ** chọn "Delete unselected cases" hoặc Save đè lên `sources/`.
4. Output muốn giữ → File → Save trong **Output Viewer** (file `.spv`), để vào `outputs/`.
5. Bị lỡ tay → đóng không lưu, mở lại bản gốc — đó là lý do `sources/` tồn tại.
