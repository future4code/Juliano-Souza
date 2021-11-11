import styled, { keyframes } from 'styled-components'

const is_rotating = keyframes`
    to {
    transform: rotate(1turn);
    }
`
export const LoaderCircle = styled.div`
    animation: ${is_rotating} 1s infinite;
    border: 6px solid #272727;
    border-radius: 50%;
    border-top-color: #474BFF;
    height: 90px;
    width: 90px;
    margin: 0 auto;
    margin-top: 7%;
`