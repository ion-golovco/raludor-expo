import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Info from "../components/Info";

class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Info />
        <Selector />
        <Footer />
      </div>
    );
  }
}

export default Main;
