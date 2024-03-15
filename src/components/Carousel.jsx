import React, { useState } from "react";
import ArrowLeft from "../assets/arrow-left.png";
import ArrowRight from "../assets/arrow-right.png";

function Carousel({ data }) {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  const showNavigate = data.length > 1;

  return (
    <div className="logement_banner">
      <img src={data[slide]} alt={data[slide]} className="logement_picture" />

      <img
        src={ArrowLeft}
        alt="Flêche gauche"
        className={data.length !== 1 ? "arrow_left" : "arrow_hidden"}
        onClick={prevSlide}
      />
      <img
        src={ArrowRight}
        alt="Flêche droite"
        className={data.length !== 1 ? "arrow_right" : "arrow_hidden"}
        onClick={nextSlide}
      />
      {showNavigate && (
        <span className="points">
          <span className="slide-number">
            {slide + 1}/{data.length}
          </span>
        </span>
      )}
    </div>
  );
}

export default Carousel;
