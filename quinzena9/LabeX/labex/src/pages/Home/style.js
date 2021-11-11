import styled from "styled-components";

// Assets
import Blob from '../../assets/Images/blob.svg'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid: 8vh 87vh 5vh / 1fr;
    grid-template-areas: 
    'Header'
    'Main'
    'Footer'
    ;
`
export const Main = styled.div`
    grid-area: Main;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
export const Presentation = styled.div`
    width: 50%;
    background-color: #1c1c1c;
    height: inherit;
    padding: 0 35px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    @media (max-width: 730px) {
        width: 100%;
        background-image: url(${Blob});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 100%;
    }
`
export const Title = styled.h1`
    font-size: 50px;
    margin-bottom: 15px;
    @media (max-width: 1050px) {
        font-size: 40px;
    }
`
export const Description = styled.p`
    color: #B5B5B5;
    @media (max-width: 1050px) {
        font-size: 14px;
        color: #FFFFFF
    }
`
export const TitleDecorationBox = styled.span`
    width: 50%;
    overflow: hidden;
    height: 100%;
    display: grid;
    align-items: center;
    background-image: url(${Blob});
    background-size: 120%;
    background-position: center;
    background-repeat: no-repeat;
    @media (max-width: 730px) {
        display: none;
    }
`
export const TitleDecoration = styled.span`
    font-size: clamp(64px, 24vw + 0.1rem, 250px);
    font-weight: 700;
    letter-spacing: -22px;
    margin-left: -25px;
    @media (max-width: 1050px) {
        font-size: 14px;
        font-size: clamp(64px, 24vw + 0.1rem, 180px);
    }
`