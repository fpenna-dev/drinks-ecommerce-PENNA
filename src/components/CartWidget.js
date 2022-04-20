import React from "react";
import "./cartwidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CartWidget = ({ count }) => {
  return (
    <>
      <Link to="/cart" className="cart">
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="cart__count">{count}</span>
      </Link>
    </>
  );
};

export default CartWidget;
