import "../CSS/Cadre.css";

function Cadre({ logement }) {
  return (
    <div className="cadre">
      <img src={logement.cover} alt={logement.title} />
      <h2>{logement.title}</h2>
    </div>
  );
}

export default Cadre;
