import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiMenuFill } from "react-icons/ri";

// Assets
import styled from 'styled-components'
import blob from '../../assets/Images/blob-grey.svg'


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
    height: 450px;
    background-color: #2C2C2C;
    border-radius: 12px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    position: relative;
    @media (max-width: 650px) {
        width: 95%;
        /* border-radius: 0; */
        padding: 20px 10px;
    }
`
export const PlanetCardsView = styled.div`
    max-width: 90vw;
    height: 80%;
    display: flex;
    flex-direction: row;
    scroll-behavior: smooth;
    justify-content: flex-start;
    overflow-x: hidden;
    gap: 4px;
`
export const InfoTitle = styled.h3`
    font-size: 75px;
    letter-spacing: -4px;
    @media (max-width: 650px) {
        font-size: 50px;
    }
`
export const ArrowBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100px;
    @media (max-width: 550px) {
        width: 60px;
    }
`
export const LeftArrow = styled(FaAngleLeft)`
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
    justify-content: space-between;
    padding-right: 15px;
    padding-left: 5px;
    width: 100%;
    margin-top: -8px;
    /* @media (max-width: 550px) {
        display: flex;
        flex-flow: column;
        align-items: center;
        padding-bottom: 10px;
    } */
`
export const LinkRouter = styled(Link)`
    color: inherit;
    text-decoration: none;
    min-width: 250px;
`
export const ButtonContainer = styled.div`
    margin-top: 15px;
    height: 100%;
`
export const ArrowRigthBox = styled.div`
    display: ${p => p.menuOpen ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 65%;
    position: absolute;
    top: 30%;
    left: 0;
    z-index: 1;
    cursor: pointer;
    &:hover {
        background: linear-gradient(0deg, transparent 0%, #00000070 50%, transparent 100%);
    }
`
export const ArrowLeftBox = styled.div`
    display: ${p => p.menuOpen ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 65%;
    position: absolute;
    top: 30%;
    right: 0;
    z-index: 1;
    cursor: pointer;
    &:hover {
        background: linear-gradient(0deg, transparent 0%, #00000070 50%, transparent 100%);
    }
`
export const RouteLink = styled(Link)`
    color: inherit;
    text-decoration: none;
`
// Menu
export const MenuIcon = styled(RiMenuFill)`
    font-size: 35px;
    cursor: pointer;
    display: ${p => p.menuOpen ? 'none' : 'block'};
    @media (max-width: 650px) {
        display: block;
    }
`
export const ButtonBox = styled.div`
    display: ${p => p.menuOpen ? 'block' : 'none'};
    @media (max-width: 650px) {
        display: none;
    }
`
// Conditional

export const CardSection = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
`
export const ButtonAdminSection = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`