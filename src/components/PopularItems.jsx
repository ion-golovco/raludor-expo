import React from "react";
import { Col } from "reactstrap";

import Sorturi from "../assets/sorturi";

import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function PopularItems() {
  const { t } = useTranslation();

  const sorts = [
    
    Sorturi[0].sorts[17],
    Sorturi[0].sorts[18],
    {
        name: t("hello"),
        img: "https://i.imgur.com/NULkr3b.jpg",
    },
    Sorturi[0].sorts[8],
    Sorturi[1].sorts[2],
    Sorturi[1].sorts[7],
    Sorturi[1].sorts[4],
    Sorturi[1].sorts[8],
    Sorturi[1].sorts[16],
    
  ];
  return (
    <div>
      <Col xs="12">
        <Carousel
          draggable={false}
          showDots={true}
          centerMode={false}
          focusOnSelect={false}
          keyBoardControl={true}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={2000}
          responsive={responsive}
        >
          {sorts.map((n) => {
            return (
              <div id="itemscroll">
                <img id="scrollimg" src={n.img} alt={n.img} />
                <p id="scrolltext">{n.name}</p>
              </div>
            );
          })}
        </Carousel>
        ;
      </Col>
    </div>
  );
}
