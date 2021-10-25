import styled, { keyframes } from 'styled-components'
import { generalColors } from '../../constants/colors'

const is_rotating = keyframes`
    to {
    transform: rotate(1turn);
    }
`
export const LoaderCircle = styled.div`
    animation: ${is_rotating} 1s infinite;
    border: 3px solid ${p => p.theme.button};
    border-radius: 50%;
    border-top-color: ${generalColors.red};
    height: 60px;
    width: 60px;
    margin: 20% auto;
`