import React from "react";
import * as Styled from "../globalStyles";
import { BiArrowBack, BiCheck } from "react-icons/bi";
import { useParams, useNavigate } from "react-router-dom";

// -Nom d'utilisateur
// -Adresse mail associée
// -Numéro de téléphone
// -Notifications

// -Enrigistrer une opération:
//-Titre
//-Type
//-Montant
//-Date
//Ne pas répéter (cliquable) au clique -> Répéter checkbox déroulant
//Tous les jours
//Chaque semaine
//Chaque mois
//Chaque année

// -Liste des opérations enregistrées

function Settings() {
  let navigate = useNavigate();

  return (
    <body>
      <div className="container-fluid">
        <Styled.Header>Settings</Styled.Header>

        <Styled.Form className="row">
          <div className="input-field col s12 l8 offset-l2 xl6 offset-xl3">
            {/* SWITCH */}

            <div class="switch">
              <Styled.Notifictions> Notifications </Styled.Notifictions>
              <label>
                Off
                <input type="checkbox" />
                <span class="lever"></span>
                On
              </label>
            </div>

            <select class="browser-default">
              <option value="" disabled selected>
                Type d'opération
              </option>
              <option value="1">Dépense</option>
              <option value="2">Revenu</option>
            </select>

            <input placeholder="Titre" id="operation_title" type="text" />

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
            <Styled.TitleH1>Opérations régulières</Styled.TitleH1>

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
            <div>
              <Styled.FooterNavList>
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
              </Styled.FooterNavList>
            </div>
          </div>
        </div>
      </Styled.Footer>
    </body>
  );
}

export default Settings;
