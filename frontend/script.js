let leaveRequests = JSON.parse(localStorage.getItem("leaveRequests")) || [];

function login() {
  const role = document.getElementById("role").value;

  document.getElementById("loginPage").classList.add("hidden");

  if (role === "employee") {
    document.getElementById("employeePage").classList.remove("hidden");
  } else {
    document.getElementById("managerPage").classList.remove("hidden");
  }

  renderTables();
}

function logout() {
  document.getElementById("loginPage").classList.remove("hidden");

  document.getElementById("employeePage").classList.add("hidden");

  document.getElementById("managerPage").classList.add("hidden");
}

function submitRequest() {
  const employeeName =
    document.getElementById("employeeName").value;

  const startDate =
    document.getElementById("startDate").value;

  const endDate =
    document.getElementById("endDate").value;

  const reason =
    document.getElementById("reason").value;

  if (
    !employeeName ||
    !startDate ||
    !endDate ||
    !reason
  ) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  const requestCode =
    "REQ" +
    String(
      leaveRequests.length + 1
    ).padStart(3, "0");

  const request = {
    id: Date.now(),
    requestCode: requestCode,
    employeeName: employeeName,
    startDate: startDate,
    endDate: endDate,
    reason: reason,
    status: "Chờ duyệt"
  };

  leaveRequests.push(request);

  saveData();

  alert("Gửi đơn nghỉ phép thành công!");

  document.getElementById(
    "employeeName"
  ).value = "";

  document.getElementById(
    "startDate"
  ).value = "";

  document.getElementById(
    "endDate"
  ).value = "";

  document.getElementById(
    "reason"
  ).value = "";

  renderTables();
}

function approveRequest(id) {

  const confirmApprove =
    confirm(
      "Bạn có chắc muốn phê duyệt đơn này?"
    );

  if (!confirmApprove) {
    return;
  }

  leaveRequests =
    leaveRequests.map(request => {

      if (request.id === id) {
        request.status = "Đã duyệt";
      }

      return request;
    });

  saveData();

  renderTables();
}

function rejectRequest(id) {

  const confirmReject =
    confirm(
      "Bạn có chắc muốn từ chối đơn này?"
    );

  if (!confirmReject) {
    return;
  }

  leaveRequests =
    leaveRequests.map(request => {

      if (request.id === id) {
        request.status = "Từ chối";
      }

      return request;
    });

  saveData();

  renderTables();
}

function saveData() {

  localStorage.setItem(
    "leaveRequests",
    JSON.stringify(leaveRequests)
  );

}

function getStatusClass(status) {

  if (
    status === "Đã duyệt"
  )
    return "approved";

  if (
    status === "Từ chối"
  )
    return "rejected";

  return "pending";
}

function renderTables() {

  const employeeTable =
    document.getElementById(
      "employeeTable"
    );

  const managerTable =
    document.getElementById(
      "managerTable"
    );

  employeeTable.innerHTML = "";

  managerTable.innerHTML = "";

  leaveRequests.forEach(
    request => {

      const statusClass =
        getStatusClass(
          request.status
        );

      employeeTable.innerHTML += `
      <tr>
      <td>${request.requestCode}</td>
      <td>${request.employeeName}</td>
      <td>${request.startDate}</td>
      <td>${request.endDate}</td>
      <td>${request.reason}</td>

      <td class="${statusClass}">
      ${request.status}
      </td>

      </tr>
      `;

      managerTable.innerHTML += `
      <tr>

      <td>${request.requestCode}</td>
      <td>${request.employeeName}</td>
      <td>${request.startDate}</td>
      <td>${request.endDate}</td>
      <td>${request.reason}</td>

      <td class="${statusClass}">
      ${request.status}
      </td>

      <td>

      ${
        request.status ===
        "Chờ duyệt"

          ?

        `
      <button
      onclick="approveRequest(${request.id})">

      Phê duyệt

      </button>

      <button
      onclick="rejectRequest(${request.id})">

      Từ chối

      </button>

      `

      :

      "Đã xử lý"

      }

      </td>

      </tr>
      `;
    }
  );
}