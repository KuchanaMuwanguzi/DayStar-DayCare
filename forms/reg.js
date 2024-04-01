document.addEventListener("DOMContentLoaded", function() {
    let registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Validation logic for name field
        let nameInput = document.getElementById("name");
        let nameAlert = document.getElementById("nameAlert");
        if (nameInput.value.length < 3) {
            nameAlert.textContent = "Name must be at least 3 characters long.";
        } else {
            nameAlert.textContent = "";
        }

        // Validation logic for contact field
        let contactInput = document.getElementById("contact");
        let contactAlert = document.getElementById("contactAlert");
        if (contactInput.value.length < 10 || contactInput.value.length > 12) {
            contactAlert.textContent = "Contact number must be between 10 to 12 digits.";
        } else {
            contactAlert.textContent = "";
        }

        // Validation logic for Date of Birth field
        let dobInput = document.getElementById("dob");
        let dobAlert = document.getElementById("dobAlert");
        if (!dobInput.value) {
            dobAlert.textContent = "Date of Birth is required.";
        } else {
            dobAlert.textContent = "";
        }

        // Validation logic for ID Number field
        let idNumberInput = document.getElementById("idNumber");
        let idNumberAlert = document.getElementById("idNumberAlert");
        if (idNumberInput.value.length !== 13) {
            idNumberAlert.textContent = "ID number must be 13 characters long.";
        } else {
            idNumberAlert.textContent = "";
        }

        // Check if all fields are valid
        if (nameInput.value.length >= 3 && contactInput.value.length >= 10 && contactInput.value.length <= 12 && dobInput.value && idNumberInput.value.length === 13) {
            alert("Form submitted successfully!");
            registrationForm.reset(); // Reset form
        }
    });
});