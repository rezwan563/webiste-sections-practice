import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLaptop } from "react-icons/fa";
import { HiOutlineSun, HiMoon } from "react-icons/hi2";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";

const NavbarOne = () => {
    const [isClicked, setIsClicked]  = useState(false)

   const handleMenu = () =>{

   }

  return (
    <nav className={`p-5 bg-cyan-400 shadow mb-72 md:mb-0 md:flex md:items-center md:justify-between`}>
      <div className="flex justify-between items-center">
       <span>
       <Link to="/home" className="text-2xl">
          NavbarOne
        </Link>
       </span>
        <span className="md:hidden text-2xl">
            {
                isClicked ? 
                <IoCloseSharp onClick={() => setIsClicked(false)}></IoCloseSharp>
                : 
                <IoMenuSharp onClick={() => setIsClicked(true)}  name="IoMenuSharp"></IoMenuSharp> 
            }
        </span>
      </div>

      <ul className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-cyan-400 w-full left-0 md:w-auto py-4 md:py-0 pl-8 md:pl-0 md:opacity-100 opacity-0 ${isClicked ? 'opacity-100 duration-500' : 'top-80'}`}>
        <li className="mx-4 my-6 md:my-0">
          <Link to="/home" className="text-xl hover:text-white duration-500">
            Home
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            to="/about_us"
            className="text-xl hover:text-white duration-500"
          >
            About us
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link to="/blog" className="text-xl hover:text-white duration-500">
            Blog
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            to="/contact_us"
            className="text-xl hover:text-white duration-500"
          >
            Contact us
          </Link>
        </li>
        <div className="flex justify-center  md:flex ">
          <li className="mr-5">
            <HiMoon className="text-2xl cursor-pointer "></HiMoon>
          </li>
          <li className="mr-5">
            <HiOutlineSun className="text-2xl cursor-pointer"></HiOutlineSun>
          </li>
          <li className="mr-5">
            <FaLaptop className="text-2xl cursor-pointer"></FaLaptop>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavbarOne;
