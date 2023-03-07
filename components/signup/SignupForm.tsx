import React, { FunctionComponent } from "react";

// remove this?
type IProps = {
  // className: string;
};

const SignupForm: FunctionComponent<IProps> = (): JSX.Element => {
  return (
    <form>
      <label>
        <span className="signup-span">Име</span>
        <input className="signup-input" type="text" required />
      </label>
      <label>
        <span className="signup-span">
          Презиме
        </span>
        <input className="signup-input" type="text" required />
      </label>
      <label>
        <span className="signup-span">Емаил</span>
        <input className="signup-input" type="text" required />
      </label>
      <label>
        <span className="signup-span">ЈМБГ</span>
        <input className="signup-input" type="text" required />
      </label>
      <label>
        <span className="signup-span">
          Лозинка
        </span>
        <input className="signup-input" type="password" required />
      </label>
      <label>
        <span className="signup-span">
          Потврди лозинку
        </span>
        <input className="signup-input" type="password" required />
      </label>
      <div className="flex justify-end pt-[15px]">
        <button className="btn btn-red px-10">Пријави се</button>
      </div>
    </form>
  );
};

export default SignupForm;
