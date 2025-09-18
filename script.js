// Login Function
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("loginMsg");

  if (user === "admin" && pass === "1234") {
    document.getElementById("loginPage").classList.remove("active");
    document.getElementById("timetablePage").classList.add("active");
  } else {
    msg.innerText = "Invalid Username or Password!";
    msg.style.color = "red";
  }
}

// Logout Function
function logout() {
  document.getElementById("timetablePage").classList.remove("active");
  document.getElementById("loginPage").classList.add("active");
}

// Export Timetable as Image
function exportImage() {
  html2canvas(document.querySelector("#timetable")).then(canvas => {
    let link = document.createElement("a");
    link.download = "timetable.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}
