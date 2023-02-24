import React from "react";
import Image from "next/image";
import Link from "next/link";
import previousFairs from "../public/assets/previousFairs.jpg";

const PreviousFairs = (): JSX.Element => {
  return (
    <section className="wrapper lg:wrapper mb-16">
      <div className="l relative">
        <div className="rounded-lg overflow-hidden">
          <Image
            alt="image"
            src={previousFairs}
            placeholder="blur"
            className="w-full"
          />
        </div>
        <Link
          href=""
          className="absolute bottom-[68px] left-1/2 -translate-x-1/2"
        >
          Претходни Сајмови
        </Link>
      </div>
    </section>
  );
};

export default PreviousFairs;
