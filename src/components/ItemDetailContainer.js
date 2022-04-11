import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import customFetch from "./ulility/customFetch";
import "./itemlistcontainer.css";
const { drinks } = require("./ulility/drinks");

const ItemDetailContainer = () => {
  const [dato, setDato] = useState({});

  useEffect(() => {
    customFetch(2000, drinks[3])
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
