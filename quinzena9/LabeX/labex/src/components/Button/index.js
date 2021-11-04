import { ButtonType } from './style'

export function Button({ text, size, margin }) {
    return (
        <ButtonType size={size} margin={margin}>
            {text}
        </ButtonType>
    )
}