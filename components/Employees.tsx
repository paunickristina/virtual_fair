import React from "react";
import Link from "next/link";
import Image from "next/image";
import employeesImage from "../public/assets/employees.jpg";

const Employees = (): JSX.Element => {
  return (
    <section className="wrapper lg:wrapper bg-secondary-100 rounded-lg pl-6 pr-14 mb-32">
      <div className="l flex justify-between ">
        <div className="w-[52.3%] rounded overflow-hidden my-5">
          <Image
            alt="image"
            src={employeesImage}
            placeholder="blur"
            className="w-full"
          />
        </div>
        <div className="w-[40.7%]">
          <h2 className="uppercase pt-8 pb-20">Незапослени</h2>
          <p className="p1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequatUt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo.
          </p>
          <Link href="">Детаљније</Link>
        </div>
      </div>
    </section>
  );
};

export default Employees;
