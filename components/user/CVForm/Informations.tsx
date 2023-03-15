import React, { FunctionComponent } from "react";

type IProps = {
  // src: string;
  // className: string;
};

const Informations: FunctionComponent<IProps> = (
  {
    // src,
    // className,
  }
): JSX.Element => {
  return (
    <div className="bg-white bordered px-5 pt-10 mb-[30px]">
      <h3 className="text-2xl font-normal mb-[34px]">Информације</h3>
      <div className="flex flex-wrap justify-between">
        <label className="w-[48%]">
          <span className="signup-span">Име</span>
          <input className="user-cv-input" type="text" />
        </label>
        <label className="w-[48%]">
          <span className="signup-span">Презиме</span>
          <input className="user-cv-input" type="text" />
        </label>
        <label className="w-[48%]">
          <span className="signup-span">Адреса</span>
          <input className="user-cv-input" type="text" />
        </label>
        <label className="w-[48%]">
          <span className="signup-span">E-mail</span>
          <input className="user-cv-input" type="text" />
        </label>
        <label className="w-[48%]">
          {/* check this -calendar? */}
          <span className="signup-span">Датум рођења</span>
          <input className="user-cv-input" type="text" />
        </label>
        <label className="w-[48%]">
          <span className="signup-span">Пол</span>
          <input className="user-cv-input" type="text" />
        </label>
        <label className="w-[48%] mb-4">
          <span className="signup-span">Број телефона</span>
          <input className="user-cv-input" type="number" />
        </label>
        <label className="flex items-center w-[48%]">
          <input className="w-9 h-9 bordered mb-1 mr-[10px]" type="checkbox" />
          <span className="signup-span">Povratnik iz inostranstva</span>
        </label>
        <label className="w-full mb-11">
          <span className="signup-span">Професија</span>
          <input className="user-cv-input" type="text" />
        </label>
      </div>
    </div>
  );
};

export default Informations;
