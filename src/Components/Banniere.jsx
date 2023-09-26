import "../CSS/Banniere.css";

function Banniere({ imageUrl, text }) {
  return (
    <div className="banniere">
      <img src={imageUrl} alt={text || "Bannière"} className="banniere__home" />
      {text && <p className="banniere__text">{text}</p>}
    </div>
  );
}

export default Banniere;
