import styled from "styled-components";

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
`
export const SignInText = styled.h3`
    font-size: 35px;
`
export const WelcomeBackText = styled.p`
    font-size: 20px;
    color: #B5B5B5;
`
export const InputBox = styled.div`
    margin: 20px 0;
    width: 100%;
    height: 120px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`
export const Input = styled.input`
    width: 100%;
    padding: 0 10px;
    height: 40px;
    margin-bottom: 5px;
    border: none;
    font-family: 'Montserrat', sans-serif;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    background-color: #2c2c2c;
    color: #FFFFFF;
`