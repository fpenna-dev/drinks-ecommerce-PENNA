import React from "react";
import "./itemcart.css";

const Item = ({ title, image, price, qty, idProduct, click, total }) => {
  return (
    <>
      <div className="itemcart">
        <img src={image} alt="" className="itemcart__img" />
        <p className="itemcart__title">{title}</p>
        <p className="itemcart__price">Precio: ${price} c/u</p>
        <p className="itemcart__qty">{qty} unidades</p>
        <p className="itemcart__price">Total: ${total}</p>
        <button className="itemcart__btn" onClick={click}>
          Eliminar producto
        </button>
      </div>
    </>
  );
};

export default Item;
