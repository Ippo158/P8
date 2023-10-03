import Banniere from "../Components/Banniere";
import "../CSS/Home.css";
import homeImageUrl from "../Images/banniereimg1.png";
import Cadre from "../Components/Cadre";
import logementsData from "../Data/logements.json";

function Home() {
  return (
    <div>
      <Banniere imageUrl={homeImageUrl} text="Chez vous, partout et ailleurs" />
      <div className="container-cadre">
        {logementsData.map((logement) => (
          <Cadre key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  );
}

export default Home;
