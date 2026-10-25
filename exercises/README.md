# exercises/ — Bài tập nguồn (Task 13)

Hai bộ đề thực hành SPSS do chủ dự án cung cấp — **là nền tảng chính** của lộ trình 14 ngày
(exercise-first). Tài liệu bên thứ ba: **chỉ dùng local, không commit/publish**
(`.gitignore` đã chặn `bai_1/`, `bai_2/`); quyền phát hành = `NEEDS_OWNER_VERIFICATION`.

| Thư mục | Đề PDF | Dataset (.sav) | Số câu |
|---|---|---|---|
| `bai_1/` | `Bai thuc hanh SDH P1.pdf` | `p1_B01_HA (1).sav` · `P1_B02 CrossTab (2).sav` · `P1_B03 ROC.sav` · `So_Lieu_NC.sav` | 43 (P1-Q01–Q43) |
| `bai_2/` | `BSNT_Bài TH_Phần 2_Cô Hiền.pdf` | `File1.sav` · `File2_Phan2.sav` · `File3_Phan2.sav` · `File4_Phan2.sav` · `File5_Phan2.sav` | 15 (P2-Q01–Q15) + hoạt động P2-TH3 |

- Ánh xạ câu hỏi ↔ dataset ↔ ngày học: `curriculum/EXERCISE-SOURCE-MAP.md`
- Inventory máy đọc: `curriculum/exercise-inventory.json` (60 bản ghi)
- Số liệu kiểm chứng (Python, NOT_RUN): `curriculum/exercise-verified-stats.md`
- Lộ trình: `curriculum/EXERCISE-FIRST-14-DAY-ROADMAP.md`

**Quy tắc dùng:** không sửa file gốc; mọi biến đổi (Compute/Recode/xóa phiếu) lưu thành
file `*_work.sav` trong thư mục làm việc riêng.
