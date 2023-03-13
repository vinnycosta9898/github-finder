import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    body{
        width: 100vw;
        height: 100vh;
        background-color: #00000050;
    }
`