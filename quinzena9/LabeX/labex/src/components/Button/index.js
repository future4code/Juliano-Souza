// Styles
import { ButtonType, LinkRouter } from './style'

export function Button({ text, size, margin, route }) {

    return (
        <ButtonType size={size} margin={margin}>
            {route ? 
            <LinkRouter to={route}>
                {text}
            </LinkRouter>
            :
            text
            }
        </ButtonType>
    )
}