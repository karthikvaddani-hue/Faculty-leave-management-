
function showFacultyLogin() {
  app.innerHTML = `
    <div class="box">
      <h2>Faculty Login</h2>
      <input id="facultyId" placeholder="Faculty ID">
      <input id="facultyPass" type="password" placeholder="Password">
      <button onclick="facultyLogin()">Login</button>
      <p><a href="#" onclick="showHome()">Back</a></p>
    </div>`;
}

function showAdminLogin() {
  app.innerHTML = `
    <div class="box">
      <h2>Admin / Consultant Login</h2>
      <input id="adminId" placeholder="Admin ID">
      <input id="adminPass" type="password" placeholder="Password">
      <button onclick="adminLogin()">Login</button>
      <p><a href="#" onclick="showHome()">Back</a></p>
    </div>`;
}

function facultyLogin() {
  const id = facultyId.value.trim();
  const pass = facultyPass.value.trim();

  if (id === "faculty" && pass === "1234") {
    alert("Faculty Logged In Successfully");
    showFacultyDashboard();
  } else {
    alert("Invalid Faculty Credentials");
  }
}

function adminLogin() {
  const id = adminId.value.trim();
  const pass = adminPass.value.trim();

  if (id === "admin" && pass === "1234") {
    alert("Admin Logged In Successfully");
    showAdminDashboard();
  } else {
    alert("Invalid Admin Credentials");
  }
}
