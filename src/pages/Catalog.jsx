import React from "react";
import { Col, Row } from "reactstrap";
import Header from "../components/Header";

import PopularItems from "../components/PopularItems";
import Sorturi from "../assets/sorturi";

import { useTranslation } from "react-i18next";

export default function Catalog() {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <PopularItems />
      <h1 id="MainText">{t('catalog')}</h1>
      
      <div id="fruitCatalog" >
      <Col xs="12"md={{ size: "8", offset: 2 }}>
        <Row>
        {Sorturi.map((n) => {
          return ( <Col md="3"xs="6">
            <a href={`/catalog/${n.category}`}>
            <img id="item-image"src={n.sorts[1].img} alt="" />
            </a>
            <p>{t(n.category)}</p>
           
          </Col> );
        })}
        </Row>
      </Col>
      </div>
      </div>
  );
}
