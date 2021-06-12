import React from "react";
import {
  Service,
  ServiceDescription,
  ServicesWrapper,
  ServiceTitle,
} from "./Services.styles";

import mobileGrD from "../../images/mobile/image-graphic-design.jpg";
import mobilePh from "../../images/mobile/image-photography.jpg";

const Services = () => {
  return (
    <ServicesWrapper>
      <Service mobileImage={mobileGrD}>
        <ServiceTitle color={"--graphic-design-text"}>
          Graphic design
        </ServiceTitle>
        <ServiceDescription color={"--graphic-design-text"}>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </ServiceDescription>
      </Service>

      <Service mobileImage={mobilePh}>
        <ServiceTitle color={"--photography-text"}>Photography</ServiceTitle>
        <ServiceDescription color={"--photography-text"}>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </ServiceDescription>
      </Service>
    </ServicesWrapper>
  );
};

export default Services;
