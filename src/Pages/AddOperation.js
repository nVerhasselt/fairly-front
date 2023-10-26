import React from "react";
import * as Styled from "../globalStyles";
import { BiArrowBack, BiCheck } from "react-icons/bi";

function AddOperation() {
  return (
    <body>
      <div className="container-fluid">
        <Styled.Header>Nouvelle opération</Styled.Header>

        <Styled.Form className="row">
          <div className="input-field col s12">

            <select class="browser-default">
              <option value="" disabled selected>
                Type d'opération
              </option>
              <option value="1">Dépense</option>
              <option value="2">Revenu</option>
              
            </select>

            <input placeholder="Titre" id="operation_title" type="text" />

            <input
              placeholder="montant en euros"
              id="expense"
              type="number"
              className="validate"
            />

            <input
              placeholder="Date"
              id="date"
              type="date"
              className="validate"
            />

            <input
              placeholder="Payé par"
              id="user"
              type="text"
              className="validate"
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
                <li>
                  <a className="grey-text text-lighten-3 left" href="#!">
                    <BiArrowBack size={30} />
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3 right" href="#!">
                    <BiCheck size={30} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Styled.Footer>
    </body>
  );
}

export default AddOperation;
