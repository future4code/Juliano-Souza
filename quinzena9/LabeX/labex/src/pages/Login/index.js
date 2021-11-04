// Styles
import { Container, Section, AuthWrapper, SignInText, WelcomeBackText, InputBox, Input } from './style'

// Components
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

export function Login() {
    return (
        <Container>
            <Header buttonText='Voltar'/>
            <Section>
                <AuthWrapper>
                    <SignInText>Faça seu login</SignInText>
                    <WelcomeBackText>Bem vindo de volta.</WelcomeBackText>
                    <InputBox>
                        <Input type='text' placeholder='Digite seu e-mail'></Input>
                        <Input type='password' placeholder='Digite sua senha'></Input>
                    </InputBox>
                    <Button text='Fazer Login' size='100%' type='submit'/>
                </AuthWrapper>
            </Section>
            <Footer/>
        </Container>
    )
}