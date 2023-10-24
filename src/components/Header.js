import React from "react";

function Header() {

    const headerStyle = {
        background: '#3DD2CC',
        color: 'white',
        textAlign: 'center',
        fontSize: '1.8rem',
        padding: '0.8rem'
    }

    return (
        <header style={headerStyle}>
            Fairly App
        </header>
    );
}

export default Header;