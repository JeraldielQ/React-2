import React from "react";
import ItemList from "./ItemList"; 

function FoodMenu({ items, basePath, title }) {
  return (
    <ItemList items={items} basePath={basePath} title={title} />
  );
}

export default FoodMenu;