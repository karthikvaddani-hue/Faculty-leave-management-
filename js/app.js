const app = document.getElementById('app');

function showHome() {
  app.innerHTML = `
    <div class="container">
      <h1>Faculty Management System</h1>
      <p>Leave Management & Approval Portal</p>
      <div class="buttons">
        <a href="#" onclick="showFacultyLogin()">Faculty Login</a>
        <a href="#" onclick="showAdminLogin()">Admin Login</a>
      </div>
    </div>`;
}

// Initialize
showHome();
