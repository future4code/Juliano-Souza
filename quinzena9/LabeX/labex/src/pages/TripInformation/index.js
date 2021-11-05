// Styles
import { Container, Apresentation, TextWrapper, ImageWrapper, Title, TransformTitle, AboutTrip, ContentOne, ContentTwo, InfoTitle, InfoParagraph, PlanetsAvailable, Paragraph, InfoParagraphTwo, PlanetCardsView } from './style'

// Assets
import  Mercury from '../../assets/Images/planets/mercury.png'

// Components
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CardPlanet } from '../../components/CardPlanet'
import { Astronaut } from '../../assets/animation/Astronaut'

export function TripInformation() {
    return (
        <Container>
            <Header buttonText='Home' route='/'/>
            <Apresentation>
                <TextWrapper>
                    <Title><TransformTitle>LabeX</TransformTitle></Title>
                    <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Paragraph>
                </TextWrapper>
                <ImageWrapper>
                    <Astronaut/>
                </ImageWrapper>
            </Apresentation>
            <AboutTrip>
                <ContentOne>
                    <InfoTitle>Vôo para outro planeta</InfoTitle>
                    <InfoParagraph>O ônibus espacial está equipado com tudo que você vá precisar com muito conforto. A bordo do foguete não existem apenas cabines separadas para passageiros, refeitório e salões. Existem também clubes fitness, cinemas, centros científicos e de entreterimento.</InfoParagraph>
                </ContentOne>
                <ContentTwo>
                    <InfoTitle>Tecnologias</InfoTitle>
                    <InfoParagraphTwo>A tecnologia faz parte da vida dos residentes. Toda infraestrutura fornece segurança completa, esporte e playgrounds inteligentes, estradas e calçadas com navegação clara e transparente.</InfoParagraphTwo>
                </ContentTwo>
            </AboutTrip>
            <PlanetsAvailable>
                <InfoTitle>Planetas disponíveis</InfoTitle>
                <PlanetCardsView>
                    <CardPlanet planetImage={Mercury}/>
                </PlanetCardsView>
            </PlanetsAvailable>
            <Footer/>
        </Container>
    )
}