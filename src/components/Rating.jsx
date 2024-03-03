import React from "react";
import FullStar from "../assets/star-fill.png";
import EmptyStar from "../assets/star-unfill.png";
import tableau from "../datas/logements.json";
import { useParams } from "react-router-dom";

function Rating() {
  const fullStar = Array(5).fill(<img src={FullStar} alt={FullStar} />);
  const emptyStar = Array(5).fill(<img src={EmptyStar} alt={EmptyStar} />);

  const { logementId } = useParams();
  const logement = tableau.find((logement) => {
    return logement.id === logementId;
  });

  return (
    <span className="rating">
      {fullStar.slice(5 - logement.rating).map((fullStar, index) => {
        return <span key={index}>{fullStar}</span>;
      })}
      {emptyStar.slice(logement.rating).map((emptyStar, index) => {
        return <span key={index}>{emptyStar}</span>;
      })}
    </span>
  );
}

export default Rating;
