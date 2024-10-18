import React from "react";
import Header from "../../Components/Header";
import Home from "./Home";
import Freelancers from "./Freelancers";
import About from "./About";
import Contact from "./Contact";
import Employers from "./Employers";

const Landing = () => {
  return (
    <main>
      <Header />
      <div className="  pt-20 overflow-x-hidden">
        <Home />
        <Freelancers />
        <Employers />
        <About />
        <Contact />
      </div>
    </main>
  );
};

export default Landing;