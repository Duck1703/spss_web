# gen_draft_days.py — tạo canonical DRAFT cho Ngày 04–14 (Task 13)
# Nội dung sinh từ curriculum/exercise-inventory.json — không bịa bài tập.
import json, os, io, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
inv = json.load(open(os.path.join(ROOT, 'curriculum/exercise-inventory.json'), encoding='utf-8'))
QS = {q['id']: q for q in inv['exercises']}

DAYS = {
 'd04': ('day-04-tom-tat-theo-nhom', 'Ngày 04 — Tóm tắt theo nhóm (Select Cases · Split File)',
        'p1_B01_HA (1).sav', ['P1-Q08', 'P1-Q09', 'P1-Q06', 'P1-Q41'],
        ['P1-Q23', 'P1-Q25', 'P1-Q27', 'P1-Q30'],
        'Lọc mẫu bằng Select Cases, so sánh nhóm bằng Split File, Means theo nhóm.',
        'Thống kê theo nhóm là bước giữa giữa mô tả đơn biến (Ngày 03) và bảng chéo (Ngày 05).'),
 'd05': ('day-05-bang-cheo-chi-square', 'Ngày 05 — Bảng chéo và Chi-square',
        'p1_B01_HA (1).sav · P1_B02 CrossTab (2).sav · File1.sav',
        ['P1-Q05', 'P1-Q17', 'P1-Q18', 'P1-Q21', 'P2-Q01'],
        ['P1-Q19', 'P1-Q32', 'P1-Q34', 'P1-Q35', 'P1-Q36', 'P1-Q37'],
        'Crosstabs: % hàng vs % cột, Chi-square, expected count; Weight Cases cho bảng tổng hợp; Risk (RR/OR) ở bảng 2×2.',
        'Câu hỏi "tỷ lệ X theo Y" của cả hai đề đều quy về Crosstabs — lệnh dùng nhiều nhất phần còn lại.'),
 'd06': ('day-06-bien-doi-du-lieu', 'Ngày 06 — Biến đổi dữ liệu (Compute · Recode · Count)',
        'p1_B01_HA (1).sav', ['P1-Q10', 'P1-Q11', 'P1-Q12'], [],
        'Compute Variable (BMI = Cannang/Chieucao²), Recode into Different Variables (nhóm tuổi), Count Values Within Cases (đếm bệnh).',
        'Ba câu này bắt buộc tạo biến mới — kỹ năng cần cho mọi câu hỏi phía sau đòi nhóm độ tuổi/BMI.'),
 'd07': ('day-07-kiem-tra-du-lieu-sai', 'Ngày 07 — Soi và xử lý dữ liệu nhập sai',
        'p1_B01_HA (1).sav', ['P1-Q14', 'P1-Q13'], ['P1-Q07'],
        'Phát hiện mã không hợp lệ (NNghiep có giá trị 0, 8, missing), liệt kê ID phiếu sai, Select Cases loại trừ; lọc điều kiện kép AND.',
        'Bài "audit" thật trên dataset thật — chuẩn bị cho Capstone kiểm tra dữ liệu Ngày 12.'),
 'd08': ('day-08-kiem-dinh-ty-le', 'Ngày 08 — Kiểm định về tỷ lệ',
        'p1_B01_HA (1).sav · File1.sav', ['P1-Q22', 'P2-Q02', 'P2-Q03', 'P1-Q40'], ['P1-Q20', 'P1-Q39'],
        'Chi-square Goodness-of-fit (3 tỷ lệ kỳ vọng), Binomial test, McNemar cho trước–sau.',
        'Đề Phần 1 & 2 đều có cụm câu "tỷ lệ có phù hợp không" — một ngày riêng cho kiểm định tỷ lệ.'),
 'd09': ('day-09-so-sanh-trung-binh', 'Ngày 09 — So sánh trung bình (1 mẫu · 2 nhóm độc lập)',
        'File1.sav', ['P2-Q04', 'P2-Q05', 'P2-Q07'], [],
        'One-Sample T Test, Independent-Samples T Test (đọc Levene + hai dòng t), chọn biến nhóm đúng.',
        'Sang dataset Phần 2 (File1.sav): bắt đầu các câu so sánh trung bình — kỹ năng lõi còn lại.'),
 'd10': ('day-10-ttest-ghep-cap-anova', 'Ngày 10 — T-test ghép cặp và ANOVA',
        'File1.sav · File2_Phan2.sav', ['P2-Q09', 'P2-Q13', 'P2-Q06'], ['P2-Q08'],
        'Paired-Samples T Test (trước–sau, thuốc–giả dược), One-Way ANOVA 3 nhóm + post-hoc.',
        'P2-Q13 đổi dataset sang File2 (12 BN, giờ ngủ) — cơ hội luyện đọc đề chọn đúng file.'),
 'd11': ('day-11-tuong-quan-hoi-quy', 'Ngày 11 — Tương quan và hồi quy tuyến tính',
        'File1.sav', ['P2-Q10', 'P2-Q11'], ['P2-Q12'],
        'Bivariate Correlations (Pearson, đọc r và p), Linear Regression đơn biến (R², hệ số B); Q12 đa biến chỉ giới thiệu.',
        'Cụm câu cuối File1.sav — liên hệ giữa các biến số, kết thúc phần kiểm định.'),
 'd12': ('day-12-capstone-a-chuan-bi', 'Ngày 12 — Capstone A: khám phá và chuẩn bị File5',
        'File5_Phan2.sav', ['P2-TH3'], [],
        'Áp toàn bộ kỹ năng: đọc codebook file mới, kiểm tra dữ liệu, mô tả mẫu, lập kế hoạch phân tích.',
        'Hoạt động không đánh số của đề Phần 2: "xử lý, phân tích số liệu và tập viết báo cáo" trên File5 (n=296).'),
 'd13': ('day-13-capstone-b-phan-tich', 'Ngày 13 — Capstone B: phân tích và báo cáo File5',
        'File5_Phan2.sav', ['P2-TH3'], [],
        'Chạy ≥2 phân tích phù hợp (ví dụ: PSA theo kết quả sinh thiết — t-test; tỷ lệ sinh thiết dương tính), viết báo cáo ngắn.',
        'Nửa sau của hoạt động File5 — sản phẩm là báo cáo có bảng + nhận xét.'),
 'd14': ('day-14-danh-gia-cuoi-khoa', 'Ngày 14 — Đánh giá cuối khóa',
        'p1_B01_HA (1).sav · File1.sav', ['P1-Q24', 'P1-Q26', 'P1-Q31', 'P1-Q33', 'P1-Q43', 'P2-Q08'],
        ['P1-Q28'],
        'Tự làm trọn chuỗi câu hỏi đã học — không hướng dẫn từng bước; tự chấm theo đáp án.',
        'Đánh giá bao phủ: mô tả theo nhóm (Q24/Q26/Q43), bảng chéo (Q31/Q33), so sánh trung bình 3 nhóm (P2-Q08).'),
}

LESSON = """# {title}

> **Lộ trình:** Exercise-first 14 ngày · **Dataset:** `{dataset}`
> **Trạng thái:** DRAFT — đã ánh xạ đầy đủ bài tập nguồn (bảng dưới). Hướng dẫn từng bước,
> mô phỏng SPSSActionGuide và đáp án sẽ hoàn thiện theo mẫu Ngày 01–03 (READY).
> Số liệu kỳ vọng đã tái tính: `curriculum/exercise-verified-stats.md` (nhãn NOT_RUN).

---

## A. Bài tập nguồn của ngày này

| Mã | Gốc | Nội dung (tóm tắt — đọc đề đầy đủ trong PDF nguồn) | Vai trò |
|---|---|---|---|
{rows}

{extra}

## B. Kỹ năng mục tiêu

{skills}

## C. Vì sao ngày này nằm ở đây

{why}

## D. Kế hoạch hoàn thiện (theo mẫu Ngày 01–03)

1. Mở bằng bài tập gốc đầu tiên của ngày (`{{{{exercise:{first}}}}}` → xem khối bên dưới).
2. Thêm mục D. "Kiến thức cần biết" — chỉ đủ để giải các câu trên.
3. Hướng dẫn menu chi tiết + `{{{{guide:...}}}}` mô phỏng đúng dataset thật.
4. Workbook BT1–BTn với gợi ý nấc + sản phẩm bắt buộc; đáp án bọc `<details>`.

### Bài tập gốc dẫn đầu ngày

{{{{exercise:{first}}}}}
"""

WORKBOOK = """# {title} — Workbook

> **Trạng thái:** DRAFT — khi hoàn thiện sẽ có BT1–BT4 theo mẫu Ngày 01–03: mỗi BT gắn một
> bài tập nguồn, gợi ý mở theo nấc, sản phẩm bắt buộc. Tạm thời dùng khối thông tin bài
> tập nguồn dưới đây để tự thử trên SPSS trước.

---

{blocks}
"""

ANSWER = """# {title} — Đáp án & giải thích

> **Trạng thái:** DRAFT — chưa hoàn thiện. Khi READY sẽ trình bày theo mẫu Ngày 01–03
> (đáp án → lý do → lỗi hay gặp → cách tự sửa, bọc `<details>` từng mục).
>
> Tham chiếu trước: số liệu đã tái tính từ file `.sav` gốc trong
> `curriculum/exercise-verified-stats.md` (Python cross-check, nhãn `NOT_RUN`).
"""

os.chdir(ROOT)
for slug, (dirn, title, dataset, core, opt, skills, why) in DAYS.items():
    d = os.path.join('track-14day', dirn)
    os.makedirs(d, exist_ok=True)
    rows = []
    for qid in core:
        q = QS[qid]
        rows.append(f"| **{qid}** | {q['ref']} (tr.{q['page']}) | {q['summary']} | core |")
    for qid in opt:
        q = QS[qid]
        rows.append(f"| {qid} | {q['ref']} (tr.{q['page']}) | {q['summary']} | {q['role']} |")
    skl = '\n'.join(f"- {s}" for s in skills.split(', ')) if isinstance(skills, str) else skills
    extra = ''
    if slug == 'd13':
        extra = '> Tiếp nối Ngày 12 — cùng hoạt động P2-TH3 trên `File5_Phan2.sav`.\n'
    open(f'{d}/lesson.md', 'w', encoding='utf-8').write(LESSON.format(
        title=title, dataset=dataset, rows='\n'.join(rows),
        extra=extra, skills='\n'.join(f"- {s.strip()}" for s in skills.split(', ')),
        why=why, first=core[0]))
    blocks = []
    for i, qid in enumerate(core, 1):
        q = QS[qid]
        blocks.append(f"## BT{i} — Bài tập nguồn: {qid}\n\n{{{{exercise:{qid}}}}}\n\n"
                      f"1. Mở `{q['dataset']}` trong SPSS; xác định biến cần dùng và kỹ năng cần thiết.\n"
                      f"2. Tự thử giải; ghi lại thao tác menu đã dùng và kết quả thu được.\n\n"
                      f"> ✅ **Sản phẩm:** kết quả {qid} ghi vào bảng trả lời của đề · thao tác menu ghi chú lại")
    open(f'{d}/workbook.md', 'w', encoding='utf-8').write(WORKBOOK.format(title=title, blocks='\n\n---\n\n'.join(blocks)))
    open(f'{d}/answer-key.md', 'w', encoding='utf-8').write(ANSWER.format(title=title))
    print(' +', d)
print('done')
