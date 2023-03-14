import React, { FunctionComponent } from "react";

type IProps = {
  src: string;
  className: string;
};

const HeroImage: FunctionComponent<IProps> = ({
  src,
  className,
}): JSX.Element => {
  return (
    <section
      className={`bg-no-repeat bg-center bg-cover ${className}`}
      style={{ backgroundImage: `url(${src})` }}
    ></section>
  );
};

export default HeroImage;
