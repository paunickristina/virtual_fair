import React from "react";
import Link from "next/link";
import Image from "next/image";

// images
import germany from "@/public/assets/logos/germany.png";
import giz from "@/public/assets/logos/giz.png";
import nsz from "@/public/assets/logos/nsz.png";

const LogosPartners = (): JSX.Element => {
  return (
    <section className="wrapper lg:wrapper">
      <div className="l grid auto-rows-fr grid-cols-logos">
        <div className="py-[58px] pl-8 border-r border-lightGray-50">
          <span className="tag tag-big bg-lightGray-100">ПАРТНЕРИ</span>
        </div>
        <Link
          href=""
          className="flex items-center justify-center border-r border-lightGray-50"
        >
          <Image alt="image" src={germany} />
        </Link>
        <Link
          href=""
          className="flex items-center justify-center border-r border-lightGray-50"
        >
          <Image alt="image" src={giz} />
        </Link>
        <Link href="" className="flex items-center justify-center">
          <Image alt="image" src={nsz} />
        </Link>
      </div>
    </section>
  );
};

export default LogosPartners;
