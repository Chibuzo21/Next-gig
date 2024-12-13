import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import people from "../../assets/people.png";
import girl from "../../assets/girl.png";
import boy from "../../assets/boy.png";
import cup from "../../assets/cup.png";

function Home() {
  return (
    <>
      <main
        id="home"
        className=" main lg:min-h-screen py-12 h-fit flex justify-center items-center  bg-[#E6EEFF] md:bg-gradient-to-br from-[#E6EEFF] to-[#FFFFFF]"
      >
        <main className="flex flex-col   md:flex-row h-[90%]  items-center justify-center  md:justify-around  w-[100%]">
          <section className="md:w-[40%] w-[80%]  h-[50%] lg:h-[70%]  p-3   text-center md:text-start   flex md:items-start justify-center items-center flex-col py-3 ">
            <p className="text-[#062182] text-[21px] font-bold md:font-medium md:mb-4 mb-1">
              It is time to
            </p>
            <p className="lg:text-4xl text-[23px] leading-[30px] font-nunito font-semibold md:font-semibold text-[#2D2D2E] lg:leading-[42px] mb-3">
              Build Your Dream Team with Fresh Talent
            </p>
            <p className="text-[#939191] md:mb-3 mb-4 text-xl md:text-sm lg:text-base px-2 md:px-0 ">
              Discover and Hire Junior and Inermediate developers and designers
              who are dedicated and motivated to bring your vision to life
            </p>
            <div className="flex justify-between items-center w-[95%] md:w-[90%]">
              <button className="bg-[#062182] px-2 w-[50%]  py-2 md:p-2 rounded-md  flex justify-evenly items-center ">
                <p className="text-white lg:text-lg text-base md:text-sm ">
                  Get Started
                </p>
                <span className="text-white text-2xl lg:text-3xl">
                  <FaCircleArrowRight />
                </span>
              </button>
              <img src={people} className="md:w-[13vw] w-[40vw] " />
            </div>
          </section>
          <section className="grid p-3 grid-cols-[1fr,1fr] grid-rows-[1fr,1fr] gap-3 md:h-[50%] h-[50%] lg:h-[70%]   md:w-[40%] w-[80%] ">
            <img
              src={boy}
              height="500"
              className=" col-start-1 col-end-2 row-start-1 row-end-2  hover:scale-105 transition duration-300 ease-in-out h-[100%]"
            />

            <img
              src={girl}
              alt=""
              className="col-start-1 col-end-2 row-start-2 row-end-3  hover:scale-105 transition duration-300 ease-in-out  h-[100%]"
            />

            <img
              src={cup}
              alt=""
              className="col-start-2 col-end-3 row-start-1 row-end-3 h-[100%]  hover:scale-105 transition duration-300 ease-in-out "
            />
          </section>
        </main>
      </main>
      <div className="bg-gradient-to-l from-[#FFFFFF] to-[#4256C1] w-full h-[7vh]"></div>
    </>
  );
}

export default Home;
