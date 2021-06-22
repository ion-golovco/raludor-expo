import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Col,
} from "reactstrap";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  return (
    <div>
      <img src="https://i.imgur.com/YnUINvn.png" alt="" id="staticimage" />

      <div id="navbar">
        <Col xs="12" md={{ size: "10", offset: 1 }}>
          <Navbar expand="md">
            <NavbarBrand href="/">
              <img
                src="https://i.imgur.com/No0faMY.png"
                alt="logo"
                id="activelogo"
              />
              <img
                src="https://i.imgur.com/WsV4pJN.png"
                alt="logo"
                width="90px"
              />
            </NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink id="navbarItem" href="/">
                    {t("home")}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id="navbarItem" href="/catalog/">
                    {t("catalog")}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id="navbarItem" href="/gallery">
                    {t("gallery")}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id="navbarItem" href="/#contact">
                    {t("contact")}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id="navbarItem" href="/accessory">
                    {t("accessory")}
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Col>
      </div>
    </div>
  );
}
