import React, { FunctionComponent } from "react";
import Image from "next/image";

// images
import chevron from "../public/assets/svgs/chevron.svg";

type IProps = {
  faq: {
    id: string;
    jobName: string;
    description: string;
  };
  onToggle: (e: React.MouseEvent<HTMLDivElement>) => void;
  active: boolean;
  index: number;
};

const AccordionItem: FunctionComponent<IProps> = ({
  faq,
  onToggle,
  active,
  index,
}): JSX.Element => {
  // change this:
  const { jobName: question, description: answer } = faq;
  return (
    <li
      className={`border rounded py-8 pl-6 pr-9 mb-5 ${
        active ? "active border-primary-700" : "border-lightGray-200"
      }`}
    >
      <div onClick={onToggle} className="flex justify-between cursor-pointer">
        <p className={`text-2xl ${active ? "font-semibold" : ""}`}>
          {index + 1}. <span className="inline-block indent-4">{question}</span>
        </p>
        <Image
          alt=""
          src={chevron}
          className={`${active ? "rotate-180 transition-all" : ""}`}
        />
      </div>
      <div className={`answer pl-10 w-[82%] ${active ? "open" : ""}`}>
        <p className="helper h-0"></p>
        <p>{answer}</p>
      </div>
    </li>
  );
};

export default AccordionItem;
