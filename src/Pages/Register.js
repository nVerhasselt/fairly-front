import React, { useState } from "react";
import * as Styled from "../globalStyles";
import { BiArrowBack, BiCheck } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import API_call from "../Helpers/Api_call";
import { toast, ToastContainer } from 'react-toastify';


function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const createUser = async () => {
    try {
      const response = await API_call().post('User/RegisterDev', {
        name: name,
        surname: surname,
        username: username,
        password: password,
        email: email,
      });

      const customer = response.data;
      if (!customer.error) {
        let userId = customer.user.id;
        localStorage.setItem('userId', userId);
        navigate('/Home');
      }
    } catch (e) {
      return { error: true, message: JSON.stringify(e) };
    }
  };

  return (
    <body>
      <Styled.Header>Register</Styled.Header>

      <Styled.Form className="row">
        <div className="input-field col s12 l8 offset-l2 xl6 offset-xl3">
          <input 
          placeholder="name" 
          id="name" type="text" 
          onChange={(e) => setName(e.target.value)} />

          <input 
          placeholder="surname" 
          id="surname" 
          type="text" 
          onChange={(e) => setSurname(e.target.value)}
          />

          <input 
          placeholder="username" 
          id="username" 
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          />

          <input 
          placeholder="password" 
          id="password" 
          type="text" 
          onChange={(e) => setPassword(e.target.value)}
          />

          <input 
          placeholder="email" 
          id="email" 
          type="email" 
          onChange={(e) => setEmail(e.target.value)}
          />

          <div className="card-action center">

            {/* Submit button */}
            <button type="submit" className="btn cyan" onClick={createUser}>
              Valider
            </button>
          </div>
        </div>
      </Styled.Form>

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

export default Register;
