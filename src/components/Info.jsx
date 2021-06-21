import React, { Component } from "react";
import { Col, Row } from "reactstrap";

class Info extends Component {
  state = {};
  render() {
    return (
      <div id="Info">
        <Row>
          <Col xs="12" md={{ size: "8", offset: 2 }}>
            <Row>
              <Col md="4">
                <img
                  src="https://i.imgur.com/rLDbLUn.jpg"
                  alt=""
                  width="100%"
                />
              </Col>
              <Col md="8">
                  <h1  id="hrgreen">Noi suntem RALUDOR</h1>
                <p>sfasdgadsgsdfh</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Info;
