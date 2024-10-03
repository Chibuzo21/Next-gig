import React from "react";
import Logo from "../assets/Frame 12@2x.png";

const Header = () => {
  return (
    <main className="flex justify-between">
      <div>
        <img src={Logo} alt="" className="" />
      </div>
      <div className="flex">
        <p>Home</p>
        <p>How it works</p>
        <p>For Freelancers</p>
        <p>For Employers</p>
        <p>About Us</p>
        <p>Contact Us</p>
      </div>
      <div>
        <p>Log in</p>
        <p>Register</p>
      </div>
    </main>
  );
};

export default Header;
