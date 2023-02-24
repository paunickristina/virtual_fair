import React from "react";
import Link from "next/link";
import Image from "next/image";
import microsoftImage from "../public/assets/logos/microsoft.png";
import nestleImage from "../public/assets/logos/nestle.png";

const LogosEmployers = (): JSX.Element => {
  return (
    <section className="wrapper lg:wrapper mb-28">
      check this: scroll and border width?
      <div className="l flex items-center border-y border-lightGray-50">
        <div className="py-10 pl-8 pr-12 border-r border-lightGray-50">
          <span className="tag tag-big bg-lightGray-100">ПОСЛОДАВЦИ</span>
        </div>
        <Link href="" className="w-32 mx-16">
          <Image alt="image" src={microsoftImage} />
        </Link>
        <Link href="" className="w-32 mx-16">
          <Image alt="image" src={nestleImage} />
        </Link>
        <Link href="" className="w-32 mx-16">
          <Image alt="image" src={microsoftImage} />
        </Link>
        <Link href="" className="w-32 mx-16">
          <Image alt="image" src={nestleImage} />
        </Link>
        <Link href="" className="w-32 mx-16">
          <Image alt="image" src={microsoftImage} />
        </Link>
        <Link href="" className="w-32 mx-16">
          <Image alt="image" src={nestleImage} />
        </Link>
      </div>
    </section>
  );
};

export default LogosEmployers;
