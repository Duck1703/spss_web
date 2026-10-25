# Ngày 01 — Đáp án & giải thích

> Đọc **sau khi** đã làm xong `workbook.md`. Số liệu tái tính trực tiếp từ
> `p1_B01_HA (1).sav` bằng Python (cross-check, nhãn `NOT_RUN` — đối chiếu khi chạy SPSS thật).

---

## BT1 — P1-Q01

1. **620 dòng × 40 biến.** Kiểm tra: cuộn cuối Data View (dòng 620) và Variable View (40 dòng biến).
2. **Nam = 2** (Nữ = 1) — kiểm chứng ở Variable View → dòng `GTinh` → cột **Values**.
   Đây là mã *ngược trực giác* — nếu đoán "nam = 1" bạn sẽ lọc nhầm thành 376 người nữ.
3. Khi `GTinh = 2` được lọc: còn **244 dòng nam**. Sort `Cannang` tăng dần:
   **Cannang nhỏ nhất = 45 kg**, có **4 người**:

   | ID | Cannang | Tuoi |
   |---|---|---|
   | 89 | 45 | 85 |
   | 167 | 45 | 84 |
   | 429 | 45 | 85 |
   | 507 | 45 | 84 |

   Đề hỏi "**những** người" — cần liệt kê đủ cả 4, không chỉ người đầu tiên.
4. Data → Select Cases → **All cases** → OK; đóng không lưu.

*Lỗi hay gặp:* quên bật filter → thấy 35 kg (đó là nữ); gõ nhầm `GTinh = 1` →
toàn nữ (376 dòng); sort giảm dần → dòng đầu là cân nặng *lớn* nhất.

## BT2 — Nhóm Nữ

1. `GTinh = 1` → filter còn **376 dòng**. Sort `Cannang` tăng dần:
   nhẹ nhất là **35 kg**, **1 người** — `ID 320`, 94 tuổi.
2. 376 dòng.

*Nhận xét:* cùng một thao tác, chỉ đổi điều kiện — đây là lý do phải luôn kiểm Values
thay vì nhớ "1 là nam hay nữ".

## BT3 — Sort trên toàn file

1. Người lớn tuổi nhất: **`ID 284` — 97 tuổi, Nữ** (GTinh = 1).
2. Người nhẹ cân nhất toàn file: **`ID 320` — 35 kg, Nữ, 94 tuổi** (trùng BT2 — hợp lý:
   nhẹ nhất toàn file chắc chắn cũng là nhẹ nhất trong nhóm nữ).
3. Không sai — Sort Cases chỉ đổi **thứ tự hiển thị** các dòng, dữ liệu từng ô không đổi.
   (Khác với Select Cases *cũng* an toàn: chỉ che tạm dòng. Cả hai đều không phá hủy;
   thứ phá hủy là Edit → Clear / xóa biến / lưu đè file gốc.)

## BT4 — Nhận file lạ `So_Lieu_NC.sav`

1. Một dòng = **một người trả lời phiếu khảo sát** — suy ra từ `ID` ("ID") và các nhãn
   biến bắt đầu "Ông/Bà…" (một người được hỏi nhiều câu). 360 dòng = 360 người.
2. Có tương đương nhưng **tên khác**: `E26` = "Cân nặng (kg)" ↔ `Cannang`;
   `B8` = "Tuổi" ↔ `Tuoi`; `B7` = "Giới tính" ↔ `GTinh`. *Bài học:* đọc **Label**,
   không đoán theo Name — hai file từ hai nghiên cứu đặt tên khác nhau.
   (Chú ý: `B7` của file này lại mã `1 = Nam, 2 = Nữ` — **ngược với file p1_B01_HA**!
   Một bằng chứng nữa vì sao phải kiểm Values từng file.)
3. **Không có** `NNghiep` (nghề nghiệp) — file này thiếu cả `TTrang.KTe` và nhóm bệnh
   mạn tính. Nghĩa là các câu hỏi đề về nghề nghiệp/kinh tế/bệnh mạn tính **bắt buộc**
   phải dùng `p1_B01_HA (1).sav`; `So_Lieu_NC.sav` chỉ là dataset luyện thêm.

*Cách tự sửa:* mở một file lạ luôn hỏi 3 câu — "một dòng là ai? mã giá trị ghi ở đâu
(Values)? biến nào trong đề bài nằm trong file này?"
