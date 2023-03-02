import React from "react";
import Link from "next/link";

const Copyright = (): JSX.Element => {
  return (
    <section className="wrapper lg:wrapper font-lato text-[13px]">
      <div className="l flex pt-5 pb-4">
        <p className="mr-[18.9%] ml-[2.5%]">© 2023. Сва права задржана</p>
        <div className="mr-[5.2%]">
          <Link href="">Услoви и права кoришћeња</Link>
        </div>
        <div className="mr-[6.5%]">
          <Link href="">Политика приватности</Link>
        </div>
        <div className="mr-[12.6%]">
          <Link href="">Насловна</Link>
        </div>
        <div>
          <Link href="">Контакт</Link>
        </div>
      </div>
    </section>
  );
};

export default Copyright;
