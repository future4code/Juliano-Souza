import styled from 'styled-components'

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
    scrollbar-width: none;
    ::-webkit-scrollbar {
    background-color: ${p => p.theme.text};
    width: 0.001px;
    }
`
export const Card = styled.div`
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