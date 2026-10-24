# expected-results.md — Kết quả mong đợi (cross-check Python)

> **Nhãn:** `NOT_RUN` — mọi con số dưới đây được **tính bằng Python 3 + numpy/pandas/scipy** (cross-check độc lập), **không phải output SPSS**. Khi chạy lại trên SPSS 32/macOS, kết quả phải khớp về giá trị (sai khác nhỏ do làm tròn); output SPSS còn có thêm nhãn bảng và số chữ số thập phân mặc định khác.

> Tất cả dataset: **SIMULATED — không phải bằng chứng lâm sàng.**


## DS-A `clinic_bp_v1_clean.csv` (n = 160 dòng dữ liệu)

Bản raw: 161 dòng (160 id duy nhất + 1 dòng trùng). Sạch: 160 dòng.

- `age_years`: n=159, mean=52,7, SD=13,0, min=24,0, max=82,0, median=54,0, IQR=[44,0; 63,0]
- `bmi`: n=159, mean=25,9, SD=3,7, min=17,5, max=36,1, median=25,9, IQR=[23,1; 28,8]
- `sbp_baseline`: n=159, mean=139,0, SD=15,0, min=98,0, max=177,0, median=139,0, IQR=[130,0; 150,0]
- `adherence_score`: n=159, mean=70,4, SD=17,9, min=18,3, max=96,2, median=74,3, IQR=[60,2; 84,0]
- `sbp_followup`: n=137, mean=135,1, SD=18,6, min=95,0, max=171,0, median=135,0, IQR=[122,0; 147,0]
- `sex_code`: {'1': 76, '2': 83} · missing=1
- `treatment_group`: {'A': 86, 'B': 74}
- `diabetes_flag`: {'0': 99, '1': 60} · missing=1
- `smoking_status`: {'0': 94, '1': 37, '2': 29}
- `followup_completed`: {'0': 23, '1': 137}
- `bp_controlled`: {'0': 57, '1': 80} · missing=23

### Day 06 — Independent t-test: `sbp_followup` theo `treatment_group`

- Nhóm A: n=74, mean=140,5, SD=16,4
- Nhóm B: n=63, mean=128,7, SD=19,2
- Levene: F=1,09, p=0,298
- Equal variances assumed: t=3,87, df=135, p(2-sided)=<0,001, diff(A−B)=11,8 mmHg, 95% CI [5,8; 17,8]
- Welch: t=3,82, df=122,8, p=<0,001

### Day 06 BT1 — Independent t-test: `bmi` theo `diabetes_flag`

- Nhóm 0 (không ĐTĐ): n=98, mean=25,6, SD=3,5 · Nhóm 1 (có ĐTĐ): n=60, mean=26,4, SD=4,1
- Levene: F=0,75, p=0,387 → Equal variances assumed
- t=−1,24, df=156, p(2-sided)=0,216, diff(0−1)=−0,76 kg/m², 95% CI [−1,97; 0,45] — **không có ý nghĩa thống kê**

### Day 07 — Paired t-test: `sbp_baseline` vs `sbp_followup` (n=136)

- Baseline: mean=138,8, SD=15,5
- Follow-up: mean=134,9, SD=18,6
- Hiệu số (baseline − followup): mean=3,9 mmHg, SD=8,7, 95% CI [2,5; 5,4]
- t=5,30, df=135, p(2-sided)=<0,001

### Day 08 — Crosstabs `diabetes_flag` × `bp_controlled` (chỉ ca đủ follow-up)

- Bảng [dm=0:[ctrl=0,ctrl=1], dm=1:[ctrl=0,ctrl=1]]: [[23.0, 61.0], [33.0, 19.0]]
- Row % (tỷ lệ kiểm soát đạt trong nhóm): dm=0 → 72,6%, dm=1 → 36,5%
- Chi-square (không hiệu chỉnh): χ²=17,26, df=1, p=<0,001; Yates: χ²=15,80, p=<0,001
- Expected count min=21,4; ô có expected<5: 0/4; OR=0,22

### Day 08 BT1 — Crosstabs `sex_code` × `bp_controlled`

- Bảng [sex=1:[0,1], sex=2:[0,1]]: [[26,39],[30,41]] (n=136)
- % đạt: Nữ 60,0% · Nam 57,7% · χ²=0,07, df=1, p=0,79 (Yates χ²=0,01, p=0,93) · OR=1,10 · min expected=26,8 — **không có nghĩa thống kê**

### Day 09 — Correlation

- `bmi` × `sbp_baseline`: Pearson r=0,51, 95% CI [0,38; 0,61], p=<0,001, n=158; Spearman ρ=0,49, p=<0,001
- `adherence_score` × `sbp_change` (baseline−followup): Pearson r=0,38, p=<0,001; Spearman ρ=0,35, p=<0,001, n=135
- `age_years` × `sbp_baseline` (Day 09 BT1): Pearson r=0,63, p=<0,001; Spearman ρ=0,64, p=<0,001, n=158
- ANOVA `sbp_baseline` theo `smoking_status` (Day 10, tùy chọn): F=0,98, p=0,377, means=[137.7, 141.7, 139.7]

## DS-EX1 `exercise_hba1c_pairs.csv` (n=24)

- t0: mean=7,69, SD=0,76; t3: mean=7,41, SD=0,77
- Paired: diff=0,27, SD_diff=0,31, 95% CI [0,14; 0,41], t=4,37, df=23, p=<0,001

## DS-CAP `capstone_screening_clean.csv` (raw 91 dòng → sạch 90)

- `age_years`: n=90, mean=37,2, SD=9,0, min=20,0, max=58,0
- `bmi`: n=89, mean=24,5, SD=3,6, min=17,0, max=32,3
- `sleep_hours`: n=89, mean=6,7, SD=1,1, min=4,5, max=9,2
- `caffeine_cups`: n=89, mean=2,5, SD=1,5, min=0,0, max=6,0
- `sbp`: n=89, mean=131,4, SD=11,4, min=103,0, max=162,0
- `fasting_glucose`: n=90, mean=5,4, SD=0,8, min=4,0, max=7,5
- `sex_code`: {'1': 32, '2': 58}
- `shift_type`: {'0': 49, '1': 40} · missing=1
- `smoking_status`: {'0': 46, '1': 24, '2': 20}

- t-test `sbp` theo `shift_type` (ngày vs đêm): n=48/40, mean=129,8 vs 133,6, t=-1,59, p=0,116, diff=-3,8, 95% CI [-8,6; 1,0]
- Crosstabs `smoking hiện tại` × `sbp>=140`: bảng=[[50.0, 19.0], [18.0, 2.0]], χ²=2,64, p=0,104, min expected=4,7
- `bmi` × `sbp`: Pearson r=0,47, p=<0,001, 95% CI [0,29; 0,62]

## DS-FINAL `assessment_gp_clean.csv` (raw 60 → sạch 60)

- `age_years`: n=59, mean=47,3, SD=11,9, min=20,0, max=72,0
- `bmi`: n=60, mean=25,4, SD=3,7, min=17,0, max=34,5
- `waist_cm`: n=60, mean=63,0, SD=8,8, min=43,2, max=80,9
- `sbp`: n=59, mean=115,5, SD=12,0, min=95,0, max=146,0
- `fasting_glucose`: n=60, mean=5,4, SD=0,7, min=4,0, max=7,1
- `sex_code`: {'1': 32, '2': 27} · missing=1
- `smoker_current`: {'0': 48, '1': 12}
- `activity_level`: {'1': 22, '2': 31, '3': 6} · missing=1

- `waist_cm` × `sbp`: Pearson r=0,11, p=0,396, 95% CI [-0,15; 0,36]
- `bmi` × `waist_cm`: Pearson r=0,75, p=<0,001
- t-test `sbp` theo `smoker_current`: n=47/12, mean=116,2 vs 112,8, t=0,89, p=0,378, diff=3,4, 95% CI [-4,3; 11,2]
