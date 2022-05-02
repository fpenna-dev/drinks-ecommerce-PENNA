import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import "./itemlistcontainer.css";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "./ulility/firebaseConfig";

const ItemDetailContainer = () => {
  const [dato, setDato] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    const getUniqueItem = async () => {
      const docRef = doc(db, "drinks", idItem);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setDato(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      return docSnap;
    };
    getUniqueItem();
  }, []);

  return (
    <>
      <div className="container">
        <ItemDetail drinks={dato} id={idItem} />
      </div>
    </>
  );
};

export default ItemDetailContainer;
