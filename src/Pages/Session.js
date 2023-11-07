import React from "react";
import * as Styled from "../globalStyles";
import { PersonFill } from "react-bootstrap-icons";
import { BiArrowBack, BiTransfer } from "react-icons/bi";
import { useEffect, useState } from "react";

function Session() {

  //TODO: Make the API connexion
  const [data, setData] = useState([]);

  useEffect(() => {
    // Define the API endpoint URL
    const baseUrl = 'https://localhost:7023/Session/GetUserSessionsOverview?userID=4';

    // Make a GET request to the API using Axios
    axios.get(baseUrl, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, PUT',
        'Access-Control-Allow-Headers': "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept",
        'Accept': 'application/json', // Specify the expected response format
      },
    })
    .then((response) =>
     {
        console.log("session", {response});
      setData(response.data);
    })
    .catch((error) => console.error('Error:', error));
  }, []);


  //TODO: Make different components
  return (
    <body>
      <Styled.Header>Session Name</Styled.Header>

      <Styled.Main className="container-fluid">

        <Styled.Collection className="row">
          <div className="collection">
            <a href="#!" className="collection-item">
              {   } 
            </a>

            <a href="#!" className="collection-item">
              Operation name
            </a>

            <a href="#!" className="collection-item">
              Transaction
            </a>
          </div>
        </Styled.Collection>

        <Styled.PlusButton className="btn-floating btn-large waves-effect waves-light cyan darken-2">
          <i className="material-icons">add</i>
        </Styled.PlusButton>
      </Styled.Main>

      <Styled.Footer className="page-footer cyan darken-2">
        <div className="container">
          <div className="row ">
            <div className="col l4 offset-l2 s12">

              <Styled.FooterNavList>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    <BiArrowBack size={30} />
                  </a>
                </li>


                <li>  
                  <a className="grey-text text-lighten-3" href="#!">
                    <BiTransfer size={30} />
                  </a>
                </li>

                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    <PersonFill size={30} />
                  </a>
                </li>
              </Styled.FooterNavList>

            </div>
          </div>
        </div>
      </Styled.Footer>
    </body>
  );
}

export default Session;
