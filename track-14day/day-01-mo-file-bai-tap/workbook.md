# Ngày 01 — Workbook: Mở file bài tập & đọc dữ liệu

> Làm lần lượt, **không nhìn `answer-key.md`** cho tới khi xong.
> Đầu vào: SPSS đã mở + `exercises/bai_1/p1_B01_HA (1).sav`.
> Bị kẹt → mở **Gợi ý** của đúng câu đó trước, đừng nhảy thẳng vào đáp án.

---

## BT1 — Bài tập gốc: P1-Q01 (không nhìn hướng dẫn)

Đóng mọi file đang mở. Tự làm lại Câu 1 của đề từ đầu:

1. Mở `p1_B01_HA (1).sav`. File có bao nhiêu dòng, bao nhiêu biến?
2. Không nhìn lại bài học: mã giá trị nào của `GTinh` là Nam? Bạn kiểm chứng bằng cách nào?
3. Lọc nhóm Nam và sắp xếp `Cannang` tăng dần. Cân nặng nhỏ nhất là bao nhiêu?
   Có mấy người đạt mức đó — mã số và tuổi của từng người?
4. Trả file về trạng thái đầy đủ (All cases) rồi đóng không lưu.

{{exercise:P1-Q01}}

> ✅ **Sản phẩm:** ghi được số dòng/biến của file · mã Nam đúng (kiểm tra ở Values) · đủ các mã số + cân nặng + tuổi · file gốc không đổi

> **Gợi ý 1** (nếu quên cách lọc): Data → Select Cases → If condition is satisfied → gõ điều kiện → OK.
>
> **Gợi ý 2** (nếu quên mã giới tính): Variable View → dòng `GTinh` → ô cột **Values** → nút `…`.
>
> **Gợi ý 3** (nếu không chắc filter đã bật): dòng bị loại hiện gạch chéo ở cột số dòng;
> thanh trạng thái ghi `Filter On`. Chỉ 244 dòng dùng được khi lọc Nam.

## BT2 — Đổi điều kiện: nhóm Nữ

1. Dùng cùng hai thao tác, tìm những người **Nữ** có cân nặng nhỏ nhất — mã số, cân nặng, tuổi.
2. Khi filter Nữ đang bật, tổng số dòng dùng được là bao nhiêu?

> **Gợi ý:** chỉ đổi con số trong điều kiện `GTinh = …`. Kiểm lại Values nếu không chắc.

## BT3 — Đọc biến mới qua Variable View

Không dùng Select Cases — chỉ dùng **Sort Cases** trên toàn file:

1. Ai là người **lớn tuổi nhất**? Ghi `ID`, `Tuoi`, `GTinh` của người đó.
2. Ai là người **nhẹ cân nhất toàn file**? Ghi `ID`, `Cannang`, `GTinh`.
3. Sau khi sort xong, bảng dữ liệu có bị "sai" không — vì sao Sort được coi là an toàn?

> **Gợi ý:** Sort Cases → chọn `Tuoi` → **Descending** → dòng đầu là lớn nhất.
> Sort chỉ đổi thứ tự hàng, không đổi/xóa dữ liệu nào.

## BT4 — Tình huống: nhận file lạ

Một đồng nghiệp gửi thêm file `So_Lieu_NC.sav` (cùng thư mục `exercises/bai_1/`).

1. Mở file đó. Một dòng đại diện cho ai — bạn biết từ đâu?
2. File có biến nào cùng ý nghĩa với `Cannang`, `Tuoi`, `GTinh` của file chính không?
   (Gợi ý: đọc cột Label ở Variable View, đừng đoán theo tên.)
3. File này có biến `NNghiep` (nghề nghiệp) không? Điều đó nghĩa là gì nếu bài tập mai
   yêu cầu kiểm tra nghề nghiệp?

> **Gợi ý:** đơn vị quan sát suy ra từ ID + nhãn biến (VD: "Ông/Bà…" = một người trả lời).
> Tên biến khác nhau (E26 vs Cannang) không có nghĩa là biến khác nhau về ý nghĩa —
> **Label mới là nơi đọc ý nghĩa**.
