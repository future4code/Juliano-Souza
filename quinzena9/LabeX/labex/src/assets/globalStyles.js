import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        background-color: #1C1C1C !important;
        font-family: 'Montserrat', sans-serif !important;
        color: #FFFFFF;
        ::-webkit-scrollbar-track {
            background-color: #272727;
        }
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: grey;
            border-radius: 25px;
        }
    }
`