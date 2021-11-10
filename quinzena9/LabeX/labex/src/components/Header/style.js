import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    grid-area: Header;
    width: 100%;
    height: 100%;
    border-bottom: 1.25px solid #464646;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8%;
`
export const Login = styled.div`
    font-size: 14px;
    height: 60%;
    display: flex;
    align-items: center;
    transition: 200ms ease-in-out;
    text-transform: uppercase;
    border: 1px solid #B5B5B5;
    margin-left: 25px;
    &:hover {
        cursor: pointer;
        color: #FFFFFF;
        border-color: #FFFFFF;
    }
`
export const LinkRouter = styled(Link)`
    text-decoration: none;
    color: #FFFFFF;
    height: 100%;
    padding: 0 20px;
    display: grid;
    place-items: center;
`