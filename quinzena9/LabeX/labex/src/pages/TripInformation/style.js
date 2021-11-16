import styled from 'styled-components'
import { Link } from "react-router-dom";


// Assets
import Blob from '../../assets/Images/blob.svg'
import Blob2 from '../../assets/Images/blob-trip.svg'

// Lib
import { FaAngleLeft } from "react-icons/fa";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid: 8vh 40vh 60vh 60vh 5vh / 1fr;
    grid-template-areas: 
        'Header'
        'Apresentation'
        'AboutTrip'
        'PlanetsAvailable'
        'Footer'
    ;
    @media (max-width: 805px) {
        grid: 8vh 30vh 60vh 60vh 5vh / 1fr;
        grid-template-areas: 
            'Header'
            'Apresentation'
            'AboutTrip'
            'PlanetsAvailable'
            'Footer'
        ;
    }
`
export const Apresentation = styled.div`
    grid-area: Apresentation;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${Blob2});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

`
export const TextWrapper = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-end;
    @media (max-width: 805px) {
        width: 100%;
        padding-left: 0;
        align-items: center;
        background-image: url(${Blob});
        background-size: 70%;
        background-position: center;
        background-repeat: no-repeat;
        height: 100%;
    }
`
export const Title = styled.h1`
    margin-right: -10%;
    font-size: 140px;
    @media (max-width: 805px) {
        font-size: 120px;
        margin-right: 0;
    }
`
export const TransformTitle = styled.span`
    letter-spacing: -14px;
`
export const ImageWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    width: 50%;
    height: 100%;
    @media (max-width: 805px) {
        display: none;

    }
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
    @media (max-width: 805px) {
        font-size: 24px;
    }
`
export const InfoParagraph = styled.p`
    font-size: 14px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`
export const InfoParagraphTwo = styled.p`
    font-size: 14px;
    width: 85%;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
`
export const PlanetsAvailable = styled.div`
    grid-area: PlanetsAvailable;
    margin: 0 auto;
    width: 95%;
    position: relative;
`
export const PlanetCardsView = styled.div`
    max-width: 94vw;
    height: 70%;
    display: flex;
    flex-direction: row;
    scroll-behavior: smooth;
    justify-content: flex-start;
    overflow-x: hidden;
    gap: 4px;
`
export const LinkRouter = styled(Link)`
    color: inherit;
    text-decoration: none;
    min-width: 250px;
`
// Icon

export const InfoBox = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
`
export const ArrowLeftBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 80%;
    position: absolute;
    top: 15%;
    right: -2.5vw;
    z-index: 1;
    cursor: pointer;
    &:hover {
        background: linear-gradient(0deg, transparent 0%, #000000 50%, transparent 100%);
    }
`
export const LeftArrow = styled(FaAngleLeft)`
    font-size: 34px;
    transition: opacity 200ms ease-in-out;

`
export const RightArrow = styled(LeftArrow)`
    font-size: 34px;
    transform: rotate(180deg);
`
export const ArrowRigthBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 80%;
    position: absolute;
    top: 15%;
    left: -3vw;
    z-index: 1;
    cursor: pointer;
    &:hover {
        background: linear-gradient(0deg, transparent 0%, #000000 50%, transparent 100%);
    }
`

// Loader 

export const LoaderWrapper = styled.div`
    height: 65%;
    width: 100%;
    display: grid;
    align-items: center;
`