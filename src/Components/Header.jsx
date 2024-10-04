import React from "react";
import Logo from "../assets/Frame 12@2x.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <main className="flex justify-around">
      <div>
        <img src={Logo} alt="" className="w-[10vw]" />
      </div>
      <div className="flex justify-between w-[60vw] items-center text-[#A19D9D] text-[18px] border-2 border-black">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/works">How it works</NavLink>
        <NavLink to="/freelancers">For Freelancers</NavLink>
        <NavLink to="employers">For Employers</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </div>
      <div className="flex justify-between">
        <button className="text-[#062182] border-2 border-[#062182] px-2 py-1">
          Log in
        </button>
        <button className="bg-[#062182] text-white border-2 border-[#062182]">
          Register
        </button>
      </div>
    </main>
  );
};

export default Header;
