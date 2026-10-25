# Ngày 04 — Workbook: Tóm tắt theo nhóm

> Làm lần lượt, **không nhìn `answer-key.md`** cho tới khi xong.
> Đầu vào: `p1_B01_HA (1).sav`; Select Cases → All cases; Split File → Analyze all cases.

---

## BT1 — Bài tập gốc: P1-Q08

1. Lọc mẫu **Nam** (`GTinh = 2`) → tần số `HVan`. Ghi số lượng của 6 mức học vấn vào
   bảng trả lời của đề (hoặc chụp/ghi lại bảng).
2. Quay về mẫu đầy đủ → lọc **Tuoi 50–70** → tần số `HVan` lần nữa. Ghi số lượng 6 mức
   và tổng số đối tượng thỏa điều kiện.
3. Điều kiện lọc bạn gõ là gì? Vì sao dùng `>=` và `<=` thay vì `>` và `<`?

{{exercise:P1-Q08}}

> ✅ **Sản phẩm:** 2 bảng tần số `HVan` (Nam; tuổi 50–70) kèm đúng mẫu số · chuỗi điều kiện đã gõ

> **Gợi ý:** nếu bảng thứ hai có Total ≠ 368, kiểm tra lại điều kiện — người 50 và 70 tuổi
> thuộc nhóm theo cách đọc thông thường của đề.

## BT2 — Bài tập gốc: P1-Q09

1. Trả mẫu đầy đủ → **Split File** theo `GTinh` (Compare groups) → tần số `HVan`.
2. Ghi lại hai bảng kết quả; **đối chiếu cột Nam với bảng BT1** — có khớp không?
3. Viết **nhận xét 1–2 câu**: so sánh tỷ lệ học vấn giữa hai giới — nhớ so **%** chứ
   không so số lượng (hai nhóm mẫu khác nhau).

{{exercise:P1-Q09}}

> ✅ **Sản phẩm:** 2 bảng tần số theo giới · nhận xét có so sánh % (không phải số lượng thô)

> **Gợi ý:** nữ có 376 người, nam 244 — nếu so sánh "số người THPT" hai bên mà không chia
> mẫu số sẽ kết luận sai.

## BT3 — Bài tập gốc: P1-Q06

1. (Split File vẫn bật) chạy Descriptives `Tuoi` → ghi n, Mean, SD, Min, Max cho từng giới
   vào bảng đề (hai dòng Nam/Nữ).
2. Tính **Khoảng biến thiên** (Max − Min) mỗi nhóm.
3. *(Cách 2)* tắt Split → Compare Means → Means… → `Tuoi` by `GTinh` — so sánh với
   kết quả vừa ghi.

{{exercise:P1-Q06}}

> ✅ **Sản phẩm:** bảng n·Mean·SD·Range cho Nam và Nữ · biết hai cách lấy cùng kết quả

## BT4 — Luyện thêm: P1-Q41 (reinforcement)

1. Means… → `Tuoi` (Dependent) → `GTinh` (Independent, Layer 1) → **Next** → `HA.GDinh`
   (Independent, Layer 2) → OK.
2. Đọc 4 ô trung bình tuổi; nhận xét nhóm nào già nhất, nhóm nào trẻ nhất.
3. Vì sao bài này dùng Means tiện hơn Split File? (Split sẽ ra mấy bảng?)

{{exercise:P1-Q41}}

> ✅ **Sản phẩm:** bảng 4 ô mean tuổi theo giới × tiền sử HA gia đình

## BT5 — Đố vui (không cần SPSS)

1. Khi nào nên dùng **Select Cases**, khi nào dùng **Split File**? Cho ví dụ từ bài hôm nay.
2. Một bạn chạy xong thấy **mọi** output đều tách đôi — quên thao tác nào? Sửa thế nào?
3. Trong Câu 9, đề bảo "nhận xét" — liệt kê 2 sai lầm phổ biến khi so sánh hai nhóm
   có cỡ mẫu khác nhau.
