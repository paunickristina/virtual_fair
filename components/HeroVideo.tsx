import React, { FunctionComponent } from "react";

type IProps = {
  src: string;
  className: string;
};

const HeroVideo: FunctionComponent<IProps> = ({
  src,
  className,
}): JSX.Element => {
  return (
    <section className={`relative h-[530px] ${className}`}>
      <video
        src={src}
        className="absolute w-screen h-full object-cover top-0 left-0 object-center"
        loop
        muted
        autoPlay
        playsInline
      />
    </section>
  );
};

export default HeroVideo;
