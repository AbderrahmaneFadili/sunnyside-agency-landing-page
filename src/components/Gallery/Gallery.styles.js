import styled from "styled-components";

export const GalleryWrapper = styled.section`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 950px) {
    flex-direction: row;
  }
`;

export const GalleryImage = styled.img`
  width: 50%;
`;

export const GallaryRow = styled.div`
  display: flex;
`;
