import React from "react";
import Spinner from "./Spinner";
import ItemCount from "./ItemCount";
import CheckoutButton from "./CheckoutButton";
import "./itemdetail.css";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";

const ItemDetail = ({ drinks, id }) => {
  const [itemCount, setItemCount] = useState(0);
  const data = useContext(CartContext);

  // Creo la funcion "add" para agregar los items al carrito con validaciones con respecto al stock y no agregar 0 productos
  const add = (count) => {
    if (count === 0) {
      alert(`Por favor seleccione cuantos productos quiere agregar al carrito`);
    } else if (count > 0) {
      alert(`Agregaste ${count} productos al carrito de compra`);
      setItemCount(count);
      data.addToCart(drinks, count, id);
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
              <ItemCount initial={0} stock={drinks.stock} onAdd={add} />
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
