import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import * as Styled from "../globalStyles";
import { PersonFill } from "react-bootstrap-icons";
import API_call from "../Helpers/Api_call";


function Home() {
  const [sessionList, setSessionList] = useState([]);
  let navigate = useNavigate();

  const goToSettings = () => {
    navigate(`/Settings`);
  }

  const goToAddSession = () => {
    navigate(`/AddSession`);
  }

  useEffect(() => {
    // METHODE 2 => 'ASYNC/AWAIT'
    const fetchDataAsync = async () => {
      // <= pas de async
      try {
        // dans une méthode asynchrone, l'appel au mot-clé 'await' permet de déclencher une fonction et d'attendre son résultat.
        const response = await API_call().get(
          `/Session/GetUserSessionsOverview?userID=${localStorage.getItem('userId')}`
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

  function SessionRow({ session, index }) {

    //map the session users and join them with coma to display them inline after session name
    const userNames = session.members.map((member) => member.userName).join(', '); 

    const goToSession = () => {
      navigate(`/Session/${session.sessionId}`);
      // navigate=({pathname: '/Session', search: '?sessionId=${session.sessionId}'});
    }

    return (

      <>
        {/* Session Name */}
        <div onClick={() => goToSession()} className="collection-item">
          <Styled.MainRow>{session.sessionName}</Styled.MainRow>
          <div>{userNames}</div>
        </div>
      </>
    );
  }

  function SessionList() {
    return (
      <Styled.Collection className="row">
        <div className="collection col s12 l8 offset-l2 xl6 offset-xl3">
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

  return (
    <body>
      <Styled.Header>Fairly App</Styled.Header>

      <Styled.Main className="container-fluid">

        {/* SESSION LIST COMPONENT CALL */}
        <SessionList />


        //TODO: Icone notifications invitation session, demande de remboursement
        d'amis, remboursement paiement reçu.


        <Styled.PlusButton className="btn-floating btn-large waves-effect waves-light plusButton" 
          onClick={() => goToAddSession()}>
          <i className="material-icons">add</i>
        </Styled.PlusButton>
        
      </Styled.Main>

      <Styled.Footer className="page-footer footer">
        <div className="container">
          <div className="row ">
            <div className="col l4 offset-l2 s12 footerContent">
              <ul>
                <li>
                  <a className="grey-text text-lighten-3 right" href="#!">
                    <PersonFill size={30} onClick={() => goToSettings()}/>
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
