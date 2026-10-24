# TASK02 Readiness Assessment — Đánh giá sẵn sàng cho Task 03

- **Ngày:** 2026-10-24 · **Người đánh giá:** Devin · **Tính chất:** đánh giá kỹ thuật có bằng chứng — quyết định cuối thuộc con người.
- **Bằng chứng nền:** `reviews/TASK01-evidence-reverification.md`, `references/source-validation-report.md`, `project-control/MAC-SPSS-PREFLIGHT.md`.

## Đánh giá theo tiêu chí

| Tiêu chí | Kết quả | Bằng chứng |
|---|---|---|
| Workspace integrity | ✅ TỐT | Root `D:/spss` đúng; Blueprint hash khớp `cdb0b973…`; 53 file tracked, 0 untracked, 0 secrets, 0 symlink, git clean, không remote, không root lồng; rules ngoài (SpeakMinto/spendwise) không cấm `D:\spss` theo phân tích precedence |
| Curriculum consistency | ✅ TỐT | Roadmap/outcomes/concept-map khớp Blueprint: đủ 12 core + 3 ext, đúng tuần, đúng gates, đúng điều kiện extension; không phình scope |
| Academic source reliability | ✅ KHÁ (có ghi chú) | 10 dòng `VERIFIED_SOURCE` + 2 `PENDING_VERIFICATION` (S01 portal — có đường PDF kiểm chứng; S11 SPCR — dữ liệu gián tiếp) + 1 `SUPERSEDED` (S10 → S10a+S10b verified). Lỗi attribution S03 đã sửa |
| Beginner-level foundations | ✅ TỐT | Glossary Việt–Anh M01–M05 phạm vi, concept-map kiểm soát tiên quyết, QA 5-pass + rubric + pilot protocol đã vận hành hóa |
| M01 production readiness | ✅ SẴN SÀNG | Không phụ thuộc SPSS (Blueprint §10); nguồn chính S03 `VERIFIED_SOURCE` + license CC BY-SA 3.0 đã rõ; production-plan đầy đủ 10 mục; dataset mini chỉ là bảng inline — quyết định được ở LEARNING_DESIGN |
| M02–M03 preparation readiness | ⚠️ MỘT PHẦN | M02: soạn được nhưng thao tác `NOT_RUN` cho tới khi có phiếu preflight + máy QA SPSS 32; SPCR cần mở trình duyệt chốt macOS. M03: thiết kế dataset/codebook/logic chuẩn bị được ngay; thao tác/output cần runtime riêng |
| Environment blockers | ⚠️ CÓ, PHÂN VÙNG RÕ | (1) Phiếu preflight chưa điền — cần học viên/owner; (2) Không có SPSS/macOS trong workspace → Pass 2 phải ra ngoài; (3) SPCR + S01 portal JS-gated → cần trình duyệt thật. **Không blocker toàn cục** — chỉ chặn tiêu chí chấp nhận liên quan môi trường |
| QA readiness | ✅ TỐT | Lifecycle 9 trạng thái + exit criteria, finding schema, rubric 100/85, BLOCKER list, pilot protocol — đủ vận hành; chưa có người pilot (ghi nhận, không chặn M01 drafting) |

## Verdict

**`READY_WITH_LIMITATIONS`**

Căn cứ:
- M01 có thể vào `SOURCE_RESEARCH` → `DRAFTING` ngay khi owner duyệt: không cần SPSS, nguồn đủ, plan đủ.
- M02–M03 có thể chuẩn bị nội dung không-runtime (thiết kế, logic, codebook, dataset design) nhưng **mọi thao tác/output SPSS giữ `NOT_RUN`** cho tới khi: (a) phiếu preflight được điền, (b) SPCR xác nhận trực tiếp bằng trình duyệt, (c) Pass 2 chạy trên Mac có SPSS 32.
- Không phát hiện BLOCKER/MAJOR nào từ Task 01; 3 MINOR + 4 NOTE (xem reverification report).
- Điều kiện để nâng verdict cho toàn khóa: phiếu `MAC-SPSS-PREFLIGHT.md` được điền + SPCR chốt + ít nhất 1 máy Mac QA có SPSS 32 + license phù hợp.

## Điều kiện tiên quyết đề xuất cho Task 03 (không thực thi ở đây)

1. Owner duyệt báo cáo Task 02 + phạm vi ủy quyền (đề xuất: chỉ M01, hoặc M01 + phần không-runtime của M03).
2. Không yêu cầu SPSS cho M01 (Blueprint §10); M02/M03-runtime chỉ viết khi preflight + SPCR xong.
3. Amendment đề xuất áp dụng khi sửa production-plan M02 được phép: thống nhất "nhập tay 5–6 dòng đầu bảng 12 hồ sơ" (T1-F2).
