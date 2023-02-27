import React from "react";

// components
import LogosPartners from "./LogosPartners";
import FooterNav from "./FooterNav";
import Copyright from "./Copyright";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer>
      <LogosPartners />
      <Newsletter />
      <FooterNav />
      <Copyright />
    </footer>
  );
};

export default Footer;
