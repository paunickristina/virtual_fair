import React from "react";
import Image from "next/image";

// images
import employers from "@/public/assets/employers.jpg";

const Employers = (): JSX.Element => {
  return (
    <section className="wrapper lg:wrapper mb-11">
      <div className="l flex justify-between pr-6 pl-[10px]">
        <div className="w-2/5">
          <h2 className="uppercase pt-[38px] pb-9">ПОСЛОДАВЦИ</h2>
          <p className="p1 mb-6">
            Национална служба за запошљавање (НСЗ) је модеран јавни сервис који
            пружа услуге у области запошљавања тражиоцима запослења и
            послодавцима у Републици Србији.
          </p>
          <p className="p1">
            Националну службу за запошљавање чине Дирекција, две Покрајинске
            службе, 34 филијале, 21 служба и више од 120 испостава у свим
            окрузима у Србији.
          </p>
        </div>
        <div className="w-[48.3%] rounded overflow-hidden my-5">
          <Image alt="image" src={employers} className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Employers;
