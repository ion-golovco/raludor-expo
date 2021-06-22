import React from "react";
import { Col, Row } from "reactstrap";

import { useTranslation } from "react-i18next";

export default function Contact() {
  const {t}=useTranslation()

    return (

       <div id="contact">
         <div id="background">
           <Col xs="12"md={{ size: "10", offset: 1 }}>
         <Row>
         <Col>
        <div
          class="fb-page"
          data-href="https://www.facebook.com/Proiectare-vii-livezi-106166314402118"
          data-tabs="timeline"
        >
          <blockquote
            cite="https://www.facebook.com/Proiectare-vii-livezi-106166314402118"
            class="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/Proiectare-vii-livezi-106166314402118">
              Proiectare vii livezi
            </a>
          </blockquote>
        </div>
        </Col>
        <Col>
        <div style={{"margin":"4rem"}}>
        <h1>{t('contact')}</h1>
        <h4 style={{"margin-top":"4rem" }}>Republica Moldova</h4>
        <h4>Chișinău, str . Tighina 49A</h4>
        <h4>E-mail : dorin_talmaci@mail.ru</h4>
        <h4>+373 60192045</h4>
        </div>
        </Col>
        </Row>
        </Col>
        </div>
      </div>
    )
}
