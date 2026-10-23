# Concept Map — Bản đồ phụ thuộc khái niệm

> Mục đích: đảm bảo khái niệm toán/thống kê được giới thiệu **trước** khi cần dùng ở mức nâng cao. Mũi tên `A → B` nghĩa là "B cần A". Reviewer dùng file này để kiểm tra một bài không vô tình yêu cầu kiến thức chưa dạy (Pass 3 — BEGINNER_QA).

## 1. Chuỗi phụ thuộc chính

```text
[Toán nền] số học cơ bản, tỷ lệ %, đọc bảng
        │
        ▼
M01  đơn vị quan sát · kiểu biến · quần thể–mẫu · mô tả/so sánh/liên quan · liên quan ≠ nhân quả
        │
        ├──► M02  bảng dữ liệu: dòng=quan sát, cột=biến · file .sav/.sps/.spv · preflight máy
        │           │
        │           ▼
        │       M03  codebook · missing · mã hóa · measure levels · raw bất biến · làm sạch
        │           │
        ▼           ▼
        M04  tần số/% · mean/SD · median/IQR · phân phối · chọn biểu đồ theo kiểu biến
            │
            ▼
        M05  biến thiên lấy mẫu · CI 95% · giả thuyết/p · effect size · sai lầm I/II · power nhập môn
            │
            ├──────────────► M06  thiết kế độc lập/cặp · giả định t-test · Welch · hiệu số+CI
            │                    │
            │                    ├─────► M07  thứ hạng · Mann–Whitney/Wilcoxon · tham số đích
            │                    │              │
            │                    │              ├─────► M09  omnibus ANOVA/Welch · Kruskal–Wallis · hậu kiểm
            │                    │              │
            │                    └──────────────┘
            │
            ├──────────────► M08  bảng 2×2 · tỷ lệ/OR/RR · Chi-square vs Fisher · expected<5
            │                    │
            │                    ├────────────────────────────► M11  logit · Exp(B) · OR điều chỉnh · EPV
            │                    │                                  │
            ├──────────────► M10  tương quan Pearson/Spearman · B/CI · R² · residual · confounding
            │                    │                                  │
            │                    └──────────────────────────────────┘
            ▼
        M12  capstone: chọn checklist báo cáo (SAMPL/STROBE/CONSORT/STARD) · tái tạo toàn trình
```

## 2. Extension — cần gì trước

| Extension | Cần hoàn thành | Khái niệm mới phải dạy TRƯỚC khi thao tác SPSS |
|---|---|---|
| E01 chẩn đoán/ROC | M08, M10 | sensitivity/specificity/PPV/NPV theo prevalence · ngưỡng quyết định · AUC · STARD |
| E02 sống còn | M05, M08, M10, M11 | censoring · risk set · thời gian-sự kiện · proportional hazards · thiết kế theo dõi |
| E03 nâng cao | Toàn bộ core | cơ chế missing (MCAR/MAR/MNAR sơ bộ) · weights/strata/PSU · vấn đề multiple testing |

## 3. Bảng "khái niệm → nơi dạy → nơi dùng"

| Khái niệm | Dạy lần đầu | Dùng lại ở | Nếu học viên hổng |
|---|---|---|---|
| Kiểu biến (nominal/ordinal/scale) | M01, củng cố M03 | Mọi module; chọn test M06–M11 | Ôn M01 trước khi sửa bài |
| Missing data & mã hóa | M03 | Mọi phân tích | Về codebook/cleaning_log |
| Mean/SD vs median/IQR | M04 | M05–M07, M09 | Ôn M04 phần phân phối |
| CI 95% | M05 | M06, M08, M10, M11 | Quay lại M05 — GATE 2 |
| p-value & sai lầm I/II | M05 | M06–M11 | Quay lại M05 |
| Effect size | M05 | M06, M10, M11 | M05 + mục đọc output của bài đó |
| OR vs RR | M08 | M11, E01 | M08 phần thiết kế nghiên cứu |
| Residual & giả định hồi quy | M10 | M11, E02 | M10 phần kiểm tra mô hình |
| Điều chỉnh nhiễu (đa biến) | M10, M11 | M12, E01–E03 | M10–M11 phần đa biến |

## 4. Quy tắc cho tác giả bài học

1. Một khái niệm chỉ được **dùng** trong bài nếu nó nằm ở module trước trong bản đồ này hoặc được **định nghĩa ngay trong bài** kèm phản ví dụ (Blueprint §1 nguyên tắc 2).
2. Mỗi `lesson.md` phải khai báo tiên quyết ở đầu bài, khớp với bản đồ này.
3. Nếu phát hiện cần đưa khái niệm sớm hơn (ví dụ cần OR trước M08): mở finding `MAJOR` trong `qa/findings-register.md` và đề xuất chỉnh bản đồ qua `project-control/decisions.md` — **không** tự ý chen vào bài.
4. Khi sửa bản đồ, kiểm tra ngược: mọi module phía sau vẫn phải có tiên quyết đủ.
