import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import hero from "../public/assets/hero.jpg";

const HeroSlider = (): JSX.Element => {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <section className="wrapper lg:wrapper border-b border-lightGray-50">
      {/* check this border: */}
      <div className="l pb-[74px]">
        <Slider {...settings}>
          <div>
            <div className="flex justify-between">
              <div className="w-[38.5%] pl-[2%] pt-[5px]">
                <span className="tag tag-red text-[16px]">27. НОВЕМБАР</span>
                <h1 className="pt-[30px] mb-2">Сајам запошљавања у Суботици</h1>
                <p className="mb-[26px] text-base">
                  Филијала Суботица Националне службе за запошљавање организује
                  43. сајам запошљавања у четвртак, 10. новембра
                </p>
                <div className="flex w-[82%] rounded border border-lightGray-200 text-lg mb-14">
                  <p className="border-r border-lightGray-200 py-[9px] pl-[4.8%] pr-[11.4%]">
                    <span className="font-bold">24</span> Послодавца
                  </p>
                  <p className="py-[9px] pl-[5.2%]">
                    <span className="font-bold">300</span> Радних места
                  </p>
                </div>
                <Link href="" className="btn btn-red">
                  Детаљније
                </Link>
              </div>
              <div className="w-[57.5%]">
                <Image alt="image" src={hero} priority />
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <div className="w-[38.5%] pl-[2%] pt-[5px]">
                <span className="tag tag-red text-[16px]">27. НОВЕМБАР</span>
                <h1 className="pt-[30px] mb-2">Сајам запошљавања у Суботици</h1>
                <p className="mb-[26px] text-base">
                  Филијала Суботица Националне службе за запошљавање организује
                  43. сајам запошљавања у четвртак, 10. новембра
                </p>
                <div className="flex w-[82%] rounded border border-lightGray-200 text-lg mb-14">
                  <p className="border-r border-lightGray-200 py-[9px] pl-[4.8%] pr-[11.4%]">
                    <span className="font-bold">24</span> Послодавца
                  </p>
                  <p className="py-[9px] pl-[5.2%]">
                    <span className="font-bold">300</span> Радних места
                  </p>
                </div>
                <Link href="" className="btn btn-red">
                  Детаљније
                </Link>
              </div>
              <div className="w-[57.5%]">
                <Image alt="image" src={hero} priority />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HeroSlider;
