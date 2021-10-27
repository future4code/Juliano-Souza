import arrow from '../../../assets/arrow-and-bow.png'
import { AlertWrapper, AlertImage, AlertMessage } from './style'

export function NoMatchAlert() {
    return (
        <AlertWrapper>
            <AlertImage src={arrow} alt={'Arrow Image'}/>
            <AlertMessage>Ainda não há matches, continue <strong>curtindo</strong> novos perfis</AlertMessage>
        </AlertWrapper>
    )
}