import styled from "styled-components";

export const TransformSection = styled.section`
  display: flex;
  flex-wrap: wrap-reverse;
  flex-direction: row;
  width: 100%;
`;

export const StandOutSection = styled.section`
  display: flex;
  flex-wrap: wrap-reverse;
  flex-direction: row;
  width: 100%;
`;

export const SectionImage = styled.div`
  background: url(${(props) => props.mobileImage}) no-repeat center/cover;
  height: 400px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem 2rem;
  text-align: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
    align-items: flex-start;
    text-align: left;
    padding: 2rem 4rem;
  }
`;

export const SectionContentTitle = styled.h2`
  font-family: var(--headings-buttons-font);
  margin-bottom: 1rem;
  color: var(--very-dark-desaturated-blue);
`;

export const SectionContentDescription = styled.p`
  color: var(--grayish-blue);
  line-height: 1.5;
  margin-bottom: 1rem;
`;

export const SectionContentLink = styled.a`
  font-family: var(--headings-buttons-font);
  text-decoration: none;
  color: var(--very-dark-desaturated-blue);
  position: relative;
  letter-spacing: 1px;

  &::after {
    content: "";
    position: absolute;
    width: 110%;
    height: 9px;
    border-radius: 10px;
    opacity: 0.6;
    background-color: ${({ color }) => `var(${color})`};
    left: 50%;
    transform: translateX(-50%);
    bottom: -5px;
    transition: 0.4s linear;
  }

  &:hover::after {
    opacity: 1;
  }
`;
