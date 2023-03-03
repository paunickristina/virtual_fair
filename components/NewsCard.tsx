import React, { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";

// images
import newsImage from "../public/assets/news.jpg";
import arrow from "../public/assets/svgs/arrow-right-circle.svg";

type IProps = {
  news: {
    id: string;
    jobName: string;
    description: string;
    createdAt: Date;
  };
};

const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString("tr-TR");
};

const News: FunctionComponent<IProps> = ({ news }): JSX.Element => {
  return (
    <div className="w-[48.5%] lg:w-[23.5%]">
      <span className="tag tag-red">{news.description}</span>
      <span className="text-sm font-semibold ml-3.5">
        {formatDate(news.createdAt)}
      </span>
      <div className="rounded-md overflow-hidden mt-[22px] mb-[18px]">
        <Image alt="image" src={newsImage} className="w-full" />
      </div>
      <h3 className="w-4/5 mb-3.5">{news.jobName}</h3>
      <Link href="" className="text-base text-primary-700 font-semibold">
        <Image alt="image" src={arrow} className="inline-block mr-2" />
        Прочитај више
      </Link>
    </div>
  );
};

export default News;
