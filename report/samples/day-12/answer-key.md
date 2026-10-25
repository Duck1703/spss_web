# Ngày 12 — Đáp án mẫu: Capstone A (P2-TH3 phần chuẩn bị)

> Kiểm chứng bằng Python trên `bai_2/File5_Phan2.sav` — **NOT_RUN**.
> Capstone chấm theo **quy trình đúng**; con số dưới đây để đối chiếu.

## Codebook File5 (đọc từ file)

| Biến | Nhãn trong file | Kiểu | Vai trò |
|---|---|---|---|
| STT | STT BỆNH NHÂN | số nguyên 1–296 | định danh — không phân tích |
| Tuoi | TUỔI | liên tục | nền |
| Khám_TT | KHÁM TRỰC TRÀNG | nhị phân 0/1 | predictor |
| Siêu_âmTT | SIÊU ÂM QUA TRỰC TRÀNG | nhị phân 0/1 | predictor |
| PSA | NỒNG ĐỘ PSA | liên tục | predictor chính |
| Thetich | THỂ TÍCH TUYẾN TIỀN LIỆT | liên tục | predictor |
| Sinhthiet | SINH THIẾT | nhị phân 0/1 | **outcome** (1 = dương tính) |

## Phiếu khám sức khỏe dữ liệu (đáp án)

- **Missing:** 0 trên cả 7 biến — file sạch về khuyết.
- **Miền giá trị:** Tuoi 47–91 (hợp lý); PSA 0,3–**221** (giá trị cực cao nhưng
  khả thi lâm sàng — ngoại lai thật, không phải lỗi gõ); Thetich 3,3–114 ml.
- **Nhị phân:** Khám_TT có=185 (62,5%); Siêu_âmTT có=142 (48,0%);
  **Sinhthiet dương = 95/296 (32,1%)**.
- **Liên tục:** Tuoi 66,80±8,14 (med 67); PSA **8,81±17,05, median 5,80** →
  lệch phải mạnh (mean ≈ 1,5× median, đuôi tới 221); Thetich 35,86±17,54.
- **Kết luận chất lượng:** không cần loại phiếu; cần ghi chú PSA lệch phải → khi
  so sánh theo Sinhthiet nên đọc thêm median / cân nhắc kiểm định vững.

## Kế hoạch phân tích (mẫu)

- **Câu hỏi:** yếu tố nào liên quan đến sinh thiết dương tính trong 296 bệnh
  nhân nghi ung thư tuyến tiền liệt?
- **Outcome:** Sinhthiet (nhị phân). **Không** dùng STT.
- **Bảng 1 mô tả:** % cho 3 biến nhị phân; mean±SD cho Tuoi/Thetich; thêm median
  cho PSA.
- **Bảng 2 theo outcome:** Khám_TT, Siêu_âmTT × Sinhthiet → Crosstabs + χ²;
  Tuoi, PSA, Thetich theo Sinhthiet → independent-samples t (kiểm Levene trước,
  PSA lệch → đọc thêm cảnh giác).
- **Mở rộng tùy chọn:** Recode PSA → nhóm <4/4–10/10–20/>20 → χ² với Sinhthiet.
- **Giới hạn:** cắt ngang, một trung tâm → "liên quan", không "gây ra".

## Lỗi hay gặp

- Đưa STT vào bảng mô tả (định danh, không phải biến y khoa).
- Báo cáo PSA bằng mean±SD mà không nhận xét lệch phải.
- Phân tích trên file gốc thay vì `File5_work.sav`.
- Viết kế hoạch **sau** khi chạy — mất vai trò "kế hoạch".
