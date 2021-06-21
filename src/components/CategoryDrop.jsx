import React, { Component } from "react";
import { Item } from "./Item";

import sorturi from "../assets/sorturi";
import { Col, Row } from "reactstrap";

const Sorturi = sorturi;

class CategoryDropdown extends Component {
  state = { isOpen: false };

  render() {
    return (
      <Row
        style={{
          "margin-left": 0,
          "margin-right": 0,
          backgroundColor: this.props.color,
        }}
      >
        {Sorturi[this.props.fruit].sorts.map((n) => {
          return (
            <Col
              style={{ "padding-left": 0, "padding-right": 0 }}
              md="3"
              xs="6"
            >
              <Item img={n.img} name={n.name} />
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default CategoryDropdown;
