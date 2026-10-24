#!/usr/bin/env python3
"""
generate_all.py — Sinh toàn bộ dataset GIẢ LẬP cho lộ trình 14 ngày (TASK 09).

Chạy từ project root:   python datasets/generators/generate_all.py

- Seed cố định → chạy lại ra đúng cùng một dữ liệu (kiểm chứng được).
- Ghi vào datasets/synthetic-raw/ (bản GỐC — bất biến sau khi phát hành)
  và datasets/cleaned/ (bản sạch tham chiếu sau khi áp các quy tắc sửa đã công bố).
- Tính expected results bằng Python (numpy/scipy từ .workspace/tmp/pylibs nếu có)
  → datasets/expected-results.md. Đây là CROSS-CHECK, KHÔNG phải SPSS runtime:
  mọi con số mang nhãn NOT_RUN cho tới khi chạy lại trên SPSS thật.
- Mọi dữ liệu là SIMULATED — không phải bệnh nhân thật, không phải bằng chứng lâm sàng.
"""
import csv, math, os, random, sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.join(ROOT, '.workspace', 'tmp', 'pylibs'))

import numpy as np
from scipy import stats  # cross-check only — NOT SPSS

RAW = os.path.join(ROOT, 'datasets', 'synthetic-raw')
CLEAN = os.path.join(ROOT, 'datasets', 'cleaned')
OUT_MD = os.path.join(ROOT, 'datasets', 'expected-results.md')

SIMULATED_NOTE = "# SIMULATED DATA — du lieu gia lap 100% cho giao duc; khong phai benh nhan that."


def sigmoid(x):
    return 1.0 / (1.0 + math.exp(-x))


def write_csv(path, header, rows):
    """CSV chuan: chi header + du lieu (de import vao SPSS khong can buoc phu).
    Nhan SIMULATED dat trong file companion 00-SIMULATED-NOTICE.md cung thu muc
    + trong codebook + trong moi bai hoc su dung file."""
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', newline='', encoding='utf-8-sig') as f:
        w = csv.writer(f)
        w.writerow(header)
        w.writerows(rows)
    notice = os.path.join(os.path.dirname(path), '00-SIMULATED-NOTICE.md')
    if not os.path.exists(notice):
        with open(notice, 'w', encoding='utf-8') as n:
            n.write("# SIMULATED DATA\n\n"
                    "Moi file CSV trong thu muc nay la **du lieu gia lap 100%** phuc vu hoc tap.\n"
                    "Khong phai benh nhan that, khong phai bang chung lam sang, khong dung de ket luan y khoa.\n"
                    "Cach sinh: `datasets/generators/generate_all.py` (seed co dinh) — xem codebook trong `datasets/codebooks/`.\n")


def read_csv(path):
    """Doc lai file da ghi de tinh expected results."""
    with open(path, encoding='utf-8-sig') as f:
        rdr = csv.DictReader(f)
        return list(rdr)


# =====================================================================
# DS-A: clinic_bp_synthetic — 160 ho so phong kham tang huyet ap (GIA LAP)
# =====================================================================
def gen_clinic_bp(seed=20261024):
    rng = random.Random(seed)
    rows = []
    for i in range(1, 161):
        pid = f"P{i:03d}"
        age = int(round(min(82, max(24, rng.gauss(52, 12)))))
        sex = 2 if rng.random() < 0.45 else 1          # 1=Nu, 2=Nam
        bmi = round(min(42.0, max(17.5, 23.0 + 0.06 * age + rng.gauss(0, 3.6))), 1)
        p_dm = sigmoid(-3.2 + 0.045 * age + 0.11 * (bmi - 24))
        diabetes = 1 if rng.random() < p_dm else 0
        # smoking: 0=khong hut, 1=da bo, 2=dang hut
        if sex == 2:
            r = rng.random()
            smoking = 0 if r < 0.40 else (1 if r < 0.70 else 2)
        else:
            r = rng.random()
            smoking = 0 if r < 0.80 else (1 if r < 0.92 else 2)
        # treatment_group: A = dieu tri chuan, B = chuan + giao duc tuan thu.
        # KHONG phai ngau nhien hoa: bac si co xu huong dua benh nhan tre hon vao B.
        p_b = 0.62 if age < 55 else 0.38
        group = 'B' if rng.random() < p_b else 'A'
        adherence = round(rng.betavariate(5, 2) * 100, 1)     # 0-100, lech trai
        sbp0 = 104 + 0.58 * age + 1.40 * (bmi - 24) + 6 * diabetes + rng.gauss(0, 10)
        sbp0 = round(min(196, max(98, sbp0)))
        follow = 1 if rng.random() < 0.88 else 0
        if follow:
            drop = 3.0 + (6.0 if group == 'B' else 0.0) + 0.15 * (adherence - 70) - 4.0 * diabetes
            sbp1 = int(round(min(200, max(95, sbp0 - drop + rng.gauss(0, 7)))))
            bp_ctrl = 1 if sbp1 < 140 else 0
            sbp1_s, ctrl_s = str(sbp1), str(bp_ctrl)
        else:
            sbp1_s, ctrl_s = '', ''
        rows.append({
            'patient_id': pid, 'age_years': str(age), 'sex_code': str(sex),
            'bmi': f"{bmi:.1f}", 'sbp_baseline': str(sbp0),
            'treatment_group': group, 'adherence_score': f"{adherence:.1f}",
            'diabetes_flag': str(diabetes), 'smoking_status': str(smoking),
            'sbp_followup': sbp1_s, 'followup_completed': str(follow),
            'bp_controlled': ctrl_s,
        })
    return rows


CLINIC_HEADER = ['patient_id', 'age_years', 'sex_code', 'bmi', 'sbp_baseline',
                 'treatment_group', 'adherence_score', 'diabetes_flag',
                 'smoking_status', 'sbp_followup', 'followup_completed',
                 'bp_controlled']


def plant_errors_clinic(rows):
    """Tao ban raw co loi gai co chu dinh (catalog noi bo: codebooks/planted-errors-INTERNAL.md)."""
    raw = [dict(r) for r in rows]
    by_id = {r['patient_id']: r for r in raw}
    by_id['P007']['adherence_score'] = '118'     # > max 100
    by_id['P022']['sex_code'] = 'F'              # chuoi trong cot so
    by_id['P037']['age_years'] = '250'           # tuoi bat kha thi
    by_id['P052']['sex_code'] = '9'              # ma ngoai {1,2}
    by_id['P074']['sbp_baseline'] = '-30'        # huyet ap am
    by_id['P103']['bmi'] = '152.4'               # BMI bat kha thi
    by_id['P119']['followup_completed'] = '1'    # co flag nhung khong co so do
    by_id['P119']['sbp_followup'] = ''
    by_id['P119']['bp_controlled'] = ''
    by_id['P141']['diabetes_flag'] = ''          # thieu
    # Trung lap: chen ban sao cua P088 vao giua file (khong ke nhau)
    dup = dict(by_id['P088'])
    idx = [i for i, r in enumerate(raw) if r['patient_id'] == 'P105'][0]
    raw.insert(idx, dup)
    return raw


def clean_clinic(rows):
    """Quy tac sua cong bo trong bai Day 03 → ban sach tham chieu."""
    out = []
    seen = set()
    for r in [dict(x) for x in rows]:
        pid = r['patient_id']
        if pid in seen:
            continue                     # bo ban trung lap (giu ban dau tien)
        seen.add(pid)
        if r['age_years'] == '250':
            r['age_years'] = ''          # khong doan gia tri -> missing
        if r['sex_code'] == 'F':
            r['sex_code'] = '1'          # 'F' = Female -> ma 1 theo codebook
        if r['sex_code'] == '9':
            r['sex_code'] = ''
        if r['sbp_baseline'] == '-30':
            r['sbp_baseline'] = ''
        if r['bmi'] == '152.4':
            r['bmi'] = ''
        if r['adherence_score'] == '118':
            r['adherence_score'] = ''
        if r['patient_id'] == 'P119':
            r['followup_completed'] = '0'   # khong co do follow-up -> chua hoan thanh
        out.append(r)
    return out


# =====================================================================
# DS-EX1: exercise_hba1c_pairs — 24 benh nhan, HbA1c truoc/sau 3 thang (GIA LAP)
# =====================================================================
def gen_hba1c(seed=20261025):
    rng = random.Random(seed)
    rows = []
    for i in range(1, 25):
        t0 = round(min(9.5, max(6.3, rng.gauss(7.6, 0.7))), 1)
        t3 = round(min(9.5, max(5.6, t0 - 0.45 + rng.gauss(0, 0.45))), 1)
        rows.append({'patient_id': f"R{i:02d}", 'hba1c_t0': f"{t0:.1f}",
                     'hba1c_t3': f"{t3:.1f}"})
    return rows


HBA1C_HEADER = ['patient_id', 'hba1c_t0', 'hba1c_t3']


# =====================================================================
# DS-CAP: capstone_screening — 90 cong nhan kham suc khoe dinh ky (GIA LAP)
# =====================================================================
def gen_capstone(seed=20261026):
    rng = random.Random(seed)
    rows = []
    for i in range(1, 91):
        wid = f"W{i:03d}"
        age = int(round(min(58, max(20, rng.gauss(38, 9)))))
        sex = 2 if rng.random() < 0.65 else 1
        bmi = round(min(38.0, max(17.0, rng.gauss(24.5, 3.8))), 1)
        shift = 1 if rng.random() < 0.40 else 0      # 0=ca ngay, 1=ca dem luan phien
        r = rng.random()
        smoking = 0 if r < 0.50 else (1 if r < 0.75 else 2)
        sleep = round(min(10.0, max(4.0, rng.gauss(7.0 - 0.7 * shift, 1.1))), 1)
        caffeine = max(0, min(8, int(round(rng.gauss(2.5, 1.5)))))
        sbp = 110 + 0.45 * age + 0.90 * (bmi - 23) + 4 * shift + rng.gauss(0, 9)
        sbp = int(round(min(190, max(95, sbp))))
        glucose = round(min(12.0, max(4.0, 4.2 + 0.05 * bmi + rng.gauss(0, 0.7))), 1)
        rows.append({'worker_id': wid, 'age_years': str(age), 'sex_code': str(sex),
                     'bmi': f"{bmi:.1f}", 'shift_type': str(shift),
                     'smoking_status': str(smoking), 'sleep_hours': f"{sleep:.1f}",
                     'caffeine_cups': str(caffeine), 'sbp': str(sbp),
                     'fasting_glucose': f"{glucose:.1f}"})
    return rows


CAP_HEADER = ['worker_id', 'age_years', 'sex_code', 'bmi', 'shift_type',
              'smoking_status', 'sleep_hours', 'caffeine_cups', 'sbp',
              'fasting_glucose']


def plant_errors_capstone(rows):
    raw = [dict(r) for r in rows]
    by_id = {r['worker_id']: r for r in raw}
    by_id['W014']['sleep_hours'] = '-3'
    by_id['W027']['shift_type'] = '7'
    by_id['W033']['bmi'] = ''
    by_id['W058']['sbp'] = '260'
    by_id['W085']['caffeine_cups'] = '42'
    dup = dict(by_id['W071'])
    idx = [i for i, r in enumerate(raw) if r['patient_id' if 'patient_id' in r else 'worker_id'] == 'W080'][0]
    raw.insert(idx, dup)
    return raw


def clean_capstone(rows):
    out = []
    seen = set()
    for r in [dict(x) for x in rows]:
        wid = r['worker_id']
        if wid in seen:
            continue
        seen.add(wid)
        if r['sleep_hours'] == '-3':
            r['sleep_hours'] = ''
        if r['shift_type'] == '7':
            r['shift_type'] = ''
        if r['sbp'] == '260':
            r['sbp'] = ''
        if r['caffeine_cups'] == '42':
            r['caffeine_cups'] = ''
        out.append(r)
    return out


# =====================================================================
# DS-FINAL: assessment_gp — 60 benh nhan kham tong quat phong mach da khoa (GIA LAP)
# =====================================================================
def gen_assessment(seed=20261027):
    rng = random.Random(seed)
    rows = []
    for i in range(1, 61):
        hid = f"H{i:03d}"
        age = int(round(min(78, max(20, rng.gauss(45, 13)))))
        sex = 2 if rng.random() < 0.48 else 1
        bmi = round(min(37.0, max(17.0, rng.gauss(25.0, 3.5))), 1)
        waist = round(88 + 1.6 * (bmi - 24) + rng.gauss(0, 6), 1)
        sbp = 88 + 0.55 * age + 0.80 * (bmi - 24) + rng.gauss(0, 9)
        sbp = int(round(min(185, max(95, sbp))))
        glucose = round(min(11.5, max(4.0, 4.2 + 0.05 * bmi + rng.gauss(0, 0.7))), 1)
        smoker = 1 if rng.random() < (0.32 if sex == 2 else 0.12) else 0
        activity = rng.choice([1, 1, 2, 2, 2, 3])   # 1=it, 2=vua, 3=nhieu
        rows.append({'patient_id': hid, 'age_years': str(age), 'sex_code': str(sex),
                     'bmi': f"{bmi:.1f}", 'waist_cm': f"{waist:.1f}",
                     'sbp': str(sbp), 'fasting_glucose': f"{glucose:.1f}",
                     'smoker_current': str(smoker), 'activity_level': str(activity)})
    return rows


ASM_HEADER = ['patient_id', 'age_years', 'sex_code', 'bmi', 'waist_cm', 'sbp',
              'fasting_glucose', 'smoker_current', 'activity_level']


def plant_errors_assessment(rows):
    raw = [dict(r) for r in rows]
    by_id = {r['patient_id']: r for r in raw}
    by_id['H012']['age_years'] = '190'
    by_id['H031']['sbp'] = '-15'
    by_id['H045']['sex_code'] = ''
    by_id['H052']['activity_level'] = '9'
    return raw


def clean_assessment(rows):
    out = []
    for r in [dict(x) for x in rows]:
        if r['age_years'] == '190':
            r['age_years'] = ''
        if r['sbp'] == '-15':
            r['sbp'] = ''
        if r['activity_level'] == '9':
            r['activity_level'] = ''
        out.append(r)
    return out


# =====================================================================
# Expected results — tinh bang Python (cross-check, KHONG phai SPSS)
# =====================================================================
def f(x):
    return '' if x == '' else float(x)


def col(rows, name):
    return [f(r[name]) for r in rows if r[name] != '']


def desc(rows, name):
    v = np.array(col(rows, name))
    return dict(n=int(v.size), mean=float(v.mean()), sd=float(v.std(ddof=1)),
                mn=float(v.min()), mx=float(v.max()),
                median=float(np.median(v)),
                q1=float(np.percentile(v, 25)), q3=float(np.percentile(v, 75)))


def freq(rows, name):
    from collections import Counter
    c = Counter(r[name] for r in rows if r[name] != '')
    n_miss = sum(1 for r in rows if r[name] == '')
    return c, n_miss


def ttest_ind(rows, val, grp, g1, g2):
    a = np.array([f(r[val]) for r in rows if r[grp] == g1 and r[val] != ''])
    b = np.array([f(r[val]) for r in rows if r[grp] == g2 and r[val] != ''])
    levene = stats.levene(a, b)
    t_eq = stats.ttest_ind(a, b, equal_var=True)
    t_w = stats.ttest_ind(a, b, equal_var=False)
    diff = float(a.mean() - b.mean())
    sp2 = ((a.size - 1) * a.var(ddof=1) + (b.size - 1) * b.var(ddof=1)) / (a.size + b.size - 2)
    se = math.sqrt(sp2 * (1 / a.size + 1 / b.size))
    df = a.size + b.size - 2
    tcrit = stats.t.ppf(0.975, df)
    return dict(n1=int(a.size), n2=int(b.size), m1=float(a.mean()), m2=float(b.mean()),
                sd1=float(a.std(ddof=1)), sd2=float(b.std(ddof=1)),
                levene_F=float(levene.statistic), levene_p=float(levene.pvalue),
                t=float(t_eq.statistic), df=float(df), p=float(t_eq.pvalue),
                diff=diff, ci_lo=diff - tcrit * se, ci_hi=diff + tcrit * se,
                t_welch=float(t_w.statistic), df_welch=float(t_w.df),
                p_welch=float(t_w.pvalue))


def ttest_paired(rows, v0, v1):
    pairs = [(f(r[v0]), f(r[v1])) for r in rows if r[v0] != '' and r[v1] != '']
    a = np.array([p[0] for p in pairs]); b = np.array([p[1] for p in pairs])
    d = a - b
    res = stats.ttest_rel(a, b)
    se = float(d.std(ddof=1)) / math.sqrt(d.size)
    tcrit = stats.t.ppf(0.975, d.size - 1)
    return dict(n=int(d.size), m0=float(a.mean()), m1=float(b.mean()),
                sd0=float(a.std(ddof=1)), sd1=float(b.std(ddof=1)),
                dmean=float(d.mean()), dsd=float(d.std(ddof=1)),
                t=float(res.statistic), df=int(d.size - 1), p=float(res.pvalue),
                ci_lo=float(d.mean()) - tcrit * se, ci_hi=float(d.mean()) + tcrit * se)


def chi2(rows, v1, v2, l1, l2):
    table = np.zeros((len(l1), len(l2)))
    for r in rows:
        if r[v1] != '' and r[v2] != '':
            i, j = l1.index(r[v1]), l2.index(r[v2])
            table[i, j] += 1
    chi, p, dof, exp = stats.chi2_contingency(table, correction=False)
    chi_y, p_y, _, _ = stats.chi2_contingency(table, correction=True)
    odds = (table[1, 1] * table[0, 0]) / (table[1, 0] * table[0, 1]) if table.shape == (2, 2) else float('nan')
    return dict(table=table.tolist(), labels=(l1, l2), chi=float(chi), p=float(p),
                dof=int(dof), expected=exp.tolist(), min_expected=float(exp.min()),
                n_small_expected=int((exp < 5).sum()),
                chi_yates=float(chi_y), p_yates=float(p_y), odds_ratio=float(odds),
                row_pct=[[float(v / row.sum() * 100) for v in row] for row in table])


def pearson(rows, v1, v2):
    xs = [(f(r[v1]), f(r[v2])) for r in rows if r[v1] != '' and r[v2] != '']
    a = np.array([x[0] for x in xs]); b = np.array([x[1] for x in xs])
    r, p = stats.pearsonr(a, b)
    # Fisher z CI
    z = math.atanh(r); se = 1 / math.sqrt(a.size - 3)
    lo, hi = math.tanh(z - 1.96 * se), math.tanh(z + 1.96 * se)
    rs, ps = stats.spearmanr(a, b)
    return dict(n=int(a.size), r=float(r), p=float(p), ci_lo=float(lo), ci_hi=float(hi),
                rho=float(rs), p_spearman=float(ps))


def fmt(x, nd=2):
    if isinstance(x, float):
        s = f"{x:.{nd}f}"
        return s.replace('.', ',')
    return str(x)


def ptxt(p):
    if p < 0.001:
        return "<0,001"
    return f"{p:.3f}".replace('.', ',')


def main():
    md = []
    md.append("# expected-results.md — Kết quả mong đợi (cross-check Python)\n")
    md.append("> **Nhãn:** `NOT_RUN` — mọi con số dưới đây được **tính bằng Python 3 + numpy/pandas/scipy** "
              "(cross-check độc lập), **không phải output SPSS**. Khi chạy lại trên SPSS 32/macOS, "
              "kết quả phải khớp về giá trị (sai khác nhỏ do làm tròn); output SPSS còn có thêm "
              "nhãn bảng và số chữ số thập phân mặc định khác.\n")
    md.append("> Tất cả dataset: **SIMULATED — không phải bằng chứng lâm sàng.**\n")

    # ---------- DS-A ----------
    clinic = gen_clinic_bp()
    raw_rows = plant_errors_clinic(clinic)
    clean_rows = clean_clinic(raw_rows)
    write_csv(os.path.join(RAW, 'clinic_bp_v1_raw.csv'), CLINIC_HEADER,
              [[r[h] for h in CLINIC_HEADER] for r in raw_rows])
    write_csv(os.path.join(CLEAN, 'clinic_bp_v1_clean.csv'), CLINIC_HEADER,
              [[r[h] for h in CLINIC_HEADER] for r in clean_rows])

    md.append("\n## DS-A `clinic_bp_v1_clean.csv` (n = %d dòng dữ liệu)\n" % len(clean_rows))
    md.append("Bản raw: %d dòng (160 id duy nhất + 1 dòng trùng). Sạch: %d dòng.\n"
              % (len(raw_rows), len(clean_rows)))
    for v in ['age_years', 'bmi', 'sbp_baseline', 'adherence_score', 'sbp_followup']:
        d = desc(clean_rows, v)
        md.append(f"- `{v}`: n={d['n']}, mean={fmt(d['mean'],1)}, SD={fmt(d['sd'],1)}, "
                  f"min={fmt(d['mn'],1)}, max={fmt(d['mx'],1)}, median={fmt(d['median'],1)}, "
                  f"IQR=[{fmt(d['q1'],1)}; {fmt(d['q3'],1)}]")
    for v in ['sex_code', 'treatment_group', 'diabetes_flag', 'smoking_status',
              'followup_completed', 'bp_controlled']:
        c, nm = freq(clean_rows, v)
        md.append(f"- `{v}`: {dict(sorted(c.items()))}" + (f" · missing={nm}" if nm else ""))

    t_ind = ttest_ind(clean_rows, 'sbp_followup', 'treatment_group', 'A', 'B')
    md.append(f"\n### Day 06 — Independent t-test: `sbp_followup` theo `treatment_group`\n")
    md.append(f"- Nhóm A: n={t_ind['n1']}, mean={fmt(t_ind['m1'],1)}, SD={fmt(t_ind['sd1'],1)}")
    md.append(f"- Nhóm B: n={t_ind['n2']}, mean={fmt(t_ind['m2'],1)}, SD={fmt(t_ind['sd2'],1)}")
    md.append(f"- Levene: F={fmt(t_ind['levene_F'])}, p={ptxt(t_ind['levene_p'])}")
    md.append(f"- Equal variances assumed: t={fmt(t_ind['t'])}, df={fmt(t_ind['df'],0)}, "
              f"p(2-sided)={ptxt(t_ind['p'])}, diff(A−B)={fmt(t_ind['diff'],1)} mmHg, "
              f"95% CI [{fmt(t_ind['ci_lo'],1)}; {fmt(t_ind['ci_hi'],1)}]")
    md.append(f"- Welch: t={fmt(t_ind['t_welch'])}, df={fmt(t_ind['df_welch'],1)}, "
              f"p={ptxt(t_ind['p_welch'])}")

    t_bmi = ttest_ind(clean_rows, 'bmi', 'diabetes_flag', '0', '1')
    md.append(f"\n### Day 06 BT1 — Independent t-test: `bmi` theo `diabetes_flag`\n")
    md.append(f"- Nhóm 0 (không ĐTĐ): n={t_bmi['n1']}, mean={fmt(t_bmi['m1'],1)}, "
              f"SD={fmt(t_bmi['sd1'],1)} · Nhóm 1 (có ĐTĐ): n={t_bmi['n2']}, "
              f"mean={fmt(t_bmi['m2'],1)}, SD={fmt(t_bmi['sd2'],1)}")
    md.append(f"- Levene: F={fmt(t_bmi['levene_F'])}, p={ptxt(t_bmi['levene_p'])} "
              f"→ Equal variances assumed")
    md.append(f"- t={fmt(t_bmi['t'])}, df={fmt(t_bmi['df'],0)}, p(2-sided)={ptxt(t_bmi['p'])}, "
              f"diff(0−1)={fmt(t_bmi['diff'])} kg/m², 95% CI [{fmt(t_bmi['ci_lo'])}; "
              f"{fmt(t_bmi['ci_hi'])}] — **không có ý nghĩa thống kê**")

    t_pair = ttest_paired(clean_rows, 'sbp_baseline', 'sbp_followup')
    md.append(f"\n### Day 07 — Paired t-test: `sbp_baseline` vs `sbp_followup` (n={t_pair['n']})\n")
    md.append(f"- Baseline: mean={fmt(t_pair['m0'],1)}, SD={fmt(t_pair['sd0'],1)}")
    md.append(f"- Follow-up: mean={fmt(t_pair['m1'],1)}, SD={fmt(t_pair['sd1'],1)}")
    md.append(f"- Hiệu số (baseline − followup): mean={fmt(t_pair['dmean'],1)} mmHg, "
              f"SD={fmt(t_pair['dsd'],1)}, 95% CI [{fmt(t_pair['ci_lo'],1)}; {fmt(t_pair['ci_hi'],1)}]")
    md.append(f"- t={fmt(t_pair['t'])}, df={t_pair['df']}, p(2-sided)={ptxt(t_pair['p'])}")

    chi = chi2(clean_rows, 'diabetes_flag', 'bp_controlled', ['0', '1'], ['0', '1'])
    md.append(f"\n### Day 08 — Crosstabs `diabetes_flag` × `bp_controlled` (chỉ ca đủ follow-up)\n")
    md.append(f"- Bảng [dm=0:[ctrl=0,ctrl=1], dm=1:[ctrl=0,ctrl=1]]: {chi['table']}")
    md.append(f"- Row % (tỷ lệ kiểm soát đạt trong nhóm): dm=0 → {fmt(chi['row_pct'][0][1],1)}%, "
              f"dm=1 → {fmt(chi['row_pct'][1][1],1)}%")
    md.append(f"- Chi-square (không hiệu chỉnh): χ²={fmt(chi['chi'])}, df={chi['dof']}, "
              f"p={ptxt(chi['p'])}; Yates: χ²={fmt(chi['chi_yates'])}, p={ptxt(chi['p_yates'])}")
    md.append(f"- Expected count min={fmt(chi['min_expected'],1)}; ô có expected<5: "
              f"{chi['n_small_expected']}/4; OR={fmt(chi['odds_ratio'])}")

    chi_sex = chi2(clean_rows, 'sex_code', 'bp_controlled', ['1', '2'], ['0', '1'])
    tbl = chi_sex['table']
    md.append(f"\n### Day 08 BT1 — Crosstabs `sex_code` × `bp_controlled`\n")
    md.append(f"- Bảng [sex=1:[0,1], sex=2:[0,1]]: {tbl} (n={int(sum(sum(r) for r in tbl))})")
    md.append(f"- % đạt: Nữ {fmt(chi_sex['row_pct'][0][1],1)}% · Nam "
              f"{fmt(chi_sex['row_pct'][1][1],1)}% · χ²={fmt(chi_sex['chi'])}, "
              f"df={chi_sex['dof']}, p={ptxt(chi_sex['p'])} (Yates χ²={fmt(chi_sex['chi_yates'])}, "
              f"p={ptxt(chi_sex['p_yates'])}) · min expected={fmt(chi_sex['min_expected'],1)} "
              f"— **không có nghĩa thống kê**")
    md.append(f"- OR (định hướng rõ): nhãn SPSS `Odds Ratio for sex_code (1 / 2)` với cột sắp "
              f"theo mã (0 rồi 1) → sự kiện = `bp_controlled`=0 → **OR = "
              f"({int(tbl[0][0])}×{int(tbl[1][1])})/({int(tbl[0][1])}×{int(tbl[1][0])}) = "
              f"{fmt(chi_sex['odds_ratio'])}** = odds *không* đạt kiểm soát ở Nữ so với Nam. "
              f"Phát biểu tương đương: odds *đạt* kiểm soát ở Nữ ≈ 1/{fmt(chi_sex['odds_ratio'])} ≈ "
              f"**{fmt(1 / chi_sex['odds_ratio'])}** lần Nam. Cả hai số là cùng một OR — khác "
              f"chiều phát biểu, không phải hai kết quả.")

    corr1 = pearson(clean_rows, 'bmi', 'sbp_baseline')
    md.append(f"\n### Day 09 — Correlation\n")
    md.append(f"- `bmi` × `sbp_baseline`: Pearson r={fmt(corr1['r'])}, 95% CI "
              f"[{fmt(corr1['ci_lo'])}; {fmt(corr1['ci_hi'])}], p={ptxt(corr1['p'])}, "
              f"n={corr1['n']}; Spearman ρ={fmt(corr1['rho'])}, p={ptxt(corr1['p_spearman'])}")
    # adherence vs sbp change (Spearman, skewed)
    chg_rows = [dict(r, sbp_change=str(f(r['sbp_baseline']) - f(r['sbp_followup'])))
                for r in clean_rows
                if r['sbp_baseline'] != '' and r['sbp_followup'] != '' and r['adherence_score'] != '']
    corr2 = pearson(chg_rows, 'adherence_score', 'sbp_change')
    md.append(f"- `adherence_score` × `sbp_change` (baseline−followup): Pearson r={fmt(corr2['r'])}, "
              f"p={ptxt(corr2['p'])}; Spearman ρ={fmt(corr2['rho'])}, "
              f"p={ptxt(corr2['p_spearman'])}, n={corr2['n']}")
    corr_age = pearson(clean_rows, 'age_years', 'sbp_baseline')
    md.append(f"- `age_years` × `sbp_baseline` (Day 09 BT1): Pearson r={fmt(corr_age['r'])}, "
              f"p={ptxt(corr_age['p'])}; Spearman ρ={fmt(corr_age['rho'])}, "
              f"p={ptxt(corr_age['p_spearman'])}, n={corr_age['n']}")
    # ANOVA across smoking (optional Day 10)
    groups = [np.array(col([r for r in clean_rows if r['smoking_status'] == s], 'sbp_baseline'))
              for s in ['0', '1', '2']]
    fa = stats.f_oneway(*groups)
    md.append(f"- ANOVA `sbp_baseline` theo `smoking_status` (Day 10, tùy chọn): "
              f"F={fmt(float(fa.statistic))}, p={ptxt(float(fa.pvalue))}, "
              f"means={[round(float(g.mean()),1) for g in groups]}")

    # ---------- DS-EX1 ----------
    hb = gen_hba1c()
    write_csv(os.path.join(RAW, 'exercise_hba1c_pairs.csv'), HBA1C_HEADER,
              [[r[h] for h in HBA1C_HEADER] for r in hb])
    tp = ttest_paired(hb, 'hba1c_t0', 'hba1c_t3')
    md.append(f"\n## DS-EX1 `exercise_hba1c_pairs.csv` (n={len(hb)})\n")
    md.append(f"- t0: mean={fmt(tp['m0'])}, SD={fmt(tp['sd0'])}; t3: mean={fmt(tp['m1'])}, "
              f"SD={fmt(tp['sd1'])}")
    md.append(f"- Paired: diff={fmt(tp['dmean'])}, SD_diff={fmt(tp['dsd'])}, 95% CI "
              f"[{fmt(tp['ci_lo'])}; {fmt(tp['ci_hi'])}], t={fmt(tp['t'])}, df={tp['df']}, "
              f"p={ptxt(tp['p'])}")

    # ---------- DS-CAP ----------
    cap = gen_capstone()
    cap_raw = plant_errors_capstone(cap)
    cap_clean = clean_capstone(cap_raw)
    write_csv(os.path.join(RAW, 'capstone_screening_raw.csv'), CAP_HEADER,
              [[r[h] for h in CAP_HEADER] for r in cap_raw])
    write_csv(os.path.join(CLEAN, 'capstone_screening_clean.csv'), CAP_HEADER,
              [[r[h] for h in CAP_HEADER] for r in cap_clean])
    md.append(f"\n## DS-CAP `capstone_screening_clean.csv` (raw {len(cap_raw)} dòng → sạch {len(cap_clean)})\n")
    for v in ['age_years', 'bmi', 'sleep_hours', 'caffeine_cups', 'sbp', 'fasting_glucose']:
        d = desc(cap_clean, v)
        md.append(f"- `{v}`: n={d['n']}, mean={fmt(d['mean'],1)}, SD={fmt(d['sd'],1)}, "
                  f"min={fmt(d['mn'],1)}, max={fmt(d['mx'],1)}")
    for v in ['sex_code', 'shift_type', 'smoking_status']:
        c, nm = freq(cap_clean, v)
        md.append(f"- `{v}`: {dict(sorted(c.items()))}" + (f" · missing={nm}" if nm else ""))
    t_cap = ttest_ind(cap_clean, 'sbp', 'shift_type', '0', '1')
    md.append(f"\n- t-test `sbp` theo `shift_type` (ngày vs đêm): n={t_cap['n1']}/{t_cap['n2']}, "
              f"mean={fmt(t_cap['m1'],1)} vs {fmt(t_cap['m2'],1)}, t={fmt(t_cap['t'])}, "
              f"p={ptxt(t_cap['p'])}, diff={fmt(t_cap['diff'],1)}, "
              f"95% CI [{fmt(t_cap['ci_lo'],1)}; {fmt(t_cap['ci_hi'],1)}]")
    # chi-square smoker(current=2 vs else) x htn (sbp>=140)
    cap2 = [dict(r, htn='1' if (r['sbp'] != '' and f(r['sbp']) >= 140) else ('0' if r['sbp'] != '' else ''),
                 smk='1' if r['smoking_status'] == '2' else ('0' if r['smoking_status'] != '' else ''))
            for r in cap_clean]
    ch2 = chi2(cap2, 'smk', 'htn', ['0', '1'], ['0', '1'])
    md.append(f"- Crosstabs `smoking hiện tại` × `sbp>=140`: bảng={ch2['table']}, "
              f"χ²={fmt(ch2['chi'])}, p={ptxt(ch2['p'])}, min expected={fmt(ch2['min_expected'],1)}")
    corr3 = pearson(cap_clean, 'bmi', 'sbp')
    md.append(f"- `bmi` × `sbp`: Pearson r={fmt(corr3['r'])}, p={ptxt(corr3['p'])}, "
              f"95% CI [{fmt(corr3['ci_lo'])}; {fmt(corr3['ci_hi'])}]")

    # ---------- DS-FINAL ----------
    asm = gen_assessment()
    asm_raw = plant_errors_assessment(asm)
    asm_clean = clean_assessment(asm_raw)
    write_csv(os.path.join(RAW, 'assessment_gp_raw.csv'), ASM_HEADER,
              [[r[h] for h in ASM_HEADER] for r in asm_raw])
    write_csv(os.path.join(CLEAN, 'assessment_gp_clean.csv'), ASM_HEADER,
              [[r[h] for h in ASM_HEADER] for r in asm_clean])
    md.append(f"\n## DS-FINAL `assessment_gp_clean.csv` (raw {len(asm_raw)} → sạch {len(asm_clean)})\n")
    for v in ['age_years', 'bmi', 'waist_cm', 'sbp', 'fasting_glucose']:
        d = desc(asm_clean, v)
        md.append(f"- `{v}`: n={d['n']}, mean={fmt(d['mean'],1)}, SD={fmt(d['sd'],1)}, "
                  f"min={fmt(d['mn'],1)}, max={fmt(d['mx'],1)}")
    for v in ['sex_code', 'smoker_current', 'activity_level']:
        c, nm = freq(asm_clean, v)
        md.append(f"- `{v}`: {dict(sorted(c.items()))}" + (f" · missing={nm}" if nm else ""))
    corr4 = pearson(asm_clean, 'waist_cm', 'sbp')
    md.append(f"\n- `waist_cm` × `sbp`: Pearson r={fmt(corr4['r'])}, p={ptxt(corr4['p'])}, "
              f"95% CI [{fmt(corr4['ci_lo'])}; {fmt(corr4['ci_hi'])}]")
    corr5 = pearson(asm_clean, 'bmi', 'waist_cm')
    md.append(f"- `bmi` × `waist_cm`: Pearson r={fmt(corr5['r'])}, p={ptxt(corr5['p'])}")
    t_asm = ttest_ind(asm_clean, 'sbp', 'smoker_current', '0', '1')
    md.append(f"- t-test `sbp` theo `smoker_current`: n={t_asm['n1']}/{t_asm['n2']}, "
              f"mean={fmt(t_asm['m1'],1)} vs {fmt(t_asm['m2'],1)}, t={fmt(t_asm['t'])}, "
              f"p={ptxt(t_asm['p'])}, diff={fmt(t_asm['diff'],1)}, "
              f"95% CI [{fmt(t_asm['ci_lo'],1)}; {fmt(t_asm['ci_hi'],1)}]")

    with open(OUT_MD, 'w', encoding='utf-8') as fo:
        fo.write('\n'.join(md) + '\n')

    # ---------- VALIDATION ----------
    errs = []
    def chk(cond, msg):
        if not cond:
            errs.append(msg)
    chk(len(raw_rows) == 161 and len(clean_rows) == 160, 'clinic_bp row counts')
    chk(len(set(r['patient_id'] for r in clean_rows)) == 160, 'clinic_bp dup')
    for r in clean_rows:
        if r['age_years'] != '': chk(20 <= f(r['age_years']) <= 90, f"age {r['patient_id']}")
        if r['bmi'] != '': chk(15 <= f(r['bmi']) <= 50, f"bmi {r['patient_id']}")
        if r['sbp_baseline'] != '': chk(80 <= f(r['sbp_baseline']) <= 210, f"sbp0 {r['patient_id']}")
        if r['sbp_followup'] != '': chk(80 <= f(r['sbp_followup']) <= 210, f"sbp1 {r['patient_id']}")
        chk(r['sex_code'] in ('1', '2', ''), f"sex {r['patient_id']}")
        chk(r['diabetes_flag'] in ('0', '1', ''), f"dm {r['patient_id']}")
        chk(r['smoking_status'] in ('0', '1', '2'), f"smk {r['patient_id']}")
        chk(r['treatment_group'] in ('A', 'B'), f"grp {r['patient_id']}")
        if r['adherence_score'] != '': chk(0 <= f(r['adherence_score']) <= 100, f"adh {r['patient_id']}")
        if r['sbp_followup'] == '': chk(r['bp_controlled'] == '', f"ctrl-miss {r['patient_id']}")
        if r['sbp_followup'] != '':
            chk(int(r['bp_controlled']) == int(f(r['sbp_followup']) < 140), f"ctrl {r['patient_id']}")
    chk(len(cap_raw) == 91 and len(cap_clean) == 90, 'capstone rows')
    chk(len(asm_raw) == 60 and len(asm_clean) == 60, 'assessment rows')
    for r in cap_clean:
        if r['sbp'] != '': chk(80 <= f(r['sbp']) <= 200, f"cap sbp {r['worker_id']}")
        if r['sleep_hours'] != '': chk(3 <= f(r['sleep_hours']) <= 12, f"cap sleep {r['worker_id']}")
        chk(r['shift_type'] in ('0', '1', ''), f"cap shift {r['worker_id']}")
    for r in asm_clean:
        if r['sbp'] != '': chk(80 <= f(r['sbp']) <= 200, f"asm sbp {r['patient_id']}")
        if r['waist_cm'] != '': chk(55 <= f(r['waist_cm']) <= 140, f"asm waist {r['patient_id']}")
        chk(r['activity_level'] in ('1', '2', '3', ''), f"asm act {r['patient_id']}")

    # Kiem tra tinh tai tao: chay lai generator -> khop 100%
    chk(gen_clinic_bp() == clinic, 'reproducibility clinic')
    chk(gen_hba1c() == hb, 'reproducibility hba1c')
    chk(gen_capstone() == cap, 'reproducibility capstone')
    chk(gen_assessment() == asm, 'reproducibility assessment')

    print("=== VALIDATION ===")
    if errs:
        for e in errs[:30]:
            print("FAIL:", e)
        sys.exit(1)
    print("ALL CHECKS PASS —", len(clinic), "clinic,", len(hb), "hba1c,",
          len(cap), "capstone,", len(asm), "assessment")
    print("Written:", RAW, "->", CLEAN, "+", OUT_MD)


if __name__ == '__main__':
    main()
