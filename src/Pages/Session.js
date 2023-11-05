import React, {useState, useEffect} from "react";
import * as Styled from "../globalStyles";
import { PersonFill } from "react-bootstrap-icons";
import { BiArrowBack, BiTransfer } from "react-icons/bi";

function Session() {

  const [date, setData] = useState(null);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'http://localhost:5162/swagger'; // Replace with your API endpoint URL

    // Make a GET request to the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error('Error:', error));
  }, []);

  
  return (
    <body>
      <Styled.Header>Session Name</Styled.Header>
      <Styled.Main className="container-fluid">
        <Styled.Collection className="row">
          <div className="collection">
            <a href="#!" className="collection-item">
              Operation
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
