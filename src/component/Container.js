import React from "react";
import Items from "./Items";

const Container = ({ items, isLoading }) => {
  return (
    <div className="cards">
      {items.map(item => (
        <Items item={item} key={item.char_id} />
      ))}
    </div>
  );
};

export default Container;
