import "../CSS/Barre.css";
import icone from "../Icones/iconebarre.svg";
import React, { useState } from "react";
import DescriptionLogement from "../Components/DescriptionLogement";

function ExpandableBar({ title, content }) {
  const [isContentVisible, setContentVisible] = useState(false);

  const handleIconClick = () => {
    setContentVisible(!isContentVisible);
  };

  return (
    <div className="barre-container">
      <div className="barre">
        <p>{title}</p>
        <img
          src={icone}
          alt="Icone barre"
          className={isContentVisible ? "rotated" : ""}
          onClick={handleIconClick}
        />
      </div>
      <DescriptionLogement show={isContentVisible}>
        {content}
      </DescriptionLogement>
    </div>
  );
}

export default ExpandableBar;
