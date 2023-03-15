import React, { FunctionComponent, useState } from "react";

// components
import UserNav from "./UserNav";
import UserCV from "./UserCV";
import UserProfile from "./UserProfile";
import UserApplications from "./UserApplications";

const UserContent: FunctionComponent = (): JSX.Element => {
  const [userProfile, setUserProfile] = useState<boolean>(true);
  const [userCv, setUserCv] = useState<boolean>(false);
  const [userApplications, setUserApplications] = useState<boolean>(false);

  const activeProfile = () => {
    setUserProfile(true);
    setUserCv(false);
    setUserApplications(false);
  };

  const activeCv = () => {
    setUserProfile(false);
    setUserCv(true);
    setUserApplications(false);
  };

  const activeApplications = () => {
    setUserProfile(false);
    setUserCv(false);
    setUserApplications(true);
  };

  return (
    <section className="wrapper-f">
      <div className="l flex">
        <UserNav
          className="w-[33%]"
          activeProfile={activeProfile}
          activeCv={activeCv}
          activeApplications={activeApplications}
          userProfile={userProfile}
          userCv={userCv}
          userApplications={userApplications}
        />
        {userProfile && <UserProfile className="w-[67%]" />}
        {userCv && <UserCV className="w-[67%]" />}
        {userApplications && <UserApplications className="w-[67%]" />}
      </div>
    </section>
  );
};

export default UserContent;
