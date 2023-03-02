import React from "react";
import Link from "next/link";
import Image from "next/image";

// images
import microsoft from "../public/assets/logos/microsoft.png";

const LogosEmployers = (): JSX.Element => {
  return (
    <>
      <section className="wrapper lg:wrapper mb-28">
        <div className="l flex items-center h-[105px] border-y border-lightGray-50">
          <div className="py-8 pl-8 pr-[53px] border-r border-lightGray-50">
            <span className="tag tag-big bg-lightGray-100">ПОСЛОДАВЦИ</span>
          </div>
          <div className="w-[105px] lg:h-[696px] xl:h-[1111px] overflow-y-auto overflow-x-hidden no-scrollbar -rotate-90 origin-top-right translate-y-[50%] relative bottom-1/2 -translate-x-[105px] pt-48">
            <p className="w-[130px] h-52 rotate-90 origin-top-right relative left-[-54%]">
              <Link href="">
                <Image alt="" src={microsoft} className="w-full" />
              </Link>
            </p>
            <p className="w-[130px] h-52 rotate-90 origin-top-right relative left-[-54%]">
              <Link href="">
                <Image alt="" src={microsoft} className="w-full" />
              </Link>
            </p>
            <p className="w-[130px] h-52 rotate-90 origin-top-right relative left-[-54%]">
              <Link href="">
                <Image alt="" src={microsoft} className="w-full mx-4" />
              </Link>
            </p>
            <p className="w-[130px] h-52 rotate-90 origin-top-right relative left-[-54%]">
              <Link href="">
                <Image alt="" src={microsoft} className="w-full mx-4" />
              </Link>
            </p>
            <p className="w-[130px] h-52 rotate-90 origin-top-right relative left-[-54%]">
              <Link href="">
                <Image alt="" src={microsoft} className="w-full mx-4" />
              </Link>
            </p>
            <p className="w-[130px] h-52 rotate-90 origin-top-right relative left-[-54%]">
              <Link href="">
                <Image alt="" src={microsoft} className="w-full mx-4" />
              </Link>
            </p>

            <p className="w-[130px] h-52 rotate-90 origin-top-right relative left-[-54%]">
              <Link href="">
                <Image alt="" src={microsoft} className="w-full mx-4" />
              </Link>
            </p>
            <p className="w-[130px] h-52 rotate-90 origin-top-right relative left-[-54%]">
              <Link href="">
                <Image alt="" src={microsoft} className="w-full mx-4" />
              </Link>
            </p>
            <p className="w-[130px] h-52 rotate-90 origin-top-right relative left-[-54%]">
              <Link href="">
                <Image alt="" src={microsoft} className="w-full mx-4" />
              </Link>
            </p>
            <p className="w-[130px] h-52 rotate-90 origin-top-right relative left-[-54%]">
              <Link href="">
                <Image alt="" src={microsoft} className="w-full mx-4" />
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogosEmployers;
