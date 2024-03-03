import React from "react";
import tableau from "../../datas/logements.json";
import DataLogement from "./DataLogement";
import { useParams } from "react-router-dom";
import Error from "../Error";

function Logement() {
  const { logementId } = useParams();
  const logement = tableau.find((logement) => {
    return logement.id === logementId;
  });
  if (!logement) {
    return <Error />;
  }

  return <DataLogement {...logement} />;
}

export default Logement;
