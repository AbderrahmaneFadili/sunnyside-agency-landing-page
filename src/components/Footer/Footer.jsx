import React from "react";
import {
  FooterWrapper,
  FooterContainer,
  FooterLogo,
  FooterMenu,
  FooterMenuItem,
  FooterMenuLink,
  Socials,
  SocialLink,
  SocialItem,
} from "./Footer.styles";

function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterLogo src={require("../../images/logo-footer.svg").default} />
        <FooterMenu>
          <FooterMenuItem>
            <FooterMenuLink href="#">About</FooterMenuLink>
          </FooterMenuItem>

          <FooterMenuItem>
            <FooterMenuLink href="#">Services</FooterMenuLink>
          </FooterMenuItem>

          <FooterMenuItem>
            <FooterMenuLink href="#">Projects</FooterMenuLink>
          </FooterMenuItem>
        </FooterMenu>

        <Socials>
          <SocialItem>
            <SocialLink href="#">
              <i className="fab fa-facebook-square"></i>
            </SocialLink>
          </SocialItem>

          <SocialItem>
            <SocialLink href="#">
              <i className="fab fa-instagram"></i>
            </SocialLink>
          </SocialItem>

          <SocialItem>
            <SocialLink href="#">
              <i className="fab fa-twitter"></i>
            </SocialLink>
          </SocialItem>

          <SocialItem>
            <SocialLink href="#">
              <i className="fab fa-pinterest"></i>
            </SocialLink>
          </SocialItem>
        </Socials>
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;
