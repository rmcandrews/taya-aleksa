/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Footer.css";

import instagramIcon from "../../assets/icons/icon-ig.svg";

function Footer() {
  return (
    <div className="footer">
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a
        className="instagramIconLink"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/taya.aleksa.interiors/"
      >
        <img src={instagramIcon} height="60px" alt="Instagram" />
      </a>
      <div>© {new Date().getFullYear()} Taya Aleksa Interiors</div>
      <div>
        Icons by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://icons8.com"
          style={{ textDecoration: "underline" }}
        >
          Icons8
        </a>
      </div>
    </div>
  );
}

export default Footer;
