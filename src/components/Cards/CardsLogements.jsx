import tableau from "../../datas/logements.json";
import Card from "./Card";
import { Link } from "react-router-dom";

function CardsLogements() {
  return (
    <ul className="box_fiches">
      {tableau.map((data) => (
        <Link to={"/logement/" + data.id} key={data.id}>
          <Card cover={data.cover} title={data.title} logementId={data.id} />
        </Link>
      ))}
    </ul>
  );
}

export default CardsLogements;
