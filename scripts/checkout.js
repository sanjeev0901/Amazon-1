import { products } from "../data/products.js";
import cart from "./cart.js";

const getProduct = (product) => {
  const extractedProduct = products.find((item) => {
    return item.id == product.id;
  });
  extractedProduct.quantity = product.quantity;
  return extractedProduct;
};

console.log(
  getProduct({ id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6", quantity: 2 })
);
