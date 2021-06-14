import React, { useEffect, useState } from "react";
import { GallaryRow, GalleryImage, GalleryWrapper } from "./Gallery.styles";

import mobileImage1 from "../../images/mobile/image-gallery-milkbottles.jpg";
import mobileImage2 from "../../images/mobile/image-gallery-orange.jpg";
import mobileImage3 from "../../images/mobile/image-gallery-cone.jpg";
import mobileImage4 from "../../images/mobile/image-gallery-sugar-cubes.jpg";

import desktopImage1 from "../../images/desktop/image-gallery-milkbottles.jpg";
import desktopImage2 from "../../images/desktop/image-gallery-orange.jpg";
import desktopImage3 from "../../images/desktop/image-gallery-cone.jpg";
import desktopImage4 from "../../images/desktop/image-gallery-sugarcubes.jpg";

const Gallery = () => {
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 950) {
      setDesktop(true);
    }
  }, []);

  return (
    <GalleryWrapper>
      <GallaryRow>
        {desktop ? (
          <>
            <GalleryImage src={desktopImage1} />
            <GalleryImage src={desktopImage2} />
          </>
        ) : (
          <>
            <GalleryImage src={mobileImage1} />
            <GalleryImage src={mobileImage2} />
          </>
        )}
      </GallaryRow>
      <GallaryRow>
        {desktop ? (
          <>
            <GalleryImage src={desktopImage3} />
            <GalleryImage src={desktopImage4} />
          </>
        ) : (
          <>
            <GalleryImage src={mobileImage3} />
            <GalleryImage src={mobileImage4} />
          </>
        )}
      </GallaryRow>
    </GalleryWrapper>
  );
};

export default Gallery;
