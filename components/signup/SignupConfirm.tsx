import React, { FunctionComponent } from "react";

const SignupConfirm: FunctionComponent = (): JSX.Element => {
  return (
    <div className="pt-[152px]">
      <p className="text-[24px] leading-[29px] px-[26px] py-9 bordered">
        Молим Вас проверите ваше електронско поштанско сандуче или проверите
        спам
      </p>
      <div className="flex justify-end pt-[185px]">
        <button className="btn btn-red px-[60px]">Даље</button>
      </div>
    </div>
  );
};

export default SignupConfirm;
