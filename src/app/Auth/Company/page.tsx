"use client";

import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

function page() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex-1 flex-col flex w-full h-[100vh]">
      <div className="w-full h-[85vh] items-center flex flex-col justify-center space-y-2">
        {/* logo */}
        <h1 className="md:text-[40px] text-[20px] mb-12">TYCHES.</h1>
        {/* dummy */}
        <div>
          <h1 className="md:text-[64px] text-[40px] text-center font-bold">
            Join the waiting list
          </h1>
          <h1 className="text-center md:text-[24px] text-textColor ">
            Sign up and be the first to know when we lunch
          </h1>
        </div>

        {/* sign up field */}
        <div className="flex space-x-2">
          <input
            placeholder="email@email.com"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            id="sign"
            type="text"
            className={`border ${
              isFocused ? "border-theme-color" : ""
            } w-60 md:w-80 p-3 rounded-main-radius`}
          />
          <button className="p-2 border rounded-main-radius w-28 text-white bg-theme-color">
            Submit
          </button>
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
