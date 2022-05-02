import React from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import ItemCart from "./ItemCart";
import "./cart.css";
import { Link } from "react-router-dom";
import Order from "./Order";
import {
  serverTimestamp,
  setDoc,
  doc,
  collection,
  updateDoc,
  increment,
} from "firebase/firestore";
import db from "./ulility/firebaseConfig";

const Cart = () => {
  const data = useContext(CartContext);

  const checkout = () => {
    const itemsDB = data.cartList.map((item) => ({
      id: item.idItem,
      title: item.titleItem,
      price: item.priceItem,
      qty: item.cantItem,
    }));

    data.cartList.forEach(async (item) => {
      const itemRef = doc(db, "drinks", item.idItem);
      await updateDoc(itemRef, {
        stock: increment(-item.cantItem),
      });
    });

    let order = {
      buyer: {
        name: "Facundo Penna",
        email: "facu@penna.com",
        phone: "456789",
      },
      date: serverTimestamp(),
      items: itemsDB,
      total: data.totalCompra(),
    };
    console.log(order);

    const createOrder = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };

    createOrder()
      .then((result) =>
        alert(
          "Su orden a sido pedida.\n\n\nNumero de ID: " + result.id + "\n\n"
        )
      )
      .catch((err) => console.log(err));

    data.removeCart();
  };
  console.log(data.cartList);
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
              onClick={checkout}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
