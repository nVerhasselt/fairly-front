import React from "react";
import { LiaBalanceScaleSolid } from 'react-icons/lia';

function Login() {

    const iconStyle = {
        fontSize: '60px',
        background: '#3DD2CC',
        borderRadius: '50px',
        color: 'white',
        padding: '0.5rem',
        marginTop: '4rem',
        marginBottom: '4rem'
          // Add any color you prefer
      };

    const buttonStyle = {
        borderRadius: '20px'
    };


    return (
    <>
    
    <form>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable">
            <div className="card-stacked">

              <div className="card-content">

                <div className="center">
                    <LiaBalanceScaleSolid style={iconStyle}/>
                </div>

                {/* Email field */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="text" name="email" className="form-control"></input>  
                </div>

                {/* Password field */}
                <div className="form-group">
                  <label htmlFor="password">Mot de passe</label>
                  <input id="password" type="password" name="password" className="form-control"></input>
                </div>

              </div>

              <div className="card-action center">

                {/* Submit button */}
                <button type="submit" className="btn cyan darken-2" style={buttonStyle}>Valider</button>
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