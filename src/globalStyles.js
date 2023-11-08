import styled from "styled-components";

export const Main = styled.main `
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`;

export const Header = styled.header`
    position: sticky;
    top: 0px;
    background:#00bcd4;
    color: white;
    text-align: center;
    font-size: 2rem;
    padding: 10px;
    font-family: 'Lobster Two', sans-serif;
    z-index: 1;
    width: 100%;
`;

export const Footer = styled.footer`
    padding: 0;
    margin: 0;
    position: sticky;
    bottom: 0px;
    width: 100%;
    height:4rem;
    background-colour: #00bcd4;
`;

export const PlusButton = styled.a`
    position: fixed;
    bottom: 75px;
    background-color: #00bcd4;
`;

export const Collection = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
`;

//TODO: Find out why this doesn't work, I'd like to use it as the doc says ( https://styled-components.com/docs/basics )

// export const OperationCollection = styled(Collection)`
//     text-align: center;
// `;

export const Input = styled.input`
   margin-bottom: 4rem;
`;

export const Form = styled.form`
    min-height: 100vh;
`;

export const TitleH1 = styled.h1`
    font-size: 1rem;
`;

export const FooterNavList = styled.ul`
    display: flex;
    justify-content: space-between;
`;

export const Notifictions = styled.label`
    font-size: 1rem;
    padding-right: 4rem;
`;

export const MainRow = styled.div`
    color: #002F36;
    font-size: 1rem;
    font-weight: 550;
`

export const SecondaryRow = styled.div`
    color: #007787;
`
