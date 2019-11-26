import React from "react";
import { Fade } from "react-slideshow-image";

import "./Slideshow.css";
import image1 from "../../../assets/main.jpg";
import image2 from "../../../assets/main2.jpg";

const images = [image1, image2];

const properties = {
  duration: 10000,
  transitionDuration: 1000,
  infinite: true,
  arrows: false,
  indicators: false
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${images[0]})` }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${images[1]})` }} />
        </div>
      </Fade>
    </div>
  );
};

export default Slideshow;
