import cart from "../cart.js";

// Function to update the cart quantity in the DOM
const updateCartQuantity = () => {
  document.querySelector(".cart-quantity").innerHTML = cart.getQuantityInCart();
};

// Function to add event listeners to "Add to Cart" buttons
const addAddToCartEventListeners = () => {
  document.querySelectorAll(".js-add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const quantity = Number(
        document.querySelector(
          `[data-quantity-selector="${button.dataset.id}"]`
        ).value
      );
      cart.setItemsInCart(button, quantity);
      updateCartQuantity();
      const textContainer = document.querySelector(
        `.added-to-cart[data-id="${button.dataset.id}"]`
      );
      textContainer.classList.add("visible");
      setTimeout(() => {
        textContainer.classList.remove("visible");
      }, 1500);
    });
  });
};

export { addAddToCartEventListeners, updateCartQuantity };
