import Image from "next/image";
import TranformImgDesktop from "/public/desktop/image-transform.jpg";
import TranformImgMobile from "/public/mobile/image-transform.jpg";

const TransformBrand = () => {
  return (
    <section className="w-full grid grid-cols-1 xl:grid-cols-2 justify-between items-center ">
      {/* left side  */}
      <div className="space-y-10 py-8 flex items-center xl:items-start justify-center flex-col px-10 text-center xl:text-left xl:pl-36 order-last xl:order-first">
        <h2 className="font-title font-bold text-4xl xl:text-5xl leading-10 text-center xl:text-left">
          Transfrom your <br /> brands
        </h2>

        <p className="text-slate-500 font-body font-semibold text-lg xl:w-[450px]">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you
        </p>

        <div className="font-title font-bold text-xl group  transition-all h-7 w-fit group ">
          <p className="z-999"> Learn More</p>
          <div className="w-full h-2 bg-yellow/30 rounded-3xl group-hover:block hidden -translate-y-2 -z-50"></div>
        </div>
      </div>

      {/* right side */}
      <div className="">
        <Image
          src={TranformImgDesktop}
          alt="Tranform Image"
          className="w-full hidden xl:block"
        />
        <Image
          src={TranformImgMobile}
          alt="Tranform Image"
          className="w-full block xl:hidden"
        />
      </div>
    </section>
  );
};

export default TransformBrand;
