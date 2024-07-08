"use client";

import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

function page() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex-1 flex-col flex w-full h-[100vh]">
      <div className="w-full  h-[85vh] items-center flex flex-col justify-center space-y-2">
        {/* logo */}
        <h1 className="md:text-[40px] text-[20px] mb-12">TYCHES.</h1>
        <p className="text-xl font-medium">Create an Account</p>
        <p className="font-light">
          Enter your Email to sign up for this platform
        </p>
        <input
          placeholder="email@email.com"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          id="sign"
          type="text"
          className={`border-2 ${
            isFocused ? "border-theme-color" : ""
          } w-96 p-2 rounded`}
        />
        <Link
          href={""}
          className="w-[400px] h-12 rounded-full items-center justify-center flex text-white bg-theme-color"
        >
          Sign up with email
        </Link>

        <div className="flex w-[500px]  items-center justify-center gap-2">
          <div className="border w-40 h-[0.5px]" />
          <p>or continue with</p>
          <div className="border w-40 h-[0.5px]" />
        </div>

        <Link
          href={""}
          className="w-[400px] h-12 rounded-full items-center justify-center flex relative bg-gray-200"
        >
          <p>Google</p>
          <div className="absolute left-4">
            <FcGoogle size={30} />
          </div>
        </Link>
          <div className="w-11/12 ">

        <p className="text-gray-500 text-center">
          By clicking continue, you agree to our <span className="text-black">Terms of Service</span>  and <span className="text-black">Privacy</span>
          Policy
        </p>
          </div>
      </div>

      <div className="w-full h-[15vh]  flex justify-center items-center">
        <div className="w-[90%] h-12 flex justify-center items-center">
          <ul className="flex  space-x-4">
            <li>
              <FaFacebook size={24} color="#828282" />
            </li>
            <li>
              <FaLinkedin size={24} color="#828282" />
            </li>
            <li>
              <FaYoutube size={24} color="#828282" />
            </li>
            <li>
              <IoLogoInstagram size={24} color="#828282" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default page;

//    {/* dummy */}
//    <div>
//    <h1 className="md:text-[64px] text-[40px] text-center font-bold">
//      Join the waiting list
//    </h1>
//    <h1 className="text-center md:text-[24px] text-textColor ">
//      Sign up and be the first to know when we lunch
//    </h1>
//  </div>

//  {/* sign up field */}
//  <div className="flex space-x-2">
//    <input
//      placeholder="email@email.com"
//      onFocus={() => setIsFocused(true)}
//      onBlur={() => setIsFocused(false)}
//      id="sign"
//      type="text"
//      className={`border ${
//        isFocused ? "border-theme-color" : ""
//      } w-60 md:w-80 p-3 rounded-main-radius`}
//    />
//    <button className="p-2 border rounded-main-radius w-28 text-white bg-theme-color">
//      Submit
//    </button>
//  </div>
