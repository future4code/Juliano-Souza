import styled from 'styled-components'
import { generalColors } from '../../../constants/colors'

export const Card = styled.div`
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
    height: 65%;
    transition: background 300ms linar;
    background: ${p => p.theme.id === 1 ? `linear-gradient(transparent 65%, ${p.theme.backgroundWrapper} 78%)` : `linear-gradient(transparent 30%, ${p.theme.backgroundWrapper} 80%)`};
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    align-items: flex-start;
    color: ${p => p.theme.text};
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

`