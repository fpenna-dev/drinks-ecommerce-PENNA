import React from "react";
import Spinner from "./Spinner";
import ItemCount from "./ItemCount";
import "./itemdetail.css";

const ItemDetail = ({ drinks }) => {
  return (
    <>
      {drinks.name ? (
        <div className="itemdetail__container">
          <img src={drinks.image} alt="" className="itemdetail__image" />
          <div className="itemdetail__info">
            <h2 className="itemdetail__title">{drinks.name}</h2>
            <p className="itemdetail__desc">{drinks.desc}</p>
            <p className="itemdetail__price">Precio: ${drinks.price}</p>
            <p className="itemdetail__stock">
              Stock disponible: {drinks.stock} unidades
            </p>
            <ItemCount initial={1} stock={drinks.stock} />
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default ItemDetail;
