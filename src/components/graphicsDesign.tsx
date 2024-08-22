import Image from "next/image";
import GraphicDesignDesktop from "/public/desktop/image-graphic-design.jpg";
import PhotographyDesktop from "/public/desktop/image-photography.jpg";
import GraphicDesignMobile from "/public/mobile/image-graphic-design.jpg";
import PhotographyMobile from "/public/mobile/image-photography.jpg";

const GraphicsDesign = () => {
  return (
    <section className="xl:flex items-center w-full justify-center">
      <div className="w-full relative">
        <Image
          src={GraphicDesignDesktop}
          className="w-full object-contain hidden xl:block"
          alt="Graphics design desktop version"
        />

        <Image
          src={GraphicDesignMobile}
          className="w-full object-contain block xl:hidden"
          alt="Graphics design desktop version"
        />

        <div className="absolute bottom-10 left-0 flex flex-col text-center  items-center justify-center w-full text-graphicsDesignText space-y-10">
          <h2 className="font-title font-bold text-2xl">Graphics Design</h2>
          <p className="font-body text-lg font-semibold xl:w-[400px] w-[300px]">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential client'
            attention
          </p>
        </div>
      </div>

      <div className="w-full relative">
        <Image
          src={PhotographyDesktop}
          alt="Photography image desktop"
          className="w-full object-contain hidden xl:block"
        />

        <Image
          src={PhotographyMobile}
          alt="Photography image desktop"
          className="w-full object-contain block xl:hidden"
        />

        <div className="absolute bottom-10 left-0 flex flex-col text-center items-center justify-center w-full text-graphicsDesignText space-y-10">
          <h2 className="font-title font-bold text-2xl">Photography</h2>
          <p className="font-body text-lg font-semibold xl:w-[400px] w-[300px]">
            Increase your credibilty by getting the most stunning, high-quality
            photos that improve your business image
          </p>
        </div>
      </div>
    </section>
  );
};

export default GraphicsDesign;
