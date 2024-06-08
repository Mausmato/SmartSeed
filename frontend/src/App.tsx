import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import DropImage from "./components/DropImage";
import MoistureLevels from "./components/MoistureLevels";
import SoilNutrients from "./components/SoilNutrients";
import Logo from "./components/logo";
import { BackgroundGradientAnimation } from "./components/bg";

const App: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [moisture, setMoisture] = useState<number>(0);
  const [nutrients, setNutrients] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const handleImageUpload = (uploadedImage: File) => {
    setImage(URL.createObjectURL(uploadedImage));

    // Mock data
    setMoisture(30);
    setNutrients(["Potassium: 20ppm", "Nitrate: 15ppm"]);
    setRecommendations(["Buy potassium product", "Water 2 times per day"]);
  };

  useEffect(() => {
    // Scroll to 100% of the page height when the component mounts
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <div className="relative">
      {" "}
      {/* Ensuring relative position for absolute positioning */}
      <BackgroundGradientAnimation className="absolute inset-0 z-10">
        <div>
          <Logo /> {/* Position the logo absolutely */}
        </div>
        <div>
          <div>
            <Header />
          </div>
          <DropImage onImageUpload={handleImageUpload} />
          {image && (
            <img src={image} alt="Uploaded" className="mx-auto mt-4" />
          )}{" "}
          <MoistureLevels moisture={moisture} />
          <SoilNutrients nutrients={nutrients} />
        </div>
      </BackgroundGradientAnimation>
      <BackgroundGradientAnimation>
        <div className="">
          <h2>Next Page Header</h2>
        </div>
      </BackgroundGradientAnimation>  
    </div>
  );
};

export default App;
