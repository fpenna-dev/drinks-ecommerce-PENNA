import React from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import ItemCart from "./ItemCart";
import "./cart.css";
import { Link } from "react-router-dom";
import Order from "./Order";

const Cart = () => {
  const data = useContext(CartContext);

  return (
    <>
      <div className="cart__container">
        <div className="cart__container--mod">
          <Link to="/">
            <button className="cart__btn">Continuar Comprando</button>
          </Link>
          {data.cartList.length == 0 ? (
            <span className="cart__empty">Carrito vacio 😫</span>
          ) : (
            <button className="cart__btn" onClick={data.removeCart}>
              Eliminar todo
            </button>
          )}
        </div>
        <div className="cart__container--mod2">
          <div className="cart__container--mod3">
            -
            {data.cartList.length > 0 &&
              data.cartList.map((item) => (
                <ItemCart
                  key={item.idItem}
                  title={item.titleItem}
                  price={item.priceItem}
                  image={item.imageItem}
                  qty={item.cantItem}
                  click={() => data.removeItem(item.idItem, item.cantItem)}
                  total={data.calcPorItem(item.idItem)}
                />
              ))}
          </div>
          {data.cartList.length > 0 && (
            <Order
              subtotal={data.calcSubTotal()}
              impuesto={data.calcImp()}
              total={data.totalCompra()}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
