function showFacultyLogin() {
    app.innerHTML = `
    <div class="box">
        <h2>Faculty Login</h2>
        <input id="facultyId" type="text" placeholder="Faculty ID">
        <input id="facultyPass" type="password" placeholder="Password">
        <button onclick="facultyLogin()">Login</button>
        <button onclick="showHome()">Back</button>
    </div>`;
}

function showAdminLogin() {
    app.innerHTML = `
    <div class="box">
        <h2>Admin Login</h2>
        <input id="adminId" type="text" placeholder="Admin ID">
        <input id="adminPass" type="password" placeholder="Password">
        <button onclick="adminLogin()">Login</button>
        <button onclick="showHome()">Back</button>
    </div>`;
}

function facultyLogin() {
    const id = document.getElementById('facultyId').value;
    const pass = document.getElementById('facultyPass').value;

    if (id === "faculty" && pass === "1234") {
        showFacultyDashboard();
    } else {
        alert("Invalid Faculty Credentials");
    }
}

function adminLogin() {
    const id = document.getElementById('adminId').value;
    const pass = document.getElementById('adminPass').value;

    if (id === "admin" && pass === "1234") {
        showAdminDashboard();
    } else {
        alert("Invalid Admin Credentials");
    }
}
