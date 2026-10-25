/**
 * sync-content.mjs — Content adapter: canonical Markdown (D:\spss) → website docs.
 *
 * QUY TẮC (Task 08 §5):
 * - Chỉ ĐỌC file canonical, chỉ GHI vào src/content/docs/ (output generated).
 * - Không sửa nội dung thống kê, số liệu, đáp án — chỉ transform khung trình bày
 *   (frontmatter, link rewrite, inject component tương tác, bọc đáp án trong <details>).
 * - Không copy file nội bộ (project-control/, reviews/, qa/, report/, source-map).
 * - File generated đều có banner "GENERATED — DO NOT EDIT".
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const OUT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src', 'content', 'docs');

const BANNER = '{/* GENERATED FILE — do not edit. Source: canonical repo files. Run `npm run sync`. */}\n\n';
const BANNER_MD = '<!-- GENERATED FILE — do not edit. Source: canonical repo files. Run `npm run sync`. -->\n\n';

let changed = 0;
function write(rel, content) {
  if (rel.endsWith('.md')) content = content.replace(BANNER, BANNER_MD); // MDX-comment → HTML-comment
  const p = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content, 'utf8');
  changed++;
  console.log('  +', rel);
}
function read(rel) { return fs.readFileSync(path.join(ROOT, rel), 'utf8').replace(/\r\n?/g, '\n'); }

/** Rewrite relative .md links from canonical files → website routes; strip links to internal files. */
function fixLinks(md) {
  return md
    .replace(/\]\((\.\.\/)*START-HERE-MAC\.md\)/g, '](/tai-lieu/bat-dau-mac/)')
    .replace(/\[`?workbook\.md`?\]\((\.\/)?workbook\.md\)/g, '[`workbook`](/m01/bai-tap/)')
    .replace(/`workbook\.md`/g, '[`workbook`](/m01/bai-tap/)')
    .replace(/`answer-key\.md`/g, '[`answer-key`](/m01/dap-an/)')
    .replace(/`source-map\.md`/g, '`source-map.md` (tài liệu nội bộ — không public)')
    .replace(/`qa\/M01-author-selfcheck\.md`/g, '`qa/M01-author-selfcheck.md` (nội bộ)')
    .replace(/`production-plan\.md`/g, '`production-plan.md` (nội bộ)')
    .replace(/`?(project-control|reviews|report|assessment)\/([\w./-]+)`?/g, '_tài liệu nội bộ_')
    .replace(/`decisions\.md`/g, '_tài liệu nội bộ_');
}

/* ---------- 1. M01 lesson ---------- */
/** Chuyển <details><summary>X</summary>…</details> của canonical → <ReadMore> component (MDX an toàn). */
function mdxDetails(md) {
  return md
    .replace(/<details><summary>([\s\S]*?)<\/summary>/g, (_, s) => `<ReadMore summary={${JSON.stringify(s.trim())}}>`)
    .replace(/<\/details>/g, '</ReadMore>');
}

/** Escape `<` đứng trước số (vd `<26`, `<60`) — MDX tưởng là JSX tag. */
function mdxEscapeLt(md) { return md.replace(/<(?=\d)/g, '&lt;'); }

/** Escape `{}` trong nội dung canonical — MDX parse {…} như expression → escape thành entity. */
function mdxEscapeBraces(md) { return md.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;'); }

/* ---------- 14-day exercise-first track (Task 13, D-024) ---------- */
/* Dataset nguồn (.sav trong exercises/) chỉ tồn tại local — hiển thị đường dẫn, không link tải. */
const P1SAV = { savLocal: 'exercises/bai_1/p1_B01_HA (1).sav', note: 'dataset chính Phần 1 — 620×40' };
const DAYS = [
  { dir: 'day-01-mo-file-bai-tap', slug: 'd01', num: '01', title: 'Ngày 01 — Mở file bài tập & đọc dữ liệu', ready: true,
    files: [P1SAV, { savLocal: 'exercises/bai_1/So_Lieu_NC.sav', note: 'cho BT4 — nhận file lạ' }] },
  { dir: 'day-02-tan-so-phan-tram', slug: 'd02', num: '02', title: 'Ngày 02 — Tần số và phần trăm', ready: true,
    files: [P1SAV] },
  { dir: 'day-03-mo-ta-bien-so', slug: 'd03', num: '03', title: 'Ngày 03 — Thống kê mô tả biến số', ready: true,
    files: [P1SAV] },
  { dir: 'day-04-tom-tat-theo-nhom', slug: 'd04', num: '04', title: 'Ngày 04 — Tóm tắt theo nhóm', ready: true,
    files: [P1SAV] },
  { dir: 'day-05-bang-cheo-chi-square', slug: 'd05', num: '05', title: 'Ngày 05 — Bảng chéo và Chi-square', ready: true,
    files: [P1SAV] },
  { dir: 'day-06-bien-doi-du-lieu', slug: 'd06', num: '06', title: 'Ngày 06 — Biến đổi dữ liệu', ready: true,
    files: [P1SAV] },
  { dir: 'day-07-kiem-tra-du-lieu-sai', slug: 'd07', num: '07', title: 'Ngày 07 — Soi & xử lý dữ liệu sai', ready: true,
    files: [P1SAV] },
  { dir: 'day-08-kiem-dinh-ty-le', slug: 'd08', num: '08', title: 'Ngày 08 — Kiểm định về tỷ lệ', ready: true,
    files: [P1SAV, { savLocal: 'exercises/bai_1/P1_B02 CrossTab (2).sav', note: 'cho P1-Q21' }, { savLocal: 'exercises/bai_2/File1.sav', note: 'cho P2-Q01–Q03' }] },
  { dir: 'day-09-so-sanh-trung-binh', slug: 'd09', num: '09', title: 'Ngày 09 — So sánh trung bình', ready: true,
    files: [{ savLocal: 'exercises/bai_2/File1.sav', note: 'dataset chính Phần 2 — 50×18' }] },
  { dir: 'day-10-ttest-ghep-cap-anova', slug: 'd10', num: '10', title: 'Ngày 10 — T-test ghép cặp & ANOVA', ready: true,
    files: [{ savLocal: 'exercises/bai_2/File1.sav' }, { savLocal: 'exercises/bai_2/File2_Phan2.sav', note: 'cho P2-Q13' }] },
  { dir: 'day-11-tuong-quan-hoi-quy', slug: 'd11', num: '11', title: 'Ngày 11 — Tương quan & hồi quy', ready: true,
    files: [{ savLocal: 'exercises/bai_2/File1.sav' }] },
  { dir: 'day-12-capstone-a-chuan-bi', slug: 'd12', num: '12', title: 'Ngày 12 — Capstone A: chuẩn bị File5', ready: true,
    files: [{ savLocal: 'exercises/bai_2/File5_Phan2.sav', note: '296×7 — sinh thiết tuyến tiền liệt' }] },
  { dir: 'day-13-capstone-b-phan-tich', slug: 'd13', num: '13', title: 'Ngày 13 — Capstone B: phân tích & báo cáo', ready: true,
    files: [{ savLocal: 'exercises/bai_2/File5_Phan2.sav' }] },
  { dir: 'day-14-danh-gia-cuoi-khoa', slug: 'd14', num: '14', title: 'Ngày 14 — Đánh giá cuối khóa', ready: true,
    files: [P1SAV, { savLocal: 'exercises/bai_2/File1.sav' }] },
];

/** Inventory bài tập nguồn → khối {{exercise:P1-Q02}} trong canonical md. */
const INV = JSON.parse(read('curriculum/exercise-inventory.json'));
const EXQ = Object.fromEntries(INV.exercises.map(q => [q.id, q]));
const PDF_NAME = { P1: 'Bai thuc hanh SDH P1.pdf', P2: 'BSNT_Bài TH_Phần 2_Cô Hiền.pdf' };
function expandExercises(md) {
  return md.replace(/\{\{exercise:([\w-]+)\}\}/g, (_, id) => {
    const q = EXQ[id];
    if (!q) { console.log('  ! exercise không có trong inventory:', id); return `> ⚠️ Bài tập \`${id}\` chưa có trong inventory.`; }
    const vars = (q.vars || []).map(v => `<code>${v}</code>`).join(' ');
    return [
      '',
      `<div class="src-ex">`,
      `<div class="src-ex__head"><span class="src-ex__id">${id}</span>`,
      `<span class="src-ex__meta">${PDF_NAME[q.src] || q.src} · ${q.ref} · trang ${q.page} · ${q.difficulty} · ~${q.time} phút${q.tier ? ` · <b>${q.tier === 'essential' ? 'BẮT BUỘC' : 'LUYỆN THÊM'}</b>` : ''}</span></div>`,
      `<div class="src-ex__sum">${q.summary}</div>`,
      `<div class="src-ex__meta2">Dataset: <code>${q.dataset}</code>${vars ? ` · Biến: ${vars}` : ''} · Sản phẩm: ${q.artifact}</div>`,
      `<a class="src-ex__link" href="${exHref(id)}">Mở trang bài tập ${id} →</a>`,
      `</div>`,
      ''
    ].join('\n');
  });
}

/** Dòng 📦 file cần hôm nay — inject ngay đầu mỗi lesson; CSV → link tải, savLocal → đường dẫn local-only. */
function fileBox(d) {
  if (!d.files || !d.files.length) return '';
  const parts = d.files.map(f => f.csv
    ? `[\`${f.csv}\`](/datasets/${f.csv})${f.note ? ` — ${f.note}` : ''}`
    : f.savLocal ? `\`${f.savLocal}\`${f.note ? ` — ${f.note}` : ''}`
    : `\`${f.sav}\` — file bạn đã tạo ở ${f.from}`);
  return `<div class="lesson-files">\n`
    + `<span class="lesson-files__t">📦 File cần hôm nay</span>\n`
    + `<div class="lesson-files__list">${parts.join('<br />')}</div>\n`
    + `<p class="lesson-files__note">File \`.sav\` nguồn nằm trong thư mục \`exercises/\` trên máy bạn — mở trực tiếp trong SPSS, không tải từ web.</p>\n`
    + `</div>\n\n`;
}

/** Rewrite link cho file track-14day: bạn-cùng-ngày → route /dNN/*, datasets → /du-lieu/, internal → note. */
function fixLinksTrack(md, slug) {
  return md
    .replace(/\[`?workbook\.md`?\]\((\.\/)?workbook\.md\)/g, `[workbook](/${slug}/bai-tap/)`)
    .replace(/`workbook\.md`/g, `[workbook](/${slug}/bai-tap/)`)
    .replace(/`answer-key\.md`/g, `[đáp án](/${slug}/dap-an/)`)
    .replace(/\]\((\.\.\/)*START-HERE-MAC\.md\)/g, '](/tai-lieu/bat-dau-mac/)')
    .replace(/`START-HERE-MAC\.md`/g, '[hướng dẫn chuẩn bị trên Mac](/tai-lieu/bat-dau-mac/)')
    .replace(/`datasets\/expected-results\.md`/g, 'kết quả mong đợi đầy đủ (tài liệu repo — dành cho người hướng dẫn)')
    .replace(/`datasets\/codebooks\/planted-errors-INTERNAL\.md`/g, '_tài liệu nội bộ_')
    .replace(/`datasets\/([\w./-]+)`/g, '[`datasets/$1`](/du-lieu/)')
    .replace(/`(\w+_raw\.csv|\w+_clean\.csv|exercise_\w+\.csv)`/g, '[`$1`](/du-lieu/)')
    .replace(/`lessons\/M01[\w./-]*`/g, '[M01 — tham khảo](/m01/bai-hoc/)')
    .replace(/`curriculum\/PRACTICE-FIRST-14-DAY-TRACK\.md`/g, '[lộ trình 14 ngày](/lo-trinh-14-ngay/)')
    .replace(/`curriculum\/roadmap\.md`/g, '[lộ trình 16 tuần — tham khảo](/lo-trinh/)')
    .replace(/`?(project-control|reviews|report|assessment|qa)\/([\w./-]+)`?/g, '_tài liệu nội bộ_')
    .replace(/`decisions\.md`/g, '_tài liệu nội bộ_');
}

/** Bỏ dòng trạng thái nội bộ ở header canonical (DRAFT / MAC_SPSS_VERIFICATION_PENDING…) —
 *  thay bằng banner learner-facing do frontmatter + notice tự quản. */
/** Bỏ H1 đầu file nguồn — Starlight đã render frontmatter title; giữ lại → 2 H1. */
const stripH1 = (md) => md.replace(/^#\s+[^\n]+\n+/, '');

function stripInternalStatus(md) {
  // Xóa dòng Trạng thái + các dòng > tiếp nối KHÔNG mở đầu bằng **Key:** mới
  // (DRAFT days có status nhiều dòng; dòng "**Bài tập nguồn hôm nay:**" phải giữ lại).
  return md.replace(/^> \*\*Trạng thái:\*\*[^\n]*\n(?:> (?!\*\*)[^\n]*\n)*/gm, '');
}

/** Inject <ExerciseCard> sau mỗi mục `N.` trong section `## BT…` / `## Phần …` của workbook 14 ngày.
 *  Nếu mục tiếp theo là marker `> ✅ **Sản phẩm:** a · b · c` → emit checklist card (artifact-based)
 *  thay cho dòng marker; textarea "Nháp" chỉ dùng cho câu cần gõ văn bản. */
function injectTrackCards(md, slug) {
  const lines = md.split('\n');
  const out = [];
  let section = null;
  for (const l of lines) {
    const mSec = l.match(/^## (BT\d|Phần [A-Z])/);
    if (mSec) { section = mSec[1].toLowerCase().replace(/\s+/g, '-'); out.push(l); continue; }
    if (/^---|^# /.test(l)) { section = null; out.push(l); continue; }
    // Artifact marker → checklist card (không emit dòng marker lên web)
    const mArt = section && l.match(/^>\s*✅\s*\*\*Sản phẩm:\*\*\s*(.+)$/);
    if (mArt) {
      const items = mArt[1].split('·').map(s => s.trim().replace(/`/g, '')).filter(Boolean);
      out.push('', `<ExerciseCard id="ef-${slug}-${section}-sanpham" label="Sản phẩm ${section.toUpperCase()}" checklist={${JSON.stringify(items)}} answerHref="/${slug}/dap-an/" />`);
      continue;
    }
    out.push(l);
    const mNum = l.match(/^(\d+)\.\s/);
    if (section && mNum) {
      out.push('', `<ExerciseCard id="ef-${slug}-${section}-${mNum[1]}" label="Nháp ${section.toUpperCase()}.${mNum[1]}" answerHref="/${slug}/dap-an/" />`);
    }
  }
  return out.join('\n');
}

function syncTrack() {
  const TRACK_NOTICE = '> ⏳ **Bài học thực hành SPSS — đã kiểm chứng số liệu bằng tính toán độc lập (Python), '
    + 'chưa chạy thử trên SPSS/macOS.** Các bước menu ghi rõ `MAC_SPSS_VERIFICATION_PENDING`.\n\n';
  const DRAFT_NOTICE = '> 🚧 **DRAFT — ngày này chưa hoàn thiện.** Bài tập nguồn đã được ánh xạ đầy đủ '
    + '(xem bảng trong bài), số liệu kỳ vọng đã tái tính bằng Python; hướng dẫn từng bước, '
    + 'mô phỏng và đáp án sẽ hoàn thiện theo mẫu Ngày 01–03.\n\n';
  DAYS.forEach((d, i) => {
    const base = `track-14day/${d.dir}`;
    const prevDay = DAYS[i - 1];
    const nextDay = DAYS[i + 1];
    const notice = d.ready ? TRACK_NOTICE : DRAFT_NOTICE;

    // --- lesson ---
    let md = stripInternalStatus(read(`${base}/lesson.md`));
    // Bỏ H1 trùng lặp — tiêu đề trang đã render từ frontmatter.
    md = stripH1(md);
    md = fixLinksTrack(md, d.slug);
    md = expandExercises(md);
    // {{guide:id}} → <SPSSActionGuide> (phải chạy TRƯỚC mdxEscapeBraces)
    const hasGuides = /\{\{guide:[\w-]+\}\}/.test(md);
    if (hasGuides) {
      md = md.replace(/\{\{guide:([\w-]+)\}\}/g, '\n<SPSSActionGuide id="$1" />\n');
    }
    md = mdxEscapeBraces(md);
    md = mdxEscapeLt(md);
    md += exDayBlock(d.slug);
    md += `\n\n---\n\n<CompleteModuleButton id="ef-${d.slug}" label="Đánh dấu đã học xong Ngày ${d.num}" />\n`;
    const lessonPrev = prevDay
      ? `prev:\n  link: /${prevDay.slug}/dap-an/\n  label: Ngày ${prevDay.num} — đáp án`
      : `prev:\n  link: /lo-trinh-14-ngay/\n  label: Lộ trình 14 ngày`;
    const guideImports = hasGuides
      ? `import SPSSActionGuide from '../../../components/spss/SPSSActionGuide.astro';\nimport OSSelector from '../../../components/spss/OSSelector.astro';\n`
      : '';
    const osBlock = hasGuides
      ? '\n<OSSelector />\n\n'
      : '';
    write(`${d.slug}/bai-hoc.mdx`, `---\ntitle: "${d.title}"\ndescription: "Bài học thực hành ${d.title} — lộ trình practice-first 14 ngày."\n${lessonPrev}\nnext:\n  link: /${d.slug}/bai-tap/\n  label: Làm bài tập Ngày ${d.num}\n---\n\nimport CompleteModuleButton from '../../../components/CompleteModuleButton.astro';\n${guideImports}\n${BANNER}${notice}${fileBox(d)}${osBlock}${md}`);

    // --- workbook ---
    let wb = stripH1(fixLinksTrack(read(`${base}/workbook.md`), d.slug));
    wb = expandExercises(wb);
    wb = mdxEscapeBraces(wb);
    wb = mdxEscapeLt(injectTrackCards(wb, d.slug));
    if (d.slug === 'd14') {
      wb += `\n\n<ExerciseCard id="ef-d14-tu-cham" label="Tổng điểm tự chấm & ghi chú" answerHref="/d14/dap-an/" />\n`;
    }
    write(`${d.slug}/bai-tap.mdx`, `---\ntitle: "${d.title} — Bài tập"\ndescription: "Workbook ${d.title} — gõ nháp ngay tại đây, tự lưu trong trình duyệt."\nprev:\n  link: /${d.slug}/bai-hoc/\n  label: Quay lại bài học\nnext:\n  link: /${d.slug}/dap-an/\n  label: Xem đáp án (sau khi đã làm)\n---\n\nimport ExerciseCard from '../../../components/ExerciseCard.astro';\n\n${BANNER}${wb}`);

    // --- answer key ---
    const ak = stripH1(fixLinksTrack(read(`${base}/answer-key.md`), d.slug));
    const akLines = ak.split('\n');
    const akOut = [];
    let open = false;
    for (const l of akLines) {
      if (/^## /.test(l)) {
        if (open) { akOut.push('</details>', ''); open = false; }
        akOut.push(l, '', '<details><summary>👁️ Hiển thị đáp án — chỉ mở sau khi đã tự làm</summary>', '');
        open = true;
      } else {
        akOut.push(l);
      }
    }
    if (open) akOut.push('</details>');
    const akNext = nextDay
      ? `next:\n  link: /${nextDay.slug}/bai-hoc/\n  label: Ngày ${nextDay.num} — bài học`
      : `next:\n  link: /lo-trinh-14-ngay/\n  label: Về lộ trình 14 ngày`;
    write(`${d.slug}/dap-an.md`, `---\ntitle: "${d.title} — Đáp án"\ndescription: "Đáp án ${d.title} — chỉ xem sau khi đã tự làm."\nprev:\n  link: /${d.slug}/bai-tap/\n  label: Quay lại bài tập\n${akNext}\n---\n\n${BANNER}> ⚠️ **Đọc sau khi đã làm xong.** Mọi con số là cross-check Python (nhãn NOT_RUN) — đối chiếu khi chạy thật trên SPSS.\n\n${akOut.join('\n')}`);
  });
}

/* ---------- Exercise Bank (Task 16.2) ----------
 * Kho bài tập đầy đủ 58 câu nguồn (+2 phụ) — generated từ exercise-inventory.json.
 * Progress: done['exercise:P1-QNN'] / answers['exercise:P1-QNN[:key]'] — khác biệt với done['module:ef-dNN']. */
const EX_CATS = [
  ['capstone', 'Tổng hợp (capstone)', /tổng hợp|pipeline|capstone/i],
  ['advanced', 'ROC / Nâng cao', /ROC|diagnostic|AUC|Logistic|prognostic|tiên lượng|Multiple linear|nhiều Independents|Binary/i],
  ['corr-reg', 'Tương quan & hồi quy', /Correlate|Regression|Linear|scatterplot|tương quan|hồi quy|R²|hệ số/i],
  ['ttest', 'T-tests', /T Test|T-test|t-test/i],
  ['anova', 'ANOVA', /ANOVA/i],
  ['proportion', 'Kiểm định tỷ lệ', /Nonparametric|Binomial|McNemar|goodness-of-fit|GOF|Weight Cases|Risk|tỷ lệ ghép/i],
  ['crosstabs', 'Bảng chéo & Chi-square', /Crosstabs|Chi-square|bảng chéo/i],
  ['transform', 'Compute / Recode / Count', /Compute|Recode|Count|binning|nhị phân|Recode nhóm|đơn vị|nhãn giá trị mới/i],
  ['select-split', 'Select Cases / Split File', /Select Cases|Split File|mẫu con/i],
  ['descriptives', 'Tần số & thống kê mô tả', /Frequencies|Descriptives|Explore|Means|percentiles|quartiles|tần số|phần trăm|mô tả|CV|SEM|đọc phân bố/i],
  ['basics', 'SPSS cơ bản', /File|Sort|Data View|Variable View|Value Labels|Save As|Multiple Response|Mở file|đọc nhãn|nhận diện|luyện tập/i],
];
const EX_CAT_LABEL = Object.fromEntries(EX_CATS.map(c => [c[0], c[1]]));
function exCategory(q) {
  if (q.id === 'P2-TH3') return 'capstone';
  if (q.id === 'P1-BONUS-SLNC') return 'basics';
  const s = [...(q.ops || []), ...(q.skills || [])].join(' | ');
  for (const [k,, re] of EX_CATS) if (re.test(s)) return k;
  return 'basics';
}
const EX_TIER_LABEL = { essential: 'BẮT BUỘC', reinforcement: 'LUYỆN THÊM', optional: 'TÙY CHỌN', advanced: 'NÂNG CAO' };
const EX_ROLE_LABEL = { core: 'cốt lõi', optional: 'tùy chọn', deferred: 'nâng cao — hoãn khỏi lộ trình', assessment: 'đánh giá', bonus: 'phụ' };
/** Đáp án đã verify? — id xuất hiện trong answer-key.md của ngày được map. */
// (pre-load answer keys một lần — đơn giản, deterministic)
const AK_TEXT = {};
for (const n of Array.from({ length: 14 }, (_, i) => 'd' + String(i + 1).padStart(2, '0'))) {
  try {
    const dir = fs.readdirSync(path.join(ROOT, 'track-14day')).find(d => d.startsWith(`day-${n.slice(1)}-`));
    AK_TEXT[n] = dir ? fs.readFileSync(path.join(ROOT, 'track-14day', dir, 'answer-key.md'), 'utf8') : '';
  } catch (e) { AK_TEXT[n] = ''; }
}
function exVerified(q) {
  return (q.day || '').split('+').map(s => s.trim()).filter(d => /^d\d{2}$/.test(d))
    .some(n => AK_TEXT[n] && AK_TEXT[n].includes(q.id));
}
const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');
const exSlug = (id) => id.toLowerCase();
function exHref(id) { return `/kho-bai-tap/${exSlug(id)}/`; }

/** Thẻ bài tập nhỏ trong khối "Luyện thêm" của từng ngày — link sang trang chi tiết. */
function exMiniCard(q) {
  const cat = exCategory(q);
  return `<a class="exb-mini" href="${exHref(q.id)}" data-exid="${q.id}">`
    + `<span class="exb-mini__id">${q.id}</span>`
    + `<span class="exb-mini__sum">${esc(q.summary)}</span>`
    + `<span class="exb-mini__meta">${esc(q.ref)} · ${esc(q.difficulty)} · ~${q.time}′ · ${EX_CAT_LABEL[cat]}</span>`
    + `</a>`;
}

/** Khối "Bài tập trong Kho" chèn vào cuối lesson mỗi ngày — A BẮT BUỘC / B LUYỆN THÊM / C NÂNG CAO. */
function exDayBlock(slug) {
  const onDay = (q) => (q.day || '').split('+').map(s => s.trim()).includes(slug);
  const list = INV.exercises.filter(q => onDay(q));
  if (!list.length) return '';
  const grp = (pred, title) => {
    const xs = list.filter(pred);
    return xs.length ? `\n### ${title} (${xs.length})\n\n` + xs.map(exMiniCard).join('\n') : '';
  };
  return `\n\n---\n\n## 📚 Bài tập trong Kho bài tập\n`
    + grp(q => q.tier === 'essential' || q.role === 'assessment', 'A — Bài tập bắt buộc')
    + grp(q => q.tier === 'reinforcement' || (q.role === 'optional' && q.tier !== 'advanced' && q.tier !== 'optional'), 'B — Bài tập luyện thêm')
    + grp(q => q.tier === 'advanced' || q.tier === 'optional', 'C — Bài tập nâng cao / tùy chọn')
    + `\n\n> Xem toàn bộ 58 câu nguồn tại [Kho bài tập](/kho-bai-tap/).\n`;
}

function syncExerciseBank() {
  const supp = INV.exercises.filter(q => !/^P\d-Q\d+$/.test(q.id));
  const p1 = INV.exercises.filter(q => /^P1-Q\d+$/.test(q.id)).sort((a, b) => a.id.localeCompare(b.id));
  const p2 = INV.exercises.filter(q => /^P2-Q\d+$/.test(q.id)).sort((a, b) => a.id.localeCompare(b.id));
  const all = [...p1, ...p2, ...supp];

  // ----- hub -----
  const card = (q) => {
    const cat = exCategory(q);
    const ver = exVerified(q);
    const dayLinks = (q.day || '').split('+').map(s => s.trim()).filter(d => /^d\d{2}$/.test(d))
      .map(n => `Ngày ${n.slice(1)}`).join('+');
    const tier = q.tier || (q.role === 'deferred' ? 'advanced' : 'none');
    return `<a class="exb-card" href="${exHref(q.id)}" data-exid="${q.id}" `
      + `data-cat="${cat}" data-tier="${tier}" data-src="${q.src}" `
      + `data-search="${esc((q.id + ' ' + q.summary + ' ' + (q.dataset || '') + ' ' + (q.vars || []).join(' ')).toLowerCase())}">`
      + `<span class="exb-card__head"><b class="exb-card__id">${q.id}</b>`
      + `<span class="exb-card__tier exb-card__tier--${tier}">${EX_TIER_LABEL[tier] || tier}</span>`
      + `<span class="exb-card__status" data-exstatus="${q.id}">Chưa làm</span></span>`
      + `<span class="exb-card__sum">${esc(q.summary)}</span>`
      + `<span class="exb-card__meta">${esc(q.ref)} tr.${q.page} · ${esc(q.difficulty)} · ~${q.time}′ · <span class="exb-card__skill">${EX_CAT_LABEL[cat]}</span>${dayLinks ? ` · ${dayLinks}` : ''}${ver ? ' · ✓ đáp án' : ''}</span>`
      + `<span class="exb-card__cta">Bắt đầu làm bài →</span>`
      + `</a>`;
  };
  const filters = `<div class="exb-filters">
  <input type="search" class="exb-search" placeholder="Tìm theo mã / nội dung / biến / dataset…" aria-label="Tìm bài tập" />
  <div class="exb-row">
    <select class="exb-f" data-f="src"><option value="">Nguồn: tất cả</option><option value="P1">Bài 1 (43)</option><option value="P2">Bài 2 (15)</option></select>
    <select class="exb-f" data-f="cat"><option value="">Kỹ năng: tất cả</option>${EX_CATS.map(([k, l]) => `<option value="${k}">${l}</option>`).join('')}</select>
    <select class="exb-f" data-f="tier"><option value="">Mức: tất cả</option><option value="essential">Bắt buộc</option><option value="reinforcement">Luyện thêm</option><option value="optional">Tùy chọn</option><option value="advanced">Nâng cao</option><option value="none">Chưa xếp</option></select>
    <select class="exb-f" data-f="status"><option value="">Trạng thái: tất cả</option><option value="done">Đã làm</option><option value="draft">Đang làm</option><option value="empty">Chưa làm</option></select>
    <span class="exb-count" data-exb-count></span>
  </div>
</div>`;
  const grp = (title, xs) => `\n\n## ${title} (${xs.length} câu)\n\n<div class="exb-list">${xs.map(card).join('\n')}</div>`;
  write('kho-bai-tap.md', `---
title: "Kho bài tập — 58 câu nguồn"
description: "Toàn bộ 58 câu hỏi nguồn từ 2 đề thực hành của chủ khóa học: Bài 1 (43 câu) và Bài 2 (15 câu), kèm 2 mục phụ. Lọc theo kỹ năng, mức độ, trạng thái."
tableOfContents: false
---

${BANNER}> 📚 **Kho bài tập = toàn bộ bài tập nguồn.** Lộ trình 14 ngày là *con đường dẫn* chọn lọc;
> ở đây bạn luyện tự do thêm bất kỳ câu nào — mỗi câu có trang riêng với hướng dẫn thao tác, gợi ý và ô ghi kết quả.
> File \`.sav\`/PDF nguồn nằm trong thư mục \`exercises/\` trên máy bạn (không tải từ web).

${filters}
<div class="exb-empty" data-exb-empty hidden>Không có bài tập nào khớp bộ lọc hiện tại. <button type="button" data-exb-reset>Xóa bộ lọc</button></div>
${grp('Bài 1 — Bài thực hành SDH Phần 1', p1)}
${grp('Bài 2 — Bài TH Phần 2', p2)}
${grp('Phụ — không tính trong 58 câu', supp)}
`);

  // ----- detail pages -----
  for (const q of all) {
    const cat = exCategory(q);
    const ver = exVerified(q);
    const days = (q.day || '').split('+').map(s => s.trim()).filter(d => /^d\d{2}$/.test(d));
    const lessonLinks = days.map(n => `<a href="/${n}/bai-hoc/">Ngày ${n.slice(1)} — bài học</a>`).join(' · ');
    const answerLink = ver && days.length
      ? `[Đáp án chi tiết — Ngày ${days[0].slice(1)}](/${days[0]}/dap-an/) *(mở sau khi đã tự làm)*`
      : null;
    const siblings = INV.exercises.filter(o => o.id !== q.id && exCategory(o) === cat && /^P\d-Q\d+$/.test(o.id)).slice(0, 4);
    const hints = (q.hint || []);
    const steps = (q.ops || []);
    const ansFields = q.answerSpec || null;

    const box = (t, inner, cls = '') => `<div class="exd-box${cls}"><span class="exd-box__t">${t}</span>${inner}</div>`;
    const body = `
<div class="exd-head">
  <span class="exd-eyebrow">BÀI TẬP NGUỒN · ${q.src}</span>
  <span class="exd-status" data-exstatus="${q.id}">Chưa làm</span>
</div>
<p class="exd-meta"><span class="exd-id">${q.id}</span> · ${esc(PDF_NAME[q.src] || q.src)} · ${esc(q.ref)} · trang ${q.page} · ${esc(q.difficulty)} · ~${q.time} phút</p>

<div class="exd-layout">
<div class="exd-side">
${box('Yêu cầu', `<p>${esc(q.summary)}</p>`)}
${box('Sản phẩm', `<p>${esc(q.artifact || 'Ghi kết quả vào workbook')}</p>`)}
${box('Dataset (local)', `<p><code>${esc(q.dataset || '—')}</code></p><p class="exd-note">Mở trực tiếp trong SPSS từ thư mục <code>exercises/</code> — không tải từ web.</p>`)}
${(q.vars && q.vars.length) ? box('Biến cần dùng', `<div class="exd-vars">${q.vars.map(v => `<code>${esc(v)}</code>`).join('')}</div>`) : ''}
${(q.skills && q.skills.length) ? box('Kỹ năng', `<p>${q.skills.map(s => esc(s)).join(' · ')}</p>`) : ''}
${(q.prereq && q.prereq.length) ? box('Yêu cầu trước', `<p>${q.prereq.map(s => esc(s)).join(' · ')}</p>`, ' exd-box--warn') : ''}
${box('Độ khó · Thời gian', `<p>${esc(q.difficulty)} · ~${q.time} phút</p><p class="exd-note">${EX_ROLE_LABEL[q.role] || q.role}${q.tier ? ` · ${EX_TIER_LABEL[q.tier] || q.tier}` : ''}</p>`)}
</div>
<div class="exd-brief">
${steps.length ? `<h2 class="exd-h">Thao tác SPSS</h2>\n<ol class="exd-steps">${steps.map(s => `<li><code>${esc(s)}</code></li>`).join('')}</ol>\n` : ''}
<h2 class="exd-h">Nhập kết quả của bạn</h2>
${ansFields
  ? ansFields.map(f => `<div class="exd-ans"><label>${esc(f.label)}<input type="text" data-answer="exercise:${q.id}:${f.key}" placeholder="Gõ kết quả…" /></label></div>`).join('\n')
  : `<textarea class="exercise-card__input" rows="4" placeholder="Ghi kết quả / tính toán của bạn — tự lưu trong trình duyệt…" data-answer="exercise:${q.id}"></textarea>`}
<div class="exd-actions">
  <button type="button" class="exercise-card__done" data-done="exercise:${q.id}">Đánh dấu đã làm xong</button>
  ${answerLink ? `<a class="exd-alink" href="/${days[0]}/dap-an/">Xem đáp án (${days[0].toUpperCase()}) →</a>` : `<span class="exd-nover">⚠️ ANSWER_NOT_VERIFIED — chưa có đáp án kiểm chứng; đối chiếu kết quả khi chạy thật trên SPSS.</span>`}
</div>
${ver ? '' : `<p class="exd-nover">Trạng thái đáp án: <b>ANSWER_NOT_VERIFIED</b>${q.role === 'deferred' ? ' (bài nâng cao — ngoài lộ trình beginner)' : ''}.</p>`}
</div>
<aside class="exd-rail">
${hints.length ? `<h2 class="exd-h">Gợi ý (mở từng cái một)</h2>\n` + hints.map((h, i) => `<details class="exd-hint"><summary>💡 Gợi ý ${i + 1}</summary>\n\n${esc(h)}\n\n</details>`).join('\n\n') + '\n' : ''}
<h2 class="exd-h">Liên quan</h2>
${lessonLinks ? `<p>Bài học hướng dẫn: ${lessonLinks}</p>\n` : '<p>Ngoài lộ trình 14 ngày — bài tập tự do / nâng cao.</p>\n'}<p>Cùng nhóm kỹ năng: ${siblings.length ? siblings.map(o => `<a href="${exHref(o.id)}">${o.id}</a>`).join(' · ') : '—'}</p>
<p><a href="/kho-bai-tap/">← Quay lại Kho bài tập</a></p>
</aside>
</div>
`;

    write(`kho-bai-tap/${exSlug(q.id)}.md`, `---
title: "${q.id} — ${esc(q.summary).slice(0, 70)}"
description: "Bài tập ${q.id} (${q.ref}, trang ${q.page}) — ${esc(q.dataset)}. Kho bài tập SPSS nguồn."
tableOfContents: false
prev:
  link: /kho-bai-tap/
  label: Kho bài tập
---

${BANNER}${body}`);
  }

  console.log(`  + kho-bai-tap/ (${all.length} trang chi tiết + hub)`);
}


function syncTrackRoadmap() {
  let md = stripH1(read('curriculum/EXERCISE-FIRST-14-DAY-ROADMAP.md'));
  md = md.replace(/`?project-control\/decisions\.md`?/g, '_tài liệu nội bộ_');
  md = md.replace(/`datasets\/([\w./-]+)`/g, '[`datasets/$1`](/du-lieu/)');
  md = md.replace(/`(\w+_raw\.csv|\w+_clean\.csv|exercise_\w+\.csv)`/g, '[`$1`](/du-lieu/)');
  md = md.replace(/`curriculum\/roadmap\.md`/g, '[lộ trình 16 tuần — tham khảo](/lo-trinh/)');
  md = md.replace(/`curriculum\/exercise-verified-stats\.md`/g, '_tài liệu nội bộ_');
  md = md.replace(/`lessons\/M01[\w./-]*`/g, '[M01 — tham khảo](/m01/bai-hoc/)');
  // Gắn link bài học vào cột Ngày trong bảng lịch.
  md = md.replace(/^\| (\d{2}) \|/gm, (_, n) => `| [${n} →](/d${n}/bai-hoc/) |`);
  const status = `> 🚀 **Đây là lộ trình mặc định hiện tại** — bài tập nguồn thật (P1-Q01…P2-Q15) quyết định nội dung.\n`
    + `> Ngày 01–14 READY (CONTENT_READY_PENDING_HUMAN_PILOT). `
    + `Số liệu cross-check Python (NOT_RUN); menu SPSS/macOS chờ verify thủ công.\n`
    + `> Lộ trình cũ quanh dataset giả lập đã lưu ở \`archive/\`; chương trình 16 tuần ở mục [Tham khảo](/lo-trinh/).\n\n`;
  write('lo-trinh-14-ngay.md', `---\ntitle: Lộ trình 14 ngày — Exercise-first\ndescription: Học SPSS qua bài tập thật — mỗi ngày mở bằng bài tập nguồn (P1-Q01…P2-Q15), lý thuyết vừa đủ để giải.\n---\n\n${BANNER}${status}${md}`);
}

/* ---------- Datasets: trang tải + copy CSV public ---------- */
function syncDatasets() {
  const pub = path.resolve(OUT, '..', '..', '..', 'public', 'datasets');
  fs.rmSync(pub, { recursive: true, force: true });
  const files = [
    'synthetic-raw/clinic_bp_v1_raw.csv', 'synthetic-raw/assessment_gp_raw.csv',
    'synthetic-raw/capstone_screening_raw.csv', 'synthetic-raw/exercise_hba1c_pairs.csv',
    'cleaned/clinic_bp_v1_clean.csv', 'cleaned/assessment_gp_clean.csv', 'cleaned/capstone_screening_clean.csv',
  ];
  for (const f of files) {
    fs.mkdirSync(pub, { recursive: true });
    fs.copyFileSync(path.join(ROOT, 'datasets', f), path.join(pub, path.basename(f)));
  }
  console.log('  + public/datasets/ (%d CSV)', files.length);

  const notice = read('datasets/synthetic-raw/00-SIMULATED-NOTICE.md').split('\n').slice(1).join('\n');
  const demote = (md) => md.replace(/^# /gm, '### ').replace(/^## /gm, '#### ');
  const dl = (f) => `[\`${f}\`](/datasets/${f})`;
  const cb = (f, label) => `<details><summary>${label}</summary>\n\n${demote(read(`datasets/codebooks/${f}`))}\n\n</details>`;
  let md = `> ⚠️ **Từ Task 13, dataset chính của khóa học là các file \`.sav\` nguồn trong thư mục \`exercises/\` `
    + `trên máy bạn** (tài liệu bên thứ ba — chỉ dùng local, không tải được từ trang này và không `
    + `được phát hành kèm website). Các file CSV giả lập bên dưới là tài liệu luyện thêm tùy chọn.\n\n`
    + `## 1. Dataset nguồn — mở trực tiếp trong SPSS (local only)\n\n`
    + `| Ngày | File (trong \`exercises/\`) | Dùng cho |\n|---|---|---|\n`
    + `| 01–08, 14 | \`bai_1/p1_B01_HA (1).sav\` | 620×40 — khảo sát tăng huyết áp; gần hết bài tập Phần 1 |\n`
    + `| 05 | \`bai_1/P1_B02 CrossTab (2).sav\` | P1-Q21 — bảng 2×2 HPV tổng hợp (Weight Cases) |\n`
    + `| 05, 08–11, 14 | \`bai_2/File1.sav\` | 50×18 — chấn thương giao thông; bài tập Phần 2 |\n`
    + `| 10 | \`bai_2/File2_Phan2.sav\` | P2-Q13 — giờ ngủ thuốc vs giả dược |\n`
    + `| 12–13 | \`bai_2/File5_Phan2.sav\` | 296×7 — capstone sinh thiết tuyến tiền liệt |\n`
    + `| extension | \`bai_1/P1_B03 ROC.sav\` · \`bai_2/File3_Phan2.sav\` · \`bai_2/File4_Phan2.sav\` | nội dung hoãn: ROC, tiên lượng |\n`
    + `| tự do | \`bai_1/So_Lieu_NC.sav\` | dataset phụ — nhận diện file lạ (Ngày 01, BT4) |\n\n`
    + `Đề gốc đi kèm: \`bai_1/Bai thuc hanh SDH P1.pdf\` (43 câu) · \`bai_2/BSNT_Bài TH_Phần 2_Cô Hiền.pdf\` (15 câu).\n\n`
    + `## 2. CSV giả lập — luyện thêm tùy chọn\n\n`
    + `Bộ CSV cũ của lộ trình practice-first (dataset \`clinic_bp\` giả lập) vẫn tải được để luyện `
    + `thao tác import/làm sạch — **không còn là dataset chính của bài học**.\n\n`
    + `- ${dl('clinic_bp_v1_clean.csv')} · ${dl('clinic_bp_v1_raw.csv')} · ${dl('exercise_hba1c_pairs.csv')} · `
    + `${dl('capstone_screening_raw.csv')} · ${dl('assessment_gp_raw.csv')}\n\n`
    + `## 3. Codebooks của CSV giả lập — tra cứu khi cần\n\n`
    + `Codebook cho các file \`.sav\` nguồn nằm ngay trong Variable View của từng file và đề PDF gốc; `
    + `bên dưới là codebook của các CSV giả lập phụ.\n\n`
    + cb('clinic_bp_codebook.md', '📖 clinic_bp — CSV giả lập luyện thêm') + `\n\n`
    + cb('exercise_hba1c_codebook.md', '📖 exercise_hba1c — CSV giả lập luyện thêm') + `\n\n`
    + cb('capstone_screening_codebook.md', '📖 capstone_screening — CSV giả lập luyện thêm') + `\n\n`
    + cb('assessment_gp_codebook.md', '📖 assessment_gp — CSV giả lập luyện thêm') + `\n\n`
    + `## 4. Bản sạch tham chiếu của CSV — ⚠️ chỉ mở sau khi đã tự làm xong\n\n`
    + `<details><summary>⚠️ Các file <code>*_clean.csv</code> — mở sớm = tự lộ đáp án làm sạch</summary>\n\n`
    + `Đây là bản sạch **chuẩn** để *đối chiếu* sau khi bạn tự làm sạch file raw xong — `
    + `**không phải** file để bạn import vào bài tập Ngày 03/12/14.\n\n`
    + `- ${dl('clinic_bp_v1_clean.csv')} · ${dl('capstone_screening_clean.csv')} · ${dl('assessment_gp_clean.csv')}\n\n`
    + `</details>\n\n`
    + `## 5. Kết quả mong đợi\n\n`
    + `Bảng expected-results đầy đủ (N, mean, p-value…) cố tình **không đặt lên trang này** — `
    + `nó chứa đáp án của các bài kiểm tra. Con số đối chiếu cần thiết đã nằm sẵn trong `
    + `trang Đáp án của từng ngày (mở sau khi đã tự làm).\n`;
  write('du-lieu.md', `---\ntitle: Dữ liệu thực hành\ndescription: File .sav nguồn (local) của lộ trình exercise-first + CSV giả lập luyện thêm.\n---\n\n${BANNER}${md}`);
}

function syncLesson() {
  let md = stripH1(read('lessons/M01-research-thinking/lesson.md'));
  // Bỏ header DRAFT nội bộ của repo, thay bằng ghi chú learner-facing
  md = md.replace('> **Trạng thái:** DRAFT — chưa review độc lập, chưa HUMAN_APPROVAL.\n', '');
  md = fixLinks(md);
  md = mdxDetails(md);
  md = mdxEscapeLt(md);
  // Nút đánh dấu hoàn thành ở cuối bài (trước đoạn chuyển M02)
  md += '\n\n---\n\n<CompleteModuleButton id="m01" label="Đánh dấu đã học xong M01" />\n';
  write('m01/bai-hoc.mdx', `---\ntitle: M01 — Tư duy nghiên cứu y khoa và ngôn ngữ thống kê\ndescription: Module nền tảng — hiểu câu hỏi nghiên cứu, biến và dữ liệu trước khi mở SPSS. Thời lượng đề xuất ~1 tuần.\nnext:\n  link: /m01/bai-tap/\n  label: Làm bài tập M01\n---\n\nimport CompleteModuleButton from '../../../components/CompleteModuleButton.astro';\nimport ReadMore from '../../../components/ReadMore.astro';\n\n${BANNER}${md}`);
}

/* ---------- 2. M01 workbook → inject <ExerciseCard> ---------- */
function syncWorkbook() {
  const md = mdxEscapeLt(stripH1(fixLinks(read('lessons/M01-research-thinking/workbook.md'))));
  const lines = md.split('\n');
  const out = [];
  let inBT = null;            // 'bt1'..'bt4'
  let subBase = null;         // 'bt1a' | 'bt1' ...
  let itemId = null;          // id item đang mở
  let itemOpen = false;
  let pendingPrompt = null;   // sub-prompt chưa có card (vd BT1b)
  let emitted = 0;            // số card đã emit trong section hiện tại
  const card = (id) => { emitted++; return `<ExerciseCard id="${id}" label="Nháp ${id.toUpperCase()}" />`; };
  const closeItem = () => { if (itemOpen) { out.push('', card(itemId)); itemOpen = false; } };
  const flushPrompt = () => { if (pendingPrompt) { out.push('', card(pendingPrompt)); pendingPrompt = null; } };
  const closeSection = () => { closeItem(); flushPrompt(); if (emitted === 0 && inBT) out.push('', card(inBT)); emitted = 0; };

  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    const mBT = l.match(/^## (BT\d)/);
    if (mBT) {
      closeSection();
      inBT = mBT[1].toLowerCase();
      subBase = inBT;
      out.push(l);
      continue;
    }
    if (/^---|^# /.test(l)) { closeSection(); inBT = null; out.push(l); continue; }
    if (!inBT) { out.push(l); continue; }
    const mSub = l.match(/^\*\*(BT\d[a-z]?)\./);
    if (mSub) { closeItem(); flushPrompt(); subBase = mSub[1].toLowerCase(); pendingPrompt = subBase; out.push(l); continue; }
    if (/^\*\*Nhiệm vụ/.test(l)) { closeItem(); flushPrompt(); out.push(l); continue; }
    // BT2: bảng phân loại 12 biến — đổi ô trống "Kiểu của bạn" thành <select> từng dòng.
    // ID mới bt2-1..bt2-12, lưu cùng schema answers{id:text}; card bt2 gốc vẫn giữ.
    if (inBT === 'bt2' && /^\| \d+ \|/.test(l) && /\|\s*\|$/.test(l)) {
      const rowNum = l.match(/^\| (\d+) \|/)[1];
      const sel = `<select class="bt2-select" data-answer="bt2-${rowNum}" aria-label="Kiểu của biến dòng ${rowNum}"><option value="">— Chọn kiểu —</option><option>định danh</option><option>định tính danh định</option><option>định tính thứ bậc</option><option>định lượng</option></select>`;
      out.push(l.replace(/\|\s*\|$/, `| ${sel} |`));
      continue;
    }
    const mNum = l.match(/^(\d+)\.\s/);
    if (mNum) {
      closeItem();
      itemId = `${subBase}-${mNum[1]}`;
      pendingPrompt = null;
      itemOpen = true;
      out.push(l);
      continue;
    }
    out.push(l);
  }
  closeSection();

  write('m01/bai-tap.mdx', `---\ntitle: M01 — Bài tập tự luyện (BT1–BT4)\ndescription: Làm trên giấy hoặc gõ nháp ngay tại đây — câu trả lời tự lưu trong trình duyệt. Xem đáp án chỉ sau khi đã làm.\nprev:\n  link: /m01/bai-hoc/\n  label: Quay lại bài học\n---\n\nimport ExerciseCard from '../../../components/ExerciseCard.astro';\n\n${BANNER}${out.join('\n')}`);
}

/* ---------- 3. M01 answer key → bọc <details> ---------- */
function syncAnswers() {
  const md = stripH1(read('lessons/M01-research-thinking/answer-key.md'));
  const lines = md.split('\n');
  const out = [];
  let open = false;
  for (const l of lines) {
    if (/^## /.test(l)) {
      if (open) { out.push('</details>', ''); open = false; }
      out.push(l, '', '<details><summary>👁️ Hiển thị đáp án — chỉ mở sau khi đã tự làm</summary>', '');
      open = true;
    } else {
      out.push(l);
    }
  }
  if (open) out.push('</details>');
  const body = out.join('\n')
    .replace(/`qa\/M01-author-selfcheck\.md`/g, 'hồ sơ tự kiểm của tác giả (nội bộ)');
  write('m01/dap-an.md', `---\ntitle: M01 — Đáp án & giải thích\ndescription: Chỉ xem sau khi đã làm xong bài tập. Mỗi đáp án gồm lý do, lỗi hay gặp và cách tự sửa.\nprev:\n  link: /m01/bai-tap/\n  label: Quay lại bài tập\n---\n\n${BANNER}> ⚠️ **Đọc sau khi đã làm xong bài tập.** Mỗi đáp án gồm: đáp án → lý do → lỗi hay gặp → cách tự sửa.\n> Toàn bộ số liệu tính từ bảng mini_records (GIẢ LẬP) trong bài học; đã tái tính độc lập bởi tác giả.\n\n${body}`);
}

/* ---------- 4. Roadmap (thêm bảng trạng thái generated) ---------- */
function syncRoadmap() {
  let md = fixLinks(stripH1(read('curriculum/roadmap.md')));
  // Badge trạng thái sau mỗi heading ## Mxx — presentation-only, không đổi nội dung module.
  md = md.replace(/^## (M\d{2})[^\n]*$/gm, (line, code) => {
    if (code === 'M01') {
      return `${line}\n\n<div class="module-status module-status--ready"><span class="ms-badge">Đã có bài học</span><a href="/m01/bai-hoc/">Vào bài học →</a><a href="/m01/bai-tap/">Bài tập</a><a href="/m01/dap-an/">Đáp án</a></div>`;
    }
    return `${line}\n\n<div class="module-status"><span class="ms-badge ms-badge--soon">Đang biên soạn</span></div>`;
  });
  const status = `> � **Đây là tài liệu tham khảo** — chương trình 16 tuần theo Blueprint gốc, hiện KHÔNG phải lộ trình mặc định.\n`
    + `> Nếu bạn đang học để làm được phân tích nhanh: đi theo **[Lộ trình 14 ngày — practice-first](/lo-trinh-14-ngay/)**.\n\n`;
  write('lo-trinh.md', `---\ntitle: Lộ trình học — 16 tuần (tham khảo)\ndescription: 12 module cốt lõi + 3 chuyên đề mở rộng — bản Blueprint gốc, giữ làm tài liệu tham khảo.\n---\n\n${BANNER}${status}${md}`);
}

/* ---------- 5. Tài liệu learner-facing ---------- */
function syncDocs() {
  write('tai-lieu/thuat-ngu.md', `---\ntitle: Thuật ngữ Việt–Anh\ndescription: Bảng tra thuật ngữ thống kê song ngữ dùng trong toàn khóa.\n---\n\n${BANNER}${fixLinks(stripH1(read('curriculum/glossary-vi-en.md')))}`);
  write('tai-lieu/muc-tieu.md', `---\ntitle: Mục tiêu khóa học\ndescription: Kết quả học tập đo được — sau khóa này bạn làm được gì.\n---\n\n${BANNER}${fixLinks(stripH1(read('curriculum/learning-outcomes.md')))}`);
  write('tai-lieu/ban-do-khai-niem.md', `---\ntitle: Bản đồ khái niệm\ndescription: Các khái niệm thống kê xuất hiện ở module nào.\n---\n\n${BANNER}${fixLinks(stripH1(read('curriculum/concept-map.md')))}`);
  write('tai-lieu/bat-dau-mac.md', `---\ntitle: Chuẩn bị SPSS trên MacBook\ndescription: Checklist trước khi mở SPSS lần đầu — cần ở M02.\n---\n\n${BANNER}${fixLinks(stripH1(read('START-HERE-MAC.md')))}`);
  write('tai-lieu/chuan-bi-du-lieu.md', `---\ntitle: Chuẩn bị dữ liệu thực hành\ndescription: File .sav nguồn đi đâu, làm việc ở đâu — hai kịch bản Windows/Mac, quy tắc không ghi đè gốc.\n---\n\n${BANNER}${fixLinks(stripH1(read('curriculum/spss-practice-setup.md')))}`);
}

console.log('Syncing canonical → website/src/content/docs/ ...');
fs.rmSync(OUT, { recursive: true, force: true });
syncTrackRoadmap(); syncTrack(); syncDatasets(); syncExerciseBank();
syncLesson(); syncWorkbook(); syncAnswers(); syncRoadmap(); syncDocs();
console.log(`Done — ${changed} file(s) generated.`);
