import React from "react";
import NavFooter from "../components/NavFooter";
import Header from "../components/Header";

function Home() {
  const basicStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  };

  const body = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  };

  const collectionStyle = {
    width:"100%",
  }

  const plusButtonStyle = {
    position: 'fixed',
    bottom: '75px'
  }

  return (
    <div className="container-fluid" style={basicStyle}>

      <Header />

      <body style={body}>

        <div className="row" style={collectionStyle}>
  
                <div className="collection">
                <a href="#!" className="collection-item">
                    Nom de la session<br />
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
                <a href="#!" className="collection-item">
                    Session 2
                </a>
                </div>
    
        </div>
    
   

        <a className="btn-floating btn-large waves-effect waves-light cyan darken-2" style={plusButtonStyle}>
          <i className="material-icons">add</i>
        </a>
        <NavFooter />
      </body>

      
    </div>
  );
}

export default Home;
