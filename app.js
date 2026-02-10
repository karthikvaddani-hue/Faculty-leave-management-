async function loadLeaves() {
  const res = await fetch("http://localhost:5000/api/leaves");
  const leaves = await res.json();

  const container = document.getElementById("leaveList");
  container.innerHTML = "";

  leaves.forEach(l => {
    container.innerHTML += `
      <div class="card">
        <h4>${l.facultyName}</h4>
        <p>${l.fromDate} → ${l.toDate}</p>
        <p>${l.reason}</p>
      </div>
    `;
  });
}

loadLeaves();
