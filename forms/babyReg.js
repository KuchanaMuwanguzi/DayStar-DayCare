function register() {
    // Retrieve form data
    let fullName = document.getElementById("fullName").value;
    let location = document.getElementById("location").value;
    let motherName = document.getElementById("motherName").value;
    let motherContact = document.getElementsByName("motherContact")[0].value;
    let fatherName = document.getElementById("fatherName").value;
    let fatherContact = document.getElementById("fatherContact")[0].value;
    let dob = document.getElementById("dob").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let babyNumber = document.getElementById("babyNumber").value;

    // Create a JavaScript object with form data
    let formData = {
      fullName: fullName,
      location: location,
      motherName: motherName,
      motherContact: motherContact,
      fatherName: fatherName,
      fatherContact: fatherContact,
      dob: dob,
      gender: gender,
      babyNumber: babyNumber
    };

    // Convert the object to a JSON string
    let formDataJSON = JSON.stringify(formData);

    // Store the JSON string in local storage
    localStorage.setItem("formData", formDataJSON);
    
    alert("Baby registered successfully!");
  }