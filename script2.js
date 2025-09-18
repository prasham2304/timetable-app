// Login Function
function loginUser(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const role = document.getElementById("role").value;

  // Basic login simulation
  if (username.trim() !== "") {
    localStorage.setItem("userRole", role);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login");
  }
}

// Logout Function
function logout() {
  localStorage.removeItem("userRole");
  window.location.href = "index.html";
}

// Add timetable entry
function addEntry(event) {
  event.preventDefault();

  const day = document.getElementById("day").value;
  const subject = document.getElementById("subject").value;
  const classSection = document.getElementById("classSection").value;
  const teacher = document.getElementById("teacher").value;
  const optional = document.getElementById("optional").value;
  const startTime = document.getElementById("startTime").value;
  const endTime = document.getElementById("endTime").value;

  const table = document.getElementById("timetable").querySelector("tbody");

  const row = table.insertRow();
  row.innerHTML = `
    <td>${day}</td>
    <td>${subject}</td>
    <td>${classSection}</td>
    <td>${teacher}</td>
    <td>${optional}</td>
    <td>${startTime}</td>
    <td>${endTime}</td>
  `;

  document.getElementById("timetableForm").reset();
}
