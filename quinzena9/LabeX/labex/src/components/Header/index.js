import { useNavigate } from 'react-router'

// Styles
import { Container, Login, Logout, LinkRouter } from './style'



export function Header({buttonText, route}) {

    let navigate = useNavigate()

    let token = localStorage.getItem('Token')

    const logOut = () => {
        localStorage.removeItem('Token')
        navigate('/')
    
    }

    return (
        <Container>
            <Login>
                <LinkRouter to={route}>
                    {buttonText}
                </LinkRouter>
            </Login>
            {token && <Logout onClick={logOut}>SAIR</Logout>}
        </Container>
    )
}