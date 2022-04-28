import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const addToCart = (item, cant, id2) => {
    let find = cartList.find((drinks) => drinks.idItem === item.id);
    if (find === undefined) {
      setCartList([
        ...cartList,
        {
          idItem: id2,
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

  const removeItem = (id, cantidad) => {
    let itemRemove = cartList.filter((item) => item.idItem != id);
    setCartList(itemRemove);
    // if (cantidad > 1) {
    //   setCartList([
    //     ...cartList,
    //     {
    //       cantItem: (cantidad -= 1),
    //     },
    //   ]);
    // } else {
    //   setCartList(itemRemove);
    // }
  };

  const calcPorItem = (idItem) => {
    let index = cartList.map((item) => item.idItem).indexOf(idItem);

    return cartList[index].priceItem * cartList[index].cantItem;
  };

  const calcSubTotal = () => {
    let totalPerItem = cartList.map((item) => calcPorItem(item.idItem));
    return totalPerItem.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  };

  const calcImp = () => {
    return Math.round(calcSubTotal() * 0.21);
  };

  const totalCompra = () => {
    return calcSubTotal() + calcImp();
  };

  let valorInicial = 0;
  const calcCart = () => {
    let cants = cartList.map((item) => item.cantItem);
    return cants.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      valorInicial
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeCart,
        removeItem,
        calcPorItem,
        calcSubTotal,
        calcImp,
        totalCompra,
        calcCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
