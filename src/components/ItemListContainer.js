import React from "react";
import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./itemList";
import customFetch from "./ulility/customFetch";
import "./itemlistcontainer.css";
import { useParams } from "react-router-dom";
const { drinks } = require("./ulility/drinks");

const ItemListContainer = ({ desc }) => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    if (idCategory === undefined) {
      customFetch(2000, drinks)
        .then((result) => setDatos(result))
        .catch((err) => console.log(err));
    } else {
      customFetch(
        2000,
        drinks.filter((item) => item.nCategory === parseInt(idCategory))
      )
        .then((result) => setDatos(result))
        .catch((err) => console.log(err));
    }
  }, [idCategory]);

  return (
    <>
      <div className="container">
        <p>{desc}</p>
        <ItemList drinks={datos} />
      </div>
    </>
  );
};

export default ItemListContainer;
