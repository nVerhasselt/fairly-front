import React from "react";
import NavFooter from "../components/NavFooter";
import * as Styled from "../globalStyles";

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

        <Styled.PlusButton className="btn-floating btn-large waves-effect waves-light cyan darken-2">
          <i className="material-icons">add</i>
        </Styled.PlusButton>

      </Styled.Main>

      <NavFooter />
    </body>
  );
}

export default Home;
