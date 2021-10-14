import React from "react";
import styled from "styled-components"

const Button = styled.button`
    width: 60%;
    height: 40px;
    padding: .6em 0;
    font-family: 'Montserrat', sans-serif;
    outline: none;
    border: none;
    border-radius: 0 0 6px 6px;
    margin-bottom: 6px;
    color: #1D1E22;
    font-weight: 500;
    cursor: pointer;
    transition: 200ms linear;
    &:hover {
        opacity: 0.9;
    }
`

function CheckRegisterUsersButton({handleScreen}) {
    return (
        <Button
            onClick={handleScreen}
        >
        Usuários Registrados
        </Button>
    )
}

export default CheckRegisterUsersButton