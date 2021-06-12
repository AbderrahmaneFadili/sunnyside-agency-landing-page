import styled from "styled-components";

export const TestimonialsWrapper = styled.section`
  padding: 4rem 0;
`;

export const TestimonialsContainer = styled.div`
  max-width: 90%;
  width: 100%;
  margin: 0 auto;
`;

export const TestimonialsTitle = styled.h2`
  text-align: center;
  margin-bottom: 1.6rem;
  font-family: var(--headings-buttons-font);
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--grayish-blue);
`;

export const Testimonial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 0.7rem;
`;

export const TestimonialPhoto = styled.img`
  width: 65px;
  border-radius: 100%;
  margin-bottom: 1.6rem;
`;

export const TestimonialDescription = styled.p`
  color: var(--very-dark-grayish-blue);
  line-height: 1.5;
  margin-bottom: 1rem;
`;

export const TestimonialName = styled.h3`
  color: var(--very-dark-desaturated-blue);
  font-family: var(--headings-buttons-font);
  margin-bottom: 0.5rem;
`;

export const TestimonialJob = styled.p`
  color: var(--dark-grayish-blue);
  font-size: 0.9rem;
`;
