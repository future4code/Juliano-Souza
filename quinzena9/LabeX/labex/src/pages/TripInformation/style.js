import styled from 'styled-components'
import { BsArrowRight } from "react-icons/bs";

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
    width: 50%;
    padding-left: 10%;
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
    width: 110%;
`
export const ImageWrapper = styled.div`
    width: 50%;
    background-image: url(${p => p.backgroundImage});
    background-position: center left;
    background-repeat: no-repeat;
    background-size: auto;
    height: 100%;
    /* background-color: darkseagreen; */
`
export const Details = styled.div`
    height: 100%;
    width: 100%;
    padding: 0 0 0 150px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
`
export const TitleDetails = styled.span`
    margin-left: -22px;
    border-left: 2px solid white;
    padding: 0 0 0 20px;
    margin-bottom: 10px;
    font-size: 34px;
    font-weight: 700;
    letter-spacing: -1px;
`
export const SubtitleDetails = styled.span`
    font-weight: 500;
    margin: 2px 0;
`
export const RedirectBox = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ArrowIcon = styled(BsArrowRight)`
    font-size: 24px;
    margin-right: 10px;
`
export const RedirectParagraph = styled.p`
    font-size: 14px;
`



export const AboutTrip = styled.div`
    grid-area: AboutTrip;
    /* background-color: darkturquoise; */
    position: relative;
`
export const ContentOne = styled.div`
    padding-left: 50px;
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
    width: 80%;
`

export const PlanetsAvailable = styled.div`
    grid-area: PlanetsAvailable;
    padding: 0 40px;
`
export const PlanetCardsView = styled.div`
    height: 100%;
    height: 80%;
`