import React from "react";
import Signup from "../../assets/Sign up.svg";

import Download from "../../assets/download.svg";
import Connection from "../../assets/Connection.svg";
import Folder from "../../assets/Folder.svg";
const Employers = () => {
  const Steps = [
    {
      num: 1,
      image: Signup,
      title: "Post Your Job",
      text: "Create a detailed job listing specifying your project requirements, desired skills, and experience level (junior or intermediate)..",
    },
    {
      num: 2,
      image: Download,
      title: "Review Profiles",
      text: "Browse through profiles of skilled developers and designers. Check their portfolios, work experience and client reviews",
    },
    {
      num: 3,
      image: Folder,
      title: "Collaborate and Complete",
      text: "Work closely with your chosen freelancer, track progress, and provide feedback. Securely manage payments through our platform",
    },
    {
      num: 4,
      image: Connection,
      title: "Connect and Hire",
      text: "Communicate directly with potential candidates to discuss your projet. Select the best fit for your needs and hire with confidence",
    },
  ];

  return (
    <main
      id="employers"
      className=" main bg-gradient-to-b  from-[#E6EEFF] to-[#FFFFFF] lg:h-[160vh] h-[100%] flex 
      flex-col justify-center items-center  "
    >
      <section className="flex flex-col lg:justify-center items-center justify-between py-10">
        <p className="md:text-2xl text-4xl font-medium mb-2">How it works</p>
        <p className="md:text-md text-xl">For Employers</p>
      </section>
      <section
        className="grid gap-10 md:grid-cols-2 lg:h-[130vh] h-[100%] md:grid-rows-2 lg:gap-10 content-center justify-items-center
       lg:w-[60%] w-[100%] "
      >
        {Steps.map((step, index) => (
          <div
            key={index}
            className="bg-gradient-to-b  rounded-r-[30px] w-[80%] py-8 px-4 my-3
              relative  from-[#FFFFFF] to-[#E9E9E9]   lg:w-[80%] lg:py-5 lg:px-4"
          >
            <img
              src={step.image}
              className="lg:w-[4vw] md:w-[6vw] w-[13vw] absolute right-[1%] bottom-[87%]"
            />
            <p className="font-semibold w-[70%] text-lg mb-3">
              Step {step.num}: {step.title}
            </p>
            <p className="text-[#939191]   text-md">{step.text}</p>
          </div>
        ))}
      </section>
      <div className="bg-[#062182] w-[100%] flex justify-center items-center lg:h-[30vh] my-5 py-3 ">
        <p className="text-white text-center md:w-[90%] lg:w-[70%]  lg:text-xl text-[13px] font-mono lg:leading-normal  leading-[16px]">
          We focus specifically on junior and intermediate talent ensuring
          affordability without compromising on quality. We prioritize use
          experience, offering a streamlined process from job posting to hiring,
          backed by strong support.
        </p>
      </div>
    </main>
  );
};

export default Employers;
