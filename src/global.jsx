import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {

        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Roboto",sans-serif;
        color: var(--white);
        font-weight: 200;
    }  
    body{
        overflow-x: hidden;
    }

`;

export default GlobalStyle;