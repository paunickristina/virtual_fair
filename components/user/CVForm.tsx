import React, { FunctionComponent } from "react";

const CVForm: FunctionComponent = (): JSX.Element => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("test form");
  };
  return (
    <div className="pl-[114px] pt-[50px] pr-11">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl capitalize">Curriculum Vitae</h1>
          <div>
            <button className="btn btn-white w-[120px] mr-3 px-0 py-2">
              Поништи
            </button>
            <button className="btn btn-red w-[120px] px-0 py-2">Сачувај</button>
          </div>
        </div>
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
              <input
                className="w-9 h-9 bordered mb-1 mr-[10px]"
                type="checkbox"
              />
              <span className="signup-span">Povratnik iz inostranstva</span>
            </label>
            <label className="w-full mb-11">
              <span className="signup-span">Професија</span>
              <input className="user-cv-input" type="text" />
            </label>
          </div>
        </div>
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
              <span className="signup-span">
                Главне активности и одговорности
              </span>
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
        <div className="bg-white bordered px-5 pt-10 mb-[30px]">
          <h3 className="text-2xl font-normal mb-[34px]">
            Образовање / Дипломе
          </h3>
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
        <div className="bg-white bordered px-5 pt-10 mb-[30px]">
          <h3 className="text-2xl font-normal mb-[34px]">Вештине</h3>
          <div className="flex flex-wrap justify-between mb-[18px]">
            <label className="w-full">
              <span className="signup-span">Вештина</span>
              <input className="user-cv-input" type="text" />
            </label>
          </div>
          <div className="flex justify-end mb-[34px]">
            <button className="btn btn-white w-[120px] px-0 py-[7px] border border-primary-700">
              + Додај
            </button>
          </div>
        </div>
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
        <div className="bg-white bordered px-5 pt-10 mb-[30px]">
          <h3 className="text-2xl font-normal mb-[34px]">Хобији</h3>
          <div className="flex flex-wrap justify-between mb-[18px]">
            <label className="w-full">
              <span className="signup-span">Хоби</span>
              <input className="user-cv-input" type="text" />
            </label>
          </div>
          <div className="flex justify-end mb-[34px]">
            <button className="btn btn-white w-[120px] px-0 py-[7px] border border-primary-700">
              + Додај
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CVForm;
