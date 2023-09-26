import Banniere from "../Components/Banniere";
import "../CSS/Home.css";
import homeImageUrl from "../Images/banniereimg1.png";
import Cadre from "../Components/Cadre";

function Home() {
  return (
    <div>
      <Banniere imageUrl={homeImageUrl} text="Chez vous, partout et ailleurs" />
      {/* <p className="banniere__text">Chez vous, partout et ailleurs</p> */}
      <div className="container-cadre">
        <Cadre />
      </div>
    </div>
  );
}

export default Home;
