function togglePassword() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
      passwordField.type = "text";
      document.querySelector(".view-password").innerText = "Hide";
    } else {
      passwordField.type = "password";
      document.querySelector(".view-password").innerText = "Show";
    }
  }