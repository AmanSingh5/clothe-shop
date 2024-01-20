// script.js

// Product cart functionality
let cart = [];

function addToCart(productId) {
  const product = document.getElementById(productId);
  const productName = product.querySelector('h3').innerText;
  cart.push(productName);
  alert(`${productName} added to cart!`);
}

// Modal functionality
function openContactModal() {
  const modal = document.getElementById('contactModal');
  modal.style.display = 'block';
}

function closeContactModal() {
  const modal = document.getElementById('contactModal');
  modal.style.display = 'none';
}

// Close modal when clicking outside the content
window.onclick = function (event) {
  const modal = document.getElementById('contactModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};


// View Cart functionality
function openCart() {
    if (cart.length === 0) {
      alert("Your cart is empty.");
    } else {
      alert("Cart Contents:\n" + cart.join("\n"));
    }
  }
  
  // Contact Form functionality
  function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // You can add your logic here to handle the form submission (e.g., sending an email).
    // For now, just displaying an alert with the entered information.
    alert(`Form submitted!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
  
    // Optionally, you can close the modal after form submission.
    closeContactModal();
  }

  function openAccountModal() {
    const modal = document.getElementById('accountModal');
    modal.style.display = 'block';
    // For simplicity, you can display some basic account information here
    document.getElementById('accountContent').innerHTML = `
      <p>Welcome, User!</p>
      <button onclick="logout()">Logout</button>
    `;
  }

  function closeAccountModal() {
    const modal = document.getElementById('accountModal');
    modal.style.display = 'none';
  }

  // Logout functionality
  function logout() {
    // Clear user data and perform logout actions
    alert('Logged out successfully!');
    closeAccountModal();
  }
  
