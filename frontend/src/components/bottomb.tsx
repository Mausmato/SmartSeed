import { cn } from "../../lib/utils";
import React from "react";

import "../../src/index.css";

const recommendations: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col space-y-4">
        <h1 className="font-sans font-bold text-6xl text-neutral-900 dark...">
          Recommendations
        </h1>
      </div>
    </div>
  );
};

export default recommendations;
