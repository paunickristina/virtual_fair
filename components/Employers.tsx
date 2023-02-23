import React from "react";
import Link from "next/link";
import Image from "next/image";
import employersImage from "../public/assets/employers.jpg";

const Employers = (): JSX.Element => {
  return (
    <section className="wrapper lg:wrapper bg-secondary-100 rounded-lg pr-6 pl-14 mb-11">
      <div className="l flex justify-between">
        <div className="w-2/5">
          <h2 className="uppercase pt-8 pb-20">ПОСЛОДАВЦИ</h2>
          <p className="p1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequatUt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo.
          </p>
          <Link href="">Детаљније</Link>
        </div>
        <div className="w-1/2 rounded overflow-hidden my-5">
          <Image
            alt="image"
            src={employersImage}
            placeholder="blur"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Employers;
