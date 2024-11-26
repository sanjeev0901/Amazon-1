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
};
export default cart;
