import React from "react";
import Header from "../Components/Header.jsx";
import Info from "../Components/Info.jsx";
import Contact from "../Components/Contact.jsx";
import { Col, Row } from "reactstrap";

import { useTranslation } from "react-i18next";

export default function Main() {
  const {t} = useTranslation()
  return (
    <div>
      <Header />

      <Row>
        <Col xs="12" md={{ size: "7", offset: 1 }}>
          <p id="Hello">{t('hello')}</p>
        </Col>
      </Row>
      <Info />
      <Contact />
    </div>
  );
}
