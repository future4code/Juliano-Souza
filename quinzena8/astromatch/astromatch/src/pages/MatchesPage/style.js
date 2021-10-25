import styled from 'styled-components'
import { Link } from "react-router-dom"

// Container
export const Wrapper = styled.div`
    width: 290px;
    height: 80vh;
    background-color: ${p => p.theme.backgroundWrapper};
    border-radius: 10px;
    display: grid;
    grid: 10% 70% 20% / 1fr;
    grid-template-areas: 
    'Header'
    'Main'
    'Footer'
    ;
`

// Header
export const Header = styled.div`
    grid-area: Header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    color: ${p => p.theme.text};
`
export const MatchesBtnWrapper = styled.div`
    width: 85px;
    height: 50%;
    background-color: ${p => p.theme.button};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
`
export const MatchesBtn = styled.button`
    font: 500 10px 'Montserrat', sans-serif;
    text-transform: uppercase;
    cursor: pointer;
    width: inherit;
    height: 100%;
    border: none;
    background-color: transparent;
    color: ${p => p.theme.text};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const LinkRouter = styled(Link)`
    text-decoration: none;
    color: ${p => p.theme.text};
`

// Main
export const Main = styled.div`
    grid-area: Main;
    display: grid;
    place-items: center;
`
export const CardWrapper = styled.div`
    width: 100%;
    height: 100%;
    color: ${p => p.theme.text};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: auto;
    ::-webkit-scrollbar {
    background-color: ${p => p.theme.text};
    width: 0.001px;
    }
`
export const ProfileCard = styled.div`
    width: 95%;
    min-height: 60px;
    background-color: ${p => p.theme.button};
    margin-bottom: 6px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px;
    border-radius: 8px;
    &:hover {
        filter: brightness(0.90);
        cursor: pointer;
    }
    
`
export const Avatar = styled.div`
    background-image: ${props => props.avatar && `url(${props.avatar})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    width: 45px;
    height: 45px;
    border-radius: 50%;
`
export const InfoWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    
`
export const Name = styled.span`
    font-size: 14px;
    font-weight: 500;
`
export const Description = styled.span`
    font-size: 12px;
    color: ${p => p.theme.secondaryText};
    max-width: 20ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
export const AlertMessage = styled.p`
    text-align: center;
    font-size: 14px;
    width: 90%;
    color: ${p => p.theme.text};
`

// Footer
export const Footer = styled.div`
    grid-area: Footer;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const Reload = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${p => p.theme.button};
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-size: 30px;
    color: ${p => p.theme.text};
    cursor: pointer;
    &:hover {
        filter: brightness(0.98);
    }
    &:active {
        transform: scale(0.95);
    }
`