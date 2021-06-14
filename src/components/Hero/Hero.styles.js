import styled from "styled-components";
import hero from "../../images/mobile/image-header.jpg";
import desktopHero from "../../images/desktop/image-header.jpg";
export const HeroWrapper = styled.div`
  height: 100vh;
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 950px) {
    background-image: url(${desktopHero});
  }
`;

export const HeroHeading = styled.h1`
  font-size: 3rem;
  font-family: var(--headings-buttons-font);
  text-align: center;
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-bottom: 4rem;
`;

export const ArrowDown = styled.img`
  cursor: pointer;
`;
