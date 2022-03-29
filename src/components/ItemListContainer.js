import React from "react";
import ItemCount from "./ItemCount";
import "./itemlistcontainer.css";

const ItemListContainer = ({ desc }) => {
  return (
    <>
      <div className="container">
        <p>{desc}</p>
        <ItemCount initial={0} stock={5} />
      </div>
    </>
  );
};

export default ItemListContainer;
