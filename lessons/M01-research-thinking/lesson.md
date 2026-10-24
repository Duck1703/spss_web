# M01 — Tư duy nghiên cứu y khoa và ngôn ngữ thống kê

> **Module:** M01 · Tuần 1 · Chương trình SPSS Medical Learning Pack v1
> **Đối tượng:** người chưa từng dùng SPSS, gần như chưa có nền thống kê.
> **Lưu ý phạm vi:** module này **không mở SPSS** (cố ý, theo Blueprint §10). Mọi bảng biểu là **dữ liệu giả lập (simulated)** — không phải bệnh nhân thật, không phải bằng chứng lâm sàng.
> **Trạng thái:** DRAFT — chưa review độc lập, chưa HUMAN_APPROVAL.

---

## 01. Tình huống y khoa

Bác sĩ Lan phụ trách một phòng khám quận nhỏ. Cô nhận thấy nhiều bệnh nhân khám định kỳ có huyết áp cao hơn mong đợi, và tự hỏi: *"Bệnh nhân có chỉ số BMI cao có thường có huyết áp cao hơn không? Nếu đúng, mình nên chú ý điều gì khi tư vấn?"*

Để trả lời câu hỏi này có trách nhiệm, bác sĩ Lan không vội mở phần mềm. Trước hết cô cần trả lời được: *câu hỏi nghiên cứu chính xác là gì? Cần đo những thông tin nào? Trên ai? Và dữ liệu thu được cho phép kết luận đến đâu?*

Bài này dạy đúng chuỗi tư duy đó — nền móng cho toàn khóa học.

---

## 02. Kết quả học tập

Sau module này, người học có thể:

1. **Viết** một câu hỏi nghiên cứu y khoa đơn giản có đủ 3 thành phần: quần thể (population), thông tin cần đo (biến), và đơn vị quan sát.
2. **Phân loại** một câu hỏi nghiên cứu thành một trong ba loại: mô tả (descriptive), so sánh (comparative), liên quan (relational/associative).
3. **Phân biệt** quần thể và mẫu (sample); xác định đúng đơn vị quan sát trong một bảng dữ liệu.
4. **Xếp loại** các biến y khoa thường gặp: định tính danh định (nominal), định tính thứ bậc (ordinal), định lượng (quantitative) — kể cả khi biến định tính được mã hóa bằng số.
5. **Nhận diện** một kết luận vượt quá dữ liệu: lấy mối liên quan (association) làm bằng chứng nhân quả (causation), hoặc nói về quần thể khi chỉ có một mẫu nhỏ.

**Tiên quyết:** không có. Chỉ cần đọc bảng và tính phần trăm cơ bản.

---

## 03. Kiến thức nền vừa đủ

### 3.1 Câu hỏi nghiên cứu quyết định dữ liệu cần thu

Một câu hỏi nghiên cứu (research question) tốt trả lời được ba thứ: **nói về ai** (quần thể), **đo cái gì** (biến), và **mỗi quan sát là một đối tượng nào** (đơn vị quan sát).

So sánh:

| Câu hỏi | Đánh giá |
|---|---|
| "Bệnh đái tháo đường có nguy hiểm không?" | Quá mơ hồ — không biết cần đo gì, trên ai, "nguy hiểm" nghĩa là gì |
| "Ở bệnh nhân đái tháo đường type 2 đang điều trị ngoại trú tại phòng khám X, chỉ số HbA1c trung bình là bao nhiêu?" | Đủ rõ: quần thể (bệnh nhân ĐTĐ type 2 ngoại trú, phòng khám X), biến (HbA1c), đơn vị quan sát (mỗi bệnh nhân) |

> ⚠️ **Hiểu lầm hay gặp:** câu hỏi "có hiệu quả không?" luôn cần thêm "hiệu quả đo bằng chỉ số nào, trên nhóm nào, so với cái gì".

### 3.2 Quần thể và mẫu

- **Quần thể (population):** toàn bộ nhóm mà câu hỏi muốn nói về. *Không phải* "dân số cả nước" — quần thể do câu hỏi định nghĩa. Với câu hỏi trên, quần thể là *bệnh nhân ĐTĐ type 2 ngoại trú tại phòng khám X*, có thể chỉ vài trăm người.
- **Mẫu (sample):** nhóm thực sự được đo — một phần của quần thể.

- **Thống kê mô tả (descriptive statistics):** tóm tắt *đúng những gì có trong mẫu* — ví dụ "tuổi trung bình của 12 hồ sơ này là 46".
- **Suy luận thống kê (statistical inference):** dùng mẫu để nói về quần thể — luôn kèm độ bất định (học kỹ ở M05).

> ⚠️ **Phản ví dụ:** 12 hồ sơ ở mục 3.4 là mẫu **giả lập minh họa**, không đại diện cho bệnh nhân Việt Nam. Nếu bạn viết "bệnh nhân Việt Nam có tỷ lệ đái tháo đường 25%" từ bảng này, đó là kết luận vượt quyền.

### 3.3 Đơn vị quan sát — "một dòng là ai?"

**Đơn vị quan sát (observation unit):** đối tượng mà mỗi dòng dữ liệu đại diện. Đây là câu hỏi đầu tiên khi nhìn bất kỳ bảng nào.

| Bảng | Một dòng là... | Đơn vị quan sát |
|---|---|---|
| Hồ sơ phòng khám | một bệnh nhân | bệnh nhân |
| Sổ đo huyết áp theo ngày | một lần đo | lần đo (1 bệnh nhân có thể nhiều dòng!) |
| Báo cáo theo phường | một phường | phường (không phải người) |

Cùng một bệnh viện, bảng "theo lần đo" và bảng "theo bệnh nhân" cho phân tích **khác nhau** — trả lời sai câu này sẽ sai toàn bộ phần sau (gặp lại ở M03, M06).

### 3.4 Bộ dữ liệu mini của bài — `mini_records` (GIẢ LẬP)

> ⚠️ **SIMULATED — dữ liệu giả lập 100%**, tạo ra để luyện tư duy. Mã bệnh nhân là hư cấu (P001–P012), không tương ứng người thật. **Không dùng để kết luận lâm sàng.**

Mỗi dòng = **một bệnh nhân giả lập** (đơn vị quan sát = bệnh nhân):

| patient_id | age_years | sex_code | bmi | sbp_baseline | diabetes_flag |
|---|---|---|---|---|---|
| P001 | 34 | 1 | 22.1 | 118 | 0 |
| P002 | 45 | 2 | 27.4 | 132 | 0 |
| P003 | 29 | 1 | 21.9 | 112 | 0 |
| P004 | 58 | 2 | 30.2 | 145 | 1 |
| P005 | 63 | 1 | 28.9 | 150 | 1 |
| P006 | 41 | 2 | 24.8 | 124 | 0 |
| P007 | 52 | 1 | 31.5 | 138 | 0 |
| P008 | 38 | 2 | 23.6 | 122 | 0 |
| P009 | 67 | 2 | 29.1 | 152 | 1 |
| P010 | 30 | 1 | 20.8 | 110 | 0 |
| P011 | 51 | 2 | 26.3 | 128 | 0 |
| P012 | 44 | 1 | 25.7 | 126 | 0 |

**Codebook mini** (sổ tay của bảng — giải thích từng biến):

| Tên biến | Nghĩa | Đơn vị/Mã | Kiểu biến |
|---|---|---|---|
| `patient_id` | Mã hồ sơ hư cấu | P001…P012 | Định danh — **không phải biến phân tích** (nhưng vẫn giữ trong file: để đối chiếu dòng, truy vết lỗi nhập, sau này nối bảng — sẽ thấy rõ vai trò này ở M03) |
| `age_years` | Tuổi | năm | Định lượng |
| `sex_code` | Giới (mã hóa) | 1 = Nữ, 2 = Nam | Định tính danh định *(dù ghi bằng số)* |
| `bmi` | Chỉ số khối cơ thể | kg/m² | Định lượng |
| `sbp_baseline` | Huyết áp tâm thu lúc nhập | mmHg | Định lượng |
| `diabetes_flag` | Có chẩn đoán đái tháo đường | 0 = không, 1 = có | Định tính danh định (nhị phân) |

### 3.5 Biến và kiểu biến

**Biến (variable):** đặc điểm được ghi lại cho mỗi đơn vị quan sát — mỗi biến là một cột.

| Kiểu | Dấu hiệu | Ví dụ y khoa | Phản ví dụ / cạm bẫy |
|---|---|---|---|
| **Định tính danh định** (nominal) | Chia nhóm, không có thứ tự | nhóm máu A/B/O/AB; giới; có/không bệnh | `sex_code` ghi 1/2 nhưng **không phải định lượng** — không ai tính "giới trung bình = 1,5" |
| **Định tính thứ bậc** (ordinal) | Có thứ tự, nhưng khoảng cách không đều | mức đau nhẹ/vừa/nặng; hài lòng 1–5 sao | "nhẹ→vừa" và "vừa→nặng" không cách nhau cùng một lượng |
| **Định lượng** (quantitative) | Số có ý nghĩa toán học: cộng, trừ, trung bình đều có nghĩa | tuổi, BMI, huyết áp, HbA1c | `patient_id` là số/chuỗi định danh — không phải biến phân tích; `birth_year` là định lượng nhưng "năm sinh trung bình" ít ý nghĩa hơn "tuổi" |

Quy tắc nhận diện nhanh: **hỏi "trung bình của biến này có nghĩa không?"** — nếu không, gần như chắc là định tính.

*(Tên gọi trong SPSS — `Measure`: Nominal / Ordinal / Scale — sẽ học ở M03 khi định nghĩa biến. Bây giờ chỉ cần hiểu khái niệm.)*

### 3.6 Ba loại câu hỏi nghiên cứu

| Loại | Hỏi về | Ví dụ |
|---|---|---|
| **Mô tả** (descriptive) | đặc điểm của một nhóm | "Tỷ lệ đái tháo đường trong 12 hồ sơ là bao nhiêu?" |
| **So sánh** (comparative) | khác biệt giữa ≥2 nhóm | "Huyết áp trung bình nhóm có và không có đái tháo đường khác nhau không?" |
| **Liên quan** (relational/associative) | hai biến thay đổi cùng nhau | "BMI cao có đi kèm huyết áp cao hơn không?" |

### 3.7 Liên quan không phải nhân quả — và vì sao thiết kế quan trọng

**Mối liên quan (association):** hai thứ thay đổi cùng nhau. **Nhân quả (causation):** cái này *gây ra* cái kia. Association **không suy ra** causation.

**Ví dụ phản biện trong bảng trên:** 3 bệnh nhân có `diabetes_flag=1` có huyết áp trung bình 149 mmHg, cao hơn 9 người còn lại (123 mmHg). Nhưng nhóm này cũng **già hơn nhiều** (trung bình 62,7 tuổi so với 40,4) và **BMI cao hơn**. Tuổi ở đây là một **yếu tố nhiễu (confounder)** — biến thứ ba có thể giải thích một phần mối liên quan. Lưu ý phạm vi: bảng này **đủ để mô tả chính 12 hồ sơ này** (ai cao hơn, bao nhiêu mmHg), nhưng quá nhỏ và không đại diện để nói gì về quần thể bệnh nhân hay suy ra khuyến nghị lâm sàng.

**Phản ví dụ kinh điển:** người uống nhiều cà phê có tỷ lệ mất ngủ cao hơn. Cà phê gây mất ngủ? Có thể — nhưng cũng có thể: (a) người mất ngủ uống nhiều cà phê hơn để tỉnh (**nhân quả ngược**); (b) người làm việc căng thẳng vừa uống nhiều cà phê vừa khó ngủ (**yếu tố nhiễu**). Dữ liệu quan sát thuần túy không tự phân biệt được 3 khả năng này.

**Thiết kế nghiên cứu quyết định mức kết luận cho phép:**

| Thiết kế | Đặc điểm | Kết luận cho phép |
|---|---|---|
| **Quan sát** (observational) | Chỉ đo/ghi nhận, không can thiệp | Liên quan là kết luận trực tiếp. Nhân quả **không tự có** — nhưng *có thể* được lập luận nếu thiết kế, giả định và phân tích xử lý được nhiễu (chi tiết ngoài phạm vi M01) |
| **Thực nghiệm** (experimental, ví dụ thử nghiệm ngẫu nhiên RCT) | Nhà nghiên cứu *chủ động* phân nhóm can thiệp, lý tưởng là ngẫu nhiên | Chuẩn được ưu tiên cho hiệu quả can thiệp — nhưng không phải con đường duy nhất để nghiên cứu nhân quả |

> 📌 **Phát biểu cần nhớ đúng:** *"Chỉ có mối liên quan thì chưa chứng minh nhân quả"* — **không phải** *"nghiên cứu quan sát không bao giờ nói được nhân quả"*. Nhiều câu hỏi y khoa không thể ngẫu nhiên hóa (ví dụ không thể cố tình cho trẻ phơi nhiễm chì để xem hại thần kinh — phi đạo đức); khi đó người ta vẫn suy luận nhân quả từ dữ liệu quan sát nhờ thiết kế và phân tích thích hợp (xử lý yếu tố nhiễu, mô phỏng "thử nghiệm mục tiêu"...). Ở bảng `mini_records` này chưa có thiết kế/phân tích như vậy — nên **từ bảng này không thể nói đái tháo đường gây tăng huyết áp**, chỉ nói được hai thứ *đi cùng nhau trong 12 hồ sơ*.

**Checklist phát hiện kết luận vượt quyền:**
1. Câu kết luận có từ nhân quả ("gây", "làm tăng", "ngăn được") trong khi dữ liệu chỉ cho thấy liên quan thuần túy (không có thiết kế/phân tích xử lý nhiễu)?
2. Nói về quần thể lớn khi chỉ đo một mẫu nhỏ/không đại diện?
3. Bỏ qua yếu tố thứ ba hiển nhiên (tuổi, bệnh nền, thuốc đang dùng)?
4. Tóm tắt trong mẫu bị phát biểu như chân lý lâm sàng?
5. Tính một chỉ số khi **thiếu tử số hoặc mẫu số** (ví dụ chưa biết bao nhiêu người bị sốt, bao nhiêu người được theo dõi đủ)?

### 3.8 Codebook và đạo đức dữ liệu — vì sao quan trọng ngay từ đầu

- **Codebook** = "giấy khai sinh" của bộ dữ liệu: tên biến, ý nghĩa, đơn vị, mã hóa, quy ước missing. Không có nó, `sex_code=1` sẽ là bí ẩn cho người khác (và cho chính bạn sau 3 tháng).
- **Đạo đức dữ liệu y khoa:** dữ liệu bệnh nhân thật là thông tin nhạy cảm — cần sự đồng ý, giấu danh tính, và cơ sở pháp lý. Trong khóa này **chỉ dùng dữ liệu giả lập có nhãn SIMULATED** hoặc dữ liệu công khai hợp lệ; tuyệt đối không dùng hồ sơ bệnh nhân thật khi chưa có thẩm quyền.

---

## 04. Câu hỏi chọn phương pháp — trước khi mở SPSS

Ở module này chưa có "phép kiểm định" để chọn — nhưng thói quen hỏi đúng câu bắt đầu từ đây. Trước khi đụng bất kỳ phần mềm nào, tự hỏi:

1. **Câu hỏi của tôi thuộc loại nào?** (mô tả / so sánh / liên quan) → quyết định cần những biến nào.
2. **Đơn vị quan sát là gì?** → quyết định "một dòng là ai" trong bảng dữ liệu.
3. **Từng biến thuộc kiểu nào?** → quyết định chỉ số và phép phân tích hợp lệ sau này (M04–M11).
4. **Dữ liệu từ thiết kế quan sát hay thực nghiệm?** → quyết định trần kết luận được phép.
5. **Tôi muốn mô tả mẫu hay suy luận quần thể?** → quyết định có cần công cụ suy luận (M05+).

> 🎯 Với người mới, phần khó nhất của một phân tích thường là trả lời đúng 5 câu này trên giấy — phần bấm menu trên SPSS chỉ là bước thực thi sau đó, và sẽ cho kết quả **sai** nếu tư duy phía trước chưa rõ.

---

## 05. Mac walkthrough — KHÔNG ÁP DỤNG

Module M01 cố ý không mở SPSS (Blueprint §10: "không cho người học dùng `Analyze` khi chưa hiểu biến"). Phần thao tác trên MacBook bắt đầu ở **M02**.

*Nếu bạn nóng lòng:* đọc trước `../../START-HERE-MAC.md` để biết cần chuẩn bị gì — nhưng chưa cần cài hay mở SPSS.

## 06. SPSS Syntax — KHÔNG ÁP DỤNG

Không có syntax trong M01. Syntax được giới thiệu từ M03 sau khi quen giao diện.

## 07. Đọc kết quả (Output)

> Phần "Output của SPSS": **không áp dụng** — chưa có output phần mềm. Trạng thái kỹ thuật: `NOT_APPLICABLE` (không phải `NOT_RUN` — vì không có gì để chạy).

Ở M01, "kết quả" là các con số **tính tay từ bảng 12 hồ sơ giả lập** — và mỗi con số phải gắn với một câu hỏi + đơn vị:

| Câu hỏi | Chỉ số | Kết quả (tính tay — đã kiểm lại) | Đơn vị |
|---|---|---|---|
| Tuổi trung bình của 12 hồ sơ? | mean(`age_years`) | **46,0** | năm |
| Tỷ lệ có đái tháo đường? | đếm `diabetes_flag=1` / 12 | **3/12 = 25,0%** | % (trong mẫu) |
| Huyết áp tâm thu trung bình? | mean(`sbp_baseline`) | **129,8** | mmHg |
| Nhóm có ĐTĐ vs không: huyết áp TB? | mean SBP theo nhóm | **149,0 vs 123,3** | mmHg |
| Câu hỏi mở đầu của bác sĩ Lan: nhóm BMI cao (≥26) vs BMI thấp (<26): huyết áp TB? | mean SBP theo nhóm BMI | **140,8 vs 118,7** | mmHg |

Quay lại câu hỏi mở bài — *"bệnh nhân BMI cao có huyết áp cao hơn không?"*: đây là câu hỏi loại **liên quan**, và trong 12 hồ sơ này câu trả lời mô tả là *có đi kèm* (140,8 vs 118,7 mmHg). Nhưng để ý: nhóm BMI cao cũng **già hơn hẳn** (trung bình 56,0 vs 36,0 tuổi) — tuổi lại là yếu tố nhiễu tiềm năng, nên ta vẫn không thể nói "BMI cao gây huyết áp cao" từ bảng này.

Lưu ý cách đọc: "149,0 mmHg vs 123,3 mmHg" chỉ là **mô tả trong 12 hồ sơ giả lập này** — không phải khẳng định về bệnh nhân nói chung, và càng không phải "đái tháo đường gây tăng huyết áp" (xem lại 3.7: nhóm ĐTĐ già hơn hẳn).

## 08. Viết kết quả y khoa — đoạn mẫu

> *"Bộ dữ liệu giả lập gồm 12 hồ sơ bệnh nhân ngoại trú (đơn vị quan sát: bệnh nhân). Tuổi trung bình 46,0 năm; 3/12 hồ sơ (25,0%) có chẩn đoán đái tháo đường. Huyết áp tâm thu trung bình 129,8 mmHg; nhóm có đái tháo đường cao hơn nhóm còn lại (149,0 vs 123,3 mmHg). Đây là **mô tả của một mẫu giả lập nhỏ**, từ **thiết kế quan sát** — không suy ra cho bất kỳ quần thể nào và **không chứng minh quan hệ nhân quả**; nhóm đái tháo đường đồng thời có tuổi và BMI cao hơn (yếu tố nhiễu tiềm năng)."*

Nhận thấy cấu trúc: *thiết kế → chỉ số kèm đơn vị → giới hạn*. Đây là thói quen viết sẽ theo bạn đến M12.

## 09. Khi gặp lỗi — 5 tình huống hay gặp (và cách sửa)

| Tình huống | Vì sao sai | Sửa thế nào |
|---|---|---|
| "`sex_code` là số → định lượng" | Mã hóa không đổi bản chất biến; "giới trung bình" vô nghĩa | Hỏi "trung bình có nghĩa không?" — xem 3.5 |
| "Tỷ lệ ĐTĐ 25% → người VN có 25% ĐTĐ" | Mẫu 12 hồ sơ giả lập, không đại diện | Chỉ mô tả "trong mẫu này"; suy luận cần công cụ M05 |
| "Nhóm ĐTĐ huyết áp cao hơn → ĐTĐ gây tăng huyết áp" | Dữ liệu quan sát + confounder (tuổi, BMI) | Kết luận dừng ở "liên quan trong mẫu" — 3.7 |
| Đếm `patient_id` như một biến phân tích | Mã định danh không chứa thông tin đo | Đánh dấu "định danh" trong codebook — 3.4 |
| "Một dòng = một lần đo" khi bảng là theo bệnh nhân | Nhầm đơn vị quan sát → sai mọi tỷ lệ | Hỏi "một dòng là ai?" trước khi đếm — 3.3 |

## 10. Tự làm không nhìn hướng dẫn

Đóng bài học lại, mở `workbook.md` và làm **BT4** — một tình huống hoàn toàn mới (phòng khám tiêm chủng). Nếu BT4 làm được mà không lật lại bài → bạn đã nắm M01.

## 11. Checkpoint

Tự hỏi (trả lời bằng lời, không nhìn trên):

1. Vì sao phải viết câu hỏi nghiên cứu *trước* khi thu dữ liệu?
2. `sex_code` ghi 1/2 — vì sao vẫn là biến định tính? Cho một ví dụ tương tự khác.
3. "Mẫu" và "quần thể" trong câu hỏi của bác sĩ Lan (mục 01) là gì?
4. Nêu 2 lý do kết luận "đái tháo đường gây tăng huyết áp" từ bảng mini là không hợp lệ.
5. Từ một nghiên cứu quan sát, khi nào có thể lập luận nhân quả — và vì sao mối liên quan thuần túy thì chưa đủ?

## 12. Đáp án & bằng chứng

- Đáp án đầy đủ + giải thích: `answer-key.md` (checkpoint + workbook BT1–BT4).
- Các con số ở mục 07 đã **tái tính độc lập bằng script** (xem `qa/M01-author-selfcheck.md`, mục kiểm số học) — tính từ chính bảng trong bài, không dùng SPSS.
- Nguồn khái niệm: `source-map.md` — chủ yếu OpenIntro ISLBS Ch.1 (Vu & Harrington, 2020, CC BY-SA 3.0); không sao chép nguyên văn, ví dụ y khoa do tác giả tạo.

---

*Sang **M02 — SPSS trên MacBook**: bạn sẽ đưa chính bảng 12 hồ sơ này vào SPSS lần đầu — nhập tay, lưu `.sav`, mở lại. Lúc đó "biến", "đơn vị quan sát" sẽ thành những cột và dòng thật trên màn hình.*
