import React from "react";
import Header from "../components/Header";
import NavFooter from "../components/NavFooter";

function AddSession() {

  return (
    <div className="container-fluid">
        <body>
      <Header /> 

      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">

              <input
                placeholder="Placeholder"
                id="first_name"
                type="text"
                className="validate"
              />

              <label for="first_name">First Name</label>
            </div>
          </div>
        </form>
      </div>

      <NavFooter />
      </body>
    </div>
  );
}

export default AddSession;
