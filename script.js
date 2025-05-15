
function addToCart(name, price) {
  const cartItems = document.getElementById("cart-items");
  const li = document.createElement("li");
  li.textContent = `${name} - Rp ${price.toLocaleString()}`;
  cartItems.appendChild(li);

  let total = document.getElementById("total");
  let currentTotal = parseInt(total.textContent.replace(/[^\d]/g, '')) || 0;
  total.textContent = `Rp ${(currentTotal + price).toLocaleString()}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (name && email && message) {
        document.getElementById("confirmation-msg").style.display = "block";
        document.getElementById("error-msg").style.display = "none";
        contactForm.reset();
      } else {
        document.getElementById("confirmation-msg").style.display = "none";
        document.getElementById("error-msg").style.display = "block";
      }
    });
  }
});
