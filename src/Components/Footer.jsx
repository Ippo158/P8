// import React from "react";
import "../CSS/Footer.css";
import logofooter from "../Logo/logofooter.png";

function Footer() {
  return (
    <div className="footer">
      <img src={logofooter} alt="Logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
