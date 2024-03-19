"use client";

import { navigation } from "@/Constants/header";
import Link from "next/link";
import React, { useEffect } from "react";

function Homeheader() {
  useEffect(() => {
    console.log(navigation);
  }, []);
  return (
    <header className="w-full flex p-8">
      {/* container */}
      <div className="flex w-full items-center">
        {/* logo */}
        <div className="capitalize">TYCHES.</div>
        {/* navigation menu for small screen */}
        <div className="hidden md:flex  justify-end md:w-full md:flex-1">
          <ul className="flex">
            {navigation.map((value: any, index: any) => (
              <li className=" p-2" key={index}>
                <Link
                className={`${value.url==="Company"?" border p-4 rounded-main-radius border-black":""}
                ${value.url==="Employee"?" bg-theme-color p-4 rounded-main-radius text-white":""}
                `}
                href={`/${value.url}`}>{value.label}</Link>
              </li>
            ))}
            <li></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Homeheader;
