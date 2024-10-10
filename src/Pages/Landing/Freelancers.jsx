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
        className="bg-gradient-to-b from-[#FFFFFF] to-[#E6EEFF] lg:h-[100%] h-[100%]"
      >
        <section className="flex flex-col justify-center items-center py-5">
          <p className="lg:text-2xl text-4xl font-medium">How it works</p>
          <p className="lg:text-md text-xl">For Freelancers</p>
        </section>

        <section className=" flex lg:flex-row flex-col lg:flex-wrap gap-10 lg:h-[130vh] justify-center items-center w-[100%]">
          {Steps.map((step, index) => (
            <div
              key={index}
              className="bg-gradient-to-b rounded-r-[30px]  relative my-5 w-[80%] py-8 px-4 from-[#FFFFFF] to-[#E9E9E9] 
              lg:h-[45vh] h-fit lg:w-[25%] lg:py-4 lg:px-4"
            >
              <img
                src={step.image}
                className="lg:w-[4vw] w-[13vw] absolute right-[1%] bottom-[87%]"
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
