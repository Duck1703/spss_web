# Ngày 06 — Workbook: T-test hai nhóm độc lập

> Đầu vào: `clinic_bp_my_clean.sav`. Không nhìn `answer-key.md`.

---

## BT1 — Tự chạy một t-test khác

1. Chạy Independent-Samples T Test cho `bmi` theo `diabetes_flag` (Define Groups: 0 và 1).
2. Viết câu kết quả đầy đủ 4 thành phần (hướng, độ lớn, CI, kiểm định).
3. Ghi chú: Levene's Test có p như thế nào — bạn đọc dòng nào?

## BT2 — Chọn phương pháp (chưa chạy)

Với mỗi tình huống, trả lời: có phải t-test độc lập không? Vì sao?

1. So sánh điểm lo âu giữa bệnh nhân **trước và sau** tư vấn — cùng 30 người.
2. So sánh chiều cao trung bình giữa 2 lớp học sinh khác trường.
3. So sánh tỷ lệ hài lòng (hài lòng/không) giữa 2 khoa.
4. So sánh huyết áp giữa 3 nhóm tuổi (<40, 40–60, >60).

## BT3 — Đọc output bạn được giao

Một t-test cho output: Group A n=50 mean 145,2 (SD 14); Group B n=48 mean 138,0 (SD 15);
Levene p=0,62; dòng "Equal variances assumed": t=2,42, df=96, Sig.(2-tailed)=0,017,
Mean Difference=7,2, 95% CI [1,3 ; 13,1].

1. Đọc dòng nào — vì sao?
2. Viết câu kết quả đầy đủ.
3. Hai câu diễn giải sau đúng hay sai:
   a. "p=0,017 nghĩa là có 98,3% khả năng thuốc A hiệu quả."
   b. "Khác biệt trung bình ~7,2 mmHg, nhưng 95% CI cho thấy khác biệt thật có thể chỉ 1,3 mmHg —
   chưa chắc đã có ý nghĩa lâm sàng."

## BT4 — Tình huống mới

Bạn có dataset 200 bệnh nhân COVID-19: biến `icu_days` (số ngày ICU, phân phối rất lệch phải,
vài ca >40 ngày) và `vaccine_group` (0/1).

1. Bạn có chạy ngay t-test cho `icu_days` không? Nêu 2 bước kiểm tra trước.
2. Nếu phân phối lệch nặng, bạn sẽ làm gì thay vì t-test? (chỉ cần nêu hướng)
