import "../CSS/Logement.css";
import Carrousel from "../Components/Carrousel";
import Barre from "../Components/BarreLogement";
import Tag from "../Components/Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import logementsData from "../Data/logements.json";
import { useParams } from "react-router-dom";
import Error from "../Pages/Error";

function Logement() {
  const { id } = useParams(); // obtenir l'ID depuis l'URL
  const logement = logementsData.find((log) => log.id === id); // trouver le logement correspondant

  if (!logement) {
    return <Error />;
  }

  return (
    <div className="body-logement">
      <div className="container-carrousel">
        <Carrousel images={logement.pictures} />
      </div>
      <div className="container-text">
        <div className="container-infos">
          <h1 className="name-logement">{logement.title}</h1>
          <h3 className="name-city">{logement.location}</h3>
        </div>
        <div className="container-proprio">
          <div className="host-name">
            <h3>{logement.host.name.split(" ")[0]}</h3> {/* Pour le prénom */}
            <h3>{logement.host.name.split(" ")[1]}</h3> {/* Pour le nom */}
          </div>
          <img src={logement.host.picture} alt="Avatar de l'hôte" />
        </div>
      </div>

      <div className="container-details">
        <div className="tag-container">
          {logement.tags.map((tag) => (
            <Tag key={tag} content={tag} />
          ))}
        </div>

        <div className="stars">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                color={index < Number(logement.rating) ? "#ff6060" : "#E3E3E3"}
              />
            ))}
        </div>
      </div>

      <div className="container-barres">
        <Barre title="Description" content={logement.description} />
        <Barre
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((equip, index) => (
                <li key={index}>{equip}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default Logement;
