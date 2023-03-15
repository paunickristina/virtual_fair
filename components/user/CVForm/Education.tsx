import React, { FunctionComponent } from "react";

type IProps = {
  // src: string;
  // className: string;
};

const Education: FunctionComponent<IProps> = (
  {
    // src,
    // className,
  }
): JSX.Element => {
  return (
    <div className="bg-white bordered px-5 pt-10 mb-[30px]">
      <h3 className="text-2xl font-normal mb-[34px]">Образовање / Дипломе</h3>
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
          <span className="signup-span">Title of qualification awarded</span>
          <input className="user-cv-input" type="text" />
        </label>
        <label className="w-full">
          <span className="signup-span">
            Principal subjects / occupational skills covered
          </span>
          <input className="user-cv-input" type="text" />
        </label>
        <label className="w-full">
          <span className="signup-span">
            Name and type of organisation providing education and training
          </span>
          <textarea className="user-cv-input h-[157px] resize-none" />
        </label>
        <label className="w-full">
          <span className="signup-span">
            Ниво obraзовања у националној или међународној организацији
          </span>
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

export default Education;
