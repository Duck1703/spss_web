# Ngày 07 — Đáp án & giải thích

> Cross-check Python trên `clinic_bp_v1_clean.csv` / `exercise_hba1c_pairs.csv` (`NOT_RUN` trên SPSS).

---

## BT1 — Paired hay độc lập?

1. **P** — cùng người, 2 thời điểm.
2. **I** — 2 nhóm người khác nhau.
3. **P** — cùng bệnh nhân, 2 mắt (paired không nhất thiết là "trước–sau"; miễn là 2 đo ghép cặp
   trên cùng đối tượng).
4. **I** — 2 nhóm người riêng, mỗi máy đo nhóm khác nhau. *(Nếu cùng người được đo bằng cả 2 máy
   thì mới là paired.)*
5. **P** — cùng nhóm người, 2 thời điểm.

*Nguyên tắc:* hỏi "mỗi ô đo ở lần 1 khớp với đúng một ô ở lần 2 trên cùng đối tượng không?"

## BT2 — Phân phối hiệu số

1–2. `sbp_diff` có n=136 (24 ca thiếu `sbp_followup` → diff = system-missing).
3. Kỳ vọng: histogram gần đối xứng, tâm quanh ~+3,9 mmHg, không có cực trị khủng →
   paired t-test dùng được ở mức nhập môn.

*Lỗi hay gặp:* gõ biểu thức ngược (`sbp_followup - sbp_baseline`) → hiệu số âm −3,9.
Không sai về mặt phép tính — chỉ đổi hướng diễn giải ("followup thấp hơn baseline 3,9").

## BT3 — Đọc output paired

1. Variable1 − Variable2 = before − after = **dương** → điểm đau **giảm** sau can thiệp.
2. "Điểm đau trung bình giảm 1,8 điểm sau can thiệp (95% CI: 1,2–2,4; t(59)=5,81; p<0,001;
   n=60 cặp đo đủ 2 lần)."
3. **Sai** — thiết kế trước–sau không có nhóm chứng: đau có thể tự giảm theo thời gian, do chăm sóc
   khác, do người đo. Kết luận đúng: "điểm đau giảm sau khoảng thời gian can thiệp"; nói "do thuốc"
   cần thiết kế có chứng.

## BT4 — Tình huống mới

1. **Paired** — cùng 20 bệnh nhân, đo trước/sau thở ôxy.
2. Ví dụ Variable1 = `spo2_before`, Variable2 = `spo2_after` → hiệu số dương = tăng sau ôxy.
   Thứ tự chỉ đổi **dấu** của hiệu số — giá trị t/p không đổi.
3. **n = 17** — chỉ cặp có đủ 2 lần đo mới vào phân tích.
