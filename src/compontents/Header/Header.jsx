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
    if (isMenuOpen) {
      document.body.style.position = "";
    } else {
      document.body.style.position = "fixed";
    }
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    document.body.style.position = "";
    setMenuOpen(false);
  };

  return (
    <div>
      <Headroom
        className="mobileHeader"
        onPin={() => setMenuFixed(false)}
        onUnfix={() => setMenuFixed(true)}
      >
        <header
          className={`mobileHeader ${
            isMenuFixed ? "" : isMenuOpen ? "" : "shadow"
          }`}
        >
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
          <div
            className={`mobileNav${isMenuOpen ? " openNav" : ""}`}
            style={{ textAlign: "center" }}
          >
            <ul style={{ margin: 0, padding: 20, listStyleType: "none" }}>
              <Link
                to="/"
                onClick={closeMenu}
                style={{ marginTop: "20px", display: "inline-block" }}
              >
                <li>HOME</li>
              </Link>
              <Link to="/portfolio" onClick={closeMenu}>
                <li>PORTFOLIO</li>
              </Link>
              <Link to="/about" onClick={closeMenu}>
                <li>ABOUT</li>
              </Link>
              <Link to="/contact" onClick={closeMenu}>
                <li>CONTACT</li>
              </Link>
            </ul>
          </div>
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
            style={{ paddingTop: 20, paddingBottom: 10 }}
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
              <Link to="/about">
                <li>ABOUT</li>
              </Link>
              <Link to="/contact">
                <li>CONTACT</li>
              </Link>
            </ul>
          </header>
        </Sticky>
      </div>
    </div>
  );
}

export default Header;
