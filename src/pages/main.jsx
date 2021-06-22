import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Info from "../components/Info";
import Contact from "../components/Contact";
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
