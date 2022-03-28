import React from "react";
import "./cartwidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = ({ count }) => {
  return (
    <>
      <a href="" className="cart">
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="cart__count">{count}</span>
      </a>
    </>
  );
};

export default CartWidget;
