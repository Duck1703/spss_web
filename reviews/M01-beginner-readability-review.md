# M01 — Beginner Readability Review (Task 06)

> **Loại:** audit readability bằng AI theo `project-control/BEGINNER-TEACHING-STANDARD.md` (chuẩn mới, áp dụng lần đầu).
> **Giới hạn trung thực:** đây **không phải** pilot với người học thật — chỉ chứng minh điều kiện *cần* về biên tập (Pass 3 "beginner walkthrough" bằng người vẫn `NOT_RUN`).
> **Baseline:** M01 draft-2 post-Task-05 (`34999ed`) → **draft-3** (readability).

## 1. Đoạn ban đầu quá khó / thuật ngữ dùng trước khi giải thích

| Vị trí | Vấn đề theo chuẩn | Đã sửa |
|---|---|---|
| §01 | `BMI` dùng ngay câu mở đầu chưa giải thích (RULE 05) | Thêm gloss 1 câu: chỉ số đo độ mập gầy, kg/m² |
| §3.1 | `HbA1c`, chữ viết tắt `ĐTĐ` dùng mà không giải thích | Thêm note 2 thuật ngữ y khoa ngay sau bảng; định nghĩa viết tắt ĐTĐ |
| §3.2 | "độ bất định" — thuật ngữ mơ hồ | Đổi thành "sai số nhất định mà ta phải nêu rõ" |
| §3.4 codebook | `bmi`, `sbp_baseline` cột "Nghĩa" chưa đủ cho người mới | Gloss "đo độ mập gầy", "con số lớn trong cặp huyết áp" |
| §3.7 | `RCT` là viết tắt trong ngoặc không giải thích; "mô phỏng thử nghiệm mục tiêu" rơi từ trời (jargon nâng cao) | Viết đầy đủ "thử nghiệm ngẫu nhiên có đối chứng (randomized controlled trial, RCT)"; target trial emulation diễn giải đời thường + ghi "chỉ cần biết nó tồn tại" |
| §3.7 checklist #5 | `tử số/mẫu số` dùng không giải thích | Gloss "số người bị / tổng số người được theo dõi" |
| §3.8 | `missing` (tiếng Anh) | Đổi "dữ liệu bị thiếu (missing)" |
| §07 | `mean()` — ký hiệu tiếng Anh | "trung bình cộng (`mean`)"; sửa luôn nhãn "TB" → "trung bình" |
| §12 | `script` — jargon tin học | "một đoạn lệnh máy tính" |
| workbook BT1a | `HbA1c`, `đường huyết đói` chưa gloss trong bài tập | Thêm gloss trong ngoặc |
| workbook BT4 | `tử số/mẫu số` | Thêm gợi ý cách nghĩ trong đề |
| answer-key | "Matthews và cs." (viết tắt hàn lâm); "câu cá" (idiom tối nghĩa) | "các đồng nghiệp"; viết rõ "nhìn số liệu rồi mới nghĩ ra kết luận muốn có" |

## 2. Ví dụ trước/sau

**Trước (§3.7):** *"...mô phỏng 'thử nghiệm mục tiêu'..."* — người mới gặp cụm này không biết đó là gì.
**Sau:** *"...thiết kế lại nghiên cứu quan sát để giống một thử nghiệm ngẫu nhiên hết mức có thể (kỹ thuật này gọi là mô phỏng thử nghiệm mục tiêu; chỉ cần biết nó tồn tại, chưa cần học cách làm)."* — giải thích trước, tên chuyên môn sau, và ghi rõ mức cần hiểu (RULE 02 + 03).

**Trước (§3.1):** bảng dùng `HbA1c` trần. **Sau:** giữ nguyên bảng, thêm đoạn chú giải 2 thuật ngữ y khoa — học viên biết đủ để đọc tiếp, không phải tra ngoài (RULE 08).

## 3. Kiến thức khó vẫn giữ (không lùi về sau — RULE 10)

- **Yếu tố nhiễu (confounder)** ở §3.7: bắt buộc để dạy "liên quan ≠ nhân quả" — giữ, vì đã có ví dụ số liệu thật (nhóm ĐTĐ già hơn 62,7 vs 40,4). Ghi rõ trong chuẩn: giới hạn được giải thích tại chỗ.
- **Quan sát vẫn có thể lập luận nhân quả** (sửa từ Task 05, M01-02): giữ nguyên sắc thái — chỉ làm câu dễ đọc hơn, không làm yếu đi.
- **Mẫu vs quần thể, 3 loại câu hỏi, 4 kiểu biến**: giữ toàn bộ mức chính xác.

## 4. Điểm chỉ kiểm tra được bằng người học thật (chưa chứng minh)

- Đoạn §3.7 vẫn là đoạn nặng nhất bài (association/causation/confounder/RCT trong ~15 dòng) — AI đánh giá "đã đủ gloss", nhưng chỉ pilot mới biết người mới có đọc hết không.
- BT4 dài (6 nhiệm vụ) — mức tải cần thử thật.
- Mật độ bảng nhiều (§3.3, §3.5, §3.6, §3.7, §07) — có thể cần tinh giản nếu pilot cho thấy quá tải.

## 5. Không tái xuất hiện lỗi Task 05

Đã grep kiểm: không còn "8%" bịa; không còn câu nhân quả tuyệt đối; `days_limited` thống nhất; không 80/20%; `smoking_status` vẫn chốt danh định; số học `mini_records` không đổi (không đụng bảng dữ liệu).

## 6. File thay đổi

- **Tạo mới:** `project-control/BEGINNER-TEACHING-STANDARD.md` · `reviews/M01-beginner-readability-review.md` (file này)
- **Sửa readability:** `lessons/M01-research-thinking/lesson.md` (11 chỗ) · `workbook.md` (3 chỗ) · `answer-key.md` (2 chỗ)
- **Control:** `decisions.md` · `progress-log.md` · `project-state.md` · `qa/M01-author-selfcheck.md`

## 7. Trạng thái

M01 **draft-3** — sẵn sàng re-audit độc lập (Pass 1 statistical + Pass 4 source + readability theo chuẩn mới). Pilot thật (Pass 3) vẫn `NOT_RUN`. Không `HUMAN_APPROVAL`, không `READY_FOR_LEARNING`.
