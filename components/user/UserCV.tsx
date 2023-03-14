import React, { FunctionComponent, useState } from "react";

// components
import CVForm from "./CVForm";
import CVUpload from "./CVUpload";

type IProps = {
  className: string;
};

const UserCV: FunctionComponent<IProps> = ({ className }): JSX.Element => {
  const [showForm, setShowForm] = useState<boolean>(true);

  const handleClick = (bool: boolean) => {
    setShowForm(bool);
  };

  return (
    <div className={` bg-secondary-100 ${className}`}>
      <div className="flex justify-between text-center pt-[54px] px-11 border-b border-b-lightGray-50">
        <button
          onClick={() => handleClick(true)}
          className={`user-cv-tab ${showForm && "active"}`}
        >
          Креирај CV
        </button>
        <button
          onClick={() => handleClick(false)}
          className={`user-cv-tab ${!showForm && "active"}`}
        >
          Приложи постојећи CV
        </button>
      </div>
      {showForm && <CVForm />}
      {!showForm && <CVUpload />}
    </div>
  );
};

export default UserCV;
