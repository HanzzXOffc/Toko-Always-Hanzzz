
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      if (username === "always" && password === "hanzz") {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "index.html";
      } else {
        document.getElementById("error-msg").textContent = "Username atau password salah!";
      }
    });
  }

  if (window.location.pathname.includes("index.html")) {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      window.location.href = "login.html";
    }
    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("isLoggedIn");
        window.location.href = "login.html";
      });
    }
  }
});
