import React from "react";
import "./itemcount.css";
import { useState, useEffect } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  // Defino el useState

  const [count, setCount] = useState(0);

  // Creo la funcion "increment" para aumentar el item, con un condicional que checkee el stock
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  // Creo la funcion "decrement" para aumentar el item, con un condicional que checkee el stock
  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
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

        <button onClick={() => onAdd(count)} className="count__btnAdd">
          Agregar al Carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
