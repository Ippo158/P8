import Banniere from "../Components/Banniere";
import "../CSS/Home.css";
import homeImageUrl from "../Images/banniereimg1.png";
import Cadre from "../Components/Cadre";
import logementsData from "../Data/logements.json";
import { Link } from "react-router-dom";
import logements from "../Data/logements.json";

function Home() {
  return (
    <div>
      <Banniere imageUrl={homeImageUrl} text="Chez vous, partout et ailleurs" />

      <div className="container-cadre">
        {logements.map((logement) => (
          <Link key={logement.id} to={`/Logement/${logement.id}`}>
            <Cadre logement={logement} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
