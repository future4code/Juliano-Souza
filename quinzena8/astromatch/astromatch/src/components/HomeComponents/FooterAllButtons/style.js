import styled from 'styled-components'
import { generalColors } from '../../constants/colors'

export const Footer = styled.div`
    grid-area: Footer;
    border-radius: 0 0 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Reload = styled.button`
    border: none;
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
`