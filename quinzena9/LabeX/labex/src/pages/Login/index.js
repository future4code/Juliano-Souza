// Styles
import { Container, Section, AuthWrapper, SignInText, WelcomeBackText, InputBox, Input, ForgotPassword, LoginGoogleButton, Icon } from './style'

// Assets
import GoogleIcon from '../../assets/Images/search.png'

// Components
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

export function Login() {
    return (
        <Container>
            <Header buttonText='Voltar' route='/'/>
            <Section>
                <AuthWrapper>
                    <SignInText>Faça seu Login</SignInText>
                    <WelcomeBackText>Bem vindo de volta</WelcomeBackText>
                    <InputBox>
                        <Input type='text' placeholder='Digite seu e-mail'></Input>
                        <Input type='password' placeholder='Digite sua senha'></Input>
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