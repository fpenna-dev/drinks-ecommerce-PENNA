import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const addToCart = (item, cant) => {
    let find = cartList.find((drinks) => drinks.idItem === item.id);
    if (find === undefined) {
      setCartList([
        ...cartList,
        {
          idItem: item.id,
          titleItem: item.name,
          imageItem: item.image,
          priceItem: item.price,
          cantItem: cant,
        },
      ]);
    } else {
      find.cantItem += cant;
    }
  };

  const removeCart = () => {
    setCartList([]);
  };

  const removeItem = (id) => {
    let itemRemove = cartList.filter((item) => item.idItem != id);
    setCartList(itemRemove);
  };
  return (
    <CartContext.Provider
      value={{ cartList, addToCart, removeCart, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
