import React from "react";
import Spinner from "./Spinner";
import ItemCount from "./ItemCount";
import CheckoutButton from "./CheckoutButton";
import "./itemdetail.css";
import { useState } from "react";

const ItemDetail = ({ drinks }) => {
  const [itemCount, setItemCount] = useState(0);

  // Creo la funcion "addToCart" para agregar los items al carrito con validaciones con respecto al stock y no agregar 0 productos
  const addToCart = (count) => {
    if (count === 0) {
      alert(`Por favor seleccione cuantos productos quiere agregar al carrito`);
    } else if (count > 0) {
      alert(`Agregaste ${count} productos al carrito de compra`);
      setItemCount(count);
    }
  };

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
            {itemCount === 0 ? (
              <ItemCount initial={0} stock={drinks.stock} onAdd={addToCart} />
            ) : (
              <CheckoutButton />
            )}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default ItemDetail;
