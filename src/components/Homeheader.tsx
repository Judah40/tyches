"use client";

import { navigation } from "@/Constants/header";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Homeheader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    console.log(navigation);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full flex p-8 bg-white shadow-md">
      {/* container */}
      <div className="flex w-full items-center justify-between">
        {/* logo */}
        <div className="capitalize text-xl font-bold">TYCHES.</div>
        {/* mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        {/* navigation menu for larger screens */}
        <div className="hidden lg:flex justify-end md:w-full md:flex-1">
          <ul className="flex">
            {navigation.map((value: any, index: any) => (
              <li className="p-2" key={index}>
                <Link
                  className={`${value.url === "Company" ? "border p-4 rounded-main-radius border-black" : ""} ${
                    value.url === "Employee" ? "bg-theme-color p-4 rounded-main-radius text-white" : ""
                  }`}
                  href={`/${value.url}`}
                >
                  {value.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 w-full">
          <ul className="flex flex-col items-center">
            {navigation.map((value: any, index: any) => (
              <li className="p-2" key={index}>
                <Link
                  className={`${value.url === "Company" ? "border p-4 rounded-main-radius border-black" : ""} ${
                    value.url === "Employee" ? "bg-theme-color p-4 rounded-main-radius text-white" : ""
                  }`}
                  href={`/${value.url}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {value.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Homeheader;
