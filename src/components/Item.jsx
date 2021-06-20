import React from "react";
import { Container } from "reactstrap";

export function Item(props) {
  const { img, name } = props;
  return (
    <Container>
      <img  id="item-image" src={img} alt={name} />
      <h5>{name}</h5>
    </Container>
  );
}
