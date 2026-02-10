function showAdminDashboard() {
  app.innerHTML = `
    <h2 style="text-align:center;">Admin Dashboard</h2>
    <table>
      <tr>
        <th>Faculty</th><th>Leave</th><th>From</th><th>To</th><th>Action</th>
      </tr>
      <tr>
        <td>John Doe</td>
        <td>Casual</td>
        <td>10-02-2026</td>
        <td>12-02-2026</td>
        <td>
          <button class="approve" onclick="alert('Approved')">Approve</button>
          <button class="reject" onclick="alert('Rejected')">Reject</button>
        </td>
      </tr>
    </table>
    <p style="text-align:center;"><a href="#" onclick="showHome()">Logout</a></p>`;
}
