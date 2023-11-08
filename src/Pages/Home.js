import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as Styled from "../globalStyles";
import { PersonFill } from "react-bootstrap-icons";
import API_call from "../Helpers/Api_call";

function Home() {
  const [sessionList, setSessionList] = useState([]);

  console.log("SessionList", { sessionList });

  useEffect(() => {
    // METHODE 2 => 'ASYNC/AWAIT'
    const fetchDataAsync = async () => {
      // <= pas de async
      try {
        // dans une méthode asynchrone, l'appel au mot-clé 'await' permet de déclencher une fonction et d'attendre son résultat.
        const response = await API_call().get(
          "/Session/GetUserSessionsOverview?userID=4"
        );
        // on passe donc à la ligne du dessous quand le get est terminé, sauf s'il y a une erreur
        // En ce cas on est dans le catch.
        setSessionList(response.data);
      } catch (exception) {
        console.error(exception);
      }
    };

    // function call
    fetchDataAsync();
  }, []);

  // *************************************************************
  // SESSION ROW COMPONENT
  function SessionRow({ session, index }) {
    return (
      <>
        {/* Session Name */}
        <Link to="#!" className="collection-item">
          {session.sessionName}
        </Link>
      </>
    );
  }
  // *************************************************************

  // *************************************************************
  // SESSION LIST COMPONENT
  function SessionList() {
    return (
      <Styled.Collection className="row">
        <div className="collection">
          {sessionList?.map((session, index) => (
            <SessionRow
              key={`session-${index}`}
              session={session}
              index={index}
            />
          ))}
        </div>
      </Styled.Collection>
    );
  }
  // *************************************************************

  return (
    <body>
      <Styled.Header>Fairly App</Styled.Header>

      <Styled.Main className="container-fluid">
        {/* SESSION LIST COMPONENT CALL */}
        <SessionList />
        //TODO: Icone notifications invitation session, demande de remboursement
        d'amis, remboursement paiement reçu.
        <Styled.PlusButton className="btn-floating btn-large waves-effect waves-light cyan darken-2">
          <i className="material-icons">add</i>
        </Styled.PlusButton>
      </Styled.Main>

      <Styled.Footer className="page-footer cyan darken-2">
        <div className="container">
          <div className="row ">
            <div className="col l4 offset-l2 s12">
              <ul>
                <li>
                  <a className="grey-text text-lighten-3 right" href="#!">
                    <PersonFill size={30} />
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

export default Home;
