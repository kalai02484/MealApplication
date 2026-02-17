import React from "react";
import logo from "../assets/logo.png";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { FcHome, FcLike } from "react-icons/fc";

const TopNavbar = () => {
  return (
    <div className="w-full border-b-2 border-amber-500 sticky top-0 bg-white z-50">
      <Navbar fluid rounded className="mx-auto max-w-7xl">
        <NavbarBrand href="/">
          <img src={logo} className="mr-2 sm:mr-3 h-14 sm:h-18" alt="Logo" />
        </NavbarBrand>
        <div className="flex">
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <Link to="/" className=" mb-3 sm:mb-0">
            <FcHome className="mr-2 text-xl inline align-bottom" /> Home
          </Link>
          <Link to="favorites" className=" mb-3 sm:mb-0">
            <FcLike className="mr-2 text-xl inline align-bottom" />
            Favorites
          </Link>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
