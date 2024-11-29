import { products } from "../data/products.js";
import cart from "./cart.js";

const getProduct = (product) => {
  const extractedProduct = products.find((item) => {
    return item.id == product.id;
  });
  extractedProduct.quantity = product.quantity;
  return extractedProduct;
};

let checkoutHTML = "";
cart.cartItems.forEach((cartItem) => {
  const product = getProduct(cartItem);
  const { id, name, image, priceCents, quantity } = product;
  const html = /*HTML*/ `
  <div class="cart-item-container">
    <div class="delivery-date">Delivery date: Tuesday, June 21</div>

    <div class="cart-item-details-grid">
      <img
        class="product-image"
        src="${image}"
      />

      <div class="cart-item-details">
        <div class="product-name">
          ${name}
        </div>
        <div class="product-price">$${(priceCents / 100).toFixed(2)}</div>
        <div class="product-quantity">
          <span> Quantity: <span class="quantity-label">${quantity}</span> </span>
          <span class="update-quantity-link link-primary">
            Update
          </span>
          <span class="delete-quantity-link link-primary" data-id=${id}>
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        <div class="delivery-option">
          <input
            type="radio"
            checked
            class="delivery-option-input"
            name="delivery-option-1"
          />
          <div>
            <div class="delivery-option-date">Tuesday, June 21</div>
            <div class="delivery-option-price">FREE Shipping</div>
          </div>
        </div>
        <div class="delivery-option">
          <input
            type="radio"
            class="delivery-option-input"
            name="delivery-option-1"
          />
          <div>
            <div class="delivery-option-date">Wednesday, June 15</div>
            <div class="delivery-option-price">$4.99 - Shipping</div>
          </div>
        </div>
        <div class="delivery-option">
          <input
            type="radio"
            class="delivery-option-input"
            name="delivery-option-1"
          />
          <div>
            <div class="delivery-option-date">Monday, June 13</div>
            <div class="delivery-option-price">$9.99 - Shipping</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
  checkoutHTML += html;
});

const orderSummary = document.querySelector(".order-summary");
orderSummary.innerHTML = checkoutHTML;

document.querySelector(
  ".return-to-home-link"
).innerHTML = `${cart.getQuantityInCart()} Items`;

document.querySelectorAll(".delete-quantity-link").forEach((button) => {
  button.addEventListener("click", () => {
    cart.removeProductInCart(button.dataset.id);
  });
});
