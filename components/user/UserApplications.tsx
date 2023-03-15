import React, { FunctionComponent } from "react";

type IProps = {
  className: string;
};

const UserApplications: FunctionComponent<IProps> = ({
  className,
}): JSX.Element => {
  return <div className={`bg-secondary-100 ${className}`}>Applications history</div>;
};

export default UserApplications;
