import React, { useState } from "react";
import Logo from "../assets/Frame 12@2x.png";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [active, setActive] = useState(null);
  const [navActive, setNavActive] = useState(null);
  const [isOpen, setIsopen] = useState(true);
  const [togglemenu, setToggleMenu] = useState(false);
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
    setTimeout(() => {
      setNavActive(index);
      setToggleMenu(false);
      setIsopen(!isOpen);
    }, 600);
  };
  const Togglebutton = () => {
    setToggleMenu(!togglemenu);
    setIsopen(!isOpen);
  };

  return (
    <main
      className="fixed top-0 h-screen
    left-0 z-50  "
    >
      <section
        className={`flex  justify-evenly items-center
         py-8 md:py-4 md:px-2 px-8 w-[100vw] shadow-md 
     ${isOpen ? "bg-[#E6EEFF]" : "bg-white"} md:bg-white `}
      >
        <div>
          <img src={Logo} alt="" className="md:w-[10vw] w-[43%]" />
        </div>
        <nav
          className="md:flex hidden justify-between md:px-5  md:w-[48vw] items-center
       text-[#A19D9D] text-[16px] "
        >
          {Nav.map((nav, index) => (
            <a
              onClick={() => navClick(index)}
              key={index}
              href={`${nav.href}`}
              className={`${
                navActive === index
                  ? "border-b-2 border-[#062182] text-black font-medium"
                  : "border-none"
              }`}
            >
              {nav.name}
            </a>
          ))}
        </nav>
        <div className="md:flex justify-between hidden md:w-[15vw] text-[14px] ">
          {[
            { name: "Login", link: "/login" },
            { name: "Register", link: "/register" },
          ].map((nav, index) => (
            <NavLink to={`${nav.link}`} key={index}>
              <button
                onClick={() => handleclick(index)}
                className={`px-5 py-2 rounded-md border-[1px] border-[#062182]
             ${
               active === index
                 ? "bg-[#062182] text-white"
                 : "text-[#062182] bg-white "
             }`}
              >
                {nav.name}
              </button>
            </NavLink>
          ))}
        </div>
        <button
          onClick={Togglebutton}
          className="text-[#062182] md:hidden  text-4xl "
        >
          {isOpen ? <IoMdMenu /> : <RxCross2 />}
        </button>
      </section>
      {togglemenu && (
        <section className="grid  px-7 bottom-0 h-[90%]  bg-white ">
          <nav
            className="flex md:hidden flex-col  justify-between  
    text-[#A19D9D] text-[25px]  py-8 "
          >
            {Nav.map((nav, index) => (
              <a
                onClick={() => navClick(index)}
                key={index}
                href={`${nav.href}`}
                className={`${
                  navActive === index
                    ? "border-b-4 border-[#062182] text-black font-medium w-fit"
                    : "border-none"
                }`}
              >
                {nav.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-col  md:hidden font-medium font-nunito w-[90%] text-[22px] ">
            {["Login", "Register"].map((title, index) => (
              <a>
                {" "}
                <button
                  key={index}
                  onClick={() => handleclick(index)}
                  className={`px-1 py-2 rounded-[15px] mb-6 border-[1px] border-[#062182]
             ${
               active === index
                 ? "bg-[#062182] text-white"
                 : "text-[#062182] bg-white "
             }`}
                >
                  {title}
                </button>
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default Header;
