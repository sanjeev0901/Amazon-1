import money from "../utilities/money.js";
// Generate the HTML for delivery options
const generateDeliveryOptionsHTML = () => {
  return /*HTML*/ `
    <div class="delivery-option">
      <input type="radio" checked class="delivery-option-input" name="delivery-option-1" />
      <div>
        <div class="delivery-option-date">Tuesday, June 21</div>
        <div class="delivery-option-price">FREE Shipping</div>
      </div>
    </div>
    <div class="delivery-option">
      <input type="radio" class="delivery-option-input" name="delivery-option-1" />
      <div>
        <div class="delivery-option-date">Wednesday, June 15</div>
        <div class="delivery-option-price">$4.99 - Shipping</div>
      </div>
    </div>
    <div class="delivery-option">
      <input type="radio" class="delivery-option-input" name="delivery-option-1" />
      <div>
        <div class="delivery-option-date">Monday, June 13</div>
        <div class="delivery-option-price">$9.99 - Shipping</div>
      </div>
    </div>
  `;
};

const generateCartItemHTML = ({ id, name, image, priceCents, quantity }) => {
  return /*HTML*/ `
    <div class="cart-item-container">
      <div class="delivery-date">Delivery date: Tuesday, June 21</div>
      <div class="cart-item-details-grid">
        <img class="product-image" src="${image}" />
        <div class="cart-item-details">
          <div class="product-name">${name}</div>
          <div class="product-price">$${(priceCents / 100).toFixed(2)}</div>
          <div class="product-quantity">
            <span>Quantity: <span class="quantity-label">${quantity}</span></span>
            <span class="update-quantity-link link-primary">Update</span>
            <span class="delete-quantity-link link-primary" data-id=${id}>Delete</span>
          </div>
        </div>
        <div class="delivery-options">
          <div class="delivery-options-title">Choose a delivery option:</div>
          ${generateDeliveryOptionsHTML()}
        </div>
      </div>
    </div>
  `;
};

const generatePaymentDetailsHTML = (paymentDetails) => {
  const {
    totalItems,
    tax,
    shippingCost,
    totalCost: totalProductsCost,
  } = paymentDetails;
  const totalBfTax = totalProductsCost + shippingCost;
  const totalAfTax = (totalBfTax * tax) / 100;
  const totalCost = totalBfTax + totalAfTax;
  return /*HTML*/ `
    <div class="payment-summary-title">Order Summary</div>

    <div class="payment-summary-row">
      <div>Items (${totalItems}):</div>
      <div class="payment-summary-money">$${money.convertToDollors(
        totalProductsCost
      )}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">$${money.convertToDollors(
        shippingCost
      )}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${money.convertToDollors(
        totalBfTax
      )}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${money.convertToDollors(
        totalAfTax
      )}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">$${money.convertToDollors(
        totalCost
      )}</div>
    </div>

    <button class="place-order-button button-primary">
      Place your order
    </button>
  `;
};

export { generateCartItemHTML, generatePaymentDetailsHTML };
