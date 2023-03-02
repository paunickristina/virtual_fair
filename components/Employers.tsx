import React from "react";
import Link from "next/link";
import Image from "next/image";

// images
import employers from "../public/assets/employers.jpg";
import arrow from "../public/assets/svgs/arrow-right-red.svg";

const Employers = (): JSX.Element => {
  return (
    <section className="wrapper lg:wrapper bg-secondary-100 rounded-lg mb-11">
      <div className="l flex justify-between pr-6 pl-14">
        <div className="w-2/5">
          <h2 className="uppercase pt-[30px] pb-[74px]">ПОСЛОДАВЦИ</h2>
          <p className="p1 mb-8 font-lato">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequatUt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex.
          </p>
          <Link href="" className="btn btn-white pl-[30px] pr-[34px]">
            Детаљније
            <Image alt="image" src={arrow} className="inline-block ml-4" />
          </Link>
        </div>
        <div className="w-1/2 rounded overflow-hidden my-5">
          <Image alt="image" src={employers} className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Employers;
