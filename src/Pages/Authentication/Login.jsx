import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState("password");
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be atleast 6 characters")
      .required("Password is required"),
  });
  const setPasword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <main className=" main min-h-screen h-fit md:from-white  bg-gradient-to-b from-white to-[#E6EEFF] w-full flex justify-center flex-col items-center  ">
            <section className="flex w-[80%] justify-center md:items-center md:pl-0  flex-col md:justify-between  mb-6 lg:w-[30%]  ">
              <p className="md:text-[50px] text-[40px] font-nunito font-semibold">
                Log In
              </p>
              <p className="text-[#062182] text-base font-medium">
                Your information is secure and private
              </p>
            </section>
            <section className="lg:w-[30%] md:w-[60%] w-[80%]  flex flex-col gap-3 ">
              <Field
                type="text"
                name="email"
                placeholder="Email"
                className="border-[1px] focus:outline-none text-sm border-[#062182] py-3 rounded-sm  md:py-2 pl-3 w-[100%]"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 error"
              />
              <div className="border-[1px] justify-between items-center flex border-[#062182] py-3 md:py-2 px-3 w-[100%] rounded-sm">
                <Field
                  type={showPassword ? "password" : "text"}
                  name="password"
                  placeholder="Password"
                  className=" text-sm flex-grow focus:outline-none "
                />
                <span onClick={setPasword} className="cursor-pointer">
                  {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                </span>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600 error"
              />
              <section className="flex justify-between w-[100%] items-center mb-20 md:mb-10 ">
                <div className="flex   md:w-[43%] w-[40%] ">
                  <input
                    type="checkbox"
                    className=" w-1/5 border-2 border-[#062182]"
                  />
                  <p className="text-[#919193] w-[100%] lg:pl-2 pl-2 md:pl-0 text-sm">
                    Remember Me
                  </p>
                </div>
                <div>
                  <p className="text-[#062182] text-sm font-medium cursor-pointer">
                    Forgot password
                  </p>
                </div>
              </section>
              <section className="w-full flex flex-col gap-3 justify-center items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#062182] w-[100%] text-white rounded-md py-3 md:w-[100%] text-xl"
                >
                  {" "}
                  Log In
                </button>
                <div className="flex md:w-[100%] w-[100%] gap-1 justify-center  items-center">
                  <div className="border-b-2 border-[#06218282] md:w-[47%] w-[55%] "></div>
                  <p className="text-sm text-[#5D5E5D]">or</p>
                  <div className="border-b-2 border-[#06218282] md:w-[47%] w-[55%]"></div>
                </div>
                <div className="md:w-[100%] w-[100%] rounded-md border-[1px] border-[#062182] flex justify-center  items-center py-3">
                  <span className="text-2xl">
                    <FcGoogle />
                  </span>
                  <p className="text-[#062182] text-sm font-nunito pl-2">
                    {" "}
                    Login with Google
                  </p>
                </div>
                <p className="font-nunito w-[100%] md:w-[100%] text-center text-sm">
                  Don't have an account? Register as a{" "}
                  <Link to="/register">
                    <span className="text-[#062182] font-semibold">
                      {" "}
                      freelancer
                    </span>{" "}
                  </Link>
                  or an{" "}
                  <span className="text-[#062182] font-semibold">employer</span>
                </p>
              </section>
            </section>
          </main>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
