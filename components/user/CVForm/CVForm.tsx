import React, { FunctionComponent } from "react";

// components
import Informations from "./Informations";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Languages from "./Languages";
import Hobbies from "./Hobbies";

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
        <Informations />
        <Experience />
        <Education />
        <Skills />
        <Languages />
        <Hobbies />
      </form>
    </div>
  );
};

export default CVForm;
