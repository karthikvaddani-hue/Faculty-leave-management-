/* ============================
   COMMON JS – Faculty Leave System
   Uses localStorage only
============================ */

/* ---------- LOGIN ---------- */
function facultyLogin() {
  localStorage.setItem("currentUser", "faculty");
  window.location.href = "faculty-dashboard.html";
}

function adminLogin() {
  localStorage.setItem("currentUser", "admin");
  window.location.href = "admin-dashboard.html";
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

/* ---------- APPLY LEAVE ---------- */
function applyLeave(type, from, to) {
  let leaves = JSON.parse(localStorage.getItem("leaves")) || [];

  leaves.push({
    id: Date.now(),
    faculty: "John Doe", // static for demo
    type: type,
    from: from,
    to: to,
    status: "Pending"
  });

  localStorage.setItem("leaves", JSON.stringify(leaves));
  alert("Leave Applied Successfully");
  window.location.href = "faculty-dashboard.html";
}

/* ---------- LOAD ADMIN DASHBOARD ---------- */
function loadAdminDashboard() {
  let leaves = JSON.parse(localStorage.getItem("leaves")) || [];
  let table = document.getElementById("adminTable");

  if (!table) return;

  table.innerHTML = "";

  leaves.forEach(l => {
    table.innerHTML += `
      <tr>
        <td>${l.faculty}</td>
        <td>${l.type}</td>
        <td>${l.from}</td>
        <td>${l.to}</td>
        <td>
          <button class="approve" onclick="updateStatus(${l.id}, 'Approved')">
            Approve
          </button>
          <button class="reject" onclick="updateStatus(${l.id}, 'Rejected')">
            Reject
          </button>
        </td>
      </tr>
    `;
  });
}

/* ---------- APPROVE / REJECT ---------- */
function updateStatus(id, status) {
  let leaves = JSON.parse(localStorage.getItem("leaves")) || [];

  leaves = leaves.map(l => {
    if (l.id === id) l.status = status;
    return l;
  });

  localStorage.setItem("leaves", JSON.stringify(leaves));
  loadAdminDashboard();
}

/* ---------- LEAVE STATUS ---------- */
function loadLeaveStatus() {
  let leaves = JSON.parse(localStorage.getItem("leaves")) || [];
  let statusCell = document.getElementById("leaveStatus");

  if (!statusCell) return;

  let latest = leaves[leaves.length - 1];
  statusCell.innerText = latest ? latest.status : "No Leave Applied";
}

/* ---------- LEAVE HISTORY ---------- */
function loadLeaveHistory() {
  let leaves = JSON.parse(localStorage.getItem("leaves")) || [];
  let table = document.getElementById("historyTable");

  if (!table) return;

  table.innerHTML = "";

  leaves.forEach(l => {
    table.innerHTML += `
      <tr>
        <td>${l.type}</td>
        <td style="color:${l.status === 'Approved' ? 'green' : l.status === 'Rejected' ? 'red' : 'orange'}">
          ${l.status}
        </td>
      </tr>
    `;
  });
}
