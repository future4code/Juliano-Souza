import styled from 'styled-components'

export const AlertMessage = styled.p`
    text-align: center;
    font-size: 14px;
    width: 90%;
    color: ${p => p.theme.text};
`
export const AlertWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`
export const AlertImage = styled.img`
    max-width: 180px;
`