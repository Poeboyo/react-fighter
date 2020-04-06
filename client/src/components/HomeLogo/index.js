import React from "react";
import "./styles.css";
import lightningLeft from "../../assets/images/animeLightning.gif";
import lightningRight from "../../assets/images/animeLightning.gif";
import ffLogo from "../../assets/images/ff.png";
import pulse from "../../assets/images/pulse.gif";
function HomeLogo() {
  return (
    <div id="homepage">
      <img
        src={lightningLeft}
        id="lightningLeft"
        alt="lightning bolt left"
      ></img>
      <img src={ffLogo} id="logo" alt="logo"></img>
      <img src={pulse} id="pulse" alt="energy pulse"></img>
      <img
        src={lightningRight}
        id="lightningRight"
        alt="lightning bolt right"
      ></img>
    </div>
  );
}

export default HomeLogo;
