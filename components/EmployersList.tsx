import React from "react";

// components
import EmployersItem from "./EmployersItem";
import Pagination from "./Pagination";

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
        <Pagination className="mb-[132px]" />
      </div>
    </section>
  );
};

export default EmployersList;
