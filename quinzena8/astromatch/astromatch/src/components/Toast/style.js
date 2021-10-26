import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
    position: absolute;
    margin-top: -40px;
    width: inherit;
    height: 30px;
`
const handleOpacityAnimation = keyframes`
    0% {
        opacity: 0;
    }
    20% {
        opacity: 0.5;
    }
    40% {
        opacity: 1;
    }
    60% {
        opacity: 1;
    }
    80% {
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
`
export const Wrapper = styled.div`
    height: inherit;
    background-color: ${p => p.toast === 1 ? '#FE363690' : p.toast === 2 ? '#20C4FA90' : '#80FF8090'};
    padding: 2.5px, 5px;
    display: grid;
    place-items: center;
    color: ${p => p.theme.text};
    border-radius: 5px;
    animation: ${handleOpacityAnimation} 1.25s ease-in-out infinite alternate;
`
export const Message = styled.p`
    font-size: 13px;
`