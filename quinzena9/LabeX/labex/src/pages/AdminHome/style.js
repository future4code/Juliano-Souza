import styled from 'styled-components'
import blob from '../../assets/Images/blob-grey.svg'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


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
    height: 80%;
    background-color: #2C2C2C;
    border-radius: 12px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
`
export const PlanetCardsView = styled.div`
    max-width: 90vw;
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
    @media (max-width: 805px) {
        font-size: 24px;
    }
`
export const InfoBox = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    margin: 15px 0;
`
export const ArrowBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100px;
    @media (max-width: 550px) {
        width: 60px;
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
    @media (max-width: 550px) {
        font-size: 24px;
    }
`
export const RightArrow = styled(LeftArrow)`
    font-size: 34px;
    transform: rotate(180deg);
    @media (max-width: 550px) {
        font-size: 24px;
    }
`
export const TripInfoBox = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: space-between;
    padding-right: 15px;
    padding-left: 5px;
`
export const LinkRouter = styled(Link)`
    color: inherit;
    text-decoration: none;
    min-width: 250px;
`