import React, { FunctionComponent, useState } from "react";

// components
import AccordionItem from "./AccordionItem";

type IProps = {
  faqs: {
    id: string;
    jobName: string;
    description: string;
  }[];
};

// check this type:
type faq = {
  id: string;
  jobName: string;
  description: string;
};

const Accordion: FunctionComponent<IProps> = ({ faqs }): JSX.Element => {
  const [clicked, setClicked] = useState<number>(-1);

  const handleToggle = (i: number) => {
    if (clicked === i) {
      return setClicked(-1);
    }
    setClicked(i);
  };
  return (
    <section className="wrapper lg:wrapper">
      <div className="l pb-[51px] border-b border-lightGray-50">
        <h2 className="mb-[67px]">најчешћа питања и одговори (FAQ)</h2>
        <ul className="">
          {faqs.map((faq: faq, i: number) => (
            <AccordionItem
              onToggle={() => handleToggle(i)}
              active={clicked === i}
              key={faq.id}
              faq={faq}
              index={i}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Accordion;
