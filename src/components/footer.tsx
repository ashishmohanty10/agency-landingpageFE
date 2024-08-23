import Image from "next/image";
import Logo from "/public/logo.svg";
import { navLinks, socials } from "@/constant/constants";
import Link from "next/link";
const Footer = () => {
  return (
    <section className="flex flex-col items-center justify-between py-16 bg-footer">
      <div className="mb-8 ">
        <Image
          src={Logo}
          alt="Footer Logo"
          className=" fill-graphicsDesignText"
        />
      </div>

      <div className="flex items-center gap-10 mb-16">
        {navLinks.map((data, idx) => (
          <Link
            href={data.href}
            key={idx}
            className="text-graphicsDesignText font-body text-base font-semibold hover:text-white transition-all"
          >
            {data.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-5">
        {socials.map((data, idx) => (
          <Image
            src={data.img}
            key={idx}
            alt="socials image"
            className=" transition-all hover:cursor-pointer hover:fill-white"
          />
        ))}
      </div>
    </section>
  );
};

export default Footer;
