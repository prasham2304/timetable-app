function loginUser(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  // Fixed credentials
  if (role === "admin" && username === "admin" && password === "admin123") {
    localStorage.setItem("userRole", role);
    window.location.href = "dashboard.html";
  } 
  else if (role === "user" && username === "user" && password === "user123") {
    localStorage.setItem("userRole", role);
    window.location.href = "dashboard.html";
  } 
  else {
    alert("Invalid username or password!");
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
// Run when page loads
window.onload = function () {
  const role = localStorage.getItem("userRole");

  // If user is not admin → hide form
  if (role !== "admin") {
    const formSection = document.getElementById("formSection");
    if (formSection) {
      formSection.style.display = "none";
    }
  }
};



