import React from "react";
import Signup from "/Sign up.svg";
import Salary from "/Salary.svg";
import Download from "/download.svg";
import Connection from "/Connection.svg";
import Folder from "/Folder.svg";

const Freelancers = () => {
  const Steps = [
    {
      num: 1,
      image: Signup,
      title: "Sign Up & Create Your Profile",
      text: "Join our community by signing up for free. Complete your profile by adding your skills, experience, and portfolio links. Make your profile stand out to attract potential clients ",
    },
    {
      num: 2,
      image: Download,
      title: "Browse & Apply for Jobs",
      text: "Explore a wide range of job postings tailored for developers and designers. Use filters to find jobs that match you skills and interest",
    },
    {
      num: 3,
      image: Connection,
      title: "Connect with Employers",
      text: " Recieve invitations and messages from employers who are interested in your profile. Engage in meaningful conversations to understand project requirements and expectations.",
    },
    {
      num: 4,
      image: Folder,
      title: "Secure the Job & Get Started",
      text: "Once you've been selected, finalize the project details with the employer. Start working on exciting projects that help you grow your skills and build your portfolio.",
    },
    {
      num: 5,
      image: Salary,
      title: "Get Paid & Build Your Reputation",
      text: "Complete your projects successfully and get paid securely through our platform. Earn positive reviews and ratings to build your reputation and attract more opportunities.",
    },
  ];
  return (
    <>
      <main
        id="freelancers"
        className=" main flex 
      flex-col justify-center items-center   bg-gradient-to-b from-[#FFFFFF] to-[#E6EEFF] lg:h-[100%] h-[100%]"
      >
        <section className="flex flex-col justify-center items-center py-5">
          <p className="md:text-2xl text-4xl font-medium">How it works</p>
          <p className="md:text-md text-xl">For Freelancers</p>
        </section>

        <section
          className=" grid  md:grid-cols-2 lg:grid-cols-3 py-8 h-[100%] md:grid-rows-2  place-items-center 
       w-[100%] "
        >
          {Steps.map((step, index) => (
            <div
              key={index}
              className="bg-gradient-to-b  rounded-r-[40px] w-[80%] py-8 px-4 my-5
              relative  from-[#FFFFFF] to-[#E9E9E9]   md:w-[76%] lg:py-5 lg:px-5"
            >
              <img
                src={step.image}
                className="lg:w-[4vw] md:w-[6vw] w-[13vw] absolute right-[1%] bottom-[87%]"
              />
              <p className="font-bold w-[70%] text-lg mb-3">
                Step {step.num}: {step.title}
              </p>
              <p className="text-[#939191]  text-md">{step.text}</p>
            </div>
          ))}
        </section>
      </main>
      <div className="w-full h-[7vh] bg-gradient-to-l from-[#FFFFFF] to-[#4256C1]"></div>
    </>
  );
};

export default Freelancers;
