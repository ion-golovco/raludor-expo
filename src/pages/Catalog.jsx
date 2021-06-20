import React from "react";
import { Col, UncontrolledCollapse, Row } from "reactstrap";
import CategoryDropdown from "../components/CategoryDrop";
import Header from "../components/Header";

import Sorturi from "../assets/sorturi";

import { useTranslation } from "react-i18next";

const pastel = [
  "FFE6C2",
  "FFC2C3",
  "DAF3C4",
  "FAFFC2",
  "FFE0AD",
  "D1FFAD",
  "E3E7DA",
  "EEC6BE",
  "FFD199",
  "F2CDBA",
];
const color = [
  "FFC370",
  "FF7073",
  "B4E788",
  "F3FF70",
  "FFC870",
  "AEFF70",
  "BEC7A9",
  "E29C8D",
  "FFBF70",
  "E8A787",
];

export default function Catalog() {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <Col md={{ size: "10", offset: 1 }}>
        {Sorturi.map((n) => {
          return (
            <Row>
              <div
                style={{ "border-bottom": `5px solid #${color[n.id]}` }}
                className="toggle-category"
                id={`toggler${n.id}`}
              >
                <img src="" alt="" />
                <h1>{t(`${n.category}`)}</h1>
              </div>
              <UncontrolledCollapse toggler={`#toggler${n.id}`}>
                <CategoryDropdown color={`#${pastel[n.id]}`} fruit={n.id} />
              </UncontrolledCollapse>
            </Row>
          );
        })}
      </Col>
    </div>
  );
}
