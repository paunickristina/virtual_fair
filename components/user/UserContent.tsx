import React, { FunctionComponent } from "react";

// components
import UserNav from "./UserNav";
import UserCV from "./UserCV";

const UserContent: FunctionComponent = (): JSX.Element => {
  return (
    <section className="wrapper-f">
      <div className="l flex">
        <UserNav className="w-[33%]" />
        <UserCV className="w-[67%]" />
      </div>
    </section>
  );
};

export default UserContent;
