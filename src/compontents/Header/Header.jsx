import React, { useState } from "react";
import Headroom from "react-headroom";
import Sticky from "react-sticky-el"; // TODO: Replace with css sticky
import blackLogo from "../../assets/Logo_Black.svg";
import blackLogoText from "../../assets/Logo_BlackText.svg";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMenuFixed, setMenuFixed] = useState(true);

  const onHamburgerClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <React.Fragment>
      <Headroom
        className="mobileHeader"
        onPin={() => setMenuFixed(false)}
        onUnfix={() => setMenuFixed(true)}
      >
        <header className={`mobileNav ${isMenuFixed ? "" : "shadow"}`}>
          <button
            className={`hamburger hamburger--slider ${
              isMenuOpen ? "is-active" : ""
            }`}
            style={{ position: "absolute", top: 7.5, left: 0 }}
            onClick={onHamburgerClick}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <img
            src={blackLogo}
            alt="Taya Aleksa Interiors Logo"
            height={35}
            style={{ position: "relative", paddingTop: 17.5 }}
          />
        </header>
      </Headroom>
      <div className="desktopHeader">
        <div>
          <img
            src={blackLogo}
            alt="Taya Aleksa Interiors Logo"
            height={60}
            style={{ position: "block" }}
          />
        </div>
        <div>
          <img
            src={blackLogoText}
            alt="Taya Aleksa Interiors"
            height={25}
            style={{ position: "block", paddingTop: 20, paddingBottom: 10 }}
          />
        </div>
        <Sticky stickyClassName="sticky">
          <header className="nav" style={{ height: 33, padding: 10 }}>
            <ul style={{ margin: 0, padding: 0 }}>
              <Link to="/">
                <li>HOME</li>
              </Link>
              <Link to="/portfolio">
                <li>PORTFOLIO</li>
              </Link>
              <li>ABOUT</li>
              <li>CONTACT</li>
            </ul>
          </header>
        </Sticky>
      </div>
    </React.Fragment>
  );
}

export default Header;
