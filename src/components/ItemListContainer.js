import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./itemList";
import "./itemlistcontainer.css";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "./ulility/firebaseConfig";

const ItemListContainer = ({ desc }) => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    if (idCategory === undefined) {
      const fetchFromFirestore = async () => {
        const querySnapshot = await getDocs(collection(db, "drinks"));
        const dataFromFirestore = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        return dataFromFirestore;
      };
      fetchFromFirestore()
        .then((result) => setDatos(result))
        .catch((err) => console.log(err));
    } else {
      const fetchFromFirestore2 = async () => {
        const querySnapshot = await getDocs(collection(db, "drinks"));
        const dataFromFirestore = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const categoryFilter = dataFromFirestore.filter(
          (item) => item.nCategory === idCategory
        );
        return categoryFilter;
      };
      fetchFromFirestore2()
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
