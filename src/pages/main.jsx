import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Info from "../components/Info.jsx";
import Contact from "../components/Contact.jsx";
import { Col, Row } from "reactstrap";

import { useTranslation } from "react-i18next";

export default function Main() {
  const {t} = useTranslation()
  return (
    <div>
      <Header />

      <Row>
        <Col xs="12" md={{ size: "6", offset: 1 }}>
          <p id="Hello">{t('hello')}</p>
        </Col>
      </Row>
      <Info />
      <Contact />
      <Footer />
    </div>
  );
}
