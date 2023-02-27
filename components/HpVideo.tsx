import React from "react";

const HpVideo = () => {
  return (
    <section className="wrapper lg:wrapper">
      <div className="l">
        <h2 className="mb-3">РЕЧ ДИРЕКТОРА</h2>
        <div className="bg-red-300 rounded-lg overflow-hidden">
          <video controls poster="/assets/hpVideo.jpg" className="w-full">
            {/* <source src="/assets/hpVideo.mp4"  type="video/mp4" /> */}
          </video>
        </div>
      </div>
    </section>
  );
};

export default HpVideo;
