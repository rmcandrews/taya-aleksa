import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Sticky from "react-sticky-el"; // TODO: Replace with css sticky
import categories from "../categories";
import "./PortfolioCategory.css";

const desktopActiveLinkStyle = {
  fontWeight: 500,
  color: "#000"
};

const DesktopLink = ({ exact, children, to }) => {
  return (
    <NavLink
      exact={exact}
      to={to}
      style={{ color: "#595959", fontSize: 14 }}
      activeStyle={desktopActiveLinkStyle}
      onClick={() => {
        if (window.scrollY > 185 && window.innerWidth > 767)
          window.scrollTo(0, 185);
        if (window.innerWidth <= 767) window.scrollTo(0, 0);
      }}
    >
      <li>{children}</li>
    </NavLink>
  );
};

const PortfolioHeader = () => {
  return (
    <div className="sub-header">
      <Sticky stickyClassName="sub-header-sticky" topOffset={-53}>
        <header
          className="desktopNav"
          style={{ padding: 0, paddingBottom: 10 }}
        >
          <nav>
            <ul>
              <DesktopLink to="/portfolio/living">LIVING</DesktopLink>
              <DesktopLink to="/portfolio/bedroom">BEDROOM</DesktopLink>
              <DesktopLink to="/portfolio/kitchen">KITCHEN</DesktopLink>
              <DesktopLink to="/portfolio/bath">BATH</DesktopLink>
              <DesktopLink to="/portfolio/outdoor">OUTDOOR</DesktopLink>
              <DesktopLink to="/portfolio/other">OTHER</DesktopLink>
            </ul>
          </nav>
        </header>
      </Sticky>
    </div>
  );
};

const PortfolioCategory = ({ match }) => {
  useEffect(() => {
    if (window.scrollY > 185 && window.innerWidth > 767)
      window.scrollTo(0, 185);
    if (window.innerWidth <= 767) window.scrollTo(0, 0);
  }, []);
  const categoryPath = match.path.split("/")[2];
  const category = categories.find(category => category.path === categoryPath);
  return (
    <div style={{ height: 2000 }}>
      <PortfolioHeader />
      <div>{category.title}</div>
    </div>
  );
};

export default PortfolioCategory;
