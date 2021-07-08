import React from "react";
import { Col, Row } from "reactstrap";
import Header from "../Components/Header.jsx";

import PopularItems from "../Components/PopularItems.jsx";
import Contact from '../Components/Contact.jsx'
import Sorturi from "../assets/sorturi";

import { useTranslation } from "react-i18next";

export default function Catalog() {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <h1 style={{"margin-top":"1em"}}id="MainText">{t('popular')}</h1>
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
      <Contact />
      </div>
      </div>
  );
}
