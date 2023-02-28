import React, { FunctionComponent } from "react";

// components
import NewsCard from "./NewsCard";

type IProps = {
  news: {
    id: string;
    jobName: string;
    description: string;
    createdAt: Date;
  }[];
};

const NewsBlock: FunctionComponent<IProps> = ({ news }) => {
  return (
    <section className="wrapper lg:wrapper md:pt-16 md:pb-32">
      <div className="l">
        <h2 className="text-center md:w-4/5 xl:w-2/3 mx-auto md:pb-28">
          Будите информисани, све информације и обавештења на једном месту
        </h2>
        <div className="flex flex-wrap justify-between">
          {news &&
            news
              .slice(0, 4)
              // check this any:
              .map((news: any) => <NewsCard key={news.id} news={news} />)}
        </div>
      </div>
    </section>
  );
};

export default NewsBlock;
