import React from "react";

// components
import News from "./News";

type IProps = {
  news: {
    id: string,
    jobName: string;
    description: string;
    createdAt: Date;
  }[];
};

const NewsBlock = ({ news }: IProps) => {
  console.log("data:", news);
  return (
    <div>
      <h2>Будите информисани, све информације и обавештења на једном месту</h2>
      <div>
        {news && news.map((news: any) => <News key={news.id} news={news} />)}
      </div>
    </div>
  );
};

export default NewsBlock;
