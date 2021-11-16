import styled from "styled-components";

// Lib
import { Link } from 'react-router-dom'

export const ButtonType = styled.button`
    width: ${p => p.size};
    height: 46px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    background-color: #FFFFFF;
    border: none;
    cursor: pointer;
    color: #000;
    margin: ${p => p.margin};
    transition: 200ms ease-in-out;
    border-radius: 8px;
    &:hover {
        background-color: #3236FD;
        color: #FFF;
    }
    @media (max-width: 730px) {
        &:hover {
            background-color: #FFFFFF;
            color: #000;
        }
    }
`
export const LinkRouter = styled(Link)`
    display: block;
    text-decoration: none;
    color: inherit;
    height: 100%;
    display: grid;
    place-items: center;
`