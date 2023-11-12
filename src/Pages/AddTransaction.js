import React from "react";
import * as Styled from "../globalStyles";
import { BiArrowBack, BiCheck } from "react-icons/bi";
import { useNavigate } from "react-router-dom";


function AddTransaction() {
let navigate = useNavigate();

  return (
    <body>
      <div className="container-fluid">
        <Styled.Header>Nouvelle transaction</Styled.Header>

        <Styled.Form className="row">
          <div className="input-field col s12 l8 offset-l2 xl6 offset-xl3">

            <input placeholder="Titre" id="transaction_title" type="text" />

            <select class="browser-default">
              <option value="" disabled selected>
                Type de transaction
              </option>
              <option value="1">Dépense</option>
              <option value="2">Revenu</option>
            </select>

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

          <div className="input-field col s12 l8 offset-l2 xl6 offset-xl3">
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

      <Styled.Footer className="page-footer footer">
        <div className="container">
          <div className="row ">
            <div className="col l4 offset-l2 s12">
              <ul>
                <li>
                  <a className="grey-text text-lighten-3 left" href="#!">
                    <BiArrowBack size={30} onClick={() => navigate(-1)} />
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

export default AddTransaction;
