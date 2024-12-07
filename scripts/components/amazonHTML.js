import { products } from "../../data/products.js";

const generateSingleProductHTML = (product) => {
  return /* HTML */ `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image" src="${product.image}" />
      </div>

      <div class="product-name limit-text-to-2-lines">${product.name}</div>

      <div class="product-rating-container">
        <img
          class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png"
        />
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">$${(product.priceCents / 100).toFixed(2)}</div>

      <div class="product-quantity-container">
        <select data-quantity-selector=${product.id}>
          ${Array.from({ length: 10 }, (_, i) => {
            const value = i + 1;
            return `<option value="${value}" ${
              value === 1 ? "selected" : ""
            }>${value}</option>`;
          }).join("")}
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart" data-id=${product.id}>
        <img src="images/icons/checkmark.png" />
        Added
      </div>

      <button
        class="add-to-cart-button button-primary js-add-to-cart"
        data-id="${product.id}"
      >
        Add to Cart
      </button>
    </div>
  `;
};

const generateAllProductHTML = () => {
  let productsHTML = "";
  products.forEach((product) => {
    productsHTML += generateSingleProductHTML(product);
  });
  return productsHTML;
};

export { generateAllProductHTML };
