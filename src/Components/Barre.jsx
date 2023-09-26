import "../CSS/Barre.css";
import icone from "../Icones/iconebarre.svg";

function Barre({ title, onClick }) {
  return (
    <div className="barre-container">
      <div className="barre">
        <p>{title}</p>
        <img src={icone} alt="Icone barre" onClick={onClick} />
      </div>
    </div>
  );
}

export default Barre;
