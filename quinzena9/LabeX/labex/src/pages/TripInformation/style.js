import styled from 'styled-components'

// Lib
import { FaArrowLeft } from "react-icons/fa";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid: 8vh 60vh 60vh 60vh 5vh / 1fr;
    grid-template-areas: 
        'Header'
        'Apresentation'
        'AboutTrip'
        'PlanetsAvailable'
        'Footer'
    ;
`
export const Apresentation = styled.div`
    grid-area: Apresentation;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const TextWrapper = styled.div`
    padding-left: 15%;
    width: 50%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
`
export const Title = styled.h1`
    font-size: 140px;
`
export const TransformTitle = styled.span`
    letter-spacing: -14px;
`
export const Paragraph = styled.p`
    font-size: 16px;
    width: 100%;
`
export const ImageWrapper = styled.div`
    width: 50%;
    height: 100%;
`
export const AboutTrip = styled.div`
    grid-area: AboutTrip;
    position: relative;
`
export const ContentOne = styled.div`
    padding-left: 10%;
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
export const ContentTwo = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    right: 0;
`
export const InfoTitle = styled.h3`
    font-size: 32px;
    margin-bottom: 15px;
`
export const InfoParagraph = styled.p`
    font-size: 14px;
    width: 100%;
`
export const InfoParagraphTwo = styled.p`
    font-size: 14px;
    width: 85%;
`
export const PlanetsAvailable = styled.div`
    grid-area: PlanetsAvailable;
    padding: 0 10%;
`
export const PlanetCardsView = styled.div`
    max-width: 98vw;
    height: 80%;
    display: flex;
    flex-direction: row;
    gap: 8px;
    scroll-behavior: smooth;
    justify-content: flex-start;
    overflow-x: hidden;
`
// Icon

export const InfoBox = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`
export const ArrowBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100px;
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