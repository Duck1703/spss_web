# Ngày 12 — Capstone A: khám phá & chuẩn bị File5

> **Lộ trình:** Exercise-first 14 ngày · **Thời lượng:** ~100 phút · **Dataset:** `exercises/bai_2/File5_Phan2.sav`
> **Trạng thái:** READY v1 (Task 16) — thao tác menu `MAC_SPSS_VERIFICATION_PENDING`; số liệu kiểm chứng Python `NOT_RUN`.
> **Bài tập nguồn hôm nay:** **P2-TH3** (Bài thực hành số 3 — phần khám phá & lập kế hoạch).

---

## A. Bài tập gốc — "xử lý, phân tích và tập viết báo cáo"

{{exercise:P2-TH3}}

> **Đọc đề gốc:** `BSNT_Bài TH_Phần 2_Cô Hiền.pdf` trang 4 — "Bài Thực hành Số 3.
> Mở File5_Phan2.sav, Thực hành Xử lý, Phân tích số liệu và tập viết báo cáo liên
> quan đến nghiên cứu." — Đây là bài **mở**: không cho sẵn câu hỏi nhỏ, bạn phải
> tự quyết quy trình. Hai ngày 12–13 chia bài làm đôi.

## B. Mục tiêu ngày 12

Không phân tích vội. Hôm nay chỉ: **hiểu dữ liệu → kiểm tra chất lượng → lập kế
hoạch phân tích**. Sản phẩm cuối ngày là một file work + một "phiếu khám sức
khỏe dữ liệu" — giống khám bệnh trước khi kê đơn.

## C. Dữ liệu cần mở

| Mục | Chi tiết |
|---|---|
| File | `bai_2/File5_Phan2.sav` — **296 dòng × 7 cột** |
| Ngữ cảnh | Nghiên cứu sinh thiết tuyến tiền liệt: bệnh nhân được khám + siêu âm + đo PSA, rồi sinh thiết để xác định ung thư |
| Biến chính | `Sinhthiet` (0/1) = kết quả sinh thiết — biến "kết quả" trung tâm |

**Codebook File5** (đọc từ Variable View — nhãn tiếng Việt có sẵn):

| Biến | Nhãn | Kiểu | Vai trò |
|---|---|---|---|
| `STT` | Số thứ tự bệnh nhân | số | định danh — KHÔNG phân tích |
| `Tuoi` | Tuổi | số (47–91) | biến nền |
| `Khám_TT` | Khám trực tràng | 0/1 | yếu tố lâm sàng |
| `Siêu_âmTT` | Siêu âm qua trực tràng | 0/1 | yếu tố lâm sàng |
| `PSA` | Nồng độ PSA (0,3–221) | số | xét nghiệm chính |
| `Thetich` | Thể tích tuyến (3,3–114 ml) | số | giải phẫu |
| `Sinhthiet` | Sinh thiết (0=âm, 1=dương) | 0/1 | **kết quả** |

## D. Kiến thức cần biết (vừa đủ)

- **Chu trình phân tích thật:** hiểu câu hỏi → đọc codebook → kiểm lỗi → mô tả →
  chọn phép → phân tích → viết kết quả. Các ngày 01–11 dạy từng mắt xích; hôm nay
  nối chúng lại.
- **"Biến kết quả" vs "biến giải thích":** ở File5, câu hỏi nghiên cứu ngầm hiểu
  là "những yếu tố nào liên quan đến kết quả sinh thiết dương tính?" → Sinhthiet
  là outcome; còn lại là candidate predictors.
- **Kiểm tra chất lượng trước phân tích:** missing, giá trị ngoài miền hợp lý,
  phân phối lệch (PSA vọt tới 221 trong khi trung vị ~6 → lệch phải mạnh — dấu
  hiệu cần cẩn thận khi dùng trung bình).
- **Kế hoạch phân tích** viết trước, làm sau: bảng mô tả → bảng so sánh theo
  Sinhthiet → chọn kiểm định phù hợp từng cặp biến.

## E. Thực hành có hướng dẫn

> ⚠️ `MAC_SPSS_VERIFICATION_PENDING`

### Bước 1 — Lập bản sao làm việc (nguyên tắc Ngày 06–07)

- **Làm:** mở `File5_Phan2.sav` → **File → Save As → `File5_work.sav`** trong
  `SPSS_Practice/workspace/`. Từ đây mọi thao tác trên bản work; file gốc bất biến.
- **Kiểm chứng:** thanh tiêu đề SPSS hiện `File5_work.sav`.

### Bước 2 — Đọc codebook trên Variable View

- **Làm:** chuyển tab **Variable View** → đọc từng dòng: Name, Type, Label, Values.
- **Ghi:** 7 biến, loại, nhãn, mã 0/1 của ba biến nhị phân (Khám_TT, Siêu_âmTT,
  Sinhthiet) — xác nhận 1 có nghĩa gì (đối chiếu nhãn + đề).
- **Bẫy:** `STT` là số nhưng là định danh — không đưa vào bảng mô tả.

### Bước 3 — Kiểm tra lỗi & missing (kỹ năng Ngày 07)

- **Làm:** Analyze → Frequencies → cả 7 biến → đọc bảng Statistics + tần số.
- **Đọc được:**
  - Missing: **0 trên mọi biến** — dữ liệu sạch về khuyết.
  - `Khám_TT`: 0=111, 1=185 · `Siêu_âmTT`: 0=154, 1=142 · `Sinhthiet`: **âm 201, dương 95** (32,1% dương tính).
  - `Tuoi` 47–91 (hợp lý lâm sàng); `PSA` min 0,3 **max 221** → ngoại lai/lệch phải;
    `Thetich` 3,3–114 ml.
- **Không có lỗi mã** như NNghiep ở Ngày 07 — nhưng PSA lệch mạnh là "vấn đề chất
  lượng" kiểu khác: ghi chú để chọn phép phù hợp ngày 13.

{{guide:d12-explore}}

### Bước 4 — Mô tả nhanh (kỹ năng Ngày 02–03)

- **Làm:** Descriptives cho `Tuoi`, `PSA`, `Thetich`: Tuoi 66,8±8,1;
  PSA 8,81±17,05 (median 5,8!); Thetich 35,86±17,54.
- **Nhận xét ghi vào phiếu:** PSA mean gần gấp đôi median → lệch phải → ngày 13
  ưu tiên báo cáo thêm trung vị / dùng kiểm định vững.

### Bước 5 — Viết kế hoạch phân tích (analysis plan)

Ghi vào workbook — dàn ý chuẩn:

1. **Câu hỏi:** yếu tố nào liên quan đến sinh thiết dương tính?
2. **Bảng 1 — mô tả:** n, % cho 3 biến nhị phân; mean±SD (+median cho PSA) cho 3
   biến liên tục.
3. **Bảng 2 — theo Sinhthiet:** so sánh từng biến giữa âm/dương:
   - nhị phân (Khám_TT, Siêu_âmTT) → Crosstabs + χ² (Ngày 05);
   - liên tục (Tuoi, PSA, Thetich) → independent t + Levene (Ngày 09);
   - tùy chọn: PSA chia nhóm (<4, 4–10, 10–20, >20) × Sinhthiet → Recode + χ²
     (Ngày 06+05).
4. **Giới hạn:** mẫu một bệnh viện, cắt ngang → kết luận "liên quan", không "gây ra".

## F. Mô phỏng SPSS

Một mô phỏng: Variable View của File5 (đọc codebook) + bảng Frequencies đầu ra
với missing=0 và phân bố nhị phân.

## G. Bài tập tự làm

Mở [workbook](/d12/bai-tap/): hoàn thành "phiếu khám sức khỏe dữ liệu" và kế
hoạch phân tích — đây là đầu vào bắt buộc của Ngày 13.

## H. Kiểm tra kết quả

- [ ] File `File5_work.sav` đã lưu trong `workspace/`; file gốc nguyên vẹn.
- [ ] Phiếu chất lượng: missing=0; Sinhthiet 95/296 dương (32,1%); PSA max 221 →
  lệch phải, đã ghi chú.
- [ ] Kế hoạch phân tích nêu rõ: biến nào, phép nào, vì sao.

## I. Giải thích đáp án

[đáp án](/d12/dap-an/) — phiếu khám mẫu + kế hoạch phân tích mẫu để đối chiếu
(capstone chấm theo quy trình, không chỉ con số).

## J. Chuyển bài

Ngày 13: thực thi đúng kế hoạch vừa viết — chạy phân tích trên `File5_work.sav`,
đọc output, viết báo cáo 5–8 câu. **Đừng bỏ bước hôm nay**: capstone không cho
làm lại từ đầu.

## K. Đọc thêm (không bắt buộc)

- PSA lệch phải: có thể log-transform hoặc dùng Mann-Whitney thay t-test —
  ngoài chương trình nhập môn; biết *tại sao cần cẩn thận* là đủ (mean bị kéo
  bởi ngoại lai).
