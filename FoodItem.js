import React from "react";
import ItemDetail from "./ItemDetail"; 

function FoodItem({ items, cantFind }) {
  return (
    <ItemDetail items={items} cantFind={cantFind} />
  );
}

export default FoodItem;
