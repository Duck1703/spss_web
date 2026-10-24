# BEGINNER TEACHING STANDARD — SPSS Medical Learning Pack

> **Phạm vi bắt buộc:** toàn bộ nội dung giảng dạy của M01–M12 và E01–E03 (lesson, workbook, answer-key, hướng dẫn SPSS trên Mac, ví dụ, đáp án).
> **Vai trò:** chuẩn biên tập cho tác giả nội dung và cho reviewer. Một bài **không đạt chuẩn này thì chưa xong `DRAFTING`**, dù đã đủ 12 mục cấu trúc theo Blueprint §6.
> **Quan hệ với Blueprint:** chuẩn này **không đổi mục tiêu học thuật** — chỉ quy định *cách truyền đạt*. Kiến thức cốt lõi do Blueprint ấn định không được xóa, nhưng phải được diễn giải để người mới tự học được.
> Quyết định: xem `decisions.md` (áp dụng từ Task 06; M01 là bài đầu tiên được audit theo chuẩn).

## 1. Người học mục tiêu (persona chuẩn)

- Nói tiếng Việt, tự học theo từng bước trên MacBook.
- **Chưa từng dùng SPSS**; gần như chưa học thống kê; không quen thuật ngữ chuyên ngành.
- Học để làm nghiên cứu y khoa — động lực là ứng dụng, không phải lý thuyết.
- Có thể biết hoặc không biết các chỉ số y khoa (BMI, HbA1c, huyết áp tâm thu...).

**Quy ước "không được giả định":** p-value, khoảng tin cậy, phân phối chuẩn, nghiên cứu quan sát, yếu tố nhiễu, hồi quy, và mọi thuật ngữ thống kê chưa được giáo trình giải thích trước đó.

## 2. Nguyên tắc ngôn ngữ

- Câu ngắn, một ý chính mỗi đoạn; tránh câu ghép nhiều tầng.
- Tiếng Việt đời thường đi trước, thuật ngữ đi sau (xem §3).
- Giọng văn: nghiêm túc nhưng gần gũi — **không** học thuật hóa (không viết như bài báo), **không** trẻ con hóa (không đơn giản hóa sai y khoa).
- Cấm viết tắt chưa giải thích (kể cả ĐTĐ, RCT, SPSS lần đầu tiên — SPSS được giải thích một lần ở M02).
- Ưu tiên động từ chỉ hành động của người học: "hãy hỏi", "so sánh", "tính thử" — thay vì "người ta nhận thấy rằng".

## 3. Quy tắc giới thiệu thuật ngữ (RULE 02)

Lần **đầu tiên** một thuật ngữ xuất hiện trong toàn giáo trình (không chỉ trong bài đó), phải theo trình tự:

1. **Tình huống/ví dụ dễ hình dung** → 2. **Giải thích tiếng Việt đơn giản** → 3. **Tên chuyên môn + tiếng Anh trong ngoặc** → 4. Dùng nhất quán về sau.

Mẫu: *"Có thể một yếu tố khác đang ảnh hưởng đến cả hai thứ ta muốn so sánh — ví dụ người già vừa hay bị đái tháo đường vừa hay có huyết áp cao. Yếu tố như vậy gọi là yếu tố nhiễu (confounder)."*

- Thuật ngữ xuất hiện trước đó trong giáo trình → được dùng trực tiếp; nếu lâu qua nhiều module, nhắc lại một câu ngắn.
- **Glossary** (`curriculum/glossary-vi-en.md`) là bảng tra, không thay thế giải thích tại chỗ.
- Thuật ngữ **y khoa** cũng theo quy tắc này (RULE 05): giải thích vừa đủ để hiểu bài thống kê — không biến bài thành khóa y khoa.

## 4. Mức độ giải thích

- Mỗi phần học có **một mục tiêu kiến thức** rõ ràng; khái niệm phụ chỉ giới thiệu ở mức "đủ hiểu ý", kèm ghi chú "sẽ học kỹ ở M…" (RULE 03).
- Khi một khái niệm có điều kiện/ngoại lệ quan trọng → giải thích giới hạn bằng ngôn ngữ đơn giản **ngay tại chỗ**, không hứa "học sau" rồi bỏ đó (RULE 10).
- Không dồn kiến thức nâng cao vào bài nhập môn để "nhìn đầy đủ"; bài nhập môn dạy ít nhưng chắc hơn bài nhập môn dạy nhiều mà loáng.

## 5. Thiết kế ví dụ

- Mọi khái niệm dễ nhầm phải có **đúng một bộ 4**: ví dụ đúng → lỗi người mới hay mắc → vì sao sai → cách tự nhận ra (RULE 06).
- Ví dụ phải gắn với y khoa thật về bối cảnh, giả lập về số liệu (luôn có nhãn `SIMULATED`).
- Dùng lại **cùng một bối cảnh nhân vật/dữ liệu** trong phạm vi một module để giảm tải nhận diện.
- Bảng so sánh chỉ dùng khi thực sự giúp đối chiếu (kiểu biến, thiết kế, loại câu hỏi); không dùng bảng để "trang trí".

## 6. Kiểm soát độ khó

- Trước khi dùng một khái niệm: kiểm tra nó đã được giới thiệu ở module nào (tra `curriculum/concept-map.md`). Chưa từng xuất hiện → giải thích ngay hoặc đổi thứ tự trình bày (RULE 08).
- Không được đòi người học tự tra cứu một kiến thức **là prerequisite bắt buộc**.
- Tăng độ khó trong từng bài: tình huống → khái niệm → ví dụ tay → bài tập nhận biết → bài tập vận dụng → bài tập tích hợp trên tình huống mới.

## 7. Liên kết giữa các module

- Mỗi module nhắc lại **tên + chỗ học** của kiến thức nền (vd: "kiểu biến — đã học M01 §3.5").
- Cuối bài luôn có đoạn nối sang module kế tiếp: người học biết *tại sao* bài sau tồn tại.
- Một khái niệm không được "tái giới thiệu lại từ đầu" ở module sau nếu đã dạy; chỉ ôn bằng một câu + link.

## 8. Cách viết hướng dẫn thực hành SPSS (áp dụng từ M02 trở đi)

Trước mọi chuỗi menu `Analyze → …`, bắt buộc có block trả lời (RULE 07):

1. **Ta đang muốn trả lời câu hỏi nào?**
2. **Vì sao phép phân tích này phù hợp với câu hỏi và kiểu dữ liệu?**
3. **Cách thao tác** (menu/syntax trên Mac).
4. **Đọc output ở đâu, con số nào quan trọng?**
5. **Kết quả này nói được gì và — quan trọng hơn — không nói được gì?**

Cấm viết hướng dẫn dạng "recipe" chỉ liệt kê bước bấm không giải thích.

## 9. Kiểm tra khả năng tự học

Mỗi module phải có ít nhất các bài tập thuộc các kiểu (RULE 09):

- Giải thích một khái niệm **bằng lời của mình**.
- Chọn cách phân loại/phương pháp rồi **giải thích lý do**.
- Phát hiện một cách hiểu sai trong câu phát biểu cho sẵn.
- Vận dụng trên **một tình huống y khoa mới** chưa có trong bài.
- Diễn giải một bảng/kết quả nhỏ.

Mọi bài tập phải **đủ dữ liệu đầu vào** để trả lời; đáp án phải có lý do + lỗi hay gặp + cách tự sửa (không chỉ A/B/C/D). Khi bài tập cố ý kiểm tra "nhận ra thiếu dữ kiện", phải nói rõ trong đề.

## 10. Những cách viết bị cấm / hạn chế

**Cấm:**
- Mở đầu khái niệm mới bằng định nghĩa hàn lâm không có ngữ cảnh.
- Dùng thuật ngữ chuyên ngành/y khoa lần đầu mà không giải thích.
- Khẳng định tuyệt đối sai khoa học ("quan sát không bao giờ suy luận nhân quả", "p<0.05 luôn có nghĩa", "mẫu nhỏ không nói được gì").
- Đánh đổi độ chính xác để có vẻ dễ đọc (RULE 10).
- Trình bày dữ liệu giả lập như bằng chứng lâm sàng; gợi ý khuyến nghị điều trị.
- Viết tắt chưa giải thích; đoạn dày hơn ~6 dòng chứa ≥3 thuật ngữ mới.
- Bịa số liệu/quan sát để bài tập "đẹp" (phải tính được từ dữ kiện đề cho).

**Hạn chế:**
- Ngoặc đôi tiếng Anh: chỉ ở lần đầu giới thiệu thuật ngữ.
- Thuật ngữ SPSS cụ thể (tên menu, `Measure`, `Value Labels`...) trước khi module đó dạy → chỉ nhắc ngắn kèm "sẽ học ở M…".
- Ví dụ thứ hai cùng dạy một ý → gộp hoặc cắt.

## 11. Quy trình áp dụng

1. Tác giả soạn bài theo production-plan + chuẩn này.
2. Tự audit: đọc lại bài *đúng thứ tự* như người chưa biết gì — mọi thuật ngữ gặp lần đầu phải "đã được giải thích trước đó hoặc ngay tại chỗ".
3. Ghi kết quả vào `qa/<module>-author-selfcheck.md` (mục "beginner-readability").
4. Reviewer độc lập chấm cả nội dung **và** readability theo chuẩn này.
5. **Không được** tuyên bố "người mới học được" mà không có pilot thật — chuẩn này chỉ đảm bảo điều kiện cần về mặt biên tập.
