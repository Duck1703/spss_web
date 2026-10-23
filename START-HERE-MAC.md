# START-HERE-MAC — Chuẩn bị MacBook trước khi học SPSS

> **Đọc trước:** Checklist này giúp bạn kiểm tra máy của *chính bạn*. Tài liệu được viết trong workspace chưa có quyền truy cập máy Mac của bạn — **mọi mục đều ở trạng thái CHƯA XÁC MINH trên thiết bị của bạn** cho tới khi bạn tự kiểm tra. Không có mục nào dưới đây khẳng định rằng SPSS đã được cài hay đã chạy thử trên máy bạn.

## Bước 0 — Bạn cần gì

- Một chiếc MacBook (Intel hoặc Apple Silicon đều được — sẽ kiểm tra ở Bước 1).
- Quyền cài phần mềm (hoặc IT của trường/cơ sở hỗ trợ).
- License SPSS hợp lệ: license của trường, license cá nhân mua từ IBM, hoặc bản trial hợp lệ. **Khóa học này không hướng dẫn và không chấp nhận crack/key lậu.**

## Bước 1 — Ghi nhận cấu hình máy (5 phút)

Mở **Apple menu  → About This Mac** và ghi lại vào một file ghi chú:

| Mục | Ghi lại | Ví dụ |
|---|---|---|
| Chip | `Intel` hoặc `Apple M…` | Apple M2 |
| macOS version | số version | macOS 15.1 |
| RAM | GB | 16 GB |

> ⚠️ **CHƯA XÁC MINH:** Blueprint của khóa học ghi "theo thông tin IBM, macOS 15 và 26 nằm trong phạm vi hỗ trợ SPSS 32". Tuyên bố này **chưa được đối chiếu với tài liệu tương thích chính thức của IBM trong workspace này**. Trước khi cài, bạn nên tự kiểm tra trang compatibility của IBM cho đúng *version + build* macOS của mình (nguồn S02 trong `references/source-register.md` có link trang tài liệu IBM SPSS 32).

## Bước 2 — Kiểm tra SPSS đã cài chưa, version nào

- Mở **Finder → Applications** tìm `IBM SPSS Statistics`.
- Nếu đã cài: mở app → menu **SPSS Statistics → About SPSS Statistics** (tên menu có thể khác chút theo version) → ghi lại **version** (mục tiêu khóa học: **32**) và **build**.
- Nếu chưa cài: xin license/đường cài từ trường/cơ sở, hoặc trang chính thức của IBM. **Không cài từ nguồn không rõ.**

> ⚠️ **CHƯA XÁC MINH:** SPSS 32 là bản mã Intel. Trên MacBook Apple Silicon, SPSS 32 cần **Rosetta 2** (macOS thường tự hỏi cài lần đầu mở app Intel). IBM đã thông báo hướng tới bản native ARM64 (SPSS 33) — khóa học vẫn chốt SPSS 32 cho v1 trừ khi có thông báo mới (quyết định D-003 trong `project-control/decisions.md`).

## Bước 3 — Kiểm tra license và module được cấp

Khi SPSS mở được, ghi lại:

- Loại license: `Authorized user` / `Concurrent` / `Subscription` / `Trial`.
- **Modules được cấp quyền** — quan trọng vì một số bài sau cần module riêng:

| Module SPSS | Cần cho | Bạn có không? |
|---|---|---|
| Statistics Base | Toàn bộ core M01–M10 | ☐ chưa kiểm |
| Regression | M10 (hồi quy), M11 (logistic) | ☐ chưa kiểm |
| Advanced Statistics | Một số phân tích nâng cao | ☐ chưa kiểm |
| Exact Tests | Fisher chính xác ngoài bảng 2×2 (M08 mở rộng) | ☐ chưa kiểm |
| Complex Samples | E03 (NHANES) | ☐ chưa kiểm |
| Survival (nằm trong Advanced/Regression tùy gói) | E02 | ☐ chưa kiểm |

> Nếu thiếu module: **không sao** — giáo trình có phương án học lý thuyết thay thế, nhưng cần biết trước để không bị vỡ bài ở giữa.

## Bước 4 — Làm quen 3 cửa sổ chính (chỉ cần mở nhìn, chưa cần hiểu)

| Cửa sổ | Dùng để | Nhận diện |
|---|---|---|
| **Data Editor** | Nhập/xem dữ liệu | Có 2 tab góc dưới: `Data View` (bảng số liệu) và `Variable View` (định nghĩa biến) |
| **Output Viewer** | Xem kết quả phân tích | Mở ra sau khi chạy một lệnh; file `.spv` |
| **Syntax Editor** | Viết/lưu lệnh tái tạo | Mở qua `File → New → Syntax`; file `.sps` |

Kiểm tra nhanh: tạo file mới trong Data Editor → `File → Save As…` → lưu thử một file `.sav`. Nếu lưu/mở lại được → máy bạn đủ điều kiện bắt đầu M02.

## Bước 5 — Quy ước file và thư mục (rất quan trọng cho người mới)

- Tạo **một thư mục riêng** cho khóa học, ví dụ `~/Documents/spss-learning/`. Tất cả hướng dẫn trong giáo trình dùng **đường dẫn tương đối** — bạn chỉ cần nhớ "đặt file vào thư mục khóa học".
- Đuôi file sẽ gặp: `.sav` (dữ liệu SPSS) · `.sps` (syntax) · `.spv` (output) · `.csv` (dữ liệu thô trao đổi).
- **Quy tắc vàng:** không bao giờ ghi đè file dữ liệu gốc (raw). File raw giữ nguyên, mọi sửa chữa làm trên bản sao.
- **Dấu thập phân:** giáo trình quy ước dấu chấm `1.5`. Nếu máy bạn đang dùng dấu phẩy (`1,5`) theo region settings, ghi chú lại — sẽ xử lý ở M03 khi nhập CSV.
- **Tên biến:** chỉ dùng ký tự ASCII không dấu (`age_years`, không phải `tuổi`). Tiếng Việt có dấu để ở *Variable Labels*.

## Bước 6 — Báo cáo preflight (cho người hướng dẫn/QA)

Khi xong, chép mẫu này vào một file và điền:

```
- Chip: ____
- macOS: ____
- SPSS version + build: ____  (hoặc "chưa cài")
- Loại license: ____  (không ghi serial/key!)
- Modules đã có: ____
- Mở được Data Editor + Output Viewer: có/không
- Lưu + mở lại .sav được: có/không
- Vấn đề gặp phải: ____
```

> ⚠️ Đừng ghi license key/serial vào file hay gửi cho ai. Chỉ cần *loại* license và *danh sách module*.

## Nếu bạn chưa có SPSS

Vẫn học được **M01** (tư duy nghiên cứu — không cần SPSS). M02 trở đi cần phần mềm chạy được. Thiếu license thật sự → trao đổi với người phụ trách khóa học về phương án hợp lệ; không dùng bản lậu.

---
*Tài liệu này là checklist chuẩn bị, chưa phải bài học. Nội dung bài học bắt đầu từ `lessons/M01-research-thinking/` khi module được phát hành (`READY_FOR_LEARNING`).*
