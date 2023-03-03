import React from "react";
import Link from "next/link";
import Image from "next/image";

// images
import candidates from "../public/assets/candidates.jpg";
import arrow from "../public/assets/svgs/arrow-right-red.svg";

const Candidates = (): JSX.Element => {
  return (
    <section className="wrapper lg:wrapper bg-secondary-100 rounded-lg mb-32">
      <div className="l flex justify-between pl-6 pr-14">
        <div className="w-[52.3%] rounded overflow-hidden my-5">
          <Image alt="image" src={candidates} className="w-full" />
        </div>
        <div className="w-[40.7%]">
          <h2 className="pt-8 pb-[74px]">Кандидати</h2>
          <p className="p1 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequatUt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo.
          </p>
          <Link href="" className="btn btn-white pl-[30px] pr-[34px]">
            Детаљније
            <Image alt="image" src={arrow} className="inline-block ml-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Candidates;
