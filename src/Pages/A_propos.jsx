import Banniere from "../Components/Banniere";
import Barre from "../Components/Barre";
import "../CSS/About.css";
import aboutImageUrl from "../Images/banniereimg2.png";
import Description from "../Components/Description.jsx";

import React, { useState } from "react";

function A_propos() {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div>
      <Banniere imageUrl={aboutImageUrl} />
      <div className="container">
        <Barre
          title="Fiabilité"
          onClick={() => setShowDescription(!showDescription)}
        />
        <Description show={showDescription} />

        <Barre title="Respect" />

        <Barre title="Service" />

        <Barre title="Sécurité" />
      </div>
    </div>
  );
}

export default A_propos;
