import React, { Component } from "react";
import { Col } from "reactstrap";
import CategoryDropdown from "../components/CategoryDrop";

import Sorturi from "../assets/sorturi";

class Catalog extends Component {
  state = {};
  render() {
    return (
      <div>
        <Col>
          {Sorturi.map((n) => {
            return <CategoryDropdown fruit={n.id} />;
          })}
        </Col>
      </div>
    );
  }
}

export default Catalog;
