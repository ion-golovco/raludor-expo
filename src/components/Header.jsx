import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Col,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <img src="https://i.imgur.com/YnUINvn.png" alt="" id="staticimage" />

      <div id="navbar">
        <Col xs="12" md={{ size: "10", offset: 1 }}>
          <Navbar expand="md">
          <NavbarBrand href="/">
              <img
                src="https://i.imgur.com/QfzMsLY.png"
                alt="logo"
                id="activelogo"
              />
              <img
                src="https://i.imgur.com/WsV4pJN.png"
                alt="logo"
                width="90px"
              />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} id="toggle-button"  />
            <Collapse isOpen={isOpen} navbar>
              <Nav  navbar>
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
                  <NavLink id="navbarItem" href="#contact">
                    {t("contact")}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id="navbarItem" href="/accessory">
                    {t("accessory")}
                  </NavLink>
                </NavItem>
                <UncontrolledButtonDropdown>
                  <DropdownToggle id="dropdown" caret>
                    {t("language")}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <div onClick={() => changeLanguage("ro")}>Română</div>
                    </DropdownItem>
                    <DropdownItem>
                      <div onClick={() => changeLanguage("ru")}>Русский</div>
                    </DropdownItem>
                    <DropdownItem>
                      <div onClick={() => changeLanguage("en")}>English</div>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </Col>
      </div>
    </div>
  );
}
