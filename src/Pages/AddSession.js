import React from "react";
import * as Styled from "../globalStyles";
import '../App.css';
import { BiArrowBack, BiCheck } from "react-icons/bi";

function AddSession() {
    return (

      <body>

        <div className="container-fluid">

          <Styled.Header>Nouvelle session</Styled.Header>
    
          <Styled.Form className="row">
            <div className="input-field col s12">

              <input
                placeholder="Titre"
                id="session_title"
                type="text"   
              />

              <input
                placeholder="Description"
                id="session_description"
                type="text"   
              />

            </div>

            <div className="input-field col s12">
                <Styled.TitleH1>Participants</Styled.TitleH1>

                <input
                    placeholder="Nom"
                    id="user_name"
                    type="text"
                    className="validate"
                />

            </div>
          </Styled.Form>
        
        </div>

        <Styled.Footer className="page-footer cyan darken-2"> 
          <div className="container">
            <div className="row ">

              <div className="col l4 offset-l2 s12">
                <ul>
                  <li><a className="grey-text text-lighten-3 left" href="#!"><BiArrowBack size={30}/></a></li>
                  <li><a className="grey-text text-lighten-3 right" href="#!"><BiCheck size={30}/></a></li>
                </ul>
              </div>
              
            </div>
          </div>
        </Styled.Footer>

      </body>
    );
  }

export default AddSession;
