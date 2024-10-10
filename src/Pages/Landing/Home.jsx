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
        className="flex flex-col  md:flex-row h-[100%] items-center justify-center md:pt-0 pt-14 lg:justify-evenly lg:h-[86vh] w-[100%] bg-gradient-to-br from-[#E6EEFF] to-[#FFFFFF]"
      >
        <section className="lg:w-[26%]  text-center md:text-start w-[90%] flex justify-center items-center flex-col ">
          <p className="text-[#062182] text-[21px] font-bold lg:font-medium lg:mb-4 mb-1">
            It is time to
          </p>
          <p className="lg:text-4xl text-[23px] leading-[30px] font-nunito font-semibold lg:font-semibold text-[#2D2D2E] lg:leading-[42px] mb-3">
            Build Your Dream Team with Fresh Talent
          </p>
          <p className="text-[#939191] lg:mb-3 mb-4 text-xl lg:text-base px-2 lg:px-0 ">
            Discover and Hire Junior and Inermediate developers and designers
            who are dedicated and motivated to bring your vision to life
          </p>
          <div className="flex justify-between items-center w-[95%] lg:w-[100%]">
            <button className="bg-[#062182] px-2 w-[50%]  py-2 lg:p-2 rounded-md  lg:mr-0 lg:w-[12vw] flex justify-evenly items-center ">
              <p className="text-white lg:text-lg text-base ">Get Started</p>
              <span className="text-white text-3xl">
                <FaCircleArrowRight />
              </span>
            </button>
            <img src={people} className="lg:w-[13vw] w-[40vw]" />
          </div>
        </section>
        <section className="flex  justify-center items-center lg:gap-3  lg:w-[40%] w-[90%] gap-2  lg:h-full h-[46vh] ">
          <div className="flex flex-col justify-between lg:h-[63.8vh] h-[27vh] w-[40vw] lg:w-[45vw] ">
            <img src={boy} alt="" className="h-[13vh]  lg:h-[31vh]" />
            <img src={girl} alt="" className="h-[13vh] lg:h-[31vh]" />
          </div>
          <div className="h-[29vh] lg:h-[65vh] flex justify-center items-center w-[38vw] ">
            <img src={cup} alt="" className="h-[27vh] w-[35vw] lg:h-[64vh]" />
          </div>
        </section>{" "}
      </main>
      <div className="bg-gradient-to-l from-[#FFFFFF] to-[#4256C1] w-full h-[7vh]"></div>
    </>
  );
}

export default Home;
