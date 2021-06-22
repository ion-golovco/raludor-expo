import React, { Component } from 'react';
import Header from '../components/Header.jsx';
import images from '../assets/images.js';
import { Col, Row } from 'reactstrap';


class Gallery extends Component {
    state = {  }
    render() { 
        return ( <div>
            <Header />
            <div id="background">
            <Col xs="12"md={{ size: "10", offset: 1 }}>
            <iframe width="100%" height="500px" src="https://www.youtube.com/embed/tTSKq2uUa4A" title="YouTube" frameborder="0" allowfullscreen></iframe>
            <Row id="gallery">
            {images.map((n)=> {return (<Col md="3"xs="6">
                <img  src={n} alt="" />
            </Col>)})}
            </Row>
            </Col>
            </div>
        </div> );
    }
}
 
export default Gallery;