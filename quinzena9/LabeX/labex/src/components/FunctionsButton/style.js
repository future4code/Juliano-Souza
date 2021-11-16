import styled from 'styled-components'

export const Button = styled.div`
    font-size: 14px;
    padding: 8px;
    display: flex;
    align-items: center;
    transition: 200ms ease-in-out;
    text-transform: uppercase;
    border: 1px solid #B5B5B5;
    background-color: transparent;
    &:hover {
        cursor: pointer;
        border-color: #FFFFFF;
    }
`