"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/constant/constants";
import Logo from "/public/logo.svg";
import HamburgerIcon from "/public/icon-hamburger.svg";
import IconClose from "/public/icon-close.svg";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  return (
    <nav className="h-[10vh] flex items-center px-5 justify-between relative">
      <Link href={"/"}>
        <Image src={Logo} alt="Brand Logo" />
      </Link>

      {/* Desktop Nabvar  */}
      <div className="hidden xl:flex items-center gap-4 font-body font-medium text-base ">
        {navLinks.map((data, idx) => (
          <Link
            href={data.href}
            key={idx}
            className="text-white hover:text-white/60 transition-all"
          >
            {data.name}
          </Link>
        ))}

        <button className="px-5 py-2 text-black text-lg font-title font-bold bg-white rounded-full hover:bg-white/30  hover:text-white transition-all">
          Contact
        </button>
      </div>

      {/* mobile navbar */}

      <div className="block xl:hidden ">
        <div onClick={() => setIsNavOpen(!isNavOpen)}>
          {isNavOpen ? (
            <Image src={IconClose} alt="Hambuger icon" />
          ) : (
            <Image src={HamburgerIcon} alt="Hambuger icon" />
          )}
        </div>

        {isNavOpen && (
          <div className="flex flex-col justify-center items-center  absolute top-32 right-0 w-full bg-white text-black p-10 space-y-5 font-body text-sm font-medium ">
            <div className="w-0 h-0 absolute top-0 right-0   -translate-y-[29px] translate-x-[.2px] border-l-[25px] border-l-transparent border-b-[30px] border-b-white border-r-[25px] border-r-transparent"></div>

            {navLinks.map((data, idx) => (
              <Link href={data.href} key={idx}>
                {data.name}
              </Link>
            ))}

            <button className="px-5 py-2 text-black text-lg font-title font-bold bg-yellow rounded-full hover:bg-white/30  hover:text-white transition-all">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
