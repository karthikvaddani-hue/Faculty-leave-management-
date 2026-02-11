function showFacultyDashboard() {
    app.innerHTML = `
    <div class="menu">
        <h2>Faculty Dashboard</h2>
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
        <button onclick="showFacultyDashboard()">Back</button>
    </div>`;
}

function applyLeave() {
    alert("Leave Applied Successfully!");
    showFacultyDashboard();
}

function showLeaveStatus() {
    app.innerHTML = `
    <div class="box">
        <h2>Leave Status</h2>
        <table>
            <tr><th>Type</th><th>Status</th></tr>
            <tr><td>Casual Leave</td><td class="pending">Pending</td></tr>
        </table>
        <button onclick="showFacultyDashboard()">Back</button>
    </div>`;
}

function showLeaveHistory() {
    app.innerHTML = `
    <div class="box">
        <h2>Leave History</h2>
        <table>
            <tr><th>Type</th><th>Status</th></tr>
            <tr><td>Medical Leave</td><td class="approved">Approved</td></tr>
        </table>
        <button onclick="showFacultyDashboard()">Back</button>
    </div>`;
}
