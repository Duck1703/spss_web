# Teaching template — mẫu bài học chuẩn cho Ngày 04–14

> Mẫu này được rút ra từ bản rebuild Ngày 01–03 (Task 11). Khi rebuild một ngày:
> **copy khung này → điền nội dung → tự chấm theo checklist cuối file.**
> Nguyên tắc cốt lõi: *hiểu vấn đề → xem demo → làm một thao tác nhỏ → kiểm chứng màn
> hình → gỡ lỗi → tự luyện → lưu artifact → ngày sau dùng lại artifact đó.*

## Quy tắc bắt buộc khi viết

1. **Một bước = một thao tác nhỏ.** Không bao giờ viết "Analyze → X → Y → OK" thành một
   câu — mỗi dialog mới mô tả: khung trái là gì, nút ► làm gì, chọn gì, vì sao.
2. **Mọi bước có 3 thành phần:** *làm gì · màn hình mong đợi · nếu sai thì sao.*
3. **File handoff phải tường minh:** mục A nói file nào mở, mục J nói file nào tạo ra
   và ai sẽ dùng nó. Tên file `.sav` không được đổi giữa chừng nếu ngày sau đã tham chiếu.
4. **Artifact trước lý thuyết:** mỗi ngày phải kết thúc bằng thứ sờ được (`.sav`, `.spv`,
   log, bảng) — không phải chỉ "hiểu".
5. **Không leak đáp án:** số liệu đáp án chỉ ở `answer-key.md` (web bọc `<details>`),
   không để trong lesson/workbook. Marker `> ✅ **Sản phẩm:**` một dòng → thành checklist.
6. **Không fake evidence:** chưa chụp được ảnh → viết mô tả màn hình + đánh dấu `[SHOT-n]`
   + thêm dòng vào `screenshot-checklist.md`. Không gọi là "screenshot SPSS".

## Khung lesson.md chuẩn (A–J)

```markdown
# Ngày NN — <tên>

> **Lộ trình:** Practice-first 14 ngày · **Thời lượng:** ~NN phút · **Dataset:** <file>
> **Trạng thái:** DRAFT — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`.

## A. Điểm xuất phát — bạn cần có sẵn gì
- [ ] File `<tên>.sav` tạo ở Ngày NN — *chưa có?* → <đường phục hồi cụ thể>
- [ ] Kỹ năng đã có: <liệt kê những gì ngày trước đã dạy — không giả định hơn>

## B. Tình huống y khoa
<3–5 dòng: ai hỏi, hỏi gì, vì sao phân tích này — nối tiếp câu chuyện phòng khám>

## C. Chỉ cần biết điều này trước
<chỉ khái niệm cần cho thao tác HÔM NAY — mỗi khái niệm ≤4 dòng, có ví dụ trong chính
dataset; khái niệm không dùng hôm nay → đẩy xuống mục K>

## D. Làm theo từng bước
### Bước N — <một thao tác>
- **Bạn đang ở:** <cửa sổ/tab>
- **Làm:** <menu → item → click cụ thể>
- **Màn hình mong đợi:** <mô tả dialog/kết quả> `[SHOT-n]`
- **Vì sao chọn vậy:** <1–2 câu>
- **Nếu sai:** <triệu chứng nhận ra → cách gỡ>

## E. Minh họa & danh sách ảnh cần chụp
| Mã | Ảnh cần | Chụp khi |
(và thêm dòng vào track-14day/screenshot-checklist.md)

## F. Ví dụ hoàn chỉnh
<bảng: hành động → kiểm chứng, từ input tới artifact đã lưu>

## G. Bài tập tự làm
<trỏ tới workbook — tương tự demo nhưng KHÔNG trùng số liệu>

## H. Checkpoint — sản phẩm bạn phải có
- [ ] <file/ảnh/output/log cụ thể, kiểm tra được>

## I. Gỡ rối khi bị kẹt
| Triệu chứng | Nguyên nhân | Cách gỡ |
<ít nhất 4–6 hàng, gồm cả "phá hỏng → mở lại file phòng hờ">

## J. Chuyển giao sang Ngày NN+1
| File | Trạng thái | Ngày mai |
+ kỹ năng mang theo + điều gì thay đổi ngày mai

## K. Đọc thêm (không bắt buộc)
```

## Khung workbook.md chuẩn

- `## BT0 — Tự đối chiếu/ôn lại` nếu ngày đó phụ thuộc artifact ngày trước (bắt buộc khi
  có handoff file): chạy lại 1 lệnh nhỏ trên file cũ để chắc chắn file đúng.
- `## BT1..4`: bài tương tự demo của lesson nhưng đổi biến/bối cảnh; **gợi ý từng nấc**
  (`> **Gợi ý 1:**` dẫn hướng, `> **Gợi ý 2:**` gần như đáp án).
- Marker sản phẩm: `> ✅ **Sản phẩm:** a · b · c` — **một dòng**, item cách nhau bởi `·`.
- Ít nhất 1 BT "tình huống mới" chỉ suy luận trên giấy (chuyển giao khái niệm).

## Khung answer-key.md chuẩn

- Mỗi `## BTn` — đáp án → lý do → *lỗi hay gặp* → cách tự sửa.
- Số liệu lấy từ `datasets/expected-results.md` (`NOT_RUN`) — không tự tính tay.
- Nếu BT0 có đối chiếu file → ghi kết quả tham chiếu đầy đủ.

## Tự chấm trước khi coi là xong

- [ ] Người chưa mở SPSS bao giờ đọc mục D có biết **click gì tiếp theo** ở mọi bước?
- [ ] Mỗi "nếu sai" có cách nhận ra + cách gỡ không?
- [ ] File mở ở A khớp file tạo ở J của ngày trước?
- [ ] Có `[SHOT-n]` nào → đã có dòng tương ứng trong screenshot-checklist.md?
- [ ] Có số liệu nào trong lesson/workbook mà lẽ ra chỉ nên ở answer-key?
- [ ] Marker `> ✅` có ở dạng một dòng?
- [ ] `MAC_SPSS_VERIFICATION_PENDING` còn ở header?
