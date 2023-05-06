import React from "react";
import NavbarOne from "../Navbar/NavbarOne";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <NavbarOne></NavbarOne>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
