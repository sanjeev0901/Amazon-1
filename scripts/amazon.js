import { generateAllProductHTML } from "./components/amazonHTML.js";
import {
  addAddToCartEventListeners,
  updateCartQuantity,
} from "./utilities/amazonActions.js";

const renderAllProducts = () => {
  const HTML = generateAllProductHTML();
  document.querySelector(".js-products-grid").innerHTML = HTML;
};

const initializeAmazonPage = () => {
  renderAllProducts();
  updateCartQuantity();
  addAddToCartEventListeners();
};

export { initializeAmazonPage };
