import React from "react";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ title, image, price, stock, idProduct }) => {
  return (
    <>
      <div className="card">
        <p className="card__title">{title}</p>
        <img src={image} alt="" className="card__img" />
        <p className="card__price">Precio: ${price}</p>
        <p className="card__stock">Stock disponible: {stock} unidades</p>
        <Link to={"/item/" + idProduct} className="card__btn">
          Ver Detalle
        </Link>
      </div>
    </>
  );
};

export default Item;
