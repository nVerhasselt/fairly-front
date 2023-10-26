import React from "react";
import NavFooter from "../components/NavFooter";
import Header from "../components/Header";
import * as Styled from "../globalStyles";



function Home() {

  const collectionStyle = {
    width: "100%",
    margin: "0",
    padding: "0",
  };

  const plusButtonStyle = {
    position: "fixed",
    bottom: "75px",
  };

  return (

    <body>
      <Styled.Main className="container-fluid">
        <Header />

        <div className="row" style={collectionStyle}>
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
        </div>

        <a
          className="btn-floating btn-large waves-effect waves-light cyan darken-2"
          style={plusButtonStyle}
        >
          <i className="material-icons">add</i>
        </a>

        
      </Styled.Main>

      <NavFooter />
    </body>

  );
}

export default Home;
