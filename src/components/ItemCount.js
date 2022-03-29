import React from "react";
import "./itemcount.css";
import { useState } from "react";

const ItemCount = (props) => {
  // Creo la varaible "stock" para pasarla como prop
  let stock = props.stock;

  // Defino el useState
  const [count, setCount] = useState(props.initial);

  // Creo la funcion "increment" para aumentar el item, con un condicional que checkee el stock
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  // Creo la funcion "decrement" para aumentar el item, con un condicional que checkee el stock
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Creo la funcion "addToCart" para agregar los items al carrito con validaciones con respecto al stock y no agregar 0 productos
  const addToCart = () => {
    if (count === 0) {
      alert(`Por favor seleccione cuantos productos quiere agregar al carrito`);
    } else if (count > 0) {
      alert(`Agregaste ${count} productos al carrito de compra`);
    }
  };

  return (
    <>
      <div className="count">
        <span className="count__title">Producto</span>
        <div className="count__container">
          <button onClick={decrement} className="count__btn">
            -
          </button>
          <span className="count__item">{count}</span>
          <button onClick={increment} className="count__btn">
            +
          </button>
        </div>

        <button onClick={addToCart} className="count__btnAdd">
          Agregar al Carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
