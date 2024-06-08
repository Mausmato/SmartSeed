import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

import Logo from "../components/logo";

const Navbarr = () => {
  return (
    <Navbar
      className="bg-gradient-to-b from-transparent via-transparent to-transparent py-5 "
      style={{ backdropFilter: "blur(10px)" }}
    >
      <NavbarBrand className="!flex items-center h-full  pt-0 pl-">
        <div className="!p-0">
          <Logo />
        </div>
      </NavbarBrand>
      <NavbarContent
        className="text-white hidden sm:flex gap-4 ml-auto items-center h-full"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex items-center h-full pr-4">
          <Link href="#" className="text-white">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Navbarr;
