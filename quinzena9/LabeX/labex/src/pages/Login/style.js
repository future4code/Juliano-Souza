import styled from "styled-components";

// Assets
import Blob from '../../assets/Images/blob-grey.svg'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid: 8vh 87vh 5vh / 1fr;
    grid-template-areas:
        'Header' 
        'Section'
        'Footer'
    ;
`
export const Section = styled.div`
    grid-area: Section;
    display: grid;
    place-items: center;
    background-image: url(${Blob});
    background-position: center;
    background-size: 75%;
`
export const AuthWrapper = styled.div`
    width: 400px;
    height: 70vh;
    border: 1.25px solid #464646;
    padding: 20px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    background-color: #272727;
    border-radius: 12px;
`
export const SignInText = styled.h3`
    font-size: 35px;
`
export const WelcomeBackText = styled.p`
    font-size: 16px;
    color: #a0a0a0;
`
export const InputBox = styled.div`
    margin: 20px 0;
    width: 100%;
    height: 120px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
`
export const Input = styled.input`
    width: 100%;
    padding: 0 10px;
    height: 46px;
    margin-bottom: 5px;
    border: none;
    font-family: 'Montserrat', sans-serif;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    border-radius: 8px;
    background-color: #2c2c2c;
    color: #FFFFFF;
    &:focus {
        border: 1.25px solid #464646;
    }
`
export const ForgotPassword = styled.p`
    font-size: 12px;
    margin-top: 5px;
    color: #d1d1d1;
    opacity: 0.8;
    transition: 150ms ease-in-out;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
        opacity: 1;
    }
`
export const LoginGoogleButton = styled.button`
    width: 100%;
    padding: 12.5px ;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #FFFFFF;
    border: 0.5px solid #d1d1d1;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    transition: background-color 250ms ease-in-out;
    &:hover {
        background-color: #2c2c2c;
    }
`
export const Icon = styled.img`
    margin-left: 10px;
    max-width: 20px;
`