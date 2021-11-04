// Styles
import { Container, Logo, Login } from './style'

// Assets
// import LogoImage from '../../assets/Images/Labex.png'

export function Header({buttonText}) {
    return (
        <Container>
            {/* <Logo src={LogoImage}/> */}
            <Login>{buttonText}</Login>
        </Container>
    )
}