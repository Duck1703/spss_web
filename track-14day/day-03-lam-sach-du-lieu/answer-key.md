# Ngày 03 — Đáp án & giải thích

> Đọc sau khi làm xong `workbook.md`.

---

## BT1 — Bảng lỗi mini

| Vấn đề | Dòng | Xử lý tham chiếu | Lý do |
|---|---|---|---|
| `age = 520` | T03 | → missing | Bất khả thi sinh học; không đủ cơ sở đoán (52 hay 20? — không đoán) |
| `sex = 3` | T04 | → missing | Mã ngoài miền codebook {1,2}; không biết ý định người nhập |
| `weight_kg` trống | T05 | giữ missing | Thiếu thật hoặc chưa nhập — không tự bịa |
| Trùng T06 ×2 | T06 | xóa 1 dòng | Cùng một người một lần ghi → đếm kép làm sai mọi thống kê |

*Lỗi hay gặp:* (a) sửa 520 thành 52 "cho đẹp" — không có bằng chứng; (b) xóa luôn dòng T05 vì trống —
dòng đó là một quan sát thật, chỉ một ô thiếu; (c) quên kiểm tra `id` trùng.

## BT2 — Vì sao không sửa file gốc

1. Hai rủi ro: (a) **không truy vết được** — sau sửa không ai biết giá trị gốc là gì, kể cả bạn;
   (b) **lỗi không phát hiện** — Excel có thể tự đổi định dạng (ví dụ tự biến `1-2` thành ngày tháng)
   mà bạn không hay. Nếu file gốc bị sửa, không còn gì để đối chiếu.
2. Quy trình đúng: file raw **bất biến** → import → lưu bản làm việc `.sav` → sửa trên bản làm việc
   → ghi `cleaning_log.md` → lưu bản sạch **file mới**.

## BT3 — Hai loại missing

1. `sbp_followup` có **23 ô missing** — bệnh nhân không tái khám (`followup_completed = 0`).
   Đây là **missing có chủ đích/có lý do**, không phải lỗi; không "sửa" được vì dữ liệu không tồn tại.
2. Khác nhau: missing do *không có đo* (bản chất nghiên cứu) vs missing do *lỗi nhập bạn vừa đặt về
   missing* (dữ liệu từng có nhưng sai). Giống nhau: SPSS xử lý giống nhau — loại khỏi phép tính
   liên quan (listwise), nên **N trong mỗi bảng output có thể khác nhau** — luôn đọc N của từng bảng.

*Lỗi hay gặp:* hoảng khi thấy N < 160 trong output — đó là bình thường khi biến có missing.

## BT4 — Sổ đường huyết

1. Glucose 2,1 mmol/L **không chắc là lỗi** — hạ đường huyết nặng có thể xảy ra thật và *rất đáng
   quan tâm lâm sàng*. Giá trị cực trị (outlier) có thể là dữ liệu đúng → kiểm tra ngữ cảnh
   (ghi chú của y tá, bệnh nhân đó có triệu chứng không) trước khi quyết.
2. 33,9 mmol/L: vẫn trong miền *sinh học có thể* (hôn mê tăng áp lực thẩm thấu xảy ra >33,3),
   nhưng rất cực trị — có thể là lần đo lúc không nhịn đói. Không liên hệ được bệnh nhân →
   **giữ nguyên + ghi cleaning log "giá trị cực trị, chưa xác minh"**, và khi phân tích cân nhắc
   báo cáo thêm cả median/độ nhạy (Ngày 04–05 nói về lựa chọn chỉ số khi có cực trị).
3. Cần biết **đơn vị quan sát**: đây là bảng *theo lần đo* — một bệnh nhân nhiều dòng. Phân tích
   mô tả trên 300 "dòng đo" ≠ mô tả 300 bệnh nhân; cũng nên kiểm tra `patient_id` trùng là *bình
   thường* (cùng người nhiều lần đo) chứ không phải lỗi duplicate như ở BT1.

*Bài học lớn:* outlier **không tự động** là lỗi — quyết định xử lý phải dựa trên ngữ cảnh lâm sàng
và bằng chứng, không chỉ nhìn con số.
