import "../CSS/CarrouselLogement.css";
import leftcarrou from "../Icones/leftcarrou.svg";
import rightcarrou from "../Icones/rightcarrou.svg";

function Carrousel() {
  return (
    <div className="carrousel">
      <img src={leftcarrou} alt="Icone gauche carrousel" />
      <img src={rightcarrou} alt="Icone droite carrousel" />
    </div>
  );
}

export default Carrousel;
