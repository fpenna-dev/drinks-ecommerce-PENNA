import React from "react";
import Item from "./Item";
import Spinner from "./Spinner";
import "./itemlist.css";

const itemList = ({ drinks }) => {
  return (
    <>
      <div className="itemlist__container">
        {drinks.length > 0 ? (
          drinks.map((item) => (
            <Item
              key={item.id}
              title={item.name}
              image={item.image}
              price={item.price}
              stock={item.stock}
            />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default itemList;
