import Banniere from "../Components/Banniere";
import Barre from "../Components/Barre";
import "../CSS/About.css";
import aboutImageUrl from "../Images/banniereimg2.png";
import Description from "../Components/Description.jsx";
import React, { useState } from "react";

function A_propos() {
  const [showDescription, setShowDescription] = useState({
    Fiabilité: false,
    Respect: false,
    Service: false,
    Sécurité: false,
  });

  const toggleDescription = (title) => {
    setShowDescription((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  return (
    <div>
      <Banniere imageUrl={aboutImageUrl} />
      <div className="container">
        <Barre
          title="Fiabilité"
          onClick={() => toggleDescription("Fiabilité")}
        />
        <Description show={showDescription.Fiabilité}>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </Description>

        <Barre title="Respect" onClick={() => toggleDescription("Respect")} />
        <Description show={showDescription.Respect}>
          La bienveillance fait partie des valeurs fondatrice de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </Description>

        <Barre title="Service" onClick={() => toggleDescription("Service")} />
        <Description show={showDescription.Service}>
          La bienveillance fait partie des valeurs fondatrice de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </Description>

        <Barre title="Sécurité" onClick={() => toggleDescription("Sécurité")} />
        <Description show={showDescription.Sécurité}>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organiserons également des
          ateliers sur la sécurité domestique pour nos hôtes.
        </Description>
      </div>
    </div>
  );
}

export default A_propos;
