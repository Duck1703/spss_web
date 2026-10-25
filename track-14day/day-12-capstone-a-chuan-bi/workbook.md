# Ngày 12 — Workbook: Capstone A — phiếu khám sức khỏe dữ liệu

> Làm lần lượt, **không nhìn `answer-key.md`** cho tới khi xong.
> File: copy `bai_2/File5_Phan2.sav` → lưu làm việc thành `File5_work.sav`.

---

## BT1 — Lập bản work + đọc codebook

1. Mở `File5_Phan2.sav` → File → Save As → `SPSS_Practice/workspace/File5_work.sav`.
2. Variable View: chép lại bảng 7 biến (tên, kiểu, nhãn, mã giá trị nếu có).
3. Đánh dấu: biến nào là **kết quả (outcome)**, biến nào chỉ là **định danh**?

{{exercise:P2-TH3}}

> ✅ **Sản phẩm:** `File5_work.sav` + bảng codebook tay trong vở

## BT2 — Kiểm tra chất lượng (Frequencies toàn bộ)

1. Frequencies → đưa **cả 7 biến** → đọc cột Missing + bảng tần số.
2. Trả lời trong phiếu:
   - Missing trên từng biến?
   - Khoảng giá trị `Tuoi`, `PSA`, `Thetich` — có giá trị nào ngoài miền hợp lý?
   - Phân bố `Khám_TT`, `Siêu_âmTT`, `Sinhthiet` (đếm + %)?
3. So sánh mean vs median của `PSA` (Descriptives + Frequencies→median) — nhận
   xét hình dạng phân phối.

> ✅ **Sản phẩm:** phiếu "khám sức khỏe dữ liệu" 4 mục (missing / miền giá trị /
> phân bố nhị phân / hình dạng PSA)

> **Gợi ý:** mean ≈ median → gần đối xứng; mean ≫ median → lệch phải (kéo bởi
> giá trị lớn). Xem lại Ngày 03 về trung vị.

## BT3 — Viết kế hoạch phân tích

Điền vào khung (copy vào vở/file Word):

```
Câu hỏi nghiên cứu: ________________________________
Outcome (biến kết quả): __________  Kiểu: nhị phân / liên tục
Bảng mô tả: các biến ________  bằng phép ________
So sánh theo outcome:
  - biến nhị phân ________  → phép ________
  - biến liên tục ________  → phép ________  (kiểm tra gì trước? ________)
Giới hạn kết luận: ________________________________
```

> ✅ **Sản phẩm:** kế hoạch phân tích hoàn chỉnh — sẽ nộp kèm báo cáo Ngày 13

## BT4 — Đố vui (không cần SPSS)

1. Vì sao `STT` không nên xuất hiện trong bảng thống kê mô tả?
2. PSA mean 8,81 nhưng median 5,8 và max 221 — đại lượng nào mô tả "bệnh nhân
   điển hình" tốt hơn? Vì sao?
3. Nếu `Sinhthiet` có 15% missing, bước nào trong kế hoạch bị ảnh hưởng đầu tiên?
