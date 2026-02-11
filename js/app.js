document.getElementById("app").innerHTML = `
  <div style="text-align:center; margin-top:50px;">
    <h2>Apply Leave</h2>
    <form id="leaveForm">
      <input type="text" id="facultyName" placeholder="Faculty Name" required><br><br>
      <input type="date" id="fromDate" required><br><br>
      <input type="date" id="toDate" required><br><br>
      <textarea id="reason" placeholder="Reason" required></textarea><br><br>
      <button type="submit">Apply</button>
    </form>
    <br>
    <button onclick="loadLeaves()">View Leaves</button>
    <div id="leaveList"></div>
  </div>
`;

const API_URL = "http://localhost:5000/api/leaves";

document.addEventListener("submit", async function(e) {
  if (e.target.id === "leaveForm") {
    e.preventDefault();

    const data = {
      facultyName: document.getElementById("facultyName").value,
      fromDate: document.getElementById("fromDate").value,
      toDate: document.getElementById("toDate").value,
      reason: document.getElementById("reason").value
    };

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    alert("Leave Applied Successfully");
  }
});

async function loadLeaves() {
  const res = await fetch(API_URL);
  const leaves = await res.json();

  const container = document.getElementById("leaveList");
  container.innerHTML = "";

  leaves.forEach(l => {
    container.innerHTML += `
      <div style="border:1px solid #ccc; margin:10px; padding:10px;">
        <strong>${l.facultyName}</strong><br>
        ${l.fromDate} → ${l.toDate}<br>
        ${l.reason}
      </div>
    `;
  });
}
