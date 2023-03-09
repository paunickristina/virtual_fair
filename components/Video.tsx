import React, { useRef, useState } from "react";
import Image from "next/image";

// images
import play from "../public/assets/svgs/play.svg";
import pause from "../public/assets/svgs/pause.svg";

const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState<boolean>(false);

  const handleVideo = (control: string) => {
    if (videoRef.current !== null) {
      if (control === "play") {
        videoRef.current.play();
        setPlaying(true);
      } else if (control === "pause") {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
  };

  return (
    <section className="wrapper lg:wrapper">
      <div className="l">
        <h2 className="mb-3">РЕЧ ДИРЕКТОРА</h2>
        <div className="relative h-[560px] rounded-lg overflow-hidden group">
          <video
            ref={videoRef}
            src="https://embed-ssl.wistia.com/deliveries/262fd8e350169efeecfd5bfce33b7997f5a8fec0.bin"
            poster="/assets/hp-video.jpg"
            className="w-full h-full video-poster"
          />
          <div className="absolute-center cursor-pointer">
            {playing ? (
              <Image
                onClick={() => handleVideo("pause")}
                alt=""
                src={play}
                className="invisible group-hover:visible"
              />
            ) : (
              <Image onClick={() => handleVideo("play")} alt="" src={pause} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
