import React from "react";
import { Col, Row } from "reactstrap";

import { useTranslation } from "react-i18next";
export default function Info() {
const {t} = useTranslation()
    return (
      <>
      <div id="Info"  style={{  "margin-top":"75vh"}}>
      <Row>
        <Col xs="12" md={{ size: "10", offset: 1 }}>
          <Row>
            <Col md="6">
            <h1>{t("introduction.part1head")}</h1>
              <p>{t("introduction.part1")}</p>
            </Col>
            <Col md="5">
                
              <img
                src="https://i.imgur.com/ViBqavl.jpg"
                alt=""
                width="100%"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
      <div id="Info" style={{  "margin-top":"30vh"}}>
        <Row>
          <Col xs="12" md={{ size: "10", offset: 1 }}>
            <Row>
              <Col md="5">
                <img
                  src="https://i.imgur.com/x1bF6pm.jpg"
                  alt=""
                  width="100%"
                />
              </Col>
 
              <Col md="6">
                  <h1>{t("introduction.part2head")}</h1>
                <p>{t("introduction.part2")}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      
    </>
    );
  
}
