import React, { useState, useEffect } from "react";
import styled from "styled-components"
// import axios from "axios"

const Container = styled.div`
    padding-left: 30px;
    grid-area: Header;
    /* background-color: lightcoral; */
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
`
const Logo = styled.span`
    letter-spacing: -1px;
    font-size: 2em;
    font-weight: 700;
`

function Header() {
    return (
        <Container>
            <Logo>Labefy</Logo>
        </Container>
    )
}

export default Header