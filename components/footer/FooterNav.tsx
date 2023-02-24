import React from "react";
import Link from "next/link";

const FooterNav = (): JSX.Element => {
  return (
    <section className="wrapper lg:wrapper rounded bg-primary-700">
      <div className="l flex justify-evenly text-white py-9">
        <div>
          <h5 className="uppercase text-base font-semibold mb-[22px]">ТРАЖИТЕ ПОСАО</h5>
          <p className="text-[13px] mb-[7px]">
            <Link href="">Конкурси</Link>
          </p>
          <p className="text-[13px] mb-[7px]">
            <Link href="">Конкурси</Link>
          </p>
        </div>
        <div>
          <h5 className="uppercase text-base font-semibold mb-[22px]">НУДИТЕ ПОСАО</h5>
          <p className="text-[13px] mb-[7px]">
            <Link href="">Конкурси</Link>
          </p>
          <p className="text-[13px] mb-[7px]">
            <Link href="">Агенције за запошљавање</Link>
          </p>
        </div>
        <div>
          <h5 className="uppercase text-base font-semibold mb-[22px]">О НАМА</h5>
          <p className="text-[13px] mb-[7px]">
            <Link href="">Конкурси</Link>
          </p>
          <p className="text-[13px] mb-[7px]">
            <Link href="">Продаја основних средстава</Link>
          </p>
          <p className="text-[13px] mb-[7px]">
            <Link href="">Конкурси</Link>
          </p>
          <p className="text-[13px] mb-[7px]">
            <Link href="">Конкурси</Link>
          </p>
        </div>
        <div>
          <h5 className="uppercase text-base font-semibold mb-[22px]">НСЗ МРЕЖА</h5>
          <p className="text-[13px] mb-[7px]">
            <Link href="">Конкурси</Link>
          </p>
          <p className="text-[13px] mb-[7px]">
            <Link href="">Позивни центар 0800/300-301</Link>
          </p>
        </div>
        <div>
          <h5 className="uppercase text-base font-semibold mb-[22px]">ИНФО</h5>
          <p className="text-[13px] mb-[7px]">
            <Link href="">Конкурси</Link>
          </p>
          <p className="text-[13px] mb-[7px]">
            <Link href="">Конкурси</Link>
          </p>
        </div>
        <div>
          <h5 className="uppercase text-base font-semibold mb-[22px]">ДОКУМЕНТА</h5>
          <p className="text-[13px] mb-[7px]">
            <Link href="">Конкурси</Link>
          </p>
          <p className="text-[13px] mb-[7px]">
            <Link href="">Јединствени кодекс шифара</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterNav;
