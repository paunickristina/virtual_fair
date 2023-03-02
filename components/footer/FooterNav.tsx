import React from "react";
import Link from "next/link";
import Image from "next/image";

// images
import youtube from "@/public/assets/svgs/youtube.svg";
import facebook from "@/public/assets/svgs/facebook.svg";
import instagram from "@/public/assets/svgs/instagram.svg";
import linkedin from "@/public/assets/svgs/linkedin.svg";

const FooterNav = (): JSX.Element => {
  return (
    <section className="wrapper lg:wrapper rounded bg-primary-700">
      <div className="l pt-9 pb-6">
        <div className="flex justify-evenly text-lightGray-400 mb-14">
          <div>
            <h5 className="uppercase text-base font-semibold mb-[22px]">
              ТРАЖИТЕ ПОСАО
            </h5>
            <p className="text-[13px] mb-[7px] font-lato">
              <Link href="">Конкурси</Link>
            </p>
            <p className="text-[13px] mb-[7px] font-lato">
              <Link href="">Конкурси</Link>
            </p>
          </div>
          <div>
            <h5 className="uppercase text-base font-semibold mb-[22px]">
              НУДИТЕ ПОСАО
            </h5>
            <p className="text-[13px] mb-[7px] font-lato">
              <Link href="">Конкурси</Link>
            </p>
            <p className="text-[13px] mb-[7px] font-lato">
              <Link href="">Агенције за запошљавање</Link>
            </p>
          </div>
          <div>
            <h5 className="uppercase text-base font-semibold mb-[22px]">
              О НАМА
            </h5>
            <p className="text-[13px] mb-[7px] font-lato">
              <Link href="">Конкурси</Link>
            </p>
            <p className="text-[13px] mb-[7px] font-lato">
              <Link href="">Продаја основних средстава</Link>
            </p>
            <p className="text-[13px] mb-[7px] font-lato">
              <Link href="">Конкурси</Link>
            </p>
            <p className="text-[13px] mb-[7px] font-lato">
              <Link href="">Конкурси</Link>
            </p>
          </div>
          <div>
            <h5 className="uppercase text-base font-semibold mb-[22px]">
              НСЗ МРЕЖА
            </h5>
            <p className="text-[13px] mb-[7px] font-lato">
              <Link href="">Конкурси</Link>
            </p>
            <p className="text-[13px] mb-[7px] font-lato">
              <Link href="">Позивни центар 0800/300-301</Link>
            </p>
          </div>
          <div>
            <h5 className="uppercase text-base font-semibold mb-[22px]">
              ИНФО
            </h5>
            <p className="text-[13px] mb-[7px] font-lato">
              <Link href="">Конкурси</Link>
            </p>
            <p className="text-[13px] mb-[7px] font-lato">
              <Link href="">Конкурси</Link>
            </p>
          </div>
          <div>
            <h5 className="uppercase text-base font-semibold mb-[22px]">
              ДОКУМЕНТА
            </h5>
            <p className="text-[13px] mb-[7px] font-lato">
              <Link href="">Конкурси</Link>
            </p>
            <p className="text-[13px] mb-[7px] font-lato">
              <Link href="">Јединствени кодекс шифара</Link>
            </p>
          </div>
        </div>
        <div className="flex justify-between w-[15.3%] pl-9">
          <Link href="">
            <Image alt="image" src={youtube} className="" />
          </Link>
          <Link href="">
            <Image alt="image" src={facebook} className="" />
          </Link>
          <Link href="">
            <Image alt="image" src={instagram} className="" />
          </Link>
          <Link href="">
            <Image alt="image" src={linkedin} className="" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FooterNav;
