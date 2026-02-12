import React from "react";
import { Link } from "react-router-dom";
import signupImg from "../assets/signup.jpg"; 

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className=" max-w-5xl bg-white overflow-hidden grid grid-cols-1 md:grid-cols-2">

       
        <div className="relative  mt-10 h-[500px] hidden md:block">
          <img
            src={signupImg}
            alt="Signup"
            className="w-full h-full rounded-tr-[40%] rounded-bl-[40%] object-cover"
          />

          <div className="absolute rounded-tr-[40%] rounded-bl-[40%] inset-0 bg-black/50 flex flex-col justify-center px-10 ">
            <h2 className="text-3xl text-center font-bold text-white mb-2">
              Let’s Get Started!
            </h2>
            <p className="w-[300px] ml-15 text-center text-gray-200">
              Create your account and unlock the full potential of Fragranza.
            </p>
          </div>
        </div>

        
        <div className="p-8 md:p-12 flex flex-col justify-center">

          
          <div className="flex gap-4 mb-6">
            <button className="flex items-center justify-center gap-2 w-full border rounded-lg py-2 text-sm font-medium hover:bg-gray-50">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5"
              />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 w-full border rounded-lg py-2 text-sm font-medium hover:bg-gray-50">
              <img
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                className="w-5"
              />
              Facebook
            </button>
          </div>

          
          <div className="flex items-center my-4">
            <hr className="flex-1" />
            <span className="px-3 text-sm text-gray-400">
              Or sign up with email
            </span>
            <hr className="flex-1" />
          </div>

          
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Enter your E-Mail"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          
          <div className="flex items-center gap-2 mt-4 text-sm">
            <input type="checkbox" className="accent-[#0b3a4a]" />
            <span>
              Agree with{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms & Conditions
              </a>
            </span>
          </div>

         
          <button className="mt-6 bg-[#0b3a4a] text-white py-3 rounded-lg font-semibold hover:opacity-90">
            Sign up
          </button>

         
          <p className="text-sm text-center mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-medium hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
