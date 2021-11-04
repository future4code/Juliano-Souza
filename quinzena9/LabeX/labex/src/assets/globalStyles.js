import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        background-color: #1C1C1C;
        font-family: 'Montserrat', sans-serif;
        color: #FFFFFF
    }
`