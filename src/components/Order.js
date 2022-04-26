import React from "react";
import "./order.css";

const Order = ({ subtotal, impuesto, total }) => {
  return (
    <>
      <div className="order__container">
        <h2 className="order__title">Orden</h2>
        <p className="order__subtotal">
          <span>SubTotal:</span>
          <span>$ {subtotal}</span>
        </p>
        <p className="order__impuesto">
          <span>Impuesto (21%):</span>
          <span>$ {impuesto}</span>
        </p>
        <p className="order__total">
          <span>Total:</span>
          <span>$ {total}</span>
        </p>
        <button className="order__btn">Checkout</button>
      </div>
    </>
  );
};

export default Order;
