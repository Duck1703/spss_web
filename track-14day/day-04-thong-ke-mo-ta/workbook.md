# Ngày 04 — Workbook: Thống kê mô tả

> Không nhìn `answer-key.md`. Đầu vào: `clinic_bp_my_clean.sav` + `hba1c_pairs.sav`.

---

## BT1 — Bảng 1 mini cho dataset HbA1c

Mở `hba1c_pairs.sav`, chạy Descriptives cho `hba1c_t0` và `hba1c_t3`, rồi viết một "Bảng 1" 2 dòng:

1. n, mean, SD, min, max của `hba1c_t0` và `hba1c_t3`.
2. Viết một câu mô tả bằng lời: "24 bệnh nhân giả lập có HbA1c trung bình …% trước chương trình…".
3. Có biến nào trong file này nên tả bằng n (%) không? Vì sao?

## BT2 — Chọn chỉ số mô tả

Với mỗi biến, chọn cách tóm tắt hợp lý (n và % / mean ± SD / median [IQR]) — giải thích 1 câu:

1. Nhóm máu (A/B/O/AB) của 200 bệnh nhân.
2. Thời gian nằm viện (ngày): phân phối rất lệch phải (đa số 3–7 ngày, một số người 60+ ngày).
3. Cân nặng (kg) của trẻ 10 tuổi, phân phối gần đối xứng.
4. Mức đau (0–10, thang tự chấm) sau phẫu thuật.

## BT3 — Đọc output có missing

Trong `clinic_bp` sạch, bạn chạy Frequencies cho `bp_controlled` và thấy:
`Valid Percent` của "đạt kiểm soát" = 58,4%.

1. 58,4% là % của mẫu số nào — 160 hay 137?
2. Nếu bạn viết "58,4% bệnh nhân đạt kiểm soát huyết áp" mà không ghi chú gì — câu đó sai ở đâu?
3. Viết lại câu đúng.

## BT4 — Tình huống mới: báo cáo khoa

Khoa Hồi sức gửi số liệu 45 ca: tuổi mean 58 (SD 16); `ventilator_days` mean 6,2 (SD 9,8),
min 0, max 41; `discharged_home` = 30/45.

1. Chỉ số nào báo cáo cho `ventilator_days` — mean±SD hay median[IQR]? Vì sao?
2. `discharged_home` là biến gì? Báo cáo bằng cách nào?
3. Viết 2 câu mô tả mẫu này bằng văn phong y khoa (ghi rõ n).
