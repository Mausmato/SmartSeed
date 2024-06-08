import { cn } from "../../lib/utils";
import React from "react";

import "../../src/index.css";

import { BentoGrid, BentoGridItem } from "../components/bento";

export const CustomBentoGrid = () => {
  return (
    <BentoGrid className="p-8 h-screen">
      <div className="w-full">
        <BentoGridItem
          className="bg-green-500 text-white w-full"
          title={<div className="text-5xl">240%</div>}
          description={<div>Moisture Levels</div>}
          icon={<div className="icon-placeholder" />}
        />
      </div>
      <div className="w-full h-[148.797px] grid grid-cols-2 gap-4">
        <BentoGridItem
          className="w-full h-[225.797px]"
          title={<div className="text-3xl">99%</div>}
          description={<div>Nutrient 1</div>}
          icon={<div className="icon-placeholder" />}
        />
        <BentoGridItem
          className="w-full h-[225.797px]"
          title={<div className="text-3xl">32%</div>}
          description={<div>Nutrient 2</div>}
          icon={<div className="icon-placeholder" />}
        />
        <div className="col-span-2 h-[225.797px]">
          <BentoGridItem
            className="w-full h-[223px]"
            title={<div className="text-3xl">60%</div>}
            description={<div>Nutrient 3</div>}
            icon={<div className="icon-placeholder" />}
          />
        </div>
      </div>
    </BentoGrid>
  );
};
