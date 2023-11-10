import React, { useState, useEffect } from "react";
import * as Styled from "../globalStyles";
import { PersonFill } from "react-bootstrap-icons";
import { BiArrowBack, BiTransfer } from "react-icons/bi";
import API_call from "../Helpers/Api_call";
import { useParams, useNavigate } from 'react-router-dom';

//TODO: find a way to get sessionId from url and userId (LocalStorage, see Pokedex)

function Session() {

  const { sessionId } = useParams();
  let navigate = useNavigate();

  //OTHER WAY TO GET URL ELEMENT
  // const urlParams = new URLSearchParams(window.location.search);
  // var session = window.location.pathname.split('/')[2];
  // const sessionId = session.split('=')[1];  
  // const myParam = urlParams.get('sessionId');

  const [transactionList, setTransactionList] = useState([]);

  useEffect(() => {
    
    const fetchDataAsync = async () => {
    const longSessionId = Number(sessionId);
    
      //TODO: Get userId according authentication when authentication feature will be done.
      try {
        const response = await API_call().get(
          `/Session/GetSessionFull?sessionID=${longSessionId}&userID=4`
        );
        setTransactionList(response.data);
      } catch (exception) {
        console.error(exception);
      }
    };
    // function call
    fetchDataAsync();
  }, []);

  console.log({transactionList});

  // *************************************************************
  // TRANSACTION ROW COMPONENT
  // *************************************************************
  function TransactionRow({ transaction, index }) {
    return (

      <>
        {/* Session Name */}
        <div className="collection-item">
          <Styled.MainRow>{transaction.title}</Styled.MainRow>
        </div>
      </>
    );
  }

  // *************************************************************


  // *************************************************************
  // TRANSACTION LIST COMPONENT
  // *************************************************************
  function TransactionList() {
    return (
      <Styled.Collection className="row">
        <div className="collection">
          {transactionList?.transactions?.map((transaction, index) => (
            <TransactionRow
              key={`transaction-${index}`}
              transaction={transaction}
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

      <Styled.Header>{transactionList.name}</Styled.Header>

      <Styled.Main className="container-fluid">

        {/* TRANSACTION LIST COMPONENT CALL */}
        <TransactionList />
        

        <Styled.PlusButton className="btn-floating btn-large waves-effect waves-light plusButton">
          <i className="material-icons">add</i>
        </Styled.PlusButton>
      </Styled.Main>

      <Styled.Footer className="page-footer footer">
        <div className="container">
          <div className="row ">
            <div className="col l4 offset-l2 s12">

              <Styled.FooterNavList>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    <BiArrowBack size={30} onClick={() => navigate(-1)}/>
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
