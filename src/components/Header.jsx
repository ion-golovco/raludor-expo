import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Col,
} from "reactstrap";

class Header extends Component {
  state = {};
  render() {
    return (
      <div id='navbar' >
      <Col xs="12" md={{ size: "10", offset: 1 }}>
        <Navbar dark expand="md" >
          <NavbarBrand href="/">
            <img
              src="https://i.imgur.com/3fJzG4b.png"
              alt="logo" 
              width="90px"
            />
          </NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink id="navbarItem" href="/catalog/">CATALOG</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="navbarItem" href="/gallery">GALERIE </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="navbarItem" href="/contact">CONTACT</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Col>
      </div>
    );
  }
}

export default Header;
