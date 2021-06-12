import styled from "styled-components";

export const ServicesWrapper = styled.section``;

export const Service = styled.div`
  padding: 3rem 1.5rem;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  background: url(${(props) => props.mobileImage}) no-repeat center/cover;
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
