import React from "react";



export function Item(props) {
  const { img, name } = props;
  return (
    <div>
      <img id="item-image" src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
}
