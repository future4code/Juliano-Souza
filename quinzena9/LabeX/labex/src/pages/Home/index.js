// Styles
import { Container, Main, Presentation, Title, Description, Button, TitleDecorationBox, VerticalShadowBox, TitleDecoration } from './style'

// Components
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export function Home() {
    return (
        <Container>
            <Header/>
            <Main>
                <Presentation>
                    <Title>O Futuro Chegou</Title>
                    <Description>Os oito planetas do sistema solar estão abertos a novos habitantes.</Description>
                    <Description>Que tal descobrir uma nova vida e fazer um voo seguro e confortável para o planeta dos seus sonhos.</Description>
                    <Button>Escolher um planeta</Button>
                </Presentation>
                <TitleDecorationBox>
                    <TitleDecoration>LabeX</TitleDecoration>
                </TitleDecorationBox>
            </Main>
            <Footer/>
        </Container>
    )
}