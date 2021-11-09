import styled from 'styled-components'
import blob from '../../assets/Images/blob-grey.svg'
import { FaArrowLeft } from "react-icons/fa";


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
    background-image: url(${blob});
    background-position: center;
    background-size: 75%;
`
export const AdminWrapper = styled.div`
    padding: 20px;
    width: 80%;
    height: 90%;
    background-color: #2C2C2C;
    border-radius: 12px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
`
export const PlanetCardsView = styled.div`
    max-width: 95vw;
    height: 70%;
    display: flex;
    flex-direction: row;
    scroll-behavior: smooth;
    justify-content: flex-start;
    overflow-x: hidden;
    gap: 4px;
`
export const InfoTitle = styled.h3`
    font-size: 32px;
    margin-bottom: 15px;
    @media (max-width: 805px) {
        font-size: 24px;
    }
`
export const InfoBox = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
`
export const ArrowBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100px;
    @media (max-width: 550px) {
        width: 80px;
    }
`
export const LeftArrow = styled(FaArrowLeft)`
    font-size: 34px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 200ms ease-in-out;
    &:hover {
        opacity: 1;
    }

`
export const RightArrow = styled(LeftArrow)`
    font-size: 34px;
    transform: rotate(180deg);
`