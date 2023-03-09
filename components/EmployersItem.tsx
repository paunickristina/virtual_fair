import React, { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";

// images
import testImage from "../public/assets/news.jpg";
import arrow from "../public/assets/svgs/arrow-right-circle.svg";

type IProps = {
  className: string;
};

const EmployersItem: FunctionComponent<IProps> = ({
  className,
}): JSX.Element => {
  return (
    <div className={`flex justify-between bordered p-7 ${className}`}>
      <div className="w-[41%]">
        <Image alt="" src={testImage} className="w-full mb-6" />
        <p className="text-center">
          <a href="https://www.deltaagrar.rs/" target="_blank">
            www.deltaagrar.rs
          </a>
        </p>
      </div>
      <div className="w-[54%]">
        <div className="flex justify-between mb-[54px]">
          <h3 className="font-bold text-2xl">Делта Аграр</h3>
          <span className="h-8 tag-purple leading-8 px-[18px] rounded-full">
            шумарство
          </span>
        </div>
        <p className="p1 mb-7">
          Lorem ipsum dolor sit amet, consectetur scing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          ncididunt ut labore et dolore magna aliqua. Ut enim ad minim.
        </p>
        <Link href="" className="text-base text-primary-700 font-semibold">
          <Image alt="" src={arrow} className="inline-block mr-2" />
          Погледај послове (20)
        </Link>
      </div>
    </div>
  );
};

export default EmployersItem;
