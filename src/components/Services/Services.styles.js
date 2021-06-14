import styled from "styled-components";

export const ServicesWrapper = styled.section`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 950px) {
    flex-direction: row;
  }
`;

export const Service = styled.div`
  padding: 3rem 1.5rem;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  background: url(${(props) => props.mobileImage}) no-repeat center/cover;

  @media screen and (min-width: 950px) {
    background: url(${(props) => props.desktopImage}) no-repeat center/cover;
    padding: 3rem 5rem;
  }
`;

export const ServiceTitle = styled.h1`
  color: ${({ color }) => `var(${color})`};
  font-size: 2rem;
  line-height: 1.5;
`;

export const ServiceDescription = styled.p`
  color: ${({ color }) => `var(${color})`};
  line-height: 1.5;
`;
