import React from "react";
import { createGlobalStyle } from 'styled-components';
import styled from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100vh;
  }
`
// Styles

const Title = styled.h1`
    height: 10vh;
    text-align: center;
    font-size: 3.5em;
    color: #1D1E22;
    @media(max-width: 560px) {
      font-size: 3em;
    }
`

function Header() {
    return (
        <>
            <GlobalStyle/>
            <Title>Labenusers</Title>
        </>
    )
}

export default Header