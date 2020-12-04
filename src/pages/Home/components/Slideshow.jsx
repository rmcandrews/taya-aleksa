import React, { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";

import "./Slideshow.css";

const categoryNames = ["kitchen", "bedroom"];

const properties = {
  duration: 10000,
  transitionDuration: 1000,
  infinite: true,
  arrows: false,
  indicators: false
};

const Slideshow = () => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    let images = [];
    categoryNames.forEach(categoryName => {
      images.push(
        `${process.env.PUBLIC_URL}/assets/images/portfolio/${categoryName}/0_cover.jpg`
      );
    });

    setSlides(
      images.map((image, i) => (
        <div className="each-slide" key={i}>
          <div style={{ backgroundImage: `url(${image})` }} />
        </div>
      ))
    );
  }, []);
  return (
    <div className="slide-container">
      <Fade {...properties}>{slides}</Fade>
    </div>
  );
};

export default Slideshow;
