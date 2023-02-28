import React, { FunctionComponent, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

// images
import hero from "../public/assets/hero.jpg";
import calendar from "../public/assets/svgs/calendar.svg";
import arrow from "../public/assets/svgs/arrow-right-white.svg";

type IProps = {
  fairs: {
    id: string;
    numOfPos: string;
    createdAt: Date;
  }[];
};

// check this type:
type fair = {
  id: string;
  numOfPos: string;
  createdAt: Date;
};

const HeroSlider: FunctionComponent<IProps> = ({ fairs }): JSX.Element => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current: number, next: number) => setActiveSlide(next),
  };
  return (
    <section className="wrapper lg:wrapper border-b border-lightGray-50">
      {/* check this border: */}
      <div className="l pb-[72px]">
        <Slider {...settings}>
          {fairs &&
            fairs.map((fair: fair) => (
              <div key={fair.id}>
                <div className="flex justify-between">
                  <div className="w-[38.5%] pl-[2%]">
                    <div className="flex justify-between w-[186px] px-4 tag tag-red text-[16px]">
                      <Image alt="image" src={calendar} />
                      27. НОВЕМБАР
                    </div>
                    <h1 className="pt-[25px] mb-2">
                      Сајам запошљавања у Суботици
                    </h1>
                    <p className="mb-[26px] text-base">
                      Филијала Суботица Националне службе за запошљавање
                      организује 43. сајам запошљавања у четвртак, 10. новембра
                    </p>
                    <div className="flex w-[82%] rounded border border-lightGray-200 text-lg mb-14">
                      <p className="border-r border-lightGray-200 py-[9px] pl-[4.8%] pr-[11.4%]">
                        <span className="font-bold">24</span> Послодавца
                      </p>
                      <p className="py-[9px] pl-[5.2%]">
                        <span className="font-bold">{fair.numOfPos}</span>{" "}
                        Радних места
                      </p>
                    </div>
                    <Link href="" className="btn btn-red px-[62px] mr-[15.3%]">
                      Детаљније
                      <Image
                        alt="image"
                        src={arrow}
                        className="!inline-block ml-3"
                      />
                    </Link>
                    <div className="inline-block">
                      <span className="heroSlider-current">
                        0{activeSlide + 1}
                      </span>
                      <span className="font-semibold text-lightGray-300">
                        0{fairs.length}
                      </span>
                    </div>
                  </div>
                  <div className="w-[57.5%]">
                    <Image alt="image" src={hero} priority />
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSlider;
