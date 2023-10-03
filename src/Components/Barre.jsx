import "../CSS/Barre.css";
import icone from "../Icones/iconebarre.svg";
import React, { useState } from "react";

function Barre({ title, onClick }) {
  const [isRotated, setIsRotated] = useState(false);

  const handleIconClick = () => {
    setIsRotated(!isRotated);
    onClick && onClick();
  };

  return (
    <div className="barre-container">
      <div className="barre">
        <p>{title}</p>
        <img
          src={icone}
          alt="Icone barre"
          onClick={handleIconClick}
          className={isRotated ? "rotated" : ""}
        />
      </div>
    </div>
  );
}

export default Barre;
