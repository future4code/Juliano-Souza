import styled from 'styled-components'
import { generalColors } from '../../constants/colors'

 
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
    background-color: ${p => p.theme.backgroundWrapper};
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    color: ${p => p.theme.text};
    transition: 300ms ease-in-out;
`
export const MatchesBtnWrapper = styled.div`
    width: 100px;
    height: 50%;
    background-color: ${p => p.theme.button};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    transition: 300ms ease-in-out;
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

// Main
export const Main = styled.div`
    grid-area: Main;
    display: grid;
    place-items: center;
`
export const CardWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: ${p => p.theme.backgroundWrapper};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 300ms ease-in-out;
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
    height: 70px;
    background: linear-gradient(transparent 5%, #EEEEEE 45%);
    background: linear-gradient(transparent 5%, #EEEEEE 45%);
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    align-items: flex-start;
    color: ${p => p.theme.text};
    padding: 0 10px;
    transition: 300ms ease-in-out;
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
    background-color: ${props => props.profileAge % 2 === 0 ? `${generalColors.green}` : `${generalColors.red}`};
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
    color: ${p => p.theme.secondaryText};
    transition: 300ms ease-in-out;

`

// Footer
export const Footer = styled.div`
    grid-area: Footer;
    background-color: ${p => p.theme.backgroundWrapper};
    border-radius: 0 0 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 300ms ease-in-out;
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
    transition: 300ms ease-in-out;
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
    color: ${generalColors.red};
    margin: 0 10px;
    font-size: 40px;
    transition: 300ms ease-in-out;
`