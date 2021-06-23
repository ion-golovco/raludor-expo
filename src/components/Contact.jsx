import React from "react";
import { Col, Row } from "reactstrap";

import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div id="contact">
      <div id="background">
        <Col xs="12" md={{ size: "6", offset:3 }}>
          <Row>
          <Col xs="3" md="3">
            <div style={{ "margin-left": "2rem","margin-top": "2rem" }}>
              <Row>
                <img
                  id="selected"
                  src="https://img.icons8.com/ios-filled/90/f1b24a/facebook-new.png"
                />
                <img src="https://img.icons8.com/ios-filled/90/ffffff/facebook-new.png" />
              </Row>
              <Row>
                <img
                  id="selected"
                  src="https://img.icons8.com/ios-filled/90/f1b24a/facebook-messenger.png"
                />
                <img src="https://img.icons8.com/ios-filled/90/ffffff/facebook-messenger.png" />
              </Row>
              <Row>
                <img
                  id="selected"
                  src="https://img.icons8.com/ios-filled/90/f1b24a/whatsapp--v1.png"
                />
                <img src="https://img.icons8.com/ios-filled/90/ffffff/whatsapp--v1.png" />
              </Row>
            </div>
            </Col>
            <Col xs="9"md="9">
            <div >
              <h1>{t("contact")}</h1>
              <h4 style={{ "margin-top": "4rem" }}>Republica Moldova</h4>
              <h4>Chișinău, str . Tighina 49A</h4>
              <h4>E-mail : dorin_talmaci@mail.ru</h4>
              <h4>+373 60192045</h4>
            </div>
            </Col>
            
          </Row>
        </Col>
      </div>
    </div>
  );
}
