import React from "react";
import StandOutDesktop from "/public/desktop/image-stand-out.jpg";
import StandOutMobile from "/public/mobile/image-stand-out.jpg";
import Image from "next/image";

const ColaborativeFormula = () => {
  return (
    <section className="w-full grid grid-cols-1 xl:grid-cols-2 justify-between items-center">
      {/* left side  */}
      <div className="">
        <Image
          src={StandOutDesktop}
          alt="Standout Image for Desktop"
          className="w-full hidden xl:block"
        />

        <Image
          src={StandOutMobile}
          alt="TraStandout Image for Mobile"
          className="w-full xl:hidden block"
        />
      </div>

      {/* right side */}
      <div className="space-y-10 py-8 flex justify-center flex-col px-10 text-center xl:text-left">
        <h2 className="font-title font-bold text-4xl xl:text-5xl leading-10 text-center xl:text-left">
          Stand out to the right <br /> audience
        </h2>

        <p className="text-slate-500 font-body font-semibold text-lg xl:w-[450px]">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we'll build and extend
          your brand in digital places.
        </p>

        <div className="font-title font-bold text-xl group  relative transition-all">
          <p className="z-20"> Learn More</p>
        </div>
      </div>
    </section>
  );
};

export default ColaborativeFormula;
