import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../Components/Header";

import { Accessory } from "../assets/assets.js";
import Contact from "../Components/Contact";
import { Col, Row } from "reactstrap";

let accessories = Accessory;

export default function Accessor() {
  const { t } = useTranslation();
  return (
    <div >
      <Header />
      <h1 style={{ "margin-top": "1em" }} id="MainText">
        {t("accessory")}
      </h1>
      <div id="background">
      <Col xs="12" md={{ size: "8", offset: 2 }}>
        <Row >
          {accessories.map((n) => {
            return (
              <Col id="item" md="3" xs="6">
                <div id="ripe">{}</div>
                <a href="#contact">
                  <img id="item-image" src={n.img} alt={n.name} />
                </a>
                <h5 id="image-text">{t(n.name)}</h5>
              </Col>
            );
          })}
        </Row>
      </Col>
      </div>
      <Contact />
    </div>
  );
}
