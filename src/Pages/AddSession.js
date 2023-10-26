import React from "react";
import NavFooter from "../components/NavFooter";
import * as Styled from "../globalStyles";

function AddSession() {
    return (
      <body>
        <div className="container-fluid">
        <Styled.Header>Nouvelle session</Styled.Header>
    
          <Styled.Form className="row">
            <div className="input-field col s12">
              <input
                placeholder="Titre"
                id="first_name"
                type="text"
                className="validate"
              />
            </div>
          </Styled.Form>
        
  
        
        </div>
        <NavFooter />
      </body>
    );
  }
export default AddSession;
