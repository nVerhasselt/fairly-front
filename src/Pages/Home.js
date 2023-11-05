import React from "react";
import * as Styled from "../globalStyles";
import { PersonFill } from 'react-bootstrap-icons';

function Home() {
  return (
    <body>
      <Styled.Header>Fairly App</Styled.Header>

      <Styled.Main className="container-fluid">
        //TODO: Make a Session component which maps the back-end object
        <Styled.Collection className="row">
          <div className="collection">
            <a href="#!" className="collection-item">
              Nom de la session
              <br />
              Nom
            </a>

            <a href="#!" className="collection-item">
              Session Name
            </a>

            <a href="#!" className="collection-item">
              Session 1
            </a>

            <a href="#!" className="collection-item">
              Session 2
            </a>

            <a href="#!" className="collection-item">
              Nom de la session
            </a>

            <a href="#!" className="collection-item">
              Session Name
            </a>

            <a href="#!" className="collection-item">
              Session 1
            </a>
          </div>
        </Styled.Collection>

        //TODO: Icone notifications invitation session, demande de remboursement d'amis, remboursement paiement reçu.

        <Styled.PlusButton className="btn-floating btn-large waves-effect waves-light cyan darken-2">
          <i className="material-icons">add</i>
        </Styled.PlusButton>

      </Styled.Main>

      <Styled.Footer className="page-footer cyan darken-2"> 
          <div className="container">
            <div className="row ">

              <div className="col l4 offset-l2 s12">
                <ul>
                  <li><a className="grey-text text-lighten-3 right" href="#!"><PersonFill size={30}/></a></li>
                </ul>
              </div>
              
            </div>
          </div>
      </Styled.Footer>

    </body>
  );
}

export default Home;
