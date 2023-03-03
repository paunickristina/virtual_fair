import React from "react";
import Image from "next/image";

// images
import candidates from "@/public/assets/candidates.jpg";

const Candidates = (): JSX.Element => {
  return (
    <section className="wrapper lg:wrapper rounded-lg mb-7">
      <div className="l flex justify-between">
        <div className="w-[49.3%] rounded overflow-hidden my-5">
          <Image alt="image" src={candidates} className="w-full" />
        </div>
        <div className="w-[43.9%]">
          <h2 className="pt-8 pb-[29px]">
            KО МОЖЕ ДА <br /> УЧЕСТВУЈЕ НА САЈМУ?
          </h2>
          <p className="p1">
            Сви који траже посао, могу да се пријаве за учешће на Сајму.
          </p>
          <p className="p1 mb-6">
            Учешће на Сајму је једноставно. Без потребе инсталирања било каквог
            додатног софтвера можете се регистровати и укључити преко
            претраживача на било ком уређају (мобилни телефон, таблет, лаптоп,
            десктоп рачунар).
          </p>
          <p className="p1">
            Већ сада се можете регистровати кликом на:
            www.nsz-sajamzaposljavanja.rs Компаније ће бити представљене на
            виртуелним штандовима, на којима ће изложити своју понуду послова.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Candidates;
