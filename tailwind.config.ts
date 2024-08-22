import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "3rem",
      },
    },
    fontFamily: {
      title: ["Fraunces"],
      body: ["Barlow"],
    },
    extend: {
      backgroundImage: {
        "hero-img": "url('/public/desktop/image-header.jpg')",
      },
      colors: {
        softRed: " hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        graphicsDesignText: " hsl(167, 40%, 24%)",
        darkBlue: "hsl(198, 62%, 26%)",
        footer: "hsl(168, 34%, 41%)",
      },
    },
  },
  plugins: [],
};
export default config;
