import Homewrapper from "@/components/Wrappers/Homewrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <Homewrapper>
      {/**header */}
      <div className="w-full  lg:flex-row flex flex-col py-10">
        <div className="w-full lg:w-7/12 lg:h-[600px] xl:h-[700px] flex gap-4 items-center p-2 py-10 flex-col lg:justify-center">
          <p className="text-4xl text-center font-semibold">
            Unleashing potential,
            <br /> shaping tomorrow.
          </p>
          <Link
            className=" bg-[#556B2F] w-40 h-12 rounded-full items-center justify-center flex"
            href={""}
          >
            <p className=" text-white">Sign Up</p>
          </Link>
        </div>
        <div className="w-full flex justify-end lg:h-full lg:items-center">
          <img
            src="/Homepage/background/tyches-home-header-image.png"
            className="w-11/12  lg:w-full lg:h-[600px] xl:h-[700px]"
          />
        </div>
      </div>

      {/**section 2 */}
      <div className="w-full flex flex-col lg:flex-row items-center p-4 bg-[#556B2F] space-y-6 lg:py-10 py-8">
        {/**text 1 */}
        <div className="w-11/12 flex flex-col items-center">
          <p className="text-lg font-semibold text-white">One Platform</p>
          <p className="text-center text-white font-thin">
            Get everything you need in
            <br /> one simple platform.
          </p>
        </div>
        {/**text 1 */}
        <div className="w-11/12 flex flex-col items-center">
          <p className="text-lg font-semibold text-white">
            Flexible Employment
          </p>
          <p className="text-center text-white font-thin">
            You decide when and where
            <br /> you want to work.
          </p>
        </div>
        {/**text 1 */}
        <div className="w-11/12 flex flex-col items-center">
          <p className="text-lg font-semibold text-white">
            Fast & Easy Payment
          </p>
          <p className="text-center text-white font-thin">
            Get your money on time with <br /> no hassle or complications.
          </p>
        </div>
      </div>
      {/**section 3 */}
      <div className="p-4 py-8 lg:py-12 w-full flex flex-col lg:gap-4 gap-6 lg:flex-row-reverse items-center ">
        {/**section 3.1 */}
        <div className="w-11/12  flex-col flex items-center   gap-2">
          <p className="text-2xl font-semibold lg:w-10/12 xl:w-8/12">
            For Jobseekers
          </p>
          <p className="text-center  text-lg lg:text-left text-gray-500 lg:w-10/12 xl:w-8/12">
            Looking for a full-time job, or maybe just something part-time to do
            along with your studies? Choose between full-time, part-time or
            seasonal jobs. Get the flexibility and freedom to choose your own
            schedule.
          </p>
          <Link
            href={""}
            className="p-3 items-center justify-center flex rounded-full border border-black w-8/12 lg:w-6/12 xl:w-4/12"
          >
            <p>See open vacancies</p>
          </Link>
        </div>
        {/**section 3.2 */}
        <div className="w-full flex flex-col items-center p-2 xl:pl-40">
          <Image
            src={"/Homepage/background/homepage-section2-image.png.png"}
            width={550}
            height={350}
            alt="image"
            priority
          />
        </div>
      </div>

      {/** section 4 */}
      <div className="w-full p-4 flex flex-col items-center">
        <div className="w-11/12 bg-[#27303B] flex flex-col items-center py-12 px-4 lg:px-8 xl:px-12 gap-4 md:rounded-full rounded-3xl">
          <p className="text-2xl text-white font-semibold">For Companies</p>
          <p className="font-light text-gray-400 text-center">
            Hire and manage the best talent with an intuitive and easy-to-use
            platform. You can list out vacancies, hire and manage employees, and
            payout salaries all in one platform. Want to know how it works?
            Contact us and book a demo today.
          </p>

          <Link href={""} className="p-2 rounded-full bg-white">
            <p>Book a Demo</p>
          </Link>
        </div>
      </div>
    </Homewrapper>
  );
}

export default page;
