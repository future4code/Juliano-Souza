import Error404 from '../../../assets/404-error.png'
import { AlertWrapper, AlertImage, AlertMessage } from './style'

export function BadRequest() {

    return (
        <AlertWrapper>
            <AlertImage src={Error404} alt='Error Image'/>
            <AlertMessage>Um erro ocorreu na sua solicitação, por favor, <strong>tente</strong> novamente</AlertMessage>
        </AlertWrapper>
    )
}