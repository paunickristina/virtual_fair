import React from "react";
import Image from "next/image";
import Link from "next/link";

// images
import previousFairs from "../public/assets/previousFairs.jpg";
import arrow from "../public/assets/svgs/arrow-right-red.svg";

const PreviousFairs = (): JSX.Element => {
  return (
    <section className="wrapper lg:wrapper mb-16">
      <div className="l relative">
        <div className="rounded-lg overflow-hidden">
          <Image alt="image" src={previousFairs} className="w-full" />
        </div>
        <Link
          href=""
          className="btn btn-white px-6 absolute bottom-[68px] left-1/2 -translate-x-1/2"
        >
          Претходни Сајмови
          <Image alt="image" src={arrow} className="inline-block ml-4" />
        </Link>
      </div>
    </section>
  );
};

export default PreviousFairs;
