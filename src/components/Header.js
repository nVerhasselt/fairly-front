import React from "react";

function Header() {

    const headerStyle = {
        position: 'sticky',
        top: '0px',
        background: '#0097a7',
        color: 'white',
        textAlign: 'center',
        fontSize: '2rem',
        padding: '0.8rem',
        fontFamily: 'Lobster, sans serif',
        zIndex: '1'
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