import { products } from "../data/products.js";
import { generateSingleProductHTML } from "./components/amazonHTML.js";
import {
  addAddToCartEventListeners,
  updateCartQuantity,
} from "./utilities/amazonActions.js";

const renderAllProducts = () => {
  let productsHTML = "";
  products.forEach((product) => {
    productsHTML += generateSingleProductHTML(product);
  });
  document.querySelector(".js-products-grid").innerHTML = productsHTML;
};

const initializeAmazonPage = () => {
  renderAllProducts();
  updateCartQuantity();
  addAddToCartEventListeners();
};

export { initializeAmazonPage };
