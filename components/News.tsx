import React from "react";
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

const News = ({ news }: IProps) => {
  console.log(news);
  return (
    <div>
      <span className="bg-primary-500 text-secondary-200">{news.description}</span>
      {/* <span>{news.createdAt}</span> */}
      <h3>{news.jobName}</h3>
      <Image alt="leeerob" src={newsImage} placeholder="blur" />
      <Link href={news.jobName}></Link>
    </div>
  );
};

export default News;
