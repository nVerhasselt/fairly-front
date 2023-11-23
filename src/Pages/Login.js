import React, { useState, useEffect } from "react";
import { LiaBalanceScaleSolid } from 'react-icons/lia';
import { Link, useNavigate } from 'react-router-dom';
import API_call from "../Helpers/Api_call";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //TODO: continue this:

    //Appel API endpoint : /User/Login
    //Payload => "username": "string", "password":"string"
    //Respponse => Token

    const getToken = async () => {
      localStorage.clear(); 
      const customer = await API_call()
          .post('/User/Login',{
              username: username,
              password: password
          })
          .then((res) => res.data) 
          .catch((e) => {
              return { error: true, message: JSON.stringify(e) }
          })
      if (!customer.error) {
          let token = customer.token
          localStorage.setItem('token', token);
          return token
      }
  }

  const onClickButton = async (event) => {
    if (event) {
      event.preventDefault();
      let token = await getToken();
  
      setTimeout(async () => {
        if (token !== undefined) {
          navigate(`/Home`);
        } else {
          toast.error("Nom d'utilisateur et/ou mot de passe erroné");
        }
      }, 0);
    }
  };


    return (  
    <>
    <ToastContainer/>
      <form>
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <div className="card hoverable">
              <div className="card-stacked"> 
                

                <div className="card-content">

                  <div className="center">
                      <LiaBalanceScaleSolid className="iconStyle" />
                  </div>

                  {/* Email field */}
                  <div className="form-group">
                    <label htmlFor="username">Nom d'utilisateur</label>
                    <input id="username" 
                    type="text" 
                    name="username" 
                    className="form-control"
                    onChange={(e) => setUsername(e.target.value)}></input>  
                  </div>

                  {/* Password field */}
                  <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input id="password" 
                    type="password" 
                    name="password" 
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}></input>
                  </div>

                  <div>
                    <p>Vous n'avez pas de compte?</p>
                    <Link to='/Register'>Créer un compte</Link>
                  </div>

                </div>

                <div className="card-action center">

                  {/* Submit button */}
                  <button type="submit" className="btn cyan" onClick={onClickButton}>Valider</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </form>
    </>
    );
}

export default Login;