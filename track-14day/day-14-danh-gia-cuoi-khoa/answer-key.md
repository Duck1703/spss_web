# Ngày 14 — Đáp án & chuẩn chấm (mở SAU khi nộp)

> Kiểm chứng Python trên các `.sav` nguồn — **NOT_RUN**. Cho phép sai số làm
> tròn ±0,05. Sai lệch lớn hơn → kiểm lại biến/phép rồi xem mục lỗi cuối.

## Câu 1 — P1-Q24 (15đ)

Biến tạo: `HA.TD_tb=(HA.TD_L1+HA.TD_L2)/2`; `HA.TT_tb` tương tự. n=620.

| Thông số | Mean | SEM | Mode | P30 | Median |
|---|---|---|---|---|---|
| HA.TD_tb | **136,28** | **0,77** | **110,0** | **120,0** | **140,0** |
| HA.TT_tb | **78,17** | **0,30** | **80,0** | **75,0** | **80,0** |

Chấm: Compute đúng +5; mỗi ô sai −1. SEM = SD/√n (19,07/√620=0,77). P30 theo
định nghĩa percentiles mặc định của SPSS (weighted average) = 120,0/75,0.

## Câu 2 — P1-Q26 (15đ)

`HVan3`: {1,2,3}=Dưới THPT (n=371), {4,5}=THPT+ (n=223), {6}=ĐH/SĐH (n=26).

| Nhóm | n | Mean | Median | SD | Variance |
|---|---|---|---|---|---|
| Dưới THPT | 371 | **136,62** | 140,0 | 19,36 | 374,89 |
| THPT, Tcấp, CĐẳng | 223 | **135,01** | 140,0 | 18,66 | 348,21 |
| ĐH, SĐH | 26 | **142,38** | 145,5 | 17,62 | 310,47 |

Chấm: recode đúng (n khớp) +5; bảng +10. Bẫy: gộp sai nhóm (để THPT chung "dưới
THPT") → n sai ngay.

## Câu 3 — P1-Q31 (20đ)

- Điều kiện đúng: `TSu.HA = 0 AND CD.HA >= 3` — chưa có tiền sử (0=Không bị HA
  theo nhãn) nhưng đo hiện tại vào độ 1–3 → **n = 141**.
- Bảng `HVan3` × `CD.HA` (chỉ còn cột 3/4/5):

| | Độ 1 | Độ 2 | Độ 3 |
|---|---|---|---|
| Dưới THPT | 69 | 11 | 2 |
| THPT+ | 49 | 6 | 0 |
| ĐH/SĐH | 0 | 4 | 0 |

- **Phán đoán (5đ khác biệt):** χ²=25,140, df=4, p<0,001 **NHƯNG 5/9 ô expected
  <5 (min 0,06)** → χ² không hợp lệ; không nên báo p như kết luận chắc. Chấp
  nhận: "bảng mô tả cho thấy độ 1 chiếm đa số mọi nhóm học vấn; mẫu con nhỏ →
  cần Fisher/gộp nhóm, không kết luận bằng χ²".

Chấm: điều kiện đúng +7 (mã lỗi hay gặp: `TSu.HA=1` → n=0 vì không ai mã 1);
bảng + n +8; nhận ra expected-count +5.

## Câu 4 — P1-Q33 (15đ)

% mức độ trong nhóm **có** từng bệnh (CD.HA: 1=BT, 2=Tiền THA, 3=Độ1, 4=Độ2, 5=Độ3):

| Bệnh | n có | Độ 1 | Độ 2 | Độ 3 | χ² có dùng được? |
|---|---|---|---|---|---|
| Tieuduong | 196 | 58,2% | 17,9% | 0% | χ²=87,60 p<0,001 — 2/10 ô <5, chấp nhận được (đa số ô đủ); đọc cẩn trọng |
| Timmach | 92 | 58,7% | 28,3% | 0% | χ²=61,13 p<0,001 — 1/10 ô <5 |
| Than | 16 | 50,0% | 18,8% | 0% | **không** — 3/10 ô <5 → chỉ mô tả |
| Gan | 11 | 45,5% | 18,2% | 0% | **không** — 5/10 ô <5 |
| Gut | 9 | 55,6% | 22,2% | 0% | **không** — 5/10 ô <5 |

Nhận xét mẫu: người có ĐTĐ/tim mạch có tỷ lệ THA độ 1–2 cao hơn rõ (p<0,001);
thận/gan/gút mẫu quá nhỏ → chỉ mô tả, không kiểm định.

Chấm: mỗi hàng đúng +2; chỉ ra được giới hạn expected +5.

## Câu 5 — P1-Q43 (10đ)

| Giới tính | n | Min | Max | Mean | SD |
|---|---|---|---|---|---|
| Nam (mã 2) | 244 | 41 | 94 | **66,51** | 10,74 |
| Nữ (mã 1) | 376 | 41 | 97 | **67,16** | 11,06 |
| Tổng | 620 | 41 | 97 | **66,90** | 10,93 |

Chú ý mã `GTinh` ngược thường gặp: **1 = Nữ, 2 = Nam** — bẫy dễ sai nhất của đề.

## Câu 6 — P2-Q08 (10đ)

One-Way ANOVA `htuo ~ otin` (File1): **F = 0,090, df(2,47), p = 0,914** —
tuổi ba tỉnh (QB 35,06 · QT 36,90 · Huế 37,42) đồng đều; kết luận "không có
bằng chứng khác biệt".

## Câu 7 — File & nội quy (15đ)

Kiểm: `p1_work.sav` có 3 biến mới đúng; output có đủ 6 phần; phiếu tự chấm thật.

## Lỗi điển hình → ngày cần ôn

| Lỗi | Ôn lại |
|---|---|
| `TSu.HA=1` ra n=0 | Ngày 07 (đọc nhãn trước khi lọc) |
| Quên trung bình 2 lần đo | Ngày 06 (Compute) |
| Báo p của Q31 như chắc chắn | Ngày 05/08 (expected counts) |
| Đảo nhãn Nam/Nữ | Ngày 01 (mã GTinh ngược) |
| F=0,090 viết "p=0,914 → có khác biệt" | Ngày 10 (đọc Sig.) |
