document.addEventListener("DOMContentLoaded", function() {
const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Validation logic for name field
        let nameInput = document.getElementById("username");
        let nameAlert = document.getElementById("nameAlert");
        if (nameInput.value.length < 3) {
            nameAlert.textContent = "Name must be at least 3 characters long.";
        } else {
            nameAlert.textContent = "";
        }

        // Validation logic for Date of Birth field
        let dobInput = document.getElementById("dob");
        let dobAlert = document.getElementById("dobAlert");
        if (!dobInput.value) {
            dobAlert.textContent = "Date of Birth is required.";
        } else {
            dobAlert.textContent = "";
        }

        // Validation logic for contact field
        let contactInput = document.getElementById("contact");
        let contactAlert = document.getElementById("contactAlert");
        if (contactInput.value.length < 10 || contactInput.value.length > 12) {
            contactAlert.textContent = "Contact number must be between 10 to 12 digits.";
        } else {
            contactAlert.textContent = "";
        }

        //validation logic for location field
        let locationInput = document.getElementById("location")
        let locationAlert = document.getElementById("locationAlert")
        if (!locationInput.value) {
            locationAlert.textContent = "Location is required";
        } else {
            locationAlert.textContent ="";
        }

        // Validation logic for NIN field
        let idInput = document.getElementById("identification");
        let idAlert = document.getElementById("idAlert");
        if (idInput.value.length !== 13) {
            idAlert.textContent = "NIN must be 13 characters long.";
        } else {
            idAlert.textContent = "";
        }

        //Validation logic for next of kin
        let kinInput = document.getElementById("kin");
        let kinAlert = document.getElementById("kinAlert");
        if (kinInput.value.length < 3) {
            kinAlert.textContent = "Name must be at least 3 characters long.";
        } else {
            kinAlert.textContent = "";
        }

        /*/ Validation logic for Recomender's name field
        let recomenderInput = document.getElementById("recomender");
        let recomenderAlert = document.getElementById("recomenderAlert");
        if (recomenderInput.value) {
            recomenderAlert.textContent = "Recomender's name is required.";
        } else {
            recomenderAlert.textContent = "";
        }*/

        // Validation logic for education field
        let educationInput = document.getElementById("education");
        let educationAlert = document.getElementById("educationAlert");
        if (!educationInput.value) {
            educationAlert.textContent = "education level is required";
        } else {
            educationAlert.textContent = "";
        }

        // Validation logic for sitter No. field
        let sitterInput = document.getElementById("sitter");
        let sitterAlert = document.getElementById("sitterAlert");
        if (sitterInput.value.length !== 3) {
            sitterAlert.textContent = "NIN must be 13 characters long.";
        } else {
            sitterAlert.textContent = "";
        }

        // Check if all fields are valid
        if (nameInput.value.length >= 3 && contactInput.value.length >= 10 && contactInput.value.length <= 12 && dobInput.value && idInput.value.length === 13 && locationInput.value && kinInput.value.length < 3 && recomenderInput.value && educationInput.value && sitterInput.value.length === 3) {
            alert("Form submitted successfully!");
            registrationForm.reset(); // Reset form
        }
    });
});