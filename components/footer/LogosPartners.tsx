import React from "react";
import Link from "next/link";
import Image from "next/image";
import germanyImage from "@/public/assets/logos/germany.png";
import gizImage from "@/public/assets/logos/giz.png";
import nszImage from "@/public/assets/logos/nsz.png";

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
          <Image alt="image" src={germanyImage} />
        </Link>
        <Link
          href=""
          className="flex items-center justify-center border-r border-lightGray-50"
        >
          <Image alt="image" src={gizImage} />
        </Link>
        <Link href="" className="flex items-center justify-center">
          <Image alt="image" src={nszImage} />
        </Link>
      </div>
    </section>
  );
};

export default LogosPartners;
