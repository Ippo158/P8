import React, { useState } from "react";
import "../CSS/CarrouselLogement.css";
import leftcarrou from "../Icones/leftcarrou.svg";
import rightcarrou from "../Icones/rightcarrou.svg";

function Carrousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carrousel">
      <img
        src={leftcarrou}
        alt="Icone gauche carrousel"
        onClick={handlePreviousImage}
      />
      <img
        src={images[currentImageIndex]}
        alt="Image carrousel"
        className="image-slide"
      />
      <img
        src={rightcarrou}
        alt="Icone droite carrousel"
        onClick={handleNextImage}
      />
    </div>
  );
}

export default Carrousel;
