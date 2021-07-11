import React, { Component } from 'react';
import Header from '../Components/Header.jsx';
import images from '../assets/assets.js';
import { Col, Row } from 'reactstrap';
import Contact from "../Components/Contact.jsx";

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
            <Contact />
        </div> );
    }
}
 
export default Gallery;