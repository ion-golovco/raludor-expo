import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Info from "../components/Info";
import Selector from "../components/Selector";
import Carousel from "../components/Carousel";

class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <Info />
        <Selector />
        <Footer />
      </div>
    );
  }
}

export default Main;
