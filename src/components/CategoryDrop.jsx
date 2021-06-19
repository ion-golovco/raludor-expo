import React, { Component } from "react";
import { Item } from "./Item";

import sorturi from "../assets/sorturi";
import { Col, Row } from "reactstrap";

const Sorturi = sorturi;

class CategoryDropdown extends Component {
  state = {};

  render() {
    return (
      <Row>
        {Sorturi[this.props.fruit].category}
        {Sorturi[this.props.fruit].sorts.map((n) => {
          return <Col md='3' xs='6' style={{ "padding-left": 0, "padding-right": 0 }}><Item img={n.img} name={n.name}/></Col>
        })}
      </Row>
    );
  }
}

export default CategoryDropdown;
