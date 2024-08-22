import Image from "next/image";
import TranformImgDesktop from "/public/desktop/image-transform.jpg";
import TranformImgMobile from "/public/mobile/image-transform.jpg";

const TransformBrand = () => {
  return (
    <section className="w-full grid grid-cols-1 xl:grid-cols-2 justify-between items-center ">
      {/* left side  */}
      <div className="space-y-10 py-8 flex justify-center flex-col px-10 text-center xl:text-left">
        <h2 className="font-title font-bold text-4xl xl:text-5xl leading-10 text-center xl:text-left">
          Transfrom your <br /> brands
        </h2>

        <p className="text-slate-500 font-body font-semibold text-lg xl:w-[450px]">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you
        </p>

        <div className="font-title font-bold text-xl group  relative transition-all">
          <p className="z-20"> Learn More</p>
        </div>
      </div>

      {/* right side */}
      <div className="order-1 ">
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
