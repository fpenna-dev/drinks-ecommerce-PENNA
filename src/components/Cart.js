import React from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import ItemCart from "./ItemCart";
import "./cart.css";

const Cart = () => {
  const data = useContext(CartContext);

  return (
    <>
      <div className="cart__container">
        <button className="cart__btn" onClick={data.removeCart}>
          Eliminar todo
        </button>
        {data.cartList.length > 0 &&
          data.cartList.map((item) => (
            <ItemCart
              key={item.idItem}
              title={item.titleItem}
              price={item.priceItem}
              image={item.imageItem}
              qty={item.cantItem}
              click={() => data.removeItem(item.idItem)}
            ></ItemCart>
          ))}
      </div>
    </>
  );
};

export default Cart;
