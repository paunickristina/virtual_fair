import React from "react";

const Newsletter = () => {
  return (
    <section className="wrapper lg:wrapper bg-secondary-100 rounded-lg mb-5">
      <div className="l flex justify-between items-center pt-[58px] pb-14 pl-[34px] pr-10">
        <h2>ПРИЈАВА НА МЕЈЛИНГ ЛИСТУ</h2>
        <form action="" className="w-[48.7%]">
          <div className="newsletter-form">
            <input type="text" placeholder="Унеси емаил адресу"  className="newsletter-input"/>
            <button className="btn btn-red">Пријава</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
