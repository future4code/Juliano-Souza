import styled from "styled-components";

export const Container = styled.div`
    grid-area: Header;
    width: 100%;
    /* height: 60px; */
    border-bottom: 1.25px solid #464646;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
`
export const Logo = styled.img`
    height: 50px;
    cursor: pointer;
`
export const Login = styled.a`
    font-size: 14px;
    height: 60%;
    padding: 0 20px;
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