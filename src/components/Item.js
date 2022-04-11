import React from "react";
import "./item.css";

const Item = ({ title, image, price, stock }) => {
  return (
    <>
      <div className="card">
        <p className="card__title">{title}</p>
        <img src={image} alt="" className="card__img" />
        <p className="card__price">Precio: ${price}</p>
        <p className="card__stock">Stock disponible: {stock} unidades</p>
        <button className="card__btn">Ver detalle</button>
      </div>
    </>
  );
};

export default Item;
