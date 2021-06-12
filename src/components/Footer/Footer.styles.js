import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding: 5rem 0;
  background: rgba(144, 212, 197);
  color: var(--footer);
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterLogo = styled.img`
  width: 200px;
  margin-bottom: 3rem;
`;

export const FooterMenu = styled.ul`
  list-style: none;
  display: flex;
  width: 60%;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const FooterMenuItem = styled.li``;

export const FooterMenuLink = styled.a`
  text-decoration: none;
  color: var(--footer);
`;

export const Socials = styled.ul`
  display: flex;
  list-style: none;
  width: 200px;
  justify-content: space-between;
`;

export const SocialItem = styled.li``;

export const SocialLink = styled.a`
  font-size: 1.4rem;
  text-decoration: none;
  color: var(--footer);
`;
