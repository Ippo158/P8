import "../CSS/Description.css";

function Description({ show, children }) {
  return (
    <div className={`description ${show ? "visible" : ""}`}>
      <p className="description__text">{children}</p>
    </div>
  );
}

export default Description;
