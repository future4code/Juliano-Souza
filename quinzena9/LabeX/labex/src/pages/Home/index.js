// Styles
import { Container, Main, Presentation, Title, Description, TitleDecorationBox, TitleDecoration } from './style'

// Components
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'

// Hooks

export function Home() {

    let token = localStorage.getItem('Token')

    return (
        <Container>
            <Header buttonText={token ? 'Admin' : 'Login'} route={ token ? '/admin' : '/login'}/>
            <Main>
                <Presentation>
                    <Title>O Futuro Chegou</Title>
                    <Description>Os oito planetas do sistema solar estão abertos a novos habitantes.</Description>
                    <Description>Que tal descobrir uma nova vida e fazer um voo seguro e confortável para o planeta dos seus sonhos.</Description>
                    <Button text='Escolher um planeta' size='200px' margin='20px 0 0 0' route='/trips/list'/>
                </Presentation>
                <TitleDecorationBox>
                    <TitleDecoration>LabeX</TitleDecoration>
                </TitleDecorationBox>
            </Main>
            <Footer/>
        </Container>
    )
}