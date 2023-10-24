import React from "react";
import {useParams} from "react-router-dom";
import NavFooter from "../components/NavFooter";
import Header from "../components/Header";

function Home() {

    const basicStyle = {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
    } 

    const body = {
        flex: '1',
        padding: '20px'
    }

    return (
      
          <div className="container-fluid" style={basicStyle}>
            <Header />
            <body style={body}>
                Home page
            </body>
            <NavFooter />
          </div>
        
    )
}

export default Home;