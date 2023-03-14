import React, { FunctionComponent } from "react";
import Image from "next/image";

// images
import chevron from "@/public/assets/svgs/chevron-right.svg";

type IProps = {
  className: string;
};

const UserNav: FunctionComponent<IProps> = ({ className }): JSX.Element => {
  return (
    <div className={`pt-11 ml-11 ${className}`}>
      <button className="user-nav-btn">
        Профил <Image alt="" src={chevron} className="absolute top-[17px] right-5" />
      </button>
      <button className="user-nav-btn active">
        CV <Image alt="" src={chevron} className="absolute top-[17px] right-5" />
      </button>
      <button className="user-nav-btn">
        Историја пријава
        <Image alt="" src={chevron} className="absolute top-[17px] right-5" />
      </button>
    </div>
  );
};

export default UserNav;
