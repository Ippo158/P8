// import React from "react";
import logo from "../Logo/LOGO.png";
import "../CSS/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo Kasa" />
      <ul>
        <li>
        <Link to="/">Accueil</Link>

        </li>
        <li>
        <Link to="/A_propos">A Propos</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
