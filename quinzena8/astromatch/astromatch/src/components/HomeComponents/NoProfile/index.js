import Caring from '../../../assets/caring.png'
import { AlertWrapper, AlertImage, AlertMessage } from './style'

export function NoProfile() {
    return (
        <AlertWrapper>
            <AlertImage src={Caring} alt='Image'/>
            <AlertMessage>Oops, os perfis <strong>acabaram</strong>! Por favor, clique no botão de reset.</AlertMessage>
        </AlertWrapper>
    )
}