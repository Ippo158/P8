import "../CSS/Description.css";

function Description({ show }) {
  return (
    <div className={`description ${show ? "visible" : ""}`}>
      <p className="description__text">
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les
        photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes.
      </p>
    </div>
  );
}

export default Description;
