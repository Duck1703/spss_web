import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'SPSS Medical Learning Pack',
      defaultLocale: 'root',
      locales: { root: { label: 'Tiếng Việt', lang: 'vi' } },
      logo: { src: './src/assets/logo.svg', alt: 'SPSS MLP' },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/tokens.css', './src/styles/custom.css'],
      components: {
        PageTitle: './src/components/PageTitle.astro',
        Pagination: './src/components/Pagination.astro',
      },
      head: [
        { tag: 'script', attrs: { src: '/js/progress.js', defer: true } },
        { tag: 'script', attrs: { src: '/js/spss-guides.js', defer: true } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap',
          },
        },
      ],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      sidebar: [
        { label: 'Bắt đầu', items: [
          { label: 'Trang chủ', link: '/' },
          { label: 'Lộ trình 14 ngày', slug: 'lo-trinh-14-ngay' },
          { label: 'Dữ liệu thực hành', slug: 'du-lieu' },
          { label: 'Chuẩn bị SPSS trên Mac', slug: 'tai-lieu/bat-dau-mac' },
        ]},
        { label: 'Lộ trình 14 ngày — Practice-first', items: [
          { label: 'Ngày 01 · Lần đầu mở SPSS', slug: 'd01/bai-hoc' },
          { label: 'Ngày 02 · Biến và mã hóa', slug: 'd02/bai-hoc' },
          { label: 'Ngày 03 · Làm sạch dữ liệu', slug: 'd03/bai-hoc' },
          { label: 'Ngày 04 · Thống kê mô tả', slug: 'd04/bai-hoc' },
          { label: 'Ngày 05 · Biểu đồ & mô tả theo nhóm', slug: 'd05/bai-hoc' },
          { label: 'Ngày 06 · T-test hai nhóm độc lập', slug: 'd06/bai-hoc' },
          { label: 'Ngày 07 · T-test mẫu ghép cặp', slug: 'd07/bai-hoc' },
          { label: 'Ngày 08 · Bảng chéo & Chi-square', slug: 'd08/bai-hoc' },
          { label: 'Ngày 09 · Tương quan', slug: 'd09/bai-hoc' },
          { label: 'Ngày 10 · Chọn phép phân tích', slug: 'd10/bai-hoc' },
          { label: 'Ngày 11 · Đọc & báo cáo output', slug: 'd11/bai-hoc' },
          { label: 'Ngày 12 · Capstone 1: Chuẩn bị', slug: 'd12/bai-hoc' },
          { label: 'Ngày 13 · Capstone 2: Phân tích', slug: 'd13/bai-hoc' },
          { label: 'Ngày 14 · Đánh giá cuối khóa', slug: 'd14/bai-hoc' },
        ]},
        { label: 'Tham khảo — chương trình 16 tuần', collapsed: true, items: [
          { label: 'Lộ trình 16 tuần (Blueprint gốc)', slug: 'lo-trinh' },
          { label: 'M01 · Bài học', slug: 'm01/bai-hoc' },
          { label: 'M01 · Bài tập (BT1–BT4)', slug: 'm01/bai-tap' },
          { label: 'M01 · Đáp án & giải thích', slug: 'm01/dap-an' },
        ]},
        { label: 'Tài liệu', collapsed: true, items: [
          { label: 'Thuật ngữ Việt–Anh', slug: 'tai-lieu/thuat-ngu' },
          { label: 'Mục tiêu khóa học', slug: 'tai-lieu/muc-tieu' },
          { label: 'Bản đồ khái niệm', slug: 'tai-lieu/ban-do-khai-niem' },
        ]},
      ],
    }),
  ],
});
