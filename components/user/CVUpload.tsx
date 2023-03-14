import React, { FunctionComponent } from "react";
import Image from "next/image";

// images
import upload from "@/public/assets/svgs/upload.svg";

const CVUpload: FunctionComponent = (): JSX.Element => {
  return (
    <div className="text-center pt-[115px] pb-[235px]">
      <form action="">
        <label className="btn btn-white bordered w-[288px] pl-[29px] pr-0 text-left cursor-pointer">
          <input type="file" accept="application/pdf" className="hidden" />
          <Image alt="" src={upload} className="inline-block mr-2" />
          <span>Приложи постојећи CV</span>
        </label>
      </form>
    </div>
  );
};

export default CVUpload;
