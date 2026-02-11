// Get main container
const app = document.getElementById("app");

// ================= HOME PAGE =================
function showHome() {
  app.innerHTML = `
    <div class="hero">
      <div class="hero-text">
        <h3>FROM CAMPUS TO DIGITAL WORKFLOW</h3>
        <h1>FACULTY <span>MANAGEMENT</span></h1>
        <p>Leave Approval • Tracking • Notifications</p>
        <button class="btn" onclick="showFacultyLogin()">Faculty Login</button>
        <button class="btn admin-btn" onclick="showAdminLogin()">Admin Login</button>
      </div>
    </div>
  `;
}

// ================= INITIAL LOAD =================
showHome();
