import React, { Component } from "react";
import { Col, Row } from "reactstrap";

class Selector extends Component {
  state = {};
  render() {
    return (
      <div>
        <a href="/catalog">
          <Row id="selector">
            <Col md="3" xs="6">
              <h1>Catalog</h1>
            </Col>
            <Col md="9" xs="6">
              <img
                src="https://www.dalmontevivai.com/wp-content/uploads/2019/09/IMG_1141.jpg"
                alt=""
              />
            </Col>
          </Row>
        </a>
        <a href="/gallery">
          <Row id="selector">
            <Col md="3" xs="6">
              <h1>Galerie</h1>
            </Col>

            <Col md="9" xs="6">
              <img
                src=" https://www.dalmontevivai.com/wp-content/uploads/2019/08/savarna-set13-61.jpg"
                alt=""
              />
            </Col>
          </Row>
        </a>
      </div>
    );
  }
}

export default Selector;
