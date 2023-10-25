import React from "react";

function Header() {

    const headerStyle = {
        background: '#0097a7',
        color: 'white',
        textAlign: 'center',
        fontSize: '2rem',
        padding: '0.8rem',
        fontFamily: 'Lobster, sans serif'
    }

    const headerTitleStyle = {
        fontFamily :'Lobster'
    }

    return (
        <header style={headerStyle}>
            Fairly App
        </header>
    );
}

export default Header;