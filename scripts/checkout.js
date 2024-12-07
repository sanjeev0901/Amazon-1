import { products } from "../data/products.js";
import cart from "./cart.js";
import {
  generateCartItemHTML,
  generatePaymentDetailsHTML,
} from "./components/checkoutHTML.js";

const getProductWithQuantity = (product) => {
  const extractedProduct = cart.getProduct(product.id);
  return { ...extractedProduct, quantity: product.quantity };
};

const renderPayment = () => {
  const paymentDetails = {
    totalItems: cart.getQuantityInCart(),
    totalCost: cart.calculateTotalCost(),
    shippingCost: !cart.cartItems.lenght ? 499 : 0,
    tax: !cart.cartItems.lenght ? 10 : 0,
  };
  const paymentHTML = generatePaymentDetailsHTML(paymentDetails);
  const paymentDiv = document.querySelector(".payment-summery");
  paymentDiv.innerHTML = paymentHTML;
};

// Render the cart items
const renderCartItems = () => {
  let checkoutHTML = "";
  cart.cartItems.forEach((cartItem) => {
    const product = getProductWithQuantity(cartItem);
    checkoutHTML += generateCartItemHTML(product);
  });

  const orderSummary = document.querySelector(".order-summary");
  orderSummary.innerHTML = checkoutHTML;

  document.querySelector(
    ".return-to-home-link"
  ).innerHTML = `${cart.getQuantityInCart()} Items`;

  document.querySelectorAll(".delete-quantity-link").forEach((button) => {
    button.addEventListener("click", () => {
      cart.removeProductInCart(button.dataset.id);
      renderCartItems(); // Re-render after deletion
    });
  });
};

// Initialize the checkout page
const initializeCheckoutPage = () => {
  renderCartItems();
  renderPayment();
};

initializeCheckoutPage();
