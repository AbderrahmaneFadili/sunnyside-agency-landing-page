import React from "react";
import {
  SectionContent,
  SectionContentDescription,
  SectionContentLink,
  SectionContentTitle,
  SectionImage,
  TransformSection,
  StandOutSection,
} from "./Sections.styles";

import transformImage from "../../images/mobile/image-transform.jpg";
import standOutImage from "../../images/mobile/image-stand-out.jpg";

const Sections = () => {
  return (
    <main id="sections">
      <TransformSection>
        <SectionContent>
          <SectionContentTitle>Transform your brand</SectionContentTitle>
          <SectionContentDescription>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </SectionContentDescription>
          <SectionContentLink href="#" color={"--yellow"}>
            Learn more
          </SectionContentLink>
        </SectionContent>
        <SectionImage mobileImage={transformImage}></SectionImage>
      </TransformSection>

      <StandOutSection>
        <SectionContent>
          <SectionContentTitle>
            Stand out to the right audience
          </SectionContentTitle>
          <SectionContentDescription>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </SectionContentDescription>
          <SectionContentLink href="#" color={"--soft-red"}>
            Learn more
          </SectionContentLink>
        </SectionContent>
        <SectionImage mobileImage={standOutImage}></SectionImage>
      </StandOutSection>
    </main>
  );
};

export default Sections;
