# Ngày 06 — Đáp án & giải thích

> Cross-check Python trên `clinic_bp_v1_clean.csv` (`NOT_RUN` trên SPSS). Sai số làm tròn cho phép.

---

## BT1 — t-test `bmi` theo `diabetes_flag`

1. Kỳ vọng (Python): nhóm 0 (không ĐTĐ): n=98, mean=25,6 (SD=3,5); nhóm 1 (có ĐTĐ): n=60,
   mean=26,4 (SD=4,1). Levene p=0,387 > 0,05 → đọc dòng Equal variances assumed;
   **t = −1,24, df=156, p = 0,216**, Mean Difference = −0,76 kg/m², 95% CI [−1,97 ; 0,45].
2. Câu mẫu: "BMI trung bình của nhóm có đái tháo đường cao hơn nhóm không ĐTĐ 0,76 kg/m²,
   nhưng khác biệt này tương thích với dao động ngẫu nhiên (95% CI: −0,45 đến 1,97;
   t(156) = 1,24; p = 0,216)." *(Vẫn viết đủ 4 thành phần — câu kết quả của "không có nghĩa"
   cũng cần độ lớn + CI, không chỉ "p>0,05".)*
3. Levene p=0,387 → dòng Equal variances assumed.

*Đây là bài tập quan trọng:* **p = 0,216 không có nghĩa "hai nhóm giống hệt nhau"** — chỉ là mẫu này
chưa đủ bằng chứng để nói khác biệt. CI [−1,97 ; 0,45] cho thấy khác biệt thật có thể nằm từ
−2 đến +0,5 kg/m².

*Tự chữa:* nếu n lệch 98/60 → có thể đang dùng file raw (có 1 ca `diabetes_flag` missing và
1 ca `bmi` missing → tổng phân tích được 158).

## BT2 — Chọn phương pháp

1. **Không** — cùng 30 người đo 2 lần → **paired** (Ngày 07).
2. **Đúng** — hai nhóm độc lập, biến định lượng. (Kiểm tra thêm phân phối/như Ngày 05.)
3. **Không** — biến kết quả là **định tính nhị phân** → chi-square (Ngày 08).
4. **Không** — **3 nhóm** → không phải t-test; hướng: ANOVA (nhắc Ngày 10 mục tùy chọn).

## BT3 — Đọc output

1. Dòng **Equal variances assumed** — vì Levene p=0,62 > 0,05.
2. "Nhóm B có giá trị trung bình thấp hơn nhóm A 7,2 đơn vị (95% CI: 1,3–13,1; t(96)=2,42; p=0,017)."
3. a. **Sai** — p-value không phải xác suất đúng của thuật ngữ "thuốc hiệu quả"; và mean nhóm A
   cao hơn nên hướng hiệu quả còn phải xem đó là biến gì.
   b. **Đúng** — đây chính là cách đọc CI: ranh giới dưới 1,3 nhỏ → khác biệt thật có thể rất nhỏ.

## BT4 — Tình huống mới

1. Không chạy vội: (a) vẽ **histogram/boxplot** theo nhóm xem độ lệch và cực trị;
   (b) xem **n mỗi nhóm** và đếm giá trị missing/ngoại lai.
2. Phân phối lệch nặng + cực trị lớn → cân nhắc **kiểm định phi tham số Mann–Whitney U**
   (ngoài phạm vi khóa — biết để hỏi/tra thêm), hoặc báo cáo median[IQR] theo nhóm kèm nhận xét
   thận trọng. Không "chạy t-test cho có" trên dữ liệu quá lệch.
