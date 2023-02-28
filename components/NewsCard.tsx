import React, { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import newsImage from "../public/assets/news.jpg";

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

const News: FunctionComponent<IProps> = ({ news }) => {
  return (
    <div className="w-[48.5%] lg:w-[23.5%]">
      <span className="tag tag-red">{news.description}</span>
      <span className="text-sm font-semibold ml-3.5">
        {formatDate(news.createdAt)}
      </span>
      <div className="rounded-md overflow-hidden my-5">
        <Image
          alt="image"
          src={newsImage}
          placeholder="blur"
          className="w-full"
        />
      </div>
      <h3 className="mb-3.5">{news.jobName}</h3>
      <Link href="" className="text-base text-primary-700 font-semibold">
        Прочитај више
      </Link>
    </div>
  );
};

export default News;
