# Ngày 05 — Đáp án & giải thích

> Số đếm từ Python cross-check trên `clinic_bp_v1_clean.csv` (`NOT_RUN` trên SPSS).

---

## BT1 — Tự vẽ 2 hình

1. `smoking_status`: mã 0 = **94**, mã 1 = **37**, mã 2 = **29** (tổng 160).
2. `age_years`: gần đối xứng, trải 24–82, tâm quanh ~53 — không có cực trị cô lập đáng ngờ.
3. Boxplot `sbp_baseline` theo nhóm: hai hộp gần nhau (mean nhóm A ≈ 137,8, nhóm B ≈ 140,5 —
   chênh nhỏ). Đây là đặc điểm *lúc nhập* — hai nhóm vốn tương đương, khác biệt chỉ rõ ở `sbp_followup`.

*Lỗi hay gặp:* quên rằng hình 3 là biến **baseline** — nhóm chưa điều trị nên giống nhau là bình thường.
Đọc kỹ tên biến trước khi kết luận.

## BT2 — Chọn đúng biểu đồ

1. **Bar chart** — biến phân loại, đếm/% theo nhóm.
2. **Histogram** — biến định lượng, xem hình dạng phân phối.
3. **Boxplot** (theo nhóm) — biến định lượng (điểm đau) so giữa 2 nhóm.
4. **Scatterplot** — quan hệ giữa 2 biến **định lượng** (tuổi × HA). Sẽ luyện kỹ ở Ngày 10.

*Nguyên tắc:* hỏi "biến X là định tính hay định lượng?" trước khi chọn hình.

## BT3 — Đọc boxplot

1. Median ≈ **138** (vạch giữa hộp).
2. IQR = khoảng hộp: **120–150** (50% giá trị nằm đây).
3. Chấm ở 190 = **giá trị cực trị tiềm năng** — SPSS đánh dấu điểm xa hộp.
   **Không phải** chắc chắn là lỗi: có thể là bệnh nhân thật có HA rất cao.
   Cần tra lại bản ghi đó trước khi quyết định (nguyên tắc Ngày 03).

## BT4 — Tình huống mới

1. Ví dụ: **histogram cholesterol mỗi nhóm** (xem phân phối + cực trị) và **boxplot theo nhóm**
   (so median/IQR lướt qua) — có thể thêm `Means` theo nhóm cho bảng số.
2. Lệch phải mạnh → báo cáo **median [IQR]** thay vì mean ± SD; và khi kiểm định ở Ngày 06+,
   cân nhắc phương pháp ít nhạy với lệch (nonparametric — Ngày 09).
3. **Sai.** Nhìn boxplot chỉ là *mô tả mẫu*; chưa có kiểm định nên không kết luận được
   "khác biệt có ý nghĩa", và "thuốc tốt hơn" là kết luận nhân quả — dữ liệu mô tả không đủ.
   Cần kiểm định + diễn giải thận trọng (Ngày 06–08).
