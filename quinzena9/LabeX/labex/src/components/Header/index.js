// Styles
import { Container, Login, LinkRouter } from './style'


export function Header({buttonText, route}) {
    return (
        <Container>
            <Login>
                <LinkRouter to={route}>
                    {buttonText}
                </LinkRouter>
            </Login>
        </Container>
    )
}