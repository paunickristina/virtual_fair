import React from "react";
import Image from "next/image";

// images
import statistics from "../public/assets/statistics.jpg";

const Statistics = (): JSX.Element => {
  return (
    <>
      <section className="wrapper lg:wrapper bg-secondary-100 rounded-t-lg">
        <div className="l flex justify-between pr-6 pl-14">
          <div className="w-2/5 mt-6">
            <span className="tag tag-white">Саопштења</span>
            <h2 className="uppercase pt-[34px] pb-2">
              Статистика тржишта рада
            </h2>
            <span className="uppercase text-xl font-extrabold ">
              отворени подаци
            </span>
            <p className="p1 pt-[133px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat
            </p>
          </div>
          <div className="w-1/2 rounded overflow-hidden mt-5 mb-[22px]">
            <Image alt="" src={statistics} className="w-full" />
          </div>
        </div>
      </section>
      <section className="wrapper lg:wrapper bg-primary-700 rounded-b-lg pt-10 pb-6 mb-[123px] text-white">
        <div className="l flex">
          <div className="w-[25.5%] pl-[4%] pr-[2%] border-r border-white border-opacity-30">
            <h4 className="mb-[14%]">
              Број незапослених лица на евиденцији НСЗ
            </h4>
            <p className="text-[52px]">427.594</p>
          </div>
          <div className="w-[25.5%] pl-[4%] pr-[2%] border-r border-white border-opacity-30">
            <h4 className="mb-[14%]">Број тражилаца промене запослења</h4>
            <p className="text-[52px]">1.578</p>
          </div>
          <div className="w-[25.5%] pl-[3%] pr-[2%] border-r border-white border-opacity-30">
            <h4 className="mb-[14%]">Број осталих тражилаца запослења</h4>
            <p className="text-[52px]">4.012</p>
          </div>
          <div className="w-[23.5%] pl-[4%] pr-[2%]">
            <h4 className="mb-[14%]">Број оглашених радних позиција</h4>
            <p className="text-[52px]">518</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Statistics;
