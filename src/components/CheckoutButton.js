import React from "react";
import { Link } from "react-router-dom";
import "./checkbutton.css";

const CheckoutButton = () => {
  return (
    <>
      <Link to="/cart">
        <button className="checkoutBtn">Checkout</button>
      </Link>
    </>
  );
};

export default CheckoutButton;
