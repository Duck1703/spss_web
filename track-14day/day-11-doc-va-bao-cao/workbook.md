# Ngày 11 — Workbook: Đọc & báo cáo output

> Đầu vào: `clinic_bp_my_clean.sav`. Không nhìn `answer-key.md`.

---

## BT1 — Phán xét 3 câu kết quả

Mỗi câu dưới đây lấy từ một "báo cáo" — chỉ ra lỗi và viết lại:

1. "Sau 3 tháng điều trị, thuốc B đã chứng minh hiệu quả giảm huyết áp vượt trội so với thuốc A
   (p < 0,001)."
2. "Chi-square cho thấy đái tháo đường có liên quan đến kiểm soát huyết áp."
3. "Có tương quan giữa BMI và huyết áp (p < 0,001), nên bệnh nhân cần giảm cân để giảm huyết áp."

## BT2 — Bảng nào lên báo cáo?

Output của một phân tích crosstabs có 5 bảng. Đánh dấu ✅ vào báo cáo / ❌ nội bộ:

1. Notes
2. Case Processing Summary
3. Bảng chéo `diabetes_flag` × `bp_controlled` (counts + row %)
4. Chi-Square Tests (đã kiểm tra expected count đủ)
5. Risk Estimate (OR)

## BT3 — Viết đoạn kết quả hoàn chỉnh

Viết đoạn 3–4 câu báo cáo cho phân tích `adherence_score` × `sbp_diff` (Ngày 09):
r = 0,38, p < 0,001, n = 135, và nhớ ghi giới hạn.

## BT4 — Tình huống mới: rà soát báo cáo đồng nghiệp

Đồng nghiệp gửi đoạn: "Paired t-test trên 60 bệnh nhân cho t=2,1, p=0,04. Chúng tôi kết luận
can thiệp mới làm giảm đau rõ rệt và nên áp dụng rộng rãi."

1. Đoạn thiếu thông tin kết quả nào? (ít nhất 2)
2. Phần kết luận quá tay ở đâu? Viết lại câu kết luận vừa tay.
3. Bạn sẽ hỏi lại đồng nghiệp điều gì trước khi tin con số này? (ít nhất 1 câu hỏi)
