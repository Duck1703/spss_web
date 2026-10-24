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

let changed = 0;
function write(rel, content) {
  const p = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content, 'utf8');
  changed++;
  console.log('  +', rel);
}
function read(rel) { return fs.readFileSync(path.join(ROOT, rel), 'utf8'); }

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

/* ---------- 14-day practice-first track (D-020) ---------- */
const DAYS = [
  { dir: 'day-01-lan-dau-mo-spss', slug: 'd01', num: '01', title: 'Ngày 01 — Lần đầu mở SPSS',
    files: [{ csv: 'clinic_bp_v1_clean.csv', note: 'import đầu tiên' }, { csv: 'exercise_hba1c_pairs.csv', note: 'cho workbook BT1' }] },
  { dir: 'day-02-bien-va-ma-hoa', slug: 'd02', num: '02', title: 'Ngày 02 — Biến và mã hóa',
    files: [{ sav: 'clinic_bp.sav', from: 'Ngày 01' }, { sav: 'hba1c_pairs.sav', from: 'workbook Ngày 01' }] },
  { dir: 'day-03-lam-sach-du-lieu', slug: 'd03', num: '03', title: 'Ngày 03 — Làm sạch dữ liệu',
    files: [{ csv: 'clinic_bp_v1_raw.csv', note: 'bản có lỗi gài — bài làm sạch' }, { sav: 'clinic_bp.sav', from: 'Ngày 02 — bản tham chiếu có nhãn' }] },
  { dir: 'day-04-thong-ke-mo-ta', slug: 'd04', num: '04', title: 'Ngày 04 — Thống kê mô tả',
    files: [{ sav: 'clinic_bp_my_clean.sav', from: 'Ngày 03 — file làm việc chính' }] },
  { dir: 'day-05-bieu-do-va-tom-tat-nhom', slug: 'd05', num: '05', title: 'Ngày 05 — Biểu đồ và mô tả theo nhóm',
    files: [{ sav: 'clinic_bp_my_clean.sav', from: 'Ngày 03 — file làm việc chính' }] },
  { dir: 'day-06-ttest-doc-lap', slug: 'd06', num: '06', title: 'Ngày 06 — T-test hai nhóm độc lập',
    files: [{ sav: 'clinic_bp_my_clean.sav', from: 'Ngày 03 — file làm việc chính' }] },
  { dir: 'day-07-ttest-ghep-cap', slug: 'd07', num: '07', title: 'Ngày 07 — T-test mẫu ghép cặp',
    files: [{ sav: 'clinic_bp_my_clean.sav', from: 'Ngày 03' }, { csv: 'exercise_hba1c_pairs.csv', note: 'paired t-test' }] },
  { dir: 'day-08-crosstabs-chisquare', slug: 'd08', num: '08', title: 'Ngày 08 — Bảng chéo và Chi-square',
    files: [{ sav: 'clinic_bp_my_clean.sav', from: 'Ngày 03 — file làm việc chính' }] },
  { dir: 'day-09-tuong-quan', slug: 'd09', num: '09', title: 'Ngày 09 — Tương quan',
    files: [{ sav: 'clinic_bp_my_clean.sav', from: 'Ngày 03 — file làm việc chính' }] },
  { dir: 'day-10-chon-phep-phan-tich', slug: 'd10', num: '10', title: 'Ngày 10 — Chọn phép phân tích',
    files: [{ sav: 'clinic_bp_my_clean.sav', from: 'Ngày 03 — file làm việc chính' }] },
  { dir: 'day-11-doc-va-bao-cao', slug: 'd11', num: '11', title: 'Ngày 11 — Đọc và báo cáo output',
    files: [{ sav: 'clinic_bp_my_clean.sav', from: 'Ngày 03 — file làm việc chính' }] },
  { dir: 'day-12-capstone-chuan-bi', slug: 'd12', num: '12', title: 'Ngày 12 — Capstone 1: Chuẩn bị dữ liệu',
    files: [{ csv: 'capstone_screening_raw.csv', note: 'bản có lỗi gài — làm sạch như Ngày 03' }] },
  { dir: 'day-13-capstone-phan-tich', slug: 'd13', num: '13', title: 'Ngày 13 — Capstone 2: Phân tích',
    files: [{ sav: 'capstone_my_clean.sav', from: 'Ngày 12 — file bạn tự làm sạch' }] },
  { dir: 'day-14-danh-gia-cuoi-khoa', slug: 'd14', num: '14', title: 'Ngày 14 — Đánh giá cuối khóa',
    files: [{ csv: 'assessment_gp_raw.csv', note: 'đánh giá cuối khóa — có lỗi gài' }] },
];

/** Dòng 📦 file cần hôm nay — inject ngay đầu mỗi lesson; CSV → link tải trực tiếp, .sav → chỉ nguồn. */
function fileBox(d) {
  if (!d.files || !d.files.length) return '';
  const parts = d.files.map(f => f.csv
    ? `[\`${f.csv}\`](/datasets/${f.csv})${f.note ? ` — ${f.note}` : ''}`
    : `\`${f.sav}\` — file bạn đã tạo ở ${f.from}`);
  return `> 📦 **File cần hôm nay:** ${parts.join(' · ')}\n`
    + `> *(File \`.sav\` là sản phẩm bạn tự tạo — không phải tải; CSV tải từ trang [Dữ liệu](/du-lieu/) hoặc link trên.)*\n\n`;
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
function stripInternalStatus(md) {
  return md.replace(/^> \*\*Trạng thái:\*\*[^\n]*\n(?:> [^\n]*\n)*/gm, '');
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
      out.push('', `<ExerciseCard id="${slug}-${section}-sanpham" label="Sản phẩm ${section.toUpperCase()}" checklist={${JSON.stringify(items)}} answerHref="/${slug}/dap-an/" />`);
      continue;
    }
    out.push(l);
    const mNum = l.match(/^(\d+)\.\s/);
    if (section && mNum) {
      out.push('', `<ExerciseCard id="${slug}-${section}-${mNum[1]}" label="Nháp ${section.toUpperCase()}.${mNum[1]}" answerHref="/${slug}/dap-an/" />`);
    }
  }
  return out.join('\n');
}

function syncTrack() {
  const TRACK_NOTICE = '> ⏳ **Bài học thực hành SPSS — đã kiểm chứng số liệu bằng tính toán độc lập (Python), '
    + 'chưa chạy thử trên SPSS/macOS.** Các bước menu ghi rõ `MAC_SPSS_VERIFICATION_PENDING`.\n\n';
  DAYS.forEach((d, i) => {
    const base = `track-14day/${d.dir}`;
    const prevDay = DAYS[i - 1];
    const nextDay = DAYS[i + 1];

    // --- lesson ---
    let md = stripInternalStatus(read(`${base}/lesson.md`));
    md = fixLinksTrack(md, d.slug);
    // {{guide:id}} → <SPSSActionGuide> (phải chạy TRƯỚC mdxEscapeBraces)
    const hasGuides = /\{\{guide:[\w-]+\}\}/.test(md);
    if (hasGuides) {
      md = md.replace(/\{\{guide:([\w-]+)\}\}/g, '\n<SPSSActionGuide id="$1" />\n');
    }
    md = mdxEscapeBraces(md);
    md = mdxEscapeLt(md);
    md += `\n\n---\n\n<CompleteModuleButton id="${d.slug}" label="Đánh dấu đã học xong Ngày ${d.num}" />\n`;
    const lessonPrev = prevDay
      ? `prev:\n  link: /${prevDay.slug}/dap-an/\n  label: Ngày ${prevDay.num} — đáp án`
      : `prev:\n  link: /lo-trinh-14-ngay/\n  label: Lộ trình 14 ngày`;
    const guideImports = hasGuides
      ? `import SPSSActionGuide from '../../../components/spss/SPSSActionGuide.astro';\nimport OSSelector from '../../../components/spss/OSSelector.astro';\n`
      : '';
    const osBlock = hasGuides
      ? '\n<OSSelector />\n\n'
      : '';
    write(`${d.slug}/bai-hoc.mdx`, `---\ntitle: "${d.title}"\ndescription: "Bài học thực hành ${d.title} — lộ trình practice-first 14 ngày."\n${lessonPrev}\nnext:\n  link: /${d.slug}/bai-tap/\n  label: Làm bài tập Ngày ${d.num}\n---\n\nimport CompleteModuleButton from '../../../components/CompleteModuleButton.astro';\n${guideImports}\n${BANNER}${TRACK_NOTICE}${fileBox(d)}${osBlock}${md}`);

    // --- workbook ---
    let wb = fixLinksTrack(read(`${base}/workbook.md`), d.slug);
    wb = mdxEscapeBraces(wb);
    wb = mdxEscapeLt(injectTrackCards(wb, d.slug));
    if (d.slug === 'd14') {
      wb += `\n\n<ExerciseCard id="d14-tu-cham" label="Tổng điểm tự chấm & ghi chú" answerHref="/d14/dap-an/" />\n`;
    }
    write(`${d.slug}/bai-tap.mdx`, `---\ntitle: "${d.title} — Bài tập"\ndescription: "Workbook ${d.title} — gõ nháp ngay tại đây, tự lưu trong trình duyệt."\nprev:\n  link: /${d.slug}/bai-hoc/\n  label: Quay lại bài học\nnext:\n  link: /${d.slug}/dap-an/\n  label: Xem đáp án (sau khi đã làm)\n---\n\nimport ExerciseCard from '../../../components/ExerciseCard.astro';\n\n${BANNER}${wb}`);

    // --- answer key ---
    const ak = fixLinksTrack(read(`${base}/answer-key.md`), d.slug);
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

/* ---------- Roadmap 14 ngày ---------- */
function syncTrackRoadmap() {
  let md = read('curriculum/PRACTICE-FIRST-14-DAY-TRACK.md');
  md = md.replace(/`?project-control\/decisions\.md`?/g, '_tài liệu nội bộ_');
  md = md.replace(/`datasets\/([\w./-]+)`/g, '[`datasets/$1`](/du-lieu/)');
  md = md.replace(/`(\w+_raw\.csv|\w+_clean\.csv|exercise_\w+\.csv)`/g, '[`$1`](/du-lieu/)');
  md = md.replace(/`curriculum\/roadmap\.md`/g, '[lộ trình 16 tuần — tham khảo](/lo-trinh/)');
  md = md.replace(/`lessons\/M01[\w./-]*`/g, '[M01 — tham khảo](/m01/bai-hoc/)');
  // Gắn link bài học vào cột Ngày trong bảng lịch.
  md = md.replace(/^\| (\d{2}) \|/gm, (_, n) => `| [${n} →](/d${n}/bai-hoc/) |`);
  const status = `> 🚀 **Đây là lộ trình mặc định hiện tại** — mỗi ngày ~90–120 phút, 80% thực hành SPSS.\n`
    + `> Trạng thái kiểm chứng: số liệu cross-check Python (NOT_RUN); menu SPSS/macOS chờ verify thủ công.\n`
    + `> Chương trình 16 tuần giờ ở mục [Tham khảo](/lo-trinh/).\n\n`;
  write('lo-trinh-14-ngay.md', `---\ntitle: Lộ trình 14 ngày — Practice-first\ndescription: Học SPSS y khoa bằng thực hành — mỗi ngày ~90–120 phút, 80% thao tác thật.\n---\n\n${BANNER}${status}${md}`);
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
  let md = `# Dữ liệu thực hành — 100% giả lập\n\n${notice}\n\n`
    + `## 1. File bạn cần tải — theo ngày\n\n`
    + `Mỗi ngày chỉ cần đúng file của ngày đó — tải luôn từ đây hoặc từ ô **📦 File cần hôm nay** đầu mỗi bài học.\n\n`
    + `| Ngày | File tải về | Vai trò |\n|---|---|---|\n`
    + `| [01](/d01/bai-hoc/) | ${dl('clinic_bp_v1_clean.csv')} | Import đầu tiên — bản **sạch** (chữ _clean) |\n`
    + `| [01](/d01/bai-tap/) — workbook | ${dl('exercise_hba1c_pairs.csv')} | Bài tập import thứ hai (24 dòng) |\n`
    + `| [03](/d03/bai-hoc/) | ${dl('clinic_bp_v1_raw.csv')} | Bản **gốc có lỗi gài** — bài làm sạch |\n`
    + `| [07](/d07/bai-hoc/) | ${dl('exercise_hba1c_pairs.csv')} | Paired t-test (file nhỏ) |\n`
    + `| [12](/d12/bai-hoc/) | ${dl('capstone_screening_raw.csv')} | Capstone — có lỗi gài |\n`
    + `| [14](/d14/bai-hoc/) | ${dl('assessment_gp_raw.csv')} | Đánh giá cuối khóa — có lỗi gài |\n\n`
    + `> Các ngày còn lại dùng file \`.sav\` **bạn tự tạo** (\`clinic_bp.sav\`, \`clinic_bp_my_clean.sav\`, `
    + `\`capstone_my_clean.sav\`…) — đó là sản phẩm của bạn, không cần tải. Mỗi bài học nói rõ `
    + `file nào ở mục "A. Điểm xuất phát".\n\n`
    + `## 2. Codebooks — tra cứu khi cần\n\n`
    + `Mở khi bài học bảo tra codebook, hoặc khi cần hiểu một biến.\n\n`
    + cb('clinic_bp_codebook.md', '📖 clinic_bp — dataset chính Ngày 01–11') + `\n\n`
    + cb('exercise_hba1c_codebook.md', '📖 exercise_hba1c — Ngày 07') + `\n\n`
    + cb('capstone_screening_codebook.md', '📖 capstone_screening — Ngày 12–13') + `\n\n`
    + cb('assessment_gp_codebook.md', '📖 assessment_gp — Ngày 14') + `\n\n`
    + `## 3. Bản sạch tham chiếu — ⚠️ chỉ mở sau khi đã tự làm xong\n\n`
    + `<details><summary>⚠️ Các file <code>*_clean.csv</code> — mở sớm = tự lộ đáp án làm sạch</summary>\n\n`
    + `Đây là bản sạch **chuẩn** để *đối chiếu* sau khi bạn tự làm sạch file raw xong — `
    + `**không phải** file để bạn import vào bài tập Ngày 03/12/14.\n\n`
    + `- ${dl('clinic_bp_v1_clean.csv')} — đối chiếu sau Ngày 03 (cũng là file Ngày 01 dùng)\n`
    + `- ${dl('capstone_screening_clean.csv')} — đối chiếu sau Ngày 12\n`
    + `- ${dl('assessment_gp_clean.csv')} — đối chiếu sau Ngày 14\n\n`
    + `</details>\n\n`
    + `## 4. Kết quả mong đợi\n\n`
    + `Bảng expected-results đầy đủ (N, mean, p-value…) cố tình **không đặt lên trang này** — `
    + `nó chứa đáp án của các bài kiểm tra. Con số đối chiếu cần thiết đã nằm sẵn trong `
    + `trang Đáp án của từng ngày (mở sau khi đã tự làm).\n`;
  write('du-lieu.md', `---\ntitle: Dữ liệu thực hành\ndescription: Dataset giả lập của lộ trình 14 ngày — tải đúng file theo ngày, tra codebook, đối chiếu bản chuẩn.\n---\n\n${BANNER}${md}`);
}

function syncLesson() {
  let md = read('lessons/M01-research-thinking/lesson.md');
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
  const md = mdxEscapeLt(fixLinks(read('lessons/M01-research-thinking/workbook.md')));
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
  const md = read('lessons/M01-research-thinking/answer-key.md');
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
  let md = fixLinks(read('curriculum/roadmap.md'));
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
  write('tai-lieu/thuat-ngu.md', `---\ntitle: Thuật ngữ Việt–Anh\ndescription: Bảng tra thuật ngữ thống kê song ngữ dùng trong toàn khóa.\n---\n\n${BANNER}${fixLinks(read('curriculum/glossary-vi-en.md'))}`);
  write('tai-lieu/muc-tieu.md', `---\ntitle: Mục tiêu khóa học\ndescription: Kết quả học tập đo được — sau khóa này bạn làm được gì.\n---\n\n${BANNER}${fixLinks(read('curriculum/learning-outcomes.md'))}`);
  write('tai-lieu/ban-do-khai-niem.md', `---\ntitle: Bản đồ khái niệm\ndescription: Các khái niệm thống kê xuất hiện ở module nào.\n---\n\n${BANNER}${fixLinks(read('curriculum/concept-map.md'))}`);
  write('tai-lieu/bat-dau-mac.md', `---\ntitle: Chuẩn bị SPSS trên MacBook\ndescription: Checklist trước khi mở SPSS lần đầu — cần ở M02.\n---\n\n${BANNER}${fixLinks(read('START-HERE-MAC.md'))}`);
}

console.log('Syncing canonical → website/src/content/docs/ ...');
fs.rmSync(OUT, { recursive: true, force: true });
syncTrackRoadmap(); syncTrack(); syncDatasets();
syncLesson(); syncWorkbook(); syncAnswers(); syncRoadmap(); syncDocs();
console.log(`Done — ${changed} file(s) generated.`);
