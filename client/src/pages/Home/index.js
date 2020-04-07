import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import HomeLogo from "../../components/HomeLogo";

function Home() {
  return (
    <div>
      <HomeLogo></HomeLogo>
      <Link
        to="/creation"
        className="waves-effect waves-light btn-large create-new light-blue darken-4"
        id="redirect-create"
      >
        <i className="material-icons right">add face</i>Add A Character{" "}
      </Link>
      <Link
        id="redirect-selection"
        to="/characterselection"
        className="waves-effect waves-light btn-large battle-button-home red"
      >
        <i className="material-icons">directions_run flash_on</i>VERSUS BATTLE!
      </Link>
    </div>
  );
}

export default Home;
