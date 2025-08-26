import React from "react";
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  return (
    <div>
      <nav className=" flex  bg-blue-400 p-5 justify-between">
        <ul className="flex gap-5  ">
          <NavLink to={"/"} className="pointer">Home</NavLink>
          <li className="pointer">About</li>
          <li className="pointer">Contact</li>
        </ul>
        <ul>
            <NavLink to={"/cart"} className="h-10 text-3xl"><FaShoppingCart /></NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
