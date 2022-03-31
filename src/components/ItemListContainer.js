import React from "react";
import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./itemList";
import customFetch from "./ulility/customFetch";
import "./itemlistcontainer.css";
const { drinks } = require("./ulility/drinks");

const ItemListContainer = ({ desc }) => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    customFetch(2000, drinks)
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container">
        <p>{desc}</p>
        <ItemList drinks={datos} />
        <ItemCount initial={0} stock={5} />
      </div>
    </>
  );
};

export default ItemListContainer;
