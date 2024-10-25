import React from "react";
import Nexgig from "../assets/images/Nexgig.png";

const Footer = () => {
  return (
    <main>
      <section className="bg-[#062182] h-[90vh] flex flex-col items-center justify-around pt-2 pb-2 ">
        <div className="flex  justify-center w-[90%] h-[55vh] space-x-10    ">
          <div className=" w-[20%]  text-white space-y-4">
            <h4>Hire Talent</h4>
            <hr className="h-[1px] w-[90%]" />
            <p>Hire Freelance Developers</p>
            <p>Hire Freelance Designers</p>
          </div>
          <div className="w-[40%] flex flex-col space-y-4 text-white">
            {" "}
            <h4>Featured Skills</h4>
            <hr className="h-[1px] w-[90%]  bg-white " />
            <ul className=" columns-2  ">
              <li className="pt-2">Software Developers</li>
              <li className="pt-2">Web Developers</li>
              <li className="pt-2">Mobile App Developers</li>
              <li className="pt-2">Ios Developers</li>
              <li className="pt-2">NodeJs Developers</li>
              <li className="pt-2">PHP Developers</li>
              <li className="pt-2">React.js Developers</li>
              <li className="pt-2">FrontEnd Developers</li>
              <li className="pt-2">BackEnd Developers</li>
              {/* <br /> */}
              <li className="pt-2">UX Designers</li>
              <li className="pt-2">Ui Designers</li>
              <li className="pt-2">Web Designers</li>
              <li className="pt-2">Graphics Designers</li>
              <li className="pt-2">Mobile App Designers</li>
              <li className="pt-2">Brand Designers</li>
            </ul>
          </div>
          <div className="w-[20%] text-white space-y-4 ">
            {" "}
            <h4>About</h4>
            <hr className="h-[1px] w-[50%]  bg-white " />
            <ul className="">
              <li className="pt-2">Contact us</li>
              <li className="pt-2">FAQ</li>
              <li className="pt-2">Community</li>
              <li className="pt-2">About us</li>
            </ul>
          </div>
        </div>
        <div className=" flex items-center justify-start space-x-4 border-t-2 border-b-2 border-white h-[16vh] w-[90%] ">
          {" "}
          <img src={Nexgig} alt="" className="" />
          <div className=" h-[55px] border-l-2  border-white grid place-items-center pl-4">
            <p className="text-white text-lg">
              Platform For The Next Big Project
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between text-white font-light space-x-2">
          <div className="border-r-2 border-white p-2">
            <p>Copyright 2024 NexGig</p>
          </div>
          <div className="flex items-center justify-between space-x-4">
            {" "}
            <p>Privacy policy</p>
            <p>Accessibility</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Footer;
