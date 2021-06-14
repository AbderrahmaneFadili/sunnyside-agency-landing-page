import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 2rem 1rem;
  position: absolute;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.img``;

export const ToggleMenu = styled.img`
  cursor: pointer;

  @media screen and (min-width: 950px) {
    display: none;
  }
`;

/* Nav Menu */
export const Nav = styled.nav`
  position: fixed;
  background-color: var(--white);
  width: 95%;
  left: 50%;
  transform: translateX(-50%);
  top: 130px;
  text-align: center;
  padding: 2rem 0;
  display: ${({ showMenu }) => (showMenu ? "block" : "none")};

  &::after {
    position: absolute;
    content: "";
    width: 40px;
    height: 40px;
    right: 0;
    top: -40px;
    background-color: transparent;
    border-right: 20px solid var(--white);
    border-bottom: 20px solid var(--white);
    border-left: 20px solid transparent;
    border-top: 20px solid transparent;
  }

  @media screen and (min-width: 950px) {
    position: initial;
    background-color: initial;
    width: initial;
    left: initial;
    transform: initial;
    top: initial;
    text-align: initial;
    padding: initial;
    display: initial;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  @media screen and (min-width: 950px) {
    display: flex;
    align-items: center;
  }
`;

export const NavItem = styled.li`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 950px) {
    margin-bottom: 0;
    margin: 0 20px;
  }
`;

export const NavLink = styled.a`
  color: var(--dark-grayish-blue);
  font-size: 1.1rem;
  text-decoration: none;

  @media screen and (min-width: 950px) {
    color: var(--white);
  }
`;

export const NavButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: var(--yellow);
  font-family: var(--headings-buttons-font);
  text-decoration: none;
  color: var(--very-dark-desaturated-blue);
  border-radius: 300px;

  @media screen and (min-width: 950px) {
    background: var(--white);
  }
`;
