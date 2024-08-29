import React from "react";
import StandOutDesktop from "/public/desktop/image-stand-out.jpg";
import StandOutMobile from "/public/mobile/image-stand-out.jpg";
import Image from "next/image";

const ColaborativeFormula = () => {
  return (
    <section className="w-full grid grid-cols-1 xl:grid-cols-2 justify-between items-center">
      {/* left side  */}
      <div>
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
      <div className="space-y-10 py-8 flex items-center xl:items-start justify-center flex-col px-10 text-center xl:text-left xl:pl-36 ">
        <h2 className="font-title font-bold text-4xl xl:text-5xl leading-10 text-center xl:text-left ">
          Stand out to the right audience
        </h2>

        <p className="text-slate-500 font-body font-semibold text-lg xl:w-[450px]">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we&apos;ll build and
          extend your brand in digital places.
        </p>

        <div className="font-title font-bold text-xl group  relative transition-all h-7 w-fit group">
          <p className="z-999"> Learn More</p>
          <div className="w-full h-2 bg-softRed/30 rounded-3xl group-hover:block hidden -translate-y-2  -z-50"></div>
        </div>
      </div>
    </section>
  );
};

export default ColaborativeFormula;
