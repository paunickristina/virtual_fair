import React, { FunctionComponent, useState } from "react";

// remove this?
type IProps = {
  // className: string;
};

const SignupForm: FunctionComponent<IProps> = (): JSX.Element => {
  const [jmbg, setJMBG] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkJMBG(jmbg);
  };

  const checkJMBG = (jmbg: string) => {
    let valid = "0";

    if (jmbg.length === 13 && !jmbg.includes("_")) {
      let A = parseInt(jmbg.substring(0, 1));
      let B = parseInt(jmbg.substring(1, 2));
      let C = parseInt(jmbg.substring(2, 3));
      let D = parseInt(jmbg.substring(3, 4));
      let E = parseInt(jmbg.substring(4, 5));
      let F = parseInt(jmbg.substring(5, 6));
      let G = parseInt(jmbg.substring(6, 7));
      let H = parseInt(jmbg.substring(7, 8));
      let I = parseInt(jmbg.substring(8, 9));
      let J = parseInt(jmbg.substring(9, 10));
      let K = parseInt(jmbg.substring(10, 11));
      let L = parseInt(jmbg.substring(11, 12));
      let M = parseInt(jmbg.substring(12, 13));
      let checksum =
        11 -
        ((7 * (A + G) +
          6 * (B + H) +
          5 * (C + I) +
          4 * (D + J) +
          3 * (E + K) +
          2 * (F + L)) %
          11);
      if (checksum === 11) checksum = 0;
      if (checksum === M) valid = "1";
    }
    console.log("valid", valid);
    return valid;
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span className="signup-span">Име</span>
        <input className="signup-input" type="text" />
      </label>
      <label>
        <span className="signup-span">Презиме</span>
        <input className="signup-input" type="text" />
      </label>
      <label>
        <span className="signup-span">Емаил</span>
        <input className="signup-input" type="text" />
      </label>
      <label>
        <span className="signup-span">ЈМБГ</span>
        <input
          className="signup-input"
          type="text"
          onChange={(e) => setJMBG(e.target.value)}
        />
      </label>
      <label>
        <span className="signup-span">Лозинка</span>
        <input className="signup-input" type="password" />
      </label>
      <label>
        <span className="signup-span">Потврди лозинку</span>
        <input className="signup-input" type="password" />
      </label>
      <div className="flex justify-end pt-[15px]">
        <button className="btn btn-red px-10">Пријави се</button>
      </div>
    </form>
  );
};

export default SignupForm;
