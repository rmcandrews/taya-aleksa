import React from "react";
import whiteLogo from "./Logo_White.svg";
// import blackLogo from "./Logo_Black.svg";
import "./LoadingIcon.css";

const LOGO_WIDTH = 65;
let logo = whiteLogo;

// DARK MODE
// const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
// if (isDarkMode) {
//   logo = blackLogo;
// } else {
//   logo = whiteLogo;
// }

function LoadingIcon() {
  return (
    <div
      style={{
        marginLeft: -LOGO_WIDTH / 2,
        marginTop: -((LOGO_WIDTH * 20.375) / 65)
      }}
    >
      <div class="assembly">
        <div class="tri"></div>
        <div class="tri"></div>
        <div class="tri"></div>
        <div class="tri"></div>
        <div class="tri"></div>
        <div class="tri"></div>
        <div class="tri"></div>
        <div class="tri"></div>
        <div class="tri"></div>
        <div class="tri"></div>
        <div class="tri"></div>
        <div class="tri"></div>
        <div class="tri"></div>
        <div class="tri"></div>
        <div class="tri"></div>
        <div class="tri"></div>
        <div class="tri"></div>
        <div class="tri"></div>
        <div class="hex"></div>
      </div>
      <img
        src={logo}
        alt="logo"
        width={`${LOGO_WIDTH}px`}
        style={{ zIndex: 1001, position: "relative" }}
      />
    </div>
  );
}

export default LoadingIcon;
