import React from "react";
import logo from "../assets/logo.png"; // Import the image

const Logo: React.FC = () => {
return (
    <div className=" absolute top-0 left-0 pl-3">
      <img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} />
    </div>

  );
};
export default Logo;
