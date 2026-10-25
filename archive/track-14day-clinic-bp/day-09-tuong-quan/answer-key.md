# Ngày 09 — Đáp án & giải thích

> Cross-check Python trên `clinic_bp_v1_clean.csv` (`NOT_RUN` trên SPSS).

---

## BT1 — `age_years` × `sbp_baseline`

1. Scatterplot: đám mây chéo lên khá rõ — liên hệ dương vừa đến khá mạnh.
2. Kỳ vọng (Python): **r = 0,63 · p < 0,001 · n = 158**; Spearman **ρ = 0,64, p < 0,001**.
   (n=158 vì mỗi biến có 1 ca missing.)
3. Câu mẫu: "Tuổi tương quan dương khá mạnh với huyết áp tâm thu lúc nhập (r = 0,63; p < 0,001;
   n = 158)." *(r² ≈ 0,40 → tuổi "đi cùng" ~40% biến thiên HA nền trong mẫu — vẫn không suy ra
   "tuổi gây tăng HA" theo nghĩa can thiệp.)*

## BT2 — Pearson hay Spearman?

1. **Pearson** — định lượng, gần tuyến tính.
2. **Spearman** — các thang điểm ordinal (0–10, 1–5): chạy trên thứ hạng an toàn hơn.
3. **Spearman** — quan hệ cong + cực trị thu nhập cao kéo Pearson.
4. **Pearson** — điều kiện đẹp.

*Nguyên tắc:* nhìn hình trước — thẳng & sạch cực trị → Pearson; cong/lệch/ordinal → Spearman.

## BT3 — Đọc output

1. Có — p = 0,045 < 0,05.
2. **Yếu** — r = 0,18 (|r| ~0,1 = yếu). p "vừa đủ" < 0,05 vì n=220 lớn.
3. **b đúng** — vì: (a) r nhỏ → liên hệ yếu; (b) tương quan không chứng minh "uống cà phê tăng HA";
   (c) câu a còn ngụ ý hướng nhân quả và độ lớn không đúng thực tế.

## BT4 — Tình huống mới

1. (a) Kiểm tra Measure = Scale, xử lý missing/cực trị; (b) **vẽ scatterplot trước**.
2. Pearson r có thể **nhỏ gần 0 dù quan hệ rõ** (hai nhánh U triệt tiêu nhau) —
   Pearson chỉ bắt liên hệ *tuyến tính*. Làm gì: báo cáo dạng quan hệ phi tuyến, cân nhắc chia
   nhóm giờ ngủ rồi so sánh, hoặc hỏi chuyên gia — không ép Pearson diễn giải quan hệ cong.
