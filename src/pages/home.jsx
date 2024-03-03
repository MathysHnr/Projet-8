import Falaise from "../assets/falaise.png";
import CardsLogements from "../components/Cards/CardsLogements";

function Home() {
  return (
    <div className="container">
      <div className="img_banner_home">
        <img src={Falaise} alt="Falaise et océan" className="img_paysage" />
        <h1 className="txt_paysage">Chez vous, partout et ailleurs</h1>
      </div>
      <CardsLogements />
    </div>
  );
}

export default Home;
