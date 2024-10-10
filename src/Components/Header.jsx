import React, { useState } from "react";
import Logo from "../assets/Frame 12@2x.png";

const Header = () => {
  const [active, setActive] = useState(null);
  const [navActive, setNavActive] = useState(null);
  const Nav = [
    {
      name: "Home",
      href: "#home",
    },
    { name: "For Freelancers", href: "#freelancers" },
    { name: "For Employers", href: "#employers" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ];

  const handleclick = (index) => {
    setActive(index);
  };
  const navClick = (index) => {
    setNavActive(index);
  };
  return (
    <main className="flex justify-around items-center py-4 px-2 w-[100%] fixed bg-white top-0 left-0 z-50">
      <div>
        <img src={Logo} alt="" className="w-[10vw]" />
      </div>
      <nav className="flex justify-between w-[54vw] items-center text-[#A19D9D] text-[16px] ">
        {Nav.map((nav, index) => (
          <a
            onClick={() => navClick(index)}
            key={index}
            href={`${nav.href}`}
            className={`${
              navActive === index
                ? "border-b-2 border-[#062182]"
                : "border-none"
            }`}
          >
            {nav.name}
          </a>
        ))}
      </nav>
      <div className="flex justify-between w-[17vw] text-[14px] ">
        {["Log in", "Register"].map((title, index) => (
          <button
            key={index}
            onClick={() => handleclick(index)}
            className={`px-5 py-2 rounded-md border-[1px] border-[#062182]
             ${
               active === index
                 ? "bg-[#062182] text-white"
                 : "text-[#062182] bg-white "
             }`}
          >
            {title}
          </button>
        ))}
      </div>
    </main>
  );
};

export default Header;
