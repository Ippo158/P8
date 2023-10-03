import "../CSS/Logement.css";
import Carrousel from "../Components/Carrousel";
import Barre from "../Components/Barre";
import NomPhoto from "../Components/NomPhoto";

function Logement() {
  return (
    <div>
      <div className="container-carrousel">
        <Carrousel />
      </div>
      <div>
        <h1>Nom logement</h1>
        <h3>Localisation</h3>
      </div>
      <NomPhoto />
      <div>
        <Barre showImage={false} />
      </div>
      <div>
        <Barre />
        <Barre />
      </div>
    </div>
  );
}

export default Logement;
