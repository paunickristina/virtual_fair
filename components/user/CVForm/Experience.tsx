import React, { FunctionComponent, useState } from "react";

const ChildComponent = () => {
  return (
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
  );
};

const Experience: FunctionComponent = (): JSX.Element => {
  const [numChildren, setNumChildren] = useState<number>(1);
  const children = [];

  for (let i = 0; i < numChildren; i++) {
    children.push(<ChildComponent key={i} />);
  }

  const handleAddComponent = () => {
    setNumChildren((count) => count + 1);
  };

  const handleRemoveComponent = () => {
    setNumChildren((count) => count - 1);
  };
  return (
    <div className="bg-white bordered px-5 pt-10 mb-[30px]">
      <h3 className="text-2xl font-normal mb-[34px]">Радно искуство</h3>
      {children}
      <div className="flex justify-end mb-[34px]">
        {numChildren > 1 && (
          <button
            type="button"
            onClick={handleRemoveComponent}
            className="btn btn-white w-[120px] px-0 py-[7px] mr-4 border border-primary-700"
          >
            - Уклони
          </button>
        )}
        <button
          type="button"
          onClick={handleAddComponent}
          className="btn btn-white w-[120px] px-0 py-[7px] border border-primary-700"
        >
          + Додај
        </button>
      </div>
    </div>
  );
};

export default Experience;
