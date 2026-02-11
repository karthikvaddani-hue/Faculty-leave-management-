function showAdminDashboard() {
    app.innerHTML = `
    <div class="box">
        <h2>Admin Dashboard</h2>
        <table>
            <tr>
                <th>Faculty</th>
                <th>Type</th>
                <th>From</th>
                <th>To</th>
                <th>Action</th>
            </tr>
            <tr>
                <td>John Doe</td>
                <td>Casual Leave</td>
                <td>10-02-2026</td>
                <td>12-02-2026</td>
                <td>
                    <button class="approve">Approve</button>
                    <button class="reject">Reject</button>
                </td>
            </tr>
        </table>
        <button onclick="showHome()">Logout</button>
    </div>`;
}
