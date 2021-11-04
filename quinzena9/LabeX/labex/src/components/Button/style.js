import styled from "styled-components";

export const ButtonType = styled.button`
    width: ${p => p.size};
    padding: 12.5px ;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    background-color: #FFFFFF;
    border: none;
    cursor: pointer;
    margin: ${p => p.margin};
    transition: 200ms ease-in-out;
    &:hover {
        background-color: transparent;
        color: #FFF;
        box-shadow: 0 0 0 0.5px white;
    }
`