import { products } from "../data/products.js";

const cart = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  setInStorage() {
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
  },
  setItemsInCart(button, quantity = 1) {
    const { id } = button.dataset;
    let matchingItem = this.cartItems.find((item) => item.id === id);
    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      this.cartItems.push({ id, quantity });
    }
    this.setInStorage();
  },
  getQuantityInCart() {
    let count = 0;
    const cart = JSON.parse(localStorage.getItem("cartItems"));
    if (!cart) {
      return 0;
    }
    cart.forEach((item) => {
      count += item.quantity;
    });

    return count;
  },
  removeProductInCart(id) {
    const index = this.cartItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.cartItems.splice(index, 1); // Removes the item at the found index
    }
    this.setInStorage();
  },
  getProduct(matchingId) {
    const extractedProduct = products.find(({ id }) => {
      return matchingId == id;
    });
    return extractedProduct;
  },
  calculateTotalCost() {
    let totalCost = 0;
    this.cartItems.forEach((item) => {
      const product = this.getProduct(item.id);
      const { priceCents } = product;
      totalCost += priceCents * item.quantity;
    });
    return totalCost;
  },
};
export default cart;
