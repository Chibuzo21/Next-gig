import React from "react";
import contact from "../assets/images/contact.png";

const Contact = () => {
  return (
    <main className="bg-gradient-to-b from-customLight to-customDark ">
      <section className="h-[70vh] flex items-center justify-center place-items-center  space-x-10">
        <div>
          <img
            src={contact}
            alt=""
            className="h-[300px] w-[350px]
            hover:scale-105
            transition
            duration-300
            ease-in-out"
          />
        </div>
        <div className=" relative h-[300px]  flex flex-col items-start justify-around">
          <p className="font-bold text-xl">Have a question?</p>
          <p className="text-xl font-normal">
            Need support, or just want to learn more? We’d love to <br /> hear
            from you! Reach out to us
          </p>
          <button className=" h-[3.5rem] w-[9rem]  text-white text-lg bg-[#062182] hover:opacity-70 p-2 rounded-sm">
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
};

export default Contact;
