import React from "react";
import laptop from "../assets/images/laptop.png";
import Gradient from "../assets/images/Gradient.png";
import Frame24 from "../assets/images/Frame 24.png";
// import Bgcomputer from "../assets/images/laptop.jpeg";

const About = () => {
<<<<<<< HEAD:src/Pages/About.jsx
  return (
    <main className="">
      <section className="h-[120vh] w-full flex flex-col items-center border-[2px] border-blue-400">
        <section className="h-[20vh] w-[100%] bg-[#062182] flex items-center justify-center">
          {" "}
          <p className="text-white text-xl text-center">
            We focus specifically on junior and intermediate talent, ensuring
            affordability <br /> without compromising on quality. We prioritize
            user experience, offering a <br /> streamlined process from job
            posting to hiring, backed by strong support.
          </p>
        </section>
        <section className="h-[100vh] flex flex-col  w-[100%] bg-gradient-to-b from-customLight to-customDark ">
          <div className="h-[15vh] flex items-end justify-center">
            <p className="text-black text-3xl font-semibold ">About us</p>
          </div>
          <div className="flex justify-center items-center space-x-[40px] h-[85vh] w-full ">
            <img
              src={laptop}
              alt=""
              className="w-[600px] h-[500px] hover:scale-105 transition duration-300 ease-in-out"
            />
            <div className=" relative textDiv flex flex-col space-y-4 justify-center  h-[500px] w-[600px] ">
              <h3 className="text-2xl font-semibold"> For Employees:</h3>
              <p className="font-semibold text-gray-700 text-xl">
                We help businesses discover talented junior and intermediate{" "}
                <br />
                developers and designers who are eager to prove their skills{" "}
                <br /> and build their portfolios.
              </p>
              <h3 className="text-2xl font-semibold">For Freelancers:</h3>
              <p className="font-semibold text-gray-700 text-xl">
                {" "}
                We provide an opportunity for budding professionals to <br />
                showcase their abilities, gain experience, and grow their <br />{" "}
                careers.
              </p>
              <button className=" absolute h-[3rem] w-[8rem] text-white text-lg bg-[#062182] hover:opacity-70 right-4 bottom-0  p-2 m-2 rounded-lg">
                {" "}
                Learn More
              </button>
            </div>
          </div>
        </section>
      </section>
      {/* hire a team */}
      <section className="h-[10vh] w-[full]">
        {" "}
        <img src={Gradient} alt="" className="h-full w-full" />
      </section>

      <section className="relative grid place-items-center h-[100vh] w-[full]">
        <div className=" absolute bg-[url('./assets/images/laptop.jpeg')] bg-cover bg-center inset-0 z-0 opacity-10"></div>
        <div className=" h-full flex flex-col justify-around items-center  absolute z-10 ">
          <p className="text-3xl font-semibold  ">
            Hire a Team For The Next Big Project
          </p>
          <div>
            <img src={Frame24} alt="" className="h-[78vh] w-[45vw]" />
          </div>
        </div>
      </section>
    </main>
  );
=======
  return <main id="about">About</main>;
>>>>>>> main:src/Pages/Landing/About.jsx
};

export default About;
