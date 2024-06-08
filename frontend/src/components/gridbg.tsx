import React from "react";
import "../../src/index.css";
import Navbar from "../components/navbar";
import { CustomBentoGrid } from "../components/ourbento";
import recommendations from "../components/bottomb";

export function GridBackground() {
  return (
    <div className="absolute top-0 left-0 h-[100rem] w-full dark:bg-white bg-neutral-200 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex flex-col items-center justify-top">
      <Navbar />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="pt-24 text-6xl sm:text-8xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-[#A2A620] via-[#81C169] via-[#32B94E] to-[#22C55D] py-8">
        Dashboard
      </p>
      <p className="text-2xl text-center mt-4 max-w-[50rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, molestias
        id voluptatibus accusamus ipsa iusto in.
      </p>
      <div className="w-[90%]">
        <CustomBentoGrid />
      </div>
      <h1 className="justify-center items-center pt-24 text-4xl sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-[#A2A620] via-[#81C169] via-[#32B94E] to-[#22C55D] py-8">
        Recommendations
      </h1>
    </div>
  );
}
