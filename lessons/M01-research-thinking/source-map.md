# M01 — Source Map (bản đồ nguồn cho các claim)

> Mục đích: mọi claim khái niệm trong `lesson.md`/`workbook.md` truy được về nguồn, hoặc được ghi nhãn rõ là diễn giải sư phạm / ví dụ giả lập của tác giả.
> **Ngày kiểm:** 2026-10-24 · **Người lập:** Devin (author) — *chưa phải audit độc lập (Pass 4)*.

## Nguồn tham chiếu dùng trong M01

| Source ID | Nguồn | Tác giả/Tổ chức | Trạng thái | URL |
|---|---|---|---|---|
| S03 | Introductory Statistics for the Life and Biomedical Sciences, First Edition (©2020) | **Julie Vu & David Harrington** (derivative của OpenIntro Statistics 3rd, Diez/Barr/Çetinkaya-Rundel) | `VERIFIED_SOURCE` — book page + outline PDF chính thức đã mở (2026-10-24) | https://www.openintro.org/book/biostat/ |
| S05 | SAMPL Guidelines | Lang TA, Altman DG / EQUATOR Network | `VERIFIED_SOURCE` | https://www.equator-network.org/reporting-guidelines/sampl/ |
| BP | Blueprint v1 | Internal | Internal | `SPSS_Medical_Learning_Pack_v1_Blueprint.md` |

**License note (S03):** CC BY-SA 3.0. Bài học **viết lại hoàn toàn bằng lời riêng**, không sao chép đoạn văn/hình/bài tập của sách; ví dụ y khoa là nguyên tác giả. Khi phát hành giáo trình cần ghi công OpenIntro/Vu & Harrington (ghi công đã có trong bảng trên) — không dùng branding/gợi ý endorsement.

## Bản đồ claim → nguồn

Nhãn mức chứng cứ:
- **[SUPPORTED]** khái niệm chuẩn, có trong nguồn đã kiểm ở mức chương/mục.
- **[INTERPRETATION]** diễn giải/lựa chọn sư phạm của tác giả xây trên nguồn — cần Pass 1/3 xác nhận cách trình bày.
- **[SYNTHETIC]** ví dụ/dữ liệu do tác giả tạo — không truy nguồn, nhưng số học đã tái kiểm.
- **[UNVERIFIED]** chưa kiểm chứng đủ — bị chặn dùng làm chứng cho claim.

| # | Claim trong bài | Vị trí | Mức | Nguồn & chỗ trích | Ghi chú |
|---|---|---|---|---|---|
| C1 | Dữ liệu tổ chức thành bảng: dòng = đơn vị quan sát, cột = biến (data matrix) | §3.3–3.4 | [SUPPORTED] | S03, Ch.1 "Intro to Data", §1.2 *Data basics* | Tiêu đề mục kiểm chứng từ outline PDF chính thức; đây là nội dung chuẩn của §1.2 |
| C2 | Phân loại biến: định tính (nominal/ordinal) vs định lượng; mã số không làm biến thành định lượng | §3.5 | [SUPPORTED] | S03, §1.2 *Data basics* | Khung phân loại chuẩn OpenIntro; tên gọi SPSS (Measure) dời sang M03 |
| C3 | Quần thể vs mẫu; mẫu đại diện mới cho phép suy luận | §3.2 | [SUPPORTED] | S03, §1.3 *Data collection principles* | §1.3 bao phủ nguyên tắc thu thập dữ liệu/lấy mẫu; *chi tiết câu chữ trong section chưa đọc nguyên văn — Pass 4 spot-check* |
| C4 | Nghiên cứu quan sát vs thực nghiệm; confounding; association ≠ causation | §3.7 | [SUPPORTED] | S03, §1.3 *Data collection principles* + §1.6 *Relationships between two variables* | Cùng lưu ý spot-check như C3 |
| C5 | Ba loại câu hỏi (mô tả/so sánh/liên quan) | §3.6 | [INTERPRETATION] | Khung phân loại sư phạm của dự án, xây trên S03 §1.6 + Blueprint §3/M01 | Không phải taxonomy nguyên văn của sách; cần reviewer xác nhận đủ cho mức nhập môn |
| C6 | Đoạn mẫu "viết kết quả" nêu thiết kế + giới hạn | §08 | [SUPPORTED] | S05 SAMPL (nguyên tắc báo cáo có trách nhiệm: nêu thiết kế, cỡ mẫu, giới hạn) | Mức tham chiếu xa — SAMPL dành cho bài báo, ở đây mượn nguyên tắc |
| C7 | Bảng `mini_records` (12 hồ sơ), codebook mini, mọi con số §07 | §3.4, §07 | [SYNTHETIC] | Tác giả tạo; naming khớp DS-A (Blueprint §5) để M02 tái sử dụng | Số học tái kiểm bằng script — `qa/M01-author-selfcheck.md` |
| C8 | Cấu trúc 12 mục, quy tắc không-SPSS ở M01, demo 12 hồ sơ | toàn bài | [SUPPORTED-internal] | Blueprint §6, §10 | — |
| C9 | "Hỏi 5 câu trước khi mở SPSS" (§04) | §04 | [INTERPRETATION] | Sư phạm dự án từ nguyên tắc 1–3 Blueprint §1 | — |
| C10 | Kiến thức đạo đức/mật dữ liệu y khoa mức nhập môn | §3.8 | [INTERPRETATION] | Nguyên tắc chung; Blueprint §5 data contract + §8 quyền tư liệu | Không trích guideline đạo đức cụ thể — *đủ cho mức giới thiệu; module sâu hơn có thể cần nguồn riêng (ghi research-backlog nếu cần)* |

## Mục đích sử dụng & giới hạn

- S03 dùng cho **khái niệm** (C1–C4) — phần lab R của sách **không** được dùng (khóa dùng SPSS); điều này đã ghi trong `references/source-validation-report.md`.
- Không trích page number — chỉ trích chương/mục đã thấy trong outline chính thức (§1.2, §1.3, §1.6).
- Không claim nào trong bài phụ thuộc nguồn `PENDING_VERIFICATION`.
- **Hạn chế còn lại cho Pass 4:** đọc nguyên văn §1.3 ISLBS để xác nhận câu chữ về confounding/observational-vs-experimental (C3–C4 đánh dấu chỗ này).
