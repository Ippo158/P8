import "../CSS/DescriptionLogement.css";

function DescriptionLogement({ show, children }) {
  return (
    <div className={`descriptionLogement ${show ? "visible" : ""}`}>
      <p className="descriptionLogement__text">{children}</p>
    </div>
  );
}

export default DescriptionLogement;
