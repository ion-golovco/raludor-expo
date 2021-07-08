import React from 'react';

import Header from '../../Components/Header.jsx';
import Contact from '../../Components/Contact.jsx'
import { useTranslation } from "react-i18next";

import Sorturi from "../../assets/sorturi.js";
import { Col, Row } from 'reactstrap';

const fruit = 6

export default function Fruit() {
    const { t } = useTranslation();
    let sorts = Sorturi[fruit].sorts
        return ( <div>
                <Header></Header>
                <h1 id="MainText">{t('selection') +t(Sorturi[fruit].category)}</h1>
                <div id="background">
                <Col xs="12"md={{ size: "8", offset: 2 }}>
                <Row>
                {sorts.map((n)=>{
                    return ( 
                    <Col id='item'md="3"xs="6">
                        <a href="#contact">
                        <img id="item-image"src={n.img} alt={n.name} />
                        </a>
                        <h5 id="image-text">{n.name}</h5>
                    </Col> );
                })}
                </Row>
                <img src={Sorturi[fruit].ripeinfo} alt="" id="sort-ripe-info"/>
                </Col>
                <Contact />
                </div>
        </div> );
    
}