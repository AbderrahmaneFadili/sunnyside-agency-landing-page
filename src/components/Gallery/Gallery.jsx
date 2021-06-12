import React from "react";
import { GallaryRow, GalleryImage, GalleryWrapper } from "./Gallery.styles";
import mobileImage1 from "../../images/mobile/image-gallery-milkbottles.jpg";
import mobileImage2 from "../../images/mobile/image-gallery-orange.jpg";
import mobileImage3 from "../../images/mobile/image-gallery-cone.jpg";
import mobileImage4 from "../../images/mobile/image-gallery-sugar-cubes.jpg";

const Gallery = () => {
  return (
    <GalleryWrapper>
      <GallaryRow>
        <GalleryImage src={mobileImage1} />
        <GalleryImage src={mobileImage2} />
      </GallaryRow>
      <GallaryRow>
        <GalleryImage src={mobileImage3} />
        <GalleryImage src={mobileImage4} />
      </GallaryRow>
    </GalleryWrapper>
  );
};

export default Gallery;
