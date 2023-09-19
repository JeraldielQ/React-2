import React from "react";
import ItemList from "./ItemList"; 

function DrinkMenu({ items, basePath, title }) {
  return (
    <ItemList items={items} basePath={basePath} title={title} />
  );
}

export default DrinkMenu;