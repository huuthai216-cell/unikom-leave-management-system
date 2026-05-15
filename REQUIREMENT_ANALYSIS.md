# PHÂN TÍCH YÊU CẦU HỆ THỐNG

## 1. Giới thiệu đề tài

Tên đề tài:

Xây dựng hệ thống quản lý đề xuất và phê duyệt nghỉ phép trong công ty Unikom.

Mục tiêu hệ thống:

Xây dựng hệ thống hỗ trợ nhân viên tạo yêu cầu nghỉ phép, theo dõi trạng thái xử lý và hỗ trợ quản lý thực hiện phê duyệt.

---

## 2. Tác nhân tham gia hệ thống

### Nhân viên

Chức năng:

- Đăng nhập hệ thống
- Tạo đề xuất nghỉ phép
- Xem trạng thái đề xuất
- Xem lịch sử nghỉ phép

### Quản lý

Chức năng:

- Xem danh sách đề xuất
- Phê duyệt nghỉ phép
- Từ chối nghỉ phép

### Quản trị viên

Chức năng:

- Quản lý nhân viên
- Quản lý tài khoản
- Xem báo cáo hệ thống

---

## 3. Danh sách Use Case

| STT | Use Case | Actor |
|---|---:|---|
|1|Đăng nhập|Nhân viên, Quản lý, Quản trị viên|
|2|Tạo đề xuất nghỉ phép|Nhân viên|
|3|Xem trạng thái nghỉ phép|Nhân viên|
|4|Xem lịch sử nghỉ phép|Nhân viên|
|5|Xem danh sách đề xuất|Quản lý|
|6|Phê duyệt nghỉ phép|Quản lý|
|7|Từ chối nghỉ phép|Quản lý|
|8|Quản lý nhân viên|Quản trị viên|
|9|Quản lý tài khoản|Quản trị viên|
|10|Xem báo cáo|Quản trị viên|

---

## 4. Mô tả Use Case chính

### Use Case: Tạo đề xuất nghỉ phép

Actor:

Nhân viên

Mô tả:

Cho phép nhân viên gửi yêu cầu nghỉ phép đến quản lý.

Luồng chính:

Bước 1: Nhân viên đăng nhập hệ thống.

Bước 2: Chọn chức năng tạo đề xuất nghỉ phép.

Bước 3: Nhập thông tin:

- Lý do nghỉ
- Ngày bắt đầu
- Ngày kết thúc

Bước 4: Gửi yêu cầu.

Bước 5: Hệ thống lưu thông tin.

Bước 6: Quản lý nhận yêu cầu.

---

## 5. UML dự kiến xây dựng

- Use Case Diagram
- Sequence Diagram
- Class Diagram
