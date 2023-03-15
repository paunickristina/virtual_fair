import React, { FunctionComponent } from "react";
import Image from "next/image";

// images
import chevron from "@/public/assets/svgs/chevron-right.svg";

type IProps = {
  className: string;
  activeProfile: any;
  activeCv: any;
  activeApplications: any;
  userProfile: boolean;
  userCv: boolean;
  userApplications: boolean;
};

const UserNav: FunctionComponent<IProps> = ({
  className,
  activeProfile,
  activeCv,
  activeApplications,
  userProfile,
  userCv,
  userApplications,
}): JSX.Element => {
  return (
    <div className={`pt-11 ml-11 ${className}`}>
      <button
        onClick={activeProfile}
        className={`user-nav-btn ${userProfile && "active"}`}
      >
        Профил
        <Image alt="" src={chevron} className="absolute top-[17px] right-5" />
      </button>
      <button
        onClick={activeCv}
        className={`user-nav-btn ${userCv && "active"} `}
      >
        CV
        <Image alt="" src={chevron} className="absolute top-[17px] right-5" />
      </button>
      <button
        onClick={activeApplications}
        className={`user-nav-btn ${userApplications && "active"} `}
      >
        Историја пријава
        <Image alt="" src={chevron} className="absolute top-[17px] right-5" />
      </button>
    </div>
  );
};

export default UserNav;
