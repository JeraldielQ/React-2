import React from "react";
import ItemDetail from "./ItemDetail"; 

function Drink({ items, cantFind }) {
  return (
    <ItemDetail items={items} cantFind={cantFind} />
  );
}

export default Drink;
