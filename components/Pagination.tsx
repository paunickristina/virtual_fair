import React, { FunctionComponent } from "react";
import Image from "next/image";

// images
import arrowLeft from "../public/assets/svgs/arrow-left-black-circle.svg";
import arrowRight from "../public/assets/svgs/arrow-right-black-circle.svg";

type IProps = {
  className: string;
};

const Pagination: FunctionComponent<IProps> = ({ className }): JSX.Element => {
  return (
    <section className={`wrapper lg:wrapper ${className}`}>
      <div className="l">
        <nav className="w-[393px] mx-auto">
          <ul className="flex items-center text-[16px] leading-10 font-semibold text-lightGray-300 text-center">
            <li>
              <button>
                {/* change this */}
                <Image alt="" src={arrowLeft} className="inline-block mr-2" />
              </button>
            </li>
            <li className="mr-2">
              <button>
                <Image alt="" src={arrowLeft} className="inline-block mr-2" />
              </button>
            </li>
            <li className="w-[34px]">
              <button>01</button>
            </li>
            <li className="w-[34px] text-black">
              <button>02</button>
            </li>
            <li className="w-[34px]">
              <button>03</button>
            </li>
            <li className="w-[34px]">
              <button>04</button>
            </li>
            <li className="w-[34px]">
              <button>05</button>
            </li>
            <li className="w-[34px] mr-[18px]">
              <button>06</button>
            </li>
            <li>
              <button>
                <Image alt="" src={arrowRight} className="inline-block mr-2" />
              </button>
            </li>
            <li>
              <button>
                <Image alt="" src={arrowRight} className="inline-block mr-2" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Pagination;
