document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve form data
    let name = document.getElementById('name').value;
    let pickedBy = document.getElementById('pickedBy').value;
    let phone = document.getElementById('phone').value;
    let checkoutDateTime = document.getElementById('checkout').value;
    let notes = document.getElementById('notes').value;

    // You can perform validation here if needed

    // Here you can send the form data to a server using AJAX or perform any other actions
    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Picked By:", pickedBy);
    console.log("Phone:", phone);
    console.log("Checkout Date and Time:", checkoutDateTime);
    console.log("Notes:", notes);
  });