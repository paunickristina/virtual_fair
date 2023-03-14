import React, { FunctionComponent } from "react";

const CVForm: FunctionComponent = (): JSX.Element => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("test form");
  };
  return (
    <div className="pl-[114px] pt-[53px]">
      <h1 className="text-2xl capitalize mb-[30px]">Curriculum Vitae</h1>
      <form onSubmit={handleSubmit} className="pr-11">
        <div className="bg-white bordered px-5 pt-10 mb-[30px]">
          <h3 className="text-2xl font-normal">Информације</h3>
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
            <label className="w-[48%]">
              <span className="signup-span">Број телефона</span>
              <input className="user-cv-input" type="number" />
            </label>
            <label className="w-[48%]">
              <input className="user-cv-input" type="checkbox" />
              <span className="signup-span">Povratnik iz inostranstva</span>
            </label>
            <label className="w-[48%]">
              <span className="signup-span">Професија</span>
              <input className="user-cv-input" type="text" />
            </label>
          </div>
        </div>
        <div className="bg-white bordered px-5 pt-10 mb-[30px]">
          <h3 className="text-2xl font-normal">Радно искуство</h3>
          <div className="flex flex-wrap justify-between">
            <label className="w-[48%]">
              {/* change this - calendar */}
              <span className="signup-span">Трајање</span>
              <input className="user-cv-input" type="text" />
              <input className="user-cv-input" type="text" />
            </label>
            <label className="w-[48%]">
              <span className="signup-span">Позиција</span>
              <input className="user-cv-input" type="text" />
            </label>
            <label className="w-[48%]">
              <span className="signup-span">
                Главне активности и одговорности
              </span>
              <textarea className="user-cv-input" />
            </label>
            <label className="w-[48%]">
              {/* check this -calendar? */}
              <span className="signup-span">Име и адреса послодавца</span>
              <input className="user-cv-input" type="text" />
            </label>
            <label className="w-[48%]">
              <span className="signup-span">Тип компаније или сектор</span>
              <input className="user-cv-input" type="text" />
            </label>
          </div>
        </div>
        <div className="bg-white bordered px-5 pt-10 mb-[30px]">
          <h3 className="text-2xl font-normal">Образовање / Дипломе</h3>
          <div className="flex flex-wrap justify-between">
            <label className="w-full">
              {/* change this - calendar */}
              <span className="signup-span">Трајање</span>
              <div className="flex justify-between">
                <input className="user-cv-input w-[48%]" type="text" />
                <input className="user-cv-input w-[48%]" type="text" />
              </div>
            </label>
            <label className="w-full">
              <span className="signup-span">
                Title of qualification awarded
              </span>
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
              <textarea className="user-cv-input" />
            </label>
            <label className="w-full">
              <span className="signup-span">
                Ниво obraзовања у националној или међународној организацији
              </span>
              <input className="user-cv-input" type="text" />
            </label>
          </div>
        </div>
        <div className="bg-white bordered px-5 pt-10 mb-[30px]">
          <h3 className="text-2xl font-normal">Вештине</h3>
          <div className="flex flex-wrap justify-between">
            <label className="w-full">
              <span className="signup-span">Вештина</span>
              <input className="user-cv-input" type="text" />
            </label>
          </div>
        </div>
        <div className="bg-white bordered px-5 pt-10 mb-[30px]">
          <h3 className="text-2xl font-normal">Језици</h3>
          <div className="flex flex-wrap justify-between">
            <label className="w-full">
              <span className="signup-span">Језик</span>
              <input className="user-cv-input" type="text" />
            </label>
          </div>
        </div>
        <div className="bg-white bordered px-5 pt-10 mb-[30px]">
          <h3 className="text-2xl font-normal">Хобији</h3>
          <div className="flex flex-wrap justify-between">
            <label className="w-full">
              <span className="signup-span">Хоби</span>
              <input className="user-cv-input" type="text" />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CVForm;
