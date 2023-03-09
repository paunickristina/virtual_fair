import React from "react";

// components
import EmployersItem from "./EmployersItem";

const EmployersList = (): JSX.Element => {
  return (
    <section className="wrapper lg:wrapper">
      <div className="l">
        <h2>ПОСЛОДАВЦИ</h2>
        <div className="flex justify-between flex-wrap">
          <EmployersItem className="w-[49%] mb-7" />
          <EmployersItem className="w-[49%] mb-7" />
          <EmployersItem className="w-[49%] mb-7" />
          <EmployersItem className="w-[49%] mb-7" />
        </div>
      </div>
    </section>
  );
};

export default EmployersList;
