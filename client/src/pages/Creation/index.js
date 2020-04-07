import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import CreateForm from "../../components/CreateForm";

function Creation() {
  return (
    <div id="create">
      {/* <!-- Go Back to Home Page  --> */}
      <Link
        to="/"
        className="btn-floating btn-large waves-effect waves-light blue back-button"
      >
        <i className="material-icons right">arrow_forward</i>
      </Link>
      <CreateForm />

      {/* <!-- Fighter Form Creation --> */}
    </div>
  );
}

export default Creation;
