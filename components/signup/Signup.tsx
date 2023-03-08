import React from "react";
import Link from "next/link";
import Image from "next/image";

// components
import SignupForm from "./SignupForm";
import SignupConfirm from "./SignupConfirm";

// images
import logo from "@/public/assets/logo.png";

const Signup = (): JSX.Element => {
  return (
    <section className="flex items-center min-h-screen">
      <div className="w-[34.4%] mb-[14px] h-[657px]">
        <div className="w-[80.7%] ml-[8.9%] ">
          <div className="mb-[61px]">
            <Link href="/" className="">
              <Image alt="image" src={logo} />
            </Link>
          </div>
          <SignupForm />
          {/* <SignupConfirm /> */}
        </div>
      </div>
      <div
        className="w-[65.6%] min-h-screen bg-center bg-cover"
        style={{ backgroundImage: `url("/assets/login.jpg")` }}
      ></div>
    </section>
  );
};

export default Signup;
