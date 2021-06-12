import React from "react";
import {
  TestimonialsWrapper,
  TestimonialsContainer,
  TestimonialsTitle,
  Testimonial,
  TestimonialPhoto,
  TestimonialDescription,
  TestimonialName,
  TestimonialJob,
} from "./Testimonials.styles";

const Testimonials = () => {
  return (
    <TestimonialsWrapper>
      <TestimonialsTitle>Client testimonials</TestimonialsTitle>
      <TestimonialsContainer>
        <Testimonial>
          <TestimonialPhoto
            src={require("../../images/image-emily.jpg").default}
          />
          <TestimonialDescription>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </TestimonialDescription>
          <TestimonialName>Emily R.</TestimonialName>
          <TestimonialJob>Marketing Director</TestimonialJob>
        </Testimonial>
        <Testimonial>
          <TestimonialPhoto
            src={require("../../images/image-thomas.jpg").default}
          />
          <TestimonialDescription>
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </TestimonialDescription>
          <TestimonialName>Thomas S.</TestimonialName>
          <TestimonialJob>Chief Operating Officer</TestimonialJob>
        </Testimonial>
        <Testimonial>
          <TestimonialPhoto
            src={require("../../images/image-jennie.jpg").default}
          />
          <TestimonialDescription>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </TestimonialDescription>
          <TestimonialName>Jennie F.</TestimonialName>
          <TestimonialJob>Business Owner</TestimonialJob>
        </Testimonial>
      </TestimonialsContainer>
    </TestimonialsWrapper>
  );
};
export default Testimonials;
