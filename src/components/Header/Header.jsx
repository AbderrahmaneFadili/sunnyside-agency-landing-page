import React, { useState } from "react";
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLogo,
  ToggleMenu,
  Nav,
  NavList,
  NavItem,
  NavLink,
  NavButton,
} from "./Header.styles";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <HeaderWrapper>
      <HeaderContainer>
        {/* logo */}
        <HeaderLogo src={require("../../images/logo.svg").default} />
        {/* Toggle Menu icon */}
        <ToggleMenu
          src={require("../../images/icon-hamburger.svg").default}
          onClick={handleShowMenu}
        />
        {/* Nav Menu */}
        <Nav showMenu={showMenu}>
          <NavList>
            <NavItem>
              <NavLink href="#">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavButton href="#">Contact</NavButton>
            </NavItem>
          </NavList>
        </Nav>
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
