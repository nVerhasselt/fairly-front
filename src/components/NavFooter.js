import React from "react";
import { PersonFill } from 'react-bootstrap-icons';
import * as Styled from '../globalStyles';

function NavFooter() {

    return (

      <Styled.Footer className="page-footer cyan darken-2"> 
          <div className="container">
            <div className="row ">

              <div className="col l4 offset-l2 s12">
                <ul>
                  <li><a className="grey-text text-lighten-3 right" href="#!"><PersonFill size={30}/></a></li>
                </ul>
              </div>
              
            </div>
          </div>
        

          {/* COPYRIGHT BOTTOM FOOTER */}
          {/* 
          <div className="footer-copyright">
            <div className="container">
            © 2023 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div> 
          */}

        
      </Styled.Footer>
    );
}

export default NavFooter;