import React, { FunctionComponent } from "react";

type IProps = {
  // src: string;
  // className: string;
};

const Experience: FunctionComponent<IProps> = (
  {
    // src,
    // className,
  }
): JSX.Element => {
  return (
    <div className="bg-white bordered px-5 pt-10 mb-[30px]">
      <h3 className="text-2xl font-normal mb-[34px]">Радно искуство</h3>
      <div className="flex flex-wrap justify-between mb-[18px]">
        <label className="w-full">
          {/* change this - calendar */}
          <span className="signup-span">Трајање</span>
          <div className="flex justify-between">
            <input className="user-cv-input w-[48%]" type="text" />
            <input className="user-cv-input w-[48%]" type="text" />
          </div>
        </label>
        <label className="w-full">
          <span className="signup-span">Позиција</span>
          <input className="user-cv-input" type="text" />
        </label>
        <label className="w-full">
          <span className="signup-span">Главне активности и одговорности</span>
          <textarea className="user-cv-input h-[157px] resize-none" />
        </label>
        <label className="w-full">
          {/* check this -calendar? */}
          <span className="signup-span">Име и адреса послодавца</span>
          <input className="user-cv-input" type="text" />
        </label>
        <label className="w-full">
          <span className="signup-span">Тип компаније или сектор</span>
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

export default Experience;
