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

## 5. Sơ đồ Use Case

Sơ đồ Use Case mô tả các tác nhân và chức năng chính của hệ thống quản lý nghỉ phép.
<img width="1311" height="859" alt="Ảnh chụp màn hình 2026-05-16 170335" src="https://github.com/user-attachments/assets/00b86ecf-3add-4012-8390-c6aa29c3a949" /> 

---

## 6. Sơ đồ Sequence - Tạo đề xuất nghỉ phép

Sơ đồ Sequence mô tả luồng xử lý khi nhân viên tạo đề xuất nghỉ phép trên hệ thống.
<img width="1312" height="858" alt="Ảnh chụp màn hình 2026-05-16 183235" src="https://github.com/user-attachments/assets/f284ea26-862b-4d3d-8082-090db949ad1e" />

## 7. Sơ đồ Class hệ thống quản lý nghỉ phép

Sơ đồ Class mô tả các lớp dữ liệu chính của hệ thống và mối quan hệ giữa các đối tượng như nhân viên, tài khoản, đơn nghỉ phép, phòng ban và lịch sử phê duyệt.


<img width="1332" height="887" alt="Ảnh chụp màn hình 2026-05-22 173448" src="https://github.com/user-attachments/assets/9705a7a5-71b8-4840-896a-47a6b01f110a" />

