import React from 'react';

import Header from '../../Components/Header.jsx';
import { useTranslation } from "react-i18next";

import Sorturi from "../../assets/sorturi.js";
import { Col, Row } from 'reactstrap';

const fruit = 10

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
                        <img id="item-image"src={n.img} alt={n.name} />
                        <h5 id="image-text">{n.name}</h5>
                    </Col> );
                })}
                </Row>
                </Col>
                </div>
        </div> );
    
}