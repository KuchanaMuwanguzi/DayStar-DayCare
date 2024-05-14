class Doll {
    constructor(name, price, image) {
      this.name = name;
      this.price = price;
      this.image = image;
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const dollList = document.getElementById("doll-list");
    const cartItems = document.getElementById("cart-items");
    const addToCartBtn = document.getElementById("add-to-cart-btn");
    const payUpBtn = document.getElementById("pay-up-btn");
    const totalAmount = document.getElementById("total-amount");
  
    let dolls = [
      new Doll("Barbie", 15, "/images/doll1.jpeg"),
      new Doll("Ken", 12, "/images/doll2.jpeg"),
      new Doll("Elsa", 18, "/images/doll3.jpeg"),
      new Doll("Anna", 20, "/images/doll4.jpeg")
    ];
  
    // Function to display dolls
    function displayDolls() {
      dollList.innerHTML = "";
      dolls.forEach(doll => {
        const dollItem = document.createElement("div");
        dollItem.classList.add("doll-item");
        dollItem.innerHTML = `
          <img src="${doll.image}" alt="${doll.name}" class="doll-img">
          <div>${doll.name} - $${doll.price}</div>
        `;
        dollItem.addEventListener("click", () => selectDoll(dollItem, doll));
        dollList.appendChild(dollItem);
      });
    }
  
    // Function to select a doll
    function selectDoll(dollItem, doll) {
      const selectedDoll = document.querySelector(".doll-item.selected");
      if (selectedDoll) {
        selectedDoll.classList.remove("selected");
      }
      dollItem.classList.add("selected");
    }
  
    // Function to remove doll from stall
    const removeDoll = document.getElementById("add-doll-btn");
    removeDoll.addEventListener("click", () => {
      const selectedDoll = document.querySelector(".doll-item.selected");
      if (selectedDoll) {
        const dollName = selectedDoll.textContent.split(" - ")[0];
        dolls = dolls.filter(doll => doll.name !== dollName);
        displayDolls();
      }
    });
  
    // Function to add a new doll
    const addDollBtn = document.getElementById("add-doll-btn");
    addDollBtn.addEventListener("click", () => {
      const name = prompt("Enter doll name:");
      const price = parseFloat(prompt("Enter doll price:"));
      const image = prompt("Enter doll image URL:");
      if (name && !isNaN(price) && image) {
        const newDoll = new Doll(name, price, image);
        dolls.push(newDoll);
        displayDolls();
      } else {
        alert("Invalid input! Doll not added.");
      }
    });
  
    // Function to add item to cart
    addToCartBtn.addEventListener("click", () => {
      const selectedDoll = document.querySelector(".doll-item.selected");
      if (selectedDoll) {
        const dollName = selectedDoll.textContent.split(" - ")[0];
        const doll = dolls.find(d => d.name === dollName);
        if (doll) {
          const cartItem = document.createElement("div");
          cartItem.textContent = `${doll.name} - $${doll.price}`;
          cartItem.classList.add("cart-item");
          cartItems.appendChild(cartItem);
        }
      }
      updateTotalAmount();
      checkCartStatus();
    });
  
    // Function to update total amount
    function updateTotalAmount() {
      const cartItemPrices = Array.from(cartItems.querySelectorAll(".cart-item")).map(item => parseFloat(item.textContent.split(" - ")[1].substring(1)));
      const totalPrice = cartItemPrices.reduce((acc, curr) => acc + curr, 0);
      totalAmount.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }
  
    // Function to check cart status
    function checkCartStatus() {
      const cartItemCount = cartItems.querySelectorAll(".cart-item").length;
      if (cartItemCount > 0) {
        payUpBtn.style.display = "block";
      } else {
        payUpBtn.style.display = "none";
      }
    }
  
    // Pay up button event listener
    payUpBtn.addEventListener("click", () => {
      alert("Payment completed!");
      cartItems.innerHTML = "";
      updateTotalAmount();
      checkCartStatus();
    });
  
    // Initial display
    displayDolls();
  });
  