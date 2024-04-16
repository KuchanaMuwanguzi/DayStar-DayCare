        function validateForm() {
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let firstNameError = document.getElementById("firstNameError");
    let lastNameError = document.getElementById("lastNameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let valid = true;

    // Validate firstName
    let firstNameField = document.getElementById("fname");
    if (!firstName || firstName.trim() === "") {
        firstNameError.textContent = "First Name is required";
        valid = false;
        firstNameField.classList.add("input-invalid");
    } else {
        firstNameError.textContent = "";
        firstNameField.classList.remove("input-invalid");
    }

    // Validate lastName
    let lastNameField = document.getElementById("lname");
    if (!lastName || lastName.trim() === "") {
        lastNameError.textContent = "Last Name is required";
        valid = false;
        lastNameField.classList.add("input-invalid");
    } else {
        lastNameError.textContent = "";
        lastNameField.classList.remove("input-invalid");
    }

    // Validate email
    let emailField = document.getElementById("email");
    if (!email || email.trim() === "") {
        emailError.textContent = "Email is required";
        valid = false;
        emailField.classList.add("input-invalid");
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Invalid email address";
        valid = false;
        emailField.classList.add("input-invalid");
    } else {
        emailError.textContent = "";
        emailField.classList.remove("input-invalid");
    }

    // Validate password
    let passwordField = document.getElementById("password");
    if (!password || password.trim() === "") {
        passwordError.textContent = "Password is required";
        valid = false;
        passwordField.classList.add("input-invalid");
    } else if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";
        valid = false;
        passwordField.classList.add("input-invalid");
    } else {
        passwordError.textContent = "";
        passwordField.classList.remove("input-invalid");
    }

    return valid;
}

function isValidEmail(email) {
    // Simple email validation using regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}