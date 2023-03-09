import React from "react";
import Link from "next/link";
import Image from "next/image";

// images
import logo from "@/public/assets/logo.png";
import upload from "../public/assets/svgs/upload.svg";
import plus from "../public/assets/svgs/plus-circle.svg";

const CvUpload = (): JSX.Element => {
  return (
    <section className="flex items-center min-h-screen">
      <div className="w-[34.4%] mb-[14px] h-[657px]">
        <div className="w-[80.7%] ml-[8.9%] ">
          <div className="mb-[61px]">
            <Link href="/" className="">
              <Image alt="" src={logo} />
            </Link>
          </div>
          <div className="w-[345px] ml-[50px]">
            <p className="p1 pt-[84px] mb-[69px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incid.
            </p>
            <button className="btn btn-white bordered w-[288px] pl-[29px] pr-0 text-left mb-7">
              <Image alt="" src={upload} className="inline-block mr-2" />
              <span>Приложи постојећи CV</span>
            </button>
            <button className="btn btn-red w-[288px] pl-[29px] pr-0 text-left">
              <Image alt="" src={plus} className="inline-block mr-7" />
              <span>Креирај нови CV</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-[65.6%] min-h-screen bg-center bg-cover"
        style={{ backgroundImage: `url("/assets/login.jpg")` }}
      ></div>
    </section>
  );
};

export default CvUpload;
