# Ngày 07 — Workbook: Paired t-test

> Đầu vào: `clinic_bp_my_clean.sav` + `hba1c_pairs.sav`. Không nhìn `answer-key.md`.

---

## BT1 — Paired hay độc lập?

Đánh dấu P (paired) hay I (independent) — giải thích 1 câu:

1. Đo cân nặng của 50 bệnh nhân trước và sau 8 tuần can thiệp dinh dưỡng.
2. So cholesterol giữa bệnh nhân dùng statin và bệnh nhân không dùng (2 nhóm khác nhau).
3. Đo độ thị của **mắt phải và mắt trái** của cùng 40 bệnh nhân.
4. So nồng độ đường huyết giữa bệnh nhân gõ máy đo A và máy đo B — mỗi máy một nhóm người riêng.
5. Điểm stress của nhân viên y tế trước và sau ca trực đêm (cùng nhóm người).

## BT2 — Kiểm tra phân phối hiệu số

1. Trong `clinic_bp_my_clean.sav`: **Transform → Compute Variable…** → Target Variable `sbp_diff`,
   Numeric Expression: `sbp_baseline - sbp_followup` → OK.
2. Vẽ histogram `sbp_diff` (Graphs → Legacy Dialogs → Histogram).
3. Trả lời: hình dạng có gần đối xứng không? Có cực trị cô lập nào không? Điều đó nói gì về
   độ tin cậy của paired t-test Ngày 07?

## BT3 — Đọc output paired được giao

Output: Variable 1 = `pain_before`, Variable 2 = `pain_after`, n=60;
Mean hiệu số = 1,8 điểm; SD hiệu số = 2,4; 95% CI [1,2 ; 2,4]; t=5,81; df=59; Sig.(2-tailed)<0,001.

1. Hiệu số dương ở đây nghĩa là gì (đau giảm hay đau tăng)?
2. Viết câu kết quả đầy đủ.
3. Phát biểu "giảm 1,8 điểm chứng tỏ thuốc giảm đau hiệu quả" — đúng hay sai? Vì sao?

## BT4 — Tình huống mới

Nghiên cứu đo SpO2 của 20 bệnh nhân COPD trước và ngay sau khi thở ôxy.

1. Đây là paired hay independent? Vì sao?
2. Biến nào sẽ đưa vào Variable1/Variable2 — thứ tự ảnh hưởng gì?
3. Nếu 3/20 bệnh nhân mất số đo "sau", n trong output sẽ là bao nhiêu?
