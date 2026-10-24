# Screenshot acquisition checklist — lộ trình 14 ngày

> **Mục đích:** danh sách tập trung các ảnh chụp SPSS *thật* cần có để chèn vào bài học.
> Trong bài, mỗi nơi cần ảnh được đánh dấu `[SHOT-n]` kèm mô tả màn hình bằng chữ/sơ đồ —
> đó là **placeholder có chủ đích**, KHÔNG phải evidence.
> **Quy tắc:** chỉ chèn ảnh thật chụp trên Mac + IBM SPSS của owner; ghi ngày chụp +
> phiên bản SPSS vào bảng này. Không được phác/giả ảnh SPSS.

- **Trạng thái chung:** chưa có ảnh nào — `NOT_CAPTURED` (chờ pilot trên Mac).
- **Chụp bằng:** macOS ⌘⇧4 (vùng chọn) — chụp đủ dialog/cửa sổ, đừng crop mất nút bấm.
- **Đặt file vào:** `track-14day/shots/SHOT-n-mo-ta.png` → sync script sẽ nhúng khi có.

## Ngày 01 — Lần đầu mở SPSS

| Mã | Nội dung cần chụp | Thời điểm | Trạng thái |
|---|---|---|---|
| SHOT-1 | Data Editor trống + 2 tab Data/Variable View góc dưới-trái | Sau mở SPSS | `NOT_CAPTURED` |
| SHOT-2 | Wizard import CSV — màn hình chọn delimiter/decimal | Trong import `clinic_bp_v1_clean.csv` | `NOT_CAPTURED` |
| SHOT-3 | Data View đầy dữ liệu sau import (thấy tên biến thật) | Sau Finish | `NOT_CAPTURED` |
| SHOT-4 | `clinic_bp.sav` mở lại đầy đủ sau khi thoát ⌘Q | Sau save/reopen | `NOT_CAPTURED` |

## Ngày 02 — Biến và mã hóa

| Mã | Nội dung cần chụp | Thời điểm | Trạng thái |
|---|---|---|---|
| SHOT-5 | Variable View với đủ 11 cột (zoom ra nếu cần) | Trước khi điền | `NOT_CAPTURED` |
| SHOT-6 | Hộp thoại Value Labels đang mở (Value/Label/Add/Change/Remove) | Khi gắn `1=Nữ` | `NOT_CAPTURED` |
| SHOT-7 | Data View hiển thị "Nữ"/"Nam" thay 1/2 | Sau View → Value Labels | `NOT_CAPTURED` |
| SHOT-8 | Output Viewer với bảng Frequencies có nhãn | Sau Frequencies `sex_code` | `NOT_CAPTURED` |

## Ngày 03 — Làm sạch dữ liệu

| Mã | Nội dung cần chụp | Thời điểm | Trạng thái |
|---|---|---|---|
| SHOT-9 | Dialog Frequencies (2 khung + nút ► giữa) | Khi chọn biến | `NOT_CAPTURED` |
| SHOT-10 | Bảng Descriptives với cột Minimum/Maximum | Sau chạy 5 biến | `NOT_CAPTURED` |
| SHOT-11 | Variable View: `sex_code` vừa đổi String → Numeric | Sau đổi Type | `NOT_CAPTURED` |
| SHOT-12 | Dialog Identify Duplicate Cases + cột `PrimaryLast` | Khi phát hiện trùng | `NOT_CAPTURED` |

## Ghi chú khi chụp

- Nếu menu/dialog trên máy owner **khác hướng dẫn** → chụp luôn màn hình khác đó và báo
  `DIFFERS:` theo `day-01-lan-dau-mo-spss/pilot-checklist-mac.md` — đó là evidence quý giá
  để sửa bài, không phải lỗi.
- Ưu tiên chụp: SHOT-2, SHOT-6, SHOT-11 (ba dialog người mới hay lạc nhất).
