import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'SPSS Medical Learning Pack',
      defaultLocale: 'root',
      locales: { root: { label: 'Tiếng Việt', lang: 'vi' } },
      customCss: ['./src/styles/custom.css'],
      head: [{ tag: 'script', attrs: { src: '/js/progress.js', defer: true } }],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      sidebar: [
        { label: 'Bắt đầu', items: [
          { label: 'Trang chủ', link: '/' },
          { label: 'Lộ trình 16 tuần', slug: 'lo-trinh' },
          { label: 'Chuẩn bị SPSS trên Mac', slug: 'tai-lieu/bat-dau-mac' },
        ]},
        { label: 'M01 — Tư duy nghiên cứu', items: [
          { label: 'Bài học', slug: 'm01/bai-hoc' },
          { label: 'Bài tập (BT1–BT4)', slug: 'm01/bai-tap' },
          { label: 'Đáp án & giải thích', slug: 'm01/dap-an' },
        ]},
        { label: 'Tài liệu', items: [
          { label: 'Thuật ngữ Việt–Anh', slug: 'tai-lieu/thuat-ngu' },
          { label: 'Mục tiêu khóa học', slug: 'tai-lieu/muc-tieu' },
          { label: 'Bản đồ khái niệm', slug: 'tai-lieu/ban-do-khai-niem' },
        ]},
      ],
    }),
  ],
});
