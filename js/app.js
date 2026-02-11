const app = document.getElementById('app');

function showHome() {
    app.innerHTML = `
    <div class="container">
        <h1>Faculty Management System</h1>
        <p>Leave Management & Approval Portal</p>
        <button onclick="showFacultyLogin()">Faculty Login</button>
        <button onclick="showAdminLogin()">Admin Login</button>
    </div>`;
}

showHome();
