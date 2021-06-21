import React from "react";
import { Col, UncontrolledCollapse, Row } from "reactstrap";
import CategoryDropdown from "../components/CategoryDrop";
import Header from "../components/Header";

import Sorturi from "../assets/sorturi";

import { useTranslation } from "react-i18next";

const color = [
  "f5b335",
  "ab1254",
  "8264a9",
  "e9540d",
  "d9272e",
  "00833e",
  "00953b",
  "61a60e",
  "9c9380",
];

export default function Catalog() {
  const { t } = useTranslation();
  return (
    <div>
      <Header />

      <Col id="fruitCatalog" xs="12"md={{ size: "8", offset: 2 }}>
        {Sorturi.map((n) => {
          return (
            <Row>
              <div
                style={{ "border-bottom": `5px solid #${color[n.id]}`}}
                className="toggle-category"
                id={`toggler${n.id}`}
              >
                <img
                  style={{padding:"1rem"}}
                  src={`https://img.icons8.com/ios-glyphs/60/${color[n.id]}/${
                    n.id !== 3 ? n.category : "peach--v2.png"
                  }`}
                  alt=""
                />
                <h1>{t(`${n.category}`)}</h1>
              </div>
              <UncontrolledCollapse toggler={`#toggler${n.id}`}>
                <CategoryDropdown  fruit={n.id} />
              </UncontrolledCollapse>
            </Row>
          );
        })}
      </Col>
      </div>
  );
}
