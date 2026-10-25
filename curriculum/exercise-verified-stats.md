# exercise-verified-stats — số liệu tái tính từ file .sav bằng Python

> pyreadstat 1.3.7 + pandas 2.3.2 + scipy — chạy 2026-10-25. Nhãn NOT_RUN:
> chưa chạy trên SPSS thật; dùng đối chiếu kết quả bài học/đáp án.

## p1_B01_HA (1).sav (n=620)
```
Q38 CDHA: {1.0: 226, 2.0: 59, 3.0: 250, 4.0: 79, 5.0: 6}
Q09 HVanxGT:
GTinh  1.0  2.0
HVan           
1.0     53   48
2.0     93   36
3.0     90   51
4.0    114   67
5.0     23   19
6.0      3   23
Q41 mean Tuoi by GTinh x HA.GDinh:
                count   mean
GTinh HA.GDinh              
1.0   1.0         185  69.02
      2.0         191  65.36
2.0   1.0         188  67.15
      2.0          56  64.38
Q42 HA.TD_L1: N=620 min=100.0 max=180.0 mean=136.32 sd=19.06
Q42 HA.TT_L1: N=620 min=60.0 max=100.0 mean=78.40 sd=7.44
Q42 HA.TD_L2: N=620 min=100.0 max=180.0 mean=136.25 sd=19.19
Q42 HA.TT_L2: N=620 min=39.0 max=95.0 mean=77.94 sd=7.99
Q42 HATD_tb: N=620 min=100.0 max=180.0 mean=136.28 sd=19.07
Q42 HATT_tb: N=620 min=60.0 max=97.5 mean=78.17 sd=7.47
Q17 Tieuduong x GTinh:
GTinh      1.0  2.0
Tieuduong          
0.0        263  161
1.0        113   83
pct col:
GTinh       1.0   2.0
Tieuduong            
0.0        69.9  66.0
1.0        30.1  34.0
chi2=1.075 p=0.2998
Q18 TSu.RBia x GTinh:
GTinh     1.0  2.0
TSu.RBia          
1.0        66  222
2.0       310   22
pct col:
GTinh      1.0   2.0
TSu.RBia            
1.0       17.6  91.0
2.0       82.4   9.0
chi2=320.768 p=0.0000
Q19a MDoSD.RB x TDTT:
TDTT      1.0  2.0
MDoSD.RB          
0.0       145  262
1.0        11   18
2.0        75   68
3.0        25   16
chi2=19.418 p=0.0002
Q19b Stress x CV.Mucdo:
CV.Mucdo  0.0  1.0  2.0
Stress                 
1.0        50   53   14
2.0       200  255   48
chi2=1.322 p=0.5163
Q21 chi2=25.480 p=4.47e-07 OR=12.50 risk_exp=0.714 risk_unexp=0.167 RR=4.29
Q22 55:45: chi2=61.316 p=0.0000
Q22 40:60: chi2=0.108 p=0.7430
Q22 50:50: chi2=28.103 p=0.0000
Q39 TSu.HA: {0.0: 249, 2.0: 107, 3.0: 264} chi2=72.642 p=0.0000
Q39 HA.GDinh: {1.0: 373, 2.0: 247} chi2=25.606 p=0.0000
Q40 alcohol before=288 now=213 b=79 c=4 chi2=65.976 p=0.0000
Q20 smoking before=251 now=245 b=8 c=2 chi2=2.500 p=0.1138
Q23 BMI HA binh thuong: n=226 mean=20.00 sem=0.11 mode=18.90 skew=0.71 median=19.72
Q24 HATD_tb: mean=136.28 sem=0.77 mode=110.00 p30=120.00 median=140.00
Q24 HATT_tb: mean=78.17 sem=0.30 mode=80.00 p30=75.00 median=80.00
Q25 40-60: n=100 var=2.83 sd=1.68 mean=20.36 sem=0.17
Q25 61-80: n=440 var=3.85 sd=1.96 mean=20.61 sem=0.09
Q26 SBP_L1 by edu group:
           count    mean  median    std     var
HVan                                           
Duoi THPT    371  136.57   140.0  19.36  374.78
THPT-TCCD    223  135.22   140.0  18.74  351.05
DH+           26  142.19   145.5  16.82  282.88
Q27 Cannang by TSu.HA:
           count  <lambda_0>  <lambda_1>  <lambda_2>
TSuHA_bin                                           
0            249        47.0        46.0        55.0
1            371        46.0        46.0        53.0
Q28 HA L1 by CDHA_bin:
  Binh thuong: n=285 TD mean=117.90 sd=8.49 range=35 | TT mean=74.07 sd=5.93 range=25
  THA 1-3: n=335 TD mean=151.99 sd=8.72 range=40 | TT mean=82.08 sd=6.57 range=35
Q43 Tuoi by GTinh:
       count   min   max   mean    std
GTinh                                 
1.0      376  41.0  97.0  67.16  11.06
2.0      244  41.0  94.0  66.51  10.74```

## p1_B01_HA (1).sav — bổ sung Ngày 04–06 (Task 14)
```
Q05 TTrang.KTe x GTinh:
GTinh          1.0  2.0
TTrang.KTe             
1.0 (ngheo)    131   98   -> %hang: 57.2/42.8 | %cot: 34.8/40.2
2.0 (khong)    245  146   -> %hang: 62.7/37.3 | %cot: 65.2/59.8
Pearson chi2=1.800 p=0.1797 | Yates=1.579 p=0.2089 | Fisher=0.2015

Q08a HVan|GTinh=2 (n=244): {1:48, 2:36, 3:51, 4:67, 5:19, 6:23}
Q08b HVan|50<=Tuoi<=70 (n=368): {1:44, 2:75, 3:84, 4:120, 5:28, 6:17}
Q09 = crosstab HVan x GTinh (xem tren — cot GTinh=2 khop Q08a)
Q06 Tuoi by GTinh: nu(1) n=376 mean=67.16 sd=11.06 min=41 max=97
                   nam(2) n=244 mean=66.51 sd=10.74 min=41 max=94

Q10 BMI=Cannang/(Chieucao/100)^2: n=620 mean=20.42 sd=1.91 min=15.77 max=28.91
  (Chieucao don vi CM — can /100; sai cong thuc cho BMI~0.002)
Q11 DoTuoi recode [40-49,50-59,60-69,>=70] -> {1:54, 2:40, 3:309, 4:217}; >=70 = 217 (35.0%)
Q12 SoBenhMan = count(=1) cua 5 bien nhi phan {Timmach,Tieuduong,Than,Gan,Gut}:
  {0:326, 1:264, 2:30}; >=2 benh = 30 (4.8%); >=1 benh = 294 (47.4%)
  kiem chung cheo: dem o khong trong Benh.MT_1+MT_2 -> het {0:326,1:264,2:30}

Q17 Tieuduong: Pearson=1.075 p=0.2998 | Yates=0.900 p=0.3429 | Fisher=0.3309
Q17 Gan: Pearson=0.175 p=0.6761 | Yates=0.011 p=0.9152 | Fisher=0.7592 (expmin=4.33 <5)
Q18 TSu.RBia: Pearson=320.768 p<0.001 | Yates=317.823
```
> ⚠️ Chi-square 2×2: scipy `chi2_contingency` mặc định hiệu chỉnh Yates — phải truyền
> `correction=False` để ra dòng "Pearson Chi-Square" của SPSS. (Task 14 đã sửa lỗi hoán đổi.)

## File1.sav / File2_Phan2.sav / File3/File4
```
File1 n= 50
P2-Q1 table:
gnamvie     0.0  1.0
cchanthuon          
1.0           7   10
2.0           8   10
3.0           8    7
chi2=0.502 p=0.7782 expected min=6.90
P2-Q2 obs=[28, 22] chi2=0.720 p=0.3961
P2-Q3 nam: hospitalized 15/28 = 0.536 binomtest p=0.5638
P2-Q4 one-sample t: mean=75.32 sd=13.73 t=0.165 df=49 p=0.8698
P2-Q5 QB vs Hue ytruo: 78.67±15.68(n=18) vs 72.00±12.42(n=12) t=1.234 df=28 p=0.2273 Levene p=0.481
P2-Q6 ANOVA ytruo: F=0.938 p=0.3985
P2-Q7 QB vs QT tuoi: 35.06±16.58 vs 36.90±18.91 t=-0.318 p=0.7523 Levene p=0.170
P2-Q8 ANOVA tuoi: F=0.090 p=0.9140
P2-Q9a paired all: diff=2.68±10.81 t=1.754 df=49 p=0.0858
P2-Q9b QT: n=20 diff=6.45±16.58 t=1.739 p=0.0981
P2-Q9c QT thanh pho: n=11 diff=3.45±6.02 t=1.902 p=0.0863
P2-Q10a csa~tuoi: r=-0.351 p=0.0124 R2=0.123 slope=-0.362 intercept=85.79
P2-Q10b csa~ytruo: r=0.768 p=0.0000 R2=0.589 slope=0.940 intercept=1.82
P2-Q10c ytruo~tuoi: r=-0.349 p=0.0131 R2=0.121 slope=-0.293 intercept=85.98
P2-Q12: R2=0.623 beta=[15.663, -0.124, -1.114, 0.85] p=[np.float64(0.1828), np.float64(0.2249), np.float64(0.085), np.float64(0.0)]
P2-Q13 sleep: thuoc=6.92±0.89 placebo=5.49±1.26 diff=1.43±1.79 t=2.767 df=11 p=0.0183```

## File5_Phan2.sav (n=296) + File3/File4
```
File5 n= 296
Tuoi: mean=66.80 sd=8.14 median=67.00 min=47.0 max=91.0
PSA: mean=8.81 sd=17.05 median=5.75 min=0.3 max=221.0
Thetich: mean=35.86 sd=17.54 median=32.30 min=3.3 max=114.0
Khám_TT: {0.0: 111, 1.0: 185}
Siêu_âmTT: {0.0: 154, 1.0: 142}
Sinhthiet: {0.0: 201, 1.0: 95}
KhamTT x Sinhthiet:
Sinhthiet  0.0  1.0
Khám_TT            
0.0         84   27
1.0        117   68
chi2=4.920 p=0.0265
Sieuam x Sinhthiet:
Sinhthiet  0.0  1.0
Siêu_âmTT          
0.0        120   34
1.0         81   61
chi2=14.779 p=0.0001
Tuoi by Sinhthiet: neg 66.64±8.27 vs pos 67.14±7.88 t=-0.497 p=6.20e-01
PSA by Sinhthiet: neg 5.63±5.44 vs pos 15.55±27.96 t=-3.426 p=8.98e-04
Thetich by Sinhthiet: neg 37.44±18.93 vs pos 32.51±13.68 t=2.542 p=1.16e-02
corr PSA~Thetich: 0.102 PSA~Tuoi: 0.067
Sinhthiet  0.0  1.0
PSA_grp            
<=4         77   13
4-10       103   55
10-20       17   12
>20          4   15
File3 NDEAT values: ['H0', '0', '0', '0', '0', '0', '1', '0', '0', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1']
File4:
        AGE  PROCALCITONIN
DEATH                     
0      42.2           0.42
1      64.0           0.95```
