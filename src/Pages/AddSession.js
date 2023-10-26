import React from "react";

function AddSession() {
    return (
        <div className="row">
    <form className="col s12">
      <div className="row">

        <div className="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
          <label for="first_name">First Name</label>
        </div>

      </div> 
    </form>
  </div>
    );
}

export default AddSession;