import React from "react";

import Header from "../Components/Header.jsx";
import Contact from "../Components/Contact.jsx";
import { useTranslation } from "react-i18next";
import Sorturi from "../assets/sorturi.js";
import { Col, Row } from "reactstrap";

export default function Fruit(props) {
  const { t } = useTranslation();
  let fruit = props.fruit;
  let sorts = Sorturi[fruit].sorts;
  return (
    <div>
      <Header></Header>
      <h1 id="MainText">{t("selection") + t(Sorturi[fruit].category)}</h1>
      <div id="background">
        <Col xs="12" md={{ size: "8", offset: 2 }}>
          <Row>
            {sorts.map((n) => {
              return (
                <Col id="item" md="3" xs="6">
                  <div id="ripe">{RipeToData(n.ripe)}</div>
                  <a href="#contact">
                    <img
                      id={`item-image${n.ripe !== "" ? 2 : ""}`}
                      src={n.img}
                      alt={n.name}
                    />
                  </a>
                  <h5 id="image-text">{n.name}</h5>
                </Col>
              );
            })}
          </Row>
          <img src={Sorturi[fruit].ripeinfo} alt="" id="sort-ripe-info" />
        </Col>
        <Contact />
      </div>
    </div>
  );
}
function RipeToData(n) {
  const { t } = useTranslation();
  let a = n.split(" ");
  return `${t(a[0])} ${t(a[1])}`;
}
