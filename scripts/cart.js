const cart = {
  cartItems: [],
  setItemsInCart(button, quantity = 1) {
    const { id } = button.dataset;
    let matchingItem = this.cartItems.find((item) => item.id === id);
    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      this.cartItems.push({ id, quantity });
    }
  },
};
export default cart;
