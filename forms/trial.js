const form = document.getElementById("another-login");

function login() {
  console.log(form.username.value);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const logInData = {
    username: form.username.value,
    password: form.password.value,
  };
  console.log(logInData);
});
















