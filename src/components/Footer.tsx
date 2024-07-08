import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  const companies = [
    {
      name: "How it works",
      route: "",
    },
    {
      name: "Dashboard",
      route: "",
    },
    {
      name: "Sign up",
      route: "",
    },
  ];
  const people =[
    {
      name: "How it works",
      route: "",
    },
    {
      name: "Dashboard",
      route: "",
    },
    {
      name: "Sign up",
      route: "",
    },
  ]
  const Us =[
    {
      name: "Our Story",
      route: "",
    },
    {
      name: "Careers",
      route: "",
    },
    {
      name: "Press",
      route: "",
    },
    {
      name: "Contact Us",
      route: "",
    },
    {
      name: "Customer Service",
      route: "",
    },
  ]
  return (
    <div className="w-full p-4 flex items-center md:items-start flex-col md:flex-row border-t-2 gap-4">
      <div className=" w-11/12 md:w-4/12 space-y-4 lg:bg-red-500">
        <p className="text-2xl">Tyches</p>
        <div className="flex gap-6  justify-between">
          <Link href={""}>
            <FaFacebook size={30} />
          </Link>
          <Link href={""}>
            <FaInstagramSquare size={30} />
          </Link>
          <Link href={""}>
            <FaSquareXTwitter size={30} />
          </Link>
          <Link href={""}>
            <FaLinkedin size={30} />
          </Link>
        </div>
        <hr className="md:hidden"/>
      </div>

      {/**links */}
      <div className="flex-1 md:justify-end py-6 md:py-0 lg:bg-blue-500 grid grid-cols-2 md:grid-cols-3 gap-10">
        {/**section1 */}
        <div>
          <p className=" font-semibold">For Companies</p>
          <ul className="flex flex-col gap-2">
            {companies.map((value, index) => (
              <Link href={""} key={index} className="font-light">
                {value.name}
              </Link>
            ))}
          </ul>
        </div>
        {/**section2 */}
        <div>
          <p className=" font-semibold">For Jobseekers</p>
          <ul className="flex flex-col gap-2">
            {people.map((value, index) => (
              <Link href={""} key={index} className="font-light">
                {value.name}
              </Link>
            ))}
          </ul>
        </div>
        {/**section3 */}
        <div>
          <p className=" font-semibold">Company</p>
          <ul className="flex flex-col gap-2">
            {Us.map((value, index) => (
              <Link href={""} key={index} className="font-light">
                {value.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
