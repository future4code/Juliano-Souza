import styled from 'styled-components'
import { Link } from "react-router-dom"

 
// Container
export const Wrapper = styled.div`
    width: 290px;
    height: 460px;
    background: ${p => p.theme.backgroundWrapper};
    border-radius: 10px;
    display: grid;
    grid: 10% 70% 20% / 1fr;
    position: relative;
    grid-template-areas: 
    'Header'
    'Main'
    'Footer'
    ;
`

// Header
export const Header = styled.div`
    grid-area: Header;
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    color: ${p => p.theme.text};
`
export const MatchesBtnWrapper = styled.div`
    width: 100px;
    height: 55%;
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
    display: flex;
    justify-content: center;
    align-items: center;
`
export const AlertImage = styled.img`
    max-width: 180px;
`
