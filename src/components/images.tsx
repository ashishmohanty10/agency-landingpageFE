import image1Desktop from "/public/desktop/image-gallery-milkbottles.jpg";
import image2Desktop from "/public/desktop/image-gallery-orange.jpg";
import image3Desktop from "/public/desktop/image-gallery-cone.jpg";
import image4Desktop from "/public/desktop/image-gallery-sugar-cubes.jpg";

import image1Mobile from "/public/mobile/image-gallery-milkbottles.jpg";
import image2Mobile from "/public/mobile/image-gallery-orange.jpg";
import image3Mobile from "/public/mobile/image-gallery-cone.jpg";
import image4Mobile from "/public/mobile/image-gallery-sugar-cubes.jpg";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="grid grid-cols-2 xl:grid-cols-4">
      <div>
        <Image
          src={image1Desktop}
          alt="image 1"
          className="w-full object-contain hidden xl:block"
        />

        <Image
          src={image1Mobile}
          alt="image 1"
          className="block xl:hidden w-full object-contain"
        />
      </div>
      <div>
        <Image
          src={image2Desktop}
          alt="imaage 2"
          className="w-full object-contain hidden xl:block"
        />

        <Image
          src={image2Mobile}
          alt="imaage 2"
          className="block xl:hidden w-full object-contain"
        />
      </div>
      <div>
        <Image
          src={image3Desktop}
          alt="image 3"
          className="w-full object-contain hidden xl:block"
        />

        <Image
          src={image3Mobile}
          alt="image 3"
          className="block xl:hidden w-full object-contain"
        />
      </div>
      <div>
        <Image
          src={image4Desktop}
          alt="image 4"
          className="w-full object-contain hidden xl:block"
        />

        <Image
          src={image4Mobile}
          alt="image 4"
          className="block xl:hidden w-full object-contain"
        />
      </div>
    </section>
  );
};

export default Gallery;
