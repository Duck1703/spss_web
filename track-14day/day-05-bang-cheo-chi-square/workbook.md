# Ngày 05 — Workbook: Bảng chéo & Chi-square

> Làm lần lượt, **không nhìn `answer-key.md`** cho tới khi xong.
> Chú ý mở đúng file cho từng bài và **tắt Weight Cases** khi đổi file.

---

## BT1 — Bài tập gốc: P1-Q05

File: `p1_B01_HA (1).sav`.

1. Crosstabs → `TTrang.KTe` hàng × `GTinh` cột → Cells: Observed + Row % + Column %.
2. Điền bảng 2×2 đầy đủ (Count + % hàng + % cột mỗi ô).
3. Trả lời đề: (a) trong nhóm nghèo/cận nghèo, % nữ và % nam là bao nhiêu?
   (b) trong nhóm nữ và nhóm nam, tỷ lệ hộ nghèo lần lượt là bao nhiêu?
   — ghi rõ mỗi con số là % hàng hay % cột.

{{exercise:P1-Q05}}

> ✅ **Sản phẩm:** bảng chéo 2×2 đủ 3 con số/ô + hai câu trả lời % đúng chiều

> **Gợi ý:** "% theo giới tính" nghĩa là *mẫu số là tổng cột giới tính* — đọc cột %.
> Nếu hai con số bạn ghi cho (b) giống hệt (a) thì bạn đã đọc trùng một chiều.

## BT2 — Bài tập gốc: P1-Q17

Cùng file.

1. Crosstabs `GTinh` × `Tieuduong` + Statistics → **Chi-square** (+ Row %).
   Ghi: tỷ lệ ĐTĐ của nữ và nam; χ² Pearson; df; p; kết luận.
2. Làm lại với `Gan`. Lần này **đọc cả chú thích** dưới bảng Chi-Square Tests —
   có cảnh báo gì về expected count? Khi đó nên đọc dòng kiểm định nào? Ghi p cuối cùng.

{{exercise:P1-Q17}}

> ✅ **Sản phẩm:** hai kết luận có đủ χ²/df/p; câu `Gan` ghi đúng p của Fisher (không phải Pearson)

## BT3 — Luyện thêm: P1-Q18

1. Crosstabs `GTinh` × `TSu.RBia` + Chi-square.
2. Ghi tỷ lệ tiền sử rượu bia của nữ và nam; χ²; p; kết luận (nhận xét tương tự Câu 17).

{{exercise:P1-Q18}}

> ✅ **Sản phẩm:** một kết luận đầy đủ cho Câu 18

## BT4 — Bài tập gốc: P1-Q21

File: **`P1_B02 CrossTab (2).sav`** (4 dòng!).

1. Trước khi phân tích: file có mấy dòng? Mỗi dòng là một người hay một nhóm?
   Phải làm gì để SPSS hiểu đúng? → **Weight Cases** bằng biến nào?
2. Crosstabs `phoinhiem` × `benh` + Row % + Statistics: Chi-square **và Risk**.
3. Ghi: tỷ lệ CTC+ ở nhóm HPV+ và HPV−; χ²; p; **RR**; **OR**; diễn giải RR bằng lời.

{{exercise:P1-Q21}}

> ✅ **Sản phẩm:** bảng 2×2 Total=88 + 4 chỉ số (χ², p, RR, OR) + một câu diễn giải

> **Gợi ý:** nếu bảng chỉ có Total = 4 → quên Weight Cases. Nếu Risk Estimate trống →
> chưa tick **Risk** trong Statistics.

## BT5 — Bài tập gốc: P2-Q01

File: `bai_2/File1.sav` — **tắt Weight trước** (Do not weight cases).

1. Đề hỏi "vị trí chấn thương nặng" và "có nằm viện" — đó là hai biến nào trong file?
   (Đối chiếu codebook trang 2 PDF gói 2: Câu 8 và Câu 9 của phiếu điều tra.)
2. Crosstabs hai biến đó + Chi-square. Bảng mấy hàng mấy cột? n = ?
3. Ghi χ², df, p và kết luận.

{{exercise:P2-Q01}}

> ✅ **Sản phẩm:** bảng 3×2 + kết luận kiểm định đúng cách

## BT6 — Đố vui (không cần SPSS)

1. Tại sao "% nữ trong nhóm nghèo" và "% nghèo trong nhóm nữ" là hai con số khác nhau?
   Nêu tình huống đời thực khi cần con số thứ hai.
2. Khi nào không được tin Pearson Chi-square mà phải đọc Fisher's Exact?
3. Con số RR bạn tính được ở BT4 nghĩa là gì — diễn giải bằng lời cho người không học
   thống kê (không được nói "tăng X%").
4. Một bạn chạy Crosstabs trên `P1_B02` mà không Weight — bảng ra sao, vì sao sai?
