import React, { FunctionComponent } from "react";

type IProps = {
  className: string;
};

const UserProfile: FunctionComponent<IProps> = ({ className }): JSX.Element => {
  return <div className={`bg-secondary-100 ${className}`}>Profile</div>;
};

export default UserProfile;
