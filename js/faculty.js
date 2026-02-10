function showFacultyDashboard() {
  app.innerHTML = `
    <h2 style="text-align:center;">Faculty Dashboard</h2>
    <div class="menu">
      <a href="#" onclick="showApplyLeave()">Apply Leave</a>
      <a href="#" onclick="showLeaveStatus()">Leave Status</a>
      <a href="#" onclick="showLeaveHistory()">Leave History</a>
      <a href="#" onclick="showHome()">Logout</a>
    </div>`;
}

function showApplyLeave() {
  app.innerHTML = `
    <div class="box">
      <h2>Apply Leave</h2>
      <select id="leaveType">
        <option>Casual Leave</option>
        <option>Medical Leave</option>
        <option>On Duty</option>
      </select>
      <input type="date" id="fromDate">
      <input type="date" id="toDate">
      <textarea id="reason" placeholder="Reason"></textarea>
      <button onclick="applyLeave()">Submit</button>
      <p><a href="#" onclick="showFacultyDashboard()">Back</a></p>
    </div>`;
}

function showLeaveStatus() {
  app.innerHTML = `
    <h2 style="text-align:center;">Leave Status</h2>
    <table>
      <tr><th>Leave</th><th>Dates</th><th>Status</th></tr>
      <tr><td>Casual</td><td>10-02-2026 to 12-02-2026</td><td class="pending">Pending</td></tr>
    </table>
    <p style="text-align:center;"><a href="#" onclick="showFacultyDashboard()">Back</a></p>`;
}

function showLeaveHistory() {
  app.innerHTML = `
    <h2 style="text-align:center;">Leave History</h2>
    <table>
      <tr><th>Leave</th><th>Dates</th><th>Status</th></tr>
      <tr><td>Medical</td><td>01-01-2026 to 02-01-2026</td><td class="approved">Approved</td></tr>
    </table>
    <p style="text-align:center;"><a href="#" onclick="showFacultyDashboard()">Back</a></p>`;
}

function applyLeave() {
  alert("Leave Applied Successfully");
  showFacultyDashboard();
}
