# MAC-SPSS-PREFLIGHT — Phiếu kiểm tra môi trường MacBook + SPSS của học viên

- **Mục đích:** thu thập cấu hình thật trên máy học viên để chốt hướng dẫn M02+ và kiểm chứng tương thích. Điền bằng tay vào bản sao file này, hoặc trả lời trực tiếp cho người phụ trách.
- **Nguyên tắc:** **không ghi license key, serial, mật khẩu tài khoản IBM, hay bất kỳ secret nào** vào phiếu này. Chỉ ghi *loại* license và *danh sách module*.
- **Nguồn dữ kiện đã kiểm chứng** (chi tiết `references/source-validation-report.md`): ngày kiểm 2026-10-24.

## Phần A — Thông tin nền đã kiểm chứng từ IBM (tham khảo, đối chiếu trước khi điền)

| Dữ kiện | Trạng thái | Nguồn |
|---|---|---|
| SPSS Statistics for macOS được hỗ trợ trên **Apple Silicon từ bản 27.0.1.0 + macOS 11 Big Sur** | VERIFIED (trang IBM Support) | S10a |
| SPSS macOS là ứng dụng **kiến trúc Intel**; chạy trên Apple Silicon **qua Rosetta 2** | VERIFIED (blog IBM Community; cơ chế vẫn đúng) | S10b |
| SPCR cho SPSS 32.0.0.0 liệt kê **macOS Sequoia 15.0 (x86-64)** và **macOS Tahoe 26.0 (ARM64, có footnote)** | PARTIALLY_VERIFIED — đọc qua reproduction của SPCR trên trang vendor; **cần mở SPCR bằng trình duyệt để chốt** | S11 |
| Phần cứng Mac tối thiểu theo SPCR: 4GB đĩa trống, 4GB RAM (8GB khuyến nghị), màn hình ≥1024×768 | PARTIALLY_VERIFIED (cùng nguồn trên) | S11 |
| SPSS 32 dùng Rosetta 2 trên Apple Silicon — hệ quả: Rosetta 2 dự kiến còn trong macOS 27, bị gỡ ở macOS 28 (theo thông tin Apple qua thảo luận IBM Community — *nguồn community, chưa phải tuyên bố chính thức trong phạm vi đã kiểm*) | PARTIALLY_VERIFIED | IBM Community discussion |
| SPSS 33 hướng ARM64 native (theo Blueprint + cộng đồng) — **không** tự ý đổi version giáo trình | D-003 DEFERRED | `decisions.md` |

> **Lưu ý cho người phụ trách:** trước khi phát hành M02, phải mở **SPCR (S11)** bằng trình duyệt trên máy thật để xác nhận hàng macOS + footnote (1), và so với version SPSS/macOS thật của học viên.

## Phần B — Câu hỏi cho học viên (điền vào)

### B1. Chip của MacBook
Mở **Apple menu  → About This Mac**, nhìn dòng "Chip" hoặc "Processor":
- [ ] Apple Silicon (M1 / M2 / M3 / M4 …) — ghi rõ: `____`
- [ ] Intel — ghi rõ: `____`

*(Cách khác: Applications → Utilities → System Information → Hardware.)*

### B2. Phiên bản macOS
Cùng cửa sổ About This Mac, dòng "macOS":
- Version: `____` (ví dụ 15.1, 26.0)
- [ ] Tôi đã đối chiếu version của mình với bảng SPCR cho SPSS 32 — link: https://www.ibm.com/software/reports/compatibility/clarity/index.html?name=IBM+SPSS+Statistics (chọn 32.0.0.0 → Mac OS). Kết quả: `được hỗ trợ / không rõ / không được hỗ trợ`

### B3. SPSS đã cài chưa?
- [ ] Đã cài — version + build (mở SPSS → menu **SPSS Statistics → About IBM SPSS Statistics**): `____`
- [ ] Chưa cài — nguồn license dự kiến: `trường/cơ sở / mua cá nhân IBM / trial / chưa rõ`

### B4. Loại license (không ghi key!)
- [ ] Authorized user license (license cá nhân, gắn 1 máy)
- [ ] Concurrent/network license (qua server của trường)
- [ ] Subscription
- [ ] Trial
- [ ] Không rõ

### B5. Rosetta 2 (chỉ với Apple Silicon)
Nếu SPSS đã mở được trên máy Apple Silicon thì Rosetta 2 đã hoạt động. Nếu chưa cài:
- [ ] Đã có thông báo/cài Rosetta 2 khi mở app Intel đầu tiên: `đã có / chưa thử / lỗi: ____`

### B6. Ba cửa sổ chính mở được không?
- [ ] Data Editor (mở SPSS thấy bảng lưới; có tab Data View / Variable View góc dưới)
- [ ] Output Viewer (chạy bất kỳ lệnh nào → cửa sổ kết quả hiện ra)
- [ ] Syntax Editor (File → New → Syntax mở được)

### B7. Module phân tích được cấp (quan trọng cho bài sau)
Kiểm tra trong SPSS (menu **Help/About → chi tiết license**, hoặc hỏi IT/trang license của trường):

| Module | Có/Không/Không rõ | Cần cho |
|---|---|---|
| Statistics Base | ___ | Toàn bộ core |
| Regression | ___ | M10, M11 |
| Advanced Statistics | ___ | Một số phân tích mở rộng |
| Exact Tests | ___ | Fisher ngoài 2×2 (M08 mở rộng) |
| Complex Samples | ___ | E03 |
| Survival-related (nằm trong Advanced/Regression tùy gói) | ___ | E02 |

*(Mapping module→tính năng sẽ được đối chiếu lại với manual IBM — R-07 — trước khi phát hành bài dùng module đó.)*

### B8. Kiểm tra file cơ bản
- [ ] Tạo file Data Editor mới → Save As `.sav` → đóng → mở lại được
- [ ] Chạy thử `Analyze → Descriptive Statistics → Frequencies` trên dữ liệu bất kỳ → Output hiện

### B9. Lỗi/thông báo bất thường gặp
Ghi nguyên văn thông báo lỗi (có thể chụp màn hình kèm theo cho người phụ trách):
```
____
```

### B10. Khác biệt môi trường đã ghi nhận
- Dấu thập phân hệ thống: `.` hoặc `,` — `____`
- Font hiển thị tiếng Việt trong SPSS bình thường: `có / lỗi: ____`
- Khác biệt menu so với hướng dẫn (nếu có): `____`

## Phần C — Phân loại phụ thuộc (để không chặn nhầm công việc)

| Hạng mục | Cần phiếu này? | Ghi chú |
|---|---|---|
| M01 (tư duy nghiên cứu, thống kê nền) | **Không** — viết/review được độc lập | Không dùng SPSS |
| M02 thao tác giao diện | **Có** — cần B1–B9 để kiểm chứng runtime trước `VERIFIED` | Soạn thảo được nhưng chỉ `NOT_RUN` |
| M03 thiết kế dataset/codebook/logic làm sạch | **Không** — chuẩn bị được trên giấy/script | Phần procedure SPSS + output cần B3–B9 |
| M03 thao tác/output SPSS | **Có** (ít nhất B3, B6, B8) | Kiểm chứng riêng ở Pass 2 |
| Cổng phát hành bất kỳ module có thao tác SPSS | Có + máy QA có SPSS 32 | Pass 2 bắt buộc chạy thật |

**Quy tắc:** thiếu phiếu này chỉ chặn các tiêu chí chấp nhận liên quan môi trường thật — **không** chặn toàn bộ chương trình (theo PHASE C3 Task 02).
