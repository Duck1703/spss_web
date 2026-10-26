# TASK 21 — Content Findings: D13 Capstone Statistical Inconsistencies

- **Phát hiện trong:** Task 21 (Clinical Editorial B v2 integration), khi kiểm chéo số liệu hiển thị trên trang D13.
- **Phạm vi:** **CHỈ ghi nhận — không sửa nội dung.** Theo yêu cầu task, thống kê y khoa không được âm thầm chỉnh sửa trong đợt tích hợp giao diện; chủ sở hữu cần bằng chứng từ dataset gốc (`exercises/bai_2/File5_Phan2.sav`) trước khi số liệu được tuyên bố đã sửa.
- **Files liên quan:** `track-14day/day-13-capstone-b-phan-tich/lesson.md`, `track-14day/day-13-capstone-b-phan-tich/answer-key.md` (và nội dung generate tương ứng trên `/d13/`).

## F-D13-01 — Bảng mô tả mâu thuẫn bảng chéo (biến Khám_TT)

| Nguồn trong cùng bài | Giá trị |
|---|---|
| Bảng mô tả tổng (answer-key §1 / lesson §93–98) | Khám_TT dương **185 (62,5%)** / n=296 |
| Bảng chéo theo Sinhthiet (answer-key §21 / lesson §57) | âm **27/201 (13,4%)** + dương **68/95 (71,6%)** = **95 dương tính (32,1%)** |

27 + 68 = 95, không thể bằng 185. Một trong hai con số sai (hoặc thuộc phiên bản dataset khác).

## F-D13-02 — Bảng mô tả mâu thuẫn bảng chéo (biến Siêu_âmTT)

| Nguồn | Giá trị |
|---|---|
| Bảng mô tả tổng | Siêu_âmTT dương **142 (48,0%)** / n=296 |
| Bảng chéo theo Sinhthiet | âm **34/201 (16,9%)** + dương **61/95 (64,2%)** = **95 dương tính (32,1%)** |

34 + 61 = 95 ≠ 142. Cùng dạng lỗi với F-D13-01.

## F-D13-03 — χ²/p báo cáo không khớp với số đếm hiển thị

Tính lại χ² từ chính các ô hiển thị (âm 201, dương 95):

| Biến | Ô 2×2 (âm: +/− ; dương: +/−) | χ² tính lại | χ² báo cáo | p báo cáo |
|---|---|---|---|---|
| Khám_TT | (27, 174) / (68, 27) | **≈ 100,08** | 4,920 | 0,027 |
| Siêu_âmTT | (34, 167) / (61, 34) | **≈ 66,21** | 14,779 | <0,001 |

Cặp (χ²=4,920, p=0,027) tự nhất quán với nhau (df=1) nhưng **không tương thích với %/số đếm in ngay cạnh** — với tỷ lệ 13,4% vs 71,6% chênh lệch lớn như vậy, χ² phải ≈ 100 và p ≪ 0,001. Tương tự Siêu_âmTT.

**Giả thuyết có thể:** số % trong bảng chéo đúng (khớp mẫu 201/95) còn hàng tổng 185/142 và/hoặc cặp χ²–p được chép từ một phiên bản phân tích/dataset khác; hoặc ngược lại. Không thể kết luận bên nào đúng mà không chạy lại SPSS trên `File5_Phan2.sav`.

## F-D13-04 — Chuỗi số PSA cần kiểm chứng (độ tin cậy thấp hơn)

- Tỷ lệ sinh thiết dương theo nhóm PSA: 14,4% / 34,8% / 41,4% / 78,9%, χ²=33,684 df=3 p<0,001 — **chưa kiểm chứng được** vì thiếu số đếm từng ô; chỉ ghi nhận cần chạy lại.
- "PSA trung bình nhóm dương cao hơn (15,55 vs 5,63)" — cùng cần kiểm chứng trên dataset.

## Đề xuất xử lý (ngoài phạm vi Task 21)

1. Chạy lại Crosstabs `Khám_TT × Sinhthiet`, `Siêu_âmTT × Sinhthiet`, `PSA_nhóm × Sinhthiet` trên `exercises/bai_2/File5_Phan2.sav`; chụp output SPSS làm bằng chứng.
2. Cập nhật `answer-key.md` + `lesson.md` + `workbook.md` của day-13 theo output thật.
3. Chạy `npm run sync` để regenerate `/d13/`, rồi `node scripts/check-scene-data.mjs`.

## Trạng thái

`OPEN` — ghi nhận cho chủ sở hữu; website hiện **trình bày nguyên văn** số liệu nguồn (không sửa, không che giấu) theo đúng ràng buộc Task 21 §11.
