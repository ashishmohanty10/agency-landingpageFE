import Image from "next/image";
import React from "react";
import HeroBgDesktop from "/public/desktop/image-header.jpg";
import HeroBgMobile from "/public/mobile/image-header.jpg";
import IconArrowDown from "/public/icon-arrow-down.svg";

function Hero() {
  return (
    <section className="h-[90vh]">
      <div className="absolute top-0 left-0 w-full -z-50">
        <Image
          src={HeroBgDesktop}
          alt="Desktop BG for hero"
          className="hidden h-screen object-cover md:block w-full"
        />
        <Image
          src={HeroBgMobile}
          alt="Mobile BG for hero"
          className="block h-screen object-cover md:hidden w-full"
        />
      </div>

      <div className="w-full py-12 h-[89vh]">
        <h1 className="text-7xl md:text-6xl font-bold text-white font-title text-center tracking-tight md:tracking-widest mb-32 ">
          WE ARE CREATIVES
        </h1>

        <div className="flex justify-center">
          <Image src={IconArrowDown} alt="Scroll down icon" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
