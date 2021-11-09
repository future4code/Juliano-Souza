import { useContext } from 'react'
import { PublicContext } from '../../contexts/PublicContext'
import { login } from '../../services/requests'

// Styles
import { Container, Section, AuthWrapper, SignInText, WelcomeBackText, InputBox, Input, ForgotPassword, LoginGoogleButton, Icon } from './style'

// Assets
import GoogleIcon from '../../assets/Images/search.png'

// Components
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

export function Login() {

    const { loginValues, setLoginValues } = useContext(PublicContext)

    return (
        <Container>
            <Header buttonText='Voltar' route='/'/>
            <Section>
                <AuthWrapper onSubmit={(e) => login(e, loginValues, setLoginValues)}>
                    <SignInText>Faça seu Login</SignInText>
                    <WelcomeBackText>Bem vindo de volta</WelcomeBackText>
                    <InputBox>
                        <Input type='text' value={loginValues.email} onChange={(e) => setLoginValues({...loginValues, email: e.target.value})} placeholder='Digite seu e-mail'></Input>
                        <Input type='password' value={loginValues.password} onChange={(e) => setLoginValues({...loginValues, password: e.target.value})} placeholder='Digite sua senha'></Input>
                        <ForgotPassword>Esqueceu a senha?</ForgotPassword>
                    </InputBox>
                    <Button text='Fazer Login' size='100%' type='submit' />
                    <LoginGoogleButton>Entrar com o Google <Icon src={GoogleIcon} alt='Google Logo'/></LoginGoogleButton>
                </AuthWrapper>
            </Section>
            <Footer/>
        </Container>
    )
}