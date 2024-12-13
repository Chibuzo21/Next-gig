import React, { useState } from "react";
import { Form, Formik, ErrorMessage, Field } from "formik";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const ShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const ShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <>
      <main className="min-h-screen main h-fit px-7 flex items-center justify-center lg:block  md:px-10 py-6 flex-col">
        <div>
          <h1 className="md:text-3xl text-2xl ">
            Create Your Freelancer Account
          </h1>
        </div>
        <div className="lg:text-2xl text-xl my-6 text-[#062182] text-center flex justify-center items-center font-normal ">
          <p className="text-wrap lg:w-[30%] md:w-[50%]">
            Join our Community of Talented Developers and Designers
          </p>
        </div>
        <form className="flex justify-center items-center flex-col w-[100%]">
          <div className="mb-3">
            <label className="Registername">Full Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter your full name"
              className="RegisterInput"
            />
          </div>
          <div className="mb-3">
            <label className="Registername">Email Address</label>
            <br />
            <input
              type="text"
              placeholder="Enter your email address"
              className="RegisterInput"
            />
          </div>
          <div>
            <label className="Registername">Password</label>
            <div className="mb-3 px-4 py-2 md:w-[50vw] lg:w-[30vw] w-[80vw] border-[#062182] border-[1px] flex justify-center items-center">
              <br />
              <input
                type={showPassword ? "password" : "text"}
                className="flex-grow focus:outline-none"
                placeholder="Create a strong password"
              />
              <span className="cursor-pointer" onClick={ShowPassword}>
                {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </span>
            </div>
          </div>
          <div className="mb-3 px-4 py-2 md:w-[50vw] lg:w-[30vw] w-[80vw] border-[#062182] border-[1px] flex justify-center items-center ">
            <input
              type={showConfirmPassword ? "password" : "text"}
              placeholder="Confirm Password"
              className=" flex-grow focus:outline-none"
            />
            <span className="cursor-pointer" onClick={ShowConfirmPassword}>
              {showConfirmPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
            </span>
          </div>
          <div className="flex md:justify-end md:w-[50vw]  lg:w-[32%] mb-4 w-[80vw] ">
            <button className="bg-[#062182] text-xl md:text-base rounded-sm text-white md:px-12 py-3 w-[100%] md:w-fit">
              Next
            </button>
          </div>
          <p className="md:text-xl lg:text-base">
            Already have an account?
            <Link to="/login">
              <span className="text-[#062182] font-medium"> Log In</span>
            </Link>
          </p>
        </form>
      </main>
    </>
  );
};

export default Register;
