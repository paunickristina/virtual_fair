import React, { FunctionComponent, useState } from "react";

type IProps = {
  // className: string;
};

const Skills: FunctionComponent<IProps> = (): JSX.Element => {
  const [numChildren, setNumChildren] = useState<number>(1);
  const children = [];

  const ChildComponent = () => {
    return (
      <div className="flex flex-wrap justify-between mb-[18px]">
        <label className="w-full">
          <span className="signup-span">Вештина</span>
          <input className="user-cv-input" type="text" />
        </label>
      </div>
    );
  };

  for (let i = 0; i < numChildren; i++) {
    children.push(<ChildComponent key={i} />);
  }

  const handleClick = () => {
    setNumChildren((count) => count + 1);
  };

  return (
    <div className="bg-white bordered px-5 pt-10 mb-[30px]">
      <h3 className="text-2xl font-normal mb-[34px]">Вештине</h3>
      {children}
      <div className="flex justify-end mb-[34px]">
        <button
          type="button"
          onClick={handleClick}
          className="btn btn-white w-[120px] px-0 py-[7px] border border-primary-700"
        >
          + Додај
        </button>
      </div>
    </div>
  );
};

export default Skills;
