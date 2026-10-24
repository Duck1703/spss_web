# Ngày 03 — Đáp án & giải thích

> Đọc sau khi làm xong `workbook.md`.

---

## BT0 — Đối chiếu với bản chuẩn

Kết quả tham chiếu khi chạy trên `clinic_bp_my_clean.sav` (phải khớp gần hệt bản chuẩn —
cross-check Python, `NOT_RUN`):

- `age_years`: N=159, min=24,0, max=82,0 (mất 1 N vì ô 250 đã về missing)
- `bmi`: N=159, min=17,5, max=36,1
- `sbp_baseline`: N=159, min=98,0, max=177,0
- `adherence_score`: N=159, min=18,3, max=96,2
- `sbp_followup`: N=137, min=95,0, max=171,0
- `sex_code`: chỉ 1 (n=76) và 2 (n=83) + 1 missing · `diabetes_flag`: 0/1 + 1 missing ·
  `smoking_status`: 0/1/2 · `followup_completed`: 0/1 · `bp_controlled`: 0/1 + 23 missing
- **160 dòng** — đúng một dòng P088 duy nhất.

*Chênh lệch nhỏ do làm tròn là bình thường.* Nếu con số lệch nhiều → tra `cleaning_log.md`
đối chiếu với các lỗi trong bảng bên dưới.

**Đối chiếu nhanh các lỗi gài trong `_raw.csv`** (để bạn tự kiểm — đây là phần "đáp án
làm sạch" của lesson): tuổi 250 (P037), 'F'→1 (P022), `9`→missing (P052), SBP −30 (P074),
P088 trùng ×2, BMI 152,4 (P103), P119 flag→0, `diabetes_flag` trống P141 (giữ missing),
adherence 118 (P007).

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
   missing* (dữ liệu từng có nhưng sai). Giống nhau: SPSS chỉ loại dòng đó khỏi **riêng phép tính
   cần biến bị missing** — dòng vẫn được đếm bình thường cho các biến khác. Vì vậy **N trong mỗi
   bảng output có thể khác nhau** — luôn đọc N của từng bảng.

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
