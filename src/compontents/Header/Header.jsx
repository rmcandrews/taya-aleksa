import React, { useState } from "react";
import Headroom from "react-headroom";
import Sticky from "react-sticky-el"; // TODO: Replace with css sticky
import blackLogo from "../../assets/Logo_Black.svg";
import blackLogoText from "../../assets/Logo_BlackText.svg";
import "./Header.css";
import { NavLink } from "react-router-dom";

const desktopActiveLinkStyle = {
  fontWeight: 500
};

const mobileActiveLinkStyle = {
  opacity: 0.5
};

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMenuFixed, setMenuFixed] = useState(true);

  const closeMenu = () => {
    document.body.style.position = "";
    setMenuOpen(false);
  };

  const onHamburgerClick = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      document.body.style.position = "fixed";
      setMenuOpen(true);
    }
  };

  const MobileLink = ({ exact, children, to }) => {
    return (
      <NavLink
        exact={exact}
        to={to}
        onClick={closeMenu}
        className="mobileNavLink"
        activeStyle={mobileActiveLinkStyle}
      >
        <li>{children}</li>
      </NavLink>
    );
  };

  const DesktopLink = ({ exact, children, to }) => {
    return (
      <NavLink exact={exact} to={to} activeStyle={desktopActiveLinkStyle}>
        <li>{children}</li>
      </NavLink>
    );
  };

  return (
    <div>
      <Headroom
        className="mobileHeader"
        onPin={() => setMenuFixed(false)}
        onUnfix={() => setMenuFixed(true)}
      >
        <header
          className={`mobileHeader ${!isMenuFixed && !isMenuOpen && "shadow"}`}
        >
          <button
            className={`hamburger hamburger--slider ${isMenuOpen &&
              "is-active"}`}
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
          <nav className={`mobileNav${isMenuOpen ? " openNav" : ""}`}>
            <ul>
              <MobileLink exact to="/">
                HOME
              </MobileLink>
              <MobileLink to="/portfolio">PORTFOLIO</MobileLink>
              <MobileLink to="/about">ABOUT</MobileLink>
              <MobileLink to="/contact">CONTACT</MobileLink>
            </ul>
          </nav>
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
          <header className="desktopNav">
            <nav>
              <ul>
                <DesktopLink exact to="/">
                  HOME
                </DesktopLink>
                <DesktopLink to="/portfolio">PORTFOLIO</DesktopLink>
                <DesktopLink to="/about">ABOUT</DesktopLink>
                <DesktopLink to="/contact">CONTACT</DesktopLink>
              </ul>
            </nav>
          </header>
        </Sticky>
      </div>
    </div>
  );
}

export default Header;
