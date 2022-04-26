import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import customFetch from "./ulility/customFetch";
import "./itemlistcontainer.css";
import { useParams } from "react-router-dom";
const { drinks } = require("./ulility/drinks");

const ItemDetailContainer = () => {
  const [dato, setDato] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    customFetch(
      2000,
      drinks.find((item) => item.id === parseInt(idItem))
    )
      .then((result) => setDato(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container">
        <ItemDetail drinks={dato} />
      </div>
    </>
  );
};

export default ItemDetailContainer;
