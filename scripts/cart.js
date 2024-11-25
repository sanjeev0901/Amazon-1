const cart = {
  cartItems: [],
  setItemsInCart(button, quantity = 1) {
    const { id } = button.dataset;
    this.cartItems.push({
      id,
      quantity,
    });
  },
};
export default cart;
