import styled from 'styled-components'
import { themes } from '../../constants/colors'

 
// Container
export const Wrapper = styled.div`
    width: 290px;
    height: 80vh;
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
    background-color: ${themes.darkMode.backgroundWrapper};
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    color: ${themes.darkMode.text};
`
export const MatchesBtnWrapper = styled.div`
    width: 100px;
    height: 50%;
    background-color: ${themes.darkMode.button};
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
    color: ${themes.darkMode.text};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
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
    background: ${themes.darkMode.backgroundWrapper};
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ProfileCard = styled.div`
    width: 95%;
    height: 100%;
    background-image: ${props => `url(${props.profilePhoto})`};
    background-position: center top;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    border-radius: 8px;
`
export const ProfileInfo = styled.div`
    width: 100%;
    height: 80px;
    background: ${`linear-gradient(transparent 5%, ${themes.darkMode.backgroundWrapper} 55%)`};
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    align-items: flex-start;
    color: ${themes.darkMode.text};
    padding: 0 10px;
`
export const Name = styled.span`
    font-weight: 600;
    font-size: 18.5px;
`
export const Age = styled.span`
    margin-left: 8px;
    font-weight: 500;
    font-size: 14px;
`
export const Activity = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => props.profileAge % 2 === 0 ? `${themes.darkMode.online}` : `${themes.darkMode.offline}`};
    display: inline-block;
    margin-left: 5px;
`
export const Log = styled.span`
    margin-left: 3px;
    font-weight: 500;
    font-size: 10px;
`
export const ProfileDescription = styled.p`
    font-size: 12px;
    color: ${themes.darkMode.secondaryText};

`

// Footer
export const Footer = styled.div`
    grid-area: Footer;
    background-color: ${themes.darkMode.backgroundWrapper};
    border-radius: 0 0 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Reload = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${themes.darkMode.button};
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-size: 30px;
    color: white;
    cursor: pointer;
    &:hover {
        filter: brightness(.95);
    }
    &:active {
        transform: scale(0.95);
    }
`
export const Dislike = styled(Reload)`
    width: 50px;
    height: 50px;
`
export const Like = styled(Dislike)`
    width: 70px;
    height: 70px;
    color: ${themes.darkMode.offline};
    margin: 0 10px;
    font-size: 40px;
`