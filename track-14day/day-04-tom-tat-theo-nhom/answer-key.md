# Ngày 04 — Đáp án & giải thích

> Đọc **sau khi** đã làm xong `workbook.md`. Số liệu tái tính trực tiếp từ
> `p1_B01_HA (1).sav` bằng Python (cross-check, nhãn `NOT_RUN`).

---

## BT1 — P1-Q08

**a) Mẫu Nam (GTinh=2, n=244) — tần số HVan:**

| Trình độ học vấn | Số lượng | % trong nhóm Nam |
|---|---|---|
| Không biết chữ | 48 | 19,7 |
| Tiểu học | 36 | 14,8 |
| THCS | 51 | 20,9 |
| THPT | 67 | 27,5 |
| Trung cấp, cao đẳng | 19 | 7,8 |
| Đại học, sau đại học | 23 | 9,4 |
| **Total** | **244** | 100,0 |

**b) Mẫu tuổi 50–70 (n=368) — tần số HVan:**

| HVan | Số lượng | % |
|---|---|---|
| Không biết chữ | 44 | 12,0 |
| Tiểu học | 75 | 20,4 |
| THCS | 84 | 22,8 |
| THPT | 120 | 32,6 |
| Trung cấp, cao đẳng | 28 | 7,6 |
| Đại học, sau đại học | 17 | 4,6 |
| **Total** | **368** | 100,0 |

3. Điều kiện: `Tuoi >= 50 & Tuoi <= 70` — khoảng đóng gồm cả 50 và 70; dùng `>`/`<`
   thuần sẽ loại người đúng 50 và đúng 70 tuổi (sai đề).

*Lỗi hay gặp:* quên "quay về mẫu ban đầu" (All cases) giữa hai lần lọc → bảng b chạy
trên nhóm **Nam** 50–70 (n nhỏ hơn nhiều) thay vì toàn bộ người 50–70.

## BT2 — P1-Q09

Hai bảng tần số `HVan` theo giới (Split File, Compare groups):

| HVan | Nữ (n=376) | % | Nam (n=244) | % |
|---|---|---|---|---|
| Không biết chữ | 53 | 14,1 | 48 | 19,7 |
| Tiểu học | 93 | 24,7 | 36 | 14,8 |
| THCS | 90 | 23,9 | 51 | 20,9 |
| THPT | 114 | 30,3 | 67 | 27,5 |
| Trung cấp, cao đẳng | 23 | 6,1 | 19 | 7,8 |
| Đại học, sau đại học | 3 | 0,8 | 23 | 9,4 |

2. **Cột Nam khớp hệt BT1a** — kiểm chứng chéo đúng.
3. *Nhận xét mẫu:* "Học vấn của nam cao hơn nữ rõ rệt: tỷ lệ đại học/sau đại học ở nam
   là 9,4% so với 0,8% ở nữ; ngược lại nữ có tỷ lệ tiểu học cao hơn (24,7% vs 14,8%).
   Đáng chú ý tỷ lệ không biết chữ ở nam (19,7%) cao hơn nữ (14,1%) — điểm bất thường
   đáng để ý khi phân tích sâu hơn." *(Nhận xét của bạn có thể khác văn — miễn so sánh
   cùng một con số % giữa hai nhóm.)*

*Lỗi hay gặp:* so sánh số lượng thô (114 THPT nữ > 67 THPT nam → "nữ học cao hơn" — sai
vì nữ nhiều gấp ~1,5 lần nam). Phải so %.

## BT3 — P1-Q06

| Giới tính | n | Mean | SD | Range (Max−Min) |
|---|---|---|---|---|
| **Nam** (GTinh=2) | 244 | 66,51 | 10,74 | 94−41 = **53** |
| **Nữ** (GTinh=1) | 376 | 67,16 | 11,06 | 97−41 = **56** |

- Bảng đề yêu cầu Mean/SD/Khoảng biến thiên — Range **tự tính** từ Min/Max output
  (Descriptives không in Range trừ khi tick trong Options; Means không in Range).
- Nữ già hơn nam trung bình ~0,65 tuổi (67,16 vs 66,51) và biên độ tuổi rộng hơn
  (56 vs 53).
- **Lưu ý hướng mã:** GTinh=1 là **Nữ** (376 người) — trong bảng Means, dòng 1.00 = Nữ.
  Đọc nhầm hướng mã sẽ đảo kết luận.

## BT4 — P1-Q41 (luyện thêm)

Means → Layer1 `GTinh`, Layer2 `HA.GDinh` (1=Có, 2=Không):

| GTinh | Tiền sử HA gia đình | n | Mean Tuoi |
|---|---|---|---|
| Nữ | Có | 185 | 69,02 |
| Nữ | Không | 191 | 65,36 |
| Nam | Có | 188 | 67,15 |
| Nam | Không | 56 | 64,38 |
| **Total** | | 620 | 66,90 |

Nhận xét: trong cả hai giới, người có tiền sử HA gia đình đều già hơn ~3–4 tuổi so với
người không có — hợp lý (HA di truyền/lão hóa). Nhóm nam không tiền sử HA ít nhất (56).

3. Split File chỉ tách được **một** biến nhóm/lần: với 2 biến nhóm phải split theo tổ
   hợp hoặc chạy 2 lần → Means cho bảng 2 chiều gọn trong một lệnh.

## BT5 — Đố vui

1. **Select Cases** = bạn *chỉ* quan tâm một nhóm, cần output của riêng nhóm đó
   (Câu 8: chỉ Nam, chỉ tuổi 50–70). **Split File** = cần **so sánh** các nhóm cùng lúc
   (Câu 9: Nam vs Nữ trên cùng một bảng phân tích). Means = cần bảng *chỉ số* gọn theo
   nhóm (Câu 6, 41).
2. Quên **tắt Split File** → Data → Split File → Analyze all cases → OK.
3. Hai sai lầm: (a) so sánh **số lượng thô** khi mẫu hai nhóm khác nhau (phải so %);
   (b) diễn giải sai hướng mã (GTinh=1 là Nữ chứ không phải Nam).
