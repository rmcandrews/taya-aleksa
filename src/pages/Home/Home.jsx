import React from "react";
import Slideshow from "./components/Slideshow";
import blackLogoText from "../../assets/Logo_BlackText.svg";
import "./Home.css";

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="logoTextContainer">
        <img
          src={blackLogoText}
          alt="Taya Aleksa Interiors"
          height={20}
          className="logoText"
        />
      </div>
      <Slideshow />
    </div>
  );
}

export default Home;
