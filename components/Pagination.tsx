import React, { FunctionComponent } from "react";
import Image from "next/image";

// images
import arrowLeft from "../public/assets/svgs/arrow-left-black-circle.svg";
import arrowRight from "../public/assets/svgs/arrow-right-black-circle.svg";
import arrowFirst from "../public/assets/svgs/arrow-first.svg";
import arrowLast from "../public/assets/svgs/arrow-last.svg";

type IProps = {
  className: string;
};

const Pagination: FunctionComponent<IProps> = ({ className }): JSX.Element => {
  return (
    <section className={`wrapper lg:wrapper ${className}`}>
      <div className="l">
        <nav className="w-[387px] mx-auto">
          <ul className="flex items-center text-[16px] leading-10 font-semibold text-lightGray-300 text-center">
            <li className="mr-2">
              <button>
                <Image alt="" src={arrowFirst} className="inline-block" />
              </button>
            </li>
            <li className="mr-4">
              <button>
                <Image alt="" src={arrowLeft} className="inline-block" />
              </button>
            </li>
            <li className="w-9">
              <button>01</button>
            </li>
            <li className="w-9 text-black">
              <button>02</button>
            </li>
            <li className="w-9">
              <button>03</button>
            </li>
            <li className="w-9">
              <button>04</button>
            </li>
            <li className="w-9">
              <button>05</button>
            </li>
            <li className="w-9 mr-4">
              <button>06</button>
            </li>
            <li className="mr-[6px]">
              <button>
                <Image alt="" src={arrowRight} className="inline-block" />
              </button>
            </li>
            <li>
              <button>
                <Image alt="" src={arrowLast} className="inline-block" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Pagination;
