import styled from 'styled-components'

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