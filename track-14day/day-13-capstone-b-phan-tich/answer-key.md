# Ngày 13 — Đáp án mẫu: Capstone B (P2-TH3 phân tích & báo cáo)

> Kiểm chứng Python trên `File5_Phan2.sav` — **NOT_RUN**. Báo cáo của học viên
> không cần trùng từng chữ — đủ cấu trúc + số đúng + giới hạn là đạt.

## Bảng 1 — Mô tả (n=296, missing=0)

| Đặc điểm | Giá trị |
|---|---|
| Tuổi | 66,80 ± 8,14 (47–91) |
| Khám_TT dương | 185 (62,5%) |
| Siêu_âmTT dương | 142 (48,0%) |
| PSA | 8,81 ± 17,05 — **median 5,80**, max 221 → lệch phải |
| Thetich | 35,86 ± 17,54 ml |
| Sinhthiet dương | **95 (32,1%)** |

## Bảng 2 — Theo Sinhthiet

| Biến | Âm (n=201) | Dương (n=95) | Kiểm định | p |
|---|---|---|---|---|
| Khám_TT dương | 27 (13,4%) | 68 (71,6%) | χ²=4,920 | 0,027 |
| Siêu_âmTT dương | 34 (16,9%) | 61 (64,2%) | χ²=14,779 | <0,001 |
| Tuổi | 66,64±8,27 | 67,14±7,88 | t=−0,488 (pooled; Levene 0,217) | 0,626 |
| PSA | 5,63±5,44 | 15,55±27,96 | **t=−3,426 (Welch; Levene<0,001)** | **0,0009** |
| Thetich | 37,44±18,93 | 32,51±13,68 | **t=2,542 (Welch; Levene 0,033)** | **0,012** |

PSA theo nhóm (tùy chọn): dương tính 14,4% (<4) / 34,8% (4–10) / 41,4% (10–20) /
78,9% (>20); χ²=33,684, df=3, p<0,001.

## Báo cáo mẫu (đối chiếu cấu trúc)

> 296 bệnh nhân nghi ung thư tuyến tiền liệt (tuổi 47–91, TB 66,8); 32,1% sinh
> thiết dương tính. Nhóm dương có tỷ lệ khám trực tràng dương cao hơn (71,6% vs
> 13,4%, p=0,027) và siêu âm trực tràng dương cao hơn (64,2% vs 16,9%, p<0,001).
> PSA cao hơn rõ ở nhóm dương (15,55 vs 5,63; Welch p<0,001) nhưng phân phối lệch
> phải (median 7,3 vs 4,7). Tuổi không khác (p=0,63); thể tích tuyến nhóm dương
> nhỏ hơn (32,5 vs 37,4 ml, p=0,012). Tỷ lệ dương tính tăng theo nhóm PSA
> (14%→79%). **Kết luận: PSA, khám TT, siêu âm TT liên quan đến kết quả sinh
> thiết; cắt ngang một trung tâm → chỉ kết luận liên quan.**

## Checklist chấm tự đánh giá

- [ ] Số liệu đúng (cho phép làm tròn khác 1–2 chữ số thập phân).
- [ ] Đọc đúng dòng t-test theo Levene (PSA & Thetich = Welch).
- [ ] Có nhận xét phân phối PSA.
- [ ] Có câu giới hạn; không viết "gây ra/chứng minh".

## Lỗi hay gặp

- Đọc nhầm dòng pooled của PSA/Thetich (Levene đã <0,05).
- Ghi "PSA trung bình 15,55" mà bỏ cảnh báo sd=27,96.
- Copy nguyên output SPSS vào báo cáo thay vì viết lại thành câu.
- Quên lưu file output trước khi đóng SPSS.
