import React from "react";
import logo from "../assets/logo.png"; // Import the image

const Logo: React.FC = () => {
  return (
    <div className="absolute top-0 left-0" >
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
