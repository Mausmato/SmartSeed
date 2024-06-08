import React from "react";
import "../../src/index.css"

import { CustomBentoGrid } from "../components/ourbento";
export function GridBackground() {
  return (
    <div className="h-[100rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-top">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="pt-24 text-6xl sm:text-8xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Dashboard
      </p>
      <p className="text-2xl text-center mt-4 max-w-[50rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, molestias
        id voluptatibus accusamus ipsa iusto in.
      </p>

      <div className="w-[90%]">
        <CustomBentoGrid></CustomBentoGrid>
      </div>
    </div>
  );
}
