# Ngày 11 — Đọc và báo cáo output

> **Lộ trình:** Practice-first 14 ngày · **Thời lượng:** ~90–120 phút · **Dataset:** `clinic_bp_my_clean.sav`
> **Trạng thái:** DRAFT — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`.

---

## A. Hôm nay bạn sẽ làm gì

1. Điều hướng **Output Viewer**: chọn, lọc, lưu, xuất bảng kết quả.
2. Tách "bảng cần báo cáo" khỏi "bảng chỉ để tự kiểm tra".
3. Viết một đoạn **kết quả khoa học thận trọng** hoàn chỉnh.
4. Gặp **SPSS Syntax** lần đầu ở mức nhận biết (không bắt buộc viết).

## B. Tình huống y khoa

Bạn đã chạy xong các phân tích cho bác sĩ Lan. Bây giờ phải đóng gói: bảng nào đưa vào báo cáo,
viết câu kết quả ra sao, lưu output ở đâu để tuần sau mở lại vẫn đúng.

Người mới hay mắc 2 lỗi: **copy nguyên trang output** vào báo cáo, và **viết kết quả quá tay**
("chứng minh", "khẳng định"). Hôm nay sửa cả hai.

## C. Những điều cần biết trước (vừa đủ)

- **Output Viewer** là cửa sổ riêng với `.sav`; lưu thành **`.spv`** (File → Save trong cửa sổ
  Output). Mất điện không lưu = mất kết quả.
- **Navigation pane** (cột trái của Output Viewer): danh sách mọi bảng/hình đã chạy — click để
  nhảy, xóa bảng không cần, đổi tên cho dễ tìm.
- Một phân tích in ra nhiều bảng; **không phải bảng nào cũng lên báo cáo**:
  - Vào báo cáo: bảng mô tả (Group Statistics/Frequencies), bảng kiểm định đã chọn dòng đúng,
    hình minh họa chọn lọc.
  - Ở lại nội bộ: notes, case-processing chi tiết, bảng Levene (chỉ nhắc "đã kiểm tra").
- **Viết kết quả có giới hạn**: luôn kèm n, độ lớn khác biệt/hệ số, CI/p, và 1 câu giới hạn
  (thiết kế, missing, mẫu giả lập).

## D. Thực hành trên Mac

> ⚠️ `MAC_SPSS_VERIFICATION_PENDING`

### Bước 1 — Quản lý Output Viewer

1. Chạy lại 2 phân tích quen: Frequencies `smoking_status` + Independent t-test
   `sbp_followup` ~ `treatment_group`.
2. Ở navigation pane: đổi tên từng bảng (double-click tiêu đề) thành "Tần số hút thuốc",
   "T-test SBP sau 3 tháng theo nhóm".
3. **File → Save As…** → `day11_outputs.spv` — đóng rồi mở lại để kiểm chứng output vẫn đó.
4. Xuất một bảng: chuột phải bảng → **Export…** → chọn Word/Excel/PDF → mở file xem kết quả.

### Bước 2 — Chọn bảng đưa vào báo cáo

Với t-test `sbp_followup` ~ `treatment_group`, đánh dấu bảng nào "lên báo cáo":

- `Group Statistics` → **có** (bảng mean/SD theo nhóm).
- `Independent Samples Test` → **có** (nhưng chỉ *trích* dòng đã chọn theo Levene — không chép
  cả 2 dòng để người đọc tự đoán).
- `Notes`, `Case Processing Summary` → **không** (nội bộ).

### Bước 3 — Viết đoạn kết quả

Mẫu 4 câu cho phân tích Ngày 06 — bạn tự viết, rồi đối chiếu:

> "Trong 137 bệnh nhân có đo huyết áp tái khám, nhóm B có SBP trung bình 128,7 mmHg (SD 19,2)
> so với 140,5 mmHg (SD 16,4) ở nhóm A — chênh lệch 11,8 mmHg (95% CI: 5,8–17,8;
> t(135) = 3,87; p < 0,001). Kết quả áp dụng cho nhóm bệnh nhân có theo dõi của phòng khám này;
> 23/160 bệnh nhân không có dữ liệu tái khám và đây là dữ liệu giả lập phục vụ học tập."

Nhận xét đoạn này có: n + giới hạn mẫu số · độ lớn + hướng · CI + t/p · giới hạn thiết kế + tính
chất dữ liệu.

### Bước 4 — Gặp SPSS Syntax (nhận biết thôi)

Menu **File → New → Syntax** mở cửa sổ code. Một mẹo: ở mọi hộp thoại bạn đã dùng, có nút
**Paste** — bấm thay vì OK để SPSS tự viết syntax vào cửa sổ này. Ví dụ t-test Ngày 06 thành:

```spss
T-TEST GROUPS=treatment_group('A' 'B')
  /VARIABLES=sbp_followup.
```

Bạn **không cần học viết syntax** trong 14 ngày — chỉ cần biết: syntax = lưu lại chính xác
thao tác để chạy lại/chia sẻ. Đóng cửa sổ mà không lưu cũng không sao.

## E. Hiểu kết quả của bạn

- Bạn đã có: file `.spv` mở lại được, một bảng xuất ra ngoài, đoạn kết quả 3–4 câu đúng giới hạn.
- Quy ước nghề nghiệp: **số nào trong báo cáo cũng phải truy được về một bảng output đã lưu** —
  đó là lý do `.spv` quan trọng như `.sav`.

## F. Bài tập tự làm

`workbook.md`.

## G. Đáp án

`answer-key.md`.

## H. Checkpoint qua bài

- [ ] File `day11_outputs.spv` lưu được và mở lại được.
- [ ] Xuất được ≥1 bảng ra Word/Excel/PDF.
- [ ] Đoạn kết quả 3–4 câu có đủ: n, mean nhóm, diff+CI, t/p, giới hạn.

## I. Đọc thêm (không bắt buộc)

- **Export toàn bộ:** File → Export trong Output Viewer xuất cả output sang PDF/HTML — tiện gửi
  đồng nghiệp; nhưng báo cáo khoa học vẫn nên tự trình bày lại bảng gọn.
- **Pivot table editor:** double-click vào bảng output để đổi định dạng số/ẩn cột trước khi chụp —
  hữu ích khi làm slide.
- **Syntax để tái lập:** hồ sơ nghiên cứu chuyên nghiệp thường kèm file `.sps`; học sâu ở
  chương trình 16 tuần (M03+).

### Checklist tự kiểm chứng trên Mac (`MAC_SPSS_VERIFICATION_PENDING`)

- [ ] Output lưu `.spv` được và mở lại không mất.
- [ ] Menu chuột phải `Export…` trên bảng tồn tại; đuôi file xuất thực tế (docx/xlsx/pdf).
- [ ] Nút **Paste** có trong hộp thoại Independent-Samples T Test.
- [ ] Đuôi file syntax lưu là `.sps`.
