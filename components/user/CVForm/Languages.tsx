import React, { FunctionComponent } from "react";

type IProps = {
  // src: string;
  // className: string;
};

const Languages: FunctionComponent<IProps> = (
  {
    // src,
    // className,
  }
): JSX.Element => {
  return (
    <div className="bg-white bordered px-5 pt-10 mb-[30px]">
      <h3 className="text-2xl font-normal mb-[34px]">Језици</h3>
      <div className="flex flex-wrap justify-between mb-[18px]">
        <label className="w-full">
          <span className="signup-span">Језик</span>
          <input className="user-cv-input" type="text" />
        </label>
      </div>
      <div className="flex justify-end mb-[34px]">
        <button className="btn btn-white w-[120px] px-0 py-[7px] border border-primary-700">
          + Додај
        </button>
      </div>
    </div>
  );
};

export default Languages;
