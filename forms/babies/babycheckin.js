function checkIn() {
 // Retrieve checkIn data
 let babyName = document.getElementById('babyName').value;
 let broughtBy = document.getElementById('broughtBy').value;
 let phone = document.getElementById('phone').value;
 let periodOfStay = document.getElementById('periodOfStay').value
 let amountPaid = document.getElementById('amountPaid').value
 let checkInDateTime = document.getElementById('checkIn').value;
 let notes = document.getElementById('notes').value;

//create JS object with checkIn data
let checkInData = {
  babyName: babyName,
  broughtBy: broughtBy,
  phone: phone,
  periodOfStay: periodOfStay,
  amountPaid: amountPaid,
  checkInDateTime: checkInDateTime,
  notes: notes
};

//converting object toJSON string
let checkInDataJSON = JSON.stringify(checkInData);

//storing JSON string in local storage
localStorage.setItem('checkInData', checkInDataJSON);

alert('Baby checkIn successful!');
}