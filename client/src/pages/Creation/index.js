import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import CreateForm from "../../components/CreateForm";

function Creation() {
  return (
    <div>
      {/* <!-- Go Back to Home Page  --> */}
      <Link to="/">
        <a
          class="btn-floating btn-large waves-effect waves-light blue back-button"
          href
        >
          <i class="material-icons right">arrow_forward</i>
        </a>
      </Link>
      <CreateForm />

      {/* <!-- Fighter Form Creation --> */}
    </div>
  );
}

export default Creation;
