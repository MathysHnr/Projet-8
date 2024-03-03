import React from "react";
import Carousel from "../Carousel";
import Collapsible from "../Collapsible";
import Rating from "../Rating";

function DataLogement({
  pictures,
  title,
  location,
  rating,
  tags,
  description,
  equipments,
  host,
}) {
  return (
    <div className="logement">
      <Carousel data={pictures} />

      <div className="logement_flex">
        <div className="logement_title">
          <h1>{title}</h1>
          <h2>{location}</h2>
          <div className="logement_tag_flex">
            {tags.map((tag, index) => (
              <li key={index} className="logement_li_flex">
                {tag}
              </li>
            ))}
          </div>
        </div>
        <div className="logement_host">
          <span className="logement_host_flex">
            <p align="right">{host.name}</p>
            <img
              className="logement_host_round"
              src={host.picture}
              alt={host.name}
            />
          </span>
          <Rating data={rating} />
        </div>
      </div>

      <div className="logement_desc">
        <div className="logement_desc_col margin">
          <Collapsible label="Description">
            <p className="desc_p">{description}</p>
          </Collapsible>
        </div>
        <div className="logement_desc_col">
          <Collapsible label="Équipements">
            <p className="desc_p">
              {equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </p>
          </Collapsible>
        </div>
      </div>
    </div>
  );
}

export default DataLogement;
